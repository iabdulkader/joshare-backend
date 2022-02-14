function getExpireTime(expireDate){
  var now = Date.now();
  var difference = Date.parse(expireDate) - now;
 
  let d = 1000 * 60 * 60 * 24;
  let h = 1000 * 60 * 60;
    
  const days = Math.floor(difference / d);
  const hours = Math.floor(difference % d / h);
  const minutes = Math.floor((difference % h) / (1000 * 60));
    
  return `${days > 0 ? days : ""}${days > 1 ? " days " : days === 1 ? " day " : "" }${hours > 0 ? hours : ""}${hours > 1 ? " hours " : hours === 1 ? " hour " : "" }${minutes > 0 ? minutes : ""}${minutes > 1 ? " minutes" : minutes === 1 ? " minutes" : "" }`
}
  
module.exports = getExpireTime;