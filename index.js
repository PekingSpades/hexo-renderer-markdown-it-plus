/**
 * @Author: CHC
 * @Date:   2017-07-24T14:14:59+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: index.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-07-24T14:15:19+08:00
 * @License: MIT
 * @Copyright: 2017
 */

"use strict";
const Renderer = require("./lib/renderer");
const renderer = new Renderer(hexo);
function render(data, options) {
  return renderer.render(data, options);
}

hexo.extend.renderer.register("md", "html", render, true);
hexo.extend.renderer.register("markdown", "html", render, true);
hexo.extend.renderer.register("mkd", "html", render, true);
hexo.extend.renderer.register("mkdn", "html", render, true);
hexo.extend.renderer.register("mdwn", "html", render, true);
hexo.extend.renderer.register("mdtxt", "html", render, true);
hexo.extend.renderer.register("mdtext", "html", render, true);
