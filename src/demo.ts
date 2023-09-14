import express from "express";
const app = express();
import fs from "fs";
import path from "path";
const port = 3000;
const demo_json = JSON.stringify({
      styling_closenotif_positioning: "bottom: 2em; right: 4em;",
      styling_closenotif_colors_background: "#FFF",
      styling_closenotif_colors_text: "#000",
      styling_imageshow_zIndex: 900000,
      styling_imageshow_colors_background: "#000",
      styling_imageshow_border_radius: "25%",
      styling_hlimg_maxwidth: "85%",
	});
const demo_html = fs.readFileSync(path.join(__dirname,"../demo-files/html/demo.html"), { encoding: "utf8", flag: "r" });
const demo = `<script id="hlimg-options" type="application/json">${demo_json}</script>\n${demo_html}`;
const styles = `
    #localver {
      background-color: #32a723;
    }

    #latestver {
      background-color: #006eff;
    }

    .code-block-1 {
      font-family: mono;
      background-color: #455245;
      color: #FFF2FF
    }

    #infoblock-1 {
      text-align: center;
      font-style: italic;
    }

    .ver-d {
      font-size: larger;
    }
`;

app.get("/", (req, res) => {
	res.send(`
    <!DOCTYPE html>
<HTML>
<HEAD>
<TITLE>hl-img test</TITLE>
<script>
window.hlimgversions = {}
</script>
<data id="localver"></data>
</HEAD>
<FRAMESET ROWS="60px,*">
  <FRAME SRC="/1.html" id="main" NORESIZE>
  <FRAMESET cols="50%,50%">
    <FRAME SRC="/2.html">
    <FRAME SRC="/3.html">
  </FRAMESET>
</FRAMESET>
</HTML>`);
});
app.get("/1.html", (req, res) => {
	res.send(`
  <html>

<head>
  <style>
    ${styles}
  </style>
</head>

<body>
  <p>
  <ul style="list-style:none;">
    <li style="float: left; display: inline; font-size: 9px">Local <span class="code-block-1">hl-img.ts</span>, version
      <code id="localver" class="ver-d">local version</code></li>
    <li style="float: right; display: inline; font-size: 9px">Release <span class="code-block-1">hl-img.js</span>,
      version <code id="latestver" class="ver-d">latest release version</code></li>
  </ul>
  </p>
  <p id="infoblock-1">Both are showing the image injected by <span style="font-family: mono">${path.join(__dirname,"../demo-files/html/demo.html")}</span>.</p>
  <script>
    // 3rd file to run.
      setTimeout(function () {
        console.log("1.js is the 3rd file to run");
        console.log(\`latest: \${window.parent.hlimgversions.latest}, local: \${window.parent.hlimgversions.local}\`)
        document.getElementById("latestver").innerHTML = window.parent.hlimgversions.latest;
        document.getElementById("localver").innerHTML = window.parent.hlimgversions.local;
      }, 1500);
  </script>
</body>
</html>
  `);
});
app.get("/2.html", (req, res) => {
  res.send(`
<html>
  <head>
    <style>
      ${styles}
    </style>
  </head>
  <body>
    <div id="example">${demo}</div>
    <script defer type="module" src="/local.js"></script>
  <script>
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
          output = "v" + document.getElementById('hl-img-version').value;
        } catch (TypeError) {
          output = "Errored out."
        }
        output = output;
        window.parent.hlimgversions.local = output;
      }, 500);
  </script>
  </body>
</html>
`);
});

app.get("/3.html", (req, res) => {
	res.send(
		`
<html>
  <head>
    <style>
      ${styles}
    </style>
  </head>
  <body>
    <div id="example">${demo}</div>
    <script defer type="module" src="https://cdn.jsdelivr.net/npm/hl-img@2/dist/hl-img.js"></script>
  <script>
    // 2nd file to run
      setTimeout(function () {
        console.log("3.js is the 2nd file to run");
        try {
          output = document.getElementById('hl-img-version').value;
        } catch (TypeError) {
          if (ver !== null) {
            output = ver;
          } else if (hlimg_ver !== null) {
            output = hlimg_ver;
          } else {
            output = "1.10.4 or older."
          }
        }
        output = "v" + output;
        window.parent.hlimgversions.latest = output;
      }, 1000);
  </script>
  </body>
</html>
`
	);});
app.use("/png", express.static(path.join(__dirname, "../demo-files/png")));
app.use("/local.js", express.static(path.join(__dirname, "../dist/hl-img.js")));
app.listen(port, () => {
	console.log(`Demo running on http://localhost:${port}/`);
});
