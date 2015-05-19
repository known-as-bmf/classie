# classie - class helper functions

[Ripped from bonzo](https://github.com/ded/bonzo) :heart: @ded

``` js
classie.has( element, 'my-class' ) // returns true/false

classie.add( element, 'my-new-class' ) // add new class
classie.add( element, 'my-new-class', 'my-other-class', 'yet-another-class' ) // add new classes
classie.add( element, ['my-new-class', 'my-other-class', 'yet-another-class'] ) // add new classes

classie.remove( element, 'my-unwanted-class' ) // remove class
classie.remove( element, 'my-unwanted-class', 'my-other-class', 'yet-another-class' ) // remove classes
classie.remove( element, ['my-unwanted-class', 'my-other-class', 'yet-another-class'] ) // remove classes

classie.toggle( element, 'my-class' ) // toggle class
```

## Package management

Install with [Bower](http://bower.io) :bird: `bower install classie`

Install with [npm](https://github.com/npm/npm) `npm install desandro-classie`

Install with [Component](http://github.com/component/component) `component install desandro/classie`

## MIT license

classie is released under the [MIT license](http://desandro.mit-license.org).
