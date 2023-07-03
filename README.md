# hl-img
[![](https://data.jsdelivr.com/v1/package/gh/strawmelonjuice/hl-img.js/badge?style=rounded)](https://www.jsdelivr.com/package/gh/strawmelonjuice/hl-img.js)

I added a custom element into my site for highlightable images, now I need to make it a repo so I don't lose track.
## NOTE:
> Google does not like the use of elements like these, mainly because browsers or bots that don't fire the javascript, will not be able to see any images.

## Embed using jsdelivr
### Directly from main
**May be a bit behind!**
_Minified_
```html
<script src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@main/hl-img.min.js"></script>
```
_Unminified_
```html
<script src="https://cdn.jsdelivr.net/gh/strawmelonjuice/hl-img.js@main/hl-img.js"></script>
```
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
### Inherited
#### `alt`
The `<img>`'s `alt`-attribute is copied one-on-one. No changes in functioning.
#### `src`
`<hl-img>`-elements do support `<img>`'s `src`-attribute, but will only use it as a fallback, in case `preview` is not specified.
### Future support
- ~~`title`~~ used for "Click to show image" now
- `width` and `height`
- `style`
