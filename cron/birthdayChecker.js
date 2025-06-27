const Contact = require("../models/contactModel");
const User = require("../models/userModel");
const sendBirthdayEmail = require("../utils/sendEmail");

const checkBirthdays = async () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  const contacts = await Contact.find({ birthday: { $ne: null } });

  for (const contact of contacts) {
    const bday = new Date(contact.birthday);
    if (bday.getDate() === day && bday.getMonth() + 1 === month) {
      const user = await User.findById(contact.user_id);
      if (user && user.email) {
        await sendBirthdayEmail(user.email, contact.name);
      }
    }
  }
};

module.exports = checkBirthdays;
