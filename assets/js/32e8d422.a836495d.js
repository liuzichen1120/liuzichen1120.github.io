"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3151],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||v[m]||a;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5111:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const a={},o=void 0,l={unversionedId:"Vue/v-for",id:"Vue/v-for",title:"v-for",description:"v-for\u6709\u51e0\u4e2a\u5143\u7d20\u6267\u884c\u51e0\u6b21\u3002\u6570\u7ec4\u91cc\u9762\u6709\u4e09\u4e2a\u5143\u7d20\uff0c\u5c31\u4f1a\u6267\u884c\u4e09\u6b21\uff0c\u5199\u5230\u4ec0\u4e48\u6807\u7b7e\u4e0a\u751f\u6210\u4ec0\u4e48\u6807\u7b7e",source:"@site/docs/Vue/28_v-for.md",sourceDirName:"Vue",slug:"/Vue/v-for",permalink:"/docs/Vue/v-for",draft:!1,editUrl:"https://github.com/liuzichen1120/liuzichen1120.github.io/docs/Vue/28_v-for.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u7ec4\u4ef6",permalink:"/docs/Vue/\u52a8\u6001\u7ec4\u4ef6"},next:{title:"\u7f51\u9875\u7684\u6e32\u67d3",permalink:"/docs/Vue/vue-\u7f51\u9875\u7684\u6e32\u67d3"}},p={},c=[],u={toc:c},d="wrapper";function v(e){let{components:n,...r}=e;return(0,i.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\n  import {ref} form "vue"\n  const arr =ref(["\u5b59\u609f\u7a7a","\u732a\u516b\u6212","\u6c99\u548c\u5c1a"])\n<\/script>\n<template>\n <ul>\n  <li v-for="name in arr">{{name}}</li> //\u7528in\u4e5f\u8bb8\uff0c\u7528of\u4e5f\u53ef\u4ee5\n </ul>\n</template>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v-for\u6709\u51e0\u4e2a\u5143\u7d20\u6267\u884c\u51e0\u6b21\u3002\u6570\u7ec4\u91cc\u9762\u6709\u4e09\u4e2a\u5143\u7d20\uff0c\u5c31\u4f1a\u6267\u884c\u4e09\u6b21\uff0c\u5199\u5230\u4ec0\u4e48\u6807\u7b7e\u4e0a\u751f\u6210\u4ec0\u4e48\u6807\u7b7e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  <ul>\n        <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>\n    </ul>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u7d22\u5f15")),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u904d\u5386\u5bf9\u8c61")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const arr2 = ref([\n    {\n        id: 1,\n        name: "\u5b59\u609f\u7a7a",\n        age: 18\n    },\n    {\n        id: 2,\n        name: "\u732a\u516b\u6212",\n        age: 28\n    },\n    {\n        id: 3,\n        name: "\u6c99\u548c\u5c1a",\n        age: 38\n    }\n])\n<template>\n    <div v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</div>\n    <hr />\n    \x3c!-- <template v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</template> --\x3e\n</template>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<script setup>\nimport { ref } from "vue"\nconst arr = ref(["\u5b59\u609f\u7a7a", "\u732a\u516b\u6212", "\u6c99\u548c\u5c1a", "\u5510\u50e7"])\nconst arr2 = ref([\n    {\n        id: 1,\n        name: "\u5b59\u609f\u7a7a",\n        age: 18\n    },\n    {\n        id: 2,\n        name: "\u732a\u516b\u6212",\n        age: 28\n    },\n    {\n        id: 3,\n        name: "\u6c99\u548c\u5c1a",\n        age: 38\n    }\n])\n<\/script>\n<template>\n    <button @click="arr.push(\'\u767d\u9aa8\u7cbe\')">\u70b9\u6211\u4e00\u4e0b</button>\n    <button @click="arr2.unshift({ id: 4, name: \'\u5510\u50e7\', age: 16 })">\n        \u70b9\u6211\u4e00\u4e0b2\n    </button>\n    <ul>\n        <li v-for="name of arr">{{ name }}</li>\n    </ul>\n\n    <ul>\n        <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>\n    </ul>\n\n    <div v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</div>\n    <hr />\n    \x3c!-- <template v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</template> --\x3e\n\n    \x3c!-- \n        \u6211\u4eec\u5728\u4f7f\u7528v-for\u904d\u5386\u65f6\uff0c\u65e7\u7684\u7ed3\u6784\u548c\u65b0\u7684\u7ed3\u6784\u662f\u6309\u7167\u987a\u5e8f\u8fdb\u884c\u5bf9\u6bd4\u7684\n        <div>\u5b59\u609f\u7a7a</div>\n        <div>\u732a\u516b\u6212</div>\n        <div>\u6c99\u548c\u5c1a</div>\n\n        <div>\u5510\u50e7</div>\n        <div>\u5b59\u609f\u7a7a</div>\n        <div>\u732a\u516b\u6212</div>\n        <div>\u6c99\u548c\u5c1a</div>\n\n        <div>\u5b59\u609f\u7a7a</div>\n        <div>\u732a\u516b\u6212</div>\n        <div>\u6c99\u548c\u5c1a</div>\n        <div>\u5510\u50e7</div>\n\n        \u5728\u4f7f\u7528v-for\u65f6\uff0c\u53ef\u4ee5\u4e3a\u5143\u7d20\u6307\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684key\uff08\u9519\u4f4d\u95ee\u9898\uff09\n            \u6709\u4e86key\u4ee5\u540e\uff0c\u5143\u7d20\u518d\u6bd4\u8f83\u65f6\u5c31\u4f1a\u6309\u7167\u76f8\u540c\u7684key\u53bb\u6bd4\u8f83\u800c\u4e0d\u662f\u987a\u5e8f\n\n        <div key=1>\u5b59\u609f\u7a7a</div>\n        <div key=2>\u732a\u516b\u6212</div>\n        <div key=3>\u6c99\u548c\u5c1a</div>\n\n        <div key=4>\u5510\u50e7</div>\n        <div key=1>\u5b59\u609f\u7a7a</div>\n        <div key=2>\u732a\u516b\u6212</div>\n        <div key=3>\u6c99\u548c\u5c1a</div>\n        \n    --\x3e\n    <ul>\n        <li v-for="({ id, name, age }, index) in arr2" :key="id"> key\u4f7f\u7528index\u4e0d\u53ef\u4ee5\uff0cindex\u662f\u7d22\u5f15\uff0c\u987a\u5e8f\u3002\u4f7f\u7528\u5bf9\u8c61\u81ea\u8eab\u4e2d\u552f\u4e00\u7684\u6807\u8bc6\u3002\n                                                                  key\u5c5e\u6027\u4e0d\u4f1a\u51fa\u73b0\u5728\u5143\u7d20\u4e0a\uff0c\u53ea\u662f\u5728\u5185\u90e8\u505a\u4e00\u4e2a\u6bd4\u8f83\n            {{ name }} -- {{ age }}\n            <input type="text" /> \n        </li>\n    </ul>\n</template>\n\n')))}v.isMDXComponent=!0}}]);