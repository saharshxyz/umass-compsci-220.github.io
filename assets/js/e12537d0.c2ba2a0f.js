"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[4944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?s.createElement(h,a(a({ref:t},p),{},{components:n})):s.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},a="Discussion 3: Lists",o={unversionedId:"discussions/Week 3 - Lists",id:"discussions/Week 3 - Lists",title:"Discussion 3: Lists",description:"Welcome to the second discussion! This week you'll learn more about Lists and we'll review reduce.",source:"@site/materials/discussions/Week 3 - Lists.md",sourceDirName:"discussions",slug:"/discussions/Week 3 - Lists",permalink:"/materials/discussions/Week 3 - Lists",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Discussion 2: Types and HOFs",permalink:"/materials/discussions/Week 2 - Types and HOF"},next:{title:"Discussion 4: Mental Models and Closures",permalink:"/materials/discussions/Week 4 - Mental Models and Closures"}},l={},u=[{value:"Materials",id:"materials",level:2},{value:"Opening and working with the starter code",id:"opening-and-working-with-the-starter-code",level:2},{value:"Submitting",id:"submitting",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"discussion-3-lists"},"Discussion 3: Lists"),(0,i.kt)("p",null,"Welcome to the second discussion! This week you'll learn more about Lists and we'll review reduce."),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("p",null,"Download the lab slides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%203%20-%20No%20Solutions.pdf"},"here"),"."),(0,i.kt)("p",null,"The slides with solutions will be posted ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%203%20-%20Solutions.pdf"},"here")," after the last discussion of the day."),(0,i.kt)("p",null,"Download the starter code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/03-lists.zip"},"here"),". Make sure to submit this to gradescope, ask your lab leaders to help you if you are unsure of how. We'll also show the process in the first lab."),(0,i.kt)("p",null,"The solution file will be posted ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/lab3-solution.ts"},"here")," after lab."),(0,i.kt)("h2",{id:"opening-and-working-with-the-starter-code"},"Opening and working with the starter code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you need help installing ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/environment"},"this page"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,i.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"After opening, run ",(0,i.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal"))),(0,i.kt)("h2",{id:"submitting"},"Submitting"),(0,i.kt)("p",null,"Use the following command to build a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,i.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}d.isMDXComponent=!0}}]);