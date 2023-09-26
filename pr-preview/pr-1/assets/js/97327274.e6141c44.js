"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:4},o="Install Rancher Turtles Operator",s={unversionedId:"getting-started/install_turtles_operator",id:"getting-started/install_turtles_operator",title:"Install Rancher Turtles Operator",description:"This section walks through different installation options for the Rancher Turtles Operator.",source:"@site/docs/getting-started/install_turtles_operator.md",sourceDirName:"getting-started",slug:"/getting-started/install_turtles_operator",permalink:"/rancher-turtles-docs/pr-preview/pr-1/docs/getting-started/install_turtles_operator",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/getting-started/install_turtles_operator.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Install Cluster API Operator",permalink:"/rancher-turtles-docs/pr-preview/pr-1/docs/getting-started/install_capi_operator"},next:{title:"Your first cluster",permalink:"/rancher-turtles-docs/pr-preview/pr-1/docs/category/your-first-cluster"}},i={},p=[{value:"Install Rancher Turtles Operator with <code>Cluster API Operator</code> as a Helm dependency",id:"install-rancher-turtles-operator-with-cluster-api-operator-as-a-helm-dependency",level:3},{value:"Install Rancher Turtles Operator without <code>Cluster API Operator</code> as a Helm dependency",id:"install-rancher-turtles-operator-without-cluster-api-operator-as-a-helm-dependency",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install-rancher-turtles-operator"},"Install Rancher Turtles Operator"),(0,n.kt)("p",null,"This section walks through different installation options for the Rancher Turtles Operator."),(0,n.kt)("h3",{id:"install-rancher-turtles-operator-with-cluster-api-operator-as-a-helm-dependency"},"Install Rancher Turtles Operator with ",(0,n.kt)("inlineCode",{parentName:"h3"},"Cluster API Operator")," as a Helm dependency"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: this section will be extended with additional details later")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-turtles")," chart repository should be added first:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add turtles https://rancher-sandbox.github.io/rancher-turtles/\nhelm repo update\n")),(0,n.kt)("p",null,"To install ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," as a dependency to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher Turtles"),", a set of additional helm flags should be specified:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-turtles turtles/rancher-turtles\n    -n rancher-turtles-system\n    --dependency-update\n    # Passing secret name and namespace for additional environment variables to be used when deploying CAPI provider\n    --set cluster-api-operator.cluster-api.configSecret.name=<secret_name>\n    --set cluster-api-operator.cluster-api.configSecret.namespace=<secret_namespace>\n    --create-namespace --wait\n    --timeout 180s\n")),(0,n.kt)("p",null,"Any values passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"helm")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-api-operator")," key will be passed along to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," project. A full set of available values for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," can be found in the operator ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api-operator/blob/main/hack/charts/cluster-api-operator/values.yaml"},"values.yaml"),"."),(0,n.kt)("p",null,"Currently the available set of values for the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-api-operator")," setup in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-turtles"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'cluster-api-operator:\n  enabled: true # indicates if CAPI operator should be installed (default: true)\n  cert-manager:\n    enabled: true # indicates if cert-manager should be installed (default: true)\n  cluster-api:\n    enabled: true # indicates if core CAPI controllers should be installed (default: true)\n    version: v1.4.6 # version of CAPI to install (default: v1.4.6)\n    configSecret:\n      name: "" # name of the config secret to use for core CAPI controllers, used by the CAPI operator. See [CAPI operator](https://github.com/kubernetes-sigs/cluster-api-operator/tree/main/docs#installing-azure-infrastructure-provider) docs for more details.\n      namespace: "" # namespace of the config secret to use for core CAPI controllers, used by the CAPI operator.\n    core:\n      namespace: capi-system\n      fetchConfig: # (only required for airgapped environments)\n        url: ""  # url to fetch config from, used by the CAPI operator. See [CAPI operator](https://github.com/kubernetes-sigs/cluster-api-operator/tree/main/docs#provider-spec) docs for more details.\n        selector: ""  # selector to use for fetching config, used by the CAPI operator.\n    kubeadmBootstrap:\n      namespace: capi-kubeadm-bootstrap-system\n      fetchConfig:\n        url: ""\n        selector: ""\n    kubeadmControlPlane:\n      namespace: capi-kubeadm-control-plane-system\n      fetchConfig:\n        url: ""\n        selector: ""\n')),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"secret")," with a set of environment variables should be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster API Operator")," installation."),(0,n.kt)("p",null,"Example ",(0,n.kt)("inlineCode",{parentName:"p"},"variables/default")," ",(0,n.kt)("inlineCode",{parentName:"p"},"secret")," configuration with ",(0,n.kt)("inlineCode",{parentName:"p"},"CLUSTER_TOPOLOGY")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"EXP_CLUSTER_RESOURCE_SET")," feature flags set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="helm install flags"',title:'"helm',install:!0,'flags"':!0},"helm install ...\n--set cluster-api-operator.cluster-api.configSecret.name=variables\n--set cluster-api-operator.cluster-api.configSecret.namespace=default\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="secret.yaml"',title:'"secret.yaml"'},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: variables\n  namespace: default\ntype: Opaque\nstringData:\n  CLUSTER_TOPOLOGY: "true"\n  EXP_CLUSTER_RESOURCE_SET: "true"\n')),(0,n.kt)("h3",{id:"install-rancher-turtles-operator-without-cluster-api-operator-as-a-helm-dependency"},"Install Rancher Turtles Operator without ",(0,n.kt)("inlineCode",{parentName:"h3"},"Cluster API Operator")," as a Helm dependency"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher Turtles")," requires a connection to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Rancher Manager")," cluster. This can be achieved by:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installing it in the same cluster as the ",(0,n.kt)("inlineCode",{parentName:"li"},"Rancher Manager"),".")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: In the future, we will support different deployment topologies")),(0,n.kt)("p",null,"The recommended path of installation for the operator is by using ",(0,n.kt)("inlineCode",{parentName:"p"},"Helm"),". To install it in the cluster, a chart repository should be added first:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add turtles https://rancher-sandbox.github.io/rancher-turtles/\nhelm repo update\n")),(0,n.kt)("p",null,"and then it can be installed into the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-turtles-system")," namespace with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-turtles turtles/rancher-turtles\n    -n rancher-turtles-system\n    --set cluster-api-operator.enabled=false\n    --set cluster-api-operator.cluster-api.enabled=false\n    --create-namespace --wait\n    --dependency-update\n")))}d.isMDXComponent=!0}}]);