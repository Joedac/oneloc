#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# commit
git init
git add -A
git commit -m 'deploy'

# push on gitub pages
git push -f git@github.com:joedac/1loc.git master:gh-pages

cd -