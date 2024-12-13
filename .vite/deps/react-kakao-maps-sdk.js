"use client";
import {
  require_react_dom
} from "./chunk-UP6LQVYV.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React23 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React23.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx11 = jsxWithValidationDynamic;
        var jsxs4 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx11;
        exports.jsxs = jsxs4;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-kakao-maps-sdk/esm/components/Map.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-kakao-maps-sdk/esm/hooks/useIsomorphicLayoutEffect.js
var import_react = __toESM(require_react(), 1);
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;

// node_modules/react-kakao-maps-sdk/esm/hooks/useKakaoEvent.js
var useKakaoEvent = (target, type, callback) => {
  useIsomorphicLayoutEffect(() => {
    if (!target || !callback) return;
    const wrapCallback = function() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }
      if (arg === void 0) return callback(target);
      else return callback(target, ...arg);
    };
    kakao.maps.event.addListener(target, type, wrapCallback);
    return () => {
      kakao.maps.event.removeListener(target, type, wrapCallback);
    };
  }, [target, type, callback]);
};

// node_modules/react-kakao-maps-sdk/esm/util/constants.js
var SIGNATURE = `__react-kakao-maps-sdk__`;

// node_modules/react-kakao-maps-sdk/esm/util/kakaoMapApiLoader.js
var LoaderStatus = function(LoaderStatus2) {
  LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
  LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
  return LoaderStatus2;
}({});
var DEFAULT_ID = `${SIGNATURE}_Loader`;
var _Loader = class _Loader {
  constructor(_ref) {
    __publicField(this, "callbacks", []);
    __publicField(this, "done", false);
    __publicField(this, "loading", false);
    __publicField(this, "errors", []);
    let {
      appkey,
      id = DEFAULT_ID,
      libraries = [],
      nonce,
      retries = 3,
      url = "//dapi.kakao.com/v2/maps/sdk.js"
    } = _ref;
    this.id = id;
    this.appkey = appkey;
    this.libraries = libraries;
    this.nonce = nonce;
    this.retries = retries;
    this.url = url;
    if (_Loader.instance && !_Loader.equalOptions(this.options, _Loader.instance.options)) {
      if (!_Loader.equalOptions(this.options, _Loader.instance.options)) {
        switch (_Loader.instance.status) {
          case LoaderStatus.FAILURE:
            throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options, null, 2)}
!==
${JSON.stringify(_Loader.instance.options, null, 2)}`);
          default:
            _Loader.instance.reset();
            _Loader.instance = this;
            break;
        }
      }
    }
    if (!_Loader.instance) {
      _Loader.instance = this;
    }
    return _Loader.instance;
  }
  get options() {
    return {
      appkey: this.appkey,
      id: this.id,
      libraries: this.libraries,
      nonce: this.nonce,
      retries: this.retries,
      url: this.url
    };
  }
  static addLoadEventLisnter(callback) {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(callback);
    }
    _Loader.loadEventCallback.add(callback);
    return callback;
  }
  static removeLoadEventLisnter(callback) {
    return _Loader.loadEventCallback.delete(callback);
  }
  load() {
    return new Promise((resolve, reject) => {
      this.loadCallback((err) => {
        if (!err) {
          resolve(window.kakao);
        } else {
          reject(err);
        }
      });
    });
  }
  get status() {
    if (this.onEvent) {
      return LoaderStatus.FAILURE;
    }
    if (this.done) {
      return LoaderStatus.SUCCESS;
    }
    if (this.loading) {
      return LoaderStatus.LOADING;
    }
    return LoaderStatus.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  reset() {
    this.deleteScript();
    this.done = true;
    this.loading = false;
    this.errors = [];
    this.onEvent = void 0;
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.done) {
      this.callback();
    } else {
      if (window.kakao && window.kakao.maps) {
        console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다.");
        window.kakao.maps.load(this.callback);
        return;
      }
      if (!this.loading) {
        this.loading = true;
        this.setScript();
      }
    }
  }
  setScript() {
    if (document.getElementById(this.id)) {
      this.callback();
    }
    const url = this.createUrl();
    const script = document.createElement("script");
    script.id = this.id;
    script.type = "text/javascript";
    script.src = url;
    script.onerror = this.loadErrorCallback.bind(this);
    script.onload = this.callback.bind(this);
    script.defer = true;
    script.async = true;
    if (this.nonce) {
      script.nonce = this.nonce;
    }
    document.head.appendChild(script);
  }
  loadErrorCallback(event) {
    this.errors.push(event);
    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * 2 ** this.errors.length;
      console.log(`Failed to load Kakao Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.done = true;
      this.loading = false;
      this.onEvent = this.errors[this.errors.length - 1];
      this.callbacks.forEach((cb) => {
        cb(this.onEvent);
      });
      this.callbacks = [];
      _Loader.loadEventCallback.forEach((cb) => {
        cb(this.onEvent);
      });
    }
  }
  createUrl() {
    let url = this.url;
    url += `?appkey=${this.appkey}`;
    if (this.libraries.length) {
      url += `&libraries=${this.libraries.join(",")}`;
    }
    url += `&autoload=false`;
    return url;
  }
  deleteScript() {
    const script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  callback() {
    kakao.maps.load(() => {
      _Loader.instance.done = true;
      _Loader.instance.loading = false;
      _Loader.instance.callbacks.forEach((cb) => {
        cb(_Loader.instance.onEvent);
      });
      _Loader.instance.callbacks = [];
      _Loader.loadEventCallback.forEach((cb) => {
        cb(_Loader.instance.onEvent);
      });
    });
  }
  static equalOptions(a, b) {
    if (a.appkey !== b.appkey) return false;
    if (a.id !== b.id) return false;
    if (a.libraries.length !== b.libraries.length) return false;
    for (let i = 0; i < a.libraries.length; ++i) {
      if (a.libraries[i] !== b.libraries[i]) return false;
    }
    if (a.nonce !== b.nonce) return false;
    if (a.retries !== b.retries) return false;
    if (a.url !== b.url) return false;
    return true;
  }
};
__publicField(_Loader, "loadEventCallback", /* @__PURE__ */ new Set());
var Loader = _Loader;

// node_modules/react-kakao-maps-sdk/esm/hooks/useKakaoMapsSetEffect.js
var useKakaoMapsSetEffect = function(target, method) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  useIsomorphicLayoutEffect(() => {
    if (!target || args.every((arg) => typeof arg === "undefined")) return;
    target[method].call(target, ...args);
  }, [target, method, ...args]);
};

// node_modules/react-kakao-maps-sdk/esm/components/Map.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var KakaoMapContext = import_react2.default.createContext(void 0);
var Map2 = import_react2.default.forwardRef(function Map3(_ref, ref) {
  let {
    id,
    as,
    children,
    center,
    isPanto = false,
    padding = 32,
    disableDoubleClick,
    disableDoubleClickZoom,
    draggable,
    zoomable,
    keyboardShortcuts,
    level,
    maxLevel,
    minLevel,
    mapTypeId,
    projectionId,
    scrollwheel,
    tileAnimation,
    onBoundsChanged,
    onCenterChanged,
    onClick,
    onDoubleClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onIdle,
    onMaptypeidChanged,
    onMouseMove,
    onRightClick,
    onTileLoaded,
    onZoomChanged,
    onZoomStart,
    onCreate,
    ...props
  } = _ref;
  const Container = as || "div";
  const [isLoaded, setIsLoaded] = (0, import_react2.useState)(false);
  const [map, setMap] = (0, import_react2.useState)();
  const container = (0, import_react2.useRef)(null);
  useIsomorphicLayoutEffect(() => {
    const callback = Loader.addLoadEventLisnter((err) => setIsLoaded(!err));
    return () => {
      Loader.removeLoadEventLisnter(callback);
    };
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (!isLoaded) return;
    const MapContainer = container.current;
    if (!MapContainer) return;
    const initalMapCenter = "lat" in center ? new kakao.maps.LatLng(center.lat, center.lng) : new kakao.maps.Coords(center.x, center.y);
    const kakaoMap = new kakao.maps.Map(MapContainer, {
      center: initalMapCenter,
      disableDoubleClick,
      disableDoubleClickZoom,
      draggable,
      keyboardShortcuts,
      level,
      mapTypeId: typeof mapTypeId === "string" ? kakao.maps.MapTypeId[mapTypeId] : mapTypeId,
      projectionId,
      scrollwheel,
      tileAnimation
    });
    setMap(kakaoMap);
    return () => {
      MapContainer.innerHTML = "";
    };
  }, [isLoaded, disableDoubleClick, disableDoubleClickZoom, tileAnimation]);
  (0, import_react2.useImperativeHandle)(ref, () => map, [map]);
  useIsomorphicLayoutEffect(() => {
    if (!map || !onCreate) return;
    onCreate(map);
  }, [map, onCreate]);
  useIsomorphicLayoutEffect(() => {
    if (!map) return;
    let prevCenter = map.getCenter();
    if (prevCenter instanceof kakao.maps.Coords) {
      prevCenter = prevCenter.toLatLng();
    }
    const centerPosition = "lat" in center ? new kakao.maps.LatLng(center.lat, center.lng) : new kakao.maps.Coords(center.x, center.y);
    if (centerPosition instanceof kakao.maps.LatLng && centerPosition.equals(prevCenter) || centerPosition instanceof kakao.maps.Coords && centerPosition.toLatLng().equals(prevCenter)) {
      return;
    }
    if (isPanto) {
      map.panTo(centerPosition, padding);
    } else {
      map.setCenter(centerPosition);
    }
  }, [map, center.lat, center.lng, center.x, center.y]);
  useKakaoMapsSetEffect(map, "setDraggable", draggable);
  useKakaoMapsSetEffect(map, "setZoomable", zoomable);
  useKakaoMapsSetEffect(map, "setKeyboardShortcuts", keyboardShortcuts);
  useKakaoMapsSetEffect(map, "setLevel", level);
  useKakaoMapsSetEffect(map, "setMapTypeId", isLoaded ? typeof mapTypeId === "string" ? kakao.maps.MapTypeId[mapTypeId] : mapTypeId : void 0);
  useKakaoMapsSetEffect(map, "setProjectionId", projectionId);
  useKakaoMapsSetEffect(map, "setMinLevel", maxLevel);
  useKakaoMapsSetEffect(map, "setMaxLevel", minLevel);
  useKakaoEvent(map, "bounds_changed", onBoundsChanged);
  useKakaoEvent(map, "center_changed", onCenterChanged);
  useKakaoEvent(map, "click", onClick);
  useKakaoEvent(map, "dblclick", onDoubleClick);
  useKakaoEvent(map, "drag", onDrag);
  useKakaoEvent(map, "dragstart", onDragStart);
  useKakaoEvent(map, "dragend", onDragEnd);
  useKakaoEvent(map, "idle", onIdle);
  useKakaoEvent(map, "maptypeid_changed", onMaptypeidChanged);
  useKakaoEvent(map, "mousemove", onMouseMove);
  useKakaoEvent(map, "rightclick", onRightClick);
  useKakaoEvent(map, "tilesloaded", onTileLoaded);
  useKakaoEvent(map, "zoom_changed", onZoomChanged);
  useKakaoEvent(map, "zoom_start", onZoomStart);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [(0, import_jsx_runtime.jsx)(Container, {
      id: id || `${SIGNATURE}_Map`,
      ...props,
      ref: container
    }), map && (0, import_jsx_runtime.jsx)(KakaoMapContext.Provider, {
      value: map,
      children
    })]
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/MapMarker.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/react-kakao-maps-sdk/esm/hooks/useMap.js
var import_react3 = __toESM(require_react(), 1);
var useMap = (componentName) => {
  const kakaoMap = (0, import_react3.useContext)(KakaoMapContext);
  if (!kakaoMap) {
    throw new Error(`${componentName ? componentName + " Component" : "useMap"} must exist inside Map Component!`);
  }
  return kakaoMap;
};

// node_modules/react-kakao-maps-sdk/esm/components/Marker.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/react-kakao-maps-sdk/esm/components/InfoWindow.js
var import_react4 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var InfoWindow = import_react4.default.forwardRef(function InfoWindow2(_ref, ref) {
  let {
    map,
    position,
    marker,
    children,
    altitude,
    disableAutoPan,
    range,
    removable,
    zIndex,
    onCreate
  } = _ref;
  const infoWindow = (0, import_react4.useMemo)(() => {
    const container2 = document.createElement("div");
    container2.style.display = "none";
    const kakaoInfoWindow = new kakao.maps.InfoWindow({
      altitude,
      disableAutoPan,
      range,
      removable,
      zIndex,
      content: container2,
      position
    });
    return kakaoInfoWindow;
  }, [disableAutoPan, removable]);
  const container = (0, import_react4.useMemo)(() => infoWindow.getContent(), [infoWindow]);
  (0, import_react4.useImperativeHandle)(ref, () => infoWindow, [infoWindow]);
  (0, import_react4.useLayoutEffect)(() => {
    infoWindow.open(map, marker);
    return () => {
      infoWindow.close();
    };
  }, [map, marker]);
  (0, import_react4.useLayoutEffect)(() => {
    if (onCreate) onCreate(infoWindow);
  }, [infoWindow, onCreate]);
  useKakaoMapsSetEffect(infoWindow, "setPosition", position);
  useKakaoMapsSetEffect(infoWindow, "setAltitude", altitude);
  useKakaoMapsSetEffect(infoWindow, "setRange", range);
  useKakaoMapsSetEffect(infoWindow, "setZIndex", zIndex);
  return import_react_dom.default.createPortal(children, container.parentElement ?? container);
});

// node_modules/react-kakao-maps-sdk/esm/components/MarkerClusterer.js
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var KakaoMapMarkerClustererContext = import_react5.default.createContext(void 0);
var MarkerClusterer = import_react5.default.forwardRef(function MarkerClusterer2(_ref, ref) {
  let {
    onClusterclick,
    onClusterdblclick,
    onClustered,
    onClusterout,
    onClusterover,
    onClusterrightclick,
    onCreate,
    ...props
  } = _ref;
  const {
    children,
    averageCenter,
    calculator,
    clickable,
    disableClickZoom,
    gridSize,
    hoverable,
    minClusterSize,
    minLevel,
    styles,
    texts
  } = props;
  const map = useMap(`MarkerClusterer`);
  const markerClusterer = (0, import_react5.useMemo)(() => {
    if (!window.kakao.maps.MarkerClusterer) {
      console.warn("clusterer 라이브러리를 별도 로드 해야 사용 가능합니다. `https://apis.map.kakao.com/web/guide/#loadlibrary`");
      return;
    }
    return new kakao.maps.MarkerClusterer({
      averageCenter,
      calculator,
      clickable,
      disableClickZoom,
      gridSize,
      hoverable,
      minClusterSize,
      minLevel,
      styles,
      texts
    });
  }, []);
  (0, import_react5.useImperativeHandle)(ref, () => markerClusterer, [markerClusterer]);
  (0, import_react5.useLayoutEffect)(() => {
    if (!markerClusterer) return;
    markerClusterer.setMap(map);
    return () => {
      markerClusterer.setMap(null);
    };
  }, [map, markerClusterer]);
  (0, import_react5.useLayoutEffect)(() => {
    if (markerClusterer && onCreate) onCreate(markerClusterer);
  }, [markerClusterer, onCreate]);
  useKakaoMapsSetEffect(markerClusterer, "setGridSize", gridSize);
  useKakaoMapsSetEffect(markerClusterer, "setMinClusterSize", minClusterSize);
  useKakaoMapsSetEffect(markerClusterer, "setAverageCenter", averageCenter);
  useKakaoMapsSetEffect(markerClusterer, "setAverageCenter", averageCenter);
  useKakaoMapsSetEffect(markerClusterer, "setMinLevel", minLevel);
  useKakaoMapsSetEffect(markerClusterer, "setTexts", texts);
  useKakaoMapsSetEffect(markerClusterer, "setCalculator", calculator);
  useKakaoMapsSetEffect(markerClusterer, "setStyles", styles);
  useKakaoEvent(markerClusterer, "clustered", onClustered);
  useKakaoEvent(markerClusterer, "clusterclick", onClusterclick);
  useKakaoEvent(markerClusterer, "clusterover", onClusterover);
  useKakaoEvent(markerClusterer, "clusterout", onClusterout);
  useKakaoEvent(markerClusterer, "clusterdblclick", onClusterdblclick);
  useKakaoEvent(markerClusterer, "clusterrightclick", onClusterrightclick);
  if (!markerClusterer) {
    return null;
  }
  return (0, import_jsx_runtime2.jsxs)(KakaoMapMarkerClustererContext.Provider, {
    value: markerClusterer,
    children: [children, (0, import_jsx_runtime2.jsx)(MarkerClustererRedraw, {
      ...props
    })]
  });
});
var MarkerClustererRedraw = () => {
  const markerClusterer = (0, import_react5.useContext)(KakaoMapMarkerClustererContext);
  useIsomorphicLayoutEffect(() => {
    markerClusterer.redraw();
  });
  return null;
};

// node_modules/react-kakao-maps-sdk/esm/components/Marker.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Marker = import_react6.default.forwardRef(function Marker2(_ref, ref) {
  let {
    map,
    position,
    children,
    altitude,
    clickable,
    draggable,
    image,
    infoWindowOptions,
    onCreate,
    onClick,
    onDragEnd,
    onDragStart,
    onMouseOut,
    onMouseOver,
    opacity,
    range,
    title,
    zIndex
  } = _ref;
  const markerCluster = (0, import_react6.useContext)(KakaoMapMarkerClustererContext);
  const markerImage = (0, import_react6.useMemo)(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return image && new kakao.maps.MarkerImage(image.src, new kakao.maps.Size(image.size.width, image.size.height), {
      alt: (_a = image.options) == null ? void 0 : _a.alt,
      coords: (_b = image.options) == null ? void 0 : _b.coords,
      offset: ((_c = image.options) == null ? void 0 : _c.offset) && new kakao.maps.Point((_d = image.options) == null ? void 0 : _d.offset.x, (_e = image.options) == null ? void 0 : _e.offset.y),
      shape: (_f = image.options) == null ? void 0 : _f.shape,
      spriteOrigin: ((_g = image.options) == null ? void 0 : _g.spriteOrigin) && new kakao.maps.Point((_h = image.options) == null ? void 0 : _h.spriteOrigin.x, (_i = image.options) == null ? void 0 : _i.spriteOrigin.y),
      spriteSize: ((_j = image.options) == null ? void 0 : _j.spriteSize) && new kakao.maps.Size((_k = image.options) == null ? void 0 : _k.spriteSize.width, (_l = image.options) == null ? void 0 : _l.spriteSize.height)
    });
  }, [JSON.stringify(image)]);
  const marker = (0, import_react6.useMemo)(() => {
    const kakaoMarker = new kakao.maps.Marker({
      altitude,
      clickable,
      draggable,
      image: markerImage,
      opacity,
      range,
      title,
      zIndex,
      position
    });
    return kakaoMarker;
  }, []);
  (0, import_react6.useImperativeHandle)(ref, () => marker, [marker]);
  (0, import_react6.useLayoutEffect)(() => {
    if (markerCluster) {
      markerCluster.addMarker(marker, true);
      return () => markerCluster.removeMarker(marker, true);
    }
    marker.setMap(map);
    return () => marker.setMap(null);
  }, [map, markerCluster, marker]);
  (0, import_react6.useLayoutEffect)(() => {
    if (onCreate) onCreate(marker);
  }, [marker, onCreate]);
  useKakaoMapsSetEffect(marker, "setPosition", position);
  useKakaoMapsSetEffect(marker, "setImage", markerImage);
  useKakaoMapsSetEffect(marker, "setAltitude", altitude);
  useKakaoMapsSetEffect(marker, "setClickable", clickable);
  useKakaoMapsSetEffect(marker, "setDraggable", draggable);
  useKakaoMapsSetEffect(marker, "setOpacity", opacity);
  useKakaoMapsSetEffect(marker, "setRange", range);
  useKakaoMapsSetEffect(marker, "setRange", range);
  useKakaoMapsSetEffect(marker, "setTitle", title);
  useKakaoMapsSetEffect(marker, "setTitle", title);
  useKakaoMapsSetEffect(marker, "setZIndex", zIndex);
  useKakaoEvent(marker, "click", onClick);
  useKakaoEvent(marker, "dragstart", onDragStart);
  useKakaoEvent(marker, "dragend", onDragEnd);
  useKakaoEvent(marker, "mouseout", onMouseOut);
  useKakaoEvent(marker, "mouseover", onMouseOver);
  if (children) return (0, import_jsx_runtime3.jsx)(InfoWindow, {
    position,
    map,
    marker,
    altitude: infoWindowOptions == null ? void 0 : infoWindowOptions.altitude,
    disableAutoPan: infoWindowOptions == null ? void 0 : infoWindowOptions.disableAutoPan,
    range: infoWindowOptions == null ? void 0 : infoWindowOptions.range,
    removable: infoWindowOptions == null ? void 0 : infoWindowOptions.removable,
    zIndex: infoWindowOptions == null ? void 0 : infoWindowOptions.zIndex,
    children
  });
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/MapMarker.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var MapMarker = import_react7.default.forwardRef(function MapMarker2(_ref, ref) {
  let {
    position,
    ...args
  } = _ref;
  const map = useMap(`MapMarker`);
  const markerPosition = (0, import_react7.useMemo)(() => {
    if ("lat" in position) {
      return new kakao.maps.LatLng(position.lat, position.lng);
    }
    return new kakao.maps.Coords(position.x, position.y).toLatLng();
  }, [position.lat, position.lng, position.x, position.y]);
  return (0, import_jsx_runtime4.jsx)(Marker, {
    map,
    position: markerPosition,
    ...args,
    ref
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/MapInfoWindow.js
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var MapInfoWindow = import_react8.default.forwardRef(function MapInfoWindow2(_ref, ref) {
  let {
    position,
    children,
    disableAutoPan,
    removable,
    zIndex,
    onCreate
  } = _ref;
  const map = useMap(`MapInfoWindow`);
  const infoPosition = (0, import_react8.useMemo)(() => {
    return new kakao.maps.LatLng(position.lat, position.lng);
  }, [position.lat, position.lng]);
  return (0, import_jsx_runtime5.jsx)(InfoWindow, {
    disableAutoPan,
    removable,
    zIndex,
    map,
    position: infoPosition,
    onCreate,
    ref,
    children
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/CustomOverlayMap.js
var import_react9 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var CustomOverlayMap = import_react9.default.forwardRef(function CustomOverlayMap2(_ref, ref) {
  let {
    position,
    children,
    clickable,
    xAnchor,
    yAnchor,
    zIndex,
    onCreate
  } = _ref;
  const markerCluster = (0, import_react9.useContext)(KakaoMapMarkerClustererContext);
  const map = useMap(`CustomOverlayMap`);
  const overlayPosition = (0, import_react9.useMemo)(() => {
    return new kakao.maps.LatLng(position.lat, position.lng);
  }, [position.lat, position.lng]);
  const overlay = (0, import_react9.useMemo)(() => {
    const container2 = document.createElement("div");
    container2.style.display = "none";
    const KakaoCustomOverlay = new kakao.maps.CustomOverlay({
      clickable,
      xAnchor,
      yAnchor,
      zIndex,
      position: overlayPosition,
      content: container2
    });
    return KakaoCustomOverlay;
  }, [clickable, xAnchor, yAnchor]);
  const container = (0, import_react9.useMemo)(() => overlay.getContent(), [overlay]);
  (0, import_react9.useImperativeHandle)(ref, () => overlay, [overlay]);
  (0, import_react9.useLayoutEffect)(() => {
    if (!map) return;
    if (markerCluster) {
      markerCluster.addMarker(overlay, true);
    } else {
      overlay.setMap(map);
    }
    return () => {
      if (markerCluster) {
        markerCluster.removeMarker(overlay, true);
      } else {
        overlay.setMap(null);
      }
    };
  }, [map, markerCluster, overlay]);
  (0, import_react9.useLayoutEffect)(() => {
    if (onCreate) onCreate(overlay);
  }, [overlay, onCreate]);
  useKakaoMapsSetEffect(overlay, "setPosition", overlayPosition);
  useKakaoMapsSetEffect(overlay, "setZIndex", zIndex);
  return container.parentElement && import_react_dom2.default.createPortal(children, container.parentElement);
});

// node_modules/react-kakao-maps-sdk/esm/components/MapTypeControl.js
var import_react10 = __toESM(require_react(), 1);
var MapTypeControl = import_react10.default.forwardRef(function MapTypeControl2(_ref, ref) {
  let {
    position: _position = kakao.maps.ControlPosition.TOPRIGHT
  } = _ref;
  const map = useMap(`MapTypeControl`);
  const position = typeof _position === "string" ? kakao.maps.ControlPosition[_position] : _position;
  const mapTypeControl = (0, import_react10.useMemo)(() => {
    return new kakao.maps.MapTypeControl();
  }, []);
  (0, import_react10.useImperativeHandle)(ref, () => mapTypeControl, [mapTypeControl]);
  (0, import_react10.useLayoutEffect)(() => {
    map.addControl(mapTypeControl, position);
    return () => {
      map.removeControl(position);
    };
  }, [map, mapTypeControl, position]);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/ZoomControl.js
var import_react11 = __toESM(require_react(), 1);
var ZoomControl = import_react11.default.forwardRef(function ZoomControl2(_ref, ref) {
  let {
    position: _position = kakao.maps.ControlPosition.RIGHT
  } = _ref;
  const map = useMap(`ZoomControl`);
  const position = typeof _position === "string" ? kakao.maps.ControlPosition[_position] : _position;
  const ZoomControl3 = (0, import_react11.useMemo)(() => {
    return new kakao.maps.ZoomControl();
  }, []);
  (0, import_react11.useImperativeHandle)(ref, () => ZoomControl3, [ZoomControl3]);
  (0, import_react11.useLayoutEffect)(() => {
    map.addControl(ZoomControl3, position);
    return () => {
      map.removeControl(ZoomControl3);
    };
  }, [map, position, ZoomControl3]);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/MapTypeId.js
var import_react12 = __toESM(require_react(), 1);
var MapTypeId = (_ref) => {
  let {
    type: _type
  } = _ref;
  const map = useMap(`MapTypeId`);
  const type = typeof _type === "string" ? kakao.maps.MapTypeId[_type] : _type;
  (0, import_react12.useLayoutEffect)(() => {
    map.addOverlayMapTypeId(type);
    return () => {
      map.removeOverlayMapTypeId(type);
    };
  }, [map, type]);
  return null;
};

// node_modules/react-kakao-maps-sdk/esm/components/Circle.js
var import_react13 = __toESM(require_react(), 1);
var Circle = import_react13.default.forwardRef(function Circle2(_ref, ref) {
  let {
    center,
    radius,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
    zIndex,
    onMouseover,
    onMouseout,
    onMousemove,
    onMousedown,
    onClick,
    onCreate
  } = _ref;
  const map = useMap(`Circle`);
  const circleCenter = (0, import_react13.useMemo)(() => {
    return new kakao.maps.LatLng(center.lat, center.lng);
  }, [center.lat, center.lng]);
  const circle = (0, import_react13.useMemo)(() => {
    return new kakao.maps.Circle({
      center: circleCenter,
      radius,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex
    });
  }, []);
  (0, import_react13.useImperativeHandle)(ref, () => circle, [circle]);
  (0, import_react13.useLayoutEffect)(() => {
    circle.setMap(map);
    return () => {
      circle.setMap(null);
    };
  }, [map, circle]);
  (0, import_react13.useLayoutEffect)(() => {
    if (onCreate) onCreate(circle);
  }, [circle, onCreate]);
  useKakaoMapsSetEffect(circle, "setPosition", circleCenter);
  useKakaoMapsSetEffect(circle, "setRadius", radius);
  useKakaoMapsSetEffect(circle, "setZIndex", zIndex);
  (0, import_react13.useLayoutEffect)(() => {
    circle.setOptions({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight
    });
  }, [circle, fillColor, fillOpacity, strokeColor, strokeOpacity, strokeStyle, strokeWeight]);
  useKakaoEvent(circle, "mouseover", onMouseover);
  useKakaoEvent(circle, "mouseout", onMouseout);
  useKakaoEvent(circle, "mousemove", onMousemove);
  useKakaoEvent(circle, "mousedown", onMousedown);
  useKakaoEvent(circle, "click", onClick);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/Polyline.js
var import_react14 = __toESM(require_react(), 1);
var Polyline = import_react14.default.forwardRef(function Polyline2(_ref, ref) {
  let {
    path,
    endArrow,
    onClick,
    onMousedown,
    onMousemove,
    onMouseout,
    onMouseover,
    onCreate,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
    zIndex
  } = _ref;
  const map = useMap(`Polyline`);
  const polyLinePath = (0, import_react14.useMemo)(() => {
    if (path.every((v) => v instanceof Array)) {
      return path.map((v) => {
        return v.map((p) => new kakao.maps.LatLng(p.lat, p.lng));
      });
    }
    return path.map((v) => {
      return new kakao.maps.LatLng(v.lat, v.lng);
    });
  }, [path]);
  const polyline = (0, import_react14.useMemo)(() => {
    return new kakao.maps.Polyline({
      path: polyLinePath,
      endArrow,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex
    });
  }, []);
  (0, import_react14.useImperativeHandle)(ref, () => polyline, [polyline]);
  (0, import_react14.useLayoutEffect)(() => {
    polyline.setMap(map);
    return () => polyline.setMap(null);
  }, [map, polyline]);
  (0, import_react14.useLayoutEffect)(() => {
    if (onCreate) onCreate(polyline);
  }, [polyline, onCreate]);
  (0, import_react14.useLayoutEffect)(() => {
    polyline.setOptions({
      endArrow,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight
    });
  }, [polyline, endArrow, strokeColor, strokeOpacity, strokeStyle, strokeWeight]);
  useKakaoMapsSetEffect(polyline, "setPath", polyLinePath);
  useKakaoMapsSetEffect(polyline, "setZIndex", zIndex);
  useKakaoEvent(polyline, "mouseover", onMouseover);
  useKakaoEvent(polyline, "mouseout", onMouseout);
  useKakaoEvent(polyline, "mousemove", onMousemove);
  useKakaoEvent(polyline, "mousedown", onMousedown);
  useKakaoEvent(polyline, "click", onClick);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/Polygon.js
var import_react15 = __toESM(require_react(), 1);
var Polygon = import_react15.default.forwardRef(function Polygon2(_ref, ref) {
  let {
    path,
    onClick,
    onMousedown,
    onMousemove,
    onMouseout,
    onMouseover,
    onCreate,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
    fillColor,
    fillOpacity,
    zIndex
  } = _ref;
  const map = useMap(`Polygon`);
  const polygonPath = (0, import_react15.useMemo)(() => {
    if (path.every((v) => v instanceof Array)) {
      return path.map((v) => {
        return v.map((p) => new kakao.maps.LatLng(p.lat, p.lng));
      });
    }
    return path.map((v) => {
      return new kakao.maps.LatLng(v.lat, v.lng);
    });
  }, [path]);
  const polygon = (0, import_react15.useMemo)(() => {
    return new kakao.maps.Polygon({
      path: polygonPath,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex
    });
  }, []);
  (0, import_react15.useImperativeHandle)(ref, () => polygon, [polygon]);
  (0, import_react15.useLayoutEffect)(() => {
    polygon.setMap(map);
    return () => polygon.setMap(null);
  }, [map, polygon]);
  (0, import_react15.useLayoutEffect)(() => {
    if (onCreate) onCreate(polygon);
  }, [polygon, onCreate]);
  (0, import_react15.useLayoutEffect)(() => {
    polygon.setOptions({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight
    });
  }, [polygon, fillColor, fillOpacity, strokeColor, strokeOpacity, strokeStyle, strokeWeight]);
  useKakaoMapsSetEffect(polygon, "setPath", polygonPath);
  useKakaoMapsSetEffect(polygon, "setZIndex", zIndex);
  useKakaoEvent(polygon, "mouseover", onMouseover);
  useKakaoEvent(polygon, "mouseout", onMouseout);
  useKakaoEvent(polygon, "mousemove", onMousemove);
  useKakaoEvent(polygon, "mousedown", onMousedown);
  useKakaoEvent(polygon, "click", onClick);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/Rectangle.js
var import_react16 = __toESM(require_react(), 1);
var Rectangle = import_react16.default.forwardRef(function Rectangle2(_ref, ref) {
  let {
    bounds,
    onClick,
    onMousedown,
    onMousemove,
    onMouseout,
    onMouseover,
    onCreate,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
    fillColor,
    fillOpacity,
    zIndex
  } = _ref;
  const map = useMap(`Rectangle`);
  const rectangleBounds = (0, import_react16.useMemo)(() => {
    return new kakao.maps.LatLngBounds(new kakao.maps.LatLng(bounds.sw.lat, bounds.sw.lng), new kakao.maps.LatLng(bounds.ne.lat, bounds.ne.lng));
  }, [bounds]);
  const rectangle = (0, import_react16.useMemo)(() => {
    return new kakao.maps.Rectangle({
      bounds: rectangleBounds,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex
    });
  }, []);
  (0, import_react16.useImperativeHandle)(ref, () => rectangle, [rectangle]);
  (0, import_react16.useLayoutEffect)(() => {
    rectangle.setMap(map);
    return () => rectangle.setMap(null);
  }, [map, rectangle]);
  (0, import_react16.useLayoutEffect)(() => {
    if (onCreate) onCreate(rectangle);
  }, [rectangle, onCreate]);
  (0, import_react16.useLayoutEffect)(() => {
    rectangle.setOptions({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight
    });
  }, [rectangle, fillColor, fillOpacity, strokeColor, strokeOpacity, strokeStyle, strokeWeight]);
  useKakaoMapsSetEffect(rectangle, "setBounds", rectangleBounds);
  useKakaoMapsSetEffect(rectangle, "setZIndex", zIndex);
  useKakaoEvent(rectangle, "mouseover", onMouseover);
  useKakaoEvent(rectangle, "mouseout", onMouseout);
  useKakaoEvent(rectangle, "mousemove", onMousemove);
  useKakaoEvent(rectangle, "mousedown", onMousedown);
  useKakaoEvent(rectangle, "click", onClick);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/Ellipse.js
var import_react17 = __toESM(require_react(), 1);
var Ellipse = import_react17.default.forwardRef(function Ellipse2(_ref, ref) {
  let {
    center,
    rx,
    ry,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
    zIndex,
    onMouseover,
    onMouseout,
    onMousemove,
    onMousedown,
    onClick,
    onCreate
  } = _ref;
  const map = useMap(`Ellipse`);
  const ellipseCenter = (0, import_react17.useMemo)(() => {
    return new kakao.maps.LatLng(center.lat, center.lng);
  }, [center.lat, center.lng]);
  const ellipse = (0, import_react17.useMemo)(() => {
    return new kakao.maps.Ellipse({
      center: ellipseCenter,
      rx,
      ry,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex
    });
  }, []);
  (0, import_react17.useImperativeHandle)(ref, () => ellipse, [ellipse]);
  (0, import_react17.useLayoutEffect)(() => {
    ellipse.setMap(map);
    return () => {
      ellipse.setMap(null);
    };
  }, [map, ellipse]);
  (0, import_react17.useLayoutEffect)(() => {
    if (onCreate) onCreate(ellipse);
  }, [ellipse, onCreate]);
  useKakaoMapsSetEffect(ellipse, "setPosition", ellipseCenter);
  useKakaoMapsSetEffect(ellipse, "setRadius", rx, ry);
  useKakaoMapsSetEffect(ellipse, "setZIndex", zIndex);
  (0, import_react17.useLayoutEffect)(() => {
    ellipse.setOptions({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight
    });
  }, [ellipse, fillColor, fillOpacity, strokeColor, strokeOpacity, strokeStyle, strokeWeight]);
  useKakaoEvent(ellipse, "mouseover", onMouseover);
  useKakaoEvent(ellipse, "mouseout", onMouseout);
  useKakaoEvent(ellipse, "mousemove", onMousemove);
  useKakaoEvent(ellipse, "mousedown", onMousedown);
  useKakaoEvent(ellipse, "click", onClick);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/AbstractOverlay.js
var import_react18 = __toESM(require_react(), 1);
var AbstractOverlay = import_react18.default.forwardRef(function AbstractOverlay2(_ref, ref) {
  let {
    draw,
    onAdd,
    onRemove,
    onCreate
  } = _ref;
  const map = useMap();
  const reactAbstractOverlay = (0, import_react18.useMemo)(() => {
    class ReactAbstractOveraly extends kakao.maps.AbstractOverlay {
      constructor(draw2, onAdd2, onRemove2) {
        super();
        this.draw = draw2;
        this.onAdd = onAdd2;
        this.onRemove = onRemove2;
      }
    }
    const overlay = new ReactAbstractOveraly(draw, onAdd, onRemove);
    return overlay;
  }, [draw, onAdd, onRemove]);
  (0, import_react18.useImperativeHandle)(ref, () => reactAbstractOverlay, [reactAbstractOverlay]);
  (0, import_react18.useLayoutEffect)(() => {
    reactAbstractOverlay.setMap(map);
    return () => {
      reactAbstractOverlay.setMap(null);
    };
  }, [map, reactAbstractOverlay]);
  (0, import_react18.useLayoutEffect)(() => {
    if (onCreate) onCreate(reactAbstractOverlay);
  }, [reactAbstractOverlay, onCreate]);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/Roadview.js
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var KakaoRoadviewContext = import_react19.default.createContext(void 0);
var Roadview = import_react19.default.forwardRef(function Roadview2(_ref, ref) {
  let {
    id,
    as,
    children,
    position,
    pan,
    panoId,
    panoX,
    panoY,
    tilt,
    zoom,
    onCreate,
    onInit,
    onPanoidChange,
    onPositionChanged,
    onViewpointChange,
    onErrorGetNearestPanoId,
    ...props
  } = _ref;
  const Container = as || "div";
  const [isLoaded, setIsLoaded] = (0, import_react19.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react19.useState)(true);
  const [roadview, setRoadview] = (0, import_react19.useState)();
  const container = (0, import_react19.useRef)(null);
  useIsomorphicLayoutEffect(() => {
    const callback = Loader.addLoadEventLisnter((err) => setIsLoaded(!err));
    return () => {
      Loader.removeLoadEventLisnter(callback);
    };
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (!isLoaded) return;
    const RoadviewContainer = container.current;
    if (!RoadviewContainer) return;
    const kakaoRoadview = new kakao.maps.Roadview(RoadviewContainer, {
      pan,
      panoId,
      panoX,
      panoY,
      tilt,
      zoom
    });
    setRoadview(kakaoRoadview);
    return () => {
      RoadviewContainer.innerHTML = "";
    };
  }, [isLoaded, panoX, panoY, zoom]);
  (0, import_react19.useImperativeHandle)(ref, () => roadview, [roadview]);
  useIsomorphicLayoutEffect(() => {
    if (!roadview || !onCreate) return;
    onCreate(roadview);
  }, [roadview, onCreate]);
  useIsomorphicLayoutEffect(() => {
    if (!roadview || panoId || roadview.getPosition().getLat() === position.lat && roadview.getPosition().getLng() === position.lng) return;
    const newPostion = new kakao.maps.LatLng(position.lat, position.lng);
    new kakao.maps.RoadviewClient().getNearestPanoId(newPostion, position.radius, (panoId2) => {
      if (panoId2 === null && onErrorGetNearestPanoId) {
        onErrorGetNearestPanoId(roadview);
      } else {
        roadview.setPanoId(panoId2, newPostion);
      }
    });
  }, [roadview, panoId, position.lat, position.lng, position.radius, onErrorGetNearestPanoId]);
  useIsomorphicLayoutEffect(() => {
    if (!roadview || !panoId || panoId === roadview.getPanoId() || roadview.getPosition().getLat() === position.lat && roadview.getPosition().getLng() === position.lng) return;
    const newPostion = new kakao.maps.LatLng(position.lat, position.lng);
    roadview.setPanoId(panoId, newPostion);
  }, [roadview, panoId, position.lat, position.lng]);
  useIsomorphicLayoutEffect(() => {
    if (!roadview) return;
    const prevViewpoint = roadview.getViewpoint();
    if (prevViewpoint.pan === pan && prevViewpoint.tilt === tilt) return;
    if (pan) prevViewpoint.pan = pan;
    if (tilt) prevViewpoint.tilt = tilt;
    roadview.setViewpoint(prevViewpoint);
  }, [roadview, pan, tilt]);
  useKakaoEvent(roadview, "init", (target) => {
    setIsLoading(false);
    if (onInit) onInit(target);
  });
  useKakaoEvent(roadview, "panoid_changed", onPanoidChange);
  useKakaoEvent(roadview, "viewpoint_changed", onViewpointChange);
  useKakaoEvent(roadview, "position_changed", onPositionChanged);
  return (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, {
    children: [(0, import_jsx_runtime6.jsx)(Container, {
      ref: container,
      id: id || `${SIGNATURE}_Roadview`,
      ...props
    }), roadview && !isLoading && (0, import_jsx_runtime6.jsx)(KakaoRoadviewContext.Provider, {
      value: roadview,
      children
    })]
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/CustomOverlayRoadview.js
var import_react21 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/react-kakao-maps-sdk/esm/hooks/useRoadview.js
var import_react20 = __toESM(require_react(), 1);
var useRoadview = (componentName) => {
  const kakaoRoadview = (0, import_react20.useContext)(KakaoRoadviewContext);
  if (!kakaoRoadview) {
    throw new Error(`${componentName ? componentName + " Component" : "useRoadview"} must exist inside Roadview Component!`);
  }
  return kakaoRoadview;
};

// node_modules/react-kakao-maps-sdk/esm/components/CustomOverlayRoadview.js
var CustomOverlayRoadview = import_react21.default.forwardRef(function CustomOverlayRoadview2(_ref, ref) {
  let {
    position,
    children,
    clickable,
    xAnchor,
    yAnchor,
    zIndex,
    altitude,
    range,
    onCreate
  } = _ref;
  const roadview = useRoadview(`CustomOverlayRoadview`);
  const overlayPosition = (0, import_react21.useMemo)(() => {
    if ("lat" in position) {
      return new kakao.maps.LatLng(position.lat, position.lng);
    }
    return new kakao.maps.Viewpoint(position.pan, position.tilt, position.zoom, position.panoId);
  }, [
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    /* @ts-ignore */
    position.lat,
    /* @ts-ignore */
    position.lng,
    /* @ts-ignore */
    position.pan,
    /* @ts-ignore */
    position.tilt,
    /* @ts-ignore */
    position.zoom,
    /* @ts-ignore */
    position.panoId
    /* eslint-enable @typescript-eslint/ban-ts-comment */
  ]);
  const overlay = (0, import_react21.useMemo)(() => {
    const container2 = document.createElement("div");
    container2.style.display = "none";
    const KakaoCustomOverlay = new kakao.maps.CustomOverlay({
      clickable,
      xAnchor,
      yAnchor,
      zIndex,
      position: overlayPosition,
      content: container2
    });
    return KakaoCustomOverlay;
  }, [clickable, xAnchor, yAnchor]);
  const container = (0, import_react21.useMemo)(() => overlay.getContent(), [overlay]);
  (0, import_react21.useImperativeHandle)(ref, () => overlay, [overlay]);
  (0, import_react21.useLayoutEffect)(() => {
    if (!roadview) return;
    overlay.setMap(roadview);
    return () => {
      overlay.setMap(null);
    };
  }, [overlay, roadview]);
  (0, import_react21.useLayoutEffect)(() => {
    if (onCreate) onCreate(overlay);
  }, [overlay, onCreate]);
  useKakaoMapsSetEffect(overlay, "setPosition", overlayPosition);
  useKakaoMapsSetEffect(overlay, "setZIndex", zIndex);
  useKakaoMapsSetEffect(overlay, "setAltitude", altitude);
  useKakaoMapsSetEffect(overlay, "setRange", range);
  return container.parentElement && import_react_dom3.default.createPortal(children, container.parentElement);
});

// node_modules/react-kakao-maps-sdk/esm/components/RoadviewMarker.js
var import_react22 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var RoadviewMarker = import_react22.default.forwardRef(function RoadviewMarker2(_ref, ref) {
  let {
    position,
    ...args
  } = _ref;
  const roadview = useRoadview(`RoadviewMarker`);
  const markerPosition = (0, import_react22.useMemo)(() => {
    if ("lat" in position) {
      return new kakao.maps.LatLng(position.lat, position.lng);
    }
    if ("x" in position) {
      return new kakao.maps.Coords(position.x, position.y).toLatLng();
    }
    return new kakao.maps.Viewpoint(position.pan, position.tilt, position.zoom, position.panoId);
  }, [
    // @ts-ignore
    position.lat,
    // @ts-ignore
    position.lng,
    // @ts-ignore
    position.x,
    // @ts-ignore
    position.y,
    // @ts-ignore
    position.pan,
    // @ts-ignore
    position.tilt,
    // @ts-ignore
    position.zoom,
    // @ts-ignore
    position == null ? void 0 : position.panoId
  ]);
  return (0, import_jsx_runtime7.jsx)(Marker, {
    map: roadview,
    position: markerPosition,
    ...args,
    ref
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/RoadviewInfoWindow.js
var import_react23 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var RoadviewInfoWindow = import_react23.default.forwardRef(function RoadviewInfoWindow2(_ref, ref) {
  let {
    position,
    children,
    altitude,
    disableAutoPan,
    range,
    removable,
    zIndex,
    onCreate
  } = _ref;
  const roadview = useRoadview(`RoadviewInfoWindow`);
  const infoPosition = (0, import_react23.useMemo)(() => {
    if ("lat" in position) {
      return new kakao.maps.LatLng(position.lat, position.lng);
    }
    return new kakao.maps.Viewpoint(position.pan, position.tilt, position.zoom, position.panoId);
  }, [
    // @ts-ignore
    position.lat,
    // @ts-ignore
    position.lng,
    // @ts-ignore
    position.pan,
    // @ts-ignore
    position.tilt,
    // @ts-ignore
    position.zoom,
    // @ts-ignore
    position.panoId
  ]);
  return (0, import_jsx_runtime8.jsx)(InfoWindow, {
    altitude,
    disableAutoPan,
    range,
    removable,
    zIndex,
    map: roadview,
    position: infoPosition,
    onCreate,
    ref,
    children
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/DrawingManager.js
var import_react24 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var DrawingManagerContext = import_react24.default.createContext(void 0);
function useDrawingManagerEvent(target, type, callback) {
  (0, import_react24.useLayoutEffect)(() => {
    if (!target || !callback) return;
    const wrapCallback = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (AbortSignal === void 0) return callback(target);
      else return callback(target, ...args);
    };
    target.addListener(type, wrapCallback);
  }, [callback, target, type]);
}
var DrawingManager = import_react24.default.forwardRef(function DrawingManager2(_ref, ref) {
  let {
    arrowOptions,
    circleOptions,
    ellipseOptions,
    markerOptions,
    polygonOptions,
    polylineOptions,
    rectangleOptions,
    drawingMode,
    guideTooltip,
    onSelect,
    onDrawstart,
    onDraw,
    onDrawend,
    onDrawnext,
    onCancle,
    onRemove,
    onStateChanged,
    onCreate,
    children
  } = _ref;
  const map = useMap("Toolbox");
  const drawingManager = (0, import_react24.useMemo)(
    () => {
      if (!window.kakao.maps.drawing) {
        console.warn("drawing 라이브러리를 별도 로드 해야 사용 가능합니다. `https://apis.map.kakao.com/web/guide/#loadlibrary`");
        return;
      }
      return new kakao.maps.drawing.DrawingManager({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        map,
        drawingMode,
        guideTooltip,
        arrowOptions,
        circleOptions,
        ellipseOptions,
        markerOptions,
        polygonOptions,
        polylineOptions,
        rectangleOptions
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  (0, import_react24.useImperativeHandle)(ref, () => drawingManager, [drawingManager]);
  (0, import_react24.useLayoutEffect)(() => {
    drawingManager && onCreate && onCreate(drawingManager);
  }, [drawingManager, onCreate]);
  useDrawingManagerEvent(drawingManager, "select", onSelect);
  useDrawingManagerEvent(drawingManager, "drawstart", onDrawstart);
  useDrawingManagerEvent(drawingManager, "draw", onDraw);
  useDrawingManagerEvent(drawingManager, "drawend", onDrawend);
  useDrawingManagerEvent(drawingManager, "drawnext", onDrawnext);
  useDrawingManagerEvent(drawingManager, "cancel", onCancle);
  useDrawingManagerEvent(drawingManager, "remove", onRemove);
  useDrawingManagerEvent(drawingManager, "state_changed", onStateChanged);
  if (!drawingManager) return null;
  return (0, import_jsx_runtime9.jsx)(DrawingManagerContext.Provider, {
    value: drawingManager,
    children
  });
});

// node_modules/react-kakao-maps-sdk/esm/components/Toolbox.js
var import_react25 = __toESM(require_react(), 1);
var Toolbox = import_react25.default.forwardRef(function Toolbox2(_ref, ref) {
  let {
    position: _position = kakao.maps.ControlPosition.TOP
  } = _ref;
  const position = typeof _position === "string" ? kakao.maps.ControlPosition[_position] : _position;
  const map = useMap("Toolbox");
  const drawingmanager = (0, import_react25.useContext)(DrawingManagerContext);
  if (!drawingmanager) {
    throw new Error("Toolbox must exist inside DrawingManager Component!`");
  }
  const toolbox = (0, import_react25.useMemo)(() => new kakao.maps.drawing.Toolbox({
    drawingManager: drawingmanager
  }), [drawingmanager]);
  (0, import_react25.useImperativeHandle)(ref, () => toolbox, [toolbox]);
  (0, import_react25.useLayoutEffect)(() => {
    const element = toolbox.getElement();
    map.addControl(element, position);
    return () => {
      map.removeControl(element);
    };
  }, [map, toolbox, position]);
  return null;
});

// node_modules/react-kakao-maps-sdk/esm/components/StaticMap.js
var import_react26 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var StaticMap = import_react26.default.forwardRef(function StaticMap2(_ref, ref) {
  let {
    as,
    id,
    center,
    marker,
    level,
    mapTypeId,
    onCreate,
    ...props
  } = _ref;
  const Container = as || "div";
  const [isLoaded, setIsLoaded] = (0, import_react26.useState)(false);
  const [map, setMap] = (0, import_react26.useState)();
  const container = (0, import_react26.useRef)(null);
  useIsomorphicLayoutEffect(() => {
    const callback = Loader.addLoadEventLisnter((err) => setIsLoaded(!err));
    return () => {
      Loader.removeLoadEventLisnter(callback);
    };
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (!isLoaded) return;
    const MapContainer = container.current;
    if (!MapContainer) return;
    const _marker = (() => {
      if (Array.isArray(marker)) {
        return marker.map((mk) => {
          return {
            ...mk,
            position: new kakao.maps.LatLng(mk.position.lat, mk.position.lng)
          };
        });
      }
      if (typeof marker === "object") {
        if (marker.position) {
          return {
            ...marker,
            position: new kakao.maps.LatLng(marker.position.lat, marker.position.lng)
          };
        }
        return marker;
      }
      return marker;
    })();
    const kakaoStaticMap = new kakao.maps.StaticMap(MapContainer, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level,
      mapTypeId: typeof mapTypeId === "string" ? kakao.maps.MapTypeId[mapTypeId] : mapTypeId,
      marker: _marker
    });
    setMap(kakaoStaticMap);
    return () => {
      MapContainer.innerHTML = "";
    };
  }, [isLoaded, JSON.stringify(marker)]);
  (0, import_react26.useImperativeHandle)(ref, () => map, [map]);
  useIsomorphicLayoutEffect(() => {
    if (map && onCreate) onCreate(map);
  }, [map, onCreate]);
  useIsomorphicLayoutEffect(() => {
    if (map) map.setCenter(new kakao.maps.LatLng(center.lat, center.lng));
  }, [map, center.lat, center.lng]);
  useKakaoMapsSetEffect(map, "setLevel", level);
  useKakaoMapsSetEffect(map, "setMapTypeId", isLoaded ? typeof mapTypeId === "string" ? kakao.maps.MapTypeId[mapTypeId] : mapTypeId : void 0);
  return (0, import_jsx_runtime10.jsx)(Container, {
    id,
    ...props,
    ref: container
  });
});

// node_modules/react-kakao-maps-sdk/esm/hooks/useKakaoLoader.js
var import_react27 = __toESM(require_react(), 1);
var useKakaoLoader = (options) => {
  const [state, setState] = (0, import_react27.useState)([true, void 0]);
  (0, import_react27.useEffect)(
    () => {
      new Loader({
        ...options
      }).load().then(() => setState([false, void 0])).catch((error) => {
        setState([false, error]);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(options)]
  );
  return state;
};

// node_modules/react-kakao-maps-sdk/esm/hooks/useInjectKakaoMapApi.js
var useInjectKakaoMapApi = useKakaoLoader;
export {
  AbstractOverlay,
  Circle,
  CustomOverlayMap,
  CustomOverlayRoadview,
  DrawingManager,
  DrawingManagerContext,
  Ellipse,
  KakaoMapContext,
  KakaoMapMarkerClustererContext,
  KakaoRoadviewContext,
  Loader,
  LoaderStatus,
  Map2 as Map,
  MapInfoWindow,
  MapMarker,
  MapTypeControl,
  MapTypeId,
  MarkerClusterer,
  Polygon,
  Polyline,
  Rectangle,
  Roadview,
  RoadviewInfoWindow,
  RoadviewMarker,
  StaticMap,
  Toolbox,
  ZoomControl,
  useInjectKakaoMapApi,
  useKakaoLoader,
  useMap,
  useRoadview
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-kakao-maps-sdk.js.map
