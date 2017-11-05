# jab-paintings-website
Painter JAB personal website, based on Node.JS.

To run use (do "npm install" first):  
npm start (requires Heroku CLI)

Or (requires Heroku CLI too):  
DEBUG=jab-paintings-website:* heroku local web

Or (without Heroku):
DEBUG=jab-paintings-website:* node ./bin/www

To kill Node processes use (on Windows):  
taskkill /F /IM node.exe
