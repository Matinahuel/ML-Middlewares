const fs = require('fs');
const path = require('path');

module.exports = {
    products : JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productsDataBase.json'),'utf-8')),
    saveProduct : data => fs.writeFileSync(path.join(__dirname,'productsDataBase.json'),JSON.stringify(data,null,2),'utf-8'),
}