(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),o=n(a("VbXa")),l=n(a("8OQS")),s=n(a("pVnL")),d=n(a("q1tI")),c=n(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),d.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function C(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function I(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+l+a+n+t+i+r+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=e.ariaHidden,o=d.default.createElement(L,(0,s.default)({src:t},r,{ariaHidden:i}));return a.length>1?d.default.createElement("picture",null,n(a),o):o},L=d.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:n,src:r},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,I=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:O?1:0,transition:P?"opacity "+v+"ms":"none"},l),R="boolean"==typeof b?"lightgray":b,j={transitionDelay:v+"ms"},_=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&j,{},l,{},f),V={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:E};if(g){var T=g,H=m(g);return d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),R&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&j)}),H.base64&&d.default.createElement(k,{ariaHidden:!0,src:H.base64,spreadProps:V,imageVariants:T,generateSources:x}),H.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,src:H.tracedSVG,spreadProps:V,imageVariants:T,generateSources:C}),this.state.isVisible&&d.default.createElement("picture",null,w(T),d.default.createElement(L,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:S},H,{imageVariants:T}))}}))}if(h){var q=h,M=m(h),B=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete B.display,d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},P&&j)}),M.base64&&d.default.createElement(k,{ariaHidden:!0,src:M.base64,spreadProps:V,imageVariants:q,generateSources:x}),M.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,src:M.tracedSVG,spreadProps:V,imageVariants:q,generateSources:C}),this.state.isVisible&&d.default.createElement("picture",null,w(q),d.default.createElement(L,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:S},M,{imageVariants:q}))}}))}return null},t}(d.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});P.propTypes={resolutions:N,sizes:R,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=P;t.default=j},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},boqk:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})};t.default=n},zOlY:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Ery9"),o=a("tz58"),l=a("vOnD"),s=a("YHeU"),d=l.b.aside.withConfig({displayName:"FixedRightSideBar",componentId:"m6kykr-0"})(["display:none;@media ","{display:block;position:fixed;right:0;top:0;padding:20px;width:",";box-sizing:border-box;}"],s.c.laptop,s.b),c=function(e){var t=e.children;return r.a.createElement(d,null,t)},u=a("boqk"),f=a.n(u),p=a("LUah"),m=l.b.div.withConfig({displayName:"Anchor",componentId:"sc-131zgh7-0"})(["color:",";font-size:14px;padding:3px 0;cursor:pointer;"," ",""],p.f,(function(e){return e.isSelected&&"\n        color: "+p.e+";\n        border-left: 2px solid "+p.e+";\n        "}),(function(e){return e.depth&&"padding-left: "+15*e.depth+"px;"})),g=function(e){var t=e.title,a=e.href,n=e.depth,i=e.isSelected;return r.a.createElement(m,{onClick:function(){return f()(a)},depth:n,isSelected:i},t)},h=l.b.div.withConfig({displayName:"AnchorContainer",componentId:"sc-12tuzo4-0"})(["background-color:",";padding:20px;margin-bottom:20px;max-height:500px;overflow-y:auto;border-radius:4px;"],p.b),b=function(e){var t=e.children;return r.a.createElement(h,null,t)},v=function(e,t){return t>e},y=function(){var e=Object(n.useState)([]),t=e[0],a=e[1],i=Object(n.useState)(null),o=i[0],l=i[1],s=Object(n.useCallback)((function(){var e=window.scrollY||document.documentElement.scrollTop;l(e)}),[]);return Object(n.useEffect)((function(){window.addEventListener("scroll",s)}),[s]),Object(n.useEffect)((function(){var e=document.getElementsByClassName("markdown-header-auto-link");e&&a(function(e){var t=0;return e=[].slice.call(e).map((function(e){var a=parseInt(e.parentElement.nodeName[1]);return 0!==t&&a>t&&(a=t+1),t=a,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:a,top:e.getBoundingClientRect().top}}))}(e))}),[]),r.a.createElement(b,null,t.map((function(e){var t=e.title,a=e.href,n=e.depth,i=e.top;return r.a.createElement(g,{title:t,href:a,depth:n,isSelected:v(i,o),key:"post-anchor-"+t})})))},E=a("9eSz"),w=a.n(E),S=a("UkoX"),C=l.b.div.withConfig({displayName:"PostContainer__BlogPostContainer",componentId:"sc-1pz0omm-0"})(["position:relative;"]),x=l.b.div.withConfig({displayName:"PostContainer__BlogPostFullImage",componentId:"sc-1pz0omm-1"})(["width:100%;height:100vh;position:absolute;top:0;left:0;overflow:hidden;.gatsby-image-wrapper{height:100%;}"," @media ","{display:none;}"],(function(e){return e.isShowContents&&"display:none;"}),s.c.laptop),I=l.b.div.withConfig({displayName:"PostContainer__BlogPostFullImageCover",componentId:"sc-1pz0omm-2"})(["width:100%;height:100%;background-color:rgba(0,0,0,0.5);position:absolute;top:0;left:0;text-align:center;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),O=l.b.div.withConfig({displayName:"PostContainer__BlogPostContentsContainer",componentId:"sc-1pz0omm-3"})(["transition:opacity 1s;opacity:0;@media ","{opacity:1;}",""],s.c.laptop,(function(e){return e.isShowContents&&"opacity: 1;"})),z=l.b.div.withConfig({displayName:"PostContainer__TitleContainer",componentId:"sc-1pz0omm-4"})(["text-align:center;margin:50px 0 100px;h1{font-size:20px;}h4{font-size:15px;font-weight:400;}"]),k=l.b.div.withConfig({displayName:"PostContainer__Content",componentId:"sc-1pz0omm-5"})(["hr{margin:100px 0;}"]),L=function(e){var t=e.title,a=e.date,n=e.image,i=e.html,o=e.isShowContents;return r.a.createElement(C,null,r.a.createElement(x,{isShowContents:o},n&&r.a.createElement(w.a,{fluid:n.childImageSharp.fluid}),r.a.createElement(I,null,r.a.createElement("h1",null,t),r.a.createElement("h2",null,a))),r.a.createElement(S.c,null,r.a.createElement(O,{isShowContents:o},r.a.createElement(z,null,r.a.createElement("h1",null,t),r.a.createElement("h4",null,a)),r.a.createElement(k,{dangerouslySetInnerHTML:{__html:i}}))))},P=(a("INYr"),a("Wbzz")),N=a("nYvK"),R=l.b.div.withConfig({displayName:"RelatedPosts__RelatedPost",componentId:"gx8ytr-0"})(["background-color:",";padding:20px;border-radius:4px;.title{color:",";font-size:16px;}"],p.b,p.f),j=l.b.div.withConfig({displayName:"RelatedPosts__ButtonContainer",componentId:"gx8ytr-1"})(["display:flex;font-size:12px;justify-content:flex-end;margin-top:5px;a{color:",";margin-left:4px;}"],p.f),_=l.b.div.withConfig({displayName:"RelatedPosts__Post",componentId:"gx8ytr-2"})(["a{margin-top:5px;font-size:12px;}"]),V=l.b.div.withConfig({displayName:"RelatedPosts__PageInfo",componentId:"gx8ytr-3"})(["font-size:12px;text-align:center;margin-top:10px;color:",";"],p.f),T=function(e){var t=e.posts,a=e.currentPageNum,n=e.lastPageNum,i=e.prevClickHandler,o=e.nextClickHandler;return r.a.createElement(R,null,r.a.createElement("div",{className:"title"},"Related Post"),r.a.createElement(j,null,r.a.createElement("a",{onClick:i},"이전"),r.a.createElement("a",{onClick:o},"다음")),t.map((function(e){return r.a.createElement(_,{key:"related-post-"+e.id},r.a.createElement(P.a,{to:Object(N.getPathOfPost)(e.id)},"- ",e.title))})),r.a.createElement(V,null,a," / ",n))},H=function(e){return Math.floor(e/5)},q=function(e){var t=e.posts,a=e.currentPostId,i=Object(n.useState)(0),o=i[0],l=i[1];Object(n.useEffect)((function(){l(H(t.findIndex((function(e){return e.id===a}))))}),[t,a]);var s=Object(n.useMemo)((function(){for(var e=[],a=0;a<5;a++){var n=t[5*o+a];n&&e.push(n)}return e}),[t,o]),d=Object(n.useMemo)((function(){return H(t.length-1)}),[t]),c=Object(n.useCallback)((function(){l(0===o?d:o-1)}),[o,d]),u=Object(n.useCallback)((function(){l(o===d?0:o+1)}),[o,d]);return r.a.createElement(T,{posts:s,currentPageNum:o+1,lastPageNum:d+1,prevClickHandler:c,nextClickHandler:u})};a.d(t,"pageQuery",(function(){return M}));t.default=function(e){var t=e.data,a=e.pageContext,l=t.markdownRemark,s=l.frontmatter,d=l.html,u=l.excerpt,f=t.allMarkdownRemark.edges,p=a.postId,m=Object(n.useState)(null),g=m[0],h=m[1],b=Object(n.useMemo)((function(){return f.map((function(e){var t=e.node.frontmatter;return{id:t.id,title:t.title}}))}),[f]),v=Object(n.useCallback)((function(){var e=window.scrollY||document.documentElement.scrollTop;h(e)}),[]),E=g>0;return Object(n.useEffect)((function(){window.addEventListener("scroll",v)}),[v]),Object(n.useEffect)((function(){E&&window.removeEventListener("scroll",v)}),[E,v]),r.a.createElement(i.a,null,r.a.createElement(o.a,{title:s.title,description:u}),r.a.createElement(L,{title:s.title,date:s.date,image:s.image,frontmatter:s,html:d,isShowContents:E}),r.a.createElement(c,null,r.a.createElement(y,null),r.a.createElement(q,{posts:b,currentPostId:p})))};var M="1842295439"}}]);
//# sourceMappingURL=component---src-templates-posts-js-ef4ffd10b1e7827bd685.js.map