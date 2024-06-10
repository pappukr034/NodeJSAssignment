const fs=require("fs")

// fs.appendFile('nodejs_archetecture.txt',"Node.js is an open-source, cross-platform JavaScript runtime environment and library that lets developers run JavaScript code outside of a browser. Node.js lets developers use JavaScript to build scalable network applications.",(err)=>{
//     if(err){
//         console.log("Error in appending data")
//     }
//     else {
//         console.log("Data appended succesfully")
//     }
// })


// // q3 read data in file and log

// fs.readFile('nodejs_archetecture.txt','utf-8',(err,data)=>{
//      if(err){
//         console.log("Erroe in reading file")
//      }
//      console.log(data)
// })


// fs.appendFile('nodejs_archetecture',"Overall, Node.js is a very powerful and versatile platform that can be used to build a wide variety of applications. It is scalable, performant, easy to learn, and has a large community of supporters. If you are looking for a platform to build your next web application, Node.js is a great option to consider.",(err)=>{
//     if(err){
//         console.log('Error during data appended (advantage)')
//     }
// })


// q5
// fs.unlinkSync('nodejs_archetecture.txt')

// q6

const os=require("os")

// console.log("OS Realse",os.release())
// console.log("OS Name",os.type()) 

const http=require('http')

// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write('<h1>I am happy to learn Full stack weblopment from PW Skills</h1>')
//     }
//     res.end();
// })

// server.listen(8001)
// console.log("Server is running on port 8001")

// Q8

const event = require('events');
const { Stream } = require("stream");
// class subs extends event.EventEmitter { }
// const subscribe = new subs();

// subscribe.on('subscribe', () => {
//   console.log('Subscribed');
// });

// subscribe.emit('subscribe');

// Q9



const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");


// Q10

console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
  
  eventEmitter.setMaxListeners(5);
  
  console.log(
    `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );