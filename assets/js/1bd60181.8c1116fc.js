"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,u={unversionedId:"Vue/\u5b9e\u73b0\u5220\u9664\u529f\u80fd01",id:"Vue/\u5b9e\u73b0\u5220\u9664\u529f\u80fd01",title:"\u5b9e\u73b0\u5220\u9664\u529f\u80fd01",description:"\u4e4b\u524d\u662f\u7528\u63d2\u69fd\u548cprops\u65b9\u6cd5\u4f20\u9012\u6570\u636e",source:"@site/docs/Vue/41_\u5b9e\u73b0\u5220\u9664\u529f\u80fd01.md",sourceDirName:"Vue",slug:"/Vue/\u5b9e\u73b0\u5220\u9664\u529f\u80fd01",permalink:"/docs/Vue/\u5b9e\u73b0\u5220\u9664\u529f\u80fd01",draft:!1,editUrl:"https://github.com/liuzichen1120/liuzichen1120.github.io/docs/Vue/41_\u5b9e\u73b0\u5220\u9664\u529f\u80fd01.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"v-model-05\u4fee\u9970\u7b26",permalink:"/docs/Vue/v-model-05\u4fee\u9970\u7b26"},next:{title:"\u5b9e\u73b0\u5220\u9664\u529f\u80fd02",permalink:"/docs/Vue/\u5b9e\u73b0\u5220\u9664\u529f\u80fd02"}},p={},c=[],s={toc:c},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e4b\u524d\u662f\u7528\u63d2\u69fd\u548cprops\u65b9\u6cd5\u4f20\u9012\u6570\u636e"),(0,o.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u900f\u4f20\u4ece\u7236\u7ec4\u4ef6\u4e2d\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u6570\u636e"),(0,o.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n<StudentList :students="STU_ARR"></StudentList>\n</template>\n\n<script setup>\n\nimport StudentList from "@/components/StudentList.vue";\nimport {reactive} from "vue";\nconst STU_ARR = reactive([\n    {\n  id:1,\n  name:"\u5f66",\n  age:18,\n  gender:"\u5973",\n  address:"\u6885\u6d1b\u5929\u5ead"\n},\n  {\n  id:2,\n      name:"\u742a\u7433",\n      age:19,\n      gender:"\u5973",\n      address:"\u5730\u7403"\n},\n  {\n    id:3,\n    name:"\u51ef\u838e",\n    age:36,\n    gender:"\u5973",\n    address:"\u6885\u6d1b\u5929\u5ead"\n  },\n  {\n    id:4,\n    name:"\u51c9\u51b0",\n    age:35,\n    gender:"\u5973",\n    address:"\u6076\u9b54\u4e00\u53f7"\n  }\n])\n<\/script>\n\n')),(0,o.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n<table>\n  <caption>\n    \u5b66\u751f\u5217\u8868\n  </caption>\n  <thead>\n  <tr>\n    <th>\u5b66\u53f7</th>\n    <th>\u59d3\u540d</th>\n    <th>\u5e74\u9f84</th>\n    <th>\u6027\u522b</th>\n    <th>\u4f4f\u5740</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr v-for="stu in $attrs.students">\n    <td>{{ stu.id }}</td>\n    <td>{{ stu.name }}</td>\n    <td>{{ stu.age }}</td>\n    <td>{{ stu.gender }}</td>\n    <td>{{ stu.address }}</td>\n  </tr>\n  </tbody>\n</table>\n</template>\n')),(0,o.kt)("p",null,"\u4f46\u662f\u8fd9\u79cd\u65b9\u6cd5\u5e76\u4e0d\u63a8\u8350\u3002\u4f7f\u7528\u81ea\u5b9a\u5c5e\u6027\u65f6\uff0c\u6700\u597d\u4f7f\u7528props"))}d.isMDXComponent=!0}}]);