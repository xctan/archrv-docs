"use strict";(self.webpackChunkriscv_package_guide=self.webpackChunkriscv_package_guide||[]).push([[589],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,m=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],u={},o="\u6784\u5efa\u6307\u5f15",p={unversionedId:"guide/build-guide",id:"guide/build-guide",title:"\u6784\u5efa\u6307\u5f15",description:"\u6211\u4eec\u7684\u5de5\u4f5c\u662f\u628a https://archriscv.felixc.at/.status/status.htm",source:"@site/docs/guide/2-build-guide.md",sourceDirName:"guide",slug:"/guide/build-guide",permalink:"/docs/guide/build-guide",editUrl:"https://github.com/Avimitin/RISC-V_Daily_Notes/docs/guide/2-build-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u90e8\u7f72",permalink:"/docs/guide/start-guide"},next:{title:"PR \u7684\u6307\u5f15",permalink:"/docs/guide/PR-guide"}},c=[{value:"FTBFS (Fail To Build From Source)",id:"ftbfs-fail-to-build-from-source",children:[{value:"Q&amp;A",id:"qa",children:[],level:3}],level:2},{value:"Leaf package, port it!",id:"leaf-package-port-it",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6784\u5efa\u6307\u5f15"},"\u6784\u5efa\u6307\u5f15"),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u5de5\u4f5c\u662f\u628a ",(0,l.kt)("a",{parentName:"p",href:"https://archriscv.felixc.at/.status/status.htm"},"https://archriscv.felixc.at/.status/status.htm"),"\n\u4e0a\u7684\u5305\u90fd\u5904\u7406\u597d\u3002"),(0,l.kt)("p",null,"\u5728\u72b6\u6001\u9875\u91cc\uff0c\u6709\u4e24\u79cd\u72b6\u6001\u7684\u5305\u88f9\u9700\u8981\u6211\u4eec\u5904\u7406\u3002"),(0,l.kt)("h2",{id:"ftbfs-fail-to-build-from-source"},"FTBFS (Fail To Build From Source)"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u72b6\u6001\u4ee3\u8868\u5305\u65e0\u6cd5\u6784\u5efa\uff0c\u7b49\u5f85\u6211\u4eec\u4fee\u590d\u3002\u57fa\u672c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/felixonmars/archriscv-packages"},"archlinuxriscv"),"\nrepository \u627e\u8fd9\u4e2a\u5305\u76f8\u5173\u7684 PR"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://plct-archrv.ax64.workers.dev/"},"https://plct-archrv.ax64.workers.dev/"),"\n\u4e0a\u67e5\u770b\u8fd9\u4e2a\u5305\u7684\u72b6\u6001\uff08\u662f\u5426\u6709\u4eba\u5728\u5904\u7406\u4e86\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u547d\u4ee4 /add ",(0,l.kt)("inlineCode",{parentName:"li"},"{PKGNAME}")," \u9886\u53d6\u8fd9\u4e2a\u5305"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u590d"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4ea4 PR \u5e76\u7b49\u5f85\u5408\u5e76"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u547d\u4ee4 /merge ",(0,l.kt)("inlineCode",{parentName:"li"},"{PKGNAME}")," \u91ca\u653e\u5305\u88f9")),(0,l.kt)("h3",{id:"qa"},"Q&A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u662f\u600e\u4e48\u4e00\u4e2a\u6d41\u7a0b\u5462\uff1f")),(0,l.kt)("p",null,"\u5728 devtools \u7684\u6253\u5305\u6559\u7a0b\u91cc\uff0c\u4f60\u5e94\u8be5\u7528\u8fc7\u4e86 asp \u8fd9\u4e2a\u5de5\u5177\u3002\n\u4fee\u5305\u7684\u6d41\u7a0b\u548c\u90a3\u4e2a\u6d41\u7a0b\u76f8\u4f3c\uff0c\u5177\u4f53\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"asp checkout"),"\uff0c\u8fdb\u5165 trunk \u6587\u4ef6\u5939\uff0c\n\u4fee\u6539 PKGBUILD \u6216\u8005\u6e90\u7801\u5c1d\u8bd5\u6784\u5efa\u5e76\u8fd0\u884c\u3002\u4fee\u597d\u4e4b\u540e\uff1a\u628a\u4fee\u597d\u7684\u6e90\u7801\u53d1\u56de\u4e0a\u6e38/\n\u628a PKGBUILD \u7684\u8865\u4e01\u53d1\u5230\u80a5\u732b\u4ed3\u5e93\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u7684\u5305\u6709 FTBFS \u72b6\u6001\uff0c\u4f46\u662f\u5374\u80fd\u5728\u672c\u5730\u6210\u529f\u6784\u5efa")),(0,l.kt)("p",null,"\u53ef\u80fd\u662f\u7248\u672c\u66f4\u65b0\u4e4b\u7c7b\u7684\u95ee\u9898\uff0c\u4f7f\u7528\u673a\u5668\u4eba\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"/mark PACKAGE ready"),"\n\u6807\u8bb0\u8fd9\u4e2a\u5305\u4e3a\u7b49\u5f85\u72b6\u6001\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u6216\u8005\u8fd9\u4e2a\u5305\u539f\u672c\u4f9d\u8d56\u8fc7\u65f6\uff0c\u73b0\u5728\u53c8\u80fd\u7528\u4e86\uff0c\u90a3\u4e5f\u53ef\u4ee5\u6807\u8bb0 ready\u3002(\u4ecd\u9700\u8ba8\u8bba)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u590d\u4e86\u51e0\u6b21\u4e5f\u4fee\u4e0d\u597d")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/mark PKGNAME stuck")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91ca\u653e\u4e00\u4e2a\u5305\u88f9")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/merge PKGNAME")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u64a4\u9500\u6807\u8bb0")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/unmark PKGNAME")," ",(0,l.kt)("inlineCode",{parentName:"p"},"STATUS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/unmark \u7528\u6cd5\uff1a")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/mark pkg status")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u65f6\u5019\u6807\u8bb0 QEMU\uff1f")),(0,l.kt)("p",null,"\u53ea\u6709\u6bd4\u5982\u8bf4\u6d4b\u8bd5\u8dd1\u4e0d\u8fc7\uff0c\u6216\u8005 qemu \u795e\u5947 bug \u5bfc\u81f4\u7684\uff0c\u624d\u6807 #noqemu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u65f6\u5019\u6807\u8bb0 outdated_dep\uff1f")),(0,l.kt)("p",null,"\u4f9d\u8d56\uff08\u5305\uff09\u8fc7\u671f\u4e86\uff0c\u9700\u8981\u5728repo\u91cc\u6eda/\u4e0a\u6e38\u6eda\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u7684 status \u5305\u62ec")),(0,l.kt)("p",null,"unknown, upstreamed, outdated, outdated_dep, stuck, noqemu, ready, pending"),(0,l.kt)("h2",{id:"leaf-package-port-it"},"Leaf package, port it!"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u662f\u5c1a\u672a\u6765\u5f97\u53ca\u6784\u5efa\u7684\u5305\uff0c\u4f60\u6709\u7a7a\u53ef\u4ee5\u641e\u8fd9\u4e9b\u5305\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u80fd\u76f4\u63a5\u6784\u5efa\u6210\u529f\uff0c\u56de\u590d ",(0,l.kt)("inlineCode",{parentName:"p"},"PACKAGE NAME")," \u76f4\u63a5\u51fa\u5305\n\u5230",(0,l.kt)("a",{parentName:"p",href:"https://t.me/c/1525629125/11840"},"\u8fd9\u6761\u6d88\u606f\u4e0a"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6784\u5efa\u5931\u8d25\uff0c\u90a3\u4e48\u5c31\u628a\u8fd9\u4e2a\u5305\u5f53\u4f5c FTBFS \u6765\u4fee\u3002"))}s.isMDXComponent=!0}}]);