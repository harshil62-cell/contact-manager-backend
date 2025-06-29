const cron = require("node-cron");
const checkBirthdays = require("./birthdayChecker");

const startBirthdayCron = () => {
  // Runs every day at 8 AM
  cron.schedule("0 8 * * *", () => {
    console.log("Running birthday check...");
    checkBirthdays();
  });
};

module.exports = startBirthdayCron;
