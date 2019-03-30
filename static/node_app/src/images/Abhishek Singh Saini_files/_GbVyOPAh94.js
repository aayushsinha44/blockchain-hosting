if (self.CavalryLogger) { CavalryLogger.start_js(["jP3to"]); }

__d("RealtimeRequestStreamWebClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientSessionID=function(a){this.$1.client_session_id=a;return this};c.setClientTimeMs=function(a){this.$1.client_time_ms=a;return this};c.setMessage=function(a){this.$1.message=a;return this};c.setSeverity=function(a){this.$1.severity=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserFbid=function(a){this.$1.user_fbid=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={client_session_id:!0,client_time_ms:!0,message:!0,severity:!0,time:!0,user_fbid:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("XHPTemplate",["DataStore","DOM","HTML","XHPTemplateProcessor"],(function(a,b,c,d,e,f){__p&&__p();var g=b("XHPTemplateProcessor").processor;a=function(){"use strict";__p&&__p();function a(a){g instanceof Function&&(a=g(a)),this._model=a}var c=a.prototype;c.render=function(){b("HTML").isHTML(this._model)&&(this._model=b("DOM").setContent(document.createDocumentFragment(),this._model)[0]);return this._model.cloneNode(!0)};c.build=function(){return new h(this.render())};a.getNode=function(b,c){return a.getNodes(b)[c]};a.getNodes=function(a){__p&&__p();var c=b("DataStore").get(a,"XHPTemplate:nodes");if(!c){c={};var d=b("DOM").scry(a,"[data-jsid]");d.push(a);var e=d.length;while(e--){var f=d[e];c[f.getAttribute("data-jsid")]=f;f.removeAttribute("data-jsid")}b("DataStore").set(a,"XHPTemplate:nodes",c)}return c};return a}();var h=function(){"use strict";__p&&__p();function a(a){this._root=a,this._populateNodes()}var c=a.prototype;c._populateNodes=function(){this._nodes={};this._leaves={};var a=this._root.getElementsByTagName("*");for(var b=0,c=a.length;b<c;b++){var d=a[b],e=d.getAttribute("data-jsid");e&&(d.removeAttribute("data-jsid"),this._nodes[e]=d,this._leaves[e]=!d.childNodes.length)}};c.getRoot=function(){return this._root};c.getNode=function(a){return this._nodes[a]};c.setNodeProperty=function(a,b,c){this.getNode(a)[b]=c;return this};c.setNodeContent=function(a,c){if(!this._leaves[a])throw new Error("Can't setContent on non-leaf node: "+a);b("DOM").setContent(this.getNode(a),c);return this};return a}();e.exports=a}),null);
__d("BladeRunnerConfig",["RTISubscriptionManagerConfig","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.patchRequestHeaders=function(a){var c={},d=b("RTISubscriptionManagerConfig").bladerunner_www_sandbox;if(d!=null){var e=b("nullthrows")(a.method);e.startsWith("FBLQ:")||(c["javascript-sandbox"]=d)}for(var f in a)c[f]=a[f];return c};return a}();c=new a();e.exports=c}),null);
__d("BladeRunnerLogger",["BanzaiODS","CurrentUser","FBLogger","RealtimeRequestStreamWebClientTypedLogger","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g="bladerunner_js_client",h={info:"info",warning:"warning",exception:"exception"};a=function(){"use strict";__p&&__p();function a(){this.$1=this.$4(),this.setFBLoggerLevel(1)}var c=a.prototype;c.info=function(a){this.$3>=2&&b("FBLogger")(g).info(a),this.$5(h.info,a)};c.warn=function(a){this.$3>=1&&b("FBLogger")(g).warn(a),this.$5(h.warning,a)};c.exception=function(a,c){c===void 0&&(c="");c=c+" "+a.toString();this.$3>=0&&b("FBLogger")(g).warn(c);this.$5(h.exception,c)};c.bumpCounter=function(a,c){c===void 0&&(c=1),b("BanzaiODS").bumpEntityKey("BladeRunnerClient",a,c)};c.setClientSessionId=function(a){this.$2=a};c.setFBLoggerLevel=function(a){this.$3=a};c.$5=function(a,c){if(this.$1){a=new(b("RealtimeRequestStreamWebClientTypedLogger"))().setClientTimeMs(Date.now()).setSeverity(a).setMessage(c).setClientSessionID(this.$2).setUserFbid(b("CurrentUser").getID());a.log()}};c.$4=function(){return b("gkx")("676834")};return a}();c=new a();e.exports=c}),null);
__d("BladeRunnerTypesInternal",["Base64","BladeRunnerLogger","BladeRunnerTypes"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){"use strict";__p&&__p();function a(){}var b=a.prototype;b.getHeaders=function(){if(this.headers!=null)return this.headers;throw new Error("Expected headers")};a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.requestType=n(b.requestType);c.payload=q(b.payload);c.headers=t(b.headers);c.extraHeader=q(b.extraHeader);c.requestTarget=q(b.requestTarget);return c};return a}(),h=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.dataId=o(b.dataId);c.data=q(b.data);c.shouldAck=v(b.shouldAck);return c};var c=a.prototype;c.decodeData=function(){if(this.data==null)throw new Error("Expected data");return b("Base64").decode(this.data)};c.setData=function(a){this.data=b("Base64").encode(a)};return a}(),i=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.dataId=n(b.dataId);c.success=u(b.success);c.message=q(b.message);c.code=o(b.code);return c};return a}(),j=function(){"use strict";function a(){}a.readObject=function(b){var c=new a();c.streamId=o(b.streamId);c.message=q(b.message);return c};return a}(),k=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.status=n(b.status);c.message=q(b.message);c.code=o(b.code);c.shouldRetry=v(b.shouldRetry);c.retryDelayMs=o(b.retryDelayMs);return c};return a}(),l=function(){"use strict";__p&&__p();function a(){}a.readObject=function(b){var c=new a();c.streamId=n(b.streamId);c.newBody=q(b.newBody);c.newExtraHeader=q(b.newExtraHeader);c.patchExtraHeader=q(b.patchExtraHeader);c.killBody=v(b.killBody);c.temporary=v(b.temporary);return c};return a}(),m=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.getRequest=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request;throw new Error("Expected request")};c.getData=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data;throw new Error("Expected data")};c.getDataAck=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA_ACK&&this.dataAck!=null)return this.dataAck;throw new Error("Expected dataAck")};c.getStatusUpdate=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate;throw new Error("Expected status update")};c.getLog=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log;throw new Error("Expected log")};c.getRewriteRequest=function(){if(this.type==b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST&&this.rewriteRequest!=null)return this.rewriteRequest;throw new Error("Expected rewrite request")};c.getStreamId=function(){__p&&__p();if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST&&this.rewriteRequest!=null)return this.rewriteRequest.streamId;throw new Error("Frame with unexpected type")};a.readObject=function(c){__p&&__p();var d=new a();d.type=n(c.type);switch(d.type){case b("BladeRunnerTypes").StreamFrameType.REQUEST:d.request=g.readObject(r(c.request));break;case b("BladeRunnerTypes").StreamFrameType.DATA:d.data=h.readObject(r(c.data));break;case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:d.dataAck=i.readObject(r(c.dataAck));break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:d.statusUpdate=k.readObject(r(c.statusUpdate));break;case b("BladeRunnerTypes").StreamFrameType.LOG:d.log=j.readObject(r(c.log));break;case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:d.rewriteRequest=l.readObject(r(c.rewriteRequest));break;default:b("BladeRunnerLogger").warn("Frame with unexpected type: "+d.type);return null}return d};a.newRequestFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.REQUEST;d.request=c;return d};a.newDataFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.DATA;d.data=c;return d};a.newDataAckFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.DATA_ACK;d.dataAck=c;return d};a.newStatusUpdateFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;d.statusUpdate=c;return d};a.newLogFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.LOG;d.log=c;return d};a.newRewriteRequestFrame=function(c){var d=new a();d.type=b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;d.rewriteRequest=c;return d};return a}();a=function(){"use strict";__p&&__p();function a(a,b){this.batchId=a,this.frames=b}var b=a.prototype;b.getFrames=function(){if(this.frames!=null)return this.frames;throw new Error("Expected frames")};b.write=function(){return JSON.stringify(this)};a.read=function(b){__p&&__p();b=JSON.parse(b);var c=b.batchId||0,d=[];for(var b=b.frames,e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;g=m.readObject(g);g!=null&&d.push(g)}return new a(c,d)};return a}();function n(a){if(typeof a==="number")return a;throw new Error("Expected number")}function o(a){return a==null?null:n(a)}function p(a){if(typeof a==="string")return a;throw new Error("Expected string")}function q(a){return a==null?null:p(a)}function r(a){if(typeof a==="object"&&a!=null)return a;throw new Error("Expected object")}function s(a){if(typeof a==="object"&&a!=null){var b=a,c={};Object.keys(b).forEach(function(a){var d=b[a];typeof d==="string"&&d!=null&&(c[a]=d)});return c}throw new Error("Expected string map")}function t(a){return a==null?null:s(a)}function u(a){if(typeof a==="boolean"&&a!=null)return a;throw new Error("Expected boolean")}function v(a){return a==null?null:u(a)}e.exports={GatewayStreamBatch:a,GatewayStreamData:h,GatewayStreamDataAck:i,GatewayStreamFrame:m,GatewayStreamLog:j,GatewayStreamRequest:g,GatewayStreamRewriteRequest:l,GatewayStreamStatusUpdate:k}}),null);
__d("BladeRunnerEventHandler",["BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a=function(){"use strict";__p&&__p();function a(a,b,c){this.$2=a,this.$1=b,this.$3=c}var c=a.prototype;c.onProxyResponse=function(a){__p&&__p();this.$4(a);var c=[];for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;this.$2.witnessFrame(g)&&c.push(g)}c.length>0&&this.$5(new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId,c))};c.onDisconnect=function(){this.$2.resetErrors();var a=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();a.streamId=this.$2.getRequest().streamId;a.status=b("BladeRunnerTypes").StreamStatus.CLOSED;a.shouldRetry=!0;a.retryDelayMs=0;a=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);this.onProxyResponse(a)};c.$4=function(a){__p&&__p();var c=this;a=a.getFrames().filter(function(a){return a.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE});for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;f=f.getStatusUpdate();if(f.status==b("BladeRunnerTypes").StreamStatus.CLOSED||f.status==b("BladeRunnerTypes").StreamStatus.REJECTED){this.$2.onError();var h=f.shouldRetry!=null&&f.shouldRetry,i=f.message!=null?f.message:"null";if(h&&this.$2.getErrorCount()<=this.$2.getRetriesAllowed()){f.status=b("BladeRunnerTypes").StreamStatus.PAUSED;var j=g;f.retryDelayMs!=null&&(j=f.retryDelayMs);b("BladeRunnerLogger").info("Can retry: stream "+f.streamId+" closed with status "+f.status+", message "+i+". Error count: "+this.$2.getErrorCount()+", retryDelay "+j+"ms. Already retrying: "+this.$2.getRetryRequestScheduled().toString());this.$2.getRetryRequestScheduled()?b("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying"):(b("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"),this.$2.setRetryRequestScheduled(!0),j>0?b("setTimeoutAcrossTransitions")(function(){return c.$6()},j):this.$6())}else b("BladeRunnerLogger").info("Will not retry: stream "+f.streamId+" closed with status "+f.status+", message "+i+". Error count: "+this.$2.getErrorCount()+", shouldRetry "+h.toString()+". Already retrying: "+this.$2.getRetryRequestScheduled().toString()),h?b("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded"):b("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"),this.$3.removeStream(f.streamId)}}};c.$6=function(){this.$2.setRetryRequestScheduled(!1),this.$2.isAlive()&&this.$3.sendRetryStreamRequest(this.$2)};c.$5=function(a){__p&&__p();b("BladeRunnerLogger").bumpCounter("send_to_handler");var c=[];this.$1.onBatch(a);for(var a=a.getFrames(),d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;try{switch(f.type){case b("BladeRunnerTypes").StreamFrameType.DATA:this.$1.onData(f.getData().decodeData());c.push(f.getData());break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:this.$1.onStatusUpdate(f.getStatusUpdate().status);break;case b("BladeRunnerTypes").StreamFrameType.LOG:f=f.getLog().message;f!=null&&this.$1.onLog(f);break;default:throw new Error("Frame with unexpected type")}}catch(a){b("BladeRunnerLogger").bumpCounter("send_to_handler_error"),b("BladeRunnerLogger").exception(a,"Failed sending frame to stream handler")}}this.$7(c)};c.$7=function(a){__p&&__p();var c=[];for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;if(f.shouldAck===!0&&f.dataId!=null){var g=new(b("BladeRunnerTypesInternal").GatewayStreamDataAck)();g.streamId=f.streamId;g.dataId=f.dataId;g.success=!0;c.push(g)}}this.$3.sendDataAcks(c)};return a}();e.exports=a}),null);
__d("BladeRunnerSocket",["BladeRunnerEventHandler","BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","FBMqttChannel","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="Connected",h="Disconnected",i=32*1024,j="/br_sr",k="/sr_res",l=null;a=function(){__p&&__p();function a(a){this.$1=[],this.$2=0,this.$3=null,this.$4=0,this.$5=new Map(),this.$6=a!=null?a:b("FBMqttChannel"),b("BladeRunnerLogger").setClientSessionId(b("uuid")()),this.$7()}a.get=function(){l==null&&(l=new a(b("FBMqttChannel")));return l};var c=a.prototype;c.sendNewStreamRequest=function(c,d){d=new(b("BladeRunnerEventHandler"))(c,d,this);var e=c.getRequest();this.$5.set(e.streamId,d);this.getStreamCount()<=a.maxStreamCount?this.$8(e):(b("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"),b("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: "+JSON.stringify(c.getRequest().getHeaders())),this.$9(d,e.streamId))};c.sendRetryStreamRequest=function(a){this.$8(a.getRequest())};c.sendCancel=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_cancel");var c=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();c.streamId=a;c.status=b("BladeRunnerTypes").StreamStatus.CLOSED;this.$10(c);this.removeStream(a)};c.sendAmendment=function(a,c){b("BladeRunnerLogger").bumpCounter("socket_send_amendment");var d=new(b("BladeRunnerTypesInternal").GatewayStreamData)();d.streamId=a;d.setData(c);this.$11(d)};c.$11=function(a){this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(a)),this.$12()};c.sendDataAcks=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_data_ack",a.length),this.$13(a)};c.removeStream=function(a){this.$5["delete"](a)};c.getStreamCount=function(){return this.$5.size};c.getNextStreamId=function(){this.$4++;return this.$4};c.onMQTTStateChanged=function(a){this.$12();if(a!=h&&a!=g||this.$3==a)return;this.$3=a;b("BladeRunnerLogger").info("MQTTStateChanged: "+a);a==h?(b("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"),this.$14()):a==g&&b("BladeRunnerLogger").bumpCounter("mqtt_state_connected")};c.$8=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_request"),this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a)),this.$12()};c.$10=function(a){this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)),this.$12()};c.$13=function(a){__p&&__p();for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(e))}this.$12()};c.$15=function(){this.$2++;return this.$2};c.$12=function(){if(this.$6.getConnectionState()===g&&this.$1.length>0){try{this.$16(this.$1)}finally{this.$1=[]}return!0}return!1};c.$16=function(a){__p&&__p();var c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$15(),a);c=c.write();if(c.length>i){var d=Math.floor(a.length/2);if(d===0)throw new Error("Publish is too long: "+c.length);this.$16(a.slice(0,d));this.$16(a.slice(d,a.length))}else try{b("BladeRunnerLogger").info("send message to "+j+" "+c),this.$6.publish(j,c),b("BladeRunnerLogger").bumpCounter("mqtt_publish_success")}catch(a){b("BladeRunnerLogger").exception(a,"Failed publishing to MQTT");b("BladeRunnerLogger").bumpCounter("mqtt_publish_error");throw a}};c.$7=function(){__p&&__p();var a=this;b("BladeRunnerLogger").info("Starting socket with endpoint "+this.$6.getEndpoint()+" useragent "+navigator.userAgent);this.$17();this.onMQTTStateChanged(this.$6.getConnectionState());this.$6.subscribeChannelEvents({onMQTTStateChanged:function(b){a.onMQTTStateChanged(b)},onJSError:function(a){var c=a!=null&&typeof a.isRecoverable==="boolean"?a.isRecoverable:!1;c?b("BladeRunnerLogger").bumpCounter("mqtt_channel_recoverable_error"):(b("BladeRunnerLogger").warn("JS error in MQTTChannel: "+(typeof a=="object"&&a!=null?a.toString():"unknown error")+", "+JSON.stringify(a)),b("BladeRunnerLogger").bumpCounter("mqtt_channel_error"))}});this.$6.subscribe(j,function(a){throw new Error("Unexpected response: "+j+" "+a.toString())});this.$6.subscribe(k,function(b){a.$18(b)})};c.$18=function(a){a=b("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);this.processBatch(a)};c.processBatch=function(a){__p&&__p();try{b("BladeRunnerLogger").bumpCounter("socket_process_batch");var c=JSON.stringify(a);b("BladeRunnerLogger").info("Received batch "+c.substring(0,256)+(c.length>256?"...":""));c=null;for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;g=g.getStreamId();c==null&&(c=g);if(g!=null&&c!=g)throw new Error("Received batch with frames for multiple streams")}if(c!=null){g=this.$5.get(c);g!=null?g.onProxyResponse(a):b("BladeRunnerLogger").info("Received batch with frames for unknown stream id: "+c)}else b("BladeRunnerLogger").info("Received batch with no frames")}catch(a){b("BladeRunnerLogger").exception(a,"Failed processing batch from MQTT");b("BladeRunnerLogger").bumpCounter("socket_process_batch_error");throw a}};c.$14=function(){this.$5.forEach(function(a,b,c){a.onDisconnect()})};c.$9=function(a,c){var d=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();d.streamId=c;d.status=b("BladeRunnerTypes").StreamStatus.REJECTED;d.shouldRetry=!1;d.retryDelayMs=0;c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(d)]);a.onProxyResponse(c)};c.$17=function(){"WebSocket"in window||(b("BladeRunnerLogger").warn("Browser does not support websocket"),b("BladeRunnerLogger").bumpCounter("websocket_not_supported"))};return a}();a.maxStreamCount=2e3;e.exports=a}),null);
__d("BladeRunnerStream",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var b=a.prototype;b.getStreamHandler=function(){return this.$1};b.cancel=function(){};b.amendFireAndForget=function(a){};b.isAlive=function(){return!1};b.getStatus=function(){return null};b.getStreamId=function(){return 0};return a}();e.exports=a}),null);
__d("BladeRunnerStreamState",["BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=null,this.$3=0,this.$4=!1,this.$5=0,this.$6=!1}var c=a.prototype;c.getRequest=function(){return this.$1};c.isAlive=function(){return!(this.$2==b("BladeRunnerTypes").StreamStatus.CLOSED||this.$2==b("BladeRunnerTypes").StreamStatus.REJECTED)};c.getLastStatus=function(){return this.$2};c.setLastStatus=function(a){this.$2=a};c.onError=function(){this.$3+=1};c.getErrorCount=function(){return this.$3};c.resetErrors=function(){this.$3=0};c.getRetryRequestScheduled=function(){return this.$6};c.setRetryRequestScheduled=function(a){this.$6=a};c.witnessFrame=function(a){__p&&__p();switch(a.type){case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:var c=a.getStatusUpdate(),d=!0;switch(c.status){case b("BladeRunnerTypes").StreamStatus.ACCEPTED:d=!this.$4;this.$4||(this.$4=!0);break;case b("BladeRunnerTypes").StreamStatus.STARTED:d=this.getLastStatus()!=b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.PAUSED:d=this.getLastStatus()==b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.CLOSED:case b("BladeRunnerTypes").StreamStatus.REJECTED:default:d=!0}this.setLastStatus(c.status);return d;case b("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:this.$7(a.getRewriteRequest());return!1;default:return!0}};c.setRetriesAllowed=function(a){this.$5=a};c.getRetriesAllowed=function(){return this.$5};c.$7=function(a){if(a.patchExtraHeader!=null)return;a.temporary!=null||a.temporary==!0||(a.newBody!=null&&(this.$1.payload=a.newBody),a.newExtraHeader!=null&&(this.$1.extraHeader=a.newExtraHeader,this.$1.headers=JSON.parse(a.newExtraHeader)),a.killBody!=null&&a.killBody==!0&&(this.$1.payload=null))};return a}();e.exports=a}),null);
__d("BladeRunnerSocketStream",["BladeRunnerStream","BladeRunnerStreamState","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();var g=4;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e){c=a.call(this,c)||this;c.$BladeRunnerSocketStream1=e;c.$BladeRunnerSocketStream2=new(b("BladeRunnerStreamState"))(d);c.$BladeRunnerSocketStream2.setRetriesAllowed(g);return c}var d=c.prototype;d.send=function(){this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2,this.getStreamHandler())};d.amendFireAndForget=function(a){this.isAlive()&&this.$BladeRunnerSocketStream1.sendAmendment(this.$BladeRunnerSocketStream2.getRequest().streamId,a)};d.cancel=function(){this.isAlive()&&(this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest().streamId),this.$BladeRunnerSocketStream2.setLastStatus(b("BladeRunnerTypes").StreamStatus.CLOSED))};d.isAlive=function(){return this.$BladeRunnerSocketStream2.isAlive()};d.getStatus=function(){return this.$BladeRunnerSocketStream2.getLastStatus()};d.getStreamId=function(){return this.$BladeRunnerSocketStream2.getRequest().streamId};return c}(b("BladeRunnerStream"));e.exports=a}),null);
__d("BladeRunnerClient",["Base64","BladeRunnerConfig","BladeRunnerLogger","BladeRunnerSocket","BladeRunnerSocketStream","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a!=null?a:b("BladeRunnerSocket").get()}var c=a.prototype;c.requestStream=function(a,c,d){var e=new(b("BladeRunnerTypesInternal").GatewayStreamRequest)();e.streamId=this.$1.getNextStreamId();e.requestType=b("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;e.headers=b("BladeRunnerConfig").patchRequestHeaders(a);e.extraHeader=JSON.stringify(e.headers);e.payload=c!=null?b("Base64").encode(c):null;a=new(b("BladeRunnerSocketStream"))(d,e,this.$1);a.send();return a};c.logInfo=function(a){b("BladeRunnerLogger").info(a)};c.bumpCounter=function(a){b("BladeRunnerLogger").bumpCounter(a)};return a}();e.exports=a}),null);
__d("MqttLongPollingHookCollection",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1=new Set()}var b=a.prototype;b.addHook=function(a){this.$1.add(a)};b.removeHook=function(a){this.$1["delete"](a)};b.onPollRequestSent=function(){this.$1.forEach(function(a){a.onPollRequestSent()})};b.onPollRequestSuccess=function(){this.$1.forEach(function(a){a.onPollRequestSuccess()})};b.onPollResponse=function(a){this.$1.forEach(function(b){b.onPollResponse(a)})};b.onPollRequestFailed=function(a){this.$1.forEach(function(b){b.onPollRequestFailed(a)})};return a}();e.exports=a}),null);
__d("MqttLongPollingClient",["MqttLogger","XHRRequest","getCrossOriginTransport","paho-mqtt"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("paho-mqtt").Decoder,h=60*1e3;a=function(){__p&&__p();function a(a,c,d,e){this.$2=a,this.$3=b("MqttLogger").getInstance(),this.$1="Ready",this.$4=c,this.$5=d,this.$6=e,this.$7=null}var c=a.prototype;c.run=function(){this.$8(this.$4)};c.abort=function(){this.$7!=null&&this.$7.abort("Disconnected")};c.$9=function(a,b){if(this.$1===a)return;this.$1=a;a=="Error"&&b!=null&&this.$6(b)};c.$10=function(a){__p&&__p();if(this.$1!="RequestSend")return;if(!a){this.$11("EmptyResponse",null);return}this.$9("ResponseReceived");a=g.decode(a);a=a.filter(function(a){return a.payloadMessage}).map(function(a){return a.payloadMessage});this.$5(a)};c.$11=function(a,b){b=b!=null?b.message:"null";this.$3.debugTrace("LongPollingClient Error","Poll failed with error:"+a+", errorMsg:"+b);this.$9("Error",a)};c.$8=function(a){__p&&__p();var c=this;if(this.$1!="Ready"||this.$7)return;this.$7=new(b("XHRRequest"))(this.$2).setResponseType("arraybuffer").setRawData(a).setTransportBuilder(b("getCrossOriginTransport").withCredentials).setResponseHandler(function(a){return c.$10(a)}).setNetworkFailureHandler(function(a){c.$11("Network",a)}).setErrorHandler(function(a){c.$11("Error",a)}).setAbortHandler(function(a){c.$11("Abort",null)}).setTimeoutHandler(function(){c.$11("Timeout",null)}).setTimeout(h).send();this.$9("RequestSend")};return a}();e.exports=a}),null);
__d("MqttLongPollingRunner",["MqttLogger","MqttLongPollingClient","MqttLongPollingHookCollection","Random","WebSocketAvailability","exponentialBackoff","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("WebSocketAvailability").getWSAvailability,h=b("WebSocketAvailability").WSAvailabilities,i=new Set(["/t_ms","/messenger_sync_get_diffs","/messenger_sync_create_queue"]);a=function(){__p&&__p();function a(a,c,d,e,f,h){__p&&__p();var j=this;this.$15=function(){__p&&__p();if(!j.$17())return;var a=j.$8(),c=j.$9();a=a.filter(function(a){return i.has(a)});c=c.filter(function(a){return i.has(a.topic)});var d=Math.floor(b("Random").random()*Number.MAX_SAFE_INTEGER);d=j.$6.gen(d,a,c);if(a.length==0&&c.length==0){j.$4.debugTrace("LongPollingRunner","Poll skipped, nothing to do");b("setTimeoutAcrossTransitions")(function(){j.$15()},1e3);return}j.$12=new(b("MqttLongPollingClient"))(j.$5,d,function(a){return j.$18(a)},function(a){return j.$19(a)});j.$12.run();j.$14.onPollRequestSent();d=a.join(",");a=c.map(function(a){return a.topic}).join(",");j.$4.debugTrace("LongPollingRunner","Making a poll request to "+j.$5+". SubscribedTopics:"+d+". Publishes:"+a)};this.$5=a;this.$6=c;this.$1=!1;this.$2=0;this.$3=g();this.$4=b("MqttLogger").getInstance();this.$7=d;this.$8=e;this.$9=f;this.$10=h;this.$11=!1;this.$12=null;this.$14=new(b("MqttLongPollingHookCollection"))();this.$13=new(b("exponentialBackoff"))(this.$15,this)}var c=a.prototype;c.addHook=function(a){this.$14.addHook(a)};c.start=function(){this.$15()};c.onConnectAttempt=function(){};c.onConnectFailure=function(){this.$2++,this.$15()};c.onConnected=function(){};c.onConnectSuccess=function(){this.$1=!0};c.onConnectionLost=function(){};c.onSubscribe=function(a){};c.onUnsubscribe=function(a){};c.onPublish=function(a){};c.onMessage=function(a){};c.$16=function(){__p&&__p();var a=b("gkx")("865724"),c=b("gkx")("865725");this.$4.debugTrace("LongPollingRunner","_shouldPoll? forcedPoll:"+String(a)+" enabled:"+String(c)+" wsAvailability:"+String(this.$3)+" hasSuccess:"+String(this.$1)+" failureCount:"+this.$2);if(a)return!0;if(!c)return!1;if(this.$3===h.NotAvailable)return!0;if(this.$1)return!1;if(this.$3===h.LikelyNotAvailable&&this.$2>=2)return!0;return this.$2>=5?!0:!1};c.$17=function(){if(this.$12!=null)return!1;var a=this.$16();!this.$11&&a&&(this.$4.bumpCounter("polling_kickin"),this.$11=!0);this.$11&&!a&&(this.$4.bumpCounter("polling_stopped"),this.$11=!1);return a};c.$18=function(a){__p&&__p();var b=a.map(function(a){return a.destinationName}).join(",");this.$4.debugTrace("LongPollingRunner","Poll request success, message received:"+b);this.$14.onPollRequestSuccess();for(var b=a,a=Array.isArray(b),c=0,b=a?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(a){if(c>=b.length)break;d=b[c++]}else{c=b.next();if(c.done)break;d=c.value}d=d;this.$14.onPollResponse(d.destinationName);this.$7(d.destinationName,d.payloadString)}this.$12=null;this.$13.reset();this.$15()};c.$19=function(a){this.$14.onPollRequestFailed(a),this.$12=null,this.$13()};return a}();e.exports=a}),null);