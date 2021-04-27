# Grocerease 
Grocerease is an automatic grocery inventory tracking service that focuses on eliminating a barrier to entry through merchant integration.

# Release Notes version Grocerease 1.0
NEW FEATURES: 
  Database containing grocery products was added
BUG FIXES:
  Product pictures show up and are no longer stuck on loading sign
KNOWN BUGS:
  Other purchases tab is not viewable unless the mouse hovers over its location

# Install Guide Grocerease 1.0
PRE-REQUISITES
  You must have Node.js 14.16.1 installed and configured before proceeding. See https://nodejs.dev/learn/how-to-install-nodejs
DEPENDENT LIBRARIES THAT MUST BE INSTALLED: 
  Install @material-ui packages when/if prompted. Common ones that need to be installed are: 
    @material-ui/core package
    @material-ui/install package
DOWNLOAD INSTRUCTIONS: 
  git clone https://github.com/taylorsmith1/Grocerease.git
BUILD:
  No build necessary for this app. 
INSTALLATION:
  Step 1: Launch terminal
  Step 2: cd into Grocerease/grocerease
  Step 3: switch to purchase-history-frontend branch “git checkout purchase-history-frontend”
  Step 4: type npm install (try npm run start after this is done)
  Step 5: type npm install any @material-ui packages you need 
  Step 6: type npm run start (repeat steps 5 and 6 until you are not prompted to download anymore packages, at which point npm run start will run the app) 
RUNNING APPLICATION:
  In the terminal, in the grocerease folder, type: npm run start

