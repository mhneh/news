'use strict';

const Mailjet = require('node-mailjet');

const sendForgotPasswordMail = (user, host, resetLink) => {
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
  );

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "hebiitachi2@gmail.com",
            Name: "News"
          },
          To: [
            {
              Email: user.email,
              Name: `${user.username}`
            }
          ],
          Subject: "[News] Reset Password",
          HTMLPart: `
            <p>Hi ${user.username},</p>
            <br/>
            <p>You recently requested to reset the password for your ${host} account. 
            Click the button below to proceed</p>
            <br/>
            <p><a href="${resetLink}">Reset password</a></p>
            <br/>
            <p>If you did not request a password reset, please ignore this email or reply to let us know. 
            This password reset link is only valid for the next 30 minutes.</p>
            <br/>
            <p>Thanks,</p>
            <br/>
            <p>News</p>
          `
        }
      ]
    });
  return request;
};

module.exports = {sendForgotPasswordMail};
