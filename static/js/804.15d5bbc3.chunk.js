"use strict";(self.webpackChunkfuture_coin=self.webpackChunkfuture_coin||[]).push([[804],{804:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(791),i=t(57),a=t(861),o=t(885),s=t(757),c=t.n(s),u=t(871),l=t(894),d=t(650),p=t(413),f=t(645),m=t(184),h=function(n){var e=n.coinValues,t=n.historyPrediction,a=(0,r.useState)(),s=(0,o.Z)(a,2),c=s[0],u=s[1],l=(0,r.useMemo)((function(){return["#F272A1","#6D5DA6","#232B59","#60BFBF","#F2958D","#593E25"]}),[]),d=e[e.length-1];return(0,r.useEffect)((function(){u({name:"Posibles pron\xf3sticos",labels:t.days,datasets:t.predictions.map((function(n,e){return{name:"".concat(50+n.reliability/2,"%"),backgroundColor:l[e],borderColor:l[e],values:n.values}}))})}),[t,l]),(0,m.jsxs)("div",{className:"estimation_coin",children:[(0,m.jsx)("h2",{className:"estimation_coin__title",children:"Pron\xf3stico"}),(0,m.jsx)("div",{className:"estimation_coin__text",children:"A continuaci\xf3n, te presentamos posibles valores para los pr\xf3ximos 7 d\xedas, con distintos m\xe9todos, cada m\xe9todo tiene un margen de confiabilidad:"}),(0,m.jsx)("div",{className:"estimation_coin__text",children:(0,m.jsxs)("span",{className:"estimation_coin__badge",children:["Valor hoy $",d.toFixed(2)," USD"]})}),(0,m.jsx)(i.Zb,{children:(0,m.jsx)(m.Fragment,{children:c&&(0,m.jsx)(f.R,(0,p.Z)({},c))})}),(0,m.jsx)("div",{className:"estimation_coin__container",children:(0,m.jsxs)("table",{className:"estimation_coin__table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"M\xe9todo"}),(0,m.jsx)("th",{children:"Confiabilidad"}),t.days.map((function(n){return(0,m.jsx)("th",{children:n},n)}))]})}),(0,m.jsx)("tbody",{children:t.predictions.map((function(n){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:n.nameMethod}),(0,m.jsxs)("td",{children:[50+n.reliability/2,"%"]}),n.values.map((function(e,t){return(0,m.jsx)("td",{children:e},"".concat(n.nameMethod).concat(e).concat(t))}))]},n.nameMethod)}))})]})})]})},v=function(n){var e=n.coinTime,t=(0,r.useState)(),i=(0,o.Z)(t,2),a=i[0],s=i[1];return(0,r.useEffect)((function(){!function(n){if(n){var e=n.map((function(n){return n.day}));s({name:"Variaci\xf3n en el mercado",labels:e,datasets:[{name:"USD",backgroundColor:"#3DF29D",borderColor:"#3DF29D",values:n.map((function(n){return n.value}))}]})}}(e)}),[e]),(0,m.jsx)(m.Fragment,{children:a&&(0,m.jsx)(f.R,(0,p.Z)({},a))})},x=function(){var n=function(){var n=(0,r.useState)(),e=(0,o.Z)(n,2),t=e[0],i=e[1],s=(0,u.UO)().coinId,p=(0,u.s0)(),f=(0,r.useCallback)((0,a.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.n.getCoinPredictionInUSDUseCase(s);case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),p("/".concat(l.N.urlBase,"no_encontrado"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[p,s]);return(0,r.useEffect)((function(){void 0!==s&&s!==(null===t||void 0===t?void 0:t.id)&&f()}),[s,null===t||void 0===t?void 0:t.id,f]),{coin:t}}(),e=n.coin;return(0,m.jsxs)("div",{className:"coin_page",children:[(0,m.jsxs)("div",{className:"coin_page__header_history",children:[(0,m.jsxs)("header",{className:"coin_page__header",children:[(0,m.jsx)(i.jt,{type:"secundary",to:"",children:"Volver"}),(0,m.jsxs)("div",{className:"coin_page__title",children:[(0,m.jsx)("img",{className:"coin_page__title_image",src:null===e||void 0===e?void 0:e.image,alt:"logo coin"}),(0,m.jsx)("h1",{className:"coin_page__title_text",children:null===e||void 0===e?void 0:e.name})]})]}),(0,m.jsx)("section",{className:"coin_page__history center_xy",children:(0,m.jsx)(i.Zb,{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:"coin_page__subtitle",children:"Historial"}),"El historial de los \xfaltimos 90 d\xedas es:",(null===e||void 0===e?void 0:e.pricesLastDaysInUSD)&&(0,m.jsx)(v,{coinTime:e.pricesLastDaysInUSD})]})})})]}),(null===e||void 0===e?void 0:e.pricesLastDaysInUSD)&&e.predictionsInUSD&&(0,m.jsx)(h,{coinValues:e.pricesLastDaysInUSD.map((function(n){return n.value})),historyPrediction:e.predictionsInUSD}),(0,m.jsx)("footer",{className:"coin_page__footer",children:(0,m.jsx)(i.jt,{type:"secundary",to:"",children:"Busca m\xe1s criptomonedas"})})]})}},650:function(n,e,t){t.d(e,{n:function(){return j}});var r,i=t(861),a=t(757),o=t.n(a),s=t(894),c=function(n){return fetch(n).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))},u=function(){var n=(0,i.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c("".concat(s.N.urlApi,"/coins/list")),n.next=3,e;case 3:return n.abrupt("return",n.sent.map((function(n){return n})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("".concat(s.N.urlApi,"/coins/").concat(e,"/market_chart?vs_currency=usd&days=90&interval=daily"));case 2:return t=n.sent,n.abrupt("return",t.prices.map((function(n){return{day:new Date(n[0]).toLocaleDateString(),value:n[1]}})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("".concat(s.N.urlApi,"/coins/").concat(e,"?localization=true&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false"));case 2:return t=n.sent,n.abrupt("return",{id:t.id,name:t.name,symbol:t.symbol,image:t.image.large});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p={getCoins:u,getCoinDetail:d,getCoinValuesInUSD:l},f=t(72),m=t.n(f),h=t(982),v=t(426),x=t.n(v),_=function(n,e,t,r){return new Promise((function(i){var a=r(t.map((function(n,e){return[e,n]})));i({nameMethod:n,values:e.map((function(n,e){return a.predict(e)})).map((function(n){return n[1]})),reliability:100*a.r2})}))},g=function(n){return n.filter((function(n){return!isNaN(n.reliability)}))},y=function(n){var e=n.coinRepository,t=n.predictionRepository;return function(){var n=(0,i.Z)(o().mark((function n(r){var i,a,s,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getCoinDetail(r);case 2:return i=n.sent,n.next=5,e.getCoinValuesInUSD(r);case 5:return i.pricesLastDaysInUSD=n.sent,a=i.pricesLastDaysInUSD.map((function(n){return n.value})),s=t.getDays(7),n.next=10,Promise.all([t.getLinearPrediction(s,a),t.getExponentialPrediction(s,a),t.getLogarithmicPrediction(s,a),t.getPowerPrediction(s,a),t.getPolynomialPrediction(s,a)]);case 10:return c=n.sent,i.predictionsInUSD={days:s,predictions:g(c)},n.abrupt("return",i);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},j={getCoinsUseCase:function(n){var e=n.coinRepository;return function(){return e.getCoins()}}(r={coinRepository:p,predictionRepository:{getDays:function(n){for(var e=[],t=1;t<=n;t++)e=[].concat((0,h.Z)(e),[x()().add(t,"days").format("DD/MM/YYYY")]);return e},getLinearPrediction:function(n,e){return _("lineal",n,e,m().linear)},getExponentialPrediction:function(n,e){return _("exponencial",n,e,m().exponential)},getLogarithmicPrediction:function(n,e){return _("logaritmico",n,e,m().logarithmic)},getPowerPrediction:function(n,e){return _("potencial",n,e,m().power)},getPolynomialPrediction:function(n,e){return _("polinomial",n,e,m().polynomial)}}}),getCoinPredictionInUSDUseCase:y(r),findCoinUseCase:function(n,e){return n.length>0?e.filter((function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())})):[]}}}}]);
//# sourceMappingURL=804.15d5bbc3.chunk.js.map