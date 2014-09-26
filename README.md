# Yo. Chrome Extension

Yo. extension for the Chrome browser.

## How to install

1. Clone the repo to your local machine and navigate to the project directory.

```
git clone https://github.com/tgrrtt/yo-chrome-extension.git
cd yo-chrome-extension
```

2. Get your own personal API key from the [Yo Developer Dashboard](http://dev.justyo.co/). Note that your Yo password is a numerical PIN just in case you forget what you entered when you first signed up.

3. Create a file in your *app/scripts* folder called *apikey.js* and add the following line of code with your API key:

`var secretkey = 'YOUR_API_KEY';`

4. Point your Chrome browser to 'chrome://extensions' and check the box for 'Developer Mode'. Then, click on 'Load unpacked extension...', navigate to your 'app' folder and click 'Select'.

5. Click on the purple box in the upper right hand of your browser and send a Yo! (recipient must follow your account in order to receive your YOs)