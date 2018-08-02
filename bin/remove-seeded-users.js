const admin = require('../functions/utilities/test-admin');
const users = require('../seeds/fake-users.json');

removeSeededUsers(users);

async function removeSeededUsers(users) {
  let i = users.length;

  while (i--) {
    const user = users[i];
    await admin.auth().deleteUser(user.uid);
    console.log('deleted', user);
  }

  console.log('complete!');

  process.exit();
}
