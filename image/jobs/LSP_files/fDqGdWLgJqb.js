if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MXUILayout.react",["cx","MXUIDiv.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function j(a){return(a==="start"?"_52wc":"")+(a==="end"?" _52wd":"")+(a==="center"?" _52we":"")+(a==="stretch"?" _52wf":"")}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={align:c.props.align},b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.hasAlignSelfChildren=function(){var a=i.Children.toArray(this.props.children);for(var b=0;b<a.length;b++){var c=a[b].props;if(c instanceof Object&&Object.prototype.hasOwnProperty.call(c,"alignself"))return!0}return!1};d.render=function(){var a=this,b=this.props,d=b.align,e=b.className,f=b.children;b=babelHelpers.objectWithoutPropertiesLoose(b,["align","className","children"]);var g="_4g33",h;this.hasAlignSelfChildren()?h=i.Children.toArray(f).map(function(b){var c=b.props;return c instanceof Object&&Object.prototype.hasOwnProperty.call(c,"alignself")?b:i.cloneElement(b,{alignself:a.state.align})}):(h=f,g=c("joinClasses")(j(d),g));return i.jsx(c("MXUIDiv.react"),babelHelpers["extends"]({},b,{className:c("joinClasses")(e,g),children:h}))};return b}(i.Component);a.defaultProps={align:"stretch"};g["default"]=a}),98);
__d("MXUILayoutColumn.react",["cx","MJSEnvironment","MXUIDiv.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function j(a){return(a==="start"?"_52wc":"")+(a==="end"?" _52wd":"")+(a==="center"?" _52we":"")+(a==="stretch"?" _52wf":"")}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props,b=a.className,d=a.alignself,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","alignself","children"]);if(Object.prototype.hasOwnProperty.call(this.props,"alignself")){b=c("joinClasses")(b,"_5i2i",j(d));if(c("MJSEnvironment").IS_FIREFOX)return i.jsx(c("MXUIDiv.react"),babelHelpers["extends"]({},a,{className:b,children:i.jsx(c("MXUIDiv.react"),{className:"_5xu4",children:e})}))}return i.jsx(c("MXUIDiv.react"),babelHelpers["extends"]({},a,{className:b,children:e}))};return b}(i.Component);g["default"]=a}),98);
__d("MXUILayoutFillColumn.react",["cx","MXUILayoutColumn.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function a(a){var b="_4g34";return i.jsx(c("MXUILayoutColumn.react"),babelHelpers["extends"]({},a,{className:c("joinClasses")(a.className,b),children:a.children}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MUFICommentReplyLink",["DOM","MAjaxify","MParent","MRequest","MUFIConfig","MUFIInlineRepliesFunnelLogConfig","Stratcom","SubscriptionsHandler","ge"],(function(a,b,c,d,e,f,g){"use strict";var h="feed-ufi-comments";function a(a){var b=a.composerID,e=a.placeholderID,f=a.node,g=a.loadComposerURI,h=a.loggingTargetFBID,j=a.replyAuthorName,k=a.replyAuthorID;c("MUFIConfig").canReactToComment&&(f.href&&f.setAttribute("data-uri",f.href),f.removeAttribute("href"));var l=new(c("SubscriptionsHandler"))();l.addSubscriptions(d("DOM").listen(f,"click",null,function(a){i({composerID:b,placeholderID:e,loadComposerURI:g,loggingTargetFBID:h,replyAuthorName:j,replyAuthorID:k,onPreventDefault:function(){a.prevent()}})}),d("DOM").listen(f,"mousedown",null,function(a){c("Stratcom").invoke("MCommentComposer:replyButtonClick",null,{composerID:b})}),c("Stratcom").listen("m:page:unload",null,function(){l.release()}),c("Stratcom").listen("m:feed-ufi-flyout:reset",null,function(){l.release()}))}function b(a){var b=new(c("SubscriptionsHandler"))();b.addSubscriptions(c("Stratcom").listen("obj:finally",null,function(c){c=d("DOM").scry(a,"*","mufi-composer")[0];c&&c.focus&&c.focus();b.release()}))}function i(a){var b=a.composerID,e=a.placeholderID,f=a.loadComposerURI,g=a.loggingTargetFBID;a=a.onPreventDefault;g&&c("MUFIInlineRepliesFunnelLogConfig").MUFIInlineReplyComposerFunnelLogger&&c("MUFIInlineRepliesFunnelLogConfig").MUFIInlineReplyComposerFunnelLogger.logReplyClicked(g);g=c("ge")(b);b=g&&d("DOM").scry(g,"*","mufi-composer")[0];if(b){a();d("MParent").bySigil(g,h)?c("Stratcom").invoke("MUFICommentReplyLink:show-inline-composer",null,{composerRoot:g}):b.focus();return}g=c("ge")(e);if(g&&f){a();d("MAjaxify").ajaxify(null,g,new(c("MRequest"))(f),null);return}}g.initInlineRepliesWithMention=a;g.bindFocusInlineReplyComposerAfterPageFinish=b;g.focusOrLoadInlineReplyComposerWithMention=i}),98);
__d("unmountComponentOnTransition",["ReactDOMLegacy_DEPRECATED","Run","containsNode","warning"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){d("Run").onLeave(function(){d("ReactDOMLegacy_DEPRECATED").unmountComponentAtNode(b),c("warning")(c("containsNode")(document.body,b),"ReactRenderer: Upon observing an `m:page:unload` event, we tried to unmount a React component named `%s` but the DOM node into which it was mounted is no longer a child of `<body>`. Please investigate why it was prematurely removed.",a.constructor&&a.constructor.displayName)})}g["default"]=a}),98);
__d("unmountConcurrentComponentOnTransition",["Run"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){d("Run").onLeave(function(){a.unmount(b)})}g["default"]=a}),98);
__d("MPagesNavbarUtil",["DOM","MViewport","getVendorPrefixedName"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b=d("DOM").find(a,b?"div":"a","msite-pages-presence-current-tab");b=d("MViewport").getWidth()-(b.offsetLeft+b.offsetWidth);if(b<0){a=d("DOM").find(a,"div","scroll-area-body");var e=c("getVendorPrefixedName")("transform");a=a&&a.style;a&&(e?(a[c("getVendorPrefixedName")("backface-visibility")]="hidden",a[e]="translate("+b+"px, 0px)"):a.left=b+"px")}}g.bringSelectedTabIntoView=a}),98);
__d("MPagesNonStickyNavbar",["cx","CSS","DOM","MPageController","MPagesNavbarUtil","MViewport","Run","Stratcom","SubscriptionsHandler","URI","Vector","ge"],(function(a,b,c,d,e,f,g,h){"use strict";b=[];function a(a,b,e){b&&d("MViewport").scrollTo(0,c("Vector").getElementPosition(c("ge")(a)).y);var f=c("Stratcom").listen("scroll",null,function(){var a=c("ge")("msite-pages-header-contents");a&&(c("CSS").removeClass(a,"_4web"),f&&f.remove(),f=null)}),g=new(c("SubscriptionsHandler"))();g.addSubscriptions(c("Stratcom").listen("m:schedulable:loaded",null,function(){return d("MPagesNavbarUtil").bringSelectedTabIntoView(a,e)}),d("DOM").listen(a,"click",null,function(a){return d("MPageController").load(new(c("URI"))(JSON.parse(a.getNode("tag:div").dataset.store).uri))}));d("Run").onLeave(function(){f&&f.remove(),g.release()})}g.eventListeners=b;g.init=a}),98);
__d("MPageIconButton.react",["cx","MImage.react","MXUIDiv.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){return i.jsx(c("MXUIDiv.react"),{"aria-label":this.props.label,className:"_14bx",role:"button",tabIndex:"0",children:i.jsx(c("MImage.react"),{src:this.props.iconPath})})};return b}(i.PureComponent);g["default"]=a}),98);
__d("MPageIconLabelButton.react",["cx","MImage.react","MXUIDiv.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){return i.jsxs(c("MXUIDiv.react"),{className:"_2thz",children:[i.jsx(c("MXUIDiv.react"),{className:"_2ti7",children:i.jsx(c("MImage.react"),{src:this.props.iconPath})}),i.jsx(c("MXUIDiv.react"),{className:"_2ti8",children:this.props.label})]})};return b}(i.PureComponent);g["default"]=a}),98);
__d("MPageLabelButton.react",["cx","MXUIDiv.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){return i.jsx(c("MXUIDiv.react"),{className:"_2x1r",children:this.props.label})};return b}(i.PureComponent);g["default"]=a}),98);
__d("MPageActionButton.react",["cx","MPageIconButton.react","MPageIconLabelButton.react","MPageLabelButton.react","MXUIDiv.react","err","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=!1,b=!1,d=null;switch(this.props.buttonType){case"launchpad_extra_button":a=!0;b=!0;d="_36bk";break;case"launchpad_primary_button":a=!0;b=!0;d="_36bl";break;case"launchpad_secondary_button":a=!0;var e=this.props.buttonStyle!=null&&this.props.buttonStyle!=="primary";d=(e?"":"_36bn")+(e?" _6z-0":"");break;case"action_bar_button":a=!0;b=!0;d="_21a4";break;case"action_bar_additional_button":a=!1;b=!0;d="_21a6";break;case"primary_button":a=!1;b=!0;d="_1rty";break;case"action_confirmation_button":a=!1;b=!0;d="_2we2";break;default:return null}if(a&&!this.props.iconPath&&this.props.buttonType!=="launchpad_primary_button")throw c("err")("this.props.iconPath cannot be null or undefined for button type %s",this.props.buttonType);if(!a||!this.props.iconPath)return i.jsx(c("MXUIDiv.react"),{className:d,children:i.jsx(c("MPageLabelButton.react"),{label:this.props.label})});return b?i.jsxs(c("MXUIDiv.react"),{className:d,children:[i.jsx(c("MPageIconLabelButton.react"),{iconPath:this.props.iconPath,label:this.props.label}),this.props.destinationDomain?i.jsx(c("MXUIDiv.react"),{className:"_6o3l",children:this.props.destinationDomain}):null]}):i.jsx(c("MXUIDiv.react"),{className:d,children:i.jsx(c("MPageIconButton.react"),{iconPath:this.props.iconPath,label:this.props.label})})};return b}(i.PureComponent);g["default"]=a}),98);
__d("MUFICommentLikeLink",["DOM","MLiveData","MUFIReactionsUtils","MUFIRequest","Stratcom","Style","SubscriptionsHandler","UFIReactionTypes"],(function(a,b,c,d,e,f,g){var h="1635855486666999";a=function(a){var b=this;this.onChange=function(){if(b.feedbackTarget.getData().request_id===b.requestID)return;var a=b.feedbackTarget.getData();a=a.viewerreaction;a&&!c("UFIReactionTypes").reactions[a]&&(a=null);var e,f;!a?(e="",f=c("UFIReactionTypes").reactions[c("UFIReactionTypes").LIKE].display_name):(e=c("UFIReactionTypes").reactions[a].color,f=c("UFIReactionTypes").reactions[a].display_name);d("DOM").setContent(b.likeLink,f);c("Style").set(b.likeLink,"color",e)};this.onClick=function(a){a.prevent();var e=b.feedbackTarget.getData(),f=e.has_viewer_liked,g=d("MUFIReactionsUtils").maybeConvertTokenToFBID(e.comment_id||e.ft_ent_identifier),i=f?c("UFIReactionTypes").NONE:c("UFIReactionTypes").LIKE,j=f?null:h,k=a.getNode("tag:a");k||(k=a.getNode("tag:div"));if(!k)return;c("Stratcom").hasSigil(b.likeLink,"kaios-like-react-trigger")&&f&&a.stop();f=d("MUFIRequest").getURI(k.getAttribute("href")||k.getAttribute("data-uri"));f.addQueryData("reaction_comment_id",g);f.addQueryData("viewer_reaction",i);d("MUFIRequest").send(b.feedbackTargetID,d("MUFIReactionsUtils").getReactionDataForComment(e,i,j),f)};this.onUnload=function(){b.subscriptions&&b.subscriptions.release()};this.likeLink=a.likeLink;this.requestID=a.requestID;this.feedbackTargetID=a.feedbackTargetID;this.feedbackTarget=d("MLiveData").get(a.feedbackTargetID);this.subscriptions=new(c("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(d("DOM").listen(this.likeLink,"click",null,this.onClick.bind(this)),this.feedbackTarget.listen("change",this.onChange.bind(this)),c("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)));this.likeLink.href&&(this.likeLink.setAttribute("data-uri",this.likeLink.href),this.likeLink.removeAttribute("href"))};g["default"]=a}),98);
__d("MUFICommentReactionBadge",["cx","CSS","DOM","FeedbackReactionIDToTypeNumber","MLiveData","Stratcom","SubscriptionsHandler","UFIReactionIcons","UFIReactionTypes","createIxElement"],(function(a,b,c,d,e,f,g,h){var i=3,j=16;c("UFIReactionTypes").ordering.unshift(17);var k=c("UFIReactionTypes").ordering.reduce(function(a,b,c){a[b]=c;return a},{});a=function(a){var b=this;this.onChange=function(){if(b.feedbackTarget.getData().request_id===b.requestID)return;var a=b.feedbackTarget.getData(),e=a.reactioncountmapbyid,f=a.ufireactioniconsbyid,g=Object.keys(e).filter(function(a){a=e[a];return a&&a["default"]>0}).sort(function(a,b){var d=e[a]["default"],f=e[b]["default"];return d===f?k[c("FeedbackReactionIDToTypeNumber")(a)]-k[c("FeedbackReactionIDToTypeNumber")(b)]:f-d}).slice(0,i).map(function(a){var b=null;c("FeedbackReactionIDToTypeNumber")(a)===17?b=c("createIxElement")(f[a][j]):b=c("createIxElement")(c("UFIReactionIcons")[c("FeedbackReactionIDToTypeNumber")(a)][j]);a=d("DOM").create("span",{className:"_4edl"});d("DOM").appendContent(a,b);return a});c("CSS").conditionClass(b.reactionBadge,"_4edm",!!a.reactioncount);d("DOM").setContent(b.reactionBadge.firstChild,g);d("DOM").setContent(b.reactionBadge.lastChild,a.reactioncountreduced)};this.onUnload=function(){b.subscriptions&&b.subscriptions.release()};this.feedbackTarget=d("MLiveData").get(a.feedbackTargetID);this.reactionBadge=a.reactionBadge;this.requestID=a.requestID;this.subscriptions=new(c("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(this.feedbackTarget.listen("change",this.onChange.bind(this)),c("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)))};g["default"]=a}),98);
__d("XLiveCommentRenderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mobile/live_comment/render/",{})}),null);
__d("MUFILiveComments",["cx","Bootloader","DOM","MLiveData","MParent","MRequest","MUFIReactionsUtils","Stratcom","SubscriptionsHandler","XLiveCommentRenderController"],(function(a,b,c,d,e,f,g,h){"use strict";var i="feed-ufi-comments",j="m-ufi";a=function(){function a(a,b){var e=this;this.onNewComment=function(a){a=a.getData();var b=a.feedbackTargetID,f=a.commentToken;if(b!==e.feedbackTargetID)return;var g=e.feedbackTarget.getData();if(!e.fetchedComments[f]){a=c("XLiveCommentRenderController").getURIBuilder().getURI();a=new(c("MRequest"))(a);a.setData({comment_token:f,dom_append_id:e.rootElement.id});a.listen("postprocess",function(){var a=g.comments||[];a.push(f);d("MLiveData").update(b,{comments:a});e.updateActivityUI(g.logging_interaction_key)});a.send();e.fetchedComments[f]=!0}};this.onUnload=function(){e.handler.release(),e.liveTypersCount=null};this.rootElement=a;this.activityElement=d("DOM").create("div",{className:"_623b"});this.rootElement.parentNode&&this.rootElement.parentNode.insertBefore(this.activityElement,this.rootElement.nextSibling);this.fetchedComments={};this.feedbackTargetID=b;this.feedbackTarget=d("MLiveData").get(this.feedbackTargetID);this.liveTypersCount=null;this.handler=new(c("SubscriptionsHandler"))();this.handler.addSubscriptions(c("Stratcom").listen("m:ufi:live-comments:new-comment",null,this.onNewComment.bind(this)),c("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)));this.getIsCommentFlyout()||this.initTypingIndicatorSubscription()}var b=a.prototype;b.initTypingIndicatorSubscription=function(){var a=this;c("Bootloader").loadModules(["MUFICommentTypingSubscriptionController"],function(b){b=new b(a.feedbackTargetID,function(b){a.liveTypersCount=b,a.updateActivityUI()});b.didSubscribe()&&a.handler.addSubscriptions(b)},"MUFILiveComments")};b.getIsCommentFlyout=function(){return!!d("MParent").bySigil(this.rootElement,i)};b.getCommentElement=function(a){a=d("MUFIReactionsUtils").maybeConvertTokenToFBID(a);return a?document.getElementById(a):null};b.updateActivityUI=function(a){var b=this;c("Bootloader").loadModules(["MReactComponentRenderer","MUFILiveCommentActivity.react"],function(e,f){var g=b.feedbackTarget.getData();e(f,b.activityElement,{comments:g.comments||[],feedbackTargetID:b.feedbackTargetID,isAnyLiveTyping:b.liveTypersCount&&b.liveTypersCount>0,disablePill:b.getIsCommentFlyout()});e=g.logging_interaction_key;f=e?[e]:[];a&&a!==e&&f.push(a);c("Stratcom").invoke("m:ufi:live-comments:render",null,{ufi:d("MParent").bySigil(b.rootElement,j),logKeys:f})},"MUFILiveComments")};return a}();g["default"]=a}),98);
__d("MUFISutro",["cx","CSS"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=document.getElementById(a);a&&c("CSS").addClass(a,"_2a_l")}g.commentRepliesExpanded=a}),98);
__d("MUfiNewCommentScroll",["$","DOM","MViewport","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){a=function(a){var c=!0;if(!window.FW_ENABLED){var d=b("DOM").scry(document,"*","m-composer");c=d&&d.length<=1}if(c&&!!a.commentID){var e=b("$")(a.commentID);b("setTimeoutAcrossTransitions")(function(){b("MViewport").scrollToNode(e)},0)}};f.main=a}),null);
__d("ReactXHPContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);c=b;g["default"]=c}),98);
__d("ReactRenderer",["invariant","$","ReactDOM","ReactDOMComet","ReactXHPContext","nullthrows","react","unmountComponentOnTransition","unmountConcurrentComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react"),j=8;function k(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function l(a,c,d){c=b("ReactDOMComet").createRoot(c,d);d=c.render(a);b("unmountConcurrentComponentOnTransition")(c);return d}function m(a,c,d){c=b("ReactDOMComet").createRoot(c,d);return c.render(a)}function n(a,b,c,d){a=i.createElement(a,b);return k(a,c,d)}function o(a,b,c,d){a=i.createElement(a,b);return p(a,c,d)}function p(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return n(a,c,b("$")(d),e)}function c(a,c,d,e){return o(a,c,b("$")(d),e)}function q(a){var c=a.acrossTransitions,d=a.bigPipeContext,e=a.clobberSiblings,f=a.concurrentRootOptions,g=a.dummyElem,h=a.elementInitial;a=a.preloader;var j=a?a.getContextProvider():null;d=i.jsx(b("ReactXHPContext").Provider,{value:{bigPipeContext:d},children:h});j&&(d=i.jsx(j,{value:a,children:d}));e?h=b("nullthrows")(g.parentNode,"Error: container doesn't have a parent"):(h=document.createComment(" react-mount-point-unstable "),r(g,h));return f!=null?c?m(d,h,f):l(d,h,f):c?p(d,h):k(d,h)}function d(a){var b=a.concurrentRootOptions,c=a.constructor,d=a.props,e=a.dummyElem,f=a.acrossTransitions,g=a.clobberSiblings,h=a.preloader;a=a.bigPipeContext;return q({elementInitial:i.createElement(c,d),dummyElem:e,acrossTransitions:f,clobberSiblings:g,preloader:h,bigPipeContext:a,concurrentRootOptions:b})}function r(a,c){a.tagName==="NOSCRIPT"||g(0,3540);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===j&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===j&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:k,constructAndRenderComponent:n,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:o,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:d,constructAndRenderElementIntoComment_DO_NOT_USE:q,constructAndRenderComponent_DEPRECATED:o,constructAndRenderComponentByID_DEPRECATED:c}}),null);
__d("ReactComponentRenderer",["ReactDOM","react","warning"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(){function a(a,b){this.klass=a,this.container=b,this.props={},this.component=null}var b=a.prototype;b.replaceProps=function(a,b){this.props={},this.setProps(a,b)};b.setProps=function(a,b){var c=this.klass;if(c==null)return;Object.assign(this.props,a);a=h.createElement(c,this.props);var e=this;d("ReactDOM").render(a,this.container,function(){e.component=this,b&&b.call(this)})};b.unmount=function(){d("ReactDOM").unmountComponentAtNode(this.container),this.klass=null};return a}();g["default"]=a}),98);