# Scripts

This directory contains utility scripts for the jonessite repository.

## check-mergeable-prs.js

A Node.js script that checks which open Pull Requests are ready to be merged.

### Usage

```bash
# Using npm script
npm run check:prs

# Or run directly
node scripts/check-mergeable-prs.js
```

### What it Checks

The script analyzes each open PR for:

1. **Draft status** - PRs marked as draft cannot be merged
2. **Merge conflicts** - PRs with conflicts must be resolved first
3. **CI status** - All checks must pass before merging
4. **Check runs** - All GitHub Actions workflows must complete successfully

### Output

The script provides:
- ✅ List of PRs ready to merge
- ❌ List of blocked PRs with reasons
- 📊 Summary statistics

### Requirements

- Node.js 18+ (for native fetch support)
- Internet connection to access GitHub API
- No authentication required for public repositories (but rate-limited to 60 requests/hour)

### Optional: Using with Authentication

To avoid rate limits, set a GITHUB_TOKEN environment variable:

```bash
GITHUB_TOKEN=your_token_here npm run check:prs
```

### Exit Codes

- `0` - Success (one or more PRs are ready to merge)
- `1` - No PRs ready to merge or error occurred
