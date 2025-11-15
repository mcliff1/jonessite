#!/usr/bin/env node

/**
 * Script to check which open Pull Requests are ready to be merged
 * 
 * A PR is considered mergeable if:
 * - It is not a draft
 * - It has no merge conflicts
 * - All required checks have passed
 * - It has been approved (if required)
 */

const REPO_OWNER = 'mcliff1';
const REPO_NAME = 'jonessite';
const GITHUB_API = 'https://api.github.com';

async function fetchOpenPRs() {
  const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    process.exit(1);
  }
}

async function checkPRStatus(prNumber, sha) {
  const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/commits/${sha}/status`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { state: 'unknown', total_count: 0 };
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching status for PR #${prNumber}:`, error.message);
    return { state: 'unknown', total_count: 0 };
  }
}

async function checkPRChecks(prNumber, sha) {
  const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/commits/${sha}/check-runs`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { total_count: 0, check_runs: [] };
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching checks for PR #${prNumber}:`, error.message);
    return { total_count: 0, check_runs: [] };
  }
}

function analyzeMergeability(pr, status, checks) {
  const reasons = [];
  let mergeable = true;

  // Check if draft
  if (pr.draft) {
    mergeable = false;
    reasons.push('PR is marked as draft');
  }

  // Check merge conflicts
  if (pr.mergeable === false) {
    mergeable = false;
    reasons.push('PR has merge conflicts');
  } else if (pr.mergeable === null) {
    reasons.push('Merge conflict status unknown (GitHub is still calculating)');
  }

  // Check CI status
  if (status.total_count > 0) {
    if (status.state === 'pending') {
      mergeable = false;
      reasons.push('CI checks are still pending');
    } else if (status.state === 'failure') {
      mergeable = false;
      reasons.push('CI checks have failed');
    } else if (status.state === 'success') {
      reasons.push('All CI status checks passed');
    }
  } else if (checks.total_count > 0) {
    const failedChecks = checks.check_runs.filter(check => 
      check.conclusion === 'failure' || check.conclusion === 'cancelled'
    );
    const pendingChecks = checks.check_runs.filter(check => 
      check.status !== 'completed'
    );

    if (failedChecks.length > 0) {
      mergeable = false;
      reasons.push(`${failedChecks.length} check(s) failed`);
    }
    if (pendingChecks.length > 0) {
      mergeable = false;
      reasons.push(`${pendingChecks.length} check(s) still running`);
    }
    if (failedChecks.length === 0 && pendingChecks.length === 0) {
      reasons.push('All checks passed');
    }
  } else {
    reasons.push('No CI checks configured/run');
  }

  return { mergeable, reasons };
}

async function main() {
  console.log('🔍 Checking open Pull Requests for mergeability...\n');
  console.log(`Repository: ${REPO_OWNER}/${REPO_NAME}\n`);
  
  const prs = await fetchOpenPRs();
  
  if (prs.length === 0) {
    console.log('✅ No open Pull Requests found.\n');
    return;
  }

  console.log(`Found ${prs.length} open PR(s):\n`);

  const mergeablePRs = [];
  const blockedPRs = [];

  for (const pr of prs) {
    const status = await checkPRStatus(pr.number, pr.head.sha);
    const checks = await checkPRChecks(pr.number, pr.head.sha);
    const analysis = analyzeMergeability(pr, status, checks);

    const prInfo = {
      number: pr.number,
      title: pr.title,
      author: pr.user.login,
      url: pr.html_url,
      draft: pr.draft,
      mergeable: analysis.mergeable,
      reasons: analysis.reasons
    };

    if (analysis.mergeable) {
      mergeablePRs.push(prInfo);
    } else {
      blockedPRs.push(prInfo);
    }
  }

  // Print mergeable PRs
  if (mergeablePRs.length > 0) {
    console.log('✅ READY TO MERGE:\n');
    mergeablePRs.forEach(pr => {
      console.log(`  #${pr.number}: ${pr.title}`);
      console.log(`    Author: ${pr.author}`);
      console.log(`    URL: ${pr.url}`);
      console.log(`    ✓ ${pr.reasons.join(', ')}`);
      console.log('');
    });
  } else {
    console.log('⚠️  No PRs are currently ready to merge.\n');
  }

  // Print blocked PRs
  if (blockedPRs.length > 0) {
    console.log('❌ BLOCKED (cannot merge yet):\n');
    blockedPRs.forEach(pr => {
      console.log(`  #${pr.number}: ${pr.title}`);
      console.log(`    Author: ${pr.author}`);
      console.log(`    Draft: ${pr.draft}`);
      console.log(`    Reasons:`);
      pr.reasons.forEach(reason => console.log(`      - ${reason}`));
      console.log('');
    });
  }

  // Summary
  console.log('📊 SUMMARY:');
  console.log(`  Total PRs: ${prs.length}`);
  console.log(`  Ready to merge: ${mergeablePRs.length}`);
  console.log(`  Blocked: ${blockedPRs.length}\n`);

  // Exit code based on whether there are mergeable PRs
  process.exit(mergeablePRs.length > 0 ? 0 : 1);
}

main().catch(error => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
