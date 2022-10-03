#!/usr/bin/env sh

sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install nodejs
# Check node version
node -v 
# v13.9.0
# Also, check the npm version
npm -v 

sh -c " 🔄Installing NPM"
npm install

sh -c "🔄🎯Building"
npm run build #:"$SERVER"

sh -c "🔄Installing firebase"
npm install -g firebase-tools

sh -c "✅Deply to $SERVER"
firebase deploy -P "$SERVER" --token "$TOKEN"