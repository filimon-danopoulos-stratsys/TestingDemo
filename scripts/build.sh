#!/bin/sh
set -e
set -x

docker build --rm -t ${ARTIFACT_IMAGE} -f ./Dockerfile.build .
docker run --rm -i ${ARTIFACT_IMAGE} | tar zxfv -
