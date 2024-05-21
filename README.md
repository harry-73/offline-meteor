# Meteor3-rc1: offline issue reproduction

## How to use

1. Clone this repo
2. Run `meteor npm install`
3. Run `meteor`
4. Open `http://localhost:3000` in your browser

## Reproduction

- The user is auto-loggued
- Via Dev tools, on Network tab, put the browser offline
- In the app, add a new link (Text + url)
- The new link will be displayed (Client side)
- For the server side, the method message is in the queue
- Put back the browser on-line.
- Results:
    - the method is applied on server side but this.userId is undefined => throw an error
    - the entry is deleted from minimongo 
- Expected results: 
    -  Entry is added on server side into mongodb
    -  this.userId is defined on server side
- Issue:
    - The login message in the DDP is sent after the method message
