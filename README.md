# How to setup
## Get a Google API Key 
Click [Here](https://developers.google.com/workspace/guides/create-project) for more information.
Make sure you secure your key.
## Setup your Project
Click [Here] (https://developers.google.com/sheets/api/quickstart/js#python-2.x) for more information.
## Change your Variables
### Google Sheets
In the getGoogleSheet, change the sheetId, sheetName(if applicable), and key variables to reflect your project. 
## App
In the App.jsx change the Global variables to reflect your spreadsheet structure.
## Spreadsheet Structure
Make sure the top row is your headers and make sure one is "Title". Other headers should be the names of your users. Under Title should list your items. Under each user name type the user name again in the columns that apply to them (you can add extra notes here if applicable in the sheet, it will not be reflected in the app). 