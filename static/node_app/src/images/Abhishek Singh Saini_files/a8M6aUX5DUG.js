if (self.CavalryLogger) { CavalryLogger.start_js(["beUmu"]); }

__d("MercuryBootloadOnInteraction.react",["React","createCancelableFunction","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={Component:null},d.$2=function(a){a=d.state.interactionType==="click"?"click":a.type;d.setState({interactionType:a},function(){b("promiseDone")(d.props.loader.load(),function(a){d.props.takeOverRender?d.props.takeOverRender(function(){return d.$1(a)}):d.$1(a)})})},d.$3=function(a){d.setState({Component:a})},d.$4=function(a){d.state.interactionType!=="click"&&d.setState({interactionType:void 0})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("createCancelableFunction")(this.$3)};d.componentWillUnmount=function(){this.$1.cancel()};d.render=function(){__p&&__p();var a={onFocus:this.$2,onMouseOver:this.$2,onClick:this.$2,onBlur:this.$4};if(!this.state.Component)return b("React").cloneElement(this.props.placeholder,a);a=this.state.Component;var c={};switch(this.state.interactionType){case"focus":c.autoFocus=!0;break;case"click":c.clicked=!0;break}return b("React").cloneElement(this.props.component,babelHelpers["extends"]({},c,{LazyLoadedComponent:a}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ChatTypeaheadCore",["csx","cx","fbt","Bootloader","BootloadOnRender.react","CurrentUser","DOM","JSResource","LazyComponent.react","MercuryBootloadOnInteraction.react","React","ReactDOM","WorkSMBHelpSidebar","emptyFunction","ge","gkx","onAfterDisplay"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("WorkSMBHelpSidebar").module,k=b("gkx")("678264")?b("MercuryBootloadOnInteraction.react"):b("BootloadOnRender.react"),l,m="",n=[],o={search:"._58al",settings:"._5vmb",compose:"._5q85",groupcreate:"._1-4-"},p=!1,q=b("emptyFunction");a={_handleInteraction:function(a,c){if(!b("gkx")("678264"))return;n.push(a);a==="search"&&(m=c?c:"")},_handleCompositionStart:function(){p=!0},_handleCompositionEnd:function(){p=!1,q(),q=b("emptyFunction")},takeOverRender:function(a){!p?a():q===b("emptyFunction")&&(q=a)},processInteractionsQueue:function(){n.forEach(function(a){if(!o[a])return;var c=b("DOM").scry(b("ge")("chatsearch"),o[a]);c&&c[0]&&(a!=="search"?c[0].click():l=c[0],c[0].focus())})},focusSearchField:function(a,c){if(!l){a=b("DOM").scry(a,"._3rhb input");a.length>0&&(l=a[0])}l&&(l.focus(),c.prevent())},getLastSearchQuery:function(){return m},deferRenderChatSidebarSheet:function(a){b("onAfterDisplay")(function(){b("Bootloader").loadModules(["ChatSidebarSheet.react"],function(c){var d=b("ge")("chatsidebarsheet");b("ReactDOM").render(b("React").createElement(c,{className:"fbChatSidebarMessage",viewer:b("CurrentUser").getID(),isSideBar:a}),d)},"ChatTypeaheadCore")})},init:function(a,c,d){var e=this;b("gkx")("678264")&&this.deferRenderChatSidebarSheet(d);b("ReactDOM").render(b("React").createElement("div",null,b("React").createElement("div",{id:"chatsidebarsheet"}),b("React").createElement(k,{loader:b("JSResource")("ChatTypeaheadWrapper.react").__setRef("ChatTypeaheadCore"),placeholder:b("React").createElement("div",null,j&&b("React").createElement(j,null),b("React").createElement("div",{className:"_1nq2"},b("React").createElement("div",{className:"_5iwm _5iwn _62it"},b("React").createElement("label",{className:"_58ak _3rhb"},b("React").createElement("input",{className:"_58al",type:"text",onChange:function(a){return e._handleInteraction("search",a.target.value)},onFocus:function(a){return e._handleInteraction("search",a.target.value)},onCompositionStart:this._handleCompositionStart,onCompositionEnd:this._handleCompositionEnd,placeholder:i._("Search")})))),d?b("React").createElement("div",{className:"_531b"},b("React").createElement("div",{className:"_5qth _6a _6e"},b("React").createElement("a",{href:"#",className:"button _5vmb",onClick:function(){return e._handleInteraction("settings")}})),b("React").createElement("a",{href:"#",className:"_3a-4 _5q85",onClick:function(){return e._handleInteraction("compose")}}),b("React").createElement("div",{className:"_46fv"},b("React").createElement("a",{href:"#",className:"_1-4-",onClick:function(){return e._handleInteraction("groupcreate")}}))):null),takeOverRender:this.takeOverRender,component:b("React").createElement(b("LazyComponent.react"),{id:c,isSidebar:d})})),a)}};e.exports=a}),null);
__d("JSLogger",["lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:!1};function h(a){if(a=="/"||a.indexOf("/",1)<0)return!1;var b=/^\/(v\d+\.\d\d?|head)\//.test(a);return b?/^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/",1))):/^\/(dialog|plugins)\//.test(a)}function i(b){b instanceof Error&&a.ErrorUtils&&(b=a.ErrorUtils.normalizeError(b));try{return JSON.stringify(b)}catch(a){return"{}"}}function j(a,b,c){g.counts[a]||(g.counts[a]={}),g.counts[a][b]||(g.counts[a][b]=0),c=c==null?1:Number(c),g.counts[a][b]+=isFinite(c)?c:0}g.logAction=function(a,b,c){__p&&__p();if(this.type=="bump")j(this.cat,a,b);else if(this.type=="rate")b&&j(this.cat,a+"_n",c),j(this.cat,a+"_d",c);else{c={cat:this.cat,type:this.type,event:a,data:b!=null?i(b):null,date:Date.now(),seq:g.seq++};g.head=g.head?g.head.next=c:g.tail=c;while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return c}};function c(c){__p&&__p();if(!g.categories[c]){g.categories[c]={};var d=function(d){__p&&__p();var e={cat:c,type:d};g.categories[c][d]=function(){__p&&__p();g.forwarding=!1;var c=null;if(b("lowerFacebookDomain").isValidDocumentDomain())return;c=g.logAction;if(h(location.pathname))g.forwarding=!1;else try{c=a.top.require("JSLogger")._.logAction,g.forwarding=c!==g.logAction}catch(a){}c&&c.apply(e,arguments)}};d("debug");d("log");d("warn");d("error");d("bump");d("rate")}return g.categories[c]}function d(a,b){var c=[];for(var b=b||g.tail;b;b=b.next)if(!a||a(b)){var d={type:b.type,cat:b.cat,date:b.date,event:b.event,seq:b.seq};b.data&&(d.data=JSON.parse(b.data));c.push(d)}return c}e.exports={_:g,DUMP_EVENT:"jslogger/dump",create:c,getEntries:d}}),null);
__d("DOMControl",["DataStore","$"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.root=b("$").fromIDOrElement(a),this.updating=!1,b("DataStore").set(a,"DOMControl",this)}var c=a.prototype;c.getRoot=function(){return this.root};c.beginUpdate=function(){if(this.updating)return!1;this.updating=!0;return!0};c.endUpdate=function(){this.updating=!1};c.update=function(a){if(!this.beginUpdate())return this;this.onupdate(a);this.endUpdate()};c.onupdate=function(a){};a.getInstance=function(a){return b("DataStore").get(a,"DOMControl")};return a}();e.exports=a}),null);
__d("Input",["CSS","DOMControl","DOMQuery"],(function(a,b,c,d,e,f){__p&&__p();var g={isWhiteSpaceOnly:function(a){return!/\S/.test(a||"")},isEmpty:function(a){return g.isWhiteSpaceOnly(a.value)},getValue:function(a){return g.isEmpty(a)?"":a.value},getValueRaw:function(a){return a.value},setValue:function(a,c){a.value=c||"";c=b("DOMControl").getInstance(a);c&&c.resetHeight&&c.resetHeight()},setPlaceholder:function(a,b){a.setAttribute("aria-label",b),a.setAttribute("placeholder",b)},reset:function(a){a.value="",a.style.height=""},setSubmitOnEnter:function(a,c){b("CSS").conditionClass(a,"enter_submit",c)},getSubmitOnEnter:function(a){return b("CSS").hasClass(a,"enter_submit")},setMaxLength:function(a,b){b>0?a.setAttribute("maxlength",b):a.removeAttribute("maxlength")}};e.exports=g}),null);
__d("Form",["DataStore","DOM","DOMQuery","DTSG","DTSGUtils","Input","LSD","PHPQuerySerializer","Random","SprinkleConfig","URI","getElementPosition","isFacebookURI","isNode"],(function(a,b,c,d,e,f){__p&&__p();var g="FileList"in window,h="FormData"in window;function i(a){var c={};b("PHPQuerySerializer").serialize(a).split("&").forEach(function(a){if(a){a=/^([^=]*)(?:=(.*))?$/.exec(a);var d=b("URI").decodeComponent(a[1]),e=a[2]!==void 0;e=e?b("URI").decodeComponent(a[2]):null;c[d]=e}});return c}var j={getInputs:function(a){a===void 0&&(a=document);return[].concat(b("DOMQuery").scry(a,"input"),b("DOMQuery").scry(a,"select"),b("DOMQuery").scry(a,"textarea"),b("DOMQuery").scry(a,"button"))},getInputsByName:function(a){var b={};j.getInputs(a).forEach(function(a){var c=b[a.name];b[a.name]=typeof c==="undefined"?a:[a].concat(c)});return b},getSelectValue:function(a){return a.options[a.selectedIndex].value},setSelectValue:function(a,b){for(var c=0;c<a.options.length;++c)if(a.options[c].value==b){a.selectedIndex=c;break}},getRadioValue:function(a){for(var b=0;b<a.length;b++)if(a[b].checked)return a[b].value;return null},getElements:function(a){return a.tagName=="FORM"&&a.elements!=a?Array.from(a.elements):j.getInputs(a)},getAttribute:function(a,b){return(a.getAttributeNode(b)||{}).value||null},setDisabled:function(a,c){j.getElements(a).forEach(function(a){if(a.disabled!==void 0){var d=b("DataStore").get(a,"origDisabledState");c?(d===void 0&&b("DataStore").set(a,"origDisabledState",a.disabled),a.disabled=c):d===!1&&(a.disabled=!1)}})},forEachValue:function(a,c,d){__p&&__p();j.getElements(a).forEach(function(a){__p&&__p();if(!a.name||a.disabled)return;if(a.type==="submit")return;if(a.type==="reset"||a.type==="button"||a.type==="image")return;if((a.type==="radio"||a.type==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var c=0,e=a.options.length;c<e;c++){var f=a.options[c];f.selected&&d("select",a.name,f.value)}return}if(a.type==="file"){if(g){f=a.files;for(var c=0;c<f.length;c++)d("file",a.name,f.item(c))}return}d(a.type,a.name,b("Input").getValue(a))}),c&&c.name&&c.type==="submit"&&b("DOMQuery").contains(a,c)&&b("DOMQuery").isNodeOfType(c,["input","button"])&&d("submit",c.name,c.value)},createFormData:function(a,c){__p&&__p();if(!h)return null;var d=new FormData();if(a)if(b("isNode")(a))j.forEachValue(a,c,function(b,a,c){d.append(a,c)});else{c=i(a);for(var e in c)c[e]==null?d.append(e,""):d.append(e,c[e])}return d},serialize:function(a,b){var c={};j.forEachValue(a,b,function(a,b,d){if(a==="file")return;j._serializeHelper(c,b,d)});return j._serializeFix(c)},_serializeHelper:function(a,b,c){__p&&__p();var d=Object.prototype.hasOwnProperty,e=/([^\]]+)\[([^\]]*)\](.*)/.exec(b);if(e){if(!a[e[1]]||!d.call(a,e[1])){a[e[1]]=d={};if(a[e[1]]!==d)return}d=0;if(e[2]==="")while(a[e[1]][d]!==void 0)d++;else d=e[2];e[3]===""?a[e[1]][d]=c:j._serializeHelper(a[e[1]],d.concat(e[3]),c)}else a[b]=c},_serializeFix:function(a){__p&&__p();for(var b in a)a[b]instanceof Object&&(a[b]=j._serializeFix(a[b]));var c=Object.keys(a);if(c.length===0||c.some(isNaN))return a;c.sort(function(a,b){return a-b});var d=0,e=c.every(function(a){return+a===d++});return e?c.map(function(b){return a[b]}):a},post:function(a,c,d,e){__p&&__p();e===void 0&&(e=!0);a=new(b("URI"))(a);var f=document.createElement("form");f.action=a.toString();f.method="POST";f.style.display="none";var g=!b("isFacebookURI")(a);if(d){if(g){f.rel="noopener";if(d==="_blank"){d=btoa(b("Random").uint32());var h=window.open("about:blank",d);h===void 0||(h.opener=null)}}f.target=d}if(e&&(!g&&a.getSubdomain()!=="apps")){h=b("DTSG").getToken();h&&(c.fb_dtsg=h,b("SprinkleConfig").param_name&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(h)));b("LSD").token&&(c.lsd=b("LSD").token,b("SprinkleConfig").param_name&&!h&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(b("LSD").token)))}j.createHiddenInputs(c,f);b("DOMQuery").getRootElement().appendChild(f);f.submit();return!1},createHiddenInputs:function(a,c,d,e){__p&&__p();e===void 0&&(e=!1);d=d||{};a=i(a);for(var f in a){if(a[f]===null)continue;if(d[f]&&e)d[f].value=a[f];else{var g=b("DOM").create("input",{type:"hidden",name:f,value:a[f]});d[f]=g;c.appendChild(g)}}return d},getFirstElement:function(a,c){__p&&__p();c===void 0&&(c=['input[type="text"]',"textarea",'input[type="password"]','input[type="button"]','input[type="submit"]']);var d=[];for(var e=0;e<c.length;e++){d=b("DOMQuery").scry(a,c[e]);for(var f=0;f<d.length;f++){var g=d[f];try{var h=b("getElementPosition")(g);if(h.y>0&&h.x>0)return g}catch(a){}}}return null},focusFirst:function(a){a=j.getFirstElement(a);if(a){a.focus();return!0}return!1}};e.exports=j}),null);
__d("curry",["bind"],(function(a,b,c,d,e,f){a=b("bind")(null,b("bind"),null);e.exports=a}),null);
__d("getOverlayZIndex",["Style"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=c||document.body;var d=[];while(a&&a!==c)d.push(a),a=a.parentNode;if(a!==c)return 0;for(var a=d.length-1;a>=0;a--){c=d[a];if(b("Style").get(c,"position")!="static"){c=parseInt(b("Style").get(c,"z-index"),10);if(!isNaN(c))return c}}return 0}e.exports=a}),null);
__d("BanzaiScuba",["Banzai","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="scuba_sample";a=function(){"use strict";__p&&__p();function a(a,c,d){this.posted=!1,a||b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),this.dataset=a,this.$1=c,this.options=d}var c=a.prototype;c.$2=function(a,c,d){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");return a}a=a||{};a[c]=d;return a};c.addNormal=function(a,b){this.normal=this.$2(this.normal,a,b);return this};c.addInteger=function(a,b){this["int"]=this.$2(this["int"],a,b);return this};c.addDenorm=function(a,b){this.denorm=this.$2(this.denorm,a,b);return this};c.addTagSet=function(a,b){this.tags=this.$2(this.tags,a,b);return this};c.addNormVector=function(a,b){this.normvector=this.$2(this.normvector,a,b);return this};c.post=function(a){__p&&__p();if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to re-post");return}if(!this.dataset)return;var c={};c._ds=this.dataset;c._options=this.options;this.normal&&(c.normal=this.normal);this["int"]&&(c["int"]=this["int"]);this.denorm&&(c.denorm=this.denorm);this.tags&&(c.tags=this.tags);this.normvector&&(c.normvector=this.normvector);this.$1!==null&&this.$1!==""&&this.$1!==void 0&&(c._lid=this.$1);b("Banzai").post(g,c,a);this.posted=!0};return a}();e.exports=a}),null);
__d("XUIGrayText.react",["cx","React","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.shade;a=babelHelpers.objectWithoutPropertiesLoose(a,["shade"]);c=(c==="light"?"_50f8":"")+(c==="medium"?" _c24":"")+(c==="dark"?" _50f9":"");return b("React").createElement(b("XUIText.react"),babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,c)}),this.props.children)};return c}(b("React").Component);c.propTypes={shade:a.oneOf(["light","medium","dark"])};c.defaultProps={shade:"light"};e.exports=c}),null);
__d("monitorCodeUse",["invariant","BanzaiScuba","ErrorUtils","ScriptPath","SiteData","forEachObject","ReactCurrentOwner"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){a=a.type;if(typeof a==="string")return a;return typeof a==="function"?a.displayName||a.name:null}function i(a){var b=1e3,c=[];while(a&&c.length<b)c.push(h(a)||""),typeof a.tag==="number"?a=a["return"]:a=a._currentElement&&a._currentElement._owner;return c}function j(a){return Array.isArray(a)?"[...]":k(a)}function k(a){__p&&__p();if(a==null)return""+String(a);if(Array.isArray(a)){if(a.length>10){var b=a.slice(0,5).map(j);return"["+b.join(", ")+", ...]"}b=a.map(j);return"["+b.join(", ")+"]"}if(typeof a==="string")return"'"+a+"'";if(typeof a==="object"){b=Object.keys(a).map(function(a){return a+"=..."});return"{"+b.join(", ")+"}"}return String(a)}function l(a){return a.identifier||""}function m(a){var b;return a.script+"  "+((b=a.line)!=null?b:"")+":"+((b=a.column)!=null?b:"")}function a(a,c,d){__p&&__p();c===void 0&&(c={});d===void 0&&(d={});a&&!/[^a-z0-9_]/.test(a)||g(0,2789);var e={};d.sampleRate!=null&&(e.sampleRate=d.sampleRate);var f=new(b("BanzaiScuba"))("core_monitor",null,e);f.addNormal("event",a);e=b("ReactCurrentOwner");f.addNormVector("owners",i(e.current));f.addNormal("uri",window.location.href);f.addNormal("script_path",b("ScriptPath").getScriptPath());f.addNormal("devserver_username",b("SiteData").devserver_username||"");e=!1;d.forceIncludeStackTrace&&(e=!0);if(e)try{d=new Error(a);d.framesToPop=1;e=b("ErrorUtils").normalizeError(d).stackFrames;a=e.map(l);d=e.map(m).join("\n");f.addNormVector("stacktrace",a);f.addDenorm("stack",d)}catch(a){}b("forEachObject")(c,function(a,b,c){typeof a==="string"?f.addNormal(b,a):typeof a==="number"&&(a|0)===a?f.addInteger(b,a):Array.isArray(a)?f.addNormVector(b,a.map(k)):f.addNormal(b,k(a))});f.post()}e.exports=a}),null);
__d("LayoutColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return b("React").createElement("div",babelHelpers["extends"]({ref:c},a,{className:b("joinClasses")(d,"_4bl7")}),e)}e.exports=b("React").forwardRef(a)}),null);
__d("LayoutFillColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return b("React").createElement("div",babelHelpers["extends"]({ref:c},a,{className:b("joinClasses")(d,"_4bl9")}),e)}e.exports=b("React").forwardRef(a)}),null);
__d("Layout.react",["cx","LayoutColumn.react","LayoutFillColumn.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!1,d=!1,e=this.props,f=e.children,g=e.className;e=babelHelpers.objectWithoutPropertiesLoose(e,["children","className"]);b("React").Children.forEach(f,function(b){if(!b)return;b.type===c.FillColumn?d=!0:d&&(a=!0)});return b("React").createElement("div",babelHelpers["extends"]({},e,{className:b("joinClasses")(g,a?"_5aj7":"clearfix _ikh")}),f)};return c}(b("React").Component);a.Column=b("LayoutColumn.react");a.FillColumn=b("LayoutFillColumn.react");e.exports=a}),null);
__d("Dispatcher_DEPRECATED",["invariant","FBLogger","monitorCodeUse"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="ID_";a=function(){__p&&__p();function a(){this.$1={},this.$2=!1,this.$3={},this.$4={},this.$5=1}var b=a.prototype;b.register=function(a,b){b=this.__genID(b);this.$1[b]=a;return b};b.unregister=function(a){this.$1[a]||g(0,1331,a),delete this.$1[a]};b.waitFor=function(a){__p&&__p();this.$2||g(0,1332);for(var b=0;b<a.length;b++){var c=a[b];if(this.$4[c]){this.$3[c]||g(0,2380,c);continue}this.$1[c]||g(0,2381,c);this.$7(c)}};b.dispatch=function(a){j(this.$2,this.$6,a);this.$8(a);try{for(var b in this.$1){if(this.$4[b])continue;this.$7(b)}}finally{this.$9()}};b.isDispatching=function(){return this.$2};b.$7=function(a){this.$4[a]=!0,this.__invokeCallback(a,this.$1[a],this.$6),this.$3[a]=!0};b.__invokeCallback=function(a,b,c){b(c)};b.$8=function(a){for(var b in this.$1)this.$4[b]=!1,this.$3[b]=!1;this.$6=a;this.$2=!0};b.$9=function(){delete this.$6,this.$2=!1};b.__genID=function(a){var b=a?a+"_":h;a=a||b+this.$5++;while(this.$1[a])a=b+this.$5++;return a};return a}();function i(a){__p&&__p();var b="<unknown>";if(!a)return b;if(typeof a.type==="string")return a.type;if(typeof a.actionType==="string")return a.actionType;if(!a.action)return b;if(typeof a.action.type==="string")return a.action.type;return typeof a.action.actionType==="string"?a.action.actionType:b}function j(a,c,d){if(a){a=new Error("Cannot dispatch in the middle of a dispatch");b("FBLogger")("flux_dispatcher").catching(a).mustfix("Tried to dispatch action %s while already dispatching %s",i(d),i(c));throw a}}e.exports=a}),null);
__d("fbglyph",[],(function(a,b,c,d,e,f){function a(a){throw new Error("fbglyph("+JSON.stringify(a)+"): Unexpected fbglyph reference.")}e.exports=a}),null);
__d("FalcoLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";var g="falco:";a={log:function(a,c,d){d===void 0&&(d=!1),b("Banzai").post(g+a,c,d?b("Banzai").VITAL:b("Banzai").BASIC)}};e.exports=a}),null);
__d("MercuryIDs",["gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={isValid:function(a){return a==null||a===""||typeof a!=="string"?!1:/^\w{3,12}:.+/.test(a)},isValidThreadID:function(a){if(!g.isValid(a))return!1;a=g.tokenize(a);switch(a.type){case"user":case"support":case"thread":case"root":return!0;default:return(a.type==="pending"||a.type==="group")&&!b("gkx")("863760")?!0:!1}},tokenize:function(a){if(a==null||a===""||!g.isValid(a))throw new Error("bad_id_format "+String(a));var b=a.indexOf(":");return{type:a.substr(0,b),value:a.substr(b+1)}},getUserIDFromParticipantID:function(a){if(!g.isValid(a))throw new Error("bad_id_format "+a);a=g.tokenize(a);var b=a.type;a=a.value;return b==="fbid"?a:null},getParticipantIDFromUserID:function(a){if(isNaN(a))throw new Error("Not a user ID: "+a);return"fbid:"+a},getUserIDFromThreadID:function(a){return!this.isCanonical(a)?null:this.tokenize(a).value},getThreadIDFromUserID:function(a){return"user:"+a},getThreadIDFromThreadFBID:function(a){return"thread:"+a},getThreadIDFromSupportInboxItemID:function(a){return"support:"+a},getThreadFBIDFromThreadID:function(a){return this.tokenize(a).value},getThreadKeyfromThreadIDUserID:function(a,b){__p&&__p();if(a==null||a===""||!g.isValid(a))throw new Error("bad_id_format "+String(a));var c=this.tokenize(a).type;a=this.tokenize(a).value;if(c!=="user")return"g"+a;c="";var d="";if(a.length!==b.length)a.length>b.length?(c=a,d=b):(c=b,d=a);else if(b===a)return b+"u"+a;else{var e=0;while(e<a.length&&e<b.length)if(a[e]===b[e])e++;else{a[e]>b[e]?(c=a,d=b):(c=b,d=a);break}}return d+"u"+c},getThreadIDFromParticipantID:function(a){a=this.getUserIDFromParticipantID(a);return a?this.getThreadIDFromUserID(a):null},getParticipantIDFromFromThreadID:function(a){a=this.getUserIDFromThreadID(a);return a?this.getParticipantIDFromUserID(a):null},getSupportInboxItemIDFromThreadID:function(a){return this.tokenize(a).value},isCanonical:function(a){return this.isValid(a)&&this.tokenize(a).type==="user"},isGroupChat:function(a){return this.isValid(a)&&this.tokenize(a).type!=="user"},isLocalThread:function(a){return this.isValid(a)&&this.tokenize(a).type==="root"}};e.exports=g}),null);
__d("TokenizeUtil",["nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g=/[ ]+/g,h=/[^ ]+/g,i=new RegExp("[^ "+l()+"]+|"+a(),"g"),j=new RegExp(a(),"g"),k=1e3;function l(){return".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf"}function a(){return"["+l()+"]"}var m={},n={a:"\u0430 \xe0 \xe1 \xe2 \xe3 \xe4 \xe5 \u0101",b:"\u0431",c:"\u0446 \xe7 \u010d",d:"\u0434 \xf0 \u010f \u0111",e:"\u044d \u0435 \xe8 \xe9 \xea \xeb \u011b \u0113",f:"\u0444",g:"\u0433 \u011f \u0123",h:"\u0445 \u0127",i:"\u0438 \xec \xed \xee \xef \u0131 \u012b",j:"\u0439",k:"\u043a \u0138 \u0137",l:"\u043b \u013e \u013a \u0140 \u0142 \u013c",m:"\u043c",n:"\u043d \xf1 \u0148 \u0149 \u014b \u0146",o:"\u043e \xf8 \xf6 \xf5 \xf4 \xf3 \xf2",p:"\u043f",r:"\u0440 \u0159 \u0155",s:"\u0441 \u015f \u0161 \u017f",t:"\u0442 \u0165 \u0167 \xfe",u:"\u0443 \u044e \xfc \xfb \xfa \xf9 \u016f \u016b",v:"\u0432",y:"\u044b \xff \xfd",z:"\u0437 \u017e",ae:"\xe6",oe:"\u0153",ts:"\u0446",ch:"\u0447",ij:"\u0133",sh:"\u0448",ss:"\xdf",ya:"\u044f"};for(var o in n){var p=n[o].split(" ");for(var q=0;q<p.length;q++)m[p[q]]=o}function c(a){return a.replace(j," ")}function r(a){a=a.toLowerCase();var b="",c;for(var d=a.length;d--;)c=a.charAt(d),b=(m[c]||c)+b;return b.replace(g," ")}function s(a,b){b===void 0&&(b=h);var c=[],d=b.exec(a);while(d)d=d[0],c.push(d),d=b.exec(a);return c}function d(a,b){__p&&__p();b===void 0&&(b=h);var c={},d=0;return function(e,f){if(!Object.prototype.hasOwnProperty.call(c,e)){d>=k&&(c={},d=0);var g=r(e),h=a(g);c[e]={value:e,flatValue:g,tokens:s(h,b),isPrefixQuery:!!h&&h[h.length-1]!=" "};d++}f!=null&&f!==!1&&c[e].sortedTokens===void 0&&(c[e].sortedTokens=c[e].tokens.slice(),c[e].sortedTokens.sort(function(a,b){return b.length-a.length}));return c[e]}}var t=d(c),u=d(function(a){return a},i);function f(a,c,d){__p&&__p();var e=a=="query"||a=="query_punc",f=a=="aligned",g=a=="query_punc"?u:t;c=g(c,a=="prefix");var h=a=="prefix"?b("nullthrows")(c.sortedTokens):c.tokens,i=g(d).tokens,j={},k=c.isPrefixQuery&&(e||f)?h.length-1:null;g=function(b,c){for(var d=0;d<i.length;++d){var g=i[d];if(!j[d]&&(g==b||((e||f)&&c===k||a=="prefix")&&g.indexOf(b)===0))return j[d]=!0;if(f&&!j[d])return!1}return!1};return Boolean(h.length&&h.every(g))}p={flatten:r,parse:t,parseIncludingPunctuations:u,getPunctuation:a,makeParse:d,isExactMatch:f.bind(null,"exact"),isQueryMatch:f.bind(null,"query"),isQueryMatchIncludingPunctuations:f.bind(null,"query_punc"),isAlignedMatch:f.bind(null,"aligned"),isPrefixMatch:f.bind(null,"prefix"),tokenize:s};e.exports=p}),null);
__d("abstractMethod",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){g(0,1537,a,b)}e.exports=a}),null);
__d("cssVar",[],(function(a,b,c,d,e,f){function a(a){throw new Error('cssVar("'+a+'"): Unexpected class transformation.')}e.exports=a}),null);