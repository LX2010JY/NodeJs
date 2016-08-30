/**
 * Created by three on 16-8-30.
 */
const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello World');
hash.update('Hello NodeJS');
console.log(hash.digest('hex'));