const os = require('os');
//Getting the user info
const user=os.userInfo();
console.log(user)

//Getting the system running uptime 

 console.log(`my system running uptime is ${os.uptime()} seconds`)

 const currentStat={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
  }

  console.log(currentStat)
