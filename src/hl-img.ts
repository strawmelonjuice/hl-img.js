if (typeof window.document === "undefined") {
	throw new Error("HL-IMG is meant for usage in the browser!");
}
const hlimg_ver = "2.1.0";
if (window.document.getElementsByClassName("hl-img")[0] !== null) {
	const closenotif = window.document.createElement("div");
	closenotif.innerHTML =
		"<p>Click outside of the image to put it back in place!</p>";
	closenotif.id = "closenotifelm";
	closenotif.style.display = "none";
	window.document.body.appendChild(closenotif);
	console.log("Creating close notification");
}
const closenotif = window.document.getElementById("closenotifelm");
let hlimg_opt: {
	timing_fade_opacity: number;
	styling_closenotif_positioning: string;
	styling_closenotif_colors_background: string;
	styling_closenotif_colors_text: string;
	styling_closenotif_padding: string;
	styling_closenotif_border_thickness: string;
	styling_closenotif_border_type: string;
	styling_closenotif_border_color: string;
	styling_imageshow_zIndex: number;
	styling_imageshow_positioning: string;
	styling_imageshow_colors_background: string;
	styling_imageshow_border_radius: string;
	styling_imageshow_border_color: string;
	styling_imageshow_border_type: string;
	styling_imageshow_border_thickness: string;
	styling_hlimg_maxwidth: string;
	styling_hlimg_maxheight: string;
	timing_pop_location: number;
};
interface hlimgoptions {
	timing_fade_opacity: number;
	timing_pop_location: number;
	styling_closenotif_positioning: string;
	styling_closenotif_colors_background: string;
	styling_closenotif_colors_text: string;
	styling_closenotif_border_thickness: string;
	styling_closenotif_border_type: string;
	styling_closenotif_border_color: string;
	styling_closenotif_padding: string;
	styling_imageshow_zIndex: number;
	styling_imageshow_positioning: string;
	styling_imageshow_colors_background: string;
	styling_imageshow_border_thickness: string;
	styling_imageshow_border_type: string;
	styling_imageshow_border_color: string;
	styling_imageshow_border_radius: string;
	styling_hlimg_maxwidth: string;
	styling_hlimg_maxheight: string;
}
const hlimg_options_default: hlimgoptions = {
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
	styling_hlimg_maxheight: "100%",
};

let hlimg_options: hlimgoptions;
if (window.document.getElementById("hlimg-options") !== null) {
	hlimg_options = JSON.parse(
		window.document.getElementById("hlimg-options").textContent,
	);
}
if (!(typeof hlimg_options === "undefined")) {
	hlimg_opt = Object.assign(hlimg_options_default, hlimg_options);
} else {
	hlimg_opt = hlimg_options_default;
}
let vierdriedrievijf = hlimg_opt.styling_imageshow_zIndex;
vierdriedrievijf += 1;
const css = `
img.hl-img{-webkit-transition:opacity ${hlimg_opt.timing_fade_opacity}s ease-in-out;-moz-transition:opacity ${hlimg_opt.timing_fade_opacity}s ease-in-out;transition:opacity ${hlimg_opt.timing_fade_opacity}s ease-in-out;}.hl-img:not(.imageshow){cursor:zoom-in;object-fit:contain}#closenotifelm{position:fixed;${hlimg_opt.styling_closenotif_positioning};background-color:${hlimg_opt.styling_closenotif_colors_background};color:${hlimg_opt.styling_closenotif_colors_text};padding:${hlimg_opt.styling_closenotif_padding};border:${hlimg_opt.styling_closenotif_border_thickness}${hlimg_opt.styling_closenotif_border_type}${hlimg_opt.styling_closenotif_border_color};z-index:${vierdriedrievijf};}img.imageshow{position:fixed;margin:auto;${hlimg_opt.styling_imageshow_positioning};z-index:${hlimg_opt.styling_imageshow_zIndex};background-color:${hlimg_opt.styling_imageshow_colors_background};border-radius:${hlimg_opt.styling_imageshow_border_radius};border:${hlimg_opt.styling_imageshow_border_color} ${hlimg_opt.styling_imageshow_border_type} ${hlimg_opt.styling_imageshow_border_thickness};box-shadow:-53px -38px 95px 0px rgba(0,0,0,0.86);-webkit-box-shadow:-53px -38px 95px 0px rgba(0,0,0,0.86);-moz-box-shadow:-53px -38px 95px 0px rgba(0,0,0,0.86);}
`;

const styleSheet = window.document.createElement("style");
styleSheet.innerHTML = css;
window.document.head.appendChild(styleSheet);

const versionDec = window.document.createElement("data");
versionDec.id = "hl-img-version";
versionDec.value = hlimg_ver;
window.document.head.appendChild(versionDec);

interface HLIMGElement extends HTMLImageElement {
	imageshow?: (action: boolean, elem: HLIMGElement) => void;
}
const imoges = window.document.getElementsByTagName(
	"hl-img",
) as HTMLCollectionOf<HTMLElement>;
for (let i = imoges.length - 1; i >= 0; i--) {
	// @ts-ignore
	const pollepel: HTMLImageElement = imoges.item(i);
	const newimogesid = `hl-img-${Math.floor(
		Math.random() * (Math.floor(9999) - Math.ceil(1000) + 1) + Math.ceil(1000),
	)}`;
	const newimoges: HLIMGElement = window.document.createElement("img");
	newimoges.alt = pollepel.getAttribute("alt");
	if (imoges !== null) {
		if (pollepel.getAttribute("style") != null) {
			newimoges.setAttribute("style", pollepel.getAttribute("style"));
		}
		if (pollepel.getAttribute("height") != null) {
			newimoges.setAttribute("height", pollepel.getAttribute("height"));
			newimoges.dataset.htmlheight = pollepel.getAttribute("height");
		}
		if (pollepel.getAttribute("width") != null) {
			newimoges.setAttribute("width", pollepel.getAttribute("width"));
			newimoges.dataset.htmlwidth = pollepel.getAttribute("width");
		}
		// I make this typo a lot lmao
		if (pollepel.getAttribute("widht") != null) {
			newimoges.setAttribute("width", pollepel.getAttribute("widht"));
			newimoges.dataset.htmlwidth = pollepel.getAttribute("widht");
		}
		if (pollepel.style.height != null) {
			newimoges.setAttribute("height", pollepel.style.height);
			newimoges.dataset.htmlheight = pollepel.style.height;
		}
		if (pollepel.style.width != null) {
			newimoges.setAttribute("width", pollepel.style.width);
			newimoges.dataset.htmlwidth = pollepel.style.width;
		}
		if (pollepel.getAttribute("class") != null) {
			newimoges.setAttribute("class", pollepel.getAttribute("class"));
		}
		if (pollepel.getAttribute("id") != null) {
			newimoges.setAttribute("id", pollepel.getAttribute("id"));
		} else {
			newimoges.id = newimogesid;
		}

		newimoges.setAttribute("onclick", "hlimg.imageshow(1, this)");
		// @ts-ignore
		window.hlimg = {
			imageshow: (action: boolean, elem: HLIMGElement) => {
				if (action) {
					console.log(`1/2 Zooming in to ${elem.id}`);
					elem.style.opacity = "0%";
					setTimeout(() => {
						console.log(`2/2 Zooming in to ${elem.id}`);
						elem.classList.add("imageshow");
						elem.setAttribute("onclick", "");
						if (elem.dataset.href != null) {
							elem.setAttribute(
								"onclick",
								`window.open('${elem.dataset.href}');`,
							);
							closenotif.innerHTML = `<p>Click outside of the image to put it back in place! Or click on the image again to open <a href="${elem.dataset.href}" target="_blank">this link</a> in a new tab.</p>`;
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
						(ev) => {
							if (!elem.contains(ev.target as Node)) {
								//@ts-ignore
								window.hlimg.imageshow(false, elem);
								abortController.abort();
							}
						},
						{ signal: abortController.signal },
					);
				} else {
					console.log(`1/2 Zooming out of ${elem.id}`);
					elem.style.opacity = "0%";
					setTimeout(() => {
						console.log(`2/2 Zooming out of ${elem.id}`);
						elem.classList.remove("imageshow");
						elem.setAttribute("onclick", "hlimg.imageshow(1, this)");
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
			},
		};
		if (pollepel.getAttribute("preview") != null) {
			newimoges.dataset.prevsrc = pollepel.getAttribute("preview");
			newimoges.src = pollepel.getAttribute("preview");
		} else {
			newimoges.src = pollepel.getAttribute("src");
			newimoges.dataset.prevsrc = pollepel.getAttribute("src");
		}
		if (pollepel.getAttribute("highlight") != null) {
			newimoges.dataset.showsrc = pollepel.getAttribute("highlight");
		} else {
			newimoges.dataset.showsrc = newimoges.dataset.prevsrc;
		}
		if (pollepel.getAttribute("href") != null) {
			newimoges.dataset.href = pollepel.getAttribute("href");
		}
		newimoges.style.maxWidth = hlimg_opt.styling_hlimg_maxwidth;
		newimoges.style.maxHeight = hlimg_opt.styling_hlimg_maxheight;
		newimoges.title = "Click to show image";
		newimoges.classList.add("hl-img");
		pollepel.parentNode.replaceChild(newimoges, pollepel);
	}
}

console.info(
	`%c hl-img.js by Mar was loaded!%c\nVersion: ${hlimg_ver}\n\r\n for more info check it out on GitHub:\n%chttps://github.com/strawmelonjuice/hl-img.js/`,
	"color: #8A2BE2; font-size:15px;",
	"color: black; font-size:12px;",
	"color: blue; font-size:12px;",
);
