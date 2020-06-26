#!/bin/sh
set -eo pipefail

cd src/environments
rm environment.prod.ts
touch environment.prod.ts
echo "export const environment = {  production: true,  api_port:'$API_PORT',  api_host:'$API_HOST'};" >> environment.prod.ts

exec "$@"