/*
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var b=function(){var c=document.createElement("bootstrap"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},d;for(d in f){if(c.style[d]!==undefined){return f[d]}}}();return b&&{end:b}}()})}(window.jQuery),!function(a){var d='[data-dismiss="alert"]',b=function(e){a(e).on("click",d,this.close)};b.prototype.close=function(j){function h(){e.trigger("closed").remove()}var f=a(this),g=f.attr("data-target"),e;g||(g=f.attr("href"),g=g&&g.replace(/.*(?=#[^\s]*$)/,"")),e=a(g),j&&j.preventDefault(),e.length||(e=f.hasClass("alert")?f:f.parent()),e.trigger(j=a.Event("close"));if(j.isDefaultPrevented()){return}e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,h):h()};var c=a.fn.alert;a.fn.alert=function(e){return this.each(function(){var g=a(this),f=g.data("alert");f||g.data("alert",f=new b(this)),typeof e=="string"&&f[e].call(g)})},a.fn.alert.Constructor=b,a.fn.alert.noConflict=function(){return a.fn.alert=c,this},a(document).on("click.alert.data-api",d,b.prototype.close)}(window.jQuery),!function(a){var c=function(e,d){this.$element=a(e),this.options=a.extend({},a.fn.button.defaults,d)};c.prototype.setState=function(d){var j="disabled",g=this.$element,h=g.data(),f=g.is("input")?"val":"html";d+="Text",h.resetText||g.data("resetText",g[f]()),g[f](h[d]||this.options[d]),setTimeout(function(){d=="loadingText"?g.addClass(j).attr(j,j):g.removeClass(j).removeAttr(j)},0)},c.prototype.toggle=function(){var d=this.$element.closest('[data-toggle="buttons-radio"]');d&&d.find(".active").removeClass("active"),this.$element.toggleClass("active")};var b=a.fn.button;a.fn.button=function(d){return this.each(function(){var f=a(this),e=f.data("button"),g=typeof d=="object"&&d;e||f.data("button",e=new c(this,g)),d=="toggle"?e.toggle():d&&e.setState(d)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=b,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(e){var d=a(e.target);d.hasClass("btn")||(d=d.closest(".btn")),d.button("toggle")})}(window.jQuery),!function(a){var c=function(e,d){this.$element=a(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};c.prototype={cycle:function(d){return d||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(f){var d=this.getActiveIndex(),e=this;if(f>this.$items.length-1||f<0){return}return this.sliding?this.$element.one("slid",function(){e.to(f)}):d==f?this.pause().cycle():this.slide(f>d?"next":"prev",a(this.$items[f]))},pause:function(d){return d||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding){return}return this.slide("next")},prev:function(){if(this.sliding){return}return this.slide("prev")},slide:function(m,h){var k=this.$element.find(".item.active"),g=h||k[m](),l=this.interval,j=m=="next"?"left":"right",p=m=="next"?"first":"last",d=this,e;this.sliding=!0,l&&this.pause(),g=g.length?g:this.$element.find(".item")[p](),e=a.Event("slide",{relatedTarget:g[0],direction:j});if(g.hasClass("active")){return}this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var f=a(d.$indicators.children()[d.getActiveIndex()]);f&&f.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(e);if(e.isDefaultPrevented()){return}g.addClass(m),g[0].offsetWidth,k.addClass(j),g.addClass(j),this.$element.one(a.support.transition.end,function(){g.removeClass([m,j].join(" ")).addClass("active"),k.removeClass(["active",j].join(" ")),d.sliding=!1,setTimeout(function(){d.$element.trigger("slid")},0)})}else{this.$element.trigger(e);if(e.isDefaultPrevented()){return}k.removeClass("active"),g.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return l&&this.cycle(),this}};var b=a.fn.carousel;a.fn.carousel=function(d){return this.each(function(){var g=a(this),e=g.data("carousel"),h=a.extend({},a.fn.carousel.defaults,typeof d=="object"&&d),f=typeof d=="string"?d:h.slide;e||g.data("carousel",e=new c(this,h)),typeof d=="number"?e.to(d):f?e[f]():h.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5000,pause:"hover"},a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=b,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(j){var e=a(this),g,d=a(e.attr("data-target")||(g=e.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"")),h=a.extend({},d.data(),e.data()),f;d.carousel(h),(f=e.attr("data-slide-to"))&&d.data("carousel").pause().to(f).cycle(),j.preventDefault()})}(window.jQuery),!function(a){var c=function(e,d){this.$element=a(e),this.options=a.extend({},a.fn.collapse.defaults,d),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.prototype={constructor:c,dimension:function(){var d=this.$element.hasClass("width");return d?"width":"height"},show:function(){var g,e,f,d;if(this.transitioning||this.$element.hasClass("in")){return}g=this.dimension(),e=a.camelCase(["scroll",g].join("-")),f=this.$parent&&this.$parent.find("> .accordion-group > .in");if(f&&f.length){d=f.data("collapse");if(d&&d.transitioning){return}f.collapse("hide"),d||f.data("collapse",null)}this.$element[g](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[g](this.$element[0][e])},hide:function(){var d;if(this.transitioning||!this.$element.hasClass("in")){return}d=this.dimension(),this.reset(this.$element[d]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[d](0)},reset:function(d){var f=this.dimension();return this.$element.removeClass("collapse")[f](d||"auto")[0].offsetWidth,this.$element[d!==null?"addClass":"removeClass"]("collapse"),this},transition:function(h,e,f){var d=this,g=function(){e.type=="show"&&d.reset(),d.transitioning=0,d.$element.trigger(f)};this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.transitioning=1,this.$element[h]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,g):g()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var b=a.fn.collapse;a.fn.collapse=function(d){return this.each(function(){var f=a(this),e=f.data("collapse"),g=a.extend({},a.fn.collapse.defaults,f.data(),typeof d=="object"&&d);e||f.data("collapse",e=new c(this,g)),typeof d=="string"&&e[d]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=b,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(h){var e=a(this),f,d=e.attr("data-target")||h.preventDefault()||(f=e.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""),g=a(d).data("collapse")?"toggle":e.data();e[a(d).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(d).collapse(g)})}(window.jQuery),!function(a){function d(){a(".dropdown-backdrop").remove(),a(g).each(function(){b(a(this)).removeClass("open")})}function b(i){var e=i.attr("data-target"),h;e||(e=i.attr("href"),e=e&&/#/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,"")),h=e&&a(e);if(!h||!h.length){h=i.parent()}return h}var g="[data-toggle=dropdown]",c=function(h){var e=a(h).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){e.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(j){var e=a(this),i,h;if(e.is(".disabled, :disabled")){return}return i=b(e),h=i.hasClass("open"),d(),h||("ontouchstart" in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click",d),i.toggleClass("open")),e.focus(),!1},keydown:function(i){var k,l,j,m,e,h;if(!/(38|40|27)/.test(i.keyCode)){return}k=a(this),i.preventDefault(),i.stopPropagation();if(k.is(".disabled, :disabled")){return}m=b(k),e=m.hasClass("open");if(!e||e&&i.keyCode==27){return i.which==27&&m.find(g).focus(),k.click()}l=a("[role=menu] li:not(.divider):visible a",m);if(!l.length){return}h=l.index(l.filter(":focus")),i.keyCode==38&&h>0&&h--,i.keyCode==40&&h<l.length-1&&h++,~h||(h=0),l.eq(h).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(e){return this.each(function(){var j=a(this),h=j.data("dropdown");h||j.data("dropdown",h=new c(this)),typeof e=="string"&&h[e].call(j)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(h){h.stopPropagation()}).on("click.dropdown.data-api",g,c.prototype.toggle).on("keydown.dropdown.data-api",g+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){var c=function(e,d){this.options=d,this.$element=a(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};c.prototype={constructor:c,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,d=a.Event("show");this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented()){return}this.isShown=!0,this.escape(),this.backdrop(function(){var f=a.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),f&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),f?e.$element.one(a.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")})},hide:function(e){e&&e.preventDefault();var d=this;e=a.Event("hide"),this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented()){return}this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var d=this;a(document).on("focusin.modal",function(f){d.$element[0]!==f.target&&!d.$element.has(f.target).length&&d.$element.focus()})},escape:function(){var d=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&d.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,d=setTimeout(function(){e.$element.off(a.support.transition.end),e.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(d),e.hideModal()})},hideModal:function(){var d=this;this.$element.hide(),this.backdrop(function(){d.removeBackdrop(),d.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(g){var e=this,f=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&f;this.$backdrop=a('<div class="modal-backdrop '+f+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!g){return}d?this.$backdrop.one(a.support.transition.end,g):g()}else{!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,g):g()):g&&g()}}};var b=a.fn.modal;a.fn.modal=function(d){return this.each(function(){var f=a(this),e=f.data("modal"),g=a.extend({},a.fn.modal.defaults,f.data(),typeof d=="object"&&d);e||f.data("modal",e=new c(this,g)),typeof d=="string"?e[d]():g.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=b,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(h){var e=a(this),f=e.attr("href"),d=a(e.attr("data-target")||f&&f.replace(/.*(?=#[^\s]+$)/,"")),g=d.data("modal")?"toggle":a.extend({remote:!/#/.test(f)&&f},d.data(),e.data());h.preventDefault(),d.modal(g).one("hide",function(){e.focus()})})}(window.jQuery),!function(a){var c=function(d,f){this.init("tooltip",d,f)};c.prototype={constructor:c,init:function(k,f,h){var e,j,g,l,d;this.type=k,this.$element=a(f),this.options=this.getOptions(h),this.enabled=!0,g=this.options.trigger.split(" ");for(d=g.length;d--;){l=g[d],l=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):l!="manual"&&(e=l=="hover"?"mouseenter":"focus",j=l=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,a.proxy(this.leave,this)))}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(d){return d=a.extend({},a.fn[this.type].defaults,this.$element.data(),d),d.delay&&typeof d.delay=="number"&&(d.delay={show:d.delay,hide:d.delay}),d},enter:function(g){var e=a.fn[this.type].defaults,f={},d;this._options&&a.each(this._options,function(h,i){e[h]!=i&&(f[h]=i)},this),d=a(g.currentTarget)[this.type](f).data(this.type);if(!d.options.delay||!d.options.delay.show){return d.show()}clearTimeout(this.timeout),d.hoverState="in",this.timeout=setTimeout(function(){d.hoverState=="in"&&d.show()},d.options.delay.show)},leave:function(e){var d=a(e.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!d.options.delay||!d.options.delay.hide){return d.hide()}d.hoverState="out",this.timeout=setTimeout(function(){d.hoverState=="out"&&d.hide()},d.options.delay.hide)},show:function(){var j,e,g,d,h,f,k=a.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(k);if(k.isDefaultPrevented()){return}j=this.tip(),this.setContent(),this.options.animation&&j.addClass("fade"),h=typeof this.options.placement=="function"?this.options.placement.call(this,j[0],this.$element[0]):this.options.placement,j.detach().css({top:0,left:0,display:"block"}),this.options.container?j.appendTo(this.options.container):j.insertAfter(this.$element),e=this.getPosition(),g=j[0].offsetWidth,d=j[0].offsetHeight;switch(h){case"bottom":f={top:e.top+e.height,left:e.left+e.width/2-g/2};break;case"top":f={top:e.top-d,left:e.left+e.width/2-g/2};break;case"left":f={top:e.top+e.height/2-d/2,left:e.left-g};break;case"right":f={top:e.top+e.height/2-d/2,left:e.left+e.width}}this.applyPlacement(f,h),this.$element.trigger("shown")}},applyPlacement:function(f,m){var h=this.tip(),k=h[0].offsetWidth,g=h[0].offsetHeight,l,j,p,d;h.offset(f).addClass(m).addClass("in"),l=h[0].offsetWidth,j=h[0].offsetHeight,m=="top"&&j!=g&&(f.top=f.top+g-j,d=!0),m=="bottom"||m=="top"?(p=0,f.left<0&&(p=f.left*-2,f.left=0,h.offset(f),l=h[0].offsetWidth,j=h[0].offsetHeight),this.replaceArrow(p-k+l,l,"left")):this.replaceArrow(j-g,j,"top"),d&&h.offset(f)},replaceArrow:function(d,g,f){this.arrow().css(f,d?50*(1-d/g)+"%":"")},setContent:function(){var d=this.tip(),f=this.getTitle();d.find(".tooltip-inner")[this.options.html?"html":"text"](f),d.removeClass("fade in top bottom left right")},hide:function(){function d(){var h=setTimeout(function(){e.off(a.support.transition.end).detach()},500);e.one(a.support.transition.end,function(){clearTimeout(h),e.detach()})}var g=this,e=this.tip(),f=a.Event("hide");this.$element.trigger(f);if(f.isDefaultPrevented()){return}return e.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():e.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var d=this.$element;(d.attr("title")||typeof d.attr("data-original-title")!="string")&&d.attr("data-original-title",d.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var d=this.$element[0];return a.extend({},typeof d.getBoundingClientRect=="function"?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())},getTitle:function(){var d,g=this.$element,f=this.options;return d=g.attr("data-original-title")||(typeof f.title=="function"?f.title.call(g[0]):f.title),d},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var d=e?a(e.currentTarget)[this.type](this._options).data(this.type):this;d.tip().hasClass("in")?d.hide():d.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var b=a.fn.tooltip;a.fn.tooltip=function(d){return this.each(function(){var f=a(this),e=f.data("tooltip"),g=typeof d=="object"&&d;e||f.data("tooltip",e=new c(this,g)),typeof d=="string"&&e[d]()})},a.fn.tooltip.Constructor=c,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=b,this}}(window.jQuery),!function(a){var c=function(d,f){this.init("popover",d,f)};c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:c,setContent:function(){var d=this.tip(),g=this.getTitle(),f=this.getContent();d.find(".popover-title")[this.options.html?"html":"text"](g),d.find(".popover-content")[this.options.html?"html":"text"](f),d.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var d,g=this.$element,f=this.options;return d=(typeof f.content=="function"?f.content.call(g[0]):f.content)||g.attr("data-content"),d},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var b=a.fn.popover;a.fn.popover=function(d){return this.each(function(){var f=a(this),e=f.data("popover"),g=typeof d=="object"&&d;e||f.data("popover",e=new c(this,g)),typeof d=="string"&&e[d]()})},a.fn.popover.Constructor=c,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=b,this}}(window.jQuery),!function(a){function c(h,e){var f=a.proxy(this.process,this),d=a(h).is("body")?a(window):a(h),g;this.options=a.extend({},a.fn.scrollspy.defaults,e),this.$scrollElement=d.on("scroll.scroll-spy.data-api",f),this.selector=(this.options.target||(g=a(h).attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}c.prototype={constructor:c,refresh:function(){var e=this,d;this.offsets=a([]),this.targets=a([]),d=this.$body.find(this.selector).map(function(){var g=a(this),h=g.data("target")||g.attr("href"),f=/^#\w/.test(h)&&a(h);return f&&f.length&&[[f.position().top+(!a.isWindow(e.$scrollElement.get(0))&&e.$scrollElement.scrollTop()),h]]||null}).sort(function(f,g){return f[0]-g[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},process:function(){var d=this.$scrollElement.scrollTop()+this.options.offset,l=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,g=l-this.$scrollElement.height(),j=this.offsets,f=this.targets,k=this.activeTarget,h;if(d>=g){return k!=(h=f.last()[0])&&this.activate(h)}for(h=j.length;h--;){k!=f[h]&&d>=j[h]&&(!j[h+1]||d<=j[h+1])&&this.activate(f[h])}},activate:function(f){var d,e;this.activeTarget=f,a(this.selector).parent(".active").removeClass("active"),e=this.selector+'[data-target="'+f+'"],'+this.selector+'[href="'+f+'"]',d=a(e).parent("li").addClass("active"),d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")}};var b=a.fn.scrollspy;a.fn.scrollspy=function(d){return this.each(function(){var f=a(this),e=f.data("scrollspy"),g=typeof d=="object"&&d;e||f.data("scrollspy",e=new c(this,g)),typeof d=="string"&&e[d]()})},a.fn.scrollspy.Constructor=c,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=b,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var d=a(this);d.scrollspy(d.data())})})}(window.jQuery),!function(a){var c=function(d){this.element=a(d)};c.prototype={constructor:c,show:function(){var j=this.element,e=j.closest("ul:not(.dropdown-menu)"),g=j.attr("data-target"),d,h,f;g||(g=j.attr("href"),g=g&&g.replace(/.*(?=#[^\s]*$)/,""));if(j.parent("li").hasClass("active")){return}d=e.find(".active:last a")[0],f=a.Event("show",{relatedTarget:d}),j.trigger(f);if(f.isDefaultPrevented()){return}h=a(g),this.activate(j.parent("li"),e),this.activate(h,h.parent(),function(){j.trigger({type:"shown",relatedTarget:d})})},activate:function(j,e,g){function f(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),j.addClass("active"),h?(j[0].offsetWidth,j.addClass("in")):j.removeClass("fade"),j.parent(".dropdown-menu")&&j.closest("li.dropdown").addClass("active"),g&&g()}var d=e.find("> .active"),h=g&&a.support.transition&&d.hasClass("fade");h?d.one(a.support.transition.end,f):f(),d.removeClass("in")}};var b=a.fn.tab;a.fn.tab=function(d){return this.each(function(){var f=a(this),e=f.data("tab");e||f.data("tab",e=new c(this)),typeof d=="string"&&e[d]()})},a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=b,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var c=function(e,d){this.$element=a(e),this.options=a.extend({},a.fn.typeahead.defaults,d),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};c.prototype={constructor:c,select:function(){var d=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(d)).change(),this.hide()},updater:function(d){return d},show:function(){var d=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:d.top+d.height,left:d.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(e){var d;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(d=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,d?this.process(d):this)},process:function(e){var d=this;return e=a.grep(e,function(f){return d.matcher(f)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(d){return ~d.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(d){var j=[],g=[],h=[],f;while(f=d.shift()){f.toLowerCase().indexOf(this.query.toLowerCase())?~f.indexOf(this.query)?g.push(f):h.push(f):j.push(f)}return j.concat(g,h)},highlighter:function(d){var f=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return d.replace(new RegExp("("+f+")","ig"),function(g,h){return"<strong>"+h+"</strong>"})},render:function(e){var d=this;return e=a(e).map(function(g,f){return g=a(d.options.item).attr("data-value",f),g.find("a").html(d.highlighter(f)),g[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(f){var d=this.$menu.find(".active").removeClass("active"),e=d.next();e.length||(e=a(this.$menu.find("li")[0])),e.addClass("active")},prev:function(d){var g=this.$menu.find(".active").removeClass("active"),f=g.prev();f.length||(f=this.$menu.find("li").last()),f.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(d){var f=d in this.$element;return f||(this.$element.setAttribute(d,"return;"),f=typeof this.$element[d]=="function"),f},move:function(d){if(!this.shown){return}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();break;case 38:d.preventDefault(),this.prev();break;case 40:d.preventDefault(),this.next()}d.stopPropagation()},keydown:function(d){this.suppressKeyPressRepeat=~a.inArray(d.keyCode,[40,38,9,13,27]),this.move(d)},keypress:function(d){if(this.suppressKeyPressRepeat){return}this.move(d)},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break;default:this.lookup()}d.stopPropagation(),d.preventDefault()},focus:function(d){this.focused=!0},blur:function(d){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(d){d.stopPropagation(),d.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(d){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(d.currentTarget).addClass("active")},mouseleave:function(d){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var b=a.fn.typeahead;a.fn.typeahead=function(d){return this.each(function(){var f=a(this),e=f.data("typeahead"),g=typeof d=="object"&&d;e||f.data("typeahead",e=new c(this,g)),typeof d=="string"&&e[d]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=c,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=b,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var d=a(this);if(d.data("typeahead")){return}d.typeahead(d.data())})}(window.jQuery),!function(a){var c=function(e,d){this.options=a.extend({},a.fn.affix.defaults,d),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(e),this.checkPosition()};c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var k=a(document).height(),f=this.$window.scrollTop(),h=this.$element.offset(),e=this.options.offset,j=e.bottom,g=e.top,l="affix affix-top affix-bottom",d;typeof e!="object"&&(j=g=e),typeof g=="function"&&(g=e.top()),typeof j=="function"&&(j=e.bottom()),d=this.unpin!=null&&f+this.unpin<=h.top?!1:j!=null&&h.top+this.$element.height()>=k-j?"bottom":g!=null&&f<=g?"top":!1;if(this.affixed===d){return}this.affixed=d,this.unpin=d=="bottom"?h.top-f:null,this.$element.removeClass(l).addClass("affix"+(d?"-"+d:""))};var b=a.fn.affix;a.fn.affix=function(d){return this.each(function(){var f=a(this),e=f.data("affix"),g=typeof d=="object"&&d;e||f.data("affix",e=new c(this,g)),typeof d=="string"&&e[d]()})},a.fn.affix.Constructor=c,a.fn.affix.defaults={offset:0},a.fn.affix.noConflict=function(){return a.fn.affix=b,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var e=a(this),d=e.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),e.affix(d)})})}(window.jQuery);