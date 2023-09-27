"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[9754],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2580:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3},i="Installing the CoreProvider",s={unversionedId:"tasks/capi-operator/installing_core_provider",id:"tasks/capi-operator/installing_core_provider",title:"Installing the CoreProvider",description:"This section describes how to install the CoreProvider, which is responsible for managing the Cluster API CRDs and the Cluster API controller.",source:"@site/docs/tasks/capi-operator/installing_core_provider.md",sourceDirName:"tasks/capi-operator",slug:"/tasks/capi-operator/installing_core_provider",permalink:"/docs/tasks/capi-operator/installing_core_provider",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/tasks/capi-operator/installing_core_provider.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Add Infrastructure Provider",permalink:"/docs/tasks/capi-operator/add_infrastructure_provider"},next:{title:"Contributing Guidelines",permalink:"/docs/CONTRIBUTING"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-the-coreprovider"},"Installing the CoreProvider"),(0,a.kt)("p",null,"This section describes how to install the CoreProvider, which is responsible for managing the Cluster API CRDs and the Cluster API controller."),(0,a.kt)("p",null,"Any existing namespace could be utilized for providers in the Kubernetes cluster. However, before creating a provider object, make sure the specified namespace has been created. In the example below, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"capi-system")," namespace. To create this namespace through either the Command Line Interface (CLI) by running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create namespace capi-system"),", or the declarative approach described in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/namespaces-walkthrough/#create-new-namespaces"},"official Kubernetes documentation")," could be used."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: operator.cluster.x-k8s.io/v1alpha2\nkind: CoreProvider\nmetadata:\n  name: cluster-api\n  namespace: capi-system\nspec:\n  version: v1.4.6\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only one CoreProvider can be installed at the same time on a single cluster.")))}u.isMDXComponent=!0}}]);