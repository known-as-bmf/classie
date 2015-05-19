/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    var slice = [].slice,
        flatten = [].concat;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        // can pass multiple classes at once
        // addClass(el, 'c1', 'c2', 'c3')
        // or
        // addClass(el, ['c1', 'c2', 'c3'])
        addClass = function () {
            var c, classes, elem, i, len;
            elem = arguments[0], classes = 2 <= arguments.length ? flatten.apply([], slice.call(arguments, 1)) : [];
            for (i = 0, len = classes.length; i < len; i++) {
                c = classes[i];
                elem.classList.add(c);
            }
            // allow call chaining
            return elem;
        };
        // same as add
        removeClass = function () {
            var c, classes, elem, i, len;
            elem = arguments[0], classes = 2 <= arguments.length ? flatten.apply([], slice.call(arguments, 1)) : [];
            for (i = 0, len = classes.length; i < len; i++) {
                c = classes[i];
                elem.classList.remove(c);
            }
            return elem;
        };
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        // same as above
        addClass = function () {
            var c, classes, elem, toAppend;
            elem = arguments[0], classes = 2 <= arguments.length ? flatten.apply([], slice.call(arguments, 1)) : [];
            toAppend = classes.reduce(function (a, b) {
                return !hasClass(elem, b) ? a + ' ' + b : a;
            }, '');
            elem.className = (elem.className + toAppend).trim();
            return elem;
        };
        // same as above
        removeClass = function () {
            var c, classes, elem, i, len, result;
            elem = arguments[0], classes = 2 <= arguments.length ? flatten.apply([], slice.call(arguments, 1)) : [];
            result = elem.className;
            for (i = 0, len = classes.length; i < len; i++) {
                c = classes[i];
                result.replace(classReg(c), '');
            }
            elem.className = result.trim();
            return elem;
        };
    }

    function toggleClass() {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
        return elem;
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = classie;
    } else {
        // browser global
        window.classie = classie;
    }

})(window);
