(this["webpackJsonpstar-wars-data-app"]=this["webpackJsonpstar-wars-data-app"]||[]).push([[0],{110:function(e,n,t){},212:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,s,l,f,u,b,j,p,d,O,x,m,h,g,v,y,w,k,S,C,I,R,F,D,z=t(0),T=t.n(z),M=t(15),A=t.n(M),E=(t(110),t(111),t(6)),_=t(37),B=t(27),V=t.n(B),P=t(36),G=t(14),J=t(25),L=t.n(J),Y=t(219),N=t(7),Z=t(104),U=t(218),q=t(12),H={1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI"},K=function(e){return H[e]},Q=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")},W=t(217),X=t(221),$={LIST_ITEM:"list-item"},ee=t(220),ne=t(34),te=t.p+"static/media/delete.eda9e0ab.svg",ae=t(3),ce=N.a.div(a||(a=Object(E.a)(["\n  height: 80px;\n  width: 100%;\n  position: relative;\n  margin-bottom: 15px;\n  padding: 15px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 0.5px dotted\n    ",";\n\n  font-family: 'SfDistantGalaxy-Italic';\n\n  transition: all 0.3s;\n\n  &: hover {\n    cursor: pointer;\n    background-color: #ffffff05;\n    font-family: 'SfDistantGalaxy';\n  }\n"])),(function(e){return e.isFavorite?"#7ab6fc70":"#ffe81f70"})),re=N.a.p(c||(c=Object(E.a)(["\n  font-size: 24px;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(e){return e.isFavorite?"#7ab6fc":"#ffe81f"})),ie=Object(N.a)(ne.b)(r||(r=Object(E.a)(["\n  text-decoration: none;\n"]))),oe=N.a.div(i||(i=Object(E.a)(["\n  position: absolute;\n  right: 20px;\n"]))),se=function(e){var n=e.name,t=e.url,a=e.id,c=e.isFavorite,r=e.onDelete,i=Object(ee.a)((function(){return{type:$.LIST_ITEM,item:{name:n,url:t,id:a},collect:function(e){return{isDragging:!!e.isDragging()}}}})),o=Object(G.a)(i,2)[1];return Object(ae.jsx)(ie,{to:"/person/".concat(a),children:Object(ae.jsxs)(ce,{ref:o,isFavorite:c,children:[Object(ae.jsx)(re,{isFavorite:c,children:n}),c&&Object(ae.jsx)(oe,{onClick:function(e){e.preventDefault(),e.stopPropagation(),r(a)},children:Object(ae.jsx)("img",{src:te,alt:"delete icon"})})]})})},le=N.a.div(o||(o=Object(E.a)(["\n  height: 100vh;\n  flex: 1;\n  padding: 0px 30px 0px 30px;\n  background-color: #1f2329;\n  overflow: scroll;\n\n  border-left: ",";\n  border-right: ",";\n\n  transition: all 0.3s;\n"])),(function(e){return e.isOver?"1px solid #7ab6fc":"1px solid transparent"}),(function(e){return e.isOver?"1px solid #7ab6fc":"1px solid transparent"})),fe=N.a.h4(s||(s=Object(E.a)(["\n  font-family: 'Roboto';\n  font-weight: 200;\n"]))),ue=function(){var e=Object(z.useState)([]),n=Object(G.a)(e,2),t=n[0],a=n[1],c=Object(z.useCallback)((function(e){a((function(n){return n.some((function(n){return n.name===e.name}))?n:(localStorage.setItem("favorites",JSON.stringify([].concat(Object(_.a)(n),[e]))),[].concat(Object(_.a)(n),[e]))}))}),[]),r=Object(X.a)((function(){return{accept:$.LIST_ITEM,drop:function(e){return c(e)},collect:function(e){return{isOver:!!e.isOver()}}}}),[]),i=Object(G.a)(r,2),o=i[0].isOver,s=i[1],l=Object(z.useCallback)((function(e){var n=t.filter((function(n){return n.id!==e}));a(n),localStorage.setItem("favorites",JSON.stringify(n))}),[t]);return Object(z.useEffect)((function(){var e=localStorage.getItem("favorites");Object(W.a)(e)||a(JSON.parse(e))}),[]),Object(ae.jsxs)(le,{ref:s,isOver:o,children:[Object(ae.jsx)(fe,{children:"Favorite Characters"}),!Object(Y.a)(t)&&t.map((function(e){return Object(ae.jsx)(se,{name:e.name,url:e.url,id:e.id,isFavorite:!0,onDelete:l},"fav_".concat(e.url))}))]})},be=t.p+"static/media/yoda.c325c1d6.png",je=t.p+"static/media/darth_vader.064876ef.svg",pe=N.a.div(l||(l=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),de=N.a.div(f||(f=Object(E.a)(["\n  width: 64px;\n  height: 64px;\n\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Oe=function(){return Object(ae.jsx)(pe,{children:Object(ae.jsx)(de,{children:Object(ae.jsx)("img",{src:je,alt:"darth wader loader"})})})},xe=t(17),me=t(103),he=t(70),ge=t(102),ve=t.n(ge),ye=[8,896],we=N.a.div(u||(u=Object(E.a)(["\n  margin-bottom: 60px;\n"]))),ke=N.a.div(b||(b=Object(E.a)(["\n  width: 140px;\n  height: 40px;\n  background-color: none;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid #7ab6fc90;\n  border-radius: 6px;\n\n  color: #7ab6fc;\n  font-size: 18px;\n  font-family: 'Roboto';\n  font-weight: 100;\n\n  transition: all 0.3s;\n\n  &: hover {\n    background-color: #7ab6fc;\n    color: #fff;\n  }\n"]))),Se=N.a.div(j||(j=Object(E.a)(["\n  margin-bottom: 20px;\n  flex: 1;\n\n  &:first-of-type {\n    margin-right: 20px;\n  }\n"]))),Ce=N.a.h4(p||(p=Object(E.a)(["\n  font-family: 'Roboto';\n  font-weight: 100;\n"]))),Ie=N.a.span(d||(d=Object(E.a)(["\n  display: block;\n  margin-bottom: 16px;\n\n  font-family: 'Roboto';\n  font-weight: 100;\n  font-size: 20px;\n  color: #ffe81f;\n"]))),Re=N.a.div(O||(O=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 40px;\n"]))),Fe=N.a.div(x||(x=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n"]))),De=N.a.span(m||(m=Object(E.a)(["\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: 300;\n"]))),ze=N.a.div(h||(h=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]))),Te=N.a.div(g||(g=Object(E.a)(["\n  width: 100%;\n  margin-top: 30px;\n  height: 1px;\n  background-color: #999999;\n"]))),Me=function(e){var n=e.species,t=e.films,a=e.allPeople,c=e.setPeopleToDisplay,r=Object(z.useState)(!0),i=Object(G.a)(r,2),o=i[0],s=i[1],l=Object(z.useState)({film:t[0],specie:n[0],yearsRange:ye}),f=Object(G.a)(l,2),u=f[0],b=f[1],j=Object(z.useCallback)((function(){b({film:t[0],specie:n[0],yearsRange:ye})}),[t,b,n]),p=Object(z.useCallback)((function(e,n){if("yearsRange"===n){var t=Object(G.a)(u[n],2),a=t[0],c=t[1],r=e.birthYear;return r>=a&&r<=c}var i=u[n].value;return e[n].includes(i)}),[u]),d=Object(z.useCallback)((function(){var e=Object.keys(u).filter((function(e){return"yearsRange"===e?u[e][0]!==ye[0]||u[e][1]!==ye[1]:"all"!==u[e].value}));if(Object(Y.a)(e))return c(a);var n=a.filter((function(n){return o?e.every((function(e){return p(n,e)})):e.some((function(e){return p(n,e)}))}));c(n)}),[u,a,c,o,p]),O=Object(z.useMemo)((function(){return{control:function(e){return Object(xe.a)(Object(xe.a)({},e),{},{backgroundColor:"#333",outline:"none",border:"none",boxShadow:"none"})},singleValue:function(e){return Object(xe.a)(Object(xe.a)({},e),{},{color:"#fff",fontFamily:"Roboto",fontSize:16})},menu:function(e,n){return Object(xe.a)({},e)},menuList:function(e){return Object(xe.a)(Object(xe.a)({},e),{},{paddingTop:0,paddingBottom:0})},option:function(e,n){return Object(xe.a)(Object(xe.a)({},e),{},{color:n.isSelected?"#333":"#fff",fontFamily:"Roboto",fontSize:16,padding:20,backgroundColor:n.isSelected?"#ffe81f":n.isFocused?"#33333380":"#333",":active":{backgroundColor:!n.isDisabled&&"#33333380"}})}}}),[]);return Object(z.useEffect)((function(){d()}),[d]),Object(ae.jsxs)(we,{children:[Object(ae.jsx)(Ce,{children:"Filter by"}),Object(ae.jsxs)(ze,{children:[Object(ae.jsxs)(Se,{children:[Object(ae.jsx)(Ie,{children:"Specie"}),Object(ae.jsx)(he.a,{value:u.specie,options:n,defaultValue:n[0],isSearchable:!0,onChange:function(e){return b(Object(xe.a)(Object(xe.a)({},u),{},{specie:e}))},styles:O})]}),Object(ae.jsxs)(Se,{children:[Object(ae.jsx)(Ie,{children:"Film"}),Object(ae.jsx)(he.a,{value:u.film,options:t,defaultValue:t[0],isSearchable:!0,onChange:function(e){return b(Object(xe.a)(Object(xe.a)({},u),{},{film:e}))},styles:O})]})]}),Object(ae.jsxs)(Se,{children:[Object(ae.jsx)(Ie,{children:"Birth Year"}),Object(ae.jsx)(me.a,{defaultValue:ye,value:u.yearsRange,min:ye[0],max:ye[1],step:1,reverse:!0,onChange:function(e){b(Object(xe.a)(Object(xe.a)({},u),{},{yearsRange:e}))},trackStyle:[{backgroundColor:"#7ab6fc"}],handleStyle:[{border:"2px solid #7ab6fc"},{border:"2px solid #7ab6fc"}]}),Object(ae.jsxs)(Fe,{children:[Object(ae.jsxs)(De,{children:[u.yearsRange[1]," BBY"]}),Object(ae.jsxs)(De,{children:[u.yearsRange[0]," BBY"]})]})]}),Object(ae.jsxs)(Re,{children:[Object(ae.jsx)(Ie,{children:"Results must match all the filters"}),Object(ae.jsx)(ve.a,{onChange:function(){return s((function(e){return!e}))},checked:o,offColor:"#7ab6fc",onColor:"#ffe81f"})]}),Object(ae.jsx)(ke,{onClick:j,children:"Reset filters"}),Object(ae.jsx)(Te,{})]})},Ae=N.a.div(v||(v=Object(E.a)(["\n  width: 55%;\n  height: 100vh;\n  padding: 0px 50px 50px 50px;\n  margin-right: 40px;\n  background-color: #1f2329;\n  overflow: scroll;\n\n  display: flex;\n  flex-direction: column;\n\n  ",";\n"])),(function(e){return!e.isAllDataFetched&&"justify-content: center"})),Ee=N.a.button(y||(y=Object(E.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  font-family: 'SfDistantGalaxy';\n  font-size: 16px;\n  color: white;\n"]))),_e=N.a.p(w||(w=Object(E.a)(["\n  text-align: center;\n  font-family: 'Roboto';\n  font-size: 20px;\n"]))),Be=N.a.img(k||(k=Object(E.a)(["\n  width: 120px;\n"]))),Ve=N.a.div(S||(S=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  width: 50%;\n"]))),Pe=function(){var e=Object(z.useContext)(qe),n=e.people,t=e.species,a=e.films,c=Object(z.useState)([]),r=Object(G.a)(c,2),i=r[0],o=r[1],s=Object(z.useRef)(null),l=Object(z.useCallback)((function(){return s.current.scrollTo({top:0,behavior:"smooth"})}),[]),f=Object(z.useMemo)((function(){return!Object(Y.a)(n)&&!Object(Y.a)(t)&&!Object(Y.a)(a)}),[a,n,t]);return Object(ae.jsx)(Ae,{ref:s,isAllDataFetched:f,children:f?Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Me,{species:t,films:a,peopleToDisplay:i,allPeople:n,setPeopleToDisplay:o}),i.map((function(e,n){return Object(ae.jsx)(se,{name:e.name,url:e.url,id:e.id},e.url)})),i.length>10&&Object(ae.jsx)(Ee,{onClick:l,type:"button",children:"Scroll to top \u2191"}),0===i.length&&Object(ae.jsxs)(Ve,{children:[Object(ae.jsxs)(_e,{children:["Opps, no characters found... ",Object(ae.jsx)("br",{}),"Try another filter parameters and may the force be with you!"]}),Object(ae.jsx)(Be,{src:be,alt:"yoda icon"})]})]}):Object(ae.jsx)(Oe,{})})},Ge=function(){return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Pe,{}),Object(ae.jsx)(ue,{})]})},Je=N.a.div(C||(C=Object(E.a)(["\n  width: 60%;\n  min-height: 500px;\n  margin: 0 auto;\n  padding: 50px;\n  display: flex;\n  justify-content: ",";\n  background-color: #1f2329;\n\n  border-radius: 15px;\n"])),(function(e){return e.isDataFetched?"flex-start":"center"})),Le=N.a.h2(I||(I=Object(E.a)(["\n  font-family: 'SfDistantGalaxy';\n  color: #ffe81f;\n"]))),Ye=N.a.p(R||(R=Object(E.a)(["\n  font-family: 'SfDistantGalaxy-Italic';\n  font-size: 24px;\n  color: #ffe81f;\n"]))),Ne=N.a.p(F||(F=Object(E.a)(["\n  font-family: 'Roboto';\n  font-size: 20px;\n"]))),Ze=function(){var e=Object(q.f)().id,n=Object(z.useContext)(qe).people,t=Object(z.useState)(null),a=Object(G.a)(t,2),c=a[0],r=a[1],i=Object(z.useCallback)(Object(P.a)(V.a.mark((function t(){var a,c,i,o,s,l,f,u,b,j,p;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.find((function(n){return n.id===e})),c=a.name,i=a.specie,o=a.film,s=a.starships,t.next=3,L.a.all(o.map((function(e){return L.a.get(e)})));case 3:return l=t.sent,t.next=6,L.a.all(i.map((function(e){return L.a.get(e)})));case 6:return f=t.sent,t.next=9,L.a.all(s.map((function(e){return L.a.get(e)})));case 9:u=t.sent,b=l.flatMap((function(e){return e.data})).map((function(e){return"Episode ".concat(K(e.episode_id),": ").concat(e.title)})).join(", "),j=f.flatMap((function(e){return e.data})).map((function(e){return e.name})).join(", "),p=u.flatMap((function(e){return e.data})).map((function(e){return e.name})).join(", "),r({name:c,films:b,species:Object(Y.a)(j)?"Unknown":j,starships:Object(Y.a)(p)?"No starships":p});case 14:case"end":return t.stop()}}),t)}))),[e,n]);return Object(z.useEffect)((function(){Object(Y.a)(n)||i()}),[i,n]),Object(ae.jsx)(Je,{isDataFetched:!Object(W.a)(c),children:Object(W.a)(c)?Object(ae.jsx)(Oe,{}):Object(ae.jsxs)("div",{children:[Object(ae.jsx)(Le,{children:c.name}),Object(ae.jsx)(Ye,{children:"Species: "}),Object(ae.jsx)(Ne,{children:c.species}),Object(ae.jsx)(Ye,{children:"Films: "}),Object(ae.jsx)(Ne,{children:c.films}),Object(ae.jsx)(Ye,{children:"Starships:"}),Object(ae.jsx)(Ne,{children:c.starships})]})})},Ue="https://swapi.dev/api/",qe=T.a.createContext({people:[],species:[],films:[]}),He=N.a.div(D||(D=Object(E.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]))),Ke=function(){var e=Object(z.useState)([]),n=Object(G.a)(e,2),t=n[0],a=n[1],c=Object(z.useState)([]),r=Object(G.a)(c,2),i=r[0],o=r[1],s=Object(z.useState)([]),l=Object(G.a)(s,2),f=l[0],u=l[1],b=Object(z.useCallback)(Object(P.a)(V.a.mark((function e(){var n,t,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array(9).fill(null).map((function(e,n){return"".concat(Ue,"people/?page=").concat(n+1)})),e.next=3,L.a.all(n.map((function(e){return L.a.get(e)})));case 3:t=e.sent,c=t.flatMap((function(e){return e.data.results})).map((function(e){return{name:e.name,url:e.url,birthYear:"unknown"===e.birth_year?e.birth_year:parseInt(e.birth_year),specie:e.species,film:e.films,starships:e.starships,id:Q(e.name)}})),a(c);case 6:case"end":return e.stop()}}),e)}))),[]),j=Object(z.useCallback)(Object(P.a)(V.a.mark((function e(){var n,t,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(Ue,"films"));case 2:n=e.sent,t=n.data,a=t.results.map((function(e){return{label:"Episode ".concat(K(e.episode_id),": ").concat(e.title),value:e.url}})),u([{value:"all",label:"All"}].concat(Object(_.a)(a)));case 6:case"end":return e.stop()}}),e)}))),[]),p=Object(z.useCallback)(Object(P.a)(V.a.mark((function e(){var n,t,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array(4).fill(null).map((function(e,n){return"".concat(Ue,"species/?page=").concat(n+1)})),e.next=3,L.a.all(n.map((function(e){return L.a.get(e)})));case 3:t=e.sent,a=t.flatMap((function(e){return e.data.results})).map((function(e){return{value:e.url,label:e.name}})),o([{value:"all",label:"All"}].concat(Object(_.a)(a)));case 6:case"end":return e.stop()}}),e)}))),[]);return Object(z.useEffect)((function(){Object(Y.a)(t)&&b(),Object(Y.a)(f)&&j(),Object(Y.a)(i)&&p()}),[f,j,b,p,t,i]),Object(ae.jsx)(qe.Provider,{value:{people:t,species:i,films:f},children:Object(ae.jsx)(U.a,{backend:Z.a,children:Object(ae.jsx)(He,{children:Object(ae.jsxs)(q.c,{children:[Object(ae.jsx)(q.a,{path:"/person/:id",component:Ze}),Object(ae.jsx)(q.a,{exact:!0,path:"/",component:Ge})]})})})})};A.a.render(Object(ae.jsx)(T.a.StrictMode,{children:Object(ae.jsx)(ne.a,{children:Object(ae.jsx)(Ke,{})})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.ae5b342c.chunk.js.map