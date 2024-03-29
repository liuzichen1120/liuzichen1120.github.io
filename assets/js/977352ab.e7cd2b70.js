"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(a,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,d(d({ref:t},l),{},{components:n})):r.createElement(f,d({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,d=new Array(i);d[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[c]="string"==typeof e?e:o,d[1]=u;for(var s=2;s<i;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},d=void 0,u={unversionedId:"Vue/\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02",id:"Vue/\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02",title:"\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02",description:"StudentItem\u7ec4\u4ef6",source:"@site/docs/Vue/48_\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02.md",sourceDirName:"Vue",slug:"/Vue/\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02",permalink:"/docs/Vue/\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02",draft:!1,editUrl:"https://github.com/liuzichen1120/liuzichen1120.github.io/docs/Vue/48_\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c02.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c",permalink:"/docs/Vue/\u4f9d\u8d56\u6ce8\u5165\u6700\u7ec8\u7248\u672c"},next:{title:"\u72b6\u6001\u63d0\u5347",permalink:"/docs/Vue/\u72b6\u6001\u63d0\u5347"}},a={},s=[],l={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"StudentItem\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n  <tbody>\n  <tr v-for="(stu,index) in students">\n    <td>{{ stu.id }}</td>\n    <td>{{ stu.name }}</td>\n    <td>{{ stu.age }}</td>\n    <td>{{ stu.gender }}</td>\n    <td>{{ stu.address }}</td>\n    <td>\n      <a href="#" @click.prevent="$event=>delStuHandler(index)">\u5220\u9664</a>\n    </td>\n  </tr>\n  </tbody>\n</template>\n\n<script setup>\nimport {inject} from "vue";\n\n// const props = defineProps(["students"])\nconst emits = defineEmits(["delStu"])\nconst delStuHandler =(index)=>{\n  if(confirm("\u786e\u8ba4\u5220\u9664\u5417")){\n    // emits("delStu",index)\n    delStudentByIndex(index)\n  }\n}\nconst {students, delStudentByIndex ,addNewStudent}=inject("student")\n<\/script>\n\n<style scoped>\ntd{\n  border: 1px solid black;\n  font-size: 24px;\n}\n\n</style>\n')),(0,o.kt)("p",null,"StudentForm\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n  <form @submit.prevent="submitHandler">\n    <div>\n      \u59d3\u540d <input type="text" v-model="newStu.name">\n    </div>\n    <div>\n      \u5e74\u9f84 <input type="number" min="1" v-model="newStu.age">\n    </div>\n    <div>\n      \u59d3\u540d <input type="radio" name="gender" value="\u7537" v-model="newStu.gender">\u7537\n      <input type="radio" name="gender" value="\u5973" v-model="newStu.gender">\u5973\n    </div>\n    <div>\n      \u4f4f\u5740 <input type="text" v-model="newStu.address">\n    </div>\n    <div>\n      <button>\u6dfb\u52a0</button>\n    </div>\n  </form>\n</template>\n\n<script setup>\nimport {reactive, ref,inject} from "vue";\nconst {addNewStudent} =inject("student")\nconst newStu = ref({\n  name:"",\n  age:1,\n  gender:"\u7537",\n  address:""\n})\nconst submitHandler = () =>{\n  addNewStudent({...newStu.value})\n newStu.value.name=""\n newStu.value.age=1\n newStu.value.name="\u7537"\n newStu.value.address=""\n}\n<\/script>\n\n<style scoped>\n\n</style>\n')))}p.isMDXComponent=!0}}]);