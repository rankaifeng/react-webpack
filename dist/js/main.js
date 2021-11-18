/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2162:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(4890);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var es = __webpack_require__(3894);
;// CONCATENATED MODULE: ./src/redux/constant.js
// 登录状态
var LOGIN_STATUS = 'LOGIN_STATUS';
var OTHER = 'OTHER';
;// CONCATENATED MODULE: ./src/redux/reducers/login.js


var loginStatus = function loginStatus() {
  var preState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;

  switch (type) {
    case LOGIN_STATUS:
      return data;

    default:
      return preState;
  }
};

/* harmony default export */ var login = (loginStatus);
;// CONCATENATED MODULE: ./src/redux/reducers/other.js


var otherRequest = function otherRequest() {
  var preState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;

  switch (type) {
    case OTHER:
      console.log(data);
      return data;

    default:
      return preState;
  }
};

/* harmony default export */ var other = (otherRequest);
;// CONCATENATED MODULE: ./src/redux/reducers/index.js



/* harmony default export */ var reducers = ((0,redux/* combineReducers */.UY)({
  loginStatus: login,
  otherRequest: other
}));
// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(8500);
;// CONCATENATED MODULE: ./src/redux/store.js



 // 暴露store

/* harmony default export */ var store = ((0,redux/* createStore */.MT)(reducers, (0,redux_devtools_extension/* composeWithDevTools */.Uo)((0,redux/* applyMiddleware */.md)(es/* default */.Z))));
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var react_redux_es = __webpack_require__(9704);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(6946);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./src/page/Home.jsx


var Home = function Home(props) {
  return /*#__PURE__*/react.createElement("div", null, "home");
};

/* harmony default export */ var page_Home = (Home);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(7621);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 52 modules
var message = __webpack_require__(6327);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/server/config.js
/**
 * 请求路径
 */
var BASE_URL =  false ? 0 : "http://192.168.100.120:8088/";
/**
 * 超时时间
 */

var TIMEOUT = 30000;
;// CONCATENATED MODULE: ./src/server/axios.js


 // const HEADER_CHART = 'application/json; charset=utf-8';

var instance = axios_default().create({
  timeout: TIMEOUT // baseURL: BASE_URL

}); // instance.defaults.headers['Access-Control-Allow-Origin'] = "*"

/** 添加请求拦截器 **/

instance.interceptors.request.use(function (config) {
  var headers = config.headers;
  headers['Access-Control-Allow-Origin'] = "*";
  headers['Authorization'] = localStorage.getItem('token') || '';
  headers['Content-Type'] = 'application/json; charset=utf-8';
  return config;
}, function (error) {
  return Promise.reject(error);
});
/** 添加响应拦截器 **/

var httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
};
instance.interceptors.response.use(function (response) {
  var status = response.status,
      data = response.data;
  console.log(status);

  if (status === 200) {
    return Promise.resolve(data);
  } else {
    message/* default.error */.ZP.error('响应超时!');
    return Promise.reject(data.message);
  }
}, function (error) {
  console.log(error.response);

  if (error.response) {
    if (error.response.status === 401) {
      message/* default.error */.ZP.error(error.response.data.error.user_authentication[0]);
      return; // this.props.history.push('/');
    }

    var tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message;
    message/* default.error */.ZP.error(tips);
    return Promise.reject(error);
  } else {
    message/* default.error */.ZP.error('连接服务器失败');
    return Promise.reject('连接服务器失败');
  }
});
/* harmony default export */ var server_axios = (instance);
;// CONCATENATED MODULE: ./src/server/request.js



var http = function http(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      method = _ref.method,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params;
  return new Promise(function (resolve, reject) {
    server_axios({
      method: method,
      url: url,
      // `params` 是即将与请求一起发送的 URL 参数
      // `data` 是作为请求主体被发送的数据
      params: method === 'GET' ? params : null,
      data: method === 'POST' || method === 'PUT' || method === 'DELETE' ? params : null
    }).then(function (res) {
      resolve(res);
    }).catch(function (error) {
      reject(error);
    });
  });
};

var changeMethod = function changeMethod(params, url, method) {
  return http({
    url: "".concat(BASE_URL, "/").concat(url),
    method: method,
    params: params
  });
};

var get = function get(_ref2) {
  var url = _ref2.url,
      _ref2$params = _ref2.params,
      params = _ref2$params === void 0 ? {} : _ref2$params;
  return changeMethod(params, url, 'GET');
};
var post = function post(_ref3) {
  var url = _ref3.url,
      _ref3$params = _ref3.params,
      params = _ref3$params === void 0 ? {} : _ref3$params;
  return changeMethod(params, url, 'POST');
};
var put = function put(_ref4) {
  var url = _ref4.url,
      _ref4$params = _ref4.params,
      params = _ref4$params === void 0 ? {} : _ref4$params;
  return changeMethod(params, url, 'PUT');
};
var del = function del(_ref5) {
  var url = _ref5.url,
      params = _ref5.params;
  return changeMethod(params, url, 'DELETE');
};
;// CONCATENATED MODULE: ./src/api/AllApi.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * 登陆
 * @param params
 */

var userLogin = function userLogin(params) {
  var newParam = _objectSpread(_objectSpread({}, params), {}, {
    source: 'screen'
  });

  return post({
    url: 'authenticate',
    params: _objectSpread({}, newParam)
  });
};
;// CONCATENATED MODULE: ./src/page/Login.jsx





var Login = function Login(props) {
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();
  return /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: function onClick() {
      userLogin({
        name: 'admin',
        password: '123123'
      }).then(function (res) {
        console.log(res);
      }); // dispatch({ data: true, type: 'LOGIN_STATUS' })
    }
  }, "\u767B\u5F55");
};

/* harmony default export */ var page_Login = (Login);
;// CONCATENATED MODULE: ./src/App.jsx






var App = function App(props) {
  var loginStatus = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return state.loginStatus;
  });
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, loginStatus ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/home",
    component: page_Home
  }), /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
    to: "/home"
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/login",
    component: page_Login
  }), /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
    to: "/login"
  }))));
};

/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/index.jsx







react_dom.render( /*#__PURE__*/react.createElement(react_redux_es/* Provider */.zt, {
  store: store
}, /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(src_App, null))), document.getElementById('root'));

/***/ }),

/***/ 2445:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [271], function() { return __webpack_require__(2162); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;