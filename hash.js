const bcrypt = require('bcrypt');
const saltRounds = 10;
const passwordUltraSecure = 'password';

const hash = bcrypt.hash(passwordUltraSecure, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

console.log(hash);