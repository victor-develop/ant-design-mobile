webpackJsonp([19],{9:function(n,a,t){"use strict";t(14),t(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(8),p=s(e),o=t(1),l=s(o);a["default"]=function(n){var a=n.type,t=n.className,s=void 0===t?"":t;return l["default"].createElement("i",(0,p["default"])({},n,{className:(s+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},20:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(7),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.style,l=a.onClick,c=(0,m["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-"+s,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:c,style:o,onClick:l})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},21:function(n,a,t){"use strict";t(9),t(46)},22:function(n,a,t){"use strict";t(28)},25:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(7),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.children,l=a.style,c=(0,m["default"])((n={},(0,p["default"])(n,""+t,!0),(0,p["default"])(n,t+"-"+s,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:c,style:l},o)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},26:function(n,a,t){"use strict";t(9),t(52)},27:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(34),p=s(e),o=t(33),l=s(o);a["default"]=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,c=(0,l["default"])(n);!(s=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(u){e=!0,p=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},28:function(n,a){},30:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},33:function(n,a,t){n.exports={"default":t(35),__esModule:!0}},34:function(n,a,t){n.exports={"default":t(36),__esModule:!0}},35:function(n,a,t){t(31),t(23),n.exports=t(37)},36:function(n,a,t){t(31),t(23),n.exports=t(38)},37:function(n,a,t){var s=t(42),e=t(51);n.exports=t(17).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return s(a.call(n))}},38:function(n,a,t){var s=t(61),e=t(24)("iterator"),p=t(45);n.exports=t(17).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(s(a))}},44:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&M(n.props.children)?b["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(M(n)&&(n=n.split("").join(" ")),b["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=t(8),l=s(o),c=t(7),u=s(c),i=t(27),r=s(i),k=t(4),d=s(k),f=t(6),m=s(f),g=t(5),h=s(g),v=t(1),b=s(v),y=t(3),x=s(y),E=t(19),_=s(E),C=t(30),w=s(C),N=t(48),T=s(N),j=/^[\u4e00-\u9fa5]{2}$/,M=j.test.bind(j),P=function(n){function a(){(0,d["default"])(this,a);for(var t=arguments.length,s=Array(t),e=0;e<t;e++)s[e]=arguments[e];var p=(0,m["default"])(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,w["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),t=(0,r["default"])(a,2),s=t[0],e=s.children,o=s.className,c=s.prefixCls,i=s.type,k=s.size,d=s.inline,f=s.disabled,m=s.htmlType,g=s.icon,h=s.loading,v=s.touchFeedback,y=t[1],E=(0,x["default"])((n={},(0,u["default"])(n,o,o),(0,u["default"])(n,c,!0),(0,u["default"])(n,c+"-primary","primary"===i),(0,u["default"])(n,c+"-ghost","ghost"===i),(0,u["default"])(n,c+"-warning","warning"===i),(0,u["default"])(n,c+"-small","small"===k),(0,u["default"])(n,c+"-loading",h),(0,u["default"])(n,c+"-inline",d),(0,u["default"])(n,c+"-disabled",f),(0,u["default"])(n,c+"-touchFeedback",v),n)),C=h?"loading":g,N=b["default"].Children.map(e,p);return b["default"].createElement("button",(0,l["default"])({},y,{type:m||"button",className:E,disabled:f,onClick:this.onClick}),C?b["default"].createElement(_["default"],{type:C}):null,N)},a}(b["default"].Component);P.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,T["default"])(P),n.exports=a["default"]},46:function(n,a){},48:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=c["default"].createClass({displayName:"TouchableFeedbackComponent",statics:{myName:a||"TouchableFeedbackComponent"},getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},render:function(){var a=u?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp};return c["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return t}Object.defineProperty(a,"__esModule",{value:!0});var p=t(8),o=s(p);a["default"]=e;var l=t(1),c=s(l),u="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},52:function(n,a){},59:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(71),p=s(e),o=t(72),l=s(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},71:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(7),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,o=a.align,l=a.alignContent,c=a.className,u=a.children,i=a.prefixCls,r=a.style,k=a.onClick,f=(0,m["default"])((n={},(0,p["default"])(n,i,!0),(0,p["default"])(n,i+"-dir-row","row"===t),(0,p["default"])(n,i+"-dir-row-reverse","row-reverse"===t),(0,p["default"])(n,i+"-dir-column","column"===t),(0,p["default"])(n,i+"-dir-column-reverse","column-reverse"===t),(0,p["default"])(n,i+"-nowrap","nowrap"===s),(0,p["default"])(n,i+"-wrap","wrap"===s),(0,p["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,p["default"])(n,i+"-justify-start","start"===e),(0,p["default"])(n,i+"-justify-end","end"===e),(0,p["default"])(n,i+"-justify-center","center"===e),(0,p["default"])(n,i+"-justify-between","between"===e),(0,p["default"])(n,i+"-justify-around","around"===e),(0,p["default"])(n,i+"-align-top","top"===o||"start"===o),(0,p["default"])(n,i+"-align-middle","middle"===o||"center"===o),(0,p["default"])(n,i+"-align-bottom","bottom"===o||"end"===o),(0,p["default"])(n,i+"-align-baseline","baseline"===o),(0,p["default"])(n,i+"-align-stretch","stretch"===o),(0,p["default"])(n,i+"-align-content-start","start"===l),(0,p["default"])(n,i+"-align-content-end","end"===l),(0,p["default"])(n,i+"-align-content-center","center"===l),(0,p["default"])(n,i+"-align-content-between","between"===l),(0,p["default"])(n,i+"-align-content-around","around"===l),(0,p["default"])(n,i+"-align-content-stretch","stretch"===l),(0,p["default"])(n,c,c),n));return d["default"].createElement("div",{className:f,style:r,onClick:k},u)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},72:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(7),p=s(e),o=t(4),l=s(o),c=t(6),u=s(c),i=t(5),r=s(i),k=t(1),d=s(k),f=t(3),m=s(f),g=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,o=a.style,l=a.onClick,c=(0,m["default"])((n={},(0,p["default"])(n,e+"-item",!0),(0,p["default"])(n,s,s),n));return d["default"].createElement("div",{className:c,style:o,onClick:l},t)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},510:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(7),o=s(p),l=t(4),c=s(l),u=t(6),i=s(u),r=t(5),k=s(r),d=t(1),f=s(d),m=t(3),g=s(m),h=t(44),v=s(h),b=t(59),y=s(b),x=function(n){function a(t){(0,c["default"])(this,a);var s=(0,i["default"])(this,n.call(this,t));return s.state={current:t.current},s.onPrev=s.onPrev.bind(s),s.onNext=s.onNext.bind(s),s}return(0,k["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},a.prototype._hasPrev=function(){return this.state.current>0},a.prototype._hasNext=function(){return this.state.current<this.props.total},a.prototype._handleChange=function(n){return this.setState({current:n}),this.props.onChange(n),n},a.prototype.onPrev=function(){this._handleChange(this.state.current-1)},a.prototype.onNext=function(){this._handleChange(this.state.current+1)},a.prototype.getIndexes=function(n){for(var a=[],t=0;t<n;t++)a.push(t);return a},a.prototype.render=function(){var n=this.props,a=n.prefixCls,t=n.className,s=n.mode,e=n.total,p=n.simple,l=n.prevText,c=n.nextText,u=this.state.current,i=(0,g["default"])((0,o["default"])({className:t},a+"-wrap",!0)),r=void 0;switch(s){case"button":r=f["default"].createElement(y["default"],null,f["default"].createElement(y["default"].Item,{className:a+"-wrap-btn "+a+"-wrap-btn-prev"},f["default"].createElement(v["default"],{inline:!0,disabled:u<=0,onClick:this.onPrev},l)),this.props.children?f["default"].createElement(y["default"].Item,null,this.props.children):!p&&f["default"].createElement(y["default"].Item,{className:i},f["default"].createElement("span",{className:"active"},u+1),"/",f["default"].createElement("span",null,e)),f["default"].createElement(y["default"].Item,{className:a+"-wrap-btn "+a+"-wrap-btn-next"},f["default"].createElement(v["default"],{disabled:u>=e-1,inline:!0,onClick:this.onNext},c)));break;case"number":r=f["default"].createElement("div",{className:i},f["default"].createElement("span",{className:"active"},u+1),"/",f["default"].createElement("span",null,e));break;case"pointer":var k=this.getIndexes(e);r=f["default"].createElement("div",{className:i},k.map(function(n){var t,s=(0,g["default"])((t={},(0,o["default"])(t,a+"-wrap-dot",!0),(0,o["default"])(t,a+"-wrap-dot-active",n===u),t));return f["default"].createElement("div",{className:s,key:"dot-"+n},f["default"].createElement("span",null))}));break;default:r=!1}return f["default"].createElement("div",{className:a},r)},a}(f["default"].Component);a["default"]=x,x.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:e},n.exports=a["default"]},511:function(n,a,t){"use strict";t(9),t(1163)},745:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(22),t(19)),p=s(e),o=(t(26),t(25)),l=s(o),c=(t(511),t(510)),u=s(c),i=(t(21),t(20)),r=s(i),k=t(1),d=s(k),f=t(2);s(f);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:0,title:"\u6309\u94ae\u5f62\u6001",filename:"components/pagination/demo/button.md",id:"components-pagination-demo-button"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6309\u94ae\u5185\u5e26\u6587\u672c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e26\u6587\u672c\u548cicon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\u4e0a\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n              nextText<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u4e0b\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n            <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9690\u85cf\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >simple</span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].createClass({displayName:"App",render:function(){return d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("div",{className:"pagination-container"},d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u6309\u94ae\u5185\u5e26\u6587\u672c"),d["default"].createElement(u["default"],{total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u5e26\u6587\u672c\u548cicon"),d["default"].createElement(u["default"],{total:5,current:1,prevText:d["default"].createElement("div",null,d["default"].createElement(p["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:d["default"].createElement("div",null,"\u4e0b\u4e00\u6b65",d["default"].createElement(p["default"],{type:"right"}))})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u9690\u85cf\u6570\u5b57"),d["default"].createElement(u["default"],{total:5,simple:!0,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),d["default"].createElement(u["default"],{mode:"number",total:5,current:3})),d["default"].createElement(r["default"],{size:"lg"})))}});return d["default"].createElement(n,null)},style:".demo-preview-item .loading-example * {\n  box-sizing: border-box;\n}\n.loading-example .title {\n  margin-bottom: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.demo-preview-item</span> <span class="token class" >.loading-example</span> * </span><span class="token punctuation" >{</span>\n  <span class="token property" >box-sizing</span><span class="token punctuation" >:</span> border-box<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},746:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(26),t(25)),p=s(e),o=(t(511),t(510)),l=s(o),c=(t(21),t(20)),u=s(c),i=t(1),r=s(i),k=t(2);s(k);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:2,title:"\u70b9\u72b6\u578b",filename:"components/pagination/demo/pointer.md",id:"components-pagination-demo-pointer"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u72b6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token string" >\'32px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n                <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pointer<span class="token punctuation" >"</span></span>\n                <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n                <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=r["default"].createClass({displayName:"App",render:function(){return r["default"].createElement("div",null,r["default"].createElement("div",{className:"pagination-container"},r["default"].createElement(u["default"],{size:"lg"}),r["default"].createElement(p["default"],null,r["default"].createElement("p",{className:"title"},"\u70b9\u72b6"),r["default"].createElement("div",{style:{marginBottom:"32px"}},r["default"].createElement(l["default"],{mode:"pointer",total:5,current:2}))),r["default"].createElement(u["default"],{size:"lg"})))}});return r["default"].createElement(n,null)},style:".loading-example .title {\n  margin-right: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},913:function(n,a,t){n.exports={button:t(745),pointer:t(746)}},1163:function(n,a){}});