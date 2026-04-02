const dotenv = require('dotenv');
 class MailEnv {

    get EMAIL() {
        return "nithesh1606@gmail.com";
    }

    get EMAIL_PASSWORD() {
        return "obtt tkdi ukjz xiug";
    }
    //EMAIL = 'nithesh1606@gmail.com'
    //EMAIL_PASSWORD = 'obtt tkdi ukjz xiug';
 }

 module.exports = new MailEnv();