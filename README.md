<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# IS_ELECTRON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Check if the runtime is [Electron][electron].



<section class="usage">

## Usage

To use in Observable,

```javascript
IS_ELECTRON = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-electron@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var IS_ELECTRON = require( 'path/to/vendor/umd/assert-is-electron/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-electron@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.IS_ELECTRON;
})();
</script>
```

#### IS_ELECTRON

`Boolean` indicating if the runtime is [Electron][electron].

```javascript
var bool = IS_ELECTRON;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-electron@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( IS_ELECTRON );
// => <boolean>

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-electron-main`][@stdlib/assert/is-electron-main]</span><span class="delimiter">: </span><span class="description">check if the runtime is the main Electron process.</span>
-   <span class="package-name">[`@stdlib/assert/is-electron-renderer`][@stdlib/assert/is-electron-renderer]</span><span class="delimiter">: </span><span class="description">check if the runtime is the Electron renderer process.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-electron.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-electron

[test-image]: https://github.com/stdlib-js/assert-is-electron/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-electron/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-electron/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-electron?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-electron.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-electron/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-electron/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-electron/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-electron/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-electron/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-electron/main/LICENSE

[electron]: http://electron.atom.io/

<!-- <related-links> -->

[@stdlib/assert/is-electron-main]: https://github.com/stdlib-js/assert-is-electron-main/tree/umd

[@stdlib/assert/is-electron-renderer]: https://github.com/stdlib-js/assert-is-electron-renderer/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
