(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(5),s=c.n(r),a=(c(11),c(2)),i=(c(12),c(0)),u=function(e){var t=e.weatherMethod,c=e.error;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)("input",{type:"text",name:"city",required:!0,placeholder:"Search city"}),Object(i.jsx)("button",{children:"Search"})]}),c?Object(i.jsx)("p",{className:"error",children:"Enter the correct city or remove the space at the end"}):null]})},o=c(4),h=c.n(o),j=c(6),l=function(){var e=Object(n.useCallback)(function(){var e=Object(j.a)(h.a.mark((function e(c){var n,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=e897d3d88e95bb05e8d05bbc09c2c794"),e.next=3,fetch(n);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(r.status));case 6:return e.next=8,r.json();case 8:return s=e.sent,e.abrupt("return",t(s));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=function(e){return{city:e.name+",",country:e.sys.country,temp:Math.round(e.main.temp)+"\xb0C",feelsLike:"Feels like: "+Math.round(e.main.feels_like)+"\xb0C",pressure:"Pressure: "+e.main.pressure+" hPa",humidity:"Humidity: "+e.main.humidity+" %",wind:"Wind: "+e.wind.speed+" m/s",icon:e.weather[0].main+",",description:e.weather[0].description}};return{getWeather:e}},d=(c(15),function(e){var t=e.city,c=e.weather,n=c.temp,r=c.feelsLike,s=c.pressure,a=c.country,u=c.humidity,o=c.wind,h=c.icon,j=c.description;return Object(i.jsx)("div",{className:"weather",children:t?Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[" ",t," ",a," "]}),Object(i.jsxs)("p",{className:"temp",children:[" ",n," "]}),Object(i.jsxs)("p",{children:[h," ",j,"  "]}),Object(i.jsxs)("p",{children:[" ",r]}),Object(i.jsx)("p",{children:s}),Object(i.jsxs)("p",{children:[" ",u," "]}),Object(i.jsxs)("p",{children:[" ",o," "]})]}):null})}),b=(c(16),function(){var e=new Date;e.getTime();var t=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getMonth()],c=e.getDate(),n=e.getFullYear(),r=e.getHours(),s=e.getMinutes();return Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h1",{children:"Weather forecast"}),Object(i.jsxs)("h5",{children:[" ",c," ",t," ",n]}),"".concat(s)<10?Object(i.jsxs)("h5",{children:[" ",r,":","0".concat(s),"  "]}):Object(i.jsxs)("h5",{children:[" ",r,":",s]})]})});c(17);var p=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)({}),o=Object(a.a)(s,2),h=o[0],j=o[1],p=Object(n.useState)(null),m=Object(a.a)(p,2),O=m[0],f=m[1],x=l().getWeather,v=Object(n.useCallback)((function(){f(null)}),[]);return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)("div",{className:"info",children:Object(i.jsx)(b,{})}),Object(i.jsxs)("div",{className:"formInfo",children:[Object(i.jsx)(u,{weatherMethod:function(e){e.preventDefault();var t=e.target.elements.city.value;t&&(v(),x(t).then((function(e){r(e.city),j(e)})).catch((function(e){f(e.message),j(e.message),r("")})))},error:O}),Object(i.jsx)(d,{city:c,weather:h})]})]})})};s.a.render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.3ccfb8bf.chunk.js.map