"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9220],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||d;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=t.length,o=new Array(d);o[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<d;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const d={},o=void 0,u={unversionedId:"Vue/\u6dfb\u52a0\u5b66\u751f\u529f\u80fd",id:"Vue/\u6dfb\u52a0\u5b66\u751f\u529f\u80fd",title:"\u6dfb\u52a0\u5b66\u751f\u529f\u80fd",description:"APP\u7ec4\u4ef6",source:"@site/docs/Vue/45_\u6dfb\u52a0\u5b66\u751f\u529f\u80fd.md",sourceDirName:"Vue",slug:"/Vue/\u6dfb\u52a0\u5b66\u751f\u529f\u80fd",permalink:"/docs/Vue/\u6dfb\u52a0\u5b66\u751f\u529f\u80fd",draft:!1,editUrl:"https://github.com/liuzichen1120/liuzichen1120.github.io/docs/Vue/45_\u6dfb\u52a0\u5b66\u751f\u529f\u80fd.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u73b0\u5220\u9664\u529f\u80fd04\u6700\u7ec8\u7248",permalink:"/docs/Vue/\u5b9e\u73b0\u5220\u9664\u529f\u80fd04\u6700\u7ec8\u7248"},next:{title:"\u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/Vue/\u4f9d\u8d56\u6ce8\u5165"}},i={},s=[],l={toc:s},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APP\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<template>\n<StudentList :students="STU_ARR" @del-stu="delStudentByIndex"></StudentList>\n  <hr>\n  <StudentForm @add-students="addNewStudent"></StudentForm>\n</template>\n\n<script setup>\n\nimport StudentList from "@/components/StudentList.vue";\nimport {reactive, ref} from "vue";\nimport StudentForm from "@/components/StudentForm.vue";\nconst STU_ARR = ref([\n    {\n  id:1,\n  name:"\u5f66",\n  age:18,\n  gender:"\u5973",\n  address:"\u6885\u6d1b\u5929\u5ead"\n},\n  {\n  id:2,\n      name:"\u742a\u7433",\n      age:19,\n      gender:"\u5973",\n      address:"\u5730\u7403"\n},\n  {\n    id:3,\n    name:"\u51ef\u838e",\n    age:36,\n    gender:"\u5973",\n    address:"\u6885\u6d1b\u5929\u5ead"\n  },\n  {\n    id:4,\n    name:"\u51c9\u51b0",\n    age:35,\n    gender:"\u5973",\n    address:"\u6076\u9b54\u4e00\u53f7"\n  }\n])\n\nconst delStudentByIndex =(index)=>{\n    STU_ARR.value.splice(index,1)\n}\nconst addNewStudent=(student) =>{\n  let lastId =STU_ARR.value.at(-1)?.id\n  // const newId =typeof lastId === \'number\'?lastId+1:1\n  let newId;\n  newId = !isNaN(lastId) ? lastId + 1 : 1;\n  student.id =newId\n  STU_ARR.value.push(student)\n}\n<\/script>\n\n<style scoped>\n\n</style>\n')),(0,a.kt)("p",null,"\u6dfb\u52a0\u5b66\u751f\u7684\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<template>\n  <form @submit.prevent="submitHandler">\n    <div>\n      \u59d3\u540d <input type="text" v-model="newStu.name">\n    </div>\n    <div>\n      \u5e74\u9f84 <input type="number" min="1" v-model="newStu.age">\n    </div>\n    <div>\n      \u59d3\u540d <input type="radio" name="gender" value="\u7537" v-model="newStu.gender">\u7537\n      <input type="radio" name="gender" value="\u5973" v-model="newStu.gender">\u5973\n    </div>\n    <div>\n      \u4f4f\u5740 <input type="text" v-model="newStu.address">\n    </div>\n    <div>\n      <button>\u6dfb\u52a0</button>\n    </div>\n  </form>\n</template>\n\n<script setup>\nimport {reactive, ref} from "vue";\nconst emit = defineEmits(["addStudents"])\nconst newStu = ref({\n  name:"",\n  age:1,\n  gender:"\u7537",\n  address:""\n})\nconst submitHandler = () =>{\n  // emit("addStudents",Object.assign({},newStu.value))\n  emit("addStudents",{...newStu.value})\n newStu.value.name=""\n newStu.value.age=1\n newStu.value.name="\u7537"\n newStu.value.address=""\n}\n<\/script>\n\n<style scoped>\n\n</style>\n')))}c.isMDXComponent=!0}}]);