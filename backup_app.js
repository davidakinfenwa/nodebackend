//import nametitle from './constant';
//import {myId} from './function';
const names = require('./constant')
const myId = require('./function')
const other= require('./other-export-format')

require('./more_function')

//console.log(names)

myId(names.nametitle);
myId(names.ocupation);
console.log(other.person.name)