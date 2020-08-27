(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[8],{116:function(e,n,t){"use strict";t.r(n);var r=t(5),a=t.n(r),i=t(9),c=t(28),o=t(4),u=t(0),l=t.n(u),m=t(15),s=t(17),f=t(8),d=t(10),p=t.n(d),v=t(1),h=t(94),b=t.n(h),g=t(27),x=t(29),w=t(37),E=t(38),j=t(87);function O(){var e=Object(o.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    padding: 0.1em;\n    justify-content: center;\n"]);return O=function(){return e},e}function y(){var e=Object(o.a)(["\n    width: 640px;\n    position:relative;\n    overflow:hidden;\n    margin: 1em auto 0 auto;\n\n    @media (max-width: 639px) {\n        width: 100%;\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(o.a)(["\n    margin-top: 1em;\n    font-size: .9em;\n    text-align: justify;\n\n    @media (max-width: ",") {\n        font-size: 0.8em;\n    }\n"]);return k=function(){return e},e}function z(){var e=Object(o.a)(["\n    margin-top: 1em;\n\n    @media (max-width: ",") {\n       font-size: 0.8em;\n    }\n\n    * > a {\n        color: skyblue;\n    }\n\n    > div:last-child {\n        display: flex;\n        overflow: hidden;\n        flex-wrap: wrap;\n    }\n"]);return z=function(){return e},e}function _(){var e=Object(o.a)(["\n    font-weight: 300;\n    font-size: 1em;\n    font-style: italic;\n\n    @media (max-width: ",") {\n        margin-top: 1em;\n        text-align: center;\n        font-size: 1em;\n    }\n"]);return _=function(){return e},e}function B(){var e=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    span {\n        :first-child{\n            margin-right: 1em;\n        }\n\n        svg:first-child{\n            margin-right: 0.3em;\n        }\n\n        > span {\n            font-size: .6em;\n            margin-left: .2em;\n        }\n    }\n"]);return B=function(){return e},e}function F(){var e=Object(o.a)(["\n    display: flex;\n    margin-left: .4em;\n    flex-wrap: wrap;\n\n    > div {\n        font-size: 0.65em;\n        margin: 0.3em;\n        border: 1px solid ",";\n        padding: .3em;\n        border-radius: .5em;\n        font-weight: 300;\n\n        :hover {\n            cursor: pointer\n        }\n\n        @media (max-width: ",") {\n            font-size: .9em;\n            justify-content: center;\n            margin-bottom: .5em;\n        }\n    }\n"]);return F=function(){return e},e}function S(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 2em;\n    font-weight: bold;\n    flex-wrap: wrap;\n\n    @media (max-width: ",") {\n        font-size: 1.6em;\n    }\n\n    > span:first-child {\n        margin-left: 0.2em;\n        font-size: 0.5em;\n    }\n"]);return S=function(){return e},e}function U(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: ",") {\n        flex-direction: column;\n    }\n"]);return U=function(){return e},e}function C(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media (max-width: ",") {\n        flex-direction: column;\n    }\n"]);return C=function(){return e},e}function R(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    color: ",";\n    padding: 1em;\n\n    @media (max-width: ",") {\n        padding: 0 .7em;\n    }\n"]);return R=function(){return e},e}function Y(){var e=Object(o.a)(["\n    position: fixed;\n    top: 0;\n    opacity: 0.2;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    background: url('","original/","') no-repeat center center fixed;;\n    background-size: cover;\n    background-repeat: no-repeat;\n    filter: saturate(0.4);\n    z-index: -1;\n"]);return Y=function(){return e},e}var D=v.c.div(Y(),(function(e){return e.secureBaseUrl}),(function(e){return e.background})),J=v.c.div(R(),(function(e){return e.theme.secondary}),(function(e){return e.theme.breakpoints.sm})),H=v.c.div(C(),(function(e){return e.theme.breakpoints.sm})),T=v.c.div(U(),(function(e){return e.theme.breakpoints.sm})),q=v.c.div(S(),(function(e){return e.theme.breakpoints.sm})),A=v.c.div(F(),(function(e){return e.theme.secondary}),(function(e){return e.theme.breakpoints.sm})),G=v.c.div(B()),I=v.c.div(_(),(function(e){return e.theme.breakpoints.sm})),K=v.c.div(z(),(function(e){return e.theme.breakpoints.sm})),L=v.c.div(k(),(function(e){return e.theme.breakpoints.sm})),M=v.c.div(y()),N=v.c.div(O());n.default=Object(m.b)((function(e,n){var t=p()(e,"movies.data"),r=p()(e,"config.images");return{movieRx:t[n.id]||null,secureBaseUrl:p()(r,"secure_base_url")}}),null)((function(e){var n=e.id,t=e.movieRx,r=e.secureBaseUrl,o=Object(u.useState)(null),m=Object(c.a)(o,2),d=m[0],v=m[1],h=Object(u.useState)(!1),O=Object(c.a)(h,2),y=O[0],k=O[1],z=Object(u.useState)(!1),_=Object(c.a)(z,2),B=_[0],F=_[1],S=Object(f.f)();return Object(u.useEffect)((function(){t&&v(t)}),[t]),Object(u.useEffect)((function(){(function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,Object(g.d)(n);case 4:t=e.sent,v(t),k(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),k(!1),F(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[n,t]),l.a.createElement(l.a.Fragment,null,B&&l.a.createElement(w.a,{text:"Could not find movie"}),d&&d.id.toString()===n&&!B&&l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{background:d.backdrop_path,secureBaseUrl:r}),l.a.createElement(J,null,!y&&l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null,l.a.createElement(T,null,l.a.createElement(q,null,d.title,l.a.createElement("span",null,"(",new Date(d.release_date).getFullYear(),")")),l.a.createElement(A,null,d.genres.map((function(e){return l.a.createElement("div",{key:e.id,onClick:function(){return S.push("/genre/".concat(e.id))}},e.name)})))),l.a.createElement(G,null,l.a.createElement("span",null,l.a.createElement(s.a,{icon:"clock"}),d.runtime,"mins"),l.a.createElement("span",null,l.a.createElement(s.a,{icon:"star"}),d.vote_average,l.a.createElement("span",null,"(",d.vote_count," votes)")))),l.a.createElement(I,null,d.tagline),l.a.createElement(K,null,l.a.createElement("div",null,"Release Date: ",d.release_date),l.a.createElement("div",null,"Homepage: ",d.homepage&&l.a.createElement("a",{href:d.homepage,target:"_blank",rel:"noopener noreferrer"},d.homepage))),l.a.createElement(L,null,d.overview),l.a.createElement(M,null,d.videos&&d.videos.results.length>1&&"YouTube"===d.videos.results[0].site&&l.a.createElement(b.a,{url:"https://www.youtube.com/embed/".concat(p()(p()(d,"videos.results[0]"),"key")),playing:!0,width:"100%",controls:!0})),d.similar&&d.similar.results.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"You may also be interested in"),l.a.createElement(N,null,d.similar.results.map((function(e){return l.a.createElement(j.a,{movie:e,key:e.id})}))))))),y&&l.a.createElement(E.a,{color:x.a.secondary}))}))},87:function(e,n,t){"use strict";var r=t(4),a=t(0),i=t.n(a),c=t(15),o=t(10),u=t.n(o),l=t(1),m=t(8);function s(){var e=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n"]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n    position: relative;\n    flex: 0 0 17%;\n    display: flex;\n    justify-content: space-around;\n    margin: 1em;\n    transition: transform 0.3s ease;\n    color: white;\n\n    :hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        z-index: 2;\n    }\n\n    @media screen and (max-width: 1440px) {\n        flex: 1 0 15%;\n    }\n    @media screen and (max-width: 720px) {\n        flex: 0 0 25%;\n    }\n    @media screen and (max-width: 540px) {\n        flex: 1 0 33%;\n    }\n"]);return f=function(){return e},e}var d=l.c.div(f()),p=l.c.img(s());n.a=Object(c.b)((function(e,n){var t=u()(e,"movies.data"),r=u()(e,"config.images");return{movie:n.movie||t[n.id]||null,secureBaseUrl:u()(r,"secure_base_url"),posterSize:u()(r,"poster_sizes[3]")}}),null)((function(e){var n=e.movie,t=e.secureBaseUrl,r=e.posterSize,a=Object(m.f)();return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(d,{onClick:function(){return a.push("/movie/".concat(u()(n,"id")))}},i.a.createElement(p,{src:"".concat(t).concat(r,"/").concat(u()(n,"poster_path"))})))}))}}]);
//# sourceMappingURL=8.df9213ed.chunk.js.map