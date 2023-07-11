const hlimg_ver = "1.10.5 - not released";
const hlimg_options_default = {
  timing_fade_opacity: 0.5,
  timing_pop_location: 700,
  styling_closenotif_positioning: "top: 2em; right: 2em;",
  styling_closenotif_colors_background: "#000",
  styling_closenotif_colors_text: "#FFF",
  styling_closenotif_border_thickness: "2.5px",
  styling_closenotif_border_type: "solid",
  styling_closenotif_border_color: "#848484",
  styling_closenotif_padding: "4px",
  styling_imageshow_zIndex: 900,
  styling_imageshow_positioning:
    "top: 20%; bottom: 20%; left: 10%; right: 10%;",
  styling_imageshow_colors_background: "#f5f5f5",
  styling_imageshow_border_thickness: ".2em",
  styling_imageshow_border_type: "solid",
  styling_imageshow_border_color: "currentColor",
  styling_imageshow_border_radius: "0%",
  styling_hlimg_maxwidth: "80%",
};
if (!(typeof hlimg_options === "undefined")) {
  var hlimg_opt = Object.assign(hlimg_options_default, hlimg_options);
} else {
  var hlimg_opt = hlimg_options_default;
}

var css = `
  img.hl-img {
      -webkit-transition: opacity ${hlimg_opt.timing_fade_opacity}s ease-in-out;
      -moz-transition: opacity ${hlimg_opt.timing_fade_opacity}s ease-in-out;
      transition: opacity ${hlimg_opt.timing_fade_opacity}s ease-in-out;
  }
  .hl-img:not(.imageshow) {
    cursor: zoom-in;
  }
  #closenotifelm {
      position: fixed;
      ${hlimg_opt.styling_closenotif_positioning};
      background-color: ${hlimg_opt.styling_closenotif_colors_background};
      color: ${hlimg_opt.styling_closenotif_colors_text};
      padding: ${hlimg_opt.styling_closenotif_padding};
      border: ${hlimg_opt.styling_closenotif_border_thickness} ${
  hlimg_opt.styling_closenotif_border_type
} ${hlimg_opt.styling_closenotif_border_color};
      z-index: ${hlimg_opt.styling_imageshow_zIndex + 1};
  }
  img.imageshow {
      position: fixed;
      margin: auto;
      ${hlimg_opt.styling_imageshow_positioning};
      z-index: ${hlimg_opt.styling_imageshow_zIndex};
      background-color: ${hlimg_opt.styling_imageshow_colors_background};
      border-radius: ${hlimg_opt.styling_imageshow_border_radius};
      border: ${hlimg_opt.styling_imageshow_border_color} ${
  hlimg_opt.styling_imageshow_border_type
} ${hlimg_opt.styling_imageshow_border_thickness};
      box-shadow: -53px -38px 95px 0px rgba(0, 0, 0, 0.86);
        -webkit-box-shadow: -53px -38px 95px 0px rgba(0, 0, 0, 0.86);
        -moz-box-shadow: -53px -38px 95px 0px rgba(0, 0, 0, 0.86);
  }
`;

var styleSheet = document.createElement("style");
styleSheet.innerHTML = css;
document.head.appendChild(styleSheet);

var versionDec = document.createElement("data");
versionDec.id = "hl-img-version";
versionDec.value = hlimg_ver;
document.head.appendChild(versionDec);

var imoges = document.getElementsByTagName("hl-img");
for (var i = imoges.length - 1; i >= 0; i--) {
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
    newimoges.dataset.htmlheight = imoges.item(i).getAttribute("height");
  }
  if (imoges.item(i).getAttribute("width") != null) {
    newimoges.setAttribute("width", imoges.item(i).getAttribute("width"));
    newimoges.dataset.htmlwidth = imoges.item(i).getAttribute("width");
  }
  // I make this typo a lot lmao
  if (imoges.item(i).getAttribute("widht") != null) {
    newimoges.setAttribute("width", imoges.item(i).getAttribute("widht"));
    newimoges.dataset.htmlwidth = imoges.item(i).getAttribute("widht");
  }
  if (imoges.item(i).style.height != null) {
    newimoges.setAttribute("height", imoges.item(i).style.height);
    newimoges.dataset.htmlheight = imoges.item(i).style.height;
  }
  if (imoges.item(i).style.width != null) {
    newimoges.setAttribute("width", imoges.item(i).style.width);
    newimoges.dataset.htmlwidth = imoges.item(i).style.width;
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
  newimoges.style.maxWidth = hlimg_opt.styling_hlimg_maxwidth;
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
        elem.style.cursor = "pointer";
      } else {
        closenotif.innerHTML =
          "<p>Click outside of the image to put it back in place!</p>";
      }
      elem.style.height = "";
      elem.setAttribute("height", "");
      elem.style.width = "";
      elem.setAttribute("width", "");
      elem.src = elem.dataset.showsrc;
      elem.style.opacity = "100%";
      elem.title = "";
      closenotif.style.display = "block";
    }, hlimg_opt.timing_pop_location);
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
      elem.style.cursor = "";
      if (elem.dataset.htmlheight != null) {
        elem.style.height = elem.dataset.htmlheight;
        elem.setAttribute("height", elem.dataset.htmlheight);
      }
      if (elem.dataset.htmlwidth != null) {
        elem.style.width = elem.dataset.htmlwidth;
        elem.setAttribute("width", elem.dataset.htmlwidth);
      }
      elem.src = elem.dataset.prevsrc;
      elem.style.opacity = "100%";
      elem.title = "Click to show image";
      closenotif.style.display = "none";
    }, hlimg_opt.timing_pop_location);
  }
}
console.info(
  `%c hl-img.js by Mar was loaded!%c\nVersion: ${hlimg_ver}\n\r\n for more info check it out on GitHub:\n%chttps://github.com/strawmelonjuice/hl-img.js/`,
  "color: #8A2BE2; font-size:15px;",
  "color: black; font-size:12px;",
  "color: blue; font-size:12px;"
);
