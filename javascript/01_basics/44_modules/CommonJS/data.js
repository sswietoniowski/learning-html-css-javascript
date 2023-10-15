const fs = require('fs').promises;

// Loading and writing data to the filesystem ----------------------------

const loadData = async () => {
  console.log('Loading employees.....');
  try {
    const fileData = await fs.readFile('./data.json');
    return JSON.parse(fileData);
  } catch (err) {
    console.error('Cannot load in employees');
    throw err;
  }
};

const writeData = async (employees) => {
  console.log('Writing employees.....');
  try {
    await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
  } catch (err) {
    console.error('Cannot write employees data.');
    throw err;
  }
};

// Exported functions ----------------------------------------------------

module.exports.loadData = loadData;
module.exports.writeData = writeData;
