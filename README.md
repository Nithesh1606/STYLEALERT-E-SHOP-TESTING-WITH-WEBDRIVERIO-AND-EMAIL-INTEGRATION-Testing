# WebdriverIO Testing Project

This project contains automated tests for an E-shop clothes shopping web application using WebdriverIO. The tests include registration and login functionalities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Creating New Tests](#creating-new-tests)
- [Folder Structure](#folder-structure)
- [Additional Resources](#additional-resources)

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [Yarn](https://yarnpkg.com/) (v1.22.x or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/webdriverio-project.git
   cd webdriverio-project

## Running Tests

1. To execute tests in the register suite:

    ```bash
    npx wdio wdio.conf.js --suite register

2. To execute tests in the login suite:

    ```bash
    npx wdio wdio.conf.js --suite login

3. To execute the all tests suites:

    ```bash
    npx wdio wdio.conf.js --suite all

