/*xmst.js v1.0.0*/(function(){function c(a){var b=document.cookie,c=d(b),e=c.split(";");for(var f=0;f<e.length;f++){var g=e[f].split("=");if(g.length>1&&g[0]==a)return g[1]}return""}function d(a){var b="";for(var c=0;c<a.length;c++){var d=a.charAt(c);d!=" "&&(b+=d)}return b}function e(a,b){var c=new Date;c.setTime(c.getTime()+31104e6);var d=a+"="+b+";"+"path=/;domain=.xiaomi.com;expires="+c.toGMTString();window.document.cookie=d}function f(a){var b=/.*\:\/\/([^\/]*).*/,c=a.match(b),d="";return typeof c!="undefined"&&null!=c&&(d=c[1]),d}function g(){var a=new Date,b=a.getTime()+"_"+Math.round(Math.random()*1e4);return b}function h(a){var b=document.createElement("script");b.type="text/javascript",b.async=!0,b.src=a;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}function j(){var a=document.location.href.replace(/&/g,"|"),d=document.referrer.replace(/&/g,"|");d=d.toLowerCase();if(d){var h=f(d);(h.indexOf(".xiaomi.com")<0||h.indexOf("p.www.xiaomi.com")>-1||h.indexOf("a.union.xiaomi.com")>-1)&&e("lastsource",h)}var i=c("PHPSESSID"),j=c("mstuid"),k=c("muuid"),l=c("mucid"),m=c("mstprevpid"),n=c("lastsource"),o=c("prevtarget");j===""&&(j=g(),e("mstuid",j));var p=new Date,q="domain_id="+b+"&phpsessid="+i+"&mstuid="+j+"&muuid="+k+"&mucid="+l+"&mstprevpid="+m+"&prevtarget="+o+"&lastsource="+n+"&timestamp="+p.getTime()+"&ref="+encodeURIComponent(d);return q}function k(a){h(a)}function l(a){return"function"==typeof a}var a="prototype",b="",m=function(){this.p=[]},n=m[a];n.trackPageView=function(){var a=j();k(o+a)},n.push=function(a){if(l(a[0])){a[0](a.slice(1));return}n[a[0]](a.slice(1))},n.setDomainId=function(a){b=a[0]},n.trackEvent=function(a){var d=a[1],e=a[2],f=a[3],g=new Date,h=c("mstprevpid"),i=c("prevtarget");h!=e&&(document.cookie="mstprevpid="+e+";"+"path=/;domain=.xiaomi.com"),i!=f&&(document.cookie="prevtarget="+f+";"+"path=/;domain=.xiaomi.com");var j="domain_id="+b+"&mstuid="+c("mstuid")+"&muuid="+c("muuid")+"&mucid="+c("mucid")+"&mstprevpid="+h+"&lastsource="+c("lastsource")+"&timestamp="+g.getTime(),l="mstpid="+e+"&"+j+"&target="+f+"&prevtarget="+i+"&category="+d;k(o+l)};var o="http://a.stat.xiaomi.com/js/mstr.js?",p=new m;p.p=window._msq;for(i=0;i<p.p.length;i++)p.push(p.p[i]);window._msq=p})();
