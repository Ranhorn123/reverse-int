module.exports = function reverse (n) {
    
   
    return  String(Math.abs(n)).split("").reverse().join("");
}


/*module.exports =function reverse (n) {
    let r = "";
    for (const i = n.length - 1; i >= 0; i-1) {
        r += n[i];
    }
    return r
}
*/
/*module.exports = function reverse (n)
{
    n+="";
    const arr = [...n]
    let r ="";
  
    while(arr.length){
       r = r + arr.pop()
    }
 
    return +r;
}

*/
