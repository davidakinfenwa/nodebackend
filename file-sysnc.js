//How to read into a file and write into the file 


const {readFileSync,writeFileSync } =  require('fs')

const first = readFileSync('./content/first_test.txt','utf8')
const scound = readFileSync('./content/second_test.txt','utf8')

 console.log(first,scound)

 writeFileSync('./content/results.txt',`This is the result of : ${scound},${first}`,{flag:'a'})