"use strict";(self.webpackChunktokyo_free_black_react_admin_dashboard=self.webpackChunktokyo_free_black_react_admin_dashboard||[]).push([[699],{9699:function(n,t,o){o.r(t),o.d(t,{default:function(){return M}});var i=o(9439),a=o(2791),e=o(6934),r=o(1889),d=o(4554),s=o(890),c=o(1614),l=o(4518),g=o(1336),h=o(6907),u=o(4775),f=o(4942),v=o(3366),m=o(7462),x=o(4036),Z=o(7384),p=o(4419),I=o(1402),j=o(3239),b=o(1217);function P(n){return(0,b.Z)("MuiLoadingButton",n)}var w=(0,o(5878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),y=o(184),L=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],S=(0,e.ZP)(l.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,f.Z)({},"& .".concat(w.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,f.Z)({},"& .".concat(w.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,o=n.theme;return(0,m.Z)((0,f.Z)({},"& .".concat(w.startIconLoadingStart,", & .").concat(w.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,f.Z)({transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short})},"&.".concat(w.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,f.Z)({},"& .".concat(w.startIconLoadingStart,", & .").concat(w.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,f.Z)({},"& .".concat(w.startIconLoadingStart,", & .").concat(w.endIconLoadingEnd),{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}))})),k=(0,e.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var o=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,x.Z)(o.loadingPosition))]]}})((function(n){var t=n.theme,o=n.ownerState;return(0,m.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{left:"small"===o.size?10:14},"start"===o.loadingPosition&&"text"===o.variant&&{left:6},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{right:"small"===o.size?10:14},"end"===o.loadingPosition&&"text"===o.variant&&{right:6},"start"===o.loadingPosition&&o.fullWidth&&{position:"relative",left:-10},"end"===o.loadingPosition&&o.fullWidth&&{position:"relative",right:-10})})),_=a.forwardRef((function(n,t){var o=(0,I.Z)({props:n,name:"MuiLoadingButton"}),i=o.children,e=o.disabled,r=void 0!==e&&e,d=o.id,s=o.loading,c=void 0!==s&&s,l=o.loadingIndicator,g=o.loadingPosition,h=void 0===g?"center":g,u=o.variant,f=void 0===u?"text":u,b=(0,v.Z)(o,L),w=(0,Z.Z)(d),_=null!=l?l:(0,y.jsx)(j.Z,{"aria-labelledby":w,color:"inherit",size:16}),R=(0,m.Z)({},o,{disabled:r,loading:c,loadingIndicator:_,loadingPosition:h,variant:f}),E=function(n){var t=n.loading,o=n.loadingPosition,i=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,x.Z)(o))],endIcon:[t&&"endIconLoading".concat((0,x.Z)(o))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,x.Z)(o))]},e=(0,p.Z)(a,P,i);return(0,m.Z)({},i,e)}(R);return(0,y.jsx)(S,(0,m.Z)({disabled:r||c,id:w,ref:t},b,{variant:f,classes:E,ownerState:R,children:"end"===R.loadingPosition?(0,y.jsxs)(a.Fragment,{children:[i,c&&(0,y.jsx)(k,{className:E.loadingIndicator,ownerState:R,children:_})]}):(0,y.jsxs)(a.Fragment,{children:[c&&(0,y.jsx)(k,{className:E.loadingIndicator,ownerState:R,children:_}),i]})}))})),R=(0,e.ZP)(r.ZP)((function(n){var t=n.theme;return"\n    background: ".concat(t.colors.gradients.black1,";\n")})),E=(0,e.ZP)(d.Z)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),W=(0,e.ZP)(s.Z)((function(n){var t=n.theme;return"\n      color: ".concat(t.colors.alpha.white[100],";\n")})),C=(0,e.ZP)(s.Z)((function(n){var t=n.theme;return"\n      color: ".concat(t.colors.alpha.white[70],";\n")}));var M=function(){var n=(0,a.useState)(!1),t=(0,i.Z)(n,2),o=t[0],e=t[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.ql,{children:(0,y.jsx)("title",{children:"Status - 500"})}),(0,y.jsx)(E,{children:(0,y.jsxs)(r.ZP,{container:!0,sx:{height:"100%"},alignItems:"stretch",spacing:0,children:[(0,y.jsx)(r.ZP,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,y.jsx)(c.Z,{maxWidth:"sm",children:(0,y.jsxs)(d.Z,{textAlign:"center",children:[(0,y.jsx)("img",{alt:"500",height:260,src:"/static/images/status/500.svg"}),(0,y.jsx)(s.Z,{variant:"h2",sx:{my:2},children:"There was an error, please try again later"}),(0,y.jsx)(s.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"The server encountered an internal error and was not able to complete your request"}),(0,y.jsx)(_,{onClick:function(){e(!0)},loading:o,variant:"outlined",color:"primary",startIcon:(0,y.jsx)(u.Z,{}),children:"Refresh view"}),(0,y.jsx)(l.Z,{href:"/overview",variant:"contained",sx:{ml:1},children:"Go back"})]})})}),(0,y.jsx)(g.Z,{mdDown:!0,children:(0,y.jsx)(R,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,y.jsx)(c.Z,{maxWidth:"sm",children:(0,y.jsxs)(d.Z,{textAlign:"center",children:[(0,y.jsx)(W,{variant:"h1",sx:{my:2},children:"Tokyo Free Black React Typescript Admin Dashboard"}),(0,y.jsx)(C,{variant:"h4",fontWeight:"normal",sx:{mb:4},children:"High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes."}),(0,y.jsx)(l.Z,{href:"/overview",size:"large",variant:"contained",children:"Overview"})]})})})})]})})]})}},4775:function(n,t,o){var i=o(4836);t.Z=void 0;var a=i(o(5649)),e=o(184),r=(0,a.default)((0,e.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshTwoTone");t.Z=r}}]);
//# sourceMappingURL=699.f929ed9f.chunk.js.map