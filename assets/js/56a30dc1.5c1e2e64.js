"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,f=m["".concat(c,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"Vue/\u4e8b\u4ef6",id:"Vue/\u4e8b\u4ef6",title:"\u4e8b\u4ef6",description:"\u4e3a\u5143\u7d20\u7ed1\u5b9a\u4e8b\u4ef6\uff0c",source:"@site/docs/Vue/31_\u4e8b\u4ef6.md",sourceDirName:"Vue",slug:"/Vue/\u4e8b\u4ef6",permalink:"/docs/Vue/\u4e8b\u4ef6",draft:!1,editUrl:"https://github.com/liuzichen1120/liuzichen1120.github.io/docs/Vue/31_\u4e8b\u4ef6.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u69fd",permalink:"/docs/Vue/\u63d2\u69fd"},next:{title:"\u4e8b\u4ef6\u7684\u4f20\u64ad",permalink:"/docs/Vue/\u4e8b\u4ef6\u7684\u4f20\u64ad"}},c={},p=[],u={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a\u5143\u7d20\u7ed1\u5b9a\u4e8b\u4ef6\uff0c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ed1\u5b9a\u4e8b\u4ef6\u4f7f\u7528v-on\u6307\u4ee4"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"            v-on:\u4e8b\u4ef6\u540d\n\n            @\u4e8b\u4ef6\u540d\n")),(0,a.kt)("p",{parentName:"li"},"2.\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u4e24\u79cd\u65b9\u5f0f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"            a.\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u5668\n\n                    -\u4e8b\u4ef6\u89e6\u53d1\u65f6\uff0c\u76f4\u63a5\u6267\u884cjs\u8bed\u53e5\n\n            b.\u65b9\u6cd5\u4e8b\u4ef6\u5904\u7406\u5668\uff08vue\u5e2e\u6211\u4eec\u8c03\u7684\uff09\n\n                    -\u4e8b\u4ef6\u89e6\u53d1\u65f6\uff0cvue\u4f1a\u5bf9\u4e8b\u4ef6\u7684\u51fd\u6570\u8fdb\u884c\u8c03\u7528\n\n            vue\u5982\u4f55\u533a\u5206\u4e24\u79cd\u5904\u7406\u5668\uff1a\n\n                        \u68c0\u67e5\u4e8b\u4ef6\u7684\u503c\u662f\u5426\u5408\u6cd5\u7684js\u6807\u8bc6\u7b26\u6216\u5c5e\u6027\u8bbf\u95ee\u8def\u5f84\uff0c\n\n                                    \u5982\u679c\u662f\uff0c\u5219\u8868\u8fbe\u5b83\u662f\u65b9\u6cd5\u4e8b\u4ef6\u5904\u7406\u5668    \n\n                                    \u5426\u5219\uff0c\u8868\u793a\u5b83\u662f\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u5668\n\n           \u4e24\u79cd\u5904\u7406\u5668\u53c2\u6570\u4e0d\u540c\n\n                    \u65b9\u6cd5\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u7531vue\u4f20\n\n                    \u5185\u8054\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u7531\u6211\u4eec\u81ea\u5df1\u4f20\n\n                                -\u53c2\u6570\u5c31\u662f\u4e8b\u4ef6\u5bf9\u8c61\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<h1>{{count}}</h1>\n  <button v-on:click="count++">\u70b9\u6211\u4e00\u4e0b</button>\n  <hr>\n  // \u53ea\u4f20\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6700\u7ec8\u662fvue\u5e2e\u6211\u4eec\u8c03\u7684 \u65b9\u6cd5\u4e8b\u4ef6\u5904\u7406\u5668\n  <button @click="click">\u4e5f\u70b9\u6211\u4e00\u4e0b</button>\n  <hr>\n  //\u5185\u8054\u65f6\u95f4\u5904\u7406\u5668\n  <button @click="click()">\u4e5f\u70b9\u6211\u4e00\u4e0b</button>\n</template>\n\n<script setup>\nimport {ref} from "vue";\n\nconst count = ref(0)\nfunction click(){\n  alert("\u51fd\u6570\u6267\u884c\u4e86")\n}\n')),(0,a.kt)("p",null,"js\u6807\u8bc6\u7b26"),(0,a.kt)("p",null,"JavaScript\u6807\u8bc6\u7b26\u662f\u7528\u4e8e\u6807\u8bc6\u53d8\u91cf\u3001\u51fd\u6570\u3001\u5bf9\u8c61\u7b49\u7684\u540d\u79f0\u3002\u6807\u8bc6\u7b26\u5fc5\u987b\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\uff08_\uff09\u548c\u7f8e\u5143\u7b26\u53f7\uff08$\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5fc5\u987b\u662f\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u6216\u7f8e\u5143\u7b26\u53f7\uff0c\u4e0d\u80fd\u662f\u6570\u5b57\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6807\u8bc6\u7b26\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u4f7f\u7528JavaScript\u5173\u952e\u5b57\u4f5c\u4e3a\u6807\u8bc6\u7b26\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u5305\u542b\u7a7a\u683c\u6216\u5176\u4ed6\u7279\u6b8a\u5b57\u7b26\uff0c\u5982@\u3001#\u3001%\u7b49\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u6709\u6548\u7684JavaScript\u6807\u8bc6\u7b26\uff1a"),(0,a.kt)("p",null,"myVariable\n_MyVariable\n$myVariable\nmy_variable\nmyVariable123"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u65e0\u6548\u7684JavaScript\u6807\u8bc6\u7b26\uff1a"),(0,a.kt)("p",null,"123myVariable\nmy  Variable\nmyVariable@\nfunction  (\u8fd9\u662fJavaScript\u5173\u952e\u5b57)"),(0,a.kt)("p",null,"javaScript\u4e8b\u4ef6\u5bf9\u8c61\u662f\u6307\u5728\u4e8b\u4ef6\u89e6\u53d1\u671f\u95f4\uff0c\u7531\u6d4f\u89c8\u5668\u521b\u5efa\u7684\u4e00\u4e2a\u5305\u542b\u4e8b\u4ef6\u76f8\u5173\u4fe1\u606f\u7684\u5bf9\u8c61\u3002\u5f53\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u521b\u5efa\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u5e76\u5c06\u8be5\u5bf9\u8c61\u4f5c\u4e3a\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u5bf9\u8c61\u5305\u542b\u8bb8\u591a\u6709\u7528\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"type\uff1a\u4e8b\u4ef6\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ol"},"target\uff1a\u4e8b\u4ef6\u5bf9\u8c61\u5bf9\u5e94\u7684DOM\u5143\u7d20"),(0,a.kt)("li",{parentName:"ol"},"currentTarget\uff1a\u4e8b\u4ef6\u5f53\u524d\u63a5\u6536\u5904\u7406\u7684DOM\u5143\u7d20"),(0,a.kt)("li",{parentName:"ol"},"clientX\u3001clientY\u3001pageX\u3001pageY\uff1a\u4e8b\u4ef6\u89e6\u53d1\u65f6\u7684\u5750\u6807\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ol"},"keyCode\uff1a\u952e\u76d8\u4e8b\u4ef6\u89e6\u53d1\u65f6\u7684\u6309\u952e\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ol"},"preventDefault()\uff1a\u53d6\u6d88\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a"),(0,a.kt)("li",{parentName:"ol"},"stopPropagation()\uff1a\u963b\u6b62\u4e8b\u4ef6\u7684\u8fdb\u4e00\u6b65\u5192\u6ce1\u6216\u6355\u83b7")),(0,a.kt)("p",null,"\u901a\u8fc7\u8bbf\u95ee\u4e8b\u4ef6\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u4e8b\u4ef6\u53d1\u751f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u5bf9\u4e8b\u4ef6\u8fdb\u884c\u9002\u5f53\u7684\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u5728\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528$event\u6765\u8bbf\u95ee\u4e8b\u4ef6\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'function click(...args){\n  alert("\u51fd\u6570\u6267\u884c\u4e86")\n  console.log(args)\n}\n\n<button @click="click(1,2,$event)">\u4e5f\u70b9\u6211\u4e00\u4e0b</button>\n')))}s.isMDXComponent=!0}}]);