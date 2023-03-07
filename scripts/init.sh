#!/bin/sh
TIME_STAMP=$"`date "+%Y%m%d-%H%M"`"
echo '##vso[task.setvariable variable=TIME_STAMP]'${TIME_STAMP}

echo -e "@stratsys:registry=https://www.myget.org/F/stratsys-feed/npm/" >> ./.npmrc
echo -e "//www.myget.org/F/stratsys-feed/npm/:_authToken=${MYGET_API_KEY}" >> ./.npmrc

MFE_NAME=""
ARTIFACT_IMAGE="${MFE_NAME}-build-artifacts"
echo '##vso[task.setvariable variable=ARTIFACT_IMAGE]'${ARTIFACT_IMAGE}
