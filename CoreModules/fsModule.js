/* 
fs (file system) module allows NodeJS to interact with files

It can:
1. Read Files
2. Create Files
3. Update Files
4. Delete Files

real life ex: save reports, read config files, manage documents 
*/

const fs = require('fs')

//READING FILES

// 1. Async WITH callback (classic NodeJS style)

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err.message)
        return;
    }
    console.log('Content:', data)
})

//2. Sychronous (blocks the event loop)

try{
    const data = fs.readFileSync('data.txt', 'utf-8');
    console.log("Content: ", data);
    
} catch(err){
    console.log('error: ', err.message);
    
}

//3.  RECOMMENDED -> Promises with async await

const answers = require('fs/promises')
async function readData() {
    try {
        const data = await answers.readFile('data.txt', 'utf8');
        console.log('Content:', data);
        
    } catch (err) {
        console.log('error :', err.message);
        
    }
    
}

readData()


// ===================WRITING FILES ====================

//Append Files- adds to existing content
