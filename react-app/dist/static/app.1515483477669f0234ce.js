!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],f=0,d=[];f<u.length;f++)i=u[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={3:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"static/"+({0:"404",1:"detail"}[e]||e)+"."+{0:"294494af45cf721ae9ca",1:"5aec8dd56bcad18c3ddf"}[e]+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;a.push([29,2]),n()}([,,,,,,,,,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assignImportedComponents=t.dryRender=t.done=t.importMatch=void 0;var r=a(n(22)),o=a(n(12));function a(e){return e&&e.__esModule?e:{default:e}}var i=[],u=function(e){return i=i.filter(function(t){return t!==e})},c=t.importMatch=function(e){return(e.match(/\(['"]imported-component['"],[ '"](.*),/g)||[]).map(function(e){return e.match(/\(['"]imported-component['"],[ '"](.*)['"],/i)[1].replace(/['"]/g,"")})},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=c(e.toString()),a={importFunction:e,mark:n,done:!1,ok:!1,payload:void 0,promise:void 0,reset:function(){this.done=!1,this.ok=!0,this.payload=void 0,this.promise=void 0},load:function(){var t=this;if(!this.promise){var n=this.promise=Promise.resolve().then(e).then(function(e){return t.done=!0,t.ok=!0,t.payload=e,u(n),e},function(e){throw t.done=!0,t.ok=!1,t.error=e,u(n),e});!function(e){i.push(e)}(n)}return this.promise}};return n&&n.forEach(function(e){return o.default[e]=a}),r.default&&t&&a.load(),a},s=t.done=function e(){return i.length?Promise.all(i).then(function(e){return e[1]}).then(e):Promise.resolve()};t.dryRender=function(e){return e(),Promise.resolve().then(s)},t.assignImportedComponents=function(e){Object.keys(e).forEach(function(t){return l(e[t])})};t.default=l},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n={},r={},o=(t.useMark=function(e,t){t&&t.length&&(r[e]||(r[e]={}),t.forEach(function(t){return r[e][t]=!0}))},t.drainHydrateMarks=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object.keys(r[e]||{});return delete r[e],t});t.rehydrateMarks=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]||e.___REACT_DEFERRED_COMPONENT_MARKS||[];return Promise.all(t.map(function(e){return n[e]}).filter(function(e){return!!e}).map(function(e){return e.load()}))},t.printDrainHydrateMarks=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"<script>window.___REACT_DEFERRED_COMPONENT_MARKS="+JSON.stringify(o(e))+"<\/script>"};t.default=n}).call(this,n(9))},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportedStream=t.loadableResource=t.ComponentLoader=t.assignImportedComponents=t.dryRender=t.whenComponentsReady=t.rehydrateMarks=t.drainHydrateMarks=t.printDrainHydrateMarks=void 0;var r=l(n(37)),o=n(12),a=n(11),i=l(a),u=l(n(23)),c=n(21);function l(e){return e&&e.__esModule?e:{default:e}}t.printDrainHydrateMarks=o.printDrainHydrateMarks,t.drainHydrateMarks=o.drainHydrateMarks,t.rehydrateMarks=o.rehydrateMarks,t.whenComponentsReady=a.done,t.dryRender=a.dryRender,t.assignImportedComponents=a.assignImportedComponents,t.ComponentLoader=u.default,t.loadableResource=i.default,t.ImportedStream=c.ImportedStream,t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UIDConsumer=t.ImportedStream=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(1)),a=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.createContext?o.default.createContext():null,c=1;(t.ImportedStream=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.UID=c++,n.props.takeUID(n.UID),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.Provider,{value:this.UID},this.props.children)}}]),t}()).propTypes={takeUID:a.default.func.isRequired,children:a.default.node};var l=function(e){return(0,e.children)(0)};l.propTypes={children:a.default.func.isRequired};t.UIDConsumer=u?u.Consumer:l},function(e,t,n){(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(e){}}).call(this,n(9))},function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.UnconnectedReactImportedComponent=t.settings=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=m(i),c=m(n(0)),l=m(n(22)),s=n(12),f=m(n(32)),d=m(n(11)),p=n(21);function m(e){return e&&e.__esModule?e:{default:e}}var h="loading",y="done",v=function(e){var t=e.children;return u.default.createElement("div",null,t)};v.propTypes={children:c.default.any};var b=u.default.Fragment?u.default.Fragment:v,g=t.settings={hot:!!e.hot,SSR:!0},_=function(e){return"promise"in e?e:(0,d.default)(e,!1)},w=t.UnconnectedReactImportedComponent=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.mounted=!1,n.onHRM=function(){g.hot&&r(function(){n.props.loadable.reset(),n.remount()})},n.reload=function(){n.mounted&&n.setState({state:h}),n.remount()},n.state=n.pickPrecached()||{},l.default&&g.SSR&&((0,s.useMark)(n.props.streamId,n.props.loadable.mark),n.state.state!==y&&(n.state.state=h,n.reload())),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0,(0,s.useMark)(this.props.streamId,this.props.loadable.mark),this.state.state!==y&&this.reload()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"pickPrecached",value:function(){var e=_(this.props.loadable);return e.done?{AsyncComponent:this.props.exportPicker(e.payload),state:e.ok?y:"error"}:null}},{key:"loadAsyncComponent",value:function(){var e=this,t=_(this.props.loadable);return t.done?(this.setState(this.pickPrecached()),t.promise):(this.loadingPromise=t.load(),this.loadingPromise.then(function(t){e.mounted&&e.setState({AsyncComponent:e.props.exportPicker(t)})}))}},{key:"remount",value:function(){var e=this;this.loadAsyncComponent().catch(function(t){if(console.error("[React-imported-component]",t),e.setState({state:"error",error:t}),!e.props.onError)throw t;e.props.onError(t)})}},{key:"fragmentedRender",value:function(e){return g.hot?u.default.createElement(b,null,e,u.default.createElement(f.default,{onUpdate:this.onHRM})):e}},{key:"render",value:function(){var e=this.state,t=e.AsyncComponent,n=e.state,r=this.props,a=r.LoadingComponent,i=r.ErrorComponent;if(this.props.render)return this.fragmentedRender(this.props.render(t,n,this.props));if(t)return this.fragmentedRender(u.default.createElement(t,this.props));switch(n){case h:if(this.props.async)throw this.loadingPromise;return a?u.default.Children.only(u.default.createElement(a,this.props)):null;case"error":return i?u.default.Children.only(u.default.createElement(i,o({retryImport:this.reload,error:this.state.error},this.props))):null;default:return null}}}]),t}(),E={loadable:c.default.oneOfType([c.default.object,c.default.func]).isRequired,LoadingComponent:c.default.func,ErrorComponent:c.default.func,exportPicker:c.default.func,render:c.default.func,ssrMark:c.default.string,async:c.default.bool,onError:c.default.func};w.propTypes=o({},E,{streamId:c.default.number}),w.defaultProps={exportPicker:function(e){return e.default?e.default:e},async:!1};var k=function(e){return g.SSR?u.default.createElement(p.UIDConsumer,null,function(t){return u.default.createElement(w,o({},e,{streamId:0|t}))}):u.default.createElement(w,o({},e,{streamId:0}))};k.propTypes=E,t.default=k}).call(this,n(36)(e),n(35).setImmediate)},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(19),i=n(13),u=n(18),c=(n(10),n(15)),l=n(20),s=n.n(l),f=n(14),d=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Home"),o.a.createElement(f.a,{to:"/detail"},"to detail"))},p=s()(function(){return n.e(1).then(n.bind(null,51))}),m=s()(function(){return n.e(0).then(n.bind(null,50))}),h=function(){return o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(i.a,{path:"/",exact:!0,component:d}),o.a.createElement(i.a,{path:"/detail",component:p}),o.a.createElement(i.a,{component:m}))))};n(31);Object(a.render)(o.a.createElement(h,null),document.getElementById("root"))},,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=n(0),u=(r=i)&&r.__esModule?r:{default:r};var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.PureComponent),o(t,[{key:"componentDidUpdate",value:function(){this.props.onUpdate()}},{key:"render",value:function(){return null}}]),t}();c.propTypes={onUpdate:u.default.func.isRequired},t.default=c},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],s=!1,f=-1;function d(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!s){var e=u(d);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||s||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,a,i,u,c=1,l={},s=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){a.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(i="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&m(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(i+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return l[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete l[e]}function m(e){if(s)setTimeout(m,0,e);else{var t=l[e];if(t){s=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(9),n(33))},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new a(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(34),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(9))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(1)),a=u(n(23)),i=u(n(11));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,i.default)(e,!t.noAutoImport),u=function(e){return o.default.createElement(a.default,r({loadable:n,LoadingComponent:t.LoadingComponent,ErrorComponent:t.ErrorComponent,exportPicker:t.exportPicker,onError:t.onError,render:t.render,async:t.async},e))};return u.preload=function(){return n.load().catch(function(){})},u}}]);