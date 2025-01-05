// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)',
  };

  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
    'No License': ''
  };

  return licenseLinks[license] || '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'No License') {
    return '';
  }

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return `
## License

This project is licensed under the ${license} License.

${licenseBadge}

For more information, see the full [${license} License](${licenseLink}).
  `;
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

${renderLicenseBadge(data.license)}
For more information, see the full [${data.license} License](${renderLicenseLink(data.license)}).

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Tests
To run tests, use the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions
For questions or inquiries, please contact me at [${data.email}](mailto:${data.email}).
You can also visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
  `;
}

export default generateMarkdown;
