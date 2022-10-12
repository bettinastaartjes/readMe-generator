

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseType = data.license[0];
    let licenseString = ""
    if (licenseType === "MIT") {
        licenseString: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if (licenseType === "GNU") {
        licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      };
    return licenseString
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
/*function generateMarkdown(data) {
    return `#
    ${data.title},
    ${data.tableOfContents},
    ${data.username},
    ${data.license},
    ${data.projectDescription},
`;
}*/

/*function generateMarkdown(data) {
    return `#
    ${data.title},
    `;
}*/

function generateMarkdown(data) {
    return `# ${data.title},
   ${data.license}


## Description
${data.projectDescription}

## Table of Contents:
    1. Installation: ${data.installation}
    2. Usage: ${data.usage}
    3. Collaborators: ${data.collaborators}
    4. Tests:

    ## License
   This application is covered by the ${data.license} license. 

## Questions
    Email: ${data.email}
    GitHub Username: https://www.github.com/${data.username}
`}

module.exports = generateMarkdown;