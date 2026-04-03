# StyleAlert: E-Shop Automation Testing using WebdriverIO

StyleAlert is an end-to-end (E2E) automation testing project developed for an E-commerce web application. The project focuses on automating user workflows such as login, product selection, cart management, and checkout using WebdriverIO.

The system ensures application reliability by executing automated test cases and generating detailed reports.

Objectives
Automate E-commerce user flows
Reduce manual testing effort
Improve testing accuracy and speed
Generate and share test reports automatically

Features
🔐 Login & Registration Testing
🛒 Product Selection & Cart Testing
💳 Checkout & Payment Flow Testing
📊 Automated Test Report Generation (Allure)
📧 Email Integration for Report Sharing
🔄 End-to-End Test Automation

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

