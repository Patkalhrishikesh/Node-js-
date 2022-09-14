const app = require('./app')
let arr = [2,3,4,5,3,4,5,6,7,8];
console.log(app.xyz());

const result = arr.filter((item)=>{
    console.log(item)
    return item > 4;
})

console.warn(result);