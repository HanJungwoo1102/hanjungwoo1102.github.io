(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{boqk:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})};t.default=a},zOlY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("9eSz"),i=n.n(l),o=n("XkjI"),c=n("tz58"),u=n("vOnD"),d=u.a.aside.withConfig({displayName:"FixedRightSideBar",componentId:"sc-1ttjtcz-0"})(["position:fixed;right:0;top:60px;"]),s=function(e){var t=e.children;return r.a.createElement(d,null,t)},m=n("boqk"),f=n.n(m),p=u.a.div.withConfig({displayName:"Anchor",componentId:"sc-1r4t7im-0"})(["font-size:14px;"," ",""],(function(e){return e.isSelected&&"font-weight: 600;"}),(function(e){return e.depth&&"margin-left: "+15*(e.depth-2)+"px;"})),h=function(e){var t=e.title,n=e.href,a=e.depth,l=e.isSelected;return r.a.createElement(p,{onClick:function(){return f()(n)},depth:a,isSelected:l},t)},v=function(e,t){return t+window.innerHeight/2>e},E=function(){var e=Object(a.useState)([]),t=e[0],n=e[1],l=Object(a.useState)(null),i=l[0],o=l[1],c=Object(a.useCallback)((function(){var e=window.scrollY||document.documentElement.scrollTop;o(e)}),[]);return Object(a.useEffect)((function(){window.addEventListener("scroll",c)}),[c]),Object(a.useEffect)((function(){var e=document.getElementsByClassName("markdown-header-auto-link");e&&n(function(e){var t=0;return e=[].slice.call(e).map((function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,top:e.getBoundingClientRect().top}}))}(e))}),[]),r.a.createElement("div",null,t.map((function(e){var t=e.title,n=e.href,a=e.depth,l=e.top;return r.a.createElement(h,{title:t,href:n,depth:a,isSelected:v(l,i),key:"post-anchor-"+t})})))},g=n("Wbzz"),w=n("nYvK"),b=function(e){var t=e.relatedPostList;return r.a.createElement("div",null,r.a.createElement("div",null,"RelatedPost"),t.map((function(e){return r.a.createElement(g.a,{to:Object(w.getPathOfPost)(e.id),key:"related-post-"+e.id},e.title)})))};n.d(t,"pageQuery",(function(){return k}));t.default=function(e){var t=e.data,n=t.markdownRemark,l=n.frontmatter,u=n.html,d=n.excerpt,m=t.allMarkdownRemark.edges,f=Object(a.useMemo)((function(){return m.map((function(e){var t=e.node.frontmatter;return{id:t.id,title:t.title}}))}),[m]);return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:l.title,description:d}),r.a.createElement("div",{className:"blog-post-container"},r.a.createElement("div",{className:"blog-post"},l.image&&r.a.createElement(i.a,{fluid:l.image.childImageSharp.fluid}),r.a.createElement("h1",null,l.title),r.a.createElement("h2",null,l.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:u}}))),r.a.createElement(s,null,r.a.createElement(E,null),r.a.createElement(b,{relatedPostList:f})))};var k="1842295439"}}]);
//# sourceMappingURL=component---src-templates-posts-js-6ef9a2aee9417a3f16b8.js.map