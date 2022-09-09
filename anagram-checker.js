module.exports = function (str1, str2) {      
let x1 = str1.toLowerCase();
let y1 = x1.replace(/[^a-zA-Z0-9]/g, '');
let x2 = str2.toLowerCase();
let y2 = x2.replace(/[^a-zA-Z0-9]/g, '');
let l1 = y1.length;
let l2 = y2.length;     
if(l1 != l2)
    return false;     
let arr1 = [];      
let arr2 = [];     
for (i=0; i<l1; i++) {
    arr1.push(str1.charAt([i]));
}     
for (i=0; i<l2; i++) {
    arr2.push(str2.charAt([i]));
}    
arr1.sort();      
arr2.sort();    
if (arr1 === arr2){
    return true;       
}  
else
{   return true;     
}  
}