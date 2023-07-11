// 2nd file to run
setTimeout(function () {
    console.log("3.js is the 2nd file to run");
    try {
        output = document.getElementById('hl-img-version').value;        
    } catch (TypeError) {
        output = "1.10.4 or older."
    }
    output = "v" + output;
    window.parent.hlimgversions.latest = output;
}, 1000);
