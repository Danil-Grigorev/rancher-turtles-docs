"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[7505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Contributing Guidelines",s={unversionedId:"CONTRIBUTING",id:"CONTRIBUTING",title:"Contributing Guidelines",description:"- How to get involved?",source:"@site/docs/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/rancher-turtles-docs/docs/CONTRIBUTING",draft:!1,editUrl:"https://github.com/rancher-sandbox/rancher-turtles-docs/tree/main/docs/docs/CONTRIBUTING.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installing the CoreProvider",permalink:"/rancher-turtles-docs/docs/tasks/capi-operator/installing_core_provider"}},l={},p=[{value:"How to get involved?",id:"how-to-get-involved",level:2},{value:"Submitting PRs",id:"submitting-prs",level:2},{value:"Choosing something to work on",id:"choosing-something-to-work-on",level:3},{value:"Developing rancher-turtles",id:"developing-rancher-turtles",level:3},{value:"Asking for help",id:"asking-for-help",level:3},{value:"PR submission guidelines",id:"pr-submission-guidelines",level:3},{value:"Commit message formatting",id:"commit-message-formatting",level:4},{value:"Opening Issues",id:"opening-issues",level:2},{value:"ADRs (Architectural Decision Records)",id:"adrs-architectural-decision-records",level:2},{value:"Process",id:"process",level:3}],h={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-guidelines"},"Contributing Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-get-involved"},"How to get involved?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#submitting-prs"},"Submitting PRs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#choosing-something-to-work-on"},"Choosing something to work on")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#developing-rancher-turtles"},"Developing rancher-turtles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#asking-for-help"},"Asking for help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pr-submission-guidelines"},"PR submission guidelines"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commit-message-formatting"},"Commit message formatting")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#opening-issues"},"Opening Issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adrs-architectural-decision-records"},"ADRs (Architectural Decision Records)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#process"},"Process"))))),(0,r.kt)("p",null,"Thank you for taking the time to contribute to Rancher CAPI extension ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox?q=rancher-turtles&type=all&language=&sort="},"projects")," \u2764\ufe0f"),(0,r.kt)("p",null,"Improvements to all areas of the project; from code, to documentation;\nfrom bug reports to feature design and UI enhancement are gratefully welcome.\nThis guide should cover all aspects of how to interact with the project\nand how to get involved in development as smoothly as possible."),(0,r.kt)("p",null,"Reading docs is often tedious, so let's put the important contributing rule\nright at the top: ",(0,r.kt)("strong",{parentName:"p"},"Always be kind!")),(0,r.kt)("p",null,"Looking forward to seeing your contributions in the repo! \u2728"),(0,r.kt)("h2",{id:"how-to-get-involved"},"How to get involved?"),(0,r.kt)("p",null,"We'd love to accept your patches in pretty much all areas of projects development!"),(0,r.kt)("p",null,"If you\u2019re a new to the project and want to help, but don\u2019t know where to start, here is a non-exhaustive list of ways you can help out:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit a ",(0,r.kt)("a",{parentName:"p",href:"#submitting-prs"},"Pull Request")," \ud83d\ude80"),(0,r.kt)("p",{parentName:"li"}," Beyond fixing bugs and submitting new features, there are other things you can submit\nwhich, while less flashy, will be deeply appreciated by all who interact with the codebase:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Extending test coverage!"),(0,r.kt)("li",{parentName:"ul"},"Refactoring!"),(0,r.kt)("li",{parentName:"ul"},"Reviewing and updating ",(0,r.kt)("a",{parentName:"li",href:"https://rancher-sandbox.github.io/rancher-turtles-docs/"},"documentation"),"!"),(0,r.kt)("li",{parentName:"ul"},"Adding a new UI functionality!")),(0,r.kt)("p",{parentName:"li"},"(See also ",(0,r.kt)("a",{parentName:"p",href:"#choosing-something-to-work-on"},"Choosing something to work on")," below.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open an ",(0,r.kt)("a",{parentName:"p",href:"#opening-issues"},"issue"),". \u2049\ufe0f"),(0,r.kt)("p",{parentName:"li"},"We have 2 forms of issues: bug reports and feature requests. If you are not sure which category you need, just make the best guess and provide as much information as possible.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Interested in helping to improve:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rancher CAPI extension backend? Chime in on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-turtles/issues?q=is%3Aopen+is%3Aissue+label%3Akind%2Fbug+"},(0,r.kt)("inlineCode",{parentName:"a"},"bugs"))," or\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-turtles/labels/help-wanted"},(0,r.kt)("inlineCode",{parentName:"a"},"help wanted")," issues"),".\nIf you are seeking to take on a bigger challenge or a more experienced contributor, check out ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-turtles/issues?q=is%3Aopen+is%3Aissue+label%3Akind%2Ffeature"},(0,r.kt)("inlineCode",{parentName:"a"},"feature requests")),"."),(0,r.kt)("li",{parentName:"ul"},"extension UI? Take a look at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-turtles-ui/issues"},(0,r.kt)("inlineCode",{parentName:"a"},"open"))," or\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-turtles-ui/labels/help-wanted"},(0,r.kt)("inlineCode",{parentName:"a"},"help wanted")," issues"),"."),(0,r.kt)("li",{parentName:"ul"},"maybe, user-docs? \ud83e\udd13 Then, jump straight into ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/rancher-turtles-docs/issues"},(0,r.kt)("inlineCode",{parentName:"a"},"open")," issues")," in the docs repository.")),(0,r.kt)("h2",{id:"submitting-prs"},"Submitting PRs"),(0,r.kt)("h3",{id:"choosing-something-to-work-on"},"Choosing something to work on"),(0,r.kt)("p",null,"If you are here to ask for help or request some new behaviour, this\nis the section for you. We have curated a set of issues for anyone who simply\nwants to build up their open-source cred \ud83d\udcaa."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Issues labelled ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?q=org%3Agithub%2Francher-sandbox+repo%3Arancher-sandbox%2Francher-turtles+repo%3Arancher-sandbox%2Francher-turtles-ui+repo%3Arancher-sandbox%2Francher-turtles-docs+is%3Aopen+label%3A%22good+first+issue%22+&type=issues&ref=advsearch"},(0,r.kt)("inlineCode",{parentName:"a"},"good first issues")),"\nshould be accessible to folks new to the repos, as well as to open source in general."),(0,r.kt)("p",{parentName:"li"},"These issues should present a low/non-existent barrier to entry with a thorough description,\neasy-to-follow reproduction (if relevant) and enough context for anyone to pick up.\nThe objective should be clear, possibly with a suggested solution or some pseudocode.\nIf anything similar has been done, that work should be linked."),(0,r.kt)("p",{parentName:"li"},"If you have come across an issue tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"good first issue")," which you think you would\nlike to claim but isn't 100% clear, please ask for more info! When people write issues\nthere is a ",(0,r.kt)("em",{parentName:"p"},"lot")," of assumed knowledge which is very often taken for granted. This is\nsomething we could all get better at, so don't be shy in asking for what you need\nto do great work \ud83d\ude04."),(0,r.kt)("p",{parentName:"li"},"See more on ",(0,r.kt)("a",{parentName:"p",href:"#asking-for-help"},"asking for help")," below!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?q=org%3Agithub%2Francher-sandbox+repo%3Arancher-sandbox%2Francher-turtles+repo%3Arancher-sandbox%2Francher-turtles-ui+repo%3Arancher-sandbox%2Francher-turtles-docs+is%3Aopen+label%3A%22help+wanted%22+&type=issues&ref=advsearch"},(0,r.kt)("inlineCode",{parentName:"a"},"help wanted")," issues"),"\nare for those a little more familiar with the code base, but should still be accessible enough\nto newcomers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All other issues labelled ",(0,r.kt)("inlineCode",{parentName:"p"},"kind/<x>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"area/<x>")," are also up for grabs, but\nare likely to require a fair amount of context."))),(0,r.kt)("h3",{id:"developing-rancher-turtles"},"Developing rancher-turtles"),(0,r.kt)("p",null,"Check out a dedicated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles#development-setup"},"notes")," section in the rancher-turtles repository."),(0,r.kt)("h3",{id:"asking-for-help"},"Asking for help"),(0,r.kt)("p",null,"If you need help at any stage of your work, please don't hesitate to ask!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To get more detail on the issue you have chosen, it is a good idea to start by asking\nwhoever created it to provide more information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are struggling with something while working on your PR, or aren't quite\nsure of your approach, you can open a ",(0,r.kt)("a",{parentName:"p",href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/"},"draft"),"\n(prefix the title with ",(0,r.kt)("inlineCode",{parentName:"p"},"WIP: "),") and explain what you are thinking."))),(0,r.kt)("h3",{id:"pr-submission-guidelines"},"PR submission guidelines"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fork the desired repo, develop and test your code changes."),(0,r.kt)("li",{parentName:"ol"},"Push your changes to the branch on your fork and submit a pull request to the original repository\nagainst the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push <remote-name> <feature-name>\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Submit a pull request.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"All code PR must be labeled with one of",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f (",(0,r.kt)("inlineCode",{parentName:"li"},":warning:"),", major or breaking changes)"),(0,r.kt)("li",{parentName:"ul"},"\u2728 (",(0,r.kt)("inlineCode",{parentName:"li"},":sparkles:"),", feature additions)"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc1b (",(0,r.kt)("inlineCode",{parentName:"li"},":bug:"),", patch and bugfixes)"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcd6 (",(0,r.kt)("inlineCode",{parentName:"li"},":book:"),", documentation or proposals)"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf31 (",(0,r.kt)("inlineCode",{parentName:"li"},":seedling:"),", minor or othe")))))),(0,r.kt)("p",null,"Where possible, please squash your commits to ensure a tidy and descriptive history."),(0,r.kt)("p",null,"If your PR is still a work in progress, please open a ",(0,r.kt)("a",{parentName:"p",href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/"},"Draft PR"),"\nand prefix your title with the word ",(0,r.kt)("inlineCode",{parentName:"p"},"WIP"),". When your PR is ready for review, you\ncan change the title and remove the Draft setting."),(0,r.kt)("p",null,"We recommend that you regularly rebase from ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," of the original repo to keep your\nbranch up to date."),(0,r.kt)("p",null,"In general, we will merge a PR once a maintainer has reviewed and approved it.\nTrivial changes (e.g., corrections to spelling) may get waved through.\nFor substantial changes, more people may become involved, and you might get asked to resubmit the PR or divide the changes into more than one PR."),(0,r.kt)("h4",{id:"commit-message-formatting"},"Commit message formatting"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For more on how to write great commit messages, and why you should, check out\n",(0,r.kt)("a",{parentName:"em",href:"https://chris.beams.io/posts/git-commit/"},"this excellent blog post"),".")),(0,r.kt)("p",null,"We follow a rough convention for commit messages that is designed to answer three\nquestions: what changed, why was the change made, and how did you make it."),(0,r.kt)("p",null,"The subject line should feature the ",(0,r.kt)("em",{parentName:"p"},"what")," and\nthe body of the commit should describe the ",(0,r.kt)("em",{parentName:"p"},"why")," and ",(0,r.kt)("em",{parentName:"p"},"how"),".\nIf you encountered any weirdness along the way, this is a good place\nto note what you discovered and how you solved it."),(0,r.kt)("p",null,"The format can be described more formally as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<short title for what changed>\n<BLANK LINE>\n<why this change was made and what changed>\n<BLANK LINE>\n<any interesting details>\n<footer>\n")),(0,r.kt)("p",null,"The first line is the subject and should be no longer than 70 characters, the\nsecond line is always blank, and other lines should be wrapped at a max of 80 characters.\nThis allows the message to be easier to read on GitHub as well as in various git tools."),(0,r.kt)("p",null,"There is a template recommend for use ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/yitsushi/656e68c7db141743e81b7dcd23362f1a"},"here"),"."),(0,r.kt)("h2",{id:"opening-issues"},"Opening Issues"),(0,r.kt)("p",null,"These guides aim to help you write issues in a way which will ensure that they are processed\nas quickly as possible."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See below for ",(0,r.kt)("a",{parentName:"em",href:"#prioritizing-issues"},"how issues are prioritized")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General rules"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before opening anything, take a good look through existing issues.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"More is more: give as much information as it is humanly possible to give.\nHighly detailed issues are more likely to be picked up because they can be prioritized and\nscheduled for work faster. They are also more accessible\nto the community, meaning that you may not have to wait for the core team to get to it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Please do not open an issue with a description that is ",(0,r.kt)("strong",{parentName:"p"},"just")," a link to another issue,\na link to a slack conversation, a quote from either one of those, or anything else\nequally opaque. This raises the bar for entry and makes it hard for the community\nto get involved. Take the time to write a proper description and summarise key points.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Take care with formatting. Ensure the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/getting-started-with-writing-and-formatting-on-github"},"markdown is tidy"),",\nuse ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/creating-and-highlighting-code-blocks"},"code blocks")," etc etc.\nThe faster something can be read, the faster it can be dealt with.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Keep it civil. Yes, it is annoying when things don't work, but it is way more fun helping out\nsomeone who is not... the worst. Remember that conversing via text exacerbates\neveryone's negativity bias, so throw in some emoji when in doubt \ud83d\udc4d \ud83d\ude03 \ud83d\ude80 \ud83c\udf89."))),(0,r.kt)("h2",{id:"adrs-architectural-decision-records"},"ADRs (Architectural Decision Records)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please feel free to skip ",(0,r.kt)("a",{parentName:"p",href:"#adrs-architectural-decision-records"},"this")," and ",(0,r.kt)("a",{parentName:"p",href:"#process"},"sub-section")," below, since they are only relevant to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles"},"rancher-turtles")," repository.")),(0,r.kt)("p",null,"Any impactful decisions to the architecture, design, development and behaviour\nof rancher-turtles must be recorded in the form of an ",(0,r.kt)("a",{parentName:"p",href:"https://engineering.atspotify.com/2020/04/14/when-should-i-write-an-architecture-decision-record/"},"ADR"),"."),(0,r.kt)("p",null,"A template can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles/blob/main/docs/adr/0000-template.md"},(0,r.kt)("inlineCode",{parentName:"a"},"docs/adr/0000-template.md"))," of the repo,\nwith numerous examples of completed records in the same directory."),(0,r.kt)("p",null,"Contributors are also welcome to backfill ADRs if they are found to be missing."),(0,r.kt)("h3",{id:"process"},"Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles/discussions/new?category=adr"},"discussion")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADR")," category.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose an appropriate clear and concise title (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ADR: Implement X in Go"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a context of the decision to be made. Describe\nthe various options, if more than one, and explain the pros and cons. Highlight\nany areas which you would like the reviewers to pay attention to, or those on which\nyou would specifically like an opinion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tag in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles/blob/main/CODEOWNERS"},"maintainers"),' as the "Deciders", and invite them to\nparticipate and weigh in on the decision and its consequences.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once a decision has been made, open a PR adding a new ADR to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles/blob/main/docs/adr"},"directory"),".\nCopy and complete the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-turtles/blob/main/docs/adr/0000-template.md"},"template"),";"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Increment the file number by one"),(0,r.kt)("li",{parentName:"ul"},'Set the status as "Accepted"'),(0,r.kt)("li",{parentName:"ul"},"Set the deciders as those who approved the discussion outcome"),(0,r.kt)("li",{parentName:"ul"},"Summarise the decision and consequences from the discussion thread"),(0,r.kt)("li",{parentName:"ul"},"Link back to the discussion from the ADR doc")))))}c.isMDXComponent=!0}}]);