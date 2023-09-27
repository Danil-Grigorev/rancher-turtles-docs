"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[8633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:0},c="Deployment Scenarios",i={unversionedId:"reference-guides/architecture/deployment",id:"reference-guides/architecture/deployment",title:"Deployment Scenarios",description:"The early release of Rancher Turtles only supports having Rancher Manager and",source:"@site/docs/reference-guides/architecture/deployment.md",sourceDirName:"reference-guides/architecture",slug:"/reference-guides/architecture/deployment",permalink:"/rancher-turtles-docs/docs/reference-guides/architecture/deployment",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/reference-guides/architecture/deployment.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Components",permalink:"/rancher-turtles-docs/docs/reference-guides/architecture/components"},next:{title:"Tasks",permalink:"/rancher-turtles-docs/docs/category/tasks"}},s={},l=[{value:"Rancher Manager &amp; CAPI Management Combined",id:"rancher-manager--capi-management-combined",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment-scenarios"},"Deployment Scenarios"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The early release of Rancher Turtles only supports having Rancher Manager and\nRancher Turtles running in the same cluster. A topology with a separate Rancher\nManager cluster and one/multiple CAPI management cluster/s will be supported in\nfuture releases.")),(0,a.kt)("h2",{id:"rancher-manager--capi-management-combined"},"Rancher Manager & CAPI Management Combined"),(0,a.kt)("p",null,"In this topology, both Rancher Manager and Rancher Turtles are deployed to the\nsame Kubernetes cluster, and it acts as a centralized management cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rancher Manager &amp; CAPI Management Combined",src:r(4313).Z,width:"1040",height:"1367"})),(0,a.kt)("p",null,"This architecture offers a simplified deployment of components and provides a\nsingle view of all clusters. On the flip side, it's important to consider that\nthe number of clusters that can be managed effectively by Cluster API (CAPI) is\nlimited by the resources available within the single management cluster."))}d.isMDXComponent=!0},4313:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/in_cluster_topology-a2ed8acb10dec7267295a15711971003.png"}}]);