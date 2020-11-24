(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"w+ZK":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("cxan"),b=a("+wNj"),r=(a("ERkP"),a("ZVZ0")),i=a("9Rvw"),l=a("vD+s"),c=a("fSvc"),o=(a("l1C2"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/design_tokens/breakpoints.mdx"}});var s={_frontmatter:o},p=i.a;function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"breakpoints"},"Breakpoints"),Object(r.b)(l.a,{mdxType:"LargeParagraph"},"Breakpoint tokens are used to keep services and products using HDS consistent across all screen sizes."),Object(r.b)("p",null,"HDS includes tokenized values for both breakpoints and maximum container width in each breakpoint. Breakpoint tokens can be also used alongside ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/guidelines/grid"}),"HDS grid guidelines")," in order to create consistent designs and implementations."),Object(r.b)("h2",{id:"principles"},"Principles"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Always use token of the same level for both the breakpoint and container width"),". This ensures consistency across all services using HDS breakpoint tokens. Read more about this in ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/design-tokens/breakpoints#usage"}),"breakpoint usage"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Aim to provide all breakpoints listed in HDS tokens in your service.")," This way you ensure your service is usable with every common screen width. "),Object(r.b)("li",{parentName:"ul"},"For best results, test your designs and implementations ",Object(r.b)("strong",{parentName:"li"},"at the edge")," of each HDS breakpoint."),Object(r.b)("li",{parentName:"ul"},"It is recommended to use scaling methods HDS suggests for each breakpoint (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/design-tokens/breakpoints#breakpoints-1"}),"Breakpoints token table"),"). However, it is allowed to use different scaling methods if it works better for the service.")),Object(r.b)("h2",{id:"accessibility"},"Accessibility"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When testing your designs and implementation at different breakpoints, pay extra attention how your service behaves if browser zoom functionality is used. Read more about the ",Object(r.b)(c.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html",external:!0,mdxType:"Link"},"WCAG requirements considering reflow"),".")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"The breakpoint tokens are divided into two sets;"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Breakpoint tokens")," define exact widths (in pixels) where the next breakpoint comes into effect. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Container width tokens")," define maximum container width in each breakpoint.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note how these two sets of tokens are linked.")," You are supposed pick and use tokens from same level depending on the screen width. For example, when screen width is above 767 pixels and below 992 pixels you use ",Object(r.b)("inlineCode",{parentName:"p"},"--breakpoint-m")," token in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"--container-width-m")," token."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"HDS offers a Container component which follows breakpoint and container width tokens automatically.")," It is recommended to use it if possible. For more info and examples, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-container--example"}),"Container - React documentation")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-container--default"}),"Container - Core documentation"),"."),Object(r.b)("h2",{id:"tokens"},"Tokens"),Object(r.b)("h3",{id:"breakpoints-1"},"Breakpoints"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CSS"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SASS"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"px value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scaling method"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--breakpoint-xs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$breakpoint-xs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"≥ 320"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale columns")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--breakpoint-s"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$breakpoint-s"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"≥ 576"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale outside margins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--breakpoint-m"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$breakpoint-m"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"≥ 768"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale outside margins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--breakpoint-l"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$breakpoint-l"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"≥ 992"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale outside margins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--breakpoint-xl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$breakpoint-xl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"≥ 1248"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale outside margins")))),Object(r.b)("h3",{id:"maximum-container-widths"},"Maximum container widths"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CSS"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SASS"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"px value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--container-width-xs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$container-width-xs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"288")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--container-width-s"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$container-width-s"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"544")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--container-width-m"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$container-width-m"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"720")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--container-width-l"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$container-width-l"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"944")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--container-width-xl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"$container-width-xl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1200")))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/design_tokens/breakpoints.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-design-tokens-breakpoints-mdx-6a3b52df6e58395ed54c.js.map