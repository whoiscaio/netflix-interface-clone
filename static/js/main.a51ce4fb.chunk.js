(this["webpackJsonpnetflix-interface-clone"]=this["webpackJsonpnetflix-interface-clone"]||[]).push([[0],{75:function(n,A,e){"use strict";e.r(A);var t=e(1),i=e(27),r=e.n(i),a=e(5),o=e.n(a),s=e(8),c=e(33),d=e(2),l=e(28),g=e.n(l).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"94d660a629d9ae773753ee76760166b0",language:"pt-BR"}});function f(n){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(o.a.mark((function n(A){var e,t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get(A);case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var j,m,x,w,I,b,E,B={getCategories:function(){var n=Object(s.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("/discover/tv?with_network=213");case 2:return n.t0=n.sent,n.t1={id:"originals",title:"Originais Netflix",items:n.t0},n.next=6,f("/trending/all/week");case 6:return n.t2=n.sent,n.t3={id:"trending",title:"Recomendados para voc\xea",items:n.t2},n.next=10,f("/movie/top_rated");case 10:return n.t4=n.sent,n.t5={id:"toprated",title:"Em alta",items:n.t4},n.next=14,f("/discover/movie?with_genres=28");case 14:return n.t6=n.sent,n.t7={id:"action",title:"A\xe7\xe3o",items:n.t6},n.next=18,f("/discover/movie?with_genres=35");case 18:return n.t8=n.sent,n.t9={id:"comedy",title:"Com\xe9dia",items:n.t8},n.next=22,f("/discover/movie?with_genres=27");case 22:return n.t10=n.sent,n.t11={id:"horror",title:"Terror",items:n.t10},n.next=26,f("/discover/movie?with_genres=10749");case 26:return n.t12=n.sent,n.t13={id:"romance",title:"Romance",items:n.t12},n.next=30,f("/discover/movie?with_genres=99");case 30:return n.t14=n.sent,n.t15={id:"documentary",title:"Document\xe1rios",items:n.t14},n.abrupt("return",[n.t1,n.t3,n.t5,n.t7,n.t9,n.t11,n.t13,n.t15]);case 33:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},C=e(3),p=Object(d.b)(j||(j=Object(C.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  :root {\n    font-size: 62.5%;\n\n    @media (min-width: 1800px) {\n      font-size: 67.5%;\n    }\n\n    @media (max-width: 1400px) {\n      font-size: 60%;\n    }\n\n    @media (max-width: 800px) {\n      font-size: 55%;\n    }\n\n    @media (max-width: 680px) {\n      font-size: 50%;\n    }\n\n    @media (max-width: 620px) {\n      font-size: 47.5%;\n    }\n\n    @media (max-width: 420px) {\n      font-size: 42.5%;\n    }\n  }\n\n  body {\n    background: ",";\n\n    overflow-x: hidden;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul, ol {\n    list-style-type: none;\n  }\n"])),(function(n){return n.theme.main.black})),u={main:{red:"#e50914",desaturatedRed:"#b81d24",black:"#141414"},text:{white:"#ffffff",gray:"#e5e5e5",darkGray:"#b5b5b5",veryDarkGray:"#353535"}};var Q=d.d.nav(m||(m=Object(C.a)(["\n  position: relative;\n  height: 100%;\n  display: none;\n\n  > a {\n    display: flex;\n    align-items: center;\n\n    &::after {\n      content: '';\n      width: 0;\n      height: 0;\n      border: 5px solid;\n      border-color: #fff transparent transparent;\n      margin-left: 1rem;\n    }\n  }\n\n  .complement {\n    height: 1.3rem;\n  }\n\n  ul {\n    visibility: hidden;\n    opacity: 0;\n    position: absolute;\n    transform: translateX(-20%);\n    transition: all 0.2s;\n    border: 1px solid ",";\n    border-top: 3px solid ",";\n\n    .callout-arrow {\n      position: absolute;\n      top: -1.5rem;\n      left: 50%;\n      transform: translateX(-50%);\n      height: 0;\n      width: 0;\n      border: 7px solid;\n      border-color: transparent transparent #e5e5e5;\n\n      @media (max-width: 800px) {\n        top: -1.8rem;\n      }\n\n      @media (max-width: 620px) {\n        top: -2rem;\n      }\n\n      @media (max-width: 420px) {\n        top: -2.2rem;\n      }\n    }\n  }\n\n  li {\n    text-align: center;\n\n    a {\n      color: ",";\n      display: block;\n      width: 20rem;\n      padding: 1.6rem 0;\n      background: rgba(10, 10, 10, 0.9);\n      transition: background 0.25s ease-in;\n\n      &.current {\n        color: ",";\n        font-weight: bold;\n        cursor: initial;\n      }\n\n      &:hover {\n        background: rgba(10, 10, 10, 0.95);\n      }\n    }\n  }\n\n  &:hover {\n    ul {\n      visibility: initial;\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.text.veryDarkGray}),(function(n){return n.theme.text.gray}),(function(n){return n.theme.text.darkGray}),(function(n){return n.theme.text.gray})),v=d.d.nav(x||(x=Object(C.a)(["\n  ul {\n    display: flex;\n  }\n\n  li {\n    margin-left: 1.8rem;\n  }\n\n  .selected a {\n    color: ",";\n    font-weight: bold;\n  }\n\n  a:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.text.white}),(function(n){return n.theme.text.darkGray})),O=d.d.div(w||(w=Object(C.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  margin-right: 2.6rem;\n\n  img {\n    height: 2rem;\n  }\n\n  input {\n    width: 0;\n    background: transparent;\n    border: none;\n    font-size: 1.4rem;\n    transition: all 0.25s ease-in;\n    color: #fff;\n\n    &:focus {\n      outline: none;\n      margin-left: 1.2rem;\n    }\n  }\n\n  &.in-use {\n    border: 1px solid ",";\n    padding: 0.6rem;\n\n    input {\n      width: 200px;\n    }\n  }\n"])),(function(n){return n.theme.text.white})),M=d.d.div(I||(I=Object(C.a)(["\n  margin: 0 2.8rem;\n\n  img {\n    height: 2rem;\n  }\n\n  @media (max-width: 800px) {\n    margin-left: 0;\n  }\n\n  @media (max-width: 380px) {\n    display: none;\n  }\n"]))),P=d.d.div(b||(b=Object(C.a)(["\n  position: relative;\n  height: 100%;\n\n  .callout-arrow {\n    position: absolute;\n    left: 25%;\n\n    border: 7px solid;\n    border-color: transparent transparent ",";\n\n    visibility: hidden;\n    opacity: 0;\n    transition: all .2s ease-in;\n  }\n\n  img {\n    height: 4rem;\n    border-radius: 1rem;\n  }\n\n  .main-profile {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    cursor: pointer;\n\n    span {\n      margin-left: 1rem;\n      width: 0;\n      height: 0;\n      border-width: 5px 5px 0 5px;\n      border-style: solid;\n      border-color: #fff transparent transparent transparent;\n      transition: transform 0.367s;\n    }\n  }\n\n  .complement {\n    height: 1.3rem;\n  }\n\n  .dropdown {\n    visibility: hidden;\n    opacity: 0;\n    transition: all .2s ease-in;\n\n    background: rgba(10, 10, 10, .95);\n    position: absolute;\n    transform: translateX(-65%);\n    overflow: hidden;\n    width: 18rem;\n  }\n\n  li {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    color: ",";\n    font-size: 1.4rem;\n\n    padding: 1rem;\n\n    img {\n      margin-right: 1.2rem;\n    }\n\n    &:hover {\n      span, a {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .kids {\n    display: none;\n\n    padding: 1rem;\n    border-top: 1px solid ",";\n\n    &:hover {\n      a {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .options {\n    border-top: 1px solid ",";\n\n    a {\n      font-weight: bold;\n    }\n  }\n\n  &:hover {\n    cursor: hover;\n\n    .main-profile span {\n      transform: rotate(180deg);\n    }\n\n    .dropdown {\n      visibility: initial;\n      opacity: 1;\n    }\n\n    .callout-arrow {\n      visibility: initial;\n      opacity: 1;\n    }\n  }\n\n  @media (max-width: 800px) {\n    .kids {\n      display: block;\n    }\n  }\n"])),(function(n){return n.theme.text.gray}),(function(n){return n.theme.text.white}),(function(n){return n.theme.text.veryDarkGray}),(function(n){return n.theme.text.veryDarkGray})),R=d.d.header(E||(E=Object(C.a)(["\n  padding: 1rem 5rem;\n  display: flex;\n  justify-content: space-between;\n  background: linear-gradient(to bottom, rgba(0,0,0,.7) 10%, rgba(0,0,0,0));\n  position: fixed;\n  width: 100%;\n\n  transition: background .24s ease-in;\n  z-index: 10000;\n\n  a {\n    color: ",";\n    font-size: 1.4rem;\n    transition: color 0.2s ease-in;\n    width: 100%;\n    height: 100%;\n  }\n\n  .navigation,\n  .info {\n    display: flex;\n    align-items: center;\n  }\n\n  .info {\n    > a {\n      height: initial;\n\n      @media (max-width: 800px) {\n        display: none;\n      }\n    }\n  }\n\n  .logo {\n    height: 5rem;\n    margin-right: 2.5rem;\n  }\n\n  &.no-transparency {\n    background-color: ",";\n  }\n\n  @media (max-width: 1100px) {\n    nav:first-of-type {\n      display: none;\n    }\n\n    nav:last-of-type {\n      display: initial;\n    }\n  }\n\n  @media (max-width: 600px) {\n    #search-bar {\n      display: none;\n    }\n  }\n"])),(function(n){return n.theme.text.gray}),(function(n){return n.theme.main.black})),D=e.p+"static/media/logo.f4070143.png",H=e(0);function k(){return Object(H.jsx)(v,{children:Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{className:"selected",children:Object(H.jsx)("a",{href:"#",children:"In\xedcio"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"S\xe9ries"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Filmes"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Bombando"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Minha Lista"})})]})})}function G(){return Object(H.jsxs)(Q,{children:[Object(H.jsx)("a",{href:"#",children:"Navegar"}),Object(H.jsx)("div",{className:"complement"}),Object(H.jsxs)("ul",{children:[Object(H.jsx)("div",{className:"callout-arrow"}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{className:"current",href:"#",children:"In\xedcio"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"S\xe9ries"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Filmes"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Bombando"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Minha Lista"})})]})]})}var Y=function(n){var A=n.searchRef;return Object(H.jsxs)(O,{id:"search-bar",ref:A,children:[Object(H.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(H.jsx)("input",{type:"text",placeholder:"T\xedtulos, gente e g\xeaneros"})]})};function U(){return Object(H.jsxs)(M,{children:[Object(H.jsx)("img",{src:"data:image/png;base64,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",alt:"Notifications Bell"}),Object(H.jsx)("div",{className:"notifications-exhibition"})]})}var y=e.p+"static/media/anne.338e4263.png",N=e.p+"static/media/bea.6ac77c7d.png",L=e.p+"static/media/mason.976d0773.png";function J(){return Object(H.jsxs)(P,{children:[Object(H.jsxs)("div",{className:"main-profile",children:[Object(H.jsx)("img",{src:y,alt:"Current Profile"}),Object(H.jsx)("span",{})]}),Object(H.jsx)("div",{className:"complement",children:Object(H.jsx)("div",{className:"callout-arrow"})}),Object(H.jsxs)("div",{className:"dropdown",children:[Object(H.jsxs)("ul",{children:[Object(H.jsxs)("li",{children:[Object(H.jsx)("img",{src:N,alt:"Other Profile 1"}),Object(H.jsx)("span",{children:"Bea"})]}),Object(H.jsxs)("li",{children:[Object(H.jsx)("img",{src:L,alt:"Other Profile 2"}),Object(H.jsx)("span",{children:"Mason"})]}),Object(H.jsx)("li",{children:Object(H.jsx)("span",{children:"Gerenciar perfis"})})]}),Object(H.jsx)("div",{className:"kids",children:Object(H.jsx)("a",{href:"#",children:"Infantil"})}),Object(H.jsx)("div",{className:"options",children:Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Conta"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Centro de ajuda"})}),Object(H.jsx)("li",{children:Object(H.jsx)("a",{href:"#",children:"Sair da Netflix"})})]})})]})]})}var z,S,K,T,X,F=function(n){var A=n.searchRef,e=n.headerRef;return Object(H.jsxs)(R,{ref:e,children:[Object(H.jsxs)("div",{className:"navigation",children:[Object(H.jsx)("img",{className:"logo",src:D,alt:"Netflix Logo"}),Object(H.jsx)(k,{}),Object(H.jsx)(G,{})]}),Object(H.jsxs)("div",{className:"info",children:[Object(H.jsx)(Y,{searchRef:A}),Object(H.jsx)("a",{href:"#",children:"Infantil"}),Object(H.jsx)(U,{}),Object(H.jsx)(J,{})]})]})},V=d.d.div(z||(z=Object(C.a)(["\n  .movie-rows {\n    margin: -10rem 0 0 5rem;\n\n    @media (max-width: 750px) {\n      margin-top: -15rem;\n    }\n\n    @media (max-width: 600px) {\n      margin-top: -25rem;\n    }\n\n    @media (max-width: 500px) {\n      margin-top: -30rem;\n    }\n  }\n"]))),Z=d.d.div(S||(S=Object(C.a)(["\n  display: inline-block;\n\n  transform: translateY(25%);\n\n  max-width: 70rem;\n\n  margin-left: 5rem;\n\n  h2 {\n    color: #ffffff;\n    font-size: 4.8rem;\n  }\n\n  p {\n    color: #ffffff;\n    font-size: 2rem;\n    font-weight: 500;\n    line-height: 3rem;\n\n    margin: 2rem 0;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .actions {\n    display: flex;\n\n    @media (max-width: 380px) {\n      flex-direction: column;\n      \n      button {\n        justify-content: center;\n\n        margin: 0 0 2rem;\n\n        &#info {\n          margin-right: 2rem;\n        }\n      }\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    border-radius: .6rem;\n\n    font-size: 2rem;\n    font-weight: 700;\n\n    display: flex;\n    align-items: center;\n\n    padding: 1rem 3rem;\n\n    cursor: pointer;\n\n    img {\n      width: 2.6rem;\n      margin-right: 1rem;\n    }\n\n    &#play {\n      background: #ffffff;\n\n      margin-right: 2rem;\n\n      &:hover {\n        background: #ffffffbf;\n      }\n    }\n\n    &#info {\n      background: #6d6d6eb3;\n      color: #ffffff;\n\n      &:hover {\n        background: #6d6d6e66;\n      }\n    }\n  }\n\n  @media (max-width: 750px) {\n    transform: translateY(0);\n  }\n"]))),q=d.d.div(K||(K=Object(C.a)(["\n  background: linear-gradient(to top, "," 5%, transparent 40%);\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.main.black})),W=d.d.div(T||(T=Object(C.a)(["\n  background: linear-gradient(to right, "," 10%, transparent 60%);\n\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.main.black})),_=d.d.div(X||(X=Object(C.a)(["\n  background: url(",") no-repeat top center;\n  background-size: cover;\n\n  height: 100vh;\n"])),(function(n){return n.background})),$=e.p+"static/media/info.1f8c83f3.png";var nn,An,en,tn,rn,an=function(n){var A=n.item;return Object(H.jsx)(_,{background:"".concat("https://image.tmdb.org/t/p/original").concat(A.backdrop_path),children:Object(H.jsx)(q,{children:Object(H.jsx)(W,{children:Object(H.jsxs)(Z,{children:[Object(H.jsx)("header",{children:Object(H.jsx)("h2",{children:A.name})}),Object(H.jsx)("p",{children:A.overview}),Object(H.jsxs)("div",{className:"actions",children:[Object(H.jsxs)("button",{id:"play",type:"button",children:[Object(H.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAC9AAAAvQBgK2sVQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHZSURBVHic7ZsxL0RBFIU/IhKdjl4tfoGWRE+0Gn9BotJJdFodjZboREtDK/RqjUiIWKPY3GRZy+57b+7Mm+Mkp3jJK+79it3zZu6Ffq0Bd8ArcAWs/PBOsVoGPoDwzefAfMK63HRKf/Pmd+AAmElWnYNuGAzA/ARsA1OJaoyqYQCYH4BNYDxJpZE0CgDzNbCYotgYqgLAfAbM+ZfcrOoACMAbsA9MexfelOoCMD8CW8Ckb/n11RQA8z2w6tpBTTUNwHwBLDj2UVmxAASgAxwBs27dVFBMAOZnYIdMg5QHAHOWQcoTgDmrIJUCgDmLIJUSQCCDIJUagDlZkMoFgNk9SOUGwOwWpHIFEHAKUjkDMEcNUm0AYI4SpNoEwNxokGojAHMjQarNAAINBKm2AzBXDlKlADCPHKRKA2AeOkiVCiDQvdrbBcZUAZg3ehvO6jTGSeu9D4oAvkgRwHHvw0SqKhKoA+wBh7+9VOqPoOzfoGwQko3C0h9Dsp/Dsgciskdisoei0sfishcjsldjspej0tfjsgMSsiMyskNSsmNy0oOSsqOyssPSsuPyyYNMXf2vzDB641kFmbr6X5vj78aLXpw8YXDjEquzS4gvT0N3ff4WeAEuKXx9/hMPUyys99cGdQAAAABJRU5ErkJggg==",alt:"Play"}),"Assistir"]}),Object(H.jsxs)("button",{id:"info",type:"button",children:[Object(H.jsx)("img",{src:$,alt:"Info"}),"Mais informa\xe7\xf5es"]})]})]})})})})},on=e(6),sn=e(32),cn=e.n(sn),dn=d.d.button(nn||(nn=Object(C.a)(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n\n  background: #14141465;\n  border: 0;\n\n  padding: 3rem;\n\n  cursor: pointer;\n  transition: background .1s ease-in;\n  z-index: 1000;\n\n  ","\n  \n  img {\n    width: 2rem;\n    transform: ",";\n  }\n\n  &:hover {\n    background: #141414b3;\n  }\n"])),(function(n){return n.inverted?Object(d.c)(An||(An=Object(C.a)(["\n      right: 98.5%;\n    "]))):Object(d.c)(en||(en=Object(C.a)(["\n      right: 0;\n    "])))}),(function(n){return n.inverted?"rotate(180deg)":"initial"})),ln=d.d.div(tn||(tn=Object(C.a)(["\n  background: red;\n\n  margin-right: 2rem;\n\n  cursor: pointer;\n  transition: transform .24s ease-out;\n\n  img {\n    border-radius: .4rem;\n\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),gn=d.d.div(rn||(rn=Object(C.a)(["\n  position: relative;\n\n  margin-bottom: 5rem;\n\n  header {\n    margin-bottom: 2rem;\n  }\n\n  h3 {\n    color: #fff;\n    font-size: 2.8rem;\n  }\n"])));var fn=function(n){var A=n.movie.poster_path;return Object(H.jsx)(ln,{children:Object(H.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(A),alt:"Movie Poster"})})};function hn(n){var A=n.onClick,e=n.style,t=n.inverted;return Object(H.jsx)(dn,{type:"button",onClick:A,style:Object(on.a)(Object(on.a)({},e),{},{display:"block"}),inverted:t,children:Object(H.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmAQoTDAWcqz1BAAAZkElEQVR42u3dW8jlVf3H8fV7dGZ0ZtSmNNEsM3FKEDNLTSI18y+lEmiJ6UV0E3kTJAlBdDChoxlB3RgiGYhRNIZplEOpSGAZoiKeRiMz1EE8lDOVjrPX/2JS5/Ac9t7P3nv91ne9XtD9dx4vPu9Zez9Tl2BMefDmN6d0yimpe+97U16/PnVHHZXSgQemtHp1SgcckNKWLSlt3ZrSc8+l9OijKT/ySEr33pvSbbd1c088Ufp+AGBIOR9xRB58+cs533dfzoNBHtfgscfy4LvfzYNjjy39ZwIAFpDzhz+cBxs3Lmv0F/SXv+TB+efnPDdX+s8JAKSU8uCkk/LgzjsnP/rzeeihPDjnnNJ/ZgBoVs5veEPOV1+d8/btsxn/nd14Yx689a2lfwYA0JQ8eN/78uDRR2c//Dt74YU8+MQnSv8sAKAJefCZz+T88stlx/9Vg0HO3/hGzl1X+ucCAGHl/MUvTudLfst17bV5sGJF6Z8PAISTB1dcUXrmF7dhgwgAgAnKg29+s/S8D+emm/Jg1arSPy8AqF494y8CAGAi6ht/EQAAy1Lv+IsAABhL/eMvAgBgJHHGXwQAwFDijb8IAIBFxR1/EQAA84o//iIAAHbRzviLAABIKbU4/iIAgMa1O/4iAIBG5fytb5We334QAQA0wvjvTgQAEJzxX4gIACCoPLjyytIz228bNuTBihWl/zsBwMTkfPnlpee1Dl4CAAgi54svLj2rdREBAFQu59NPz3n79tKTWh8fBwB0pQ9gPHlw0EGpu+eelA49tPQtdbr55pQ//vFu7qWXSl8CUMJc6QMYU3fVVcZ/Oc4+O3XXX+8lAGiVF4AK5cH//V/qbrml9B0xeAkA2iQAKpMHK1ak7v77U1q/vvQtcdxwQ8oXXNDNbdtW+hKAWfERQHUuvND4T9q556buhhv8dgDQEi8AFcm561K+++7UHXdc6Vti8nEA0A4vAFU57TTjP02+GAi0QwDUJF90UekT4vNxANAGHwFUIg9Wrkzd00+ntG5d6Vva4IuBQGxeAKpx4onGf5a8BACxCYBadB/8YOkT2nP22an75S9FABCRAKjGySeXvqBNvhgIxCQAqvGud5W+oF0+DgDi8SXACuTB3nunbuvWlFauLH1L2/w7AUAcXgBq0B10kPHvAx8HAHEIgBrktWtLn8CrfBwAxCAAqrB6dekL2JmXAKB+AqAG3SuvlD6B3XkJAOomAGqQt2wpfQLz8e8EAPUSAFV44YXSF7AQHwcAdfJrgJXI+dlnU3rjG0vfwUL8iiBQFy8AtcibNpU+gcX4OACoiwCoRXfvvaVPYCk+DgDqIQBqke+4o/QJDMNvBwB1EADVuP320hcwLC8BQP8JgEp0c088kdJdd5W+g2F5CQD6TQBU5frrS1/AKHwxEOgvvwZYkTw4+ODUPf54SgalLjfckPIFF3Rz27aVvgTgVV4AKtLNbd6c8k9/WvoORuXjAKB/vABUJg/Wr0/dAw+ktNdepW9hVF4CgP7wAlCZbu6RR1L68Y9L38E4vAQA/eEFoEI5r1uX8iOPpO7AA0vfwjj8s8FAeV4AKtR1zz+fus9/vvQdjMu/EwCUJwAq1XXXXZfST35S+g7G5eMAoCwfAVQs5zVrUvrjH1N697tL38K4fDEQKEMAVC7nQw7ZEQFHHFH6FsblOwHA7PkIoHJd99RTKX/kIylt3lz6FsblOwHA7HkBCCLnd74zpVtvTemQQ0rfwri8BACzIwACEQERiABgNgRAMCIgAhEATJ8ACEgERCACgOkSAEGJgAhEADA9AiAwERCBCACmQwAEJwIiEAHA5AmABoiACEQAMFkCoBEiIAIRAEyOAGiICIhABACTIQAaIwIiEAHA8gmABomACEQAsDwCoFEiIAIRAIxPADRMBEQgAoDxCIDGiYAIRAAwOgGACAhBBACjEQCklERADCIAGJ4A4DUiIAIRAAxHALALERCBCACWJgDYgwiIQAQAixMAzEsERCACgIUJABYkAiIQAcD8BACLEgERiABgTwKAJYmACEQAsCsBwFBEQAQiAHidAGBoIiACEQDsIAAYiQiIQAQAAoAxiIAIRAC0TgAwFhEQgQiAlgkAxiYCIhAB0CoBwLKIgAhEALRIALBsIiACEQCtEQBMhAiIQARASwQAEyMCIhAB0AoBwESJgAhEALRAADBxIiACEQDRCQCmQgREIAIgMgHA1IiACEQARCUAmCoREIEIgIgEAFMnAiIQARCNAGAmREAEIgAiEQDMjAiIQARAFAKAmRIBEYgAiEAAMHMiIAIRALUTABQhAiIQAVAzAUAxIiACEQC1EgAUJQIiEAFQIwFAcSIgAhEAtREA9IIIiEAEQE0EAL0hAiIQAVALAUCviIAIRADUQADQOyIgAhEAfScA6CUREIEIgD4TAPSWCIhABEBfCQB6TQREIAKgjwQAvScCIhAB0DcCgCqIgAhEAPSJAKAaIiACEQB9IQCoigiI4De/Sfm880QAlCUAqI4IiEAEQGkCgCqJgAhEAJQkAKiWCIhABEApAoCqiYAIRACUIACongiIQATArAkAQhABEYgAmCUBQBgiIAIRALMiAAhFBEQgAmAWBADhiIAIRABMmwAgJBEQgQiAaRIAhCUCIhABMC0CgNBEQAQiAKZBABCeCIhABMCkCQCaIAIiEAEwSQKAZoiACEQATIoAoCkiIAIRAJMgAGiOCIhABMByCQCaJAIiEAGwHAKAZomACEQAjEsA0DQREIEIgHEIAJonAiIQATAqAQBJBMQgAmAUAgD+RwREIAJgWAIAdiICIhABMAwBALsRARGIAFiKAIB5iIAIRAAsRgDAAkRABCIAFiIAYBEiIAIRAPMRALAEERCBCIDdCQAYggiIQATAzgQADEkERCAC4FUCAEYgAiIQAZCSAICRiYAIRAAIABiDCIhABNA2AQBjEgERiADaJQBgGURABCKANs2VPgBq1nUPP5zShz6U0pNPlr6FcZ11Vuo2bMiDVatKXwKz5AUAJmDHS8Af/pDSoYeWvoVxeQmgLQIAJkQERCACaIcAgAkSARGIANogAGDCREAEIoD4BABMgQiIQAQQmwCAKREBEYgA4hIAMEUiIAIRQEwCAKZMBEQgAohHAMAMiIAIRACxCACYEREQgQggDgEAMyQCIhABxCAAYMZEQAQigPoJAChABEQgAqibAIBCREAEIoB6CQAoSAREIAKokwCAwkRABCKA+ggA6AEREIEIoC4CAHpCBEQgAqiHAIAeEQERiADqIACgZ0RABCKA/hMA0EMiIAIRQL8JAOgpERCBCKC/BAD0mAiIQATQTwIAek4ERCAC6B8BABUQARGIAPpFAEAlREAEIoD+EABQEREQgQigHwQAVEYERCACKE8AQIVEQAQigLIEAFRKBEQgAihHAEDFREAEIoAyBABUTgREIAKYPQEAAYiACEQAsyUAIAgREIEIYHYEAAQiAiIQAcyGAIBgREAEIoDpEwAQkAiIQAQwXQIAghIBEYgApkcAQGAiIAIRwHQIAAhOBEQgApg8AQANEAERiAAmSwBAI0RABCKAyREA0BAREIEIYDIEADRGBEQgAlg+AQANEgERiACWRwBAo0RABCKA8QkAaJgIiEAEMB4BAI0TARGIAEYnAAAREIIIYDQCAEgpiYAYRADDEwDAa0RABCKA4QgAYBciIAIRwNIEALAHERCBCGBxAgCYlwiIQASwMAEALEgERCACmJ8AABYlAiIQAexJAABLEgERiAB2JQCAoYiACEQArxMAwNBEQAQigB0EADASERCBCEAAAGMQARGIgNYJAGAsIiACEdAyAQCMTQREIAJaJQCAZREBEYiAFgkAYNlEQAQioDUCAJgIERCBCGiJAAAmRgREIAJaIQCAiRIBEYiAFggAYOJEQAQiIDoBAEyFCIhABEQmAICpEQERiICoBAAwVSIgAhEQkQAApk4ERCACohEAwEyIgAhEQCQCAJgZERCBCIhirvQBQDu67uGHUzr99JSefLL0LYzrrLNSd+21Oc/Zj8r5DwjMlAiI4IILUvrhD0tfwfL4CAAoIuejj07p1ltTOvjg0rcwpnzxxd3cVVeVPoPxCACgGN8JqN1//5vy+9/fzd17b+lLGJ0AAIryElC7++9P+fjju7lt20pfwmh8BwAoqusefDClU0/1nYBaHXNM6j73udJXMDovAEAveAmo2YsvpnzUUd3c5s2lL2F4XgCAXvASULP99kvdJZeUvoLReAEAesUXA2v1r3+ldPjhXffCC6UvYTheAIBe2fHvBJxxRkqek+uy//4pf+pTpa9geAIA6B0fB9TqootKX8DwfAQA9JYvBtYm55SOOqrrHnus9CUszQsA0FteAmrTdSmfcUbpKxiOAAB6zf93QGW6U08tfQLDEQBA7/liYE0+8IHSFzAc3wEAquFXBGuQc0pr13bdv/9d+hIW5wUAqIaPA2rQdSkfeWTpK1iaAACq4uOACnSHHVb6BJYmAIDq+O2Anstr1pQ+gaUJAKBKr78EPPNM6VvYTbfffqVPYGkCAKjY29+e0v77l76C3eTt20ufwNIEAFClnD/60ZRuuCGlVatK38Juui1bSp/A0gQAUJ2cP/axlH71K+PfU/nFF0ufwNIEAFCVHX/z//nPU1q5svQtLORvfyt9AUvzDwEB1fDsX4NXXkl59epubtu20pewOC8AQBU8+9di0ybjXwcBAPSeZ/+a3HFH6QsYjgAAes2zf21uv730BQzHdwCA3trx7P+LX/ibfy22bUv5LW/p5vzjTDXwAgD0kmf/Gt1yi/GvhwAAescX/mp13XWlL2B4PgIAesVn/rX6xz9SPvLIbu7ll0tfwnC8AAC9Yfwrlq+4wvjXxQsA0Au+8Fezxx9P6eiju+4//yl9CcPzAgAU5wt/tbvkEuNfHy8AQFH+5l+7m2/uunPOKX0FoxMAQDE+86/d5s0pHXdc1z39dOlLGJ2PAIAi/Kpf7V55JaVPftL410sAADPnM//a5ZzSZz/bdbfdVvoSxicAgJnyN/8IvvSlrrvmmtJXsDwCAJgZf/OP4LLLuu7b3y59BcvnS4DATPjCXwSXXdZ1X/966SuYDAEATJ3xj8D4RyMAgKky/hEY/4gEADA1xj8C4x+VAACmwvhHYPwjEwDAxBn/CIx/dAIAmCjjH4Hxb4EAACbG+Edg/FshAICJMP4RGP+WCABg2Yx/BMa/NQIAWBbjH4Hxb5EAAMZm/CMw/q0SAMBYjH8Exr9lAgAYmfGPwPi3TgAAIzH+ERh/BAAwAuMfgfFnBwEADMX4R2D8eZ0AAJZk/CMw/uxKAACLMv4RGH/2JACABRn/CIw/8xMAwLyMfwTGn4UJAGAPxj8C48/iBACwC+MfgfFnaQIAeI3xj8D4MxwBAKSUjH8Mxp/hCQDA+Idg/BmNAIDGGf8IjD+jEwDQMOMfgfFnPAIAGmX8IzD+jE8AQIOMfwTGn+URANAY4x+B8Wf5BAA0xPhHYPyZDAEAjTD+ERh/JkcAQAOMfwTGn8kSABCc8Y/A+DN5AgACM/4RGH+mQwBAUMY/AuPP9AgACMj4R2D8mS4BAMEY/wiMP9MnACAQ4x+B8Wc2BAAEYfwjMP7MjgCAAIx/BMaf2RIAUDnjH4HxZ/YEAFTM+Edg/ClDAECljH8Exp9yBABUyPhHYPwpSwBAZYx/BMaf8gQAVMT4R2D86QcBAJUw/hEYf/pDAEAFjH8Exp9+EQDQc8Y/AuNP/wgA6DHjH4Hxp58EAPSU8Y/A+NNfAgB6yPhHYPzpNwEAPWP8IzD+9J8AgB4x/hEYf+ogAKAnjH8Exp96CADoAeMfgfGnLgIACjP+ERh/6iMAoCDjH4Hxp04CAAox/hEYf+olAKAA4x+B8aduAgBmzPhHYPypnwCAGTL+ERh/YhAAMCPGPwLjTxwCAGbA+Edg/IlFAMCUGf8IjD/xCACYIuMfgfEnJgEAU2L8IzD+xCUAYAqMfwTGn9gEAEyY8Y/A+BOfAIAJMv4RGH/aIABgQox/BMafdggAmADjH4Hxpy1zpQ+A2uV81lnGv3bGn/Z4AYBl2DH+GzYY/5oZf9okAGBMxj8C40+7BACMwfhHYPxpmwCAERn/CIw/CAAYgfGPwPhDSgIAhmb8IzD+8CoBAEMw/hEYf9iZAIAlGP8IjD/sTgDAIox/BMYf5iMAYAHGPwLjDwsRADAP4x+B8YfFCADYjfGPwPjDUgQA7MT4R2D8YRgCAP7H+Edg/GFYAgCS8Y/B+MMoBADNM/4RGH8YlQCgacY/AuMP4xAANMv4R2D8YVwCgCYZ/wiMPyyHAKA5xj8C4w/LJQBoivGPwPjDJAgAmmH8IzD+MCkCgCYY/wiMP0ySACA84x+B8YdJEwCEZvwjMP4wDQKAsIx/BMYfpkUAEJLxj8D4wzQJAMIx/hEYf5g2AUAoxj8C4w+zIAAIw/hHYPxhVgQAIRj/CIw/zJIAoHrGPwLjD7MmAKia8Y/A+EMJAoBqGf8IjD+UIgCokvGPwPhDSQKA6hj/CIw/lCYAqIrxj8D4Qx8IAKph/CMw/tAXAoAqGP8IjD/0iQCg94x/BMYf+kYA0GvGPwLjD30kAOgt4x+B8Ye+EgD0kvGPwPhDnwkAesf4R2D8oe8EAL1i/CMw/lADAUBvGP8IjD/UQgDQC8Y/AuMPNREAFGf8IzD+UBsBQFHGPwLjDzUSABRj/CMw/lArAUARxj8C4w81EwDMnPGPwPhD7QQAM2X8IzD+EIEAYGaMfwTGH6IQAMyE8Y/A+EMkAoCpM/4RGH+IRgAwVcY/AuMPEQkApsb4R2D8ISoBwFQY/wiMP0QmAJg44x+B8YfoBAATZfwjMP7QAgHAxBj/CIw/tEIAMBHGPwLjDy0RACyb8Y/A+ENrBADLYvwjMP7QIgHA2Ix/BMYfWiUAGIvxj8D4Q8sEACMz/hEYf2idAGAkxj8C4w8IAEZg/CMw/sAOAoChGP8IjD/wOgHAkox/BMYf2JUAYFHGPwLjD+xJALAg4x+B8QfmJwCYl/GPwPgDCxMA7MH4R2D8gcUJAHZh/CMw/sDSBACvMf4RGH9gOAKAlJLxj8H4A8MTABj/EIw/MBoB0DjjH4HxB0YnABpm/CMw/sB4BECjjH8Exh8YnwBokPGPwPgDyyMAGmP8IzD+wPIJgIYY/wiMPzAZAqARxj8C4w9MjgBogPGPwPgDkyUAgjP+ERh/YPIEQGDGPwLjD0yHAAjK+Edg/IHpEQABGf8IjD8wXQIgGOMfgfEHpk8ABGL8IzD+wGwIgCCMfwTGH5gdARBAzmefvWP8V64sfQvj+trXuu7yy0tfAbRDAFQuD046KaXf/z51a9aUvoVxGX9g9gRAxfJg/frU3XlnSuvWlb6FcRl/oIy50gcwnjxYtSqln/3M+NfM+APl7F36AMbUfe97Kb3nPaXPYFzGHyjLRwAVyoMTTtjx9D/nBadKxh8ozwtAZXKem0vpRz8y/rUy/kA/GJHqXHhhSieeWPoKxmH8gf7wEUBl8uDuu1Pns//6GH+gX7wAVCQPzjzT+NfI+AP9IwBq0n3606VPYFTGH+gnHwFUIuc1a1J6+umU1q4tfQvDMv5Af3kBqMaZZxr/mhh/oN8EQDVOPbX0BQzL+AP9JwBqkU85pfQJDMP4A3XwHYAK7PjHf7ZuTWmffUrfwmKMP1APLwBVOPxw4993xh+oiwCowhFHlL6AxRh/oD4CoAoHHFD6AhZi/IE6CYAaZL/+10/GH6iXAKhBt2JF6RPYnfEH6iYAqrB1a+kL2JnxB+onAKqwZUvpC3iV8QdiEABVeOqp0heQkvEHIvEPAVUgD/bbL3X//GdKnf9exRh/IBYvABXo5l580StAScYfiEcAVONPfyp9QZuMPxCTAKjG7beXvqA9xh+ISwBUY+PG0he0xfgDsQmASnTdAw+kdN99pe9og/EH4hMAVbnuutIXxGf8gTb4tbKK5PymN6X8+OOpW7Om9C0xGX+gHV4AKtJ1zz6bumuuKX1HTMYfaIsXgMrkwdvelrqHHkpp331L3xKH8Qfa4wWgMt3c3/+e0ne+U/qOOIw/AJXIeZ99ct60KbNMX/1q6f+WADCSPDjhhJxfeqn0hNbL+ANQqTy49NLSM1on4w9AxXLuupyvvrr0nNbF+AMQQM577ZXzhg2lZ7UOxh+AQHLed9882Lix9Lz2m/EHICARsBjjD0BgebBqVc433VR6bvvF+APQABGwM+MPQENEgPEHoFFtR4DxB6BhbUaA8QeAxiLA+APAa9qIAOMPAHuIHQHGHwAWFDMCjD8ALClWBBh/ABhajAgw/gAwsrojwPgDwNh2RMCvf116zo0/AMxYXRFg/AFgYnLed9+cf/vb0vO+uK98pfTPCQDCyYOVK3O+/vrSM7+nwSDnL3yh9M8HAMLKeW4u5x/8oPTkv27r1jw4//zSPxcAaELO556b83PPFd3+wYMP5sGxx5b+WQBAU3J+xzty/t3vZr/827blwfe/n/Pq1aV/BgDQrJzPOy8PHn10Nn/r37gxD445pvSfGQBIKeXB3nvnfNFFOd9zz+RXf/v2nG+8MeeTTy795wQAFpDz8cfnwZVX5vzXvy5r9Ad33ZUHl16aB4cdVvrPBNCirvQB1CsPDj88daedlvKxx6Zu/fqUjjwypXXrUlq7dsf/nn8+pa1bU37mmdRt2pTSpk0p/fnPKd1xR9c9/3zp+wFa9v8EUW5diNpfRwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMS0xMFQxOToxMjowNSswMDowMP9RL60AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDEtMTBUMTk6MTI6MDUrMDA6MDCODJcRAAAAAElFTkSuQmCC",alt:"Arrow"})})}hn.defaultProps={inverted:!1};var jn=hn;var mn,xn=function(n){var A=n.category,e=A.title,t=A.items,i={infinite:!0,speed:500,slidesToShow:7,slidesToScroll:7,nextArrow:Object(H.jsx)(jn,{}),prevArrow:Object(H.jsx)(jn,{inverted:!0}),responsive:[{breakpoint:1400,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1100,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:800,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}}]};return Object(H.jsxs)(gn,{children:[Object(H.jsx)("header",{children:Object(H.jsx)("h3",{children:e})}),Object(H.jsx)(cn.a,Object(on.a)(Object(on.a)({},i),{},{children:t.map((function(n){return Object(H.jsx)(fn,{movie:n})}))}))]})},wn=(e(73),e(74),d.d.footer(mn||(mn=Object(C.a)(["\n  color: #fff;\n\n  text-align: center;\n  \n  span {\n    font-size: 1.4rem;\n  }\n\n  .socials {\n    display: flex;\n    justify-content: center;\n\n    margin: 2rem 0;\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n\n    border-radius: 1.4rem;\n\n    padding: 1rem;\n  }\n\n  img {\n  }\n\n  #linkedin {\n    background: #0A66C2;\n  }\n\n  #github {\n    background: #381B6E;\n\n    margin-right: 1rem;\n  }\n"])))),In=e.p+"static/media/github.40ea6fa2.svg",bn=e.p+"static/media/linkedin.bda88351.svg";var En=function(){return Object(H.jsxs)(wn,{children:[Object(H.jsx)("span",{children:"Desenvolvido por Caio Lima"}),Object(H.jsxs)("div",{className:"socials",children:[Object(H.jsx)("a",{id:"github",href:"https://github.com/whoiscaio",target:"_blank",rel:"noreferrer",children:Object(H.jsx)("img",{src:In,alt:"Github"})}),Object(H.jsx)("a",{id:"linkedin",href:"https://linkedin.com/in/lima-caio",target:"_blank",rel:"noreferrer",children:Object(H.jsx)("img",{src:bn,alt:"Linkedin"})})]})]})};var Bn=function(){var n=Object(t.useState)(),A=Object(c.a)(n,2),e=A[0],i=A[1],r=Object(t.useRef)(null),a=Object(t.useRef)(null);function l(){0!==window.scrollY?a.current.classList.add("no-transparency"):a.current.classList.remove("no-transparency")}return Object(t.useEffect)((function(){Object(s.a)(o.a.mark((function n(){var A;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.getCategories();case 2:A=n.sent,i(A);case 4:case"end":return n.stop()}}),n)})))()}),[]),Object(t.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}}),[]),Object(H.jsx)(d.a,{theme:u,children:Object(H.jsxs)(V,{onClick:function(n){return function(n,A){var e=n.target,t=A.current,i=t.firstChild,r=t.lastChild;return e!==i||t.classList.contains("in-use")?t.classList.contains("in-use")&&e!==r?(r.value="",t.classList.remove("in-use")):void 0:(r.focus(),t.classList.add("in-use"))}(n,r)},children:[Object(H.jsx)(p,{}),Object(H.jsx)(F,{searchRef:r,headerRef:a}),e&&Object(H.jsx)(an,{item:e[0].items[Math.floor(20*Math.random())]}),Object(H.jsx)("div",{className:"movie-rows",children:e&&e.map((function(n){return Object(H.jsx)(xn,{category:n})}))}),Object(H.jsx)(En,{})]})})};r.a.render(Object(H.jsx)(Bn,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a51ce4fb.chunk.js.map