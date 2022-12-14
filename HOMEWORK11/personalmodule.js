const os = require ('os');
const path = require ('path');


const persInfo = {
    "Current user name": `${os.userInfo().username.toString()}`,
    "OS type": `${os.type().toString()}`, 
    "System work time":  `${os.uptime().toString()}`,
    "Current work directory":  `${path.dirname('/Users/user/repos/Denys-Melnychuk/HOMEWORK11/personalmodule.js').toString()}`,
    "Server file name": `${path.basename('/Users/user/repos/Denys-Melnychuk/HOMEWORK11/server.js').toString()}`
    }

const personal = () => {
const info = JSON.stringify(persInfo)


return info
}

// console.log(persInfo)
//personal()

module.exports = personal; 


const timeReply = () => {
const time = new Date().getHours();
if(time >= 18 && time <24) {
message = 'Good evening';
} else if (time >= 24 && time < 08) {
 message = 'Good night';
} else if (time >= 08 && time < 18) {
message = 'Good day';
console.log(message);
return message  
}}
;

timeReply()
