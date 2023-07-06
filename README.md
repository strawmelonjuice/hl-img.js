# hl-img
[![](https://data.jsdelivr.com/v1/package/gh/strawmelonjuice/hl-img.js/badge?style=rounded)](https://www.jsdelivr.com/package/gh/strawmelonjuice/hl-img.js)

I added a custom element into my site for highlightable images, now I need to make it a repo so I don't lose track.
## NOTE:
> Google does not like the use of elements like these, mainly because browsers or bots that don't fire the javascript, will not be able to see any images. _Though Google's HTML-checker web.dev loads `hl-img.js` in their tests, allowing it to pass that test after all._

## Embed using jsdelivr
### Latest version
**May be a bit behind on GitHub due to cache refreshes!**

_Minified_
```html
<script defer src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@latest/hl-img.min.js"></script>
```
_Unminified_
```html
<script defer src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@latest/hl-img.js"></script>
```
Thanks to the `defer` attribute, they'll load after the body is loaded, so you _can_ place them anywhere. However, for best reliability, please add this at the end of the `<body>`.

### Version-specific

For version-specific jsdelivr's, see <https://www.jsdelivr.com/package/gh/strawmelonjuice/hl-img.js?tab=files>.
## Attributes
### An example
```html
<hl-img preview="/assets/img/media/art/MM2.png" alt="MouseMouse!" highlight="/assets/img/media/art/MM2.webp"></hl-img>
```
[This](https://strawmelonjuice.com/blog?p=posts/art/mousemouse-3.2) was my first use case of `<hl-img>`.
### Supported
- `preview` – The `preview`-attribute is used as the `src` attribute when the image is _not_ in highlight-mode. If not specified, will be inherited from `src`.

- `highlight` – The `highlight`-attribute is used as the `src` attribute when the image is currently in highlight-mode. If not specified, will be inherited from `preview`.

- `href` – `href` attributes specify which link to open on clicking on the highlighted image.

### Inherited
- `alt` – The `<img>`'s `alt`-attribute is copied one-on-one. No changes in functioning.

- `src` – `<hl-img>`-elements do support `<img>`'s `src`-attribute, but will only use it as a fallback, in case `preview` is not specified.

- `style` – Styles are inherited, but may be altered by `hl-img.js`.

- `id` and `class` – Ids and classes are inherited, however, if none are specified, `hl-img.js` will assign them. It will also add the `hl-image` class in all cases.

- `width` and `height` – Are inherited.

### Future support

Add an issue if you're missing anything.

## Customization

Before calling `hl-img.js`, you can declare some of it's options, if you don't, their defaults will be used.

Here is an example of one such declarations:

```javascript
const hlimg_options = {
  timing_fade_opacity: "0.5s",
  timing_pop_location: 700,
  styling_closenotif_positioning: "top: 2em; right: 2em;",
  styling_closenotif_colors_background: "#000",
  styling_closenotif_colors_text: "#FFF",
  styling_closenotif_border_thickness: "2.5px",
  styling_closenotif_border_type: "solid",
  styling_closenotif_border_color: "gray",
  styling_closenotif_padding: "4px",
  styling_imageshow_zIndex: 900,
  styling_imageshow_positioning:
    "top: 20%; bottom: 20%; left: 10%; right: 10%;",
  styling_imageshow_colors_background: "#f5f5f5",
  styling_imageshow_border_thickness: ".2em",
  styling_imageshow_border_type: "solid",
  styling_imageshow_border_color: "currentColor",
  styling_imageshow_border_radius: "0%",
};
```

This one is defining all the default options --these options would also be used if this wasn't defined beforehand. But all of these values _can_ be changed.

Note that these changes happen globally, so they'll be applied to the entire page, the moment `hl-img.js` is ran.

An example of how an custom configuration would look in HTML:

```HTML
...
<script type="text/javascript">
    const hlimg_options = {
      styling_closenotif_positioning: "bottom: 2em; right: 4em;",
      styling_closenotif_colors_background: "#FFF",
      styling_closenotif_colors_text: "#000",
      styling_imageshow_zIndex: 900000,
      styling_imageshow_colors_background: "#000",
      styling_imageshow_border_radius: "25%",
	};
</script>
<script defer src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@latest/hl-img.js"></script>
</body>
</html>
```

### List of customization variables

- `timing_fade_opacity`  (number) – The time in seconds of the fade-in/fade-out animation on the images. Default: `0.5`
- `timing_pop_location` (number)  – Time in miliseconds to wait before moving images. By default a little longer than `timing_fade_opacity` so that it can run its animation. Default: `700`
- `styling_closenotif_positioning` (string) – CSS code for positioning the closing modal. Default: `top: 2em; right: 2em;`
- `styling_closenotif_colors_background` (string) – Background color for the closing modal. Default: `#000`
- `styling_closenotif_colors_text` (string) – Text color for the closing modal. Default: `#FFF`
- 
-  –  –  –  –  –  –  –  –  –  –  –  –  –  – 
-  –  –  –  –  –  –  –  –  –  –  –  –  –  –  – 
-  –  –  –  –  –  –  –  –  –  –  –  –  –  –  – 