const sitesjs={requestAPI:(e,t,s)=>{let n=5;!function r(){return new Promise((a,i)=>{let o=0,l=setTimeout(()=>{0===o&&(o=2,l=null,i("请求超时"),0==n&&s())},5e3);fetch(e).then(function(e){if(2!==o&&(clearTimeout(l),a(e),l=null,o=1),e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){n=0,t(e)}).catch(function(e){n>0?(n-=1,setTimeout(()=>{r()},5e3)):s()})})}()},layout:e=>{const t=$(e.el)[0];$(t).append('<div class="loading-wrap"><svg class="loading" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709"><path d="M832 512c0-176-144-320-320-320V128c211.2 0 384 172.8 384 384h-64zM192 512c0 176 144 320 320 320v64C300.8 896 128 723.2 128 512h64z" p-id="2710"></path></svg><p></p></div>'),sitesjs.requestAPI(e.api,function(s){$(t).find(".loading-wrap").remove(),s.content.forEach((s,n)=>{var r='<div class="site-card">';r+='<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="'+s.url+'">',r+='<img src="'+(s.screenshot||"https://image.thum.io/get/width/1024/crop/768/"+s.url)+'" onerror="javascript:this.src=\''+e.screenshot+"';\"/>",r+='<div class="info">',r+='<img src="'+(s.avatar||e.avatar)+'" onerror="javascript:this.src=\''+e.avatar+"';\"/>",r+='<span class="title">'+s.title+"</span>",r+='<span class="desc">'+(s.description||s.url)+"</span>",r+="</div>",r+="</a>",r+="</div>",$(t).find(".group-body").append(r)})},function(){$(t).find(".loading-wrap svg").remove(),$(t).find(".loading-wrap p").text("加载失败，请稍后重试。")})}};$(function(){const e=document.getElementsByClassName("sitesjs-wrap");for(var t=0;t<e.length;t++){const n=e[t],r=n.getAttribute("api");if(null!=r){var s=new Object;s.class=n.getAttribute("class"),s.el=n,s.api=r,s.avatar="https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/link/8f277b4ee0ecd.svg",s.screenshot="https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/cover/76b86c0226ffd.svg",sitesjs.layout(s)}}});