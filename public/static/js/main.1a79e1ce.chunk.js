(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),r=c(26),n=c.n(r),i=c(102),o=c(1);var l=function(){return Object(o.jsx)(i.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(o.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=f016625a8e2e4936a3cb2761f9b4f1ef&response_type=code&redirect_uri=https://master.d1255o3gz224xt.amplifyapp.com/&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",className:"btn btn-success btn-lg",children:"Login with spotify"})})},u=c(6),d=c.n(u);function h(e){let{track:t,chooseTrack:c}=e;return Object(o.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},onClick:()=>{c(t)},children:[Object(o.jsx)("img",{src:t.albumUrl,alt:"album images",style:{height:"64px",width:"64px"}}),Object(o.jsxs)("div",{className:"ml-3",children:[Object(o.jsx)("div",{children:t.trackName}),Object(o.jsx)("div",{className:"text-muted",children:t.artistsName})]})]})}var j=c(37);function b(e){let{accessToken:t,trackUri:c}=e;const[a,r]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{r(!0)}),[c]),t?Object(o.jsx)(j.a,{token:t,showSaveIcon:!0,callback:e=>{e.isPlaying||r(!1)},play:a,uris:c?[c]:[]}):null}const f=new(c(65))({clientId:"f016625a8e2e4936a3cb2761f9b4f1ef"});function m(e){let{code:t}=e;const[c,a]=Object(s.useState)(""),r=function(e){const[t,c]=Object(s.useState)(),[a,r]=Object(s.useState)(),[n,i]=Object(s.useState)();return Object(s.useEffect)((()=>{d.a.post("https://spotify-clone-rest-api.herokuapp.com/login",{code:e}).then((e=>{c(e.data.accessToken),r(e.data.refreshToken),i(e.data.expiresIn),window.history.pushState({},document.title,"/")})).catch((()=>{window.location="/"}))}),[e]),Object(s.useEffect)((()=>{a&&n&&d.a.post("https://spotify-clone-rest-api.herokuapp.com/refresh",{refreshToken:a}).then((e=>{c(e.data.accessToken),i(e.data.expiresIn)})).catch((()=>{window.location="/"}))}),[a,n]),t}(t),[n,l]=Object(s.useState)([]),[u,j]=Object(s.useState)(),[m,p]=Object(s.useState)(""),[O,x]=Object(s.useState)(!0);function y(e){j(e),a(""),p("")}return Object(s.useEffect)((()=>{r&&(f.setAccessToken(r),x(!1))}),[r]),Object(s.useEffect)((()=>{if(!c)return l([]);if(!r)return;let e=!1;f.searchTracks(c).then((t=>{if(!e)return l(t.body.tracks.items.map((e=>({albumUrl:e.album.images.reduce(((e,t)=>t.height<e.height?t:e),e.album.images[0]).url,artistsName:e.artists[0].name,trackName:e.name,uri:e.uri})))),()=>e=!0})).catch((e=>console.log(e)))}),[c,r]),Object(s.useEffect)((()=>{u&&d.a.get("https://spotify-clone-rest-api.herokuapp.com/lyrics",{params:{track:u.trackName,artist:u.artistsName}}).then((e=>{p(e.data.lyrics)})).catch((e=>{console.log(e)}))}),[u]),Object(o.jsxs)(i.a,{className:"d-flex flex-column py-2",style:{height:"100vh"},children:[Object(o.jsx)("div",{className:"input-group rounded",children:Object(o.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon",value:c,onChange:e=>a(e.target.value)})}),O?Object(o.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"100vh"},children:Object(o.jsxs)("p",{style:{fontSize:"2em"},children:[Object(o.jsx)("i",{class:"fa fa-spinner fa-spin"}),"  Loading"]})}):Object(o.jsxs)("div",{className:"flex-grow-1 my-2",style:{overflowY:"auto"},children:[n.map((e=>Object(o.jsx)(h,{track:e,chooseTrack:y},e.uri))),0===n.length&&Object(o.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"},children:m})]}),Object(o.jsx)("div",{children:Object(o.jsx)(b,{accessToken:r,trackUri:null===u||void 0===u?void 0:u.uri})})]})}c(100);const p=new URLSearchParams(window.location.search).get("code");var O=function(){return p?Object(o.jsx)(m,{code:p}):Object(o.jsx)(l,{})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))},93:function(e,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.1a79e1ce.chunk.js.map