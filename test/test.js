var example = `
<h3>Image 1</h3>
<hl-img preview="../png/one.png" alt="Example image 1" style="width: 80%; max-width: 100%"></hl-img>

<h3>Image 2</h3>
<hl-img preview="../png/two.png" alt="Example image 2.1" highlight="../jpg/two.jpg" style="height: 20px; bg-color: red"></hl-img>
<hl-img preview="../png/two.png" alt="Example image 2.2" highlight="../jpg/two.jpg" style="height: 20px; bg-color: red"></hl-img>
<hl-img preview="../png/two.png" alt="Example image 2.3" highlight="../jpg/two.jpg" style="height: 20px; bg-color: red"></hl-img>

<h3>Image 3</h3>
<hl-img preview="../png/three.png" alt="Example image 3" highlight="../jpg/three.jpg" style="width: 80%" href="https://example.com/"></hl-img>
`;
const hlimg_options = {
      styling_closenotif_positioning: "bottom: 2em; right: 4em;",
      styling_closenotif_colors_background: "#FFF",
      styling_closenotif_colors_text: "#000",
      styling_imageshow_zIndex: 900000,
      styling_imageshow_colors_background: "#000",
      styling_imageshow_border_radius: "25%",
      styling_hlimg_maxwidth: "85%",
	};
document.getElementById("example").innerHTML = example;
