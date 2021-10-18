(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(3),s=n(1),c=n(0),o=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("dark"),a=Object(i.a)(n,2),r=a[0],l=a[1];Object(s.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&l("dark")}),[]);return Object(c.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://joris-lefait.com",d="JL.",j={name:"Joris Lefait",role:"FullStack developper",description:"I'm Joris, 28yo. I started my career in programming in 2019 after some years working in chemistry. I was first a front-end developer and since few months I started learning back-end development with Node.js, Express.js and PostgreSQL.",social:{linkedin:"https://www.linkedin.com/in/joris-lefait-79b7646b/",github:"https://github.com/midayex"}},m=[{name:"SNCF",description:"Rework of the front-end of all ter.sncf.fr websites, in React + Next.js with accessibility constraints, and regions specifiations themes. In a team of 10 peoples sometimes in customer's office, most remotly.",stack:["TypeScript","React","NextJS","MaterialUI","Storybook","Gitlab","JIRA"]},{name:"POC Svelte x Algolia x TailwindCSS",description:"Self training in order to learn some basics of Svelte.js. Development of a quick and basic search engine based on an Algolia sample dataset with TailwindCSS for style.",stack:["Svelte","Algolia","Tailwind"]},{name:"Cevoo",description:"Mobile application entirely dedicated to veterinary auxiliaries. Addition of new features, code update, performance optimization. Implementation of a points system per user according to the actions performed, addition of a duel functionality between users.",stack:["React Native","Node.JS","PostgreSQL","Gitlab","Heroku"]},{name:"POC Shopify webhooks - headless commerce",description:"Catch part of Shopify requests via webhooks on a webservice in Node.js and Prisma in order to have a database of products, categories and customers. The purpose is to have more freedom than with classic Shopify APIs in a context of Headless project creation on the front-end.",stack:["Node.JS","Gitlab"]},{name:"Unsold",description:"Update back-end and API's. Migration of some PostgreSQL requests to Prisma requests for performance improvement.",stack:["Node.JS","Express","Prisma","PostgreSQL","Gitlab","Heroku"]},{name:"RapidFlyer",description:"Redesign of the front-end for the V4 of the Website in Next.js in headless commerce. In a team of 10 people directly at the customer. Development of screens and deployment of revenue phases in direct contact with the customer.",stack:["React","NextJS","Azure","Redux","Redux Saga","StyledComponent"],livePreview:"https://www.rapid-flyer.com/"},{name:"Experiencis",description:"Development of a platform aimed at connecting buyers and individuals in order to carry out remote visits to goods (real estate, automobile, high-tech). In tandem with a technical lead, reinforcement on the Front development part of a Web App in ReactJS.",stack:["React","Material Design"]},{name:"Leroy Merlin",description:"Intervention as a techOps. Management of the fleet of terminals deployed in France in stores and warehouses via an MDM. Deployment of updates and fixes to terminals. Implementation of analytics feedback to monitor the status of deployments and the status of terminals. Development of a monitoring platform for the solutions deployed by the squad. Deployment of solutions via Docker and Kubernetes. Participation in the Google Cloud Challenge for 3 days in partnership with ADEO, project to port a legacy application to a cloud infrastructure. Benchmark of the various MDMs on the market, consultation with terminal manufacturers for fleet renewal.",stack:["Javascript","Python","Shell","Docker","Kubernetes","GCP","Openshift"]},{name:"SuperCollab",description:"As part of the creation of a Start-Up, creation of a Web App allowing the connection between different law firms / notaries.",stack:["React","Docker"],livePreview:"https://supercollab.fr"},{name:"NewDeal",description:"During a partnership between NewDeal and La Mobilery, realization of a mobile application in React Native of an HR management solution (establishment of pay slips, leave requests ...).",stack:["React Native","Typescript"]}],h=["HTML","CSS","JavaScript","TypeScript","React","Redux","NextJS","Storybook","SASS","Material UI","StyledComponent","Git","CI/CD","Jest"],b="contact@joris-lefait.com",u=n(14),p=n.n(u),f=n(12),x=n.n(f),O=n(16),k=n.n(O),v=n(15),N=n.n(v),g=(n(26),function(){var e=Object(s.useContext)(o),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,r=Object(s.useState)(!1),l=Object(i.a)(r,2),d=l[0],j=l[1],u=function(){return j(!d)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[m.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,h.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,b?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(c.jsx)(x.a,{}):Object(c.jsx)(p.a,{})}),Object(c.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(c.jsx)(N.a,{}):Object(c.jsx)(k.a,{})})]})}),y=(n(32),function(){var e=l,t=d;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(g,{})]})}),S=n(10),w=n.n(S),_=n(17),C=n.n(_),P=(n(33),function(){var e=j.name,t=j.role,n=j.description,a=j.resume,i=j.social;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Hi, I am ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(c.jsx)("p",{className:"about__desc",children:n&&n}),Object(c.jsxs)("div",{className:"about__contact center",children:[a&&Object(c.jsx)("a",{href:a,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(c.jsxs)(c.Fragment,{children:[i.github&&Object(c.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(w.a,{})}),i.linkedin&&Object(c.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(C.a,{})})]})]})]})}),I=n(7),R=n.n(I),D=n(18),J=n.n(D),A=(n(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},R()())}))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(w.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(J.a,{})})]})}),M=(n(36),function(){return m.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(c.jsx)(A,{project:e},R()())}))})]}):null}),L=(n(37),function(){return h.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:h.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},R()())}))})]}):null}),T=n(19),E=n.n(T),G=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(E.a,{fontSize:"large"})})}):null}),q=(n(39),function(){return b?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(b),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),F=(n(40),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Template created By Raj Shekhar"})})}),H=(n(41),function(){var e=Object(s.useContext)(o),t=Object(i.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(y,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(P,{}),Object(c.jsx)(L,{}),Object(c.jsx)(M,{}),Object(c.jsx)(q,{})]}),Object(c.jsx)(G,{}),Object(c.jsx)(F,{})]})});n(42);Object(a.render)(Object(c.jsx)(r,{children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.447dd07c.chunk.js.map