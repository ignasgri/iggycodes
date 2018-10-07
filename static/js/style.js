// var fitties = fitty('#lessons');

// // get element reference of first fitty
// var myFittyElement = fitties[0].element;

// // force refit
// fitties[0].fit();

var fitties2 = fitty('#experience');

// get element reference of first fitty
var myFittyElement = fitties2[0].element;

// force refit
fitties2[0].fit();

var fitties3 = fitty('#contacts');

// get element reference of first fitty
var myFittyElement = fitties3[0].element;

// force refit
fitties3[0].fit();

fitty('#experience',{
    minSize: 20,
    maxSize: 400,
    multiLine: false,
    // observeWindow: true,
    // observeMutations: false
    
});