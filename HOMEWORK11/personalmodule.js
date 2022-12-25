const os = require ('os');
const path = require ('path');

const persInfo = {
    "Current user name": `${os.userInfo().username.toString()}`,
    "OS type": `${os.type().toString()}`, 
    "System work time":  `${os.uptime().toString()}`,
    "Current work directory":  `${path.dirname('/Users/user/repos/Denys-Melnychuk/HOMEWORK11/personalmodule.js').toString()}`,
    "Server file name": `${path.basename('/Users/user/repos/Denys-Melnychuk/HOMEWORK11/server.js').toString()}`
    }

 const timeReply = () => {
        const time = new Date().getHours();
        if(time >= 18 && time <24) {
        message = `Date of request: ${new Date()}. Message: Good Evening, ${os.userInfo().username.toString()}!`;
        } else if (time >= 24 && time < 08) {
         message = `Date of request: ${new Date()}. Message: Good Morning, ${os.userInfo().username.toString()}!`;
        } else if (time >= 08 && time < 18) {
        message = `Date of request: ${new Date()}. Message: Good Day, ${os.userInfo().username.toString()}!`;
        //console.log(message);
        return message  
        }}
        ;
        

const personal = () => {


let info = [];
persInfo.message = timeReply();
info.push(persInfo);


console.log(info)
return info
}

personal()

module.exports = personal; 

