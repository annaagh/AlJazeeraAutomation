
# AlJazeera Automation

This project automates the validation of various sections on the Al Jazeera website using CodeceptJS with WebDriver. The tests are written in the BDD (Behavior-Driven Development) format using Gherkin syntax, with reporting enabled via Allure.

## Purpose

The goal of this automation is to verify the functionality and accessibility of key sections on the Al Jazeera website, including:

- **Most Read Section**: Ensuring the "Most popular" section is displayed and contains the correct number of posts on desktop and mobile.
- **Livestream Section**: Verifying the presence and functionality of the livestream player.

## Prerequisites

- Node.js (version 14 or higher)
- Firefox (for browser testing)

## Installation

### 1. Clone the repository
Clone the repository to your local machine:

```bash
git clone https://github.com/annaagh/AlJazeeraAutomation.git
cd AlJazeeraAutomation
```

### 2. Install dependencies
Install the required dependencies using npm:

```bash
npm install
```

This will install CodeceptJS, WebDriver, and Allure reporting.

### 3. Install WebDriver

To run tests with WebDriver, you need to ensure that the correct WebDriver.


## Running Tests

### 1. Run tests using CodeceptJS

To execute the tests, use the following command:

```bash
npx codeceptjs run --steps
```

This will run the tests in the terminal and display the steps as they execute.

### 2. Running Tests in Debug Mode

To run the tests in debug mode, which allows you to set breakpoints and inspect the execution:

```bash
npx codeceptjs run --debug
```

This command will allow you to interactively debug the test run.

### 3. View Test Reports with Allure

To generate and view reports after test execution, follow these steps:

1. Run tests with Allure enabled:
   ```bash
   npx codeceptjs run --reporter allure
   ```

2. Generate the Allure report:
   ```bash
   allure generate output/allure-results --clean -o output/allure-report
   ```

3. Serve the Allure report:
   ```bash
   allure serve output/allure-report
   ```

This will open a web interface where you can view detailed reports of the test results.

## Project Structure

- **features/**: Contains Gherkin feature files for BDD scenarios.
- **pages/**: Contains Page Object Model (POM) files for the website pages.
- **tests/**: Contains the actual test scripts that execute the tests.
- **node_modules/**: Contains the installed dependencies.
- **output/**: Contains the generated test reports and artifacts.
- **codecept.conf.js**: The configuration file for CodeceptJS.
- **package.json**: Contains the project dependencies and scripts.


