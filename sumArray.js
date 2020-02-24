function sumArray(a){
    var y=0;
    for(let x=0; x<a.length+1; x++){
        y=y+x;
    }
    return y;
}
module.exports = sumArray;