import{r as d}from"./index.ed373d49.js";var f={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=d,m=Symbol.for("react.element"),g=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,v=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function p(n,r,t){var s,o={},l=null,u=null;t!==void 0&&(l=""+t),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(u=r.ref);for(s in r)b.call(r,s)&&!y.hasOwnProperty(s)&&(o[s]=r[s]);if(n&&n.defaultProps)for(s in r=n.defaultProps,r)o[s]===void 0&&(o[s]=r[s]);return{$$typeof:m,type:n,key:l,ref:u,props:o,_owner:v.current}}i.Fragment=g;i.jsx=p;i.jsxs=p;f.exports=i;var e=f.exports;function N({args:n,terminal:r,data:t}){const s=c[n[0]];return s?s({args:n,terminal:r,data:t}):c.commandNotFound({args:["commandNotFound",...n],terminal:r})}const c={clear:S,banner:P,help:C,echo:O,ls:F,cd:k,commandNotFound:E},h=Object.keys(c);function a({cmd:n,terminal:r}){return e.jsxs("a",{className:"underline hover:underline-offset-1",href:"javascript:void(0)",onClick:()=>r.updateHistory({next:[n]}),children:[" ",n.join(" ")]})}function _(n,r){return n.reduce((t,s)=>[...t,r,s],[]).slice(1)}function w(...n){let t=n.map(l=>(l=l.replace(/\\/g,"/"),l=l.replace(/^\/|\/$/g,""),l)).join("/");const s=t.split("/"),o=[];for(const l of s)l===".."?o.pop():l!=="."&&o.push(l);return t=o.join("/"),n[0].startsWith("/")&&!t.startsWith("/")&&(t="/"+t),t}function k({args:n}){return location.href=w(location.href,n[1]),e.jsx(e.Fragment,{})}function F({terminal:n}){const r=n?.files||[],t=s=>`${s.getFullYear()}/${s.getMonth()+1}/${s.getDate()}`;return e.jsx("ul",{children:r.map(s=>e.jsxs("li",{children:["• ",e.jsx("span",{children:t(s.data.pubDate)})," ",e.jsx("a",{className:"underline hover:underline-offset-1",href:`/newBlog/blog/${s.slug}`,children:s.data.title})]}))})}function E({args:n}){return e.jsxs("p",{children:["command not found: ",n[1]]})}function O({args:n,data:r}){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:n.slice(1).join(" ")}),r&&e.jsx("pre",{className:"overflow-scroll",children:JSON.stringify(r,null,2)})]})}function S({terminal:n}){return n.updateHistory({clear:!0}),e.jsx(e.Fragment,{})}function C({terminal:n}){return e.jsxs("p",{children:["Available commands: ",_(h.map(r=>e.jsx(a,{cmd:[r],terminal:n})),", ")]})}function P({terminal:n}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-scroll break-keep",children:[e.jsx("p",{children:"╱╭━━━╮╱╱╭━━╮╱╱╭━╮╭━╮╱╱╭━━╮╱╱╱╭━━━╮╱╱╭━━━╮╱╱╭━━━╮╱╱╱╱╱╱╭━━━╮╱╱╭━━━╮╱"}),e.jsx("p",{children:"╱┃╭━╮┃╱╱╰┫┣╯╱╱┃┃╰╯┃┃╱╱┃╭╮┃╱╱╱┃╭━╮┃╱╱┃╭━━╯╱╱┃╭━╮┃╱╱╱╱╱╱┃╭━╮┃╱╱┃╭━╮┃╱"}),e.jsx("p",{children:"╱┃╰━━╮╱╱╱┃┃╱╱╱┃╭╮╭╮┃╱╱┃╰╯╰╮╱╱┃┃╱┃┃╱╱┃╰━━╮╱╱┃╰━━╮╱╱╱╱╱╱┃┃╱╰╯╱╱┃┃╱╰╯╱"}),e.jsx("p",{children:"╱╰━━╮┃╱╱╱┃┃╱╱╱┃┃┃┃┃┃╱╱┃╭━╮┃╱╱┃╰━╯┃╱╱┃╭━━╯╱╱╰━━╮┃╱╱╱╱╱╱┃┃╱╭╮╱╱┃┃╱╭╮╱"}),e.jsx("p",{children:"╱┃╰━╯┃╱╱╭┫┣╮╱╱┃┃┃┃┃┃╱╱┃╰━╯┃╱╱┃╭━╮┃╱╱┃┃╱╱╱╱╱┃╰━╯┃╱╱╭╮╱╱┃╰━╯┃╱╱┃╰━╯┃╱"}),e.jsx("p",{children:"╱╰━━━╯╱╱╰━━╯╱╱╰╯╰╯╰╯╱╱╰━━━╯╱╱╰╯╱╰╯╱╱╰╯╱╱╱╱╱╰━━━╯╱╱╰╯╱╱╰━━━╯╱╱╰━━━╯╱"})]}),e.jsx("p",{children:"# Social"}),e.jsxs("p",{children:["• ",e.jsx("a",{href:"https://github.com/simbafs",target:"_blank",className:"underline hover:underline-offset-1",children:"GitHub"})]}),e.jsxs("p",{children:["• ",e.jsx("a",{href:"https://twitter.com/simbafs",target:"_blank",className:"underline hover:underline-offset-1",children:"Twitter"})]}),e.jsx("br",{}),e.jsxs("p",{children:["use ",e.jsx(a,{cmd:["help"],terminal:n})," to list all commands"]}),e.jsxs("p",{children:["use ",e.jsx(a,{cmd:["cd","blog"],terminal:n})," to read blog posts"]})]})}function R({updateHistory:n}){const[r,t]=d.useState(""),s=l=>{t(l.target.value)},o=l=>{l.key==="Enter"&&(n({next:[r.split(" ")]}),t(""))};return e.jsx("input",{type:"text",className:`bg-base03 border-none outline-none flex-grow ${h.includes(r.split(" ")[0])||r.length===0?"text-green":"text-red"}`,autoFocus:!0,autoComplete:"off",spellCheck:"false",tabIndex:0,value:r,onChange:s,onKeyDown:o})}function x({cmd:n,updateHistory:r}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-blue",children:"vistor"}),e.jsx("span",{className:"text-cyan",children:"@"}),e.jsx("span",{className:"text-green",children:"blog.simbafs.cc"}),e.jsx("span",{className:"text-cyan whitespace-nowrap",children:":~"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-cyan whitespace-nowrap",children:"$ "}),r&&e.jsx(R,{updateHistory:r}),e.jsx("span",{className:"",children:n?.join(" ")})]})]})}function $({args:n,terminal:r,data:t}){return e.jsx(N,{args:n,terminal:r,data:t})}function I({initCmd:n,files:r}){const[t,s]=d.useReducer((o,l)=>l.clear?[]:[...o,...l?.next||[]],n||[]);return e.jsxs(e.Fragment,{children:[t.map(o=>e.jsxs("div",{style:{wordBreak:"break-all"},children:[e.jsx(x,{cmd:o}),e.jsx($,{args:o,terminal:{history:t,updateHistory:s,files:r}})]})),e.jsx(x,{updateHistory:s})]})}export{I as default};
