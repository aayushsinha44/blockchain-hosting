if (self.CavalryLogger) { CavalryLogger.start_js(["1T0Ke"]); }

__d("ProfileFunFactsEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CTA:"cta",SELF_CTA:"self_cta",ASK_FRIENDS_TO_ANSWER_CTA:"ask_friends_to_answer_cta",COLLECTION:"collection",NEWSFEED_COMPOSER:"newsfeed_composer",TIMELINE_COMPOSER:"timeline_composer",SELF_PROTILE:"self_protile",SELF_PROTILE_NULL:"self_protile_null",HSCROLL_ADD_MORE:"hscroll_add_more",SINGLE_PLAYER:"single_player",MULTIPLAYER:"multiplayer",PERMALINK:"permalink",CREATION_STATION:"creation_station",UNKNOWN:"unknown"})}),null);
__d("FunFactSinglePlayer",["Arbiter","CurrentUser","FacebookAppIDs","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={initLogging:function(a,c,d){b("tidyEvent")(b("Arbiter").subscribe("FunFactStack/transition"+a,function(a,e){a=c===!0?1:2;var f;e.index===0?f="question_card":e.index===a?f="entry_point_card":f="answer_card";new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(d===!0?"group":"unknown").setEngagementType("swipe").setItemType("single_player").setItemSubtype(f).setEventMetadata({card_index:e.index.toString(),direction:e.direction,is_question_only:c===!0?"1":"0"}).setAppID(b("FacebookAppIDs").WWW).log();e.direction==="right"&&e.index===a-1&&new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("impression").setItemType("entry_point").setEventMetadata({entry_point:b("ProfileFunFactsEntryPoint").SINGLE_PLAYER}).setAppID(b("FacebookAppIDs").WWW).log()}))}};e.exports=a}),null);
__d("FunFactStack",["cx","Arbiter","CSS","DOMEventListener","SubscriptionsHandler","destroyOnUnload","findTag","getElementRect","onRectIsWithinViewport"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_28hy",i="_1q7-",j="_6972";a=function(){__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;this.$9=function(){if(f.$6<=0)return;else f.$6===1&&b("CSS").addClass(f.$4,j);b("CSS").removeClass(f.$5,j);b("CSS").removeClass(f.$3[f.$6],h);b("CSS").addClass(f.$3[f.$6-1],h);b("Arbiter").inform("FunFactStack/transition"+f.$2,{direction:"left",index:f.$6});f.$6--};this.$10=function(){__p&&__p();if(f.$6>=f.$3.length-1)return;else f.$6===f.$3.length-2&&b("CSS").addClass(f.$5,j);b("CSS").removeClass(f.$4,j);b("CSS").removeClass(f.$3[f.$6],h);b("CSS").addClass(f.$3[f.$6+1],h);b("Arbiter").inform("FunFactStack/transition"+f.$2,{direction:"right",index:f.$6});f.$6++;f.$7=!1;f.$13()};this.$1=b("findTag")(a,"div");this.$2=a;this.$3=c;this.$4=d;this.$5=e;this.$6=0;this.$7=!0;this.$8=new(b("SubscriptionsHandler"))();this.$8.addSubscriptions(b("DOMEventListener").add(this.$4,"click",this.$9),b("DOMEventListener").add(this.$5,"click",this.$10),b("onRectIsWithinViewport")(function(){return b("getElementRect")(f.$1)},function(a){f.$11(a)}));b("destroyOnUnload")(function(){f.$8.release()})}var c=a.prototype;c.$11=function(a){a&&this.$7?this.$12():this.$13()};c.$12=function(){b("CSS").addClass(this.$1,i)};c.$13=function(){b("CSS").removeClass(this.$1,i)};return a}();e.exports=a}),null);
__d("PostEdit",["csx","Arbiter","CSS","DOM","$","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h={insertEntStoryEditor:function(a,c,d){a=b("$")(a);if(h.hasExistingEditor(a))return;var e=null,f=b("DOM").scry(a,".userContentEditorWrapper");f.length>0?e=f[0]:e=b("DOM").find(a,".userContent");b("DOM").insertBefore(e,c);d.init()},hasExistingEditor:function(a){a=b("DOM").scry(a,"._3gr");return a.length>0},onEditShowComponent:function(a,c){b("tidyEvent")([b("Arbiter").subscribe("InlinePostEditor/showEditor"+a,function(){b("CSS").show(c)}),b("Arbiter").subscribe("InlinePostEditor/removeEditor"+a,function(){b("CSS").hide(c)})])}};e.exports=h}),null);