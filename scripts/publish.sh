#!/bin/sh
if [[ ! ${CURRENT_BRANCH} =~ refs/tags/v(.+)$ ]]; then
    echo "Can only publish from tag commits, something is fishy..."
    echo "The branch ${CURRENT_BRANCH} was used!"
    exit 1
else
    VERSION=${BASH_REMATCH[1]}
fi

SEMVER_REGEX="^(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)(\\-.+)?$"

if [[ ${VERSION} =~ ${SEMVER_REGEX} ]]; then
    if [[ -z ${BASH_REMATCH[4]} ]]; then
        NPM_TAG_TYPE="latest"
    else
        NPM_TAG_TYPE="prerelease"
    fi
else
    echo "Invalid semver version format: ${VERSION}"
    exit 1
fi

echo "Releasing version: ${VERSION} with the tag: ${NPM_TAG_TYPE}"

docker run --rm -i -v $(pwd)/:/app -w /app node:lts /bin/bash -c "npm publish ./artifacts/npm.tgz --tag ${NPM_TAG_TYPE}"
