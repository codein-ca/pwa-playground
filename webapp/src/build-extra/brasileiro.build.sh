#!/bin/bash
cd /usr/share/nginx/repos/step-by-step-calculator/webapp
git fetch
git checkout pwa.brasileiro 
git pull
ng build --prod
rm -rf /usr/share/nginx/repos/pwa.brasileiro
mkdir /usr/share/nginx/repos/pwa.brasileiro
mv /usr/share/nginx/repos/step-by-step-calculator/webapp/dist/webapp/* /usr/share/nginx/repos/pwa.brasileiro/

