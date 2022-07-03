# Deploy a react/node app to Heroku
## Keeps API keys secret

#### Combines these two tutorials:
* https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
* https://www.youtube.com/watch?v=FcwfjMebjTU
* https://github.com/kubowania/crypto-dashboard-react/blob/main/index.js


## Overview to deploy React/Node app to Heroku

1. create a new project folder
2. $ npm init -y
3. alter the package.json file
```
"scripts": {
	"start" : "node server/index.js",
	"build" : "cd client && npm install && npm run build"
},
"engines": {
	"node" : "16.3.0" // REPLACE_WITH_YOUR_VERSION
}
```
4. Create a front end
```
  npx create-react-app client
  cd client
  rm -rf .git
```
5. Create an account on Heroku.com and create a new app
6. Install heroku command line tool
```
sudo npm i -g heroku `
heroku login `
git init
heroku git:remote -a insert-your-app-name-here
git add .
git commit -m "Deploy app to Heroku"
git push heroku master
```
7. Create a github repo as well and copy the URL. You can check which remotes to send repo to by using `git remote -v `
```
 git remote add <custom_name_for_this_remote> <github-url>
  git push <custom_name_for_this_remote> master 
```
## Hide API Keys
1. Create a .env file and populate with API keys like so:
```
MY_SECRET_FAKE_API_KEY=secret_fake_api_key_1234
```
2. Create a .gitignore file and populate with:
```
.env
```
3. Add require dotenv to node scripts
```
require('dotenv').config()
```
4. Reference env variable in node scripts as:
```
process.env.MY_SECRET_FAKE_API_KEY
```
