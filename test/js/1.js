// // 3rd file to run.
setTimeout(function () {
    console.log("1.js is the 3rd file to run");
    console.log("latest: " + window.parent.hlimgversions.latest + ", local: " + window.parent.hlimgversions.local)
    document.getElementById("latestver").innerHTML = window.parent.hlimgversions.latest;
    document.getElementById("localver").innerHTML = window.parent.hlimgversions.local;
}, 1500);
