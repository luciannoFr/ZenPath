import fs from 'fs';
import { faker } from '@faker-js/faker';

const numberOfUsers = 1000;
const outputFile = 'users.sql';

// Usamos un conjunto para evitar duplicados
const userSet = new Set();

const generateUniqueUser = () => {
  let user;
  do {
    user = {
      username: faker.internet.userName(),
      passwordHash: faker.internet.password(),
      email: faker.internet.email(),
      numberCell: faker.datatype.number({ min: 1000000000, max: 9999999999 }), // Generate a random 10-digit number
      typeUser: 1 // Ya que el rango es solo 1
    };
  } while (userSet.has(JSON.stringify(user)));

  userSet.add(JSON.stringify(user));
  return user;
};

const generateUsers = () => {
  const users = [];
  while (users.length < numberOfUsers) {
    users.push(generateUniqueUser());
  }
  return users;
};

const generateSQLInsert = (user) => {
  return `('${user.username}', '${user.passwordHash}', '${user.email}', ${user.numberCell}, ${user.typeUser})`;
};

const writeSQLFile = (fileName, users) => {
  const sql = `INSERT IGNORE INTO \`users\`(\`Username\`, \`PasswordHash\`, \`Email\`, \`number_cell\`, \`type_user\`) VALUES\n${users.map(generateSQLInsert).join(',\n')};\n`;
  fs.writeFileSync(fileName, sql);
};

const users = generateUsers();
writeSQLFile(outputFile, users);

console.log(`Generated ${numberOfUsers} unique users and saved to ${outputFile}`);
