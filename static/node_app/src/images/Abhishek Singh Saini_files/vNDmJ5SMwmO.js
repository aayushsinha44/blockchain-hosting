if (self.CavalryLogger) { CavalryLogger.start_js(["kT0PV"]); }

__d("FantaDropdownMenuLeaveConversation",["ix","cx","fbt","Bootloader","Dialog","FantaDropdownMenuWebDriverTestIDs","FantaTabActions","Image.react","MercuryLogMessageType","MercuryMessageObject","MercurySourceType","MercuryMessageActions","MessengerAdminGroupUtils","MessengerState.bs","React","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("MercuryMessageObject").get(),k=b("MercuryMessageActions").get();function l(a){a=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=a?i._("Leave Chat and Group"):i._("Leave group");return b("React").createElement("div",{className:"_6pdg","data-testid":b("FantaDropdownMenuWebDriverTestIDs").LEAVE_CONVERSATION},b("React").createElement(b("Image.react"),{className:"_6ng3",src:g("637999")}),b("React").createElement("span",{className:"_6ng4"},a))}function m(a,c,d,e){__p&&__p();return function(){var f=[];f.push({name:"unsubscribe",label:i._("Leave Conversation"),handler:function(){return n(c,d)}});f.push(b("Dialog").CANCEL);var g,h=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a),j=(a==null?void 0:a.admins)&&(a==null?void 0:a.admins[d])!==void 0;h&&j?g=i._("Leaving this group will remove you as an owner and allow other members to manage the chat thread. You will no longer be able to send and receive messages. You will also be removed from the group."):h?g=i._("You will stop receiving messages from this conversation and people will see that you left. You will also be removed from the group."):j?g=i._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send and receive messages."):g=i._("You will stop receiving messages from this conversation and people will see that you left.");j=h?i._("Leave Group and Chat?"):i._("Leave Conversation?");new(b("Dialog"))().setTitle(j).setBody(g).setButtons(f).show();o(e)}}function n(a,c){if(!b("MessengerState.bs").isEmptyLocalThread(c,a)){c=j.constructLogMessageObject(b("MercurySourceType").CHAT_WEB,a,b("MercuryLogMessageType").UNSUBSCRIBE,{removed_participants:[c]});k.send(c)}b("FantaTabActions").closeTab(a);return!0}function o(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.LEAVE_CONVERSATION,a)},"FantaDropdownMenuLeaveConversation")}function a(a,c){var d=[];d.push({name:"unsubscribe",label:i._("Leave Conversation"),handler:function(){return n(a,c)}});d.push(b("Dialog").CANCEL);var e=i._("You will stop receiving messages from this conversation and people will see that you left."),f=i._("Leave Conversation?");new(b("Dialog"))().setTitle(f).setBody(e).setButtons(d).show()}function c(a,b,c,d,e){return a===!0?{type:"item",label:l(b),onClick:m(b,c,d,e)}:null}e.exports={getMenuItem:c,showLeaveDialog:a}}),null);
__d("WebMessengerConfirmBlockDialog",["fbt","React","SimpleXUIDialog","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){"use strict";a={show:function(a){a=a&&a.length>0?g._("You have blocked {name}",[g._param("name",a)]):g._("You have blocked the sender");var c=g._("You can access messages you've blocked by going to the Filtered Messages list."),d=b("React").createElement("div",null,b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("OK"),use:"confirm"}));b("SimpleXUIDialog").showEx(c,a,d)}};e.exports=a}),null);
__d("WebMessengerDeclineMRDialog",["fbt","FantaDropdownMenuLeaveConversation","MessengerBlockEntryPoint","MessengerParticipants.bs","React","SimpleXUIDialog","MercuryThreadActions","XUIDialogButton.react","XUIDialogCancelButton.react","MercuryIDs","MessengerMessageRequestsTypedLogger","WebMessengerConfirmBlockDialog","FantaTabActions","MessagingTag","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MercuryThreadActions").get();a={show:function(a,c,d,e){__p&&__p();var f=function(a){b("WebMessengerConfirmBlockDialog").show(a);a=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,b("CurrentUser").getID());b("FantaTabActions").closeTab(c);h.changeFolder(c,b("MessagingTag").OTHER);new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_block_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(a).setEntryPoint(null).log()};a=e?b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("Leave Group"),use:"confirm",onClick:function(a){b("FantaDropdownMenuLeaveConversation").showLeaveDialog(c,b("CurrentUser").getID())}}):b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("Block"),use:"confirm",onClick:function(){h.blockMessages(c,b("MessengerBlockEntryPoint").DECLINE_MR,f)}});var i=b("CurrentUser").isWorkUser(),j=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromFromThreadID(c));j=j==null?void 0:j.short_name;var k=!e&&!i&&j?g._("Don't want to hear from {name}?",[g._param("name",j)]):g._("Decline Conversation");e?e=g._("Would you like to leave the group? Group members will see that you've left."):j?e=i?g._("Message request will be declined. Would you like to block {name} on Workplace Chat or delete these messages?",[g._param("name",j)]):g._("You can permanently delete the conversation, block {name} from sending you messages or tell us if something's wrong. We won't tell {name} you've taken these actions.",[g._param("name",j)]):e=g._({"Workplace chat":"Message request will be declined. Would you like to block this person on Workplace chat or delete these messages?","Messenger":"Message request will be declined. Would you like to block this person on Messenger or delete these messages?"},[g._enum(i?"Workplace chat":"Messenger",{"Workplace chat":"Workplace chat",Messenger:"Messenger"})]);j=b("CurrentUser").getID();var l=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,j);i=function(a){a==="hide"&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(l).setEntryPoint(null).log()};j=b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),null),b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:g._("Delete"),use:"confirm",onClick:function(){h["delete"](c),d&&d(),new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(l).setEntryPoint(null).log()}}),a);b("SimpleXUIDialog").showEx(e,k,j,i,{})}};e.exports=a}),null);
__d("MercuryJewelCountControl",["Arbiter","CurrentUser","MercuryDispatcher","MercuryThreadInformer","MessengerState.bs","UserActivity"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this,d=b("MercuryDispatcher").get(),e=b("MercuryThreadInformer").get();this.render();d.subscribe("model-update-completed",function(a,b){c.$2(!1)});e.subscribe("unseen-updated",function(){return c.render()});e.subscribe("unread-updated",function(){return c.render()});this.$1=a;this.$1.subscribe("marked-seen",function(){c.$2(!0)})}var c=a.prototype;c.render=function(){var a=b("MessengerState.bs").getUnseenUnreadCountRaw(b("CurrentUser").getID());b("Arbiter").inform("jewel/count-updated",{jewel:"mercurymessages",count:a},"state")};c.$2=function(a){(a||this.$1.isOpen()&&b("UserActivity").isActive())&&b("MessengerState.bs").markAsSeen(b("CurrentUser").getID())};return a}();e.exports=a}),null);
__d("MercuryPresenceIndicator.react",["cx","fbt","Arbiter","AvailableListConstants","MercuryIDs","PresenceStatus","React","SubscriptionsHandler"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){if(!b("MercuryIDs").isCanonical(d.props.threadID))return null;else{var a=b("MercuryIDs").getUserIDFromThreadID(d.props.threadID);return b("PresenceStatus").get(a)}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,function(){return a.forceUpdate()}))};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.render=function(){var a=this.$2();return b("React").createElement("span",{className:this.$3(a)},b("React").createElement("span",{className:"accessible_elem"},this.$4(a)))};d.$3=function(a){return"presenceIndicator"+(b("MercuryIDs").isGroupChat(this.props.threadID)?" groupThread":"")+(a==b("AvailableListConstants").ACTIVE?" presenceActive":"")};d.$4=function(a){switch(a){case b("AvailableListConstants").ACTIVE:return h._("Active");default:return null}};return c}(b("React").PureComponent);c.propTypes={threadID:a.string.isRequired};e.exports=c}),null);
__d("MercurySeenIndicator.react",["cx","MercuryIDs","MessengerReadReceipt.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer);a=this.$1(a);return b("React").createElement("span",{className:"_3jy5"+(a?" repliedLast":"")+(a&&this.$2()?" seenByAll":"")})};d.$1=function(a){return a===this.props.thread.snippet_sender};d.$2=function(){return b("MessengerReadReceipt.bs").wasSeenByAll(this.props.readReceipts,{thread_id:this.props.thread.thread_id,author:this.props.thread.snippet_sender,timestamp:this.props.thread.timestamp})};return c}(b("React").Component);c.propTypes={thread:a.object.isRequired,viewer:a.string.isRequired};e.exports=c}),null);
__d("MercuryThreadPermalink.react",["Link.react","React","WebMessengerThreadPermalinks"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={permalinkURI:"#"},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1(this.props)};d.UNSAFE_componentWillReceiveProps=function(a){(a.threadID!==this.props.threadID||a.folder!==this.props.folder)&&this.$1(a)};d.render=function(){return b("React").createElement(b("Link.react"),{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:"button"},this.props.children)};d.$1=function(a){var c=this;this.setState({permalinkURI:"#"});b("WebMessengerThreadPermalinks").getThreadURI(a.threadID,function(a){return c.setState({permalinkURI:a})},a.folder)};return c}(b("React").PureComponent);c.propTypes={className:a.string,children:a.any,threadID:a.string.isRequired,viewer:a.string.isRequired,folder:a.string,onClick:a.func};e.exports=c}),null);
__d("MercuryThreadReadToggle.react",["fbt","invariant","MercuryThreadActions","React","ReadToggle.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a&&(a.preventDefault(),a.stopPropagation());a=b("MercuryThreadActions").getForFBID(d.props.viewer);d.props.unreadCount>0?a.markRead(d.props.threadID):a.markUnread(d.props.threadID)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){this.props.unreadCount>=0||h(0,6253);return b("React").createElement(b("ReadToggle.react"),{isRead:this.props.unreadCount===0,onClick:this.$1,readLabel:g._("Mark as Unread"),unreadLabel:g._("Mark as Read")})};return c}(b("React").PureComponent);c.propTypes={threadID:a.string.isRequired,viewer:a.string.isRequired,unreadCount:a.number.isRequired};e.exports=c}),null);
__d("MessagesJewelInlineThumbnail.react",["cx","MercuryAttachmentType","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.$1();if(a.length===0)return b("React").createElement("span",null);var c=a[0].thumbnail_url;if(!c)return b("React").createElement("span",null);c=b("React").createElement("span",{className:"_56hv"},b("React").createElement("i",{style:{backgroundImage:"url("+c+")"}}));a.length>1&&(c=b("React").createElement("span",null,b("React").createElement("span",{className:"_56hy"}),c));return c};d.$1=function(){var a=this.props.thread;return!a.snippet_attachments?[]:a.snippet_attachments.filter(function(a){return a.attach_type===b("MercuryAttachmentType").PHOTO})};return c}(b("React").Component);c.propTypes={thread:a.object.isRequired};e.exports=c}),null);
__d("MessagesJewelThreadListRow.react",["ix","cx","fbt","Promise","Bootloader","CurrentUser","ErrorBoundary.react","Image.react","ImageBlock.react","ImmutableObject","MercuryIDs","MercuryPresenceIndicator.react","MercurySeenIndicator.react","MercuryThreadActions","MercuryThreadPermalink.react","MercuryThreadReadToggle.react","MercuryThreadSnippet.react","MercuryThreadTimestampReact.bs","MercuryThreadTitleSafe.react","MercuryTimestamp","MessageRequestUtils","MessagesJewelInlineThumbnail.react","MessagingTag","MessengerThreadImageReact.bs","MNAdsMessageRequestUtils","React","RTCCallState","UserAgent","WebMessengerDeclineMRDialog","XUIButton.react","asset","gkx","immutable","promiseDone"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("MercuryThreadTimestampReact.bs").jsComponent,k=b("MessengerThreadImageReact.bs").jsComponent;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$13=function(){b("MercuryThreadActions").get()["delete"](d.props.thread.thread_id)},d.$14=function(){b("MercuryThreadActions").get().archive(d.props.thread.thread_id)},d.$15=function(a){__p&&__p();a.preventDefault();a.stopPropagation();a=window.callWindow&&!window.callWindow.closed&&window.callWindow.focus;if(a)window.callWindow.focus();else{a=d.props.thread;var c=a.rtc_call_data,e=a.thread_fbid;b("Bootloader").loadModules(["FBRTCCore","FBRTCLogger"],function(a,d){d=d.Trigger;a.startGroupCall({conferenceName:"GROUP:"+e,hasVideo:c.call_state===b("RTCCallState").VIDEO_GROUP_CALL,serverInfoData:c.server_info_data,trigger:d.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON})},"MessagesJewelThreadListRow.react")}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.isDoNotDisturb&&b("CurrentUser").isWorkUser()&&b("gkx")("678573")?this.$2():this.$3();a=b("UserAgent").isBrowser("Chrome")&&!b("UserAgent").isPlatform("Windows")?b("React").createElement("div",{className:"author fixemoji"},this.$4(),a):b("React").createElement("div",{className:"author"},b("React").createElement("strong",null,this.$4()),a);a=b("React").createElement(b("ImageBlock.react"),{spacing:"none"},b("React").createElement("div",{className:"_p32"},this.$5()),b("React").createElement("div",{className:"content"},a,b("React").createElement("div",{className:"_1iji"},b("React").createElement("div",{className:"_1ijj"},this.$6(),this.$7()),b("React").createElement("div",null,this.$8())),b("React").createElement("div",{className:"time"},b("MNAdsMessageRequestUtils").isAdsMessageRequest(this.props.thread)?b("MNAdsMessageRequestUtils").renderAdsMessageRequestStatus():this.$9()),this.$10()),b("React").createElement("div",null,b("React").createElement(b("MessagesJewelInlineThumbnail.react"),{thread:this.props.thread}),b("React").createElement("div",{className:"x_div"},this.$11())));return b("React").createElement("li",{className:this.props.thread.unread_count>0?"jewelItemNew":""},b("React").createElement(b("MercuryThreadPermalink.react"),{className:"messagesContent",threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},a))};d.$8=function(){__p&&__p();var a=this;if(!b("MessageRequestUtils").shouldShowThreadlistPendingActions(this.props.thread))return null;var c=this.props.viewer,d=b("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.thread.thread_id,c);return b("React").createElement("div",{className:"_zjy"},b("React").createElement(b("XUIButton.react"),{use:"confirm",onClick:function(c){c.preventDefault(),b("MercuryThreadActions").get().changeFolder(a.props.thread.thread_id,b("MessagingTag").INBOX),b("promiseDone")(a.$12(),function(c){c.setAction("message_requests_accept_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a.props.thread.thread_id)).setThreadKey(d).log()})},label:i._("Accept")}),b("React").createElement(b("XUIButton.react"),{onClick:function(c){c.preventDefault();var e=b("MercuryIDs").isGroupChat(a.props.thread.thread_id);b("WebMessengerDeclineMRDialog").show(a.props.thread.folder,a.props.thread.thread_id,a.$13,e);c.stopPropagation();b("promiseDone")(a.$12(),function(c){c.setAction("message_requests_decline_attempt").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a.props.thread.thread_id)).setThreadKey(d).log()})},use:"default",label:i._("Decline")}))};d.$2=function(){return b("React").createElement(b("Image.react"),{className:"_3-9a",src:g("550341")})};d.$3=function(){return!this.props.showPresence?null:b("React").createElement(b("MercuryPresenceIndicator.react"),{threadID:this.props.thread.thread_id})};d.$5=function(a){return b("React").createElement(k,{size:48,thread:this.props.thread,useBackground:!0,viewer:this.props.viewer,participants:this.props.participants})};d.$4=function(){return b("React").createElement(b("MercuryThreadTitleSafe.react"),{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:!0})};d.$7=function(){return b("React").createElement(b("MercuryThreadSnippet.react"),{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer})};d.$9=function(){return b("React").createElement(j,{time:this.props.thread.timestamp,title:b("MercuryTimestamp").getAbsoluteTimestamp(this.props.thread.timestamp),text:b("MercuryTimestamp").getRelativeTimestamp(this.props.thread.timestamp)})};d.$6=function(){return b("React").createElement(b("MercurySeenIndicator.react"),{thread:this.props.thread,viewer:this.props.viewer,readReceipts:this.props.readReceipts})};d.$11=function(){return b("React").createElement(b("MercuryThreadReadToggle.react"),{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count})};d.$10=function(){if(!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state===b("RTCCallState").NO_ONGOING_CALL)return null;var a=window.callWindow&&!window.callWindow.closed?i._("Return to Call"):i._("Join Call");return b("React").createElement(b("XUIButton.react"),{className:"_4oci",label:a,onClick:this.$15})};d.$12=function(){this.$1||(this.$1=new(b("Promise"))(function(a,c){b("Bootloader").loadModules(["MessengerMessageRequestsTypedLogger"],function(b){b=new b();b.setSurface("inbox").setFolderType("pending").setEntryPoint("inbox_banner");a(b)},"MessagesJewelThreadListRow.react")}));return this.$1};return c}(b("React").PureComponent);c.propTypes={onClick:a.func,participants:a.instanceOf(b("immutable").Map).isRequired,showPresence:a.bool,isDoNotDisturb:a.bool,thread:a.instanceOf(b("ImmutableObject")).isRequired,viewer:a.string.isRequired};e.exports=c}),null);
__d("MessagesJewelThreadlistRowContainer.react",["ChatOpenTab","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","ImmutableObject","MercuryIDs","MercuryThreadlistRowContainer.react","MessagesJewelThreadListRow.react","MessagingTag","MessengerDiscoveryEntryPoint","MessengerMessageRequestsTypedLogger","React","ReactComponentWithPureRenderMixin","TimeSlice"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MessagesJewelThreadlistRowContainer",mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{folder:a.string,readReceipts:a.any,thread:a.instanceOf(b("ImmutableObject")).isRequired,viewer:a.string.isRequired,handleChatTabOpen:a.func},render:function(){return b("React").createElement(b("MercuryThreadlistRowContainer.react"),{ChildClass:b("MessagesJewelThreadListRow.react"),onClick:this._handleClick,showPresence:b("ChatOpenTab").canOpenTab(),readReceipts:this.props.readReceipts,thread:this.props.thread,viewer:this.props.viewer})},_handleClick:function(a){__p&&__p();if(a.button===1||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;if(!b("ChatOpenTab").canOpenTab())return;this.props.handleChatTabOpen&&b("TimeSlice").guard(this.props.handleChatTabOpen,"Jewelupdate after Chat tab open",{propagationType:b("TimeSlice").PropagationType.ORPHAN})();a.preventDefault();a=this.props.thread.thread_id;var c=b("CurrentUser").getID();c=b("MercuryIDs").getThreadKeyfromThreadIDUserID(a,c);b("FantaTabActions").openTab(a,[b("MessengerDiscoveryEntryPoint").FB_HEADER_DOCK_JEWEL_THREAD]);b("ChatOpenTabEventLogger").logClickOpen("jewel",a);var d;switch(this.props.folder){case"inbox":d="inbox";break;case"pending":d="pending";break;case"other":d="other";break}this.props.thread.folder!==b("MessagingTag").INBOX&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_thread_open").setThreadID(b("MercuryIDs").getUserIDFromThreadID(a)).setSurface(d).setFolderType(this.props.thread.folder).setThreadKey(c).log()}});e.exports=c}),null);
__d("MessengerMessageRequestsInfoReact.re",["MessengerMessageRequestsInfoReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f){a=b("ReasonReact.bs").wrapReasonForJs(b("MessengerMessageRequestsInfoReact.bs").component,function(a){return b("MessengerMessageRequestsInfoReact.bs").make(a.children)});f.component=a;f["default"]=a}),null);
__d("MessagesJewelThreadList.react",["cx","fbt","Arbiter","ChatConfig","CurrentUser","EventProfiler","ImmutableObject","Link.react","MessagesJewelThreadlistRowContainer.react","MessagingTag","MessengerMessageRequestsInfoReact.re","MessengerState.bs","React","ScrollableArea.react","SubscriptionsHandler","TimeSlice","XUISpinner.react","debounce","getViewportDimensions","gkx","requestIdleCallback","requireWeak","throttle"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerMessageRequestsInfoReact.re").component,j=160,k=60,l=10;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=new(b("SubscriptionsHandler"))(),d.$4=function(){if(d.props.isLoaded||!d.$5)return;var a=d.$5.getArea();if(!a)return;a.getScrollTop()+a.getClientHeight()>=a.getScrollHeight()-1&&(d.props.onLoadMoreRequest&&d.props.onLoadMoreRequest())},d.$10=function(a){a.preventDefault(),d.props.onLoadMoreRequest&&d.props.onLoadMoreRequest()},d.$9=function(a){d.props.onFilteredRequestsClick&&d.props.onFilteredRequestsClick(a)},d.state={height:d.$3(),hasQP:!1},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){__p&&__p();var a=this;this.$2=Event.listen(window,"resize",b("debounce")(function(){a.setState({height:a.$3()})}));b("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],!0,"click");var c=b("ChatConfig").get("message_jewel_promotion_data");c&&this.setState({hasQP:!0},function(){a.setState({height:a.$3()})});this.$1.addSubscriptions(b("Arbiter").subscribeOnce("hideMessageJewelQP",function(){a.setState({hasQP:!1},function(){a.setState({height:a.$3()})})}));c=function(){b("requestIdleCallback")(function(){b("requireWeak")("FantaTabsEagerBootloader",function(a){return a.bootload()})})};b("TimeSlice").guard(c,"JewelOpen fanta eagerbootloader",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};d.componentDidUpdate=function(a){a.threads.length===0&&this.props.threads.length!==0&&(this.props.onRenderThreads&&this.props.onRenderThreads()),b("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],!0,"click")};d.componentWillUnmount=function(){this.$2.remove(),this.$1.release()};d.render=function(){var a=this;return b("React").createElement(b("MessengerState.bs").jsComponent,{fbid:b("CurrentUser").getID()},function(c){return b("React").createElement(b("ScrollableArea.react"),{className:"_2q3u",height:a.state.height,onScroll:b("throttle")(a.$4,50),ref:function(b){return a.$5=b}},b("React").createElement("ul",{className:"jewelContent"},a.$6(),a.props.threads.map(function(d){return a.$7(d,b("MessengerState.bs").pendingFolderUnseenCount(c),b("MessengerState.bs").readReceiptsPerThread(c))})),a.$8())})};d.$7=function(a,c,d){return b("React").createElement(b("MessagesJewelThreadlistRowContainer.react"),{folder:this.props.folder,key:a.thread_id,thread:a,viewer:this.props.viewer,handleChatTabOpen:this.props.handleChatTabOpen,readReceipts:d})};d.$3=function(){var a=(this.props.maxInitialThreadCount||l)*k-(this.state&&this.state.hasQP?260:0);return Math.min(a,b("getViewportDimensions")().height-j)};d.$8=function(){if(this.props.isLoaded)return this.props.folder===b("MessagingTag").PENDING&&!(b("CurrentUser").isWorkUser()&&b("gkx")("762398"))?b("React").createElement("div",{className:"_16bh _16bi"},b("React").createElement(b("Link.react"),{onClick:this.$9},h._("See filtered messages"))):null;return this.props.isLoading?b("React").createElement(b("XUISpinner.react"),{className:"jewelLoading"}):b("React").createElement("div",{className:"_v8y"},b("React").createElement(b("Link.react"),{href:"#",onClick:this.$10},h._("Show Older")))};d.$6=function(){return!this.props.jewelRequestsUI||this.props.folder!==b("MessagingTag").PENDING?null:b("React").createElement("li",{className:"_16bh _2ph_"},b("React").createElement(i,null))};return c}(b("React").Component);c.propTypes={folder:a.string,isLoaded:a.bool,isLoading:a.bool,maxInitialThreadCount:a.number,jewelRequestsUI:a.bool,onFilteredRequestsClick:a.func,onLoadMoreRequest:a.func,onMessageRequestsClick:a.func,onRenderThreads:a.func,threads:a.arrayOf(a.oneOfType([a.instanceOf(b("ImmutableObject")),a.arrayOf(a.instanceOf(b("ImmutableObject")))])).isRequired,viewer:a.string.isRequired};e.exports=c}),null);
__d("MercuryJewelThreadlistControl",["csx","cx","fbt","ArbiterMixin","Bootloader","CSS","CurrentUser","DOM","Event","JSLogger","MercuryFilters.bs","MercuryServerRequests","MercuryThreadlistConstants","MercuryThreadlistContainer.react","MessagesJewelThreadList.react","MessagingTag","MessengerURIConstants","React","ReactDOM","gkx","mixin"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=b("JSLogger").create("mercury_jewel"),k=b("MessagingTag").PENDING,l="back_to_inbox",m=i._("See All in Messenger"),n=i._("See All in Workplace Chat");a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this)||this;d.$JewelThreadlistControl13=function(a){a.preventDefault(),d.$JewelThreadlistControl9(b("MessagingTag").PENDING,b("MercuryFilters.bs").all)};d.$JewelThreadlistControl14=function(a){a.preventDefault(),d.$JewelThreadlistControl9(b("MessagingTag").OTHER,b("MercuryFilters.bs").all)};c=c.getFlyout();d.$JewelThreadlistControl1=[];d.$JewelThreadlistControl2=b("DOM").find(c,"._3v_l");d.$JewelThreadlistControl3=b("MessagingTag").INBOX;d.$JewelThreadlistControl4=b("MercuryFilters.bs").all;d.$JewelThreadlistControl5=b("CurrentUser").getID();d.$JewelThreadlistControl6={};d.$JewelThreadlistControl7={};d.$JewelThreadlistControl6[b("MessagingTag").INBOX]=b("DOM").find(c,"._1sde");d.$JewelThreadlistControl7[b("MessagingTag").INBOX]=b("DOM").find(c,"._1sdg");d.$JewelThreadlistControl8=b("MercuryServerRequests").getForFBID(d.$JewelThreadlistControl5);b("Event").listen(d.$JewelThreadlistControl6[b("MessagingTag").INBOX],"click",function(){return d.$JewelThreadlistControl9(b("MessagingTag").INBOX,b("MercuryFilters.bs").all)});!b("gkx")("678596")?(d.$JewelThreadlistControl6[k]=b("DOM").find(c,"._1sdf"),d.$JewelThreadlistControl7[k]=b("DOM").find(c,"._1sdh"),b("Event").listen(d.$JewelThreadlistControl6[k],"click",function(){return d.$JewelThreadlistControl9(k,b("MercuryFilters.bs").all)})):(d.$JewelThreadlistControl6[l]=b("DOM").find(c,"._34zq"),b("Event").listen(d.$JewelThreadlistControl6[l],"click",function(){return d.$JewelThreadlistControl9(b("MessagingTag").INBOX,b("MercuryFilters.bs").all)}));d.$JewelThreadlistControl10=b("DOM").find(c,"._1c1m");d.$JewelThreadlistControl11=b("DOM").find(c,"._4djt");b("Event").listen(d.$JewelThreadlistControl10,"click",function(a){d.$JewelThreadlistControl12(),a.kill()});d.render();j.bump("opened_threadlist_"+d.$JewelThreadlistControl3);return d}var d=c.prototype;d.render=function(){var a=this;b("Bootloader").loadModules(["MessengerState.bs","MercuryJewelUnreadCount.bs"],function(c,d){b("ReactDOM").render(b("React").createElement(c.jsComponent,{fbid:a.$JewelThreadlistControl5},function(d){return b("React").createElement(b("MercuryThreadlistContainer.react"),{ChildClass:b("MessagesJewelThreadList.react"),folder:a.$JewelThreadlistControl3,filter:a.$JewelThreadlistControl4,jewelRequestsUI:!b("gkx")("678596"),viewer:a.$JewelThreadlistControl5,onMessageRequestsClick:a.$JewelThreadlistControl13,onFilteredRequestsClick:a.$JewelThreadlistControl14,threadIDs:a.$JewelThreadlistControl1,threads:c.threads(d),threadlistOrderMap:c.threadlistOrderMap(d)})}),a.$JewelThreadlistControl2);var e=a.$JewelThreadlistControl7[b("MessagingTag").INBOX],f=a.$JewelThreadlistControl7[k];e&&b("ReactDOM").render(b("React").createElement(d.jsComponent,{viewer:a.$JewelThreadlistControl5,folder:b("MessagingTag").INBOX}),e);f&&b("ReactDOM").render(b("React").createElement(d.jsComponent,{viewer:a.$JewelThreadlistControl5,folder:k}),f)},"MercuryJewelThreadlistControl")};d.$JewelThreadlistControl12=function(){this.$JewelThreadlistControl8.markFolderAsRead(this.$JewelThreadlistControl3)};d.$JewelThreadlistControl9=function(a,c){__p&&__p();this.$JewelThreadlistControl1=[];if(this.$JewelThreadlistControl3!==a||this.$JewelThreadlistControl4!==c){var d=this.$JewelThreadlistControl3,e=a===b("MessagingTag").INBOX,f=a;j.bump("opened_threadlist_"+a);this.$JewelThreadlistControl6[f]&&b("CSS").addClass(this.$JewelThreadlistControl6[f],"_1sdd");this.$JewelThreadlistControl6[d]&&b("CSS").removeClass(this.$JewelThreadlistControl6[d],"_1sdd");f=b("CurrentUser").isWorkUser()?n:m;this.$JewelThreadlistControl3=a;this.$JewelThreadlistControl4=c;e?(this.$JewelThreadlistControl11.href=b("MessengerURIConstants").FACEBOOK_PREFIX,this.$JewelThreadlistControl11.text=f,this.$JewelThreadlistControl5=b("CurrentUser").getID()):a==k&&(this.$JewelThreadlistControl11.href=b("MessengerURIConstants").FACEBOOK_PREFIX+b("MessengerURIConstants").MESSAGE_REQUESTS_PATH,this.$JewelThreadlistControl11.text=f,this.$JewelThreadlistControl5=b("CurrentUser").getID());b("gkx")("678596")&&(b("CSS").conditionShow(this.$JewelThreadlistControl6[b("MessagingTag").INBOX],e),b("CSS").conditionShow(this.$JewelThreadlistControl6[l],!e));this.render()}};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("MercuryJewel",["Arbiter","EventProfiler","MercuryDispatcher","MercuryJewelCountControl","MercuryServerPayloadPreprocessor","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=!1,i=null;a=function(){"use strict";__p&&__p();function a(a,c){var d=this;b("gkx")("802350")?b("MercuryDispatcher").get().handlePreprocessedUpdate(c):b("MercuryServerPayloadPreprocessor").get().handleUpdate(c);this.$1=new(b("MercuryJewelCountControl"))(a);a.subscribeOnce("opened",function(){d.$2(a)});a.subscribeOnce("user-open",function(){d.$3(a)});a.subscribe("updated",function(b,c){c&&c.count>0&&d.$2(a)})}var c=a.prototype;c.$2=function(a){var c=this;this.$3(a);g||(g=!0,a.isOpen()||(i=b("EventProfiler").notifyRunningEagerInteraction(["Messages_Jewel_Button"],"click")),d(["MercuryJewelThreadlistControl"],function(b){c.$4=new b(a)}),b("Arbiter").inform("mercury-jewel/opened",null,"state"))};c.$3=function(a){!h&&a.isOpen()&&(h=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstMercuryJewelOpen"),i&&i())};return a}();e.exports=a}),null);
__d("MercuryJewelUnreadCount.bs",["fbt","React","ReasonReact.bs","bs_js_primitive","MessengerState.bs","MercuryThreadlistConstants"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").statelessComponent("MercuryJewelUnreadCount");function i(a,c,d){__p&&__p();return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){__p&&__p();return b("React").createElement(b("MessengerState.bs").Provider[0],{fbid:a,children:function(a){var d=a[16][c];d=d!==void 0?d.size:b("bs_js_primitive").undefined_to_opt(a[17][c]);if(d!==void 0){a=d;if(a===0)return null;else return g._("({unread_count})",[g._param("unread_count",String(a>b("MercuryThreadlistConstants").MAX_UNREAD_COUNT?b("MercuryThreadlistConstants").MAX_UNREAD_COUNT:a))])}else return null}})},h[9],h[10],h[11],h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return i(a.viewer,a.folder,[])});f.component=h;f.make=i;f.jsComponent=a}),null);