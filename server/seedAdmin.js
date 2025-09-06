const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);
  const username = 'SainiKhushi_admin';
  const password = 'Khushi@123';
  const hash = await bcrypt.hash(password, 10);

  const exists = await User.findOne({ username });
  if (!exists) {
    await User.create({ username, password: hash, role: 'admin' });
    console.log('Admin user created!');
  } else {
    console.log('Admin user already exists.');
  }
  mongoose.disconnect();
}

createAdmin();