"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[488],{3283:function(e,t,r){r.d(t,{Z:function(){return C}});var a=r(791),o=r(3428),n=r(2265),i=r(7042),s=r(5600),l=r(5843),c=r(7927),d=r(9782),u=r(7437),p=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(6520),v=r(5702);function g(e){return(0,v.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let f=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=e=>{let{classes:t,variant:r,colorDefault:a}=e;return(0,s.Z)({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},g,t)},y=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),Z=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),h=(0,l.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),x=n.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:d,component:p="div",imgProps:m,sizes:v,src:g,srcSet:x,variant:C="circular"}=r,I=(0,a.Z)(r,f),k=null,$=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){let[o,i]=n.useState(!1);return n.useEffect(()=>{if(!r&&!a)return;i(!1);let o=!0,n=new Image;return n.onload=()=>{o&&i("loaded")},n.onerror=()=>{o&&i("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=r,a&&(n.srcset=a),()=>{o=!1}},[e,t,r,a]),o}((0,o.Z)({},m,{src:g,srcSet:x})),R=g||x,w=R&&"error"!==$,O=(0,o.Z)({},r,{colorDefault:!w,component:p,variant:C}),S=b(O);return k=w?(0,u.jsx)(Z,(0,o.Z)({alt:s,src:g,srcSet:x,sizes:v,ownerState:O,className:S.img},m)):null!=l?l:R&&s?s[0]:(0,u.jsx)(h,{ownerState:O,className:S.fallback}),(0,u.jsx)(y,(0,o.Z)({as:p,ownerState:O,className:(0,i.Z)(S.root,d),ref:t},I,{children:k}))});var C=x},5563:function(e,t,r){r.d(t,{V:function(){return n}});var a=r(6520),o=r(5702);function n(e){return(0,o.Z)("MuiDivider",e)}let i=(0,a.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},2653:function(e,t,r){r.d(t,{Z:function(){return C}});var a=r(791),o=r(3428),n=r(2265),i=r(7042),s=r(5600),l=r(9975),c=r(5843),d=r(7927),u=r(6659),p=r(8702),m=r(6520),v=r(5702);function g(e){return(0,v.Z)("MuiIconButton",e)}let f=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var b=r(7437);let y=["edge","children","className","color","disabled","disableFocusRipple","size"],Z=e=>{let{classes:t,disabled:r,color:a,edge:o,size:n}=e,i={root:["root",r&&"disabled","default"!==a&&`color${(0,p.Z)(a)}`,o&&`edge${(0,p.Z)(o)}`,`size${(0,p.Z)(n)}`]};return(0,s.Z)(i,g,t)},h=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,p.Z)(r.color)}`],r.edge&&t[`edge${(0,p.Z)(r.edge)}`],t[`size${(0,p.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>{var r;let a=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:null==a?void 0:a.main},!t.disableRipple&&{"&:hover":(0,o.Z)({},a&&{backgroundColor:e.vars?`rgba(${a.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(a.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${f.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),x=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:s,className:l,color:c="default",disabled:u=!1,disableFocusRipple:p=!1,size:m="medium"}=r,v=(0,a.Z)(r,y),g=(0,o.Z)({},r,{edge:n,color:c,disabled:u,disableFocusRipple:p,size:m}),f=Z(g);return(0,b.jsx)(h,(0,o.Z)({className:(0,i.Z)(f.root,l),centerRipple:!0,focusRipple:!p,disabled:u,ref:t,ownerState:g},v,{children:s}))});var C=x},9299:function(e,t,r){r.d(t,{ZP:function(){return j}});var a=r(791),o=r(3428),n=r(2265),i=r(7042),s=r(5600),l=r(3655),c=r(9975),d=r(5843),u=r(7927),p=r(6659),m=r(673),v=r(8519),g=r(7663),f=r(7820),b=r(6520),y=r(5702);function Z(e){return(0,y.Z)("MuiListItem",e)}let h=(0,b.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var x=r(5340);function C(e){return(0,y.Z)("MuiListItemSecondaryAction",e)}(0,b.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var I=r(7437);let k=["className"],$=e=>{let{disableGutters:t,classes:r}=e;return(0,s.Z)({root:["root",t&&"disableGutters"]},C,r)},R=(0,d.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,o.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),w=n.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=r,l=(0,a.Z)(r,k),c=n.useContext(f.Z),d=(0,o.Z)({},r,{disableGutters:c.disableGutters}),p=$(d);return(0,I.jsx)(R,(0,o.Z)({className:(0,i.Z)(p.root,s),ownerState:d,ref:t},l))});w.muiName="ListItemSecondaryAction";let O=["className"],S=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],M=e=>{let{alignItems:t,button:r,classes:a,dense:o,disabled:n,disableGutters:i,disablePadding:l,divider:c,hasSecondaryAction:d,selected:u}=e;return(0,s.Z)({root:["root",o&&"dense",!i&&"gutters",!l&&"padding",c&&"divider",n&&"disabled",r&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]},Z,a)},P=(0,d.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.button&&t.button,r.hasSecondaryAction&&t.secondaryAction]}})(({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,o.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.Z.root}`]:{paddingRight:48}},{[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),L=(0,d.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),N=n.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:s="center",autoFocus:c=!1,button:d=!1,children:b,className:y,component:Z,components:x={},componentsProps:C={},ContainerComponent:k="li",ContainerProps:{className:$}={},dense:R=!1,disabled:N=!1,disableGutters:j=!1,disablePadding:A=!1,divider:F=!1,focusVisibleClassName:z,secondaryAction:T,selected:B=!1,slotProps:V={},slots:G={}}=r,D=(0,a.Z)(r.ContainerProps,O),q=(0,a.Z)(r,S),E=n.useContext(f.Z),W=n.useMemo(()=>({dense:R||E.dense||!1,alignItems:s,disableGutters:j}),[s,E.dense,R,j]),_=n.useRef(null);(0,v.Z)(()=>{c&&_.current&&_.current.focus()},[c]);let H=n.Children.toArray(b),Y=H.length&&(0,m.Z)(H[H.length-1],["ListItemSecondaryAction"]),J=(0,o.Z)({},r,{alignItems:s,autoFocus:c,button:d,dense:W.dense,disabled:N,disableGutters:j,disablePadding:A,divider:F,hasSecondaryAction:Y,selected:B}),K=M(J),Q=(0,g.Z)(_,t),U=G.root||x.Root||P,X=V.root||C.root||{},ee=(0,o.Z)({className:(0,i.Z)(K.root,X.className,y),disabled:N},q),et=Z||"li";return(d&&(ee.component=Z||"div",ee.focusVisibleClassName=(0,i.Z)(h.focusVisible,z),et=p.Z),Y)?(et=ee.component||Z?et:"div","li"===k&&("li"===et?et="div":"li"===ee.component&&(ee.component="div")),(0,I.jsx)(f.Z.Provider,{value:W,children:(0,I.jsxs)(L,(0,o.Z)({as:k,className:(0,i.Z)(K.container,$),ref:Q,ownerState:J},D,{children:[(0,I.jsx)(U,(0,o.Z)({},X,!(0,l.Z)(U)&&{as:et,ownerState:(0,o.Z)({},J,X.ownerState)},ee,{children:H})),H.pop()]}))})):(0,I.jsx)(f.Z.Provider,{value:W,children:(0,I.jsxs)(U,(0,o.Z)({},X,{as:et,ref:Q},!(0,l.Z)(U)&&{ownerState:(0,o.Z)({},J,X.ownerState)},ee,{children:[H,T&&(0,I.jsx)(w,{children:T})]}))})});var j=N},2502:function(e,t,r){var a=r(791),o=r(3428),n=r(2265),i=r(7042),s=r(5600),l=r(9975),c=r(5843),d=r(7927),u=r(6659),p=r(8519),m=r(7663),v=r(7820),g=r(5340),f=r(7437);let b=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],y=e=>{let{alignItems:t,classes:r,dense:a,disabled:n,disableGutters:i,divider:l,selected:c}=e,d=(0,s.Z)({root:["root",a&&"dense",!i&&"gutters",l&&"divider",n&&"disabled","flex-start"===t&&"alignItemsFlexStart",c&&"selected"]},g.t,r);return(0,o.Z)({},r,d)},Z=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${g.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${g.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${g.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${g.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},"flex-start"===t.alignItems&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),h=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:l=!1,component:c="div",children:u,dense:g=!1,disableGutters:h=!1,divider:x=!1,focusVisibleClassName:C,selected:I=!1,className:k}=r,$=(0,a.Z)(r,b),R=n.useContext(v.Z),w=n.useMemo(()=>({dense:g||R.dense||!1,alignItems:s,disableGutters:h}),[s,R.dense,g,h]),O=n.useRef(null);(0,p.Z)(()=>{l&&O.current&&O.current.focus()},[l]);let S=(0,o.Z)({},r,{alignItems:s,dense:w.dense,disableGutters:h,divider:x,selected:I}),M=y(S),P=(0,m.Z)(O,t);return(0,f.jsx)(v.Z.Provider,{value:w,children:(0,f.jsx)(Z,(0,o.Z)({ref:P,href:$.href||$.to,component:($.href||$.to)&&"div"===c?"button":c,focusVisibleClassName:(0,i.Z)(M.focusVisible,C),ownerState:S,className:(0,i.Z)(M.root,k)},$,{classes:M,children:u}))})});t.Z=h},5340:function(e,t,r){r.d(t,{t:function(){return n}});var a=r(6520),o=r(5702);function n(e){return(0,o.Z)("MuiListItemButton",e)}let i=(0,a.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);t.Z=i},8342:function(e,t,r){r.d(t,{f:function(){return n}});var a=r(6520),o=r(5702);function n(e){return(0,o.Z)("MuiListItemIcon",e)}let i=(0,a.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=i},8212:function(e,t,r){var a=r(791),o=r(3428),n=r(2265),i=r(7042),s=r(5600),l=r(3226),c=r(7820),d=r(7927),u=r(5843),p=r(9660),m=r(7437);let v=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],g=e=>{let{classes:t,inset:r,primary:a,secondary:o,dense:n}=e;return(0,s.Z)({root:["root",r&&"inset",n&&"dense",a&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},p.L,t)},f=(0,u.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${p.Z.primary}`]:t.primary},{[`& .${p.Z.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})(({ownerState:e})=>(0,o.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),b=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiListItemText"}),{children:s,className:u,disableTypography:p=!1,inset:b=!1,primary:y,primaryTypographyProps:Z,secondary:h,secondaryTypographyProps:x}=r,C=(0,a.Z)(r,v),{dense:I}=n.useContext(c.Z),k=null!=y?y:s,$=h,R=(0,o.Z)({},r,{disableTypography:p,inset:b,primary:!!k,secondary:!!$,dense:I}),w=g(R);return null==k||k.type===l.Z||p||(k=(0,m.jsx)(l.Z,(0,o.Z)({variant:I?"body2":"body1",className:w.primary,component:null!=Z&&Z.variant?void 0:"span",display:"block"},Z,{children:k}))),null==$||$.type===l.Z||p||($=(0,m.jsx)(l.Z,(0,o.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},x,{children:$}))),(0,m.jsxs)(f,(0,o.Z)({className:(0,i.Z)(w.root,u),ownerState:R,ref:t},C,{children:[k,$]}))});t.Z=b},9660:function(e,t,r){r.d(t,{L:function(){return n}});var a=r(6520),o=r(5702);function n(e){return(0,o.Z)("MuiListItemText",e)}let i=(0,a.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},1683:function(e,t,r){r.d(t,{Z:function(){return b}});var a=r(2265),o=r(4275),n=r.n(o),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&m(e,r,t[r]);return e},g=(e,t)=>l(e,c(t)),f=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&d)for(var a of d(e))0>t.indexOf(a)&&p.call(e,a)&&(r[a]=e[a]);return r},b=(e,t,r)=>{let o=(0,a.forwardRef)((t,o)=>{var{color:n="currentColor",size:s=24,stroke:l=2,children:c}=t,d=f(t,["color","size","stroke","children"]);return(0,a.createElement)("svg",v(g(v({ref:o},i),{width:s,height:s,stroke:n,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),d),[...r.map(([e,t])=>(0,a.createElement)(e,t)),...c||[]])});return o.propTypes={color:n().string,size:n().oneOfType([n().string,n().number]),stroke:n().oneOfType([n().string,n().number])},o.displayName=`${t}`,o}}}]);