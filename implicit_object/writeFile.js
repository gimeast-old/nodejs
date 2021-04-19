const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다.')
.then((data)=>{
    return fs.readFile('./writeme.txt');
})
.catch((err) => {
    console.error(err);
});