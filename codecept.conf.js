const {
  setHeadlessWhen
} = require('@codeceptjs/configure');

//turn on headless mode when running with HEADLESS=true environment variable
//export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://localhost',
      show: true,
      browser: 'chromium'
    },
  },
  include: {
    I: './steps_file.js',
    LoginPage: './pages/LoginPage.js',

    loginPagePage: './pages/LoginPage.js',

    newPagePage: "./pages/NewPage.js",
  },
  bootstrap: null,
  mocha: {},
  name: 'playwright-codecept',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}