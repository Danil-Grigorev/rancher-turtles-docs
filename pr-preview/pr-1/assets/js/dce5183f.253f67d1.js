"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l="Rancher Setup",o={unversionedId:"getting-started/rancher",id:"getting-started/rancher",title:"Rancher Setup",description:"Installing Rancher",source:"@site/docs/getting-started/rancher.md",sourceDirName:"getting-started",slug:"/getting-started/rancher",permalink:"/pr-preview/pr-1/docs/getting-started/rancher",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/getting-started/rancher.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/pr-preview/pr-1/docs/getting-started/intro"},next:{title:"Install Cluster API Operator",permalink:"/pr-preview/pr-1/docs/getting-started/install_capi_operator"}},s={},c=[{value:"Installing Rancher",id:"installing-rancher",level:2},{value:"Existing Rancher installation",id:"existing-rancher-installation",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rancher-setup"},"Rancher Setup"),(0,a.kt)("h2",{id:"installing-rancher"},"Installing Rancher"),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher")," in an existing or new Kubernetes cluster, you can use the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, make sure to follow one of the official ",(0,a.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/installation-and-upgrade"},"installation guides")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"Rancher"),"."),(0,a.kt)("li",{parentName:"ol"},"When installing ",(0,a.kt)("inlineCode",{parentName:"li"},"Rancher")," using the ",(0,a.kt)("inlineCode",{parentName:"li"},"helm")," command, use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--set")," option to specify the ",(0,a.kt)("inlineCode",{parentName:"li"},"features")," parameter. For the ",(0,a.kt)("inlineCode",{parentName:"li"},"embedded-cluster-api")," feature, set the value to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," to disable it."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--version")," option to specify the version of ",(0,a.kt)("inlineCode",{parentName:"li"},"Rancher")," you want to install. In this case, use the ",(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1/docs/getting-started/intro#prerequisites"},"recommended")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Rancher")," version for ",(0,a.kt)("inlineCode",{parentName:"li"},"Rancher Turtles"),".")),(0,a.kt)("p",null,"Here's the complete command to install ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"embedded-cluster-api")," feature disabled. Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<rancher-hostname>")," with the actual hostname of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher")," server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher rancher-stable/rancher --set features=embedded-cluster-api=false --set hostname=<rancher-hostname> --set version=<rancher-version> --set namespace=cattle-system --create-namespace --wait\n")),(0,a.kt)("h2",{id:"existing-rancher-installation"},"Existing Rancher installation"),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher Turtles")," in an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher")," cluster, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"feature.yaml")," file, with ",(0,a.kt)("inlineCode",{parentName:"li"},"embedded-cluster-api")," feature disabled:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="feature.yaml"',title:'"feature.yaml"'},"apiVersion: management.cattle.io/v3\nkind: Feature\nmetadata:\n  name: embedded-cluster-api\nspec:\n  value: false\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," to apply the ",(0,a.kt)("inlineCode",{parentName:"li"},"feature.yaml")," file to the cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f feature.yaml\n")))}u.isMDXComponent=!0}}]);