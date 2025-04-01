let name1 = {
    firstname: "hello",
    lastname: "world"
};


let printname = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state);
}



Function.prototype.myApply = function (...args) {
    let obj = args[0];
    obj.func = this;
    let params = args.slice(1);

    let inputs = params[0];
    
    obj.func(...inputs);


}

printname.myApply(name1, ['dehradun', "uttrakhand"])