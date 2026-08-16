const { log } = require('console');
const os = require('os')

console.log(os.platform());
console.log(os.hostname());
console.log(os.arch());

console.log(os.freemem()); //free memory in bytes
console.log(os.totalmem()); // total memory in bytes



/* It can tell
1. Computer Name
2. Operating System
3. CPU arch
4. Free Memory in bytes
5. Total Memory in bytes
*/

