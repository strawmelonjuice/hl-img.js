# hl-img
[![](https://data.jsdelivr.com/v1/package/gh/strawmelonjuice/hl-img.js/badge?style=rounded)](https://www.jsdelivr.com/package/gh/strawmelonjuice/hl-img.js)

I added a custom element into my site for highlightable images, now I need to make it a repo so I don't lose track.
## NOTE:
> Google does not like the use of elements like these, mainly because browsers or bots that don't fire the javascript, will not be able to see any images.

## Embed using jsdelivr
### Directly from main
**May be a bit behind on GitHub due to cache refreshes!**

_Minified_
```html
<script defer src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@main/hl-img.min.js"></script>
```
_Unminified_
```html
<script defer src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@main/hl-img.js"></script>
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
#### `preview`
The `preview`-attribute is used as the `src` attribute when the image is _not_ in highlight-mode. If not specified, will be inherited from `src`.
#### `highlight`
The `highlight`-attribute is used as the `src` attribute when the image is currently in highlight-mode. If not specified, will be inherited from `preview`.

#### `href`

`href` attributes specify which link to open on clicking on the highlighted image.

### Inherited
#### `alt`
The `<img>`'s `alt`-attribute is copied one-on-one. No changes in functioning.
#### `src`
`<hl-img>`-elements do support `<img>`'s `src`-attribute, but will only use it as a fallback, in case `preview` is not specified.

#### `style`

Styles are inherited, but may be altered by `hl-img.js`.

#### `id` and `class`

Ids and classes are inherited, however, if none are specified, `hl-img.js` will assign them. It will also add the `hl-image` class in all cases.

#### `width` and `height`

Are inherited.

### Future support

- Closing modal styling

Add an issue if you're missing anything.