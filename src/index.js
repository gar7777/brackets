module.exports = function check(str, bracketsConfig) {
  
  let res = '';
  let res2 = '1';
           
  del(str, bracketsConfig);

function del(str, bracketsConfig){
  for(i = 0; i < bracketsConfig.length; i++) {
  	let a = bracketsConfig[i][0];
    let b = bracketsConfig[i][1];
    let c = a + b;
    let d = str.indexOf(c);
    res = str;
    if(d != -1){
    	res2 = str.slice(0, d) + str.slice(d + 2);
          
     }
   }
 }   

while (res.length != res2.length){
	del(res2, bracketsConfig);
}

if(res.length == 0){
	return true;
}
else {
	return false;
}
   
 }