var call = {
    n: 1,
    p: 2
}

var apply = {
    n: 3,
    p: 4
}

var bind = {
    n: 5,
    p: 6
}

function sum(a, b) {
    console.log(a + b + this.n + this.p)
        //console.log(this.n)
        //console.log(n)
}


console.log('using call')
sum.call(call, 7, 8);


console.log('using apply')
sum.apply(apply, [7, 8]);


console.log('using bind')
var newSum = sum.bind(bind, 7);
newSum(8)