console.log(
  "%c hl-img.js by Mar was loaded!\n %cfor more info check it out on GitHub:\n%chttps://github.com/strawmelonjuice/hl-img.js/",
  "color: #8A2BE2; font-size:15px;",
  "color: black; font-size:12px;",
  "color: blue; font-size:12px;"
);

var css = `
    img.imageshow {
    position: absolute;
    margin: auto;
    top: 20%;
    bottom: 20%;
    left: 10%;
    right: 10%;
    z-index: 900000;
    background-color: whitesmoke;
    border-radius: 0%;
    border: currentColor solid .2em;
    box-shadow: -53px -38px 95px 0px rgba(0, 0, 0, 0.86);
    -webkit-box-shadow: -53px -38px 95px 0px rgba(0, 0, 0, 0.86);
    -moz-box-shadow: -53px -38px 95px 0px rgba(0, 0, 0, 0.86);
}
img.hl-img {
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
}
#closenotifelm {
    position: absolute;
    top: 2em;
    right: 2em;
    background-color: black;
    color: white;
    padding: 4px;
    border: 2.5px solid gray;
    z-index: 900001;
}
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

var imoges = document.getElementsByTagName("hl-img");
for (var i = 0; i < imoges.length; i++) {
  var newimogesid =
    "hl-img-" +
    Math.floor(
      Math.random() * (Math.floor(9999) - Math.ceil(1000) + 1) + Math.ceil(1000)
    );
  var newimoges = document.createElement("img");
  newimoges.alt = imoges.item(i).getAttribute("alt");
  if (imoges.item(i).getAttribute("style") != null) {
    newimoges.setAttribute("style", imoges.item(i).getAttribute("style"));
  }
  if (imoges.item(i).getAttribute("height") != null) {
    newimoges.setAttribute("height", imoges.item(i).getAttribute("height"));
  }
  if (imoges.item(i).getAttribute("width") != null) {
    newimoges.setAttribute("width", imoges.item(i).getAttribute("width"));
  }
  if (imoges.item(i).getAttribute("widht") != null) {
    newimoges.setAttribute("width", imoges.item(i).getAttribute("widht"));
  }
  if (imoges.item(i).getAttribute("class") != null) {
    newimoges.setAttribute("class", imoges.item(i).getAttribute("class"));
  }
  if (imoges.item(i).getAttribute("id") != null) {
    newimoges.setAttribute("id", imoges.item(i).getAttribute("id"));
  } else {
    newimoges.id = newimogesid;
  }
  newimoges.setAttribute("onclick", "imageshow(1, this)");
  if (imoges.item(i).getAttribute("preview") != null) {
    newimoges.dataset.prevsrc = imoges.item(i).getAttribute("preview");
    newimoges.src = imoges.item(i).getAttribute("preview");
  } else {
    newimoges.src = imoges.item(i).getAttribute("src");
    newimoges.dataset.prevsrc = imoges.item(i).getAttribute("src");
  }
  if (imoges.item(i).getAttribute("highlight") != null) {
    newimoges.dataset.showsrc = imoges.item(i).getAttribute("highlight");
  } else {
    newimoges.dataset.showsrc = newimoges.dataset.prevsrc;
  }
  if (imoges.item(i).getAttribute("href") != null) {
    newimoges.dataset.href = imoges.item(i).getAttribute("href");
  }
  newimoges.style.maxWidth = "80%";
  newimoges.title = "Click to show image";
  newimoges.classList.add("hl-img");
  imoges.item(i).parentNode.replaceChild(newimoges, imoges.item(i));
}

if (document.getElementsByClassName("hl-img")[0]) {
  const closenotif = document.createElement("div");
  closenotif.innerHTML =
    "<p>Click outside of the image to put it back in place!</p>";
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
      elem.classList.add("imageshow");
      elem.setAttribute("onclick", "");
      if (elem.dataset.href != null) {
        elem.setAttribute(
          "onclick",
          "window.open('" + elem.dataset.href + "');"
        );
        closenotif.innerHTML =
          '<p>Click outside of the image to put it back in place! Or click on the image again to open <a href="' +
          elem.dataset.href +
          '" target="_blank">this link</a> in a new tab.</p>';
      } else {
        closenotif.innerHTML =
          "<p>Click outside of the image to put it back in place!</p>";
      }
      elem.src = elem.dataset.showsrc;
      elem.style.opacity = "100%";
      elem.title = "";
      closenotif.style.display = "block";
    }, 700);
    const abortController = new AbortController();
    window.addEventListener(
      "click",
      function (e) {
        if (!elem.contains(e.target)) {
          imageshow(0, elem);
          abortController.abort();
        }
      },
      { signal: abortController.signal }
    );
  } else {
    console.log("1/2 Zooming out of " + elem.id);
    elem.style.opacity = "0%";
    setTimeout(function () {
      console.log("2/2 Zooming out of " + elem.id);
      elem.classList.remove("imageshow");
      elem.setAttribute("onclick", "imageshow(1, this)");
      elem.src = elem.dataset.prevsrc;
      elem.style.opacity = "100%";
      elem.title = "Click to show image";
      closenotif.style.display = "none";
    }, 700);
  }
}
