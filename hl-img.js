// hl-img elememt support

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
var imoges = document.getElementsByTagName("hl-img");
for (var i = 0; i < imoges.length; i++) {
    var newimogesid = "showableimage-" + getRandomIntInclusive(1000, 9999);
    var newimoges = document.createElement("img");
    newimoges.alt = (imoges.item(i)).getAttribute('alt');
    newimoges.id = newimogesid;
    newimoges.setAttribute('onclick', 'imageshow(1, this)');
    if ((imoges.item(i)).getAttribute('preview') != null) {
        newimoges.dataset.prevsrc = (imoges.item(i)).getAttribute('preview');
        newimoges.src = (imoges.item(i)).getAttribute('preview');
    } else {
        newimoges.src = (imoges.item(i)).getAttribute('src');
        newimoges.dataset.prevsrc = (imoges.item(i)).getAttribute('src');
    }
    if ((imoges.item(i)).getAttribute('highlight') != null) {
        newimoges.dataset.showsrc = (imoges.item(i)).getAttribute('highlight');
    } else {
        newimoges.dataset.showsrc = newimoges.dataset.prevsrc;
    }
    newimoges.style.maxWidth = "80%";
    newimoges.classList.add('showableimage');
    (imoges.item(i)).parentNode.replaceChild(newimoges, (imoges.item(i)));
}

if (document.getElementsByClassName("showableimage")[0]) {
    const closenotif = document.createElement("div");
    closenotif.innerHTML = "<p>Click on the image again to put it back in place!</p>";
    closenotif.id = "closenotifelm";
    closenotif.style.display = "none";
    document.body.appendChild(closenotif);
}
closenotif = document.getElementById("closenotifelm");
function imageshow(action, elem) {
    if (action) {
        console.log("1/2 Zooming in to " + elem.id);
        elem.style.opacity = "0%";
        setTimeout(function () {
            console.log("2/2 Zooming in to " + elem.id);
            elem.classList.add('imageshow')
            elem.setAttribute('onclick', 'imageshow(0, this)');
            elem.src = elem.dataset.showsrc;
            elem.style.opacity = "100%";
            closenotif.style.display = "block";
        }
        , 700);
    } else {
        console.log("1/2 Zooming out of " + elem.id); 
        elem.style.opacity = "0%";
        setTimeout(function () {
            console.log("2/2 Zooming out of " + elem.id);
            elem.classList.remove('imageshow')
            elem.setAttribute('onclick', 'imageshow(1, this)');
            elem.src = elem.dataset.prevsrc;
            elem.style.opacity = "100%";
            closenotif.style.display = "none";
        }
            , 700);
    }
}
