if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MContextualThing",["isTruthy"],(function(a,b,c,d,e,f,g){var h=0;function a(a,b){b.id=b.id||"ctxtlayer_"+h++,a.setAttribute("data-ownerid",b.id)}function b(a,b){b=b;while(b){if(a.contains(b))return!0;b=i(b)}return!1}function i(a){a=a;while(a){if(a instanceof Element){var b=a.getAttribute("data-ownerid");if(c("isTruthy")(b))return document.getElementById(b)}a=a.parentNode}return null}g.register=a;g.containsIncludingLayers=b;g.getContext=i}),98);
__d("MLayer",["BehaviorsMixin","CSS","DOM","FlowMigrationUtilsForLegacyFiles","MContextualThing","MLegacyDataStore","Stratcom","ge","mixInEventEmitter","mixin","nullthrows","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){var h=[],i={};e=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var e;e=a.call(this)||this;e.$MLayer2=!1;e.$MLayer3=!1;e.$MLayer4=!1;e.$MLayer5=null;e.hide=function(){if(e.$MLayer3||!e.$MLayer2||e.emit("beforehide")===!1)return babelHelpers.assertThisInitialized(e);e.$MLayer3=!0;e.emit("starthide")!==!1&&e.config.fadeonhide!==!0&&e.finishHide();return babelHelpers.assertThisInitialized(e)};e.destroy=function(){if(e.destroyed)return;e.destroyed=!0;e.finishHide();var a=e.getRoot();d("DOM").remove(a);e.destroyBehaviors();e.emit("destroy");c("Stratcom").invoke("Layer:destroy",null,babelHelpers.assertThisInitialized(e));delete d("MLegacyDataStore").get(a).layer;e.$MLayer1=e.$MLayer5=null;e.config.layerid&&delete i[e.config.layerid];e.config=null};e.config=b||{layerid:void 0};return e}var e=b.prototype;e.init=function(a){if(this.config.layerid){if(i[this.config.layerid])return;i[this.config.layerid]=this}this.configure(this.config,c("nullthrows")(a));a=this.config.addedBehaviors||[];this.enableBehaviors(this.getDefaultBehaviors().concat(a));a=c("ge")("flyout-nocontext-root");a||(a=d("DOM").create("div",{id:"flyout-nocontext-root"}));d("DOM").appendContent(document.body,a);d("DOM").appendContent(a,this.getRoot());d("DOM").hide(this.getRoot());c("Stratcom").invoke("m:layer:init",null,this)};e.configure=function(a,b){var e=this;this.$MLayer1=this.buildWrapper(a,b);c("Stratcom").addSigil(this.$MLayer1,"m-layer-root");b=a.attributes;if(b){if(b.sigil){var f=b.sigil.split(" ");f.forEach(function(a){c("Stratcom").addSigil(e.$MLayer1,a)});delete b.sigil}for(var f in b)this.getRoot().setAttribute(f,b[f])}if(a.isModal){this.getRoot().setAttribute("aria-modal",(f=a.isModal)==null?void 0:f.toString());this.getRoot().setAttribute("role","alertdialog")}a.classNames&&a.classNames.forEach(function(a){c("CSS").conditionClass(e.$MLayer1,a,!0)});a.causalElement&&(this.$MLayer5=a.causalElement);d("MLegacyDataStore").set(this.getRoot(),{layer:this})};e.getDefaultBehaviors=function(){return[]};e.getCausalElement=function(){return this.$MLayer5};e.setCausalElement=function(a){this.$MLayer5=a;return this};e.setPreventShowOnce=function(){this.$MLayer4=!0};e.getInsertParent=function(){return this.insertParent||c("nullthrows")(document.body)};e.getRoot=function(){return c("nullthrows")(this.$MLayer1)};e.getContentRoot=function(){return this.$MLayer1};e.buildWrapper=function(a,b){return b};e.setInsertParent=function(a){a&&(this.$MLayer2&&a!==this.getInsertParent()&&(d("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this.insertParent=a);return this};e.show=function(){var a=this;if(this.$MLayer2)return this;var b=this.getRoot(),e=this.getInsertParent();b.parentNode!==e&&d("DOM").appendContent(e,b);this.emit("beforeshow");if(this.$MLayer4){this.$MLayer4=!1;return this}b.style.visibility="hidden";b.style.overflow="hidden";d("DOM").show(b);this.updatePosition()!==!1?(this.$MLayer2=!0,this.emit("show"),c("Stratcom").invoke("Layer:show",null,this),c("setTimeoutAcrossTransitions")(function(){a.$MLayer2&&h.push(a)})):d("DOM").hide(b);b.style.visibility="";b.style.overflow="";this.emit("aftershow");return this};e.conditionShow=function(a){return a?this.show():this.hide()};e.finishHide=function(){this.$MLayer2&&(h.splice(h.indexOf(this),1),this.$MLayer3=!1,this.$MLayer2=!1,d("DOM").hide(this.getRoot()),this.emit("hide"),c("Stratcom").invoke("m:layer:hide",null,this));return this};e.isShown=function(){return this.$MLayer2};e.updatePosition=function(){return!0};e.updateIfShown=function(){this.isShown()&&this.updatePosition()};e.isDestroyed=function(){return this.destroyed};e.shouldBlurOnTouchEnd=function(){return!0};b.getLayers=function(){return i};b.show=function(a){a.show()};return b}(c("mixin")(c("BehaviorsMixin")));c("mixInEventEmitter")(e,{destroy:!0,blur:!0,beforeshow:!0,show:!0,aftershow:!0,beforehide:!0,starthide:!0,hide:!0});var j;function a(a){a=a.getTouch();var b=a.clientX;a=a.clientY;j={x:b,y:a}}function b(a){var b=h.length;if(!b)return;var e=a.getTarget(),f=a.getType();if(!c("nullthrows")(document.documentElement).contains(e))return;if(f==="touchend"&&j){a=a.getTouch();var g=a.clientX;a=a.clientY;g=Math.sqrt(Math.pow(j.x-g,2)+Math.pow(j.y-a,2));j=null;if(g>5)return}while(b--){a=h[b];if(!a.isShown())continue;g=a.getContentRoot();if(g==null)throw d("FlowMigrationUtilsForLegacyFiles").invariantViolation("Called MLayer.onClickOrTouchEnd after the layer was already destroyed");if(d("MContextualThing").containsIncludingLayers(g,e))return;g=a.getCausalElement();if(f==="touchend"&&g&&(g.contains(e)||g===e||!a.shouldBlurOnTouchEnd()))continue;if(a.emit("blur")===!1||a.isShown())return}}c("Stratcom").listen("touchstart",null,a);c("Stratcom").listen("click",null,b);c("Stratcom").listen("touchend",null,b);g["default"]=e}),98);