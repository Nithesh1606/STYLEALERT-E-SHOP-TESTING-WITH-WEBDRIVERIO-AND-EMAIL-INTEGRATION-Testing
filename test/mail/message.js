// message.js
class Message {
    constructor() {
        this.date = new Date().toLocaleString();
        this.currentTime = new Date().toLocaleString();
        this.EMAIL_SUBJECT_OF_ALLURE_REPORT = "Allure Test Report";
        this.EMAIL_BODY = `Hi,

This report details the results of the automated tests run on E-Shop WebApplication on [${this.date}]. 
The aim was to ensure the proper functionality of the system and identify any defects.

Key Metrics
Total Test Cases - 16
Passed - 16
Failed - 0

Test Environment
Operating System - Window
Automation Tool - WebDriverIO
Browser - Chrome

For detailed test results, please find the attached Allure report.`;
    }
}

module.exports = Message;
