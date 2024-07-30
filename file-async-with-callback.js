//How to read into a file and write into the file 


const {readFile,writeFile } =  require('fs')

readFile('./content/first_test.txt','utf-8',  (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
   const first=data

readFile('./content/second_test.txt','utf-8',  (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
   const second=data
   writeFile('./content/result_test.txt',`This is the result of : ${second},${first}`,(err, data) =>{
     if(err){
        console.log(err);
        return
     }
     console.log(data);
      
   })
})
})