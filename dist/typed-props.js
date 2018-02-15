var TypedProps =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PureProps = function () {
    function PureProps() {
        _classCallCheck(this, PureProps);

        this._checks = [];
    }

    // Get all `type` checks


    _createClass(PureProps, null, [{
        key: 'getChecks',
        value: function getChecks(type) {
            return type._checks.slice();
        }

        // Get check from `type` by `name`

    }, {
        key: 'getCheck',
        value: function getCheck(type, name) {
            var result = type._checks.find(function (item) {
                return item.name === name;
            });

            if (result) {
                return result.args;
            } else {
                return null;
            }
        }
    }, {
        key: 'addMethod',
        value: function addMethod(name) {
            if (this.hasOwnProperty(name)) {
                throw new Error('Checker "' + name + '" exists');
            }

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            addCheckerMethod.apply(undefined, [this, name].concat(args));
        }
    }, {
        key: 'addProperty',
        value: function addProperty(name, checker) {
            if (this.hasOwnProperty(name)) {
                throw new Error('Checker "' + name + '" exists');
            }

            addCheckerProperty(this, name, checker);
        }
    }, {
        key: 'check',
        value: function check(value, typedProps) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = typedProps._checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _step.value,
                        name = _step$value.name,
                        check = _step$value.check,
                        _args = _step$value.args;

                    var reports = check.call.apply(check, [typedProps, value].concat(_toConsumableArray(_args)));

                    if (reports === true || reports === undefined) {
                        continue;
                    }

                    if (reports === false) {
                        return [{
                            path: [],
                            rule: name,
                            details: { is: false }
                        }];
                    } else if (!Array.isArray(reports)) {
                        return [reports];
                    } else {
                        return [].concat(_toConsumableArray(reports));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return [];
        }
    }]);

    return PureProps;
}();

function addCheckerMethod(cls, name) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
    }

    var check = void 0;
    var transform = void 0;
    if (args.length > 1) {
        transform = args[0];
        check = args[1];
    } else {
        transform = null;
        check = args[0];
    }

    if (typeof check !== 'function') {
        throw new Error('Argument `check` should be a function');
    }

    var staticMethod = function staticMethod() {
        var _ref;

        return (_ref = new this())[name].apply(_ref, arguments);
    };

    var instanceMethod = function instanceMethod() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        var clone = new this.constructor();

        if (transform) {
            args = [transform.apply(undefined, _toConsumableArray(args))];
        }

        clone._checks = [].concat(_toConsumableArray(this._checks), [{ name: name, check: check, args: args }]);
        return clone;
    };

    cls[name] = staticMethod;
    cls.prototype[name] = instanceMethod;
}

function addCheckerProperty(cls, name, check) {
    if (typeof check !== 'function') {
        throw new Error('check should be a function');
    }

    Object.defineProperty(cls, name, {
        get: function get() {
            return new this()[name];
        }
    });

    Object.defineProperty(cls.prototype, name, {
        get: function get() {
            var clone = new this.constructor();
            clone._checks = [].concat(_toConsumableArray(this._checks), [{ name: name, check: check, args: [] }]);
            return clone;
        }
    });
}

// TypedProps implementation

var TypedProps = function (_PureProps) {
    _inherits(TypedProps, _PureProps);

    function TypedProps() {
        _classCallCheck(this, TypedProps);

        return _possibleConstructorReturn(this, (TypedProps.__proto__ || Object.getPrototypeOf(TypedProps)).apply(this, arguments));
    }

    return TypedProps;
}(PureProps);

TypedProps.addProperty('number', skipUndef(typeOf('number')));

TypedProps.addProperty('string', skipUndef(typeOf('string')));

TypedProps.addProperty('bool', skipUndef(typeOf('boolean')));

TypedProps.addProperty('func', skipUndef(typeOf('function')));

TypedProps.addProperty('symbol', skipUndef(typeOf('symbol')));

TypedProps.addProperty('object', skipUndef(isObject));

TypedProps.addProperty('array', skipUndef(Array.isArray));

TypedProps.addProperty('isRequired', function (value) {
    return typeof value !== 'undefined';
});

TypedProps.addMethod('instanceOf', skipUndef(function (value, cls) {
    return isObject(value) && value instanceof cls;
}));

TypedProps.addMethod('oneOf', skipUndef(function (value, values) {
    if (!values.includes(value)) {
        return {
            path: [],
            rule: 'oneOf',
            detials: {
                is: value,
                expect: values
            }
        };
    }

    return true;
}));

TypedProps.addMethod('oneOfType', skipUndef(function (value, types) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var type = _step2.value;

            var result = this.constructor.check(value, type);
            if (!result.length) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return false;
}));

TypedProps.addMethod('arrayOf', skipUndef(function (value, type) {
    var _this2 = this;

    if (!Array.isArray(value)) {
        return false;
    }

    var report = value.reduce(function (report, value, i) {
        return [].concat(_toConsumableArray(report), _toConsumableArray(_this2.constructor.check(value, type).map(function (issue) {
            return {
                path: [i].concat(_toConsumableArray(issue.path)),
                rule: issue.rule,
                details: issue.details
            };
        })));
    }, []);

    if (report.length) {
        return report;
    }

    return true;
}));

TypedProps.addMethod('objectOf', skipUndef(function (value, type) {
    var _this3 = this;

    if (!isObject(value)) {
        return false;
    }

    var report = entries(value).reduce(function (report, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            prop = _ref3[0],
            propValue = _ref3[1];

        return [].concat(_toConsumableArray(report), _toConsumableArray(_this3.constructor.check(propValue, type).map(function (issue) {
            return {
                path: [prop].concat(_toConsumableArray(issue.path)),
                rule: issue.rule,
                details: issue.details
            };
        })));
    }, []);

    if (report.length) {
        return report;
    }

    return true;
}));

TypedProps.addMethod('shape', skipUndef(function (value, shape) {
    var _this4 = this;

    if (!isObject(value)) {
        return false;
    }

    var report = entries(shape).reduce(function (report, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            prop = _ref5[0],
            type = _ref5[1];

        return [].concat(_toConsumableArray(report), _toConsumableArray(_this4.constructor.check(value[prop], type).map(function (issue) {
            return {
                path: [prop].concat(_toConsumableArray(issue.path)),
                rule: issue.rule,
                details: issue.details
            };
        })));
    }, []);

    if (report.length) {
        return report;
    }

    return true;
}));

function skipUndef(fn) {
    return function (value) {
        if (value === undefined) {
            return;
        } else {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }

            return fn.call.apply(fn, [this, value].concat(args));
        }
    };
}

function typeOf(type) {
    return function (value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === type;
    };
}

function entries(object) {
    return Object.keys(object).reduce(function (result, key) {
        return [].concat(_toConsumableArray(result), [[key, object[key]]]);
    }, []);
}

function isObject(value) {
    return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

function returnArgs() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
    }

    return args;
}

module.exports = TypedProps;

/***/ })
/******/ ]);