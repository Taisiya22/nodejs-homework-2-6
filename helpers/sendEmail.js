const mgEmail = require("@sendgrid/mail");
const { GRID_API_KEY } = process.env;

mgEmail.setApiKey(GRID_API_KEY);

const sendEmail = async (data) => { 
    const email = { ...data, from: "taisiyadeveloper@gmail.com" };
    mgEmail.send(email);
    return true;
    
}

module.exports = sendEmail;