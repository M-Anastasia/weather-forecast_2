(this["webpackJsonpweather-forecast_2"]=this["webpackJsonpweather-forecast_2"]||[]).push([[0],[,,,function(e,t,a){e.exports={background:"seven_days_weather_forecast_background__2CWPt",title:"seven_days_weather_forecast_title__XnAyU",shift:"seven_days_weather_forecast_shift__Fo9-A",shift_options:"seven_days_weather_forecast_shift_options__FZ8eO",error_msg:"seven_days_weather_forecast_error_msg__1zLUU",cards_layout:"seven_days_weather_forecast_cards_layout__ZyRKX",cloud:"seven_days_weather_forecast_cloud__28RNb",arrow_left:"seven_days_weather_forecast_arrow_left__2UVW6",arrow_left_dis:"seven_days_weather_forecast_arrow_left_dis__35jJf",arrow_right:"seven_days_weather_forecast_arrow_right__JSdYN",arrow_right_dis:"seven_days_weather_forecast_arrow_right_dis__3ZX3-",radios:"seven_days_weather_forecast_radios___WSce",list:"seven_days_weather_forecast_list__1IknZ",select_placeholder:"seven_days_weather_forecast_select_placeholder__lQwDv",card:"seven_days_weather_forecast_card__3CrQ1",date:"seven_days_weather_forecast_date__M8Fcu",weather_icon:"seven_days_weather_forecast_weather_icon__2M8-s",temp:"seven_days_weather_forecast_temp__19F48"}},function(e,t,a){e.exports={background:"past_day_weather_forecast_background__37ow9",title:"past_day_weather_forecast_title__2Vyzk",shift:"past_day_weather_forecast_shift__1Ya_u",shift_options:"past_day_weather_forecast_shift_options__vPeFe",shift_datepicker:"past_day_weather_forecast_shift_datepicker__2I84Z",inputs_layout:"past_day_weather_forecast_inputs_layout__189Uv",select_placeholder:"past_day_weather_forecast_select_placeholder__1tCqj",cloud:"past_day_weather_forecast_cloud__gOJAK",error_msg:"past_day_weather_forecast_error_msg__16c1f",cards_layout:"past_day_weather_forecast_cards_layout__2sgOD",card:"past_day_weather_forecast_card__2GL2M",date:"past_day_weather_forecast_date__bh-MP",weather_icon:"past_day_weather_forecast_weather_icon__1k0P8",temp:"past_day_weather_forecast_temp__hIx9j",arrow_left:"past_day_weather_forecast_arrow_left__2W5Bg",arrow_left_dis:"past_day_weather_forecast_arrow_left_dis__1vG5u",arrow_right:"past_day_weather_forecast_arrow_right__2FwMO",arrow_right_dis:"past_day_weather_forecast_arrow_right_dis__r9152"}},,function(e,t,a){e.exports={datepicker:"datepicker_datepicker__3Nt-3",datepicker_text:"datepicker_datepicker_text__2xUM9",datepicker_text_none:"datepicker_datepicker_text_none__1MGZa",focused:"datepicker_focused__13y61",img_shift:"datepicker_img_shift__aXqmw"}},function(e,t,a){e.exports={piked:"select_piked__1KolB",unpicked:"select_unpicked__DWC3v"}},,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(8),_=a.n(r),n=(a(13),a(14),a.p+"static/media/Academy-Weather forecast-Bg-up.cd559f48.svg"),i=a.p+"static/media/Academy-Weather forecast-Bg-buttom.ed5c739e.svg",o=a(2),d=a(4),l=a.n(d),h=a(6),u=a.n(h),j=a(0),p=function(e){var t=Object(s.useState)(e.placeholder),c=Object(o.a)(t,2),r=c[0],_=c[1],n=a(16),i=new Date((new Date).setDate((new Date).getDate()-1)),d=new Date((new Date).setDate((new Date).getDate()-5)),l=n(i,"yyyy-mm-dd"),h=n(d,"yyyy-mm-dd");return Object(j.jsxs)("div",{className:e.styles.shift_datepicker,children:[Object(j.jsx)("input",{onChange:function(t){_(t.target.value),e.setIsDatePicked(!0),e.setDate(t.target.value),e.setIsRequestDone(!1)},className:u.a.datepicker,type:"date",placeholder:e.placeholder,max:l,min:h,onFocusCapture:function(e){e.target.style.borderColor="#373AF5",e.target.style.outline="0"},onBlur:function(e){return e.target.style.border="2px solid rgba(128, 131, 164, 0.2)"}}),Object(j.jsx)("p",{className:u.a.datepicker_text,children:r===e.placeholder?r:n(r,"dd/mm/yyyy")})]})},f=a.p+"static/media/Academy-Weather-bg160.ab35eb6a.svg",b=a(7),m=a.n(b),w=function(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];Object(s.useEffect)((function(){r(e.placeholder)}),[]);var _=function(){var t=e.options.map((function(t){return Object(j.jsx)("li",{onClick:function(){console.log(t[0]+" was clicked"+t[1]+t[2]),r(t[0]),e.setIsCityPiked(!0),e.getData(t[1],t[2])},children:t[0]})}));return Object(j.jsx)("ul",{className:e.styles.shift_options,children:t})};return Object(j.jsxs)("details",{className:e.styles.shift,children:[Object(j.jsx)("summary",{className:e.isCityPiked?m.a.piked:m.a.unpicked,children:c}),Object(j.jsx)(_,{})]})},y=function(){var e=["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"],t=Object(s.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],_=Object(s.useState)(!1),n=Object(o.a)(_,2),i=n[0],d=n[1],h=Object(s.useState)(!1),u=Object(o.a)(h,2),b=u[0],m=u[1],y=Object(s.useState)(""),O=Object(o.a)(y,2),g=O[0],v=O[1],x=Object(s.useState)(["","",""]),k=Object(o.a)(x,2),N=k[0],D=k[1],S=Object(s.useState)(0),C=Object(o.a)(S,2),F=C[0],M=C[1],P=Object(s.useState)(0),E=Object(o.a)(P,2),I=E[0],W=E[1],A=Object(s.useState)(!1),B=Object(o.a)(A,2),L=B[0],U=B[1];Object(s.useEffect)((function(){var e=[];e.push(["\u0421\u0430\u043c\u0430\u0440\u0430",53.195873,50.100193]),e.push(["\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",53.507836,49.420393]),e.push(["\u0421\u0430\u0440\u0430\u0442\u043e\u0432",51.533557,46.034257]),e.push(["\u041a\u0430\u0437\u0430\u043d\u044c",55.796127,49.106405]),e.push(["\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",45.03547,38.975313]),r(e)}),[]);var R=function(){return Object(j.jsx)("div",{className:l.a.cards_layout,children:Object(j.jsxs)("div",{className:l.a.card,children:[Object(j.jsx)("p",{className:l.a.date,children:N[0][0]}),Object(j.jsx)("img",{className:l.a.weather_icon,src:N[0][1]}),Object(j.jsx)("p",{className:l.a.temp,children:N[0][2]})]})})},T=function(){return i&&b?(L||fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+F+"&lon="+I+"&dt="+new Date(g).getTime()/1e3+"&appid=aafdb5f809e160cf1aea4d8d0e4107bf",{method:"GET"}).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t);var a=[],s=new Date(1e3*t.current.dt);console.log(s);var c=t.current.weather[0].icon.replace("n","d");a.push([s.getDate()+" "+e[s.getMonth()]+" "+s.getFullYear(),"http://openweathermap.org/img/wn/"+c+"@2x.png",Math.round(t.current.temp-273.15)>0?"+"+Math.round(t.current.temp-273.15)+"\xb0":"-"+Math.round(t.current.temp-273.15)+"\xb0"]),D(a),U(!0)})),Object(j.jsx)(R,{})):Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:l.a.cloud,src:f}),Object(j.jsx)("p",{className:l.a.error_msg,children:"Fill in all the fields and the weather will be displayed"})]})};return Object(j.jsxs)("div",{className:l.a.background,children:[Object(j.jsx)("p",{className:l.a.title,children:"Forecast for a Date in the Past"}),Object(j.jsxs)("div",{className:l.a.inputs_layout,children:[Object(j.jsx)(w,{styles:l.a,placeholder:"Select city",options:c,isCityPiked:i,setIsCityPiked:d,getData:function(e,t){M(e),W(t),U(!1)}}),Object(j.jsx)(p,{placeholder:"Select date",styles:l.a,isDatePicked:b,setIsDatePicked:m,setDate:v,setIsRequestDone:U})]}),Object(j.jsx)(T,{})]})},O=a(3),g=a.n(O),v=a.p+"static/media/arrow-left.b2c3c590.svg",x=a.p+"static/media/arrow-right.36837e88.svg",k=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),_=Object(o.a)(r,2),n=_[0],i=_[1],d=Object(s.useState)([[]]),l=Object(o.a)(d,2),h=l[0],u=l[1],p=Object(s.useState)(0),b=Object(o.a)(p,2),m=b[0],y=b[1],O=Object(s.useState)(2),k=Object(o.a)(O,2),N=k[0],D=k[1],S=function(){var e=Object(s.useState)({width:0,height:0}),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),C=["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"];Object(s.useEffect)((function(){var e=[];e.push(["\u0421\u0430\u043c\u0430\u0440\u0430",53.195873,50.100193]),e.push(["\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",53.507836,49.420393]),e.push(["\u0421\u0430\u0440\u0430\u0442\u043e\u0432",51.533557,46.034257]),e.push(["\u041a\u0430\u0437\u0430\u043d\u044c",55.796127,49.106405]),e.push(["\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",45.03547,38.975313]),c(e)}),[]);var F=function(){var e=[];return S.width<=660?[0,1,2,3,4,5,6].map((function(t){void 0!==h[t]&&e.push(Object(j.jsxs)("div",{className:g.a.card,children:[Object(j.jsx)("p",{className:g.a.date,children:h[t][0]}),Object(j.jsx)("img",{className:g.a.weather_icon,src:h[t][1]}),Object(j.jsx)("p",{className:g.a.temp,children:h[t][2]})]}))})):[m,N-1,N].map((function(t){void 0!==h[t]&&e.push(Object(j.jsxs)("div",{className:g.a.card,children:[Object(j.jsx)("p",{className:g.a.date,children:h[t][0]}),Object(j.jsx)("img",{className:g.a.weather_icon,src:h[t][1]}),Object(j.jsx)("p",{className:g.a.temp,children:h[t][2]})]}))})),Object(j.jsxs)("div",{className:g.a.cards_layout,children:[Object(j.jsx)("img",{className:0===m?g.a.arrow_left_dis:g.a.arrow_left,src:v,onClick:function(){y(m-1),D(N-1)}}),e,Object(j.jsx)("img",{className:6===N?g.a.arrow_right_dis:g.a.arrow_right,src:x,onClick:function(){y(m+1),D(N+1)}})]})},M=function(){return n?Object(j.jsx)(F,{}):Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:g.a.cloud,src:f}),Object(j.jsx)("p",{className:g.a.error_msg,children:"Fill in all the fields and the weather will be displayed"})]})};return Object(j.jsxs)("div",{className:g.a.background,children:[Object(j.jsx)("p",{className:g.a.title,children:"7 Days Forecast"}),Object(j.jsx)(w,{styles:g.a,placeholder:"Select city",options:a,isCityPiked:n,setIsCityPiked:i,getData:function(e,t){fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+e+"&lon="+t+"&appid=aafdb5f809e160cf1aea4d8d0e4107bf",{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=[];[1,2,3,4,5,6,7].map((function(a){var s=new Date(1e3*e.daily[a].dt);t.push([s.getDate()+" "+C[s.getMonth()]+" "+s.getFullYear(),"http://openweathermap.org/img/wn/"+e.daily[a].weather[0].icon+"@2x.png",Math.round(e.daily[a].temp.day-273.15)>0?"+"+Math.round(e.daily[a].temp.day-273.15)+"\xb0":"-"+Math.round(e.daily[a].temp.day-273.15)+"\xb0"])})),u(t)}))}}),Object(j.jsx)(M,{})]})};var N=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("img",{className:"up",src:n}),Object(j.jsx)("img",{className:"bottom",src:i}),Object(j.jsxs)("div",{className:"layout",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{className:"header-font1",children:"Weather"}),Object(j.jsx)("div",{className:"header-font2",children:"forecast"})]}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(k,{}),Object(j.jsx)(y,{})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer-font",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})]})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,_=t.getTTFB;a(e),s(e),c(e),r(e),_(e)}))};_.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),D()}],[[17,1,2]]]);
//# sourceMappingURL=main.83a62cb4.chunk.js.map