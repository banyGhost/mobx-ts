#!/usr/bin/env bash

currentPath=`pwd`

set -x
yarn run build
scp -r "${currentPath}/build/." root@139.155.117.88:/usr/local/nginx/html/
set +x
