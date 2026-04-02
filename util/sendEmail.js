// main.js
const nodemailer = require('nodemailer');
const { promisify } = require('util');
const { EMAIL_PASSWORD, EMAIL } = require('../test/pageobjects/mailenv');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const Message = require('../test/mail/message'); // Import the Message class


async function zipFolder(sourceDir, outPath) {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
            console.log(`Archive created at ${outPath}. Total bytes: ${archive.pointer()}`);
            resolve();
        });

        archive.on('error', (err) => {
            reject(err);
        });

        archive.pipe(output);
        
        archive.directory(sourceDir, false);
        archive.finalize();
    });
}

async function sendEmail(subject, body, attachments = []) {
    console.log('Sending email...');

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // use 465 for SSL
        secure: false, // true for 465, false for other port
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD,
        },
    });

    // Configure email options
    let mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: subject,
        text: body,
        attachments: attachments,
    };

    console.log(EMAIL_PASSWORD);
    console.log(EMAIL);

    // Promisify the sendMail function
    const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

    console.log(JSON.stringify(mailOptions));

    try {
        console.log('About to send mail....');
        // Send email
        const result = await sendMailAsync(mailOptions);
        console.log('Email sent successfully. Result:', result);
        return result;
    } catch (err) {
        console.error('Error sending email:', err);
        throw err;
    }
}

async function main() {
    const allureReportsDir = path.join(__dirname, 'allure-report'); // Path to your Allure reports
    const zipPath = path.join(__dirname, 'allure-report.zip');

    // Create an instance of the Message class
    const message = new Message();

    // Create zip file
    await zipFolder(allureReportsDir, zipPath);

    // Send email with the zip file attached
    await sendEmail(message.EMAIL_SUBJECT_OF_ALLURE_REPORT, message.EMAIL_BODY, [{
        filename: 'allure-reports.zip',
        path: zipPath
    }]);

    // Clean up the zip file after sending the email
    fs.unlinkSync(zipPath);
}

main().catch(console.error);
