function add(a,b){
    if(Array.isArray(a)){
        c=0;
        for(let x=0; x<a.length;x++){
            c=c+a[x];
        }
        return c;
    }
    else{
        return a+b;
    }

}

module.exports=add;