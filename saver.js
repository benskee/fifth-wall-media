const fs = require('fs')
// const thing = require('./projectRecorder.js')
var thing = fs.readFileSync('./projectRecorder.js', { encoding: "utf8" })
console.log(thing)
const projectRecorder = JSON.stringify(thing)

fs.writeFileSync('projectRecorder.json', projectRecorder)


