import{d as h,r as p,o as x,c as o,a as r}from"./index.a4091771.js";const v="_container_smbxd_1",C="_leftContent_smbxd_5",L="_imgBox_smbxd_10",_="_rightContent_smbxd_19",i={container:v,leftContent:C,imgBox:L,rightContent:_},y=h({setup(){console.log(i);const s=p({topMenuList:[],imgList:[],title:"\u6211\u7684\u540D\u5B57"}),{imgList:b,title:d}=s,g=()=>{const t=[],n=document.getElementById("localVideo"),e=document.createElement("canvas");e.width=n.videoWidth,e.height=n.videoHeight;const a=e.getContext("2d");a.drawImage(n,0,0,e.width,e.height),t.push(e.toDataURL("image/png")),console.log("\u{1F680}\u{1F680}\u{1F680} / imgList",t);const l=["blur(5px)","brightness(0.5)","contrast(200%)","grayscale(100%)","hue-rotate(90deg)","invert(100%)","opacity(90%)","saturate(200%)","saturate(20%)","sepia(100%)","drop-shadow(4px 4px 8px blue)"];for(let c=0;c<l.length;c++)a.filter=l[c],a.drawImage(n,0,0,e.width,e.height),t.push(e.toDataURL("image/png"));s.imgList=t,console.log(s.imgList,"state.imgList")},u=async()=>{let t=await navigator.mediaDevices.getDisplayMedia({audio:!0,video:!0});m(t)},m=t=>{const n=document.querySelector("#localVideo");n.srcObject=t};return x(()=>{}),()=>o("div",{class:i.container},[o("div",{class:i.leftContent},[s.imgList.map(t=>o("div",{class:i.imgBox},[o("img",{src:t,alt:""},null)]))]),o("div",{class:i.rightContent},[o("h4",null,[d]),o("video",{id:"localVideo",autoplay:!0,playsinline:!0,muted:!0},null),o("button",{onClick:g},[r("\u62CD\u7167")]),o("button",{onClick:u},[r("\u5206\u4EAB\u5C4F\u5E55")])])])}});export{y as default};