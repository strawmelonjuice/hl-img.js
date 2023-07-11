// 1st file to run
setTimeout(function () {
    console.log("2.js is the 1st file to run");
    try {
        window.parent.hlimgversions = {}
    } catch (TypeError) {
        alert("Please run this testing page from a localhost http server for the best results.");
        stop();
    }
    try {
        output = document.getElementById('hl-img-version').value;
    } catch (TypeError) {
        output = "1.10.4 or older."
    }
    output = "v" + output;
    window.parent.hlimgversions.local = output;
}, 500);
