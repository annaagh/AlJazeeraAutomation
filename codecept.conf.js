exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      smartwait: 10000,
      waitForTimeout: 10000,
      url: 'https://www.aljazeera.com/',
      browser: 'firefox',
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    MostReadPage: './pages/MostReadPage.js',
    LivestreamPage: './pages/livestreamPage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/most_read_steps.js',
      './step_definitions/livestream_steps.js',
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      resultsDir: './output/allure-results'
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  //tests: './tests/*_test.js',
  name: 'AlJazeeraAutomation'
}