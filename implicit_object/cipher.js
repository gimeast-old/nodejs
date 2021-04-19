const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'rlaehddnr123qwertyuiopasdfghjklz'; // 32byte
const iv = '10qpwo29eidkfjvn' // 16byte

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('my_passWord!@3','utf-8', 'base64');
result += cipher.final('base64');
console.log('암호화:',result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf-8');
console.log('복호화:',result2);