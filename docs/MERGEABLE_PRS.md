# Open Pull Requests - Mergeability Status

This document provides information about open Pull Requests in the repository and whether they are ready to be merged.

## Current Analysis (as of 2025-11-15)

### Open Pull Requests

The repository currently has **6 open Pull Requests** (excluding this PR #200):

1. **PR #199**: Bump vite from 7.1.9 to 7.2.2
   - **Author**: dependabot[bot]
   - **Status**: Pending CI checks
   - **Type**: Dependency update
   - **Ready to merge**: ⚠️ **No** - CI checks are still pending

2. **PR #198**: Bump @vitest/coverage-v8 from 3.2.4 to 4.0.4
   - **Author**: dependabot[bot]
   - **Status**: Pending CI checks
   - **Type**: Dependency update
   - **Ready to merge**: ⚠️ **No** - CI checks are still pending

3. **PR #197**: Bump vite from 7.1.9 to 7.1.12
   - **Author**: dependabot[bot]
   - **Status**: Pending CI checks
   - **Type**: Dependency update
   - **Ready to merge**: ⚠️ **No** - CI checks are still pending
   - **Note**: Being rebased by Dependabot; may conflict with PR #199

4. **PR #196**: Bump @vitejs/plugin-react-swc from 4.1.0 to 4.2.0
   - **Author**: dependabot[bot]
   - **Status**: Pending CI checks
   - **Type**: Dependency update
   - **Ready to merge**: ⚠️ **No** - CI checks are still pending

5. **PR #195**: Bump vitest from 3.2.4 to 4.0.4
   - **Author**: dependabot[bot]
   - **Status**: Pending CI checks
   - **Type**: Dependency update
   - **Ready to merge**: ⚠️ **No** - CI checks are still pending

6. **PR #194**: Bump actions/setup-node from 5 to 6
   - **Author**: dependabot[bot]
   - **Status**: Pending CI checks
   - **Type**: Dependency update (GitHub Actions)
   - **Ready to merge**: ⚠️ **No** - CI checks are still pending

### Summary

**Total Open PRs**: 6  
**Ready to Merge**: 0  
**Blocked/Pending**: 6  

### Blocking Reasons

All open PRs are currently blocked for the same reason:
- **CI checks have not completed** - The workflow runs appear to be pending with no status checks reported yet

### Recommendations

1. **Investigate CI Status**: The CI workflows should run on pull requests but appear to not have completed. Check:
   - GitHub Actions workflow runs for these PRs
   - Whether workflows are queued or failed to start
   - Repository settings for required status checks

2. **Dependency Conflicts**: Note that PR #197 and PR #199 both update `vite`, so they cannot both be merged. Choose one:
   - PR #199 (7.1.9 → 7.2.2) is the larger version bump
   - PR #197 (7.1.9 → 7.1.12) is a smaller, potentially safer update

3. **Merge Order Suggestion** (once CI passes):
   - Merge PR #194 first (GitHub Actions update - independent)
   - Then merge the remaining dependency updates in this order:
     - PR #199 or PR #197 (vite) - choose one
     - PR #196 (@vitejs/plugin-react-swc)
     - PR #195 (vitest)
     - PR #198 (@vitest/coverage-v8)

## How to Check PR Mergeability

### Manual Check via GitHub

1. Visit each PR page
2. Check for:
   - ✅ Green "Merge" button (indicates no conflicts and checks passed)
   - ⚠️ "Merging is blocked" message (indicates issues)
   - CI check status at the bottom of the PR

### Using the Script

A Node.js script has been created to automate this check:

```bash
node scripts/check-mergeable-prs.js
```

**Note**: This script requires either:
- No rate limiting from GitHub API (limited to 60 requests/hour for unauthenticated requests)
- Or a GITHUB_TOKEN environment variable set with a personal access token

### Using GitHub CLI

If you have the GitHub CLI installed:

```bash
gh pr list --state open --json number,title,mergeable,statusCheckRollup
```

## Criteria for Mergeability

A Pull Request is considered ready to merge when:

1. ✅ **Not a draft** - The PR must not be marked as a draft
2. ✅ **No merge conflicts** - The PR branch can be cleanly merged into the base branch
3. ✅ **All CI checks pass** - All required status checks and workflows complete successfully
4. ✅ **Approved** (if required) - Has the necessary number of approving reviews
5. ✅ **Up to date** (if required) - The PR branch includes all commits from the base branch

## Automated Checks

The repository has the following CI workflows that run on Pull Requests:

- **Coverage Badge** - Runs tests and generates coverage report
- **CodeQL Analysis** - Security scanning for vulnerabilities

Both workflows must complete successfully before a PR can be merged.
