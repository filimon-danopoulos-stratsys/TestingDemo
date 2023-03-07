#!/bin/sh
set -x
docker rmi ${ARTIFACT_IMAGE}
rm -rf ./artifacts
