# Answer: Are There Open MRs That Can Be Merged?

**Date**: November 15, 2025

## Quick Answer

**NO** - There are currently **6 open Pull Requests**, but **none are ready to merge** at this time.

## Details

All 6 open PRs are Dependabot dependency updates that are currently blocked:

| PR # | Title | Author | Status | Reason |
|------|-------|--------|--------|--------|
| #199 | Bump vite from 7.1.9 to 7.2.2 | dependabot[bot] | ❌ Blocked | CI checks pending |
| #198 | Bump @vitest/coverage-v8 from 3.2.4 to 4.0.4 | dependabot[bot] | ❌ Blocked | CI checks pending |
| #197 | Bump vite from 7.1.9 to 7.1.12 | dependabot[bot] | ❌ Blocked | CI checks pending |
| #196 | Bump @vitejs/plugin-react-swc from 4.1.0 to 4.2.0 | dependabot[bot] | ❌ Blocked | CI checks pending |
| #195 | Bump vitest from 3.2.4 to 4.0.4 | dependabot[bot] | ❌ Blocked | CI checks pending |
| #194 | Bump actions/setup-node from 5 to 6 | dependabot[bot] | ❌ Blocked | CI checks pending |

## Why Are They Blocked?

All PRs have a "pending" CI status with no checks completed. The workflows should run automatically on pull requests, but appear not to have run yet.

## Action Items

1. **Investigate CI workflows**: Check GitHub Actions to see why workflows haven't run for these PRs
2. **Wait for CI completion**: Once CI checks complete and pass, these PRs can be merged
3. **Choose vite version**: PRs #197 and #199 both update vite - only one can be merged

## Recommended Merge Order (Once CI Passes)

1. **PR #194** - GitHub Actions update (independent)
2. **PR #199** OR **PR #197** - Choose the vite version you prefer
3. **PR #196** - @vitejs/plugin-react-swc update
4. **PR #195** - vitest update
5. **PR #198** - @vitest/coverage-v8 update

## Tool for Future Checks

A new tool has been added to automate this check:

```bash
npm run check:prs
```

See [docs/MERGEABLE_PRS.md](MERGEABLE_PRS.md) for full details.
