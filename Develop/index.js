// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the name of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "How is your project installed?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide a installation instructions on your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How is your project used?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide an explnantion of how your project is used.");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache", "GNU General Public License", "None"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select a license for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Explain how other developers should contribute to your project.",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "Please provide an explnantion how other developers should contribute to your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your Github username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your email address.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
