(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{boqk:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})};t.default=a},zOlY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("9eSz"),o=n.n(l),i=n("dRzs"),c=n("tz58"),d=n("vOnD"),u=n("LUah"),s=d.b.aside.withConfig({displayName:"FixedRightSideBar",componentId:"sc-1ttjtcz-0"})(["background-color:",";position:fixed;right:20px;top:60px;padding:20px;"],u.b),m=function(e){var t=e.children;return r.a.createElement(s,null,t)},p=n("boqk"),f=n.n(p),h=d.b.div.withConfig({displayName:"Anchor",componentId:"sc-1r4t7im-0"})(["color:",";font-size:14px;"," ",""],u.d,(function(e){return e.isSelected&&"color: "+u.c+";"}),(function(e){return e.depth&&"margin-left: "+15*(e.depth-2)+"px;"})),v=function(e){var t=e.title,n=e.href,a=e.depth,l=e.isSelected;return r.a.createElement(h,{onClick:function(){return f()(n)},depth:a,isSelected:l},t)},E=function(e,t){return t+window.innerHeight/2>e},b=function(){var e=Object(a.useState)([]),t=e[0],n=e[1],l=Object(a.useState)(null),o=l[0],i=l[1],c=Object(a.useCallback)((function(){var e=window.scrollY||document.documentElement.scrollTop;i(e)}),[]);return Object(a.useEffect)((function(){window.addEventListener("scroll",c)}),[c]),Object(a.useEffect)((function(){var e=document.getElementsByClassName("markdown-header-auto-link");e&&n(function(e){var t=0;return e=[].slice.call(e).map((function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,top:e.getBoundingClientRect().top}}))}(e))}),[]),r.a.createElement("div",null,t.map((function(e){var t=e.title,n=e.href,a=e.depth,l=e.top;return r.a.createElement(v,{title:t,href:n,depth:a,isSelected:E(l,o),key:"post-anchor-"+t})})))},g=n("Wbzz"),w=n("nYvK"),k=function(e){var t=e.relatedPostList;return r.a.createElement("div",null,r.a.createElement("div",null,"RelatedPost"),t.map((function(e){return r.a.createElement(g.a,{to:Object(w.getPathOfPost)(e.id),key:"related-post-"+e.id},e.title)})))};n.d(t,"pageQuery",(function(){return S}));t.default=function(e){var t=e.data,n=t.markdownRemark,l=n.frontmatter,d=n.html,u=n.excerpt,s=t.allMarkdownRemark.edges,p=Object(a.useMemo)((function(){return s.map((function(e){var t=e.node.frontmatter;return{id:t.id,title:t.title}}))}),[s]);return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:l.title,description:u}),r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},l.image&&r.a.createElement(o.a,{fluid:l.image.childImageSharp.fluid}),r.a.createElement("h1",null,l.title),r.a.createElement("h2",null,l.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:d}}))),r.a.createElement(m,null,r.a.createElement(b,null),r.a.createElement(k,{relatedPostList:p})))};var S="1842295439"}}]);
//# sourceMappingURL=component---src-templates-posts-js-3e7f9659511b8e9c208b.js.map