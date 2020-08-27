(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[5],{112:function(n,e,t){"use strict";t.r(e);var a=t(88),r=t(90);e.default=Object(r.a)({id:"popular",title:"Popular Movies",fetchDataCallback:a.c})},87:function(n,e,t){"use strict";var a=t(4),r=t(0),i=t.n(r),c=t(15),o=t(10),u=t.n(o),s=t(1),l=t(8);function d(){var n=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n"]);return d=function(){return n},n}function f(){var n=Object(a.a)(["\n    position: relative;\n    flex: 0 0 17%;\n    display: flex;\n    justify-content: space-around;\n    margin: 1em;\n    transition: transform 0.3s ease;\n    color: white;\n\n    :hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        z-index: 2;\n    }\n\n    @media screen and (max-width: 1440px) {\n        flex: 1 0 15%;\n    }\n    @media screen and (max-width: 720px) {\n        flex: 0 0 25%;\n    }\n    @media screen and (max-width: 540px) {\n        flex: 1 0 33%;\n    }\n"]);return f=function(){return n},n}var m=s.c.div(f()),p=s.c.img(d());e.a=Object(c.b)((function(n,e){var t=u()(n,"movies.data"),a=u()(n,"config.images");return{movie:e.movie||t[e.id]||null,secureBaseUrl:u()(a,"secure_base_url"),posterSize:u()(a,"poster_sizes[3]")}}),null)((function(n){var e=n.movie,t=n.secureBaseUrl,a=n.posterSize,r=Object(l.f)();return i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(m,{onClick:function(){return r.push("/movie/".concat(u()(e,"id")))}},i.a.createElement(p,{src:"".concat(t).concat(a,"/").concat(u()(e,"poster_path"))})))}))},88:function(n,e,t){"use strict";t.d(e,"c",(function(){return f})),t.d(e,"d",(function(){return m})),t.d(e,"b",(function(){return p})),t.d(e,"a",(function(){return g}));var a=t(5),r=t.n(a),i=t(9),c=t(2),o=t(10),u=t.n(o),s=t(26),l=t(27),d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.id,t=n.fetchDataCallback,a=n.isGenre;return function(){var n=Object(i.a)(r.a.mark((function n(i,o){var l,d,f,m,p,g;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==e){n.next=2;break}throw new Error("Missing List ID in getList Action");case 2:if(void 0!==t){n.next=4;break}throw new Error("Missing List callback in getList Action");case 4:return l=o().movies,d=a?u()(l.lists,"genre/".concat(e)):u()(l.lists,e),f=d?d.index:0,m=a?"genre/".concat(e):e,n.prev=8,i({type:s.b,payload:{id:m}}),n.next=12,t(Object(c.a)(Object(c.a)({},a&&{genre:e}),{},{pageIndex:f+1}));case 12:p=n.sent,g=p.results.map((function(n){return n.id})),i({type:s.c,payload:{id:m,list:g,index:p.page}}),i({type:s.e,payload:{movies:p.results}}),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(8),console.log(n.t0),i({type:s.a,payload:{id:m,index:f}});case 22:case"end":return n.stop()}}),n,null,[[8,18]])})));return function(e,t){return n.apply(this,arguments)}}()},f=function(){return d({id:"popular",fetchDataCallback:l.f})},m=function(){return d({id:"topRated",fetchDataCallback:l.g})},p=function(){return d({id:"nowPlaying",fetchDataCallback:l.e})},g=function(n){return d({isGenre:!0,id:n,fetchDataCallback:l.b})}},89:function(n,e,t){"use strict";var a=t(4),r=t(0),i=t.n(r),c=t(1),o=t(29),u=t(87),s=t(38),l=t(37);function d(){var n=Object(a.a)(["\n    display: flex;\n    height: 60px;\n    align-items: center;\n    background: transparent;\n    border: 1px solid ",";\n    padding: 1.3em;\n    margin: 1em 0 3em 0;\n    color: white;\n    border-radius: 1em;\n    font-weight: bold;\n    cursor: pointer;\n"]);return d=function(){return n},n}function f(){var n=Object(a.a)(["\n    display: flex;\n    justify-content: center;\n"]);return f=function(){return n},n}function m(){var n=Object(a.a)(["\n    color: ",";\n    font-size: 1.6em;\n    padding-left: 0.6em;\n    width: 100%;\n    font-weight: bold;\n    border-bottom: 1px solid ",";\n"]);return m=function(){return n},n}function p(){var n=Object(a.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    padding: 0.1em;\n    justify-content: center;\n\n    :focus {\n        outline: none;\n        border: none;\n    }\n    @media screen and (max-width: 1140px) {\n        padding: 1.5em;\n    }\n    @media screen and (max-width: 992px) {\n        padding: 1em 0.65em;\n    }\n    @media screen and (max-width: 768px) {\n        padding: 0.35em;\n    }\n    @media screen and (max-width: 576px) {\n        padding: 0.1em;\n    }\n"]);return p=function(){return n},n}var g=c.c.div(p()),b=c.c.div(m(),(function(n){return n.theme.secondary}),(function(n){return n.theme.secondary})),h=c.c.div(f()),v=c.c.button(d(),(function(n){return n.theme.secondary}));e.a=function(n){var e=n.listObject,t=n.fetchDataCallback,a=n.config,c=n.title;Object(r.useEffect)((function(){e||t()}),[e,t]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null,c),e&&"list"in e&&a&&!a.isLoading&&e.list.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null,e.list&&e.list.map((function(n){return i.a.createElement(u.a,{id:n,key:n})}))),i.a.createElement(h,null,i.a.createElement(v,{onClick:function(){t()},disabled:e.isLoading},e.isLoading?i.a.createElement(s.a,{color:o.a.secondary}):"Fetch More"))),e&&a&&(e.isLoading||a.isLoading)&&!e.list&&i.a.createElement(s.a,{color:o.a.secondary}),e&&a&&!e.isLoading&&!a.isLoading&&e.list.length<=0&&i.a.createElement(l.a,{text:"Could Not Find List"}),e&&e.isError&&i.a.createElement(l.a,{text:"Something went wrong :("}))}},90:function(n,e,t){"use strict";var a=t(15),r=t(10),i=t.n(r),c=t(89);e.a=function(n){var e=n.id,t=n.title,r=n.fetchDataCallback;return Object(a.b)((function(n){return{listObject:i()(n,"movies.lists.".concat(e))||null,config:i()(n,"config"),title:t||""}}),(function(n){return{fetchDataCallback:function(){return n(r())}}}))(c.a)}}}]);
//# sourceMappingURL=5.dfc628cc.chunk.js.map