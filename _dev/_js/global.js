//we are importing stylesheets related files here, because putting non-js files as webpack entries generate js as well, see: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/518 
import '../_scss/global.scss';
import { UI } from './ui';

// for some cases it was impossible to match height of elements, so we needed to take care of it via js (mainly for blog posts items)
// using additional module, see: https://github.com/yomotsu/MatchHeight
// hopefully, in future CSS subgrids spec arrives...
import MatchHeight from 'matchheight';

document.addEventListener("DOMContentLoaded", () => { 
    UI.init();
    UI.nav.bind();
    UI.header.resizeOnScroll();
    UI.svg.inline();
    UI.scrollTo.bind();
} );