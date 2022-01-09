let complexFunction = function (arg1, arg2) {
    return arg1 + " " + arg2;
}

let cache = function () {
    let objChache = {};
    return function (arg1, arg2) {
        if (!objChache[arg1, arg2]) {
            objChache[arg1, arg2] = complexFunction(arg1, arg2);
            return complexFunction(arg1, arg2)
        } 
        return `${objChache[arg1, arg2]} in chache`  
    }
}


var cachedFunc = cache(complexFunction);
console.log(cachedFunc('foo', "bar"));// foo bar
console.log(cachedFunc('foo', "bar"));//In cache: foo bar
console.log(cachedFunc('foo', "baz"));// foo baz

module.exports = {
    complexFunction,
    cache
}