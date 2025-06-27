const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendBirthdayEmail = async (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "🎂 Birthday Reminder!",
    text: `Hey! It's ${name}'s birthday today. Don't forget to wish them! 🎉`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendBirthdayEmail;
