let name1 = {
    firstname: "hello",
    lastname: "world"
};

let printname = function(hometown, state, country){
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state + " " + country);
}

Function.prototype.mybind = function(...args){
    console.log(this);
    let obj = this;
    let params = args.slice(1);
    return function (...state){
        params.push(...state);
        
        obj.apply(args[0], params);
    }
}

let func2 = printname.mybind(name1, "dehradun");

func2("uttrakhand", "india");