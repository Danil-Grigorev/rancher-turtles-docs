"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:3},i="Install Cluster API Operator",o={unversionedId:"getting-started/install_capi_operator",id:"getting-started/install_capi_operator",title:"Install Cluster API Operator",description:"This section describes how to install Cluster API Operator in the Kubernetes cluster.",source:"@site/docs/getting-started/install_capi_operator.md",sourceDirName:"getting-started",slug:"/getting-started/install_capi_operator",permalink:"/undefined/docs/getting-started/install_capi_operator",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/getting-started/install_capi_operator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Rancher Setup",permalink:"/undefined/docs/getting-started/rancher"},next:{title:"Install Rancher Turtles Operator",permalink:"/undefined/docs/getting-started/install_turtles_operator"}},s={},p=[{value:"Installing Cluster API (CAPI) and providers",id:"installing-cluster-api-capi-and-providers",level:2},{value:"Install as a <code>Rancher Turtles</code> dependency (recommended)",id:"install-as-a-rancher-turtles-dependency-recommended",level:3},{value:"Install manually with Helm (alternative)",id:"install-manually-with-helm-alternative",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install-cluster-api-operator"},"Install Cluster API Operator"),(0,n.kt)("p",null,"This section describes how to install ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," in the Kubernetes cluster."),(0,n.kt)("h2",{id:"installing-cluster-api-capi-and-providers"},"Installing Cluster API (CAPI) and providers"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CAPI")," and desired ",(0,n.kt)("inlineCode",{parentName:"p"},"CAPI")," providers could be installed using the helm-based installation for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api-operator"},(0,n.kt)("inlineCode",{parentName:"a"},"Cluster API Operator"))," or as a helm dependency for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher Turtles"),"."),(0,n.kt)("h3",{id:"install-as-a-rancher-turtles-dependency-recommended"},"Install as a ",(0,n.kt)("inlineCode",{parentName:"h3"},"Rancher Turtles")," dependency (recommended)"),(0,n.kt)("p",null,"See the ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher Turtles")," section for installing the operator as a Helm ",(0,n.kt)("a",{parentName:"p",href:"/undefined/docs/getting-started/install_turtles_operator#install-rancher-turtles-operator-with-cluster-api-operator-as-a-helm-dependency"},"dependency")),(0,n.kt)("h3",{id:"install-manually-with-helm-alternative"},"Install manually with Helm (alternative)"),(0,n.kt)("p",null,"To install ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," with version ",(0,n.kt)("inlineCode",{parentName:"p"},"1.4.6")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CAPI")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")," provider using helm, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the Helm repository for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster API Operator"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add capi-operator https://kubernetes-sigs.github.io/cluster-api-operator\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Update the Helm repository:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster API Operator"),", which will also install ",(0,n.kt)("inlineCode",{parentName:"li"},"cert-manager"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install capi-operator capi-operator/cluster-api-operator\n    --create-namespace -n capi-operator-system\n    --set infrastructure=docker:v1.4.6\n    --set core=cluster-api:v1.4.6\n    --set cert-manager.enabled=true\n    --timeout 90s --wait # Core Cluster API with kubeadm bootstrap and control plane providers will also be installed\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: ",(0,n.kt)("inlineCode",{parentName:"em"},"cert-manager")," is a hard requirement for ",(0,n.kt)("inlineCode",{parentName:"em"},"CAPI")," and ",(0,n.kt)("inlineCode",{parentName:"em"},"Cluster API Operator"))),(0,n.kt)("p",null,"To provide additional environment variables, enable feature gates, or supply cloud credentials, similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterctl")," ",(0,n.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/quick-start#initialization-for-common-providers"},"common provider"),", variables secret with ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," of the secret could be specified for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," as shown below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install capi-operator capi-operator/cluster-api-operator\n    --create-namespace -n capi-operator-system\n    --set infrastructure=docker:v1.4.6\n    --set core=cluster-api:v1.4.6\n    --set cert-manager.enabled=true\n    --timeout 90s\n    --secret-name <secret_name>\n    --secret-namespace <secret_namespace>\n    --wait\n")),(0,n.kt)("p",null,"Example secret data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: variables\n  namespace: default\ntype: Opaque\nstringData:\n  CLUSTER_TOPOLOGY: "true"\n  EXP_CLUSTER_RESOURCE_SET: "true"\n')),(0,n.kt)("p",null,"To select more than one desired provider to be installed together with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"--infrastructure")," flag can be specified with multiple provider names separated by a comma. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'helm install ... --set infrastructure="docker:v1.4.6;azure:v1.4.6"\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"infrastructure")," flag is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"docker:v1.4.6;azure:v1.4.6"),", representing the desired provider names. This means that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," will install and manage multiple providers, ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Azure")," respectively, with versions ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.4.6")," specified in this example."),(0,n.kt)("p",null,"For more fine-grained control of the providers and other components installed with CAPI, see the ",(0,n.kt)("a",{parentName:"p",href:"/undefined/docs/tasks/capi-operator/add_infrastructure_provider"},"Add the infrastructure provider")," section."))}u.isMDXComponent=!0}}]);