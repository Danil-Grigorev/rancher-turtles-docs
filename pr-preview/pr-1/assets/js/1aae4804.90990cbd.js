"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[44],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,h=p["".concat(s,".").concat(g)]||p[g]||m[g]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:3},o="Create & import your first cluster using Fleet",i={unversionedId:"getting-started/create-first-cluster/using_fleet",id:"getting-started/create-first-cluster/using_fleet",title:"Create & import your first cluster using Fleet",description:"This section will guide you through creating your first cluster and importing it into Rancher Manager using a GitOps workflow with Fleet.",source:"@site/docs/getting-started/create-first-cluster/using_fleet.md",sourceDirName:"getting-started/create-first-cluster",slug:"/getting-started/create-first-cluster/using_fleet",permalink:"/rancher-turtles-docs/pr-preview/pr-1/docs/getting-started/create-first-cluster/using_fleet",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/getting-started/create-first-cluster/using_fleet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Create & Import Your First Cluster Using kubectl",permalink:"/rancher-turtles-docs/pr-preview/pr-1/docs/getting-started/create-first-cluster/using_kubectl"},next:{title:"Tasks",permalink:"/rancher-turtles-docs/pr-preview/pr-1/docs/category/tasks"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your cluster definition",id:"create-your-cluster-definition",level:2},{value:"Create your repo for Fleet",id:"create-your-repo-for-fleet",level:2},{value:"Mark Namespace for auto-import",id:"mark-namespace-for-auto-import",level:2},{value:"Configure Rancher Manager",id:"configure-rancher-manager",level:2},{value:"Using the Rancher Manager UI",id:"using-the-rancher-manager-ui",level:3},{value:"Using kubectl",id:"using-kubectl",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create--import-your-first-cluster-using-fleet"},"Create & import your first cluster using Fleet"),(0,n.kt)("p",null,"This section will guide you through creating your first cluster and importing it into Rancher Manager using a GitOps workflow with Fleet."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rancher Manager cluster with Rancher Turtles installed"),(0,n.kt)("li",{parentName:"ul"},"Cluster API providers installed for your scenario - we'll be using the Docker infrastructure and Kubeadm bootstrap/controlplane providers in these instructions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"clusterctl")," CLI - see the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api/releases"},"releases"))),(0,n.kt)("h2",{id:"create-your-cluster-definition"},"Create your cluster definition"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"clusterctl")," CLI can be used to generate the YAML for a cluster. When you run ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterctl generate cluster")," command is run, it will connect to the management cluster to see what infrastructure providers have been installed. Also, it will take care of replacing any tokens in the chosen template (a.k.a flavour) with values from environment variables."),(0,n.kt)("p",null,"Alternatively, you can craft the YAML for your cluster manually. If you decide to do this then you can use the ",(0,n.kt)("strong",{parentName:"p"},"templates")," that infrastructure providers publish as part of their releases. For example, the AWS provider ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api-provider-aws/releases/tag/v2.2.1"},"publishes files")," prefixed with ",(0,n.kt)("strong",{parentName:"p"},"cluster-template")," that can be used as a base. You will need to replace any tokens yourself or by using clusterctl (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterctl generate cluster test1 --from https://github.com/kubernetes-sigs/cluster-api-provider-aws/releases/download/v2.2.1/cluster-template-eks.yaml > cluster.yaml"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This guide does not use ClusterClass. Templates that use ClusterClass will require that the experimental feature be enabled.")),(0,n.kt)("p",null,"To generate the YAML for the cluster do the following (assuming the Docker infrastructure provider is being used):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open a terminal and run the following:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTROL_PLANE_MACHINE_COUNT=1\nexport WORKER_MACHINE_COUNT=1\nexport KUBERNETES_VERSION=v1.26.4\n\nclusterctl generate cluster cluster1 \\\n--from https://raw.githubusercontent.com/rancher-sandbox/rancher-turtles-fleet-example/templates/docker-kubeadm.yaml \\\n> cluster1.yaml\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"View ",(0,n.kt)("strong",{parentName:"li"},"cluster1.yaml")," to ensure there are no tokens. You can make any changes you want as well.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Cluster API quickstart guide contains more detail. Read the steps related to this section ",(0,n.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#required-configuration-for-common-providers"},"here"),".")),(0,n.kt)("h2",{id:"create-your-repo-for-fleet"},"Create your repo for Fleet"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new git repository (this guide uses GitHub)"),(0,n.kt)("li",{parentName:"ol"},"Create a new folder called ",(0,n.kt)("strong",{parentName:"li"},"clusters")),(0,n.kt)("li",{parentName:"ol"},"Move the ",(0,n.kt)("strong",{parentName:"li"},"cluster1.yaml")," file you generated in the last section to the ",(0,n.kt)("strong",{parentName:"li"},"clusters")," folder."),(0,n.kt)("li",{parentName:"ol"},"Create a file called ",(0,n.kt)("strong",{parentName:"li"},"fleet.yaml")," in the root and add the following contents")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"namespace: default\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Commit the changes")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"fleet.yaml")," is used to specify configuration options for fleet (see ",(0,n.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/ref-fleet-yaml"},"docs")," for further details). In this instance its declaring that the cluster definitions should be added to the ",(0,n.kt)("strong",{parentName:"p"},"default")," namespace")),(0,n.kt)("p",null,"After the described steps there will be a repository created structure similar to the example: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles-fleet-example"},"https://github.com/rancher-sandbox/rancher-turtles-fleet-example")),(0,n.kt)("h2",{id:"mark-namespace-for-auto-import"},"Mark Namespace for auto-import"),(0,n.kt)("p",null,"To automatically import a CAPI cluster into Rancher Manager there are 2 options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"label a namespace so all clusters contained in it are imported."),(0,n.kt)("li",{parentName:"ol"},"label an individual cluster definition so that it's imported.")),(0,n.kt)("p",null,"In both cases the label is ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-api.cattle.io/rancher-auto-import"),"."),(0,n.kt)("p",null,"This walkthrough will use the first option of importing all clusters in a namespace."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open a terminal"),(0,n.kt)("li",{parentName:"ol"},"Label the default namespace in your Rancher Manager cluster:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label namespace default cluster-api.cattle.io/rancher-auto-import=true\n")),(0,n.kt)("h2",{id:"configure-rancher-manager"},"Configure Rancher Manager"),(0,n.kt)("p",null,"Now the cluster definitions are committed to a git repository they can be used to provision the clusters. To do this they will need to be imported into the Rancher Manager cluster (which is also acting as a Cluster API management cluster) using the ",(0,n.kt)("strong",{parentName:"p"},"Continuous Delivery")," feature (which uses Fleet)."),(0,n.kt)("p",null,"There are 2 options to provide the configuration. The first is using the Rancher Manager UI and the second is by applying some YAML to your cluster. Both are covered below."),(0,n.kt)("h3",{id:"using-the-rancher-manager-ui"},"Using the Rancher Manager UI"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Rancher Manager"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Continuos Delivery")," from the menu:\n",(0,n.kt)("img",{alt:"sidebar",src:r(3215).Z,width:"299",height:"411"})),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"fleet-local")," as the namespace from the top right\n",(0,n.kt)("img",{alt:"namespace",src:r(5471).Z,width:"349",height:"56"})),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Git Repos")," from the sidebar"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Repository")),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"clusters")," as the name"),(0,n.kt)("li",{parentName:"ol"},"Get the ",(0,n.kt)("strong",{parentName:"li"},"HTTPS")," clone URL from your git repo\n",(0,n.kt)("img",{alt:"git clone url",src:r(3665).Z,width:"442",height:"282"})),(0,n.kt)("li",{parentName:"ol"},"Add the URL into the ",(0,n.kt)("strong",{parentName:"li"},"Repository URL")," field"),(0,n.kt)("li",{parentName:"ol"},"Change the branch name to ",(0,n.kt)("strong",{parentName:"li"},"main")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Next")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create")),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"clusters")," name"),(0,n.kt)("li",{parentName:"ol"},"Watch the resources become ready"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Cluster Management")," from the menu"),(0,n.kt)("li",{parentName:"ol"},"Check your cluster has been imported")),(0,n.kt)("h3",{id:"using-kubectl"},"Using kubectl"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get the ",(0,n.kt)("strong",{parentName:"li"},"HTTPS")," clone URL from your git repo"),(0,n.kt)("li",{parentName:"ol"},"Create a new file called ",(0,n.kt)("strong",{parentName:"li"},"repo.yaml")),(0,n.kt)("li",{parentName:"ol"},"Add the following contents to the new file:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: clusters\n  namespace: fleet-local\nspec:\n  branch: main\n  repo: <https://github.com/rancher-sandbox/rancher-turtles-fleet-example.git>\n  targets: []\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Apply the file to the Rancher Manager cluster using ",(0,n.kt)("strong",{parentName:"li"},"kubectl"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f repo.yaml\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Go to Rancher Manager"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Continuos Delivery")," from the side bar"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"fleet-local")," as the namespace from the top right"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Git Repos")," from the sidebar"),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"clusters")," name"),(0,n.kt)("li",{parentName:"ol"},"Watch the resources become ready"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Cluster Management")," from the menu"),(0,n.kt)("li",{parentName:"ol"},"Check your cluster has been imported")))}m.isMDXComponent=!0},3665:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/gh_clone-f6d998cb137762c411984a1458eecbe1.png"},5471:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},3215:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sidebar-3cf91dbc9ac49cf3928cd54db35db705.png"}}]);