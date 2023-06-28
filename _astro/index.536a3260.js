import{r as u}from"./index.ed373d49.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=u,g=Symbol.for("react.element"),b=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,y=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function h(n,r,s){var t,o={},l=null,d=null;s!==void 0&&(l=""+s),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(d=r.ref);for(t in r)v.call(r,t)&&!N.hasOwnProperty(t)&&(o[t]=r[t]);if(n&&n.defaultProps)for(t in r=n.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:g,type:n,key:l,ref:d,props:o,_owner:y.current}}i.Fragment=b;i.jsx=h;i.jsxs=h;p.exports=i;var e=p.exports;function w({args:n,terminal:r,data:s}){const t=c[n[0]];return t?t({args:n,terminal:r,data:s}):c.commandNotFound({args:["commandNotFound",...n],terminal:r})}const c={clear:S,banner:P,help:C,echo:O,ls:F,cd:k,commandNotFound:E},m=Object.keys(c);function a({cmd:n,terminal:r}){return e.jsxs("a",{className:"underline hover:underline-offset-1",href:"javascript:void(0)",onClick:()=>r.updateHistory({next:[n]}),children:[" ",n.join(" ")]})}function _(n,r){return n.reduce((s,t)=>[...s,r,t],[]).slice(1)}function x(...n){let s=n.map(l=>(l=l.replace(/\\/g,"/"),l=l.replace(/^\/|\/$/g,""),l)).join("/");const t=s.split("/"),o=[];for(const l of t)l===".."?o.pop():l!=="."&&o.push(l);return s=o.join("/"),n[0].startsWith("/")&&!s.startsWith("/")&&(s="/"+s),s}function k({args:n}){return n.length===1?(location.pathname="/newBlog/",e.jsx(e.Fragment,{})):n[1][0]==="/"?(location.pathname=x("/newBlog/",n[1]),e.jsx(e.Fragment,{})):(location.href=x(location.href,n[1]),e.jsx(e.Fragment,{}))}function F({terminal:n}){const r=n?.files||[],s=t=>`${t.getFullYear()}/${t.getMonth()+1}/${t.getDate()}`;return e.jsx("ul",{children:r.map(t=>e.jsxs("li",{children:["• ",e.jsx("span",{children:s(t.data.pubDate)})," ",e.jsx("a",{className:"underline hover:underline-offset-1",href:`/newBlog/blog/${t.slug}`,children:t.data.title})]}))})}function E({args:n}){return e.jsxs("p",{children:["command not found: ",n[1]]})}function O({args:n,data:r}){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:n.slice(1).join(" ")}),r&&e.jsx("pre",{className:"overflow-scroll",children:JSON.stringify(r,null,2)})]})}function S({terminal:n}){return n.updateHistory({clear:!0}),e.jsx(e.Fragment,{})}function C({terminal:n}){return e.jsxs("p",{children:["Available commands: ",_(m.map(r=>e.jsx(a,{cmd:[r],terminal:n})),", ")]})}function P({terminal:n}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-scroll break-keep",children:[e.jsx("p",{children:"╱╭━━━╮╱╱╭━━╮╱╱╭━╮╭━╮╱╱╭━━╮╱╱╱╭━━━╮╱╱╭━━━╮╱╱╭━━━╮╱╱╱╱╱╱╭━━━╮╱╱╭━━━╮╱"}),e.jsx("p",{children:"╱┃╭━╮┃╱╱╰┫┣╯╱╱┃┃╰╯┃┃╱╱┃╭╮┃╱╱╱┃╭━╮┃╱╱┃╭━━╯╱╱┃╭━╮┃╱╱╱╱╱╱┃╭━╮┃╱╱┃╭━╮┃╱"}),e.jsx("p",{children:"╱┃╰━━╮╱╱╱┃┃╱╱╱┃╭╮╭╮┃╱╱┃╰╯╰╮╱╱┃┃╱┃┃╱╱┃╰━━╮╱╱┃╰━━╮╱╱╱╱╱╱┃┃╱╰╯╱╱┃┃╱╰╯╱"}),e.jsx("p",{children:"╱╰━━╮┃╱╱╱┃┃╱╱╱┃┃┃┃┃┃╱╱┃╭━╮┃╱╱┃╰━╯┃╱╱┃╭━━╯╱╱╰━━╮┃╱╱╱╱╱╱┃┃╱╭╮╱╱┃┃╱╭╮╱"}),e.jsx("p",{children:"╱┃╰━╯┃╱╱╭┫┣╮╱╱┃┃┃┃┃┃╱╱┃╰━╯┃╱╱┃╭━╮┃╱╱┃┃╱╱╱╱╱┃╰━╯┃╱╱╭╮╱╱┃╰━╯┃╱╱┃╰━╯┃╱"}),e.jsx("p",{children:"╱╰━━━╯╱╱╰━━╯╱╱╰╯╰╯╰╯╱╱╰━━━╯╱╱╰╯╱╰╯╱╱╰╯╱╱╱╱╱╰━━━╯╱╱╰╯╱╱╰━━━╯╱╱╰━━━╯╱"})]}),e.jsx("p",{children:"# Social"}),e.jsxs("p",{children:["• ",e.jsx("a",{href:"https://github.com/simbafs",target:"_blank",className:"underline hover:underline-offset-1",children:"GitHub"})]}),e.jsxs("p",{children:["• ",e.jsx("a",{href:"https://twitter.com/simbafs",target:"_blank",className:"underline hover:underline-offset-1",children:"Twitter"})]}),e.jsx("br",{}),e.jsxs("p",{children:["use ",e.jsx(a,{cmd:["help"],terminal:n})," to list all commands"]}),e.jsxs("p",{children:["use ",e.jsx(a,{cmd:["cd","blog"],terminal:n})," to read blog posts"]})]})}function R({updateHistory:n}){const[r,s]=u.useState(""),t=l=>{s(l.target.value)},o=l=>{l.key==="Enter"&&(n({next:[r.split(" ")]}),s(""))};return e.jsx("input",{type:"text",className:`bg-base03 border-none outline-none flex-grow ${m.includes(r.split(" ")[0])||r.length===0?"text-green":"text-red"}`,autoFocus:!0,autoComplete:"off",spellCheck:"false",tabIndex:0,value:r,onChange:t,onKeyDown:o})}function f({cmd:n,updateHistory:r}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-blue",children:"vistor"}),e.jsx("span",{className:"text-cyan",children:"@"}),e.jsx("span",{className:"text-green",children:"blog.simbafs.cc"}),e.jsx("span",{className:"text-cyan whitespace-nowrap",children:":~"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-cyan whitespace-nowrap",children:"$ "}),r&&e.jsx(R,{updateHistory:r}),e.jsx("span",{className:"",children:n?.join(" ")})]})]})}function $({args:n,terminal:r,data:s}){return e.jsx(w,{args:n,terminal:r,data:s})}function D({initCmd:n,files:r}){const[s,t]=u.useReducer((o,l)=>l.clear?[]:[...o,...l?.next||[]],n||[]);return e.jsxs(e.Fragment,{children:[s.map(o=>e.jsxs("div",{style:{wordBreak:"break-all"},children:[e.jsx(f,{cmd:o}),e.jsx($,{args:o,terminal:{history:s,updateHistory:t,files:r}})]})),e.jsx(f,{updateHistory:t})]})}export{D as default};
