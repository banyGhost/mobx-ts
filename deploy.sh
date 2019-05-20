#!/usr/bin/env bash

set -x
yarn run build
rm -rf /usr/local/var/www
cp -r build/. /usr/local/var/www
set +x
