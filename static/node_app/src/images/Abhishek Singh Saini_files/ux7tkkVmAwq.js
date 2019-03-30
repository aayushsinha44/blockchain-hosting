if (self.CavalryLogger) { CavalryLogger.start_js(["yGjdu"]); }

__d("InstantGameContextType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK",MATCH:"MATCH"})}),null);
__d("MNPlatformAttributionTags",[],(function(a,b,c,d,e,f){e.exports={ATTRIBUTION_TAGS_PREFIX:"bnp:trigger:",CUSTOMER_CHAT_PLUGIN:"customer_chat_plugin",MESSENGERDOTCOM:"messengerdotcom",MESSENGER_WEB:"messenger_web",MESSENGER_WEB_SEARCH:"messenger_web_search",M_DOT_ME:"m_dot_me"}}),null);
__d("MessengerAttributionTagsStore",["MessengerActions","MessengerStore"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$MessengerAttributionTagsStore1={messagingTags:null,threadID:null};return b}var d=c.prototype;d.getState=function(){return this.$MessengerAttributionTagsStore1};d.__onDispatch=function(a){switch(a.type){case b("MessengerActions").Types.UPDATE_THREAD_TAG:this.$MessengerAttributionTagsStore1.messagingTags=a.messagingTags;this.$MessengerAttributionTagsStore1.threadID=a.threadID;this.emitChange();break;case b("MessengerActions").Types.SELECT_THREAD:this.$MessengerAttributionTagsStore1.messagingTags=null;this.$MessengerAttributionTagsStore1.threadID=null;this.emitChange();break}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("MNPlatformTagsDataManager",["MessagingSourceEnum","MessengerActions","MessengerAttributionTagsStore","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MNPlatformAttributionTags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={getTags:function(a){__p&&__p();a===void 0&&(a=null);var c=null,d=null;switch(a){case b("MessagingSourceEnum").PAGES_MESSAGE_SHORTLINK:c=b("MNPlatformAttributionTags").M_DOT_ME;break;case b("MessagingSourceEnum").MESSENGER_WEB:c=b("MNPlatformAttributionTags").MESSENGER_WEB;break;case b("MessagingSourceEnum").MESSENGER_WEB_SEARCH:c=b("MNPlatformAttributionTags").MESSENGER_WEB_SEARCH;d=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_WEB_SEARCH]);break;case b("MessagingSourceEnum").CUSTOMER_CHAT_PLUGIN:c=b("MNPlatformAttributionTags").CUSTOMER_CHAT_PLUGIN;break;case b("MessagingSourceEnum").PAGE_PLUGIN_MESSAGE:c=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_PAGES_PLUGIN]);break;default:c="";break}a=[c];d!==null&&a.push(d);return a},updateThreadTabAfterSelectThread:function(a,c){a===void 0&&(a=null);c===void 0&&(c=null);a=this.getTags(a);b("MessengerActions").changeThreadTag(a,c)},hasThreadTags:function(a){var c=b("MessengerAttributionTagsStore").getState();return!!(c.messagingTags&&a&&c.threadID&&c.threadID.toString()===a)},getThreadTags:function(){var a=b("MessengerAttributionTagsStore").getState();return a.messagingTags}}}),null);
__d("MessengerSpinnerReact.bs",["cx","ix","fbt","Image.bs","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=h("86853"),k=h("86857"),l=h("86854"),m=b("ReasonReact.bs").statelessComponent("MessengerSpinnerReact");function n(a,c,d,e){__p&&__p();var f=a!==void 0?a:"",g=c!==void 0?c:"blue",h=d!==void 0?d:24,n=function(){var a=h===24;if(a){a=g==="blue";if(a)return j;else return k}else return l};return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],function(){return b("ReasonReact.bs").element(void 0,void 0,b("Image.bs").make(b("joinClasses")(f,"_3u55 _3qh2"),void 0,i._("Loading..."),!0,n(0),h,void 0,h,void 0,[]))},m[9],m[10],m[11],m[12]]}a=b("ReasonReact.bs").wrapReasonForJs(m,function(a){var b=a.className,c=a.color;a=a.size;return n(b==null?"":b,c==null?"blue":c,a==null?24:a,[])});c=32;d=24;f.large_size=c;f.medium_size=d;f.blue_src=j;f.grey_src=k;f.large_blue_src=l;f.component=m;f.make=n;f.jsComponent=a}),null);
__d("MessengerSpinner.react",["MessengerSpinnerReact.bs"],(function(a,b,c,d,e,f){e.exports=b("MessengerSpinnerReact.bs").jsComponent,e.exports.large_size=b("MessengerSpinnerReact.bs").large_size,e.exports.medium_size=b("MessengerSpinnerReact.bs").medium_size}),null);
__d("MessengerProfileImageWrapperReact.bs",["cx","cssVar","React","ReactDOMRe.bs","CurrentUser","ReasonReact.bs","TooltipData","joinClasses","bs_js_primitive","MessagingThreadType","getViewportDimensions","MessengerDotComAndInboxM4Check.bs","LazyWorkMultiCompanyChatTooltipReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerProfileImageWrapperReact");function j(a,c,d,e,f,g,h,j,k,l,m,n){__p&&__p();var o=l!==void 0?l:"",p=function(){__p&&__p();if(c!==void 0)return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon _67in"},b("bs_js_primitive").valFromOption(c)));else{var a;if(d!==void 0||e!==void 0||k!==void 0)a=1;else return null;if(a===1)if(m)if(e!==void 0)if(b("CurrentUser").isWorkUser())return null;else{a=e;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _1zvi":"")+(a?"":" _2poo")}))}else if(k!==void 0)if(b("CurrentUser").isWorkUser()){a=k;var f=j!==void 0?j>45:!1;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("ReasonReact.bs").element(void 0,void 0,b("LazyWorkMultiCompanyChatTooltipReact.bs").make([b("React").createElement("div",{className:(a&&!f?"_4rwy":"")+(a&&f?" _2zb5":"")})])))}else return null;else if(b("CurrentUser").isWorkUser())return null;else{a=d;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _2poo":"")+(a?"":" _2pop")}))}else return null}};return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){__p&&__p();var c=j!==void 0?""+(String(j)+"px"):"auto",d=g!==void 0?g===b("MessagingThreadType").ROOM:!1,e;if(h!==void 0){var i=h;if(i==="")e={};else{var k=b("getViewportDimensions")().width,l=parseInt("700px".replace("px",""),10);k=k<=l;l=k?"above":"left";e=Object.assign({},b("TooltipData").propsFor(i,l))}}else e={};k=d?{background:f!==void 0?f:"#0084ff",height:c,width:c}:{height:c,width:c};i={className:b("joinClasses")("_4ldz",o),style:{height:c,width:c}};a!==void 0&&(i["aria-hidden"]=b("bs_js_primitive").valFromOption(a));return b("React").cloneElement(b("React").createElement("div",i,b("ReactDOMRe.bs").createElementVariadic("div",{className:"_4ld-"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _7q1r":"")+(d?" _180i":""),style:k},n),p(0)),e)},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){var c=a.className;return j(b("bs_js_primitive").nullable_to_opt(a.ariaHidden),b("bs_js_primitive").nullable_to_opt(a.customBadge),b("bs_js_primitive").nullable_to_opt(a.isMessengerUser),void 0,b("bs_js_primitive").nullable_to_opt(a.threadColor),b("bs_js_primitive").nullable_to_opt(a.threadType),b("bs_js_primitive").nullable_to_opt(a.tooltipContent),b("bs_js_primitive").nullable_to_opt(a.size),a.isMultiCompany,c==null?"":c,a.showBadge,[].concat(a.children))});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MercuryThreadImageReact.bs",["ReasonReact.bs","bs_js_null_undefined","MercuryThreadImage.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f){return b("ReasonReact.bs").wrapJsForReason(b("MercuryThreadImage.react"),{size:b("bs_js_null_undefined").fromOption(a),thread:c,useBackground:b("bs_js_null_undefined").fromOption(d),viewer:e},f)}f.make=a}),null);
__d("OptionType.bs",["bs_curry","bs_js_primitive"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){if(a!==void 0)if(c!==void 0)return b("bs_curry")._2(d,b("bs_js_primitive").valFromOption(a),b("bs_js_primitive").valFromOption(c));else return!1;else return c===void 0}function c(a,c){if(a!==void 0)if(c!==void 0)return b("bs_js_primitive").valFromOption(a)===b("bs_js_primitive").valFromOption(c);else return!1;else return c===void 0}f.equals=a;f.equalsReference=c}),null);
__d("MessengerThreadImageReact.bs",["cx","React","Utils.bs","MercuryIDs","OptionType.bs","ReasonReact.bs","bs_js_primitive","WorkForeignEntityInfo.bs","MercuryThreadImageReact.bs","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=a.other_user_fbid,e=c.size;a=b("MercuryIDs").isCanonical(a.thread_id);if(d==null||!(a&&e!==0))return!1;else{a=b("MercuryIDs").getParticipantIDFromUserID(d);e=c.get(a);if(!(e==null)&&!(e==null))return e.is_messenger_user;else return!1}}var i=b("ReasonReact.bs").statelessComponentWithRetainedProps("MessengerThreadImageReact");function j(a,c,d,e,f,g,j,k,l){__p&&__p();var m=c!==void 0?c:!1,n=d!==void 0?d:!1,o=e!==void 0?e:!1;return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],function(a){var c=a[1][2];a=a[0][2];if(a[0]!==c[0]||a[3]!==c[3]||!b("OptionType.bs").equalsReference(a[4],c[4])||a[5]!==c[5]||a[6]!==c[6]||a[1]!==c[1]||a[2]!==c[2]||a[7]!==c[7])return!0;else return a[8]!==c[8]},function(){var c=!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),d=c?void 0:n?b("bs_js_primitive").some(b("React").createElement("div",{className:"_466z"})):m?b("bs_js_primitive").some(b("React").createElement("div",{className:"_4670"})):void 0,e={};a!==void 0&&(e.className=b("bs_js_primitive").valFromOption(a));return b("React").createElement("div",e,b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(void 0,d,h(j,g),void 0,b("bs_js_primitive").nullable_to_opt(j.solid_color),b("bs_js_primitive").nullable_to_opt(j.thread_type),void 0,f,c,void 0,o&&b("MercuryIDs").isCanonical(j.thread_id)||c,[b("ReasonReact.bs").element(void 0,void 0,b("MercuryThreadImageReact.bs").make(f,j,!0,k,[]))])))},i[9],[a,m,n,o,f,h(j,g),!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),j,k],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(b("bs_js_primitive").nullable_to_opt(a.className),b("Utils.bs").isTruthy(a.isPresenceForWork),b("Utils.bs").isTruthy(a.isDoNotDisturb),b("Utils.bs").isTruthy(a.showBadge),b("bs_js_primitive").nullable_to_opt(a.size),a.participants,a.thread,a.viewer,[])});f.getIsMessengerUser=h;f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","gkx","immutable","mapObject","qex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").OrderedMap,j=500,k=100,l="__special_search_entry__",m=[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MESSAGE_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE],n=(a={},a[b("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},a[b("MercuryTypeaheadConstants").FRIEND_TYPE]={header:g._("Contacts")},a[b("MercuryTypeaheadConstants").FB4C_TYPE]={header:g._("Coworkers")},a[b("MercuryTypeaheadConstants").MESSAGE_TYPE]={header:g._("Messages")},a[b("MercuryTypeaheadConstants").THREAD_TYPE]={header:g._("Group Conversations")},a[b("MercuryTypeaheadConstants").PAGE_TYPE]={header:g._("Businesses")},a[b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:g._("Meeting Rooms")},a[b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:g._("Bots")},a[b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:g._("More People")},a.game={header:g._("Games")},a);c={sortEntries:function(a,c){__p&&__p();var d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[];a.forEach(function(a){__p&&__p();switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").MESSAGE_TYPE:g.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:h.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:case b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:j.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:i.push(a);break;case b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:k.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:l.push(a);break;case b("MercuryTypeaheadConstants").SEARCH_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").GAME_TYPE:m.push(a);break}});return d.concat(e,f,g,h,k,l,i,j,m)},sortEntriesWithoutPages:function(a){__p&&__p();var c=[],d=[],e=[],f=[];a.forEach(function(a){switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return c.concat(d,e,f)},sortEntriesWithoutGroupsOrViewer:function(a,c){__p&&__p();var d=[],e=[],f=[];a.forEach(function(a){if(a.getUniqueID()===c)return;switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return d.concat(e,f)},getEntryOrder:function(a,b){if(b==null)return m;else return b},orderEntries:function(a,c){var d=this,e=[];this.getEntryOrder(c).filter(function(a){return a!==b("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(b("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(b){return e.push.apply(e,a.filter(function(a){return d.areSectionsEqual(a.getType(),b)}))});return e},buildSingleSection:function(a){return i([["",a]])},buildListSections:function(a,c,d){__p&&__p();if(!a.length)return i();d=this.getEntryOrder(c,d);var e=b("mapObject")(n,function(a){return babelHelpers["extends"]({},a,{entries:[]})});e[b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=e[b("MercuryTypeaheadConstants").PAGE_TYPE];var f=b("qex")._("861958");c===""&&f===!0&&(e[b("MercuryTypeaheadConstants").FRIEND_TYPE].header=g._("Suggested"));a.forEach(function(a){var b=a.getType();e[b]&&e[b].entries.push(a)});return i(d.filter(function(a){return e[a].entries.length}).map(function(a){return[e[a].header,e[a].entries]}))},buildCustomSection:function(a,b){var c;return c={},c[a]=b,c},areSectionsEqual:function(a,c){return a===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE?c===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||c===b("MercuryTypeaheadConstants").PAGE_TYPE:a===c},scrollEntryIntoView:function(a,c){var d=b("ReactDOM").findDOMNode(c),e=c.getScrollTop(),f=a.offsetTop-e;d=d.offsetHeight-a.offsetHeight;a=Math.abs(d-f);f>=d&&a<=k?c.scrollToPosition(e+f-d,!0,{duration:j}):f<0&&a<=d+k&&c.scrollToPosition(e+f,!0,{duration:j})},getMessageSearchEntry:function(a){return b("gkx")("860320")||!b("MessengerEnvironment").messengerui||a.length<2?null:new(b("SearchableEntry"))({uniqueID:l,title:g._("Search Messages for \"{queryString}\"",[g._param("queryString",a)]),photo:h("86924"),type:b("MercuryTypeaheadConstants").SEARCH_TYPE})},isMessageSearchEntry:function(a){return a.getUniqueID()===l}};e.exports=c}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALOHA_GAMEHOST:"aloha_gamehost",BIG_BLUE_IG_SEARCH:"big_blue_ig_search",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",CUSTOM_SHARE:"in_game_custom_share",EMBEDDED_PLAYER:"embedded_player",FB_AD:"fb_ad",FB_ARCADE_HEADER_INVITE:"fb_arcade_header_invite",FB_CANVAS:"fb_canvas",FB_CANVAS_MIGRATION:"fb_canvas_migration",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_GROUP_CHALLENGE_EDGE_STORY:"fb_feed_group_challenge_edge_story",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_FROM_POST_EDGE_STORY:"fb_feed_play_from_post_edge_story",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_POST_GAMEPLAY:"fb_feed_post_gameplay",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_GAMES_TAB:"fb_games_tab",FB_GAMES_TAB_NOTIFICATION:"fb_games_tab_notification",FB_GG_FEED:"fb_gg_feed",FB_GG_NOTIFICATION:"fb_gg_notification",FB_GG_SEARCH:"fb_gg_search",FB_GG_STORY:"fb_gg_story",FB_GG_URL:"fb_gg_url",FB_GROUP_AYMT:"fb_group_aymt",FB_GROUP_CHALLENGE:"fb_group_challenge",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_TOURNAMENT_FEED_UNIT:"fb_group_tournament_feed_unit",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",FB_INVITE_DECLINED_NOTIF:"fb_invite_declined_notif",FB_MESSENGER_AD:"fb_messenger_ad",FB_NON_MESSENGER_WAP_INVITE_NOTIF:"fb_non_messenger_wap_invite_notif",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",FB_PLAYED_FROM_POST_NOTIF:"fb_played_from_post_notif",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_STORY_ATTRIBUTION_LINK:"fb_story_attribution_link",FB_TOURNAMENT_FINISHED_NOTIF:"fb_tournament_finished_notif",FB_TURN_REMINDER_NOTIF:"fb_turn_reminder_notif",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",GAME_CTA:"game_cta",GAME_SEARCH:"game_search",GAME_SWITCH:"game_switch",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",M_ME_LINK:"m_me_link",MARKETPLACE:"marketplace",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BBALL_EMOJI:"bball_emoji",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_COMPOSER_SMS:"composer_sms",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_CUSTOM_UPDATE_BREADCRUMB:"custom_update_breadcrumb",MESSENGER_CUSTOM_UPDATE_XMA:"custom_update_xma",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_BOT_NULL_STATE:"game_bot_null_state_cta",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_PUSH_NOTIFICATION:"game_push_notification",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_LEADERBOARD_BREADCRUMB:"leaderboard_breadcrumb",MESSENGER_LEADERBOARD_XMA:"leaderboard_xma",MESSENGER_M_SUGGESTION:"game_m_suggestion",MESSENGER_MORE_DRAWER_CHAT_EXTENSION:"more_drawer_chat_extension",MESSENGER_NEW_FRIEND_BUMP:"new_friend_bump",MESSENGER_ONE_LINE_COMPOSER:"one_line_composer",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MESSENGER_SOCCER_EMOJI:"soccer_emoji",MESSENGER_STALE_THREAD_QUICK_REPLY:"stale_thread_quick_reply",MESSENGER_STICKER:"sticker",MESSENGER_TOURNAMENT_START:"tournament_start",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_BOOKMARK:"mobile_bookmark",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MOBILE_GAME_CHAINING_PAGE:"mobile_game_chaining_page",MSITE:"msite",MSITE_BOOKMARK:"msite_bookmark",PRESENCE_ON_MESSENGER:"presence_on_messenger",SOCIAL_PLUGIN:"social_plugin",SRT_REVIEW:"srt_review",STREAMER_DASHBOARD:"streamer_dashboard",THREAD_ACTIVITY_BANNER:"thread_activity_banner",THREAD_SETTINGS:"thread_settings",TOURNAMENT_THREAD_ACTIVITY_BANNER:"tournament_thread_activity_banner",TOURNAMENT_UNIT:"tournament_unit",UNKNOWN:"unknown",WWW_APP_BOOKMARK:"www_app_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_BOOKMARK:"www_bookmark",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_BOOKMARKS:"www_games_hub_bookmarks",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_GAME_LOGGED_OUT_VIEW:"www_play_game_logged_out_view",WWW_PLAY_URL:"www_play_url",WWW_PROFILE_HOVERCARD:"www_profile_hovercard",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_BOTTOM_UNIT:"www_spotlight_bottom_unit",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc",MN_DIODE:"mn_diode",MN_DIODE_TAB:"mn_diode_tab",OTHER_DIODE_TAB:"other_diode_tab"})}),null);
__d("MessengerTabIndices",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({NEW_MESSAGE_TOKENIZER:9998,GROUP_NAME_INPUT:9999,COMPOSER_INPUT:1e4});e.exports=a}),null);
__d("MessengerComposeViewHeader.react",["cx","fbt","ImmutableObject","MessengerButtonReact.bs","MessengerDotComAndInboxM4Check.bs","MessengerGraphQLTokenizer.react","MessengerTabIndices","React","clearImmediate","gkx","immutable","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerButtonReact.bs").jsComponent;a=b("React").PropTypes;var j=320;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={tokenizerContext:null,excludeGroups:!1,excludePages:!1,forGroup:!1},d.$1=null,d.$2=function(){d.$1=b("setImmediate")(function(){d.refs.tokenizer&&d.refs.tokenizer.focusInput()})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$2(),this.setState({tokenizerContext:this.refs.tokenizerContext})};d.componentDidUpdate=function(a){this.props.recipients!==a.recipients&&this.props.onResize()};d.UNSAFE_componentWillReceiveProps=function(a){a.recipients!==this.props.recipients&&(a.recipients.size===0?this.setState({excludeGroups:!1,excludePages:!1,forGroup:!1}):a.isWorkUser?this.setState({excludeGroups:!0,excludePages:!1,forGroup:!0}):this.setState({excludeGroups:!0,excludePages:!0,forGroup:!0}))};d.componentWillUnmount=function(){this.$1&&b("clearImmediate")(this.$1)};d.render=function(){var a={enableMessageSearch:!1,hasHoverState:!0,originalEntryIDs:b("immutable").Set(),scrollableViewClassName:"_2y8_",shouldQueryInternalBot:!0,shouldQueryVCEndpoint:!1,width:j};return b("React").createElement("div",{className:b("joinClasses")("_2y8y"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _6zw0":"")+" _5l-3",this.props.className),onClick:this.$2,role:"presentation"},b("React").createElement("div",{className:"_2y8z",ref:b("gkx")("678607")?"tokenizerContext":""},h._("To:")),b("React").createElement("div",{className:"_66s6"},b("React").createElement(b("MessengerGraphQLTokenizer.react"),babelHelpers["extends"]({autoFocus:!0,className:"_2y8-",context:this.state.tokenizerContext,entries:this.props.recipients,excludeGroups:this.state.excludeGroups,excludePages:this.state.excludePages,forGroup:this.state.forGroup,forceHideClearButton:this.props.forceHideClearButton,onAddEntryAttempt:this.props.onAddRecipient,onClear:this.props.onClear,onRemoveEntryAttempt:this.props.onRemoveRecipient,placeholder:h._("Type the name of a person or group"),ref:"tokenizer",tabIndex:b("MessengerTabIndices").NEW_MESSAGE_TOKENIZER,useLayer:!0,viewer:this.props.viewer},a)),b("gkx")("678607")?null:b("React").createElement("div",{ref:"tokenizerContext"})),this.$3())};d.$3=function(){return this.props.shouldShowCreateGroupButton?b("React").createElement(i,{className:"_6wh5",label:h._("Create New Chat"),onClick:this.props.onCreateGroupButtonClicked,role:"button",tabIndex:0,type:"primary"}):null};return c}(b("React").PureComponent);c.propTypes={forceHideClearButton:a.bool.isRequired,onAddRecipient:a.func.isRequired,onClear:a.func,onRemoveRecipient:a.func.isRequired,onResize:a.func.isRequired,recipients:a.instanceOf(b("immutable").List).isRequired,thread:a.instanceOf(b("ImmutableObject")),viewer:a.string.isRequired,isWorkUser:a.bool.isRequired,shouldShowCreateGroupButton:a.bool,onCreateGroupButtonClicked:a.func};c.defaultProps={shouldShowCreateGroupButton:!1,isWorkUser:!1};e.exports=c}),null);
__d("MessengerMenu.react",["cx","Keys","MenuSeparator.react","MessengerDotComAndInboxM4Check.bs","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a.isReactLegacyFactory={},a.type=a}c=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d=c.className;c=babelHelpers.objectWithoutPropertiesLoose(c,["className"]);return a.call(this,babelHelpers["extends"]({className:b("joinClasses")(d,"_2i-c"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _6_n0":"")+" _150g")},c))||this}var d=c.prototype;d.handleKeydown=function(c,d){return c===b("Keys").DOWN||c===b("Keys").UP||c===b("Keys").SPACE?a.prototype.handleKeydown.call(this,c,d):!0};return c}(b("ReactXUIMenu"));a(c);c.Item=b("ReactXUIMenu").Item;c.Separator=b("MenuSeparator.react");e.exports=c}),null);
__d("MessengerDialogTitleReact.bs",["cx","React","bs_belt_Option","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("ReasonReact.bs").statelessComponent("MessengerDialogTitleReact");function a(a,c){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){var d=b("bs_belt_Option").getWithDefault(a,!1);return b("React").createElement("div",{className:b("joinClasses")("_19jt",d?"autofocus":"")},c)},h[9],h[10],h[11],h[12]]}f.component=h;f.make=a}),null);
__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},sharing_info:{type:"TypeAssert"},upsell_logging_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);