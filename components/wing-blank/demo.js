webpackJsonp([24],{9:function(n,a,t){"use strict";t(14),t(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(8),p=s(e),o=t(1),u=s(o);a["default"]=function(n){var a=n.type,t=n.className,s=void 0===t?"":t;return u["default"].createElement("i",(0,p["default"])({},n,{className:(s+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},20:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(7),p=s(e),o=t(4),u=s(o),c=t(6),l=s(c),i=t(5),r=s(i),d=t(1),k=s(d),f=t(3),h=s(f),m=function(n){function a(){return(0,u["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.style,u=a.onClick,c=(0,h["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-"+s,!0),(0,p["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:c,style:o,onClick:u})},a}(k["default"].Component);a["default"]=m,m.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},21:function(n,a,t){"use strict";t(9),t(46)},22:function(n,a,t){"use strict";t(28)},25:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(7),p=s(e),o=t(4),u=s(o),c=t(6),l=s(c),i=t(5),r=s(i),d=t(1),k=s(d),f=t(3),h=s(f),m=function(n){function a(){return(0,u["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.children,u=a.style,c=(0,h["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-"+s,!0),(0,p["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:c,style:u},o)},a}(k["default"].Component);a["default"]=m,m.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},26:function(n,a,t){"use strict";t(9),t(52)},27:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(34),p=s(e),o=t(33),u=s(o);a["default"]=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,c=(0,u["default"])(n);!(s=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(l){e=!0,p=l}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},28:function(n,a){},30:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},33:function(n,a,t){n.exports={"default":t(35),__esModule:!0}},34:function(n,a,t){n.exports={"default":t(36),__esModule:!0}},35:function(n,a,t){t(31),t(23),n.exports=t(37)},36:function(n,a,t){t(31),t(23),n.exports=t(38)},37:function(n,a,t){var s=t(42),e=t(51);n.exports=t(17).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return s(a.call(n))}},38:function(n,a,t){var s=t(61),e=t(24)("iterator"),p=t(45);n.exports=t(17).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(s(a))}},44:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&B(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(B(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=t(8),u=s(o),c=t(7),l=s(c),i=t(27),r=s(i),d=t(4),k=s(d),f=t(6),h=s(f),m=t(5),g=s(m),y=t(1),v=s(y),b=t(3),E=s(b),T=t(19),_=s(T),x=t(30),C=s(x),w=t(48),M=s(w),S=/^[\u4e00-\u9fa5]{2}$/,B=S.test.bind(S),W=function(n){function a(){(0,k["default"])(this,a);for(var t=arguments.length,s=Array(t),e=0;e<t;e++)s[e]=arguments[e];var p=(0,h["default"])(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return(0,g["default"])(a,n),a.prototype.render=function(){var n,a=(0,C["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),t=(0,r["default"])(a,2),s=t[0],e=s.children,o=s.className,c=s.prefixCls,i=s.type,d=s.size,k=s.inline,f=s.disabled,h=s.htmlType,m=s.icon,g=s.loading,y=s.touchFeedback,b=t[1],T=(0,E["default"])((n={},(0,l["default"])(n,o,o),(0,l["default"])(n,c,!0),(0,l["default"])(n,c+"-primary","primary"===i),(0,l["default"])(n,c+"-ghost","ghost"===i),(0,l["default"])(n,c+"-warning","warning"===i),(0,l["default"])(n,c+"-small","small"===d),(0,l["default"])(n,c+"-loading",g),(0,l["default"])(n,c+"-inline",k),(0,l["default"])(n,c+"-disabled",f),(0,l["default"])(n,c+"-touchFeedback",y),n)),x=g?"loading":m,w=v["default"].Children.map(e,p);return v["default"].createElement("button",(0,u["default"])({},b,{type:h||"button",className:T,disabled:f,onClick:this.onClick}),x?v["default"].createElement(_["default"],{type:x}):null,w)},a}(v["default"].Component);W.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,M["default"])(W),n.exports=a["default"]},46:function(n,a){},48:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:{myName:a||"TouchableFeedbackComponent"},getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},render:function(){var a=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp};return c["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return t}Object.defineProperty(a,"__esModule",{value:!0});var p=t(8),o=s(p);a["default"]=e;var u=t(1),c=s(u),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},49:function(n,a,t){"use strict";t(9),t(22),t(64)},52:function(n,a){},64:function(n,a){},817:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(26),t(25)),p=s(e),o=(t(49),t(44)),u=s(o),c=(t(21),t(20)),l=s(c),i=t(1),r=s(i),d=t(2);s(d);n.exports={content:[["p",["code","<WingBlank size='md'>...</WingBlank>"]]],meta:{order:0,title:"\u57fa\u672c",filename:"components/wing-blank/demo/basic.md",id:"components-wing-blank-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n\n<span class="token keyword" >const</span> WingBlankExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token function" >\u4e24\u7ffc\u7559\u767dlg</span><span class="token punctuation" >(</span>\u9ed8\u8ba4<span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>md<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e24\u7ffc\u7559\u767dmd<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sm<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e24\u7ffc\u7559\u767dsm<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlankExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"WingBlankExample",render:function(){return r["default"].createElement("div",{className:"button-container"},r["default"].createElement(l["default"],null),r["default"].createElement(p["default"],null,r["default"].createElement(u["default"],{type:"primary"},"\u4e24\u7ffc\u7559\u767dlg(\u9ed8\u8ba4)")),r["default"].createElement(l["default"],null),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),r["default"].createElement(l["default"],null),r["default"].createElement(p["default"],{size:"md"},r["default"].createElement(u["default"],{type:"primary"},"\u4e24\u7ffc\u7559\u767dmd")),r["default"].createElement(l["default"],null),r["default"].createElement("div",{style:{borderTop:"1px solid #108ee9"}}),r["default"].createElement(l["default"],null),r["default"].createElement(p["default"],{size:"sm"},r["default"].createElement(u["default"],{type:"primary"},"\u4e24\u7ffc\u7559\u767dsm")),r["default"].createElement(l["default"],null))}});return r["default"].createElement(n,null)}}},935:function(n,a,t){n.exports={basic:t(817)}}});