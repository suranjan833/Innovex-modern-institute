#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/push.sh "Your commit message"
# Or via npm: npm run push -- "Your commit message"

DEFAULT_MSG="Update site content and build ($(date '+%Y-%m-%d %H:%M'))"
COMMIT_MSG="${1:-$DEFAULT_MSG}"
BRANCH="$(git branch --show-current)"

echo "1/4 Running lint check..."
npm run lint

echo "2/4 Building React production bundle (dist/)..."
npm run build

echo "3/4 Staging and committing changes..."
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "$COMMIT_MSG"
else
  echo "No new changes to commit."
fi

echo "4/4 Pushing branch '$BRANCH' to GitHub (origin)..."
git push origin "$BRANCH"

echo "Done! React build is in dist/ and changes are pushed to origin/$BRANCH."
