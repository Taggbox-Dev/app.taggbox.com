"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[6257],{97997:(e,l,s)=>{s.d(l,{A:()=>p});var a=s(45358),t=s(73878),n=s(28429),i=s(28981),o=s(66345),d=s(9996),r=s(26806),c=s(85608),h=s(9950),u=s(52867),m=s(44414);function p(e){var l,s;let{userData:p,allWalls:v,hideModal:x=null,activeKey:g}=e;const{request:w}=(0,d.P)(),j=(0,t.wA)(),b=(0,n.Zp)(),f=(0,h.useMemo)((()=>{var e,l;return["1",c.vm.secondPaid,c.vm.thirdPaid].includes(null!==(e=null===p||void 0===p||null===(l=p.UserPlan)||void 0===l?void 0:l.planId)&&void 0!==e?e:"")}),[null===p||void 0===p||null===(l=p.UserPlan)||void 0===l?void 0:l.planId]),y=e=>{var l;w({method:"POST",url:o.Ft_,body:{shoppableStatus:e?0:1,wallId:null!==(l=null===v||void 0===v?void 0:v.map((e=>e.id)))&&void 0!==l?l:[]},onSuccess:()=>{x&&x(),j((0,i.ug)(b,e?"/home":"/content/products"))}})};return(0,m.jsx)(a.A,{fluid:!0,children:(0,m.jsx)("div",{className:"f-center",style:{minHeight:"calc(100vh - 300px)"},children:(0,m.jsx)(r.A,{title:"Inspire & Convert with UGC",desc:x?"Turn your content into conversions. Enable Shoppable & tag products to drive sales directly from your UGC Gallery.":"Embed shoppable galleries, run UGC-powered ads, and build custom experiences with our API.",icon:"shoppable",button:{action:()=>{if(f){var e,l;const s=null!==(e=null===p||void 0===p||null===(l=p.UserRule)||void 0===l?void 0:l.shoppableStatus)&&void 0!==e?e:0;s?(0,u.l1)({title:"Are you share you want to disable Shoppable UGC?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((e=>{e.value&&y(s)})):y(s)}else b("/price")},text:f?null!==p&&void 0!==p&&null!==(s=p.UserRule)&&void 0!==s&&s.shoppableStatus?"Disable":"Enable":"Upgrade now"},isFullScreen:!1,activeKey:g})})})}},56257:(e,l,s)=>{s.r(l),s.d(l,{default:()=>L});var a=s(9950),t=s(45358),n=s(80409),i=s(79163),o=s(22281),d=s(51960),r=s(471),c=s(97937),h=s(17595),u=s(86781),m=s(68459),p=s(54810),v=s(29038),x=s(52867),g=s(28429),w=s(44414);function j(e){let{allWalls:l,getNewData:s}=e;const[j,b]=(0,a.useState)(),[f,y]=(0,a.useState)({poweredBy:"",showMore:"",viewOn:"",all:""}),[N,A]=(0,a.useState)(!1),[_,C]=(0,a.useState)(!1),[S,k]=(0,a.useState)(!1),[D,I]=(0,a.useState)(!1),[E,P]=(0,a.useState)("language"),W=(0,a.useRef)(E),T=(0,g.Zp)();let $=null===l||void 0===l?void 0:l.find((e=>e.id==localStorage.getItem("wallId")));(0,a.useEffect)((()=>{var e,l,s,a;b(null!==$&&void 0!==$&&$.w_language?"custom"===(null===$||void 0===$?void 0:$.w_language)?"":null===$||void 0===$?void 0:$.w_language:""),y({poweredBy:(null===$||void 0===$||null===(e=$.custom_lan_data)||void 0===e?void 0:e.p_by)||"",showMore:(null===$||void 0===$||null===(l=$.custom_lan_data)||void 0===l?void 0:l.show_more)||"",viewOn:(null===$||void 0===$||null===(s=$.custom_lan_data)||void 0===s?void 0:s.view_on)||"",all:(null===$||void 0===$||null===(a=$.custom_lan_data)||void 0===a?void 0:a.p_all)||""})}),[$]),(0,a.useEffect)((()=>((0,x.C2)()&&(window.addEventListener("onSaveClicked",F),window.addEventListener("onDiscardClicked",U)),()=>{(0,x.C2)()&&((0,x.Fl)("hide"),window.removeEventListener("onSaveClicked",F),window.removeEventListener("onDiscardClicked",U))})),[]),(0,a.useEffect)((()=>{(0,x.C2)()&&("language"==E&&S||"custom"==E&&_)&&(0,x.Fl)()}),[_,S]),(0,a.useEffect)((()=>{(0,x.C2)()&&(W.current=E)}),[E]);const F=()=>{"language"==W.current?B():M()},U=()=>{b(""),y({poweredBy:"",showMore:"",viewOn:"",all:""}),C(!1),k(!1),I(!1),(0,x.Fl)("hide")},L=e=>{A(!0),(0,v.Gv)(e).then((()=>{(0,x.C2)()&&(0,x.Fl)("hide"),s(),(0,x.b)(),(0,x.k1)("Custom Language saved successfully."),T(`/content/moderation/${localStorage.getItem("wallId")?localStorage.getItem("wallId"):""}`)})).catch((()=>{(0,x.b)(),A(!1),k(!1),C(!1)}))},B=()=>{(0,x.C2)()?b((e=>(e?L({lang:e}):(0,x.r$)("Please select a language."),e))):j?L({lang:j}):(0,x.r$)("Please select a language.")},M=e=>{if(null===e||void 0===e||e.preventDefault(),(0,x.C2)())y((e=>{const{poweredBy:l,showMore:s,viewOn:a,all:t}=e;return l&&s&&a&&t?L({w_language:"custom",p_by:l,show_more:s,view_on:a,p_all:t}):I(!0),e}));else{const{poweredBy:e,showMore:l,viewOn:s,all:a}=f;e&&l&&s&&a?L({w_language:"custom",p_by:e,show_more:l,view_on:s,p_all:a}):I(!0)}};return(0,w.jsx)(t.A,{fluid:!0,children:(0,w.jsx)("div",{className:"my-5",children:(0,w.jsx)(n.A.Container,{id:"lang__",defaultActiveKey:E,onSelect:e=>P(e),children:(0,w.jsxs)(n.A.Content,{style:{paddingBottom:"70px"},children:[(0,w.jsxs)(n.A.Pane,{eventKey:"language",children:[(0,w.jsx)(i.A,{type:"radio",name:"lang",className:"flex-wrap",defaultValue:j,children:[{lang:"English",code:"us"},{lang:"French",code:"fr"},{lang:"Chinese",code:"cn"},{lang:"German",code:"de"},{lang:"Korean",code:"kr"},{lang:"Malay",code:"my"},{lang:"Italian",code:"it"},{lang:"Dutch",code:"nl"},{lang:"Portuguese",code:"pt"},{lang:"Spanish",code:"de"}].map(((e,l)=>(0,w.jsxs)(o.A,{variant:e.lang==j?"primary":"secondary",className:"mb-5 me-5",value:e.lang,onClick:()=>{b(e.lang),k(!0)},children:[(0,w.jsx)(d.A,{className:"me-2",src:(0,p.pc)(`media/images/flags/${e.code}.svg`),height:17,width:28,fluid:!0}),e.lang]},l)))}),!(0,x.C2)()&&(0,w.jsx)(r.A.Footer,{className:"f-center justify-content-end position-absolute bottom-0 start-0 w-100 py-4 px-4 px-xl-6 bg-body",children:(0,w.jsx)(c.A,{type:"submit",variant:"primary",className:"btn-min-w "+(N?"spinner":""),onClick:()=>B(),disabled:!S,children:"Apply"})})]}),(0,w.jsx)(n.A.Pane,{eventKey:"custom",children:(0,w.jsxs)(h.A,{onSubmit:M,children:[(0,w.jsx)(u.A,{children:["poweredBy","showMore","viewOn","all"].map(((e,l)=>(0,w.jsxs)(h.A.Group,{className:"mb-3",as:m.A,md:"6",controlId:e,children:[(0,w.jsxs)(h.A.Label,{children:[e.replace(/([A-Z])/g," $1").trim()," ",(0,w.jsx)("span",{className:"text-danger",children:"*"})]}),(0,w.jsx)(h.A.Control,{onChange:l=>{y({...f,[e]:l.target.value}),C(!0)},value:f[e],className:""+(D&&!f[e]?"is-invalid":"")}),D&&!f[e]?(0,w.jsxs)("div",{className:"invalid-feedback",children:[e.replace(/([A-Z])/g," $1").trim()," is required "]}):null]},l)))}),!(0,x.C2)()&&(0,w.jsx)(r.A.Footer,{className:"f-center justify-content-end position-absolute bottom-0 start-0 w-100 py-4 px-4 px-xl-6 bg-body",children:(0,w.jsx)(c.A,{type:"submit",variant:"primary",className:"btn-min-w "+(N?"spinner":""),disabled:!_,children:"Apply"})})]})})]})})})})}var b=s(68849);function f(e){let{allWalls:l,getNewData:s}=e,n=null===l||void 0===l?void 0:l.find((e=>e.id==localStorage.getItem("wallId")));const[i,o]=(0,a.useState)((null===n||void 0===n?void 0:n.hashtag_color)||""),[d,p]=(0,a.useState)((null===n||void 0===n?void 0:n.hashtag_feed)||!1),[j,f]=(0,a.useState)((null===n||void 0===n?void 0:n.hashtag_all)||!1),[y,N]=(0,a.useState)((null===n||void 0===n?void 0:n.hashtag_highlight)||!1),[A,_]=(0,a.useState)(!1),[C,S]=(0,a.useState)(!1),k=(0,g.Zp)();(0,a.useEffect)((()=>((0,x.C2)()&&(window.addEventListener("onSaveClicked",P),window.addEventListener("onDiscardClicked",D)),()=>{(0,x.C2)()&&((0,x.Fl)("hide"),window.removeEventListener("onSaveClicked",P),window.removeEventListener("onDiscardClicked",D))})),[]),(0,a.useEffect)((()=>{(0,x.C2)()&&C&&(0,x.Fl)()}),[C]);const D=()=>{o((null===n||void 0===n?void 0:n.hashtag_color)||""),p((null===n||void 0===n?void 0:n.hashtag_feed)||!1),f((null===n||void 0===n?void 0:n.hashtag_all)||!1),N((null===n||void 0===n?void 0:n.hashtag_highlight)||!1),S(!1),(0,x.Fl)("hide")};(0,a.useEffect)((()=>{o((null===n||void 0===n?void 0:n.hashtag_color)||""),p((null===n||void 0===n?void 0:n.hashtag_feed)||!1),f((null===n||void 0===n?void 0:n.hashtag_all)||!1),N((null===n||void 0===n?void 0:n.hashtag_highlight)||!1)}),[n]);const I=e=>{null===e||void 0===e||e.preventDefault(),_(!0);const l={hashtag_color:i,hashtag_feed:`${Number(d)}`,hashtag_all:`${Number(j)}`,hashtag_highlight:`${Number(y)}`};(0,v.gA)(l).then((()=>{var e;(0,x.C2)()&&(0,x.Fl)("hide"),s(),(0,x.k1)("Hashtag highlighter saved successfully."),k(`/content/moderation/${null!==(e=null===n||void 0===n?void 0:n.wallId)&&void 0!==e?e:""}`)})).catch(x.r$).finally((()=>{_(!1)}))},E=(0,a.useRef)(I);(0,a.useEffect)((()=>{E.current=I}),[I]);const P=()=>{E.current()},W=(e,l)=>{l((e=>!e)),S(!0)};return(0,w.jsx)(t.A,{className:"pb-10 mb-10",fluid:!0,children:(0,w.jsxs)("div",{className:"my-5",children:[(0,w.jsx)(u.A,{children:(0,w.jsxs)(m.A,{lg:8,xl:6,children:[(0,w.jsxs)(h.A.Group,{className:"mb-10",controlId:"HColor",children:[(0,w.jsx)(h.A.Label,{children:"Color"}),(0,w.jsx)(b.A,{id:"HashtagColor",defaultColor:i,changeColor:e=>{o(e),S(!0)}})]}),(0,w.jsxs)(u.A,{className:"gx-10",children:[(0,w.jsx)(m.A,{xs:6,children:(0,w.jsx)(h.A.Check,{type:"switch",id:"feedHashtag",className:"f-between mb-5",label:"Feed hashtag",checked:d,onChange:()=>W(0,p),reverse:!0})}),(0,w.jsx)(m.A,{xs:6,children:(0,w.jsx)(h.A.Check,{type:"switch",id:"allHashtag",className:"f-between mb-5",label:"All hashtag",checked:j,onChange:()=>W(0,f),reverse:!0})}),(0,w.jsx)(m.A,{xs:6,children:(0,w.jsx)(h.A.Check,{type:"switch",id:"hashtagHighlight",className:"f-between mb-5",label:"Status",checked:y,onChange:()=>W(0,N),reverse:!0})})]})]})}),!(0,x.C2)()&&(0,w.jsx)(r.A.Footer,{className:"f-center justify-content-end position-absolute bottom-0 start-0 w-100 py-4 px-4 px-xl-6 bg-body",style:{zIndex:2},children:(0,w.jsx)(c.A,{type:"submit",variant:"primary",className:"btn-min-w "+(A?"spinner":""),onClick:I,disabled:!C,children:"Apply"})})]})})}var y=s(66345),N=s(26806);function A(e){var l,s,n;let{userData:i}=e;const[o,r]=(0,a.useState)(!1),h=null!==(l=null===i||void 0===i||null===(s=i.user)||void 0===s?void 0:s.user_key)&&void 0!==l?l:"",u=(0,g.Zp)(),m=e=>{let l=`${y.JM4}api/v2/widget/posts/${localStorage.getItem("wallId")}?user_key=${h}&format=${e}`;y.PWx&&(l="https://tagembed.com/support/api-documentation/"),(0,x.B4)(l)},v=e=>{(0,x.x_)(e),r(!0),setTimeout(r,1e3)};return(0,w.jsx)(t.A,{fluid:!0,children:null!==i&&void 0!==i&&null!==(n=i.UserRule)&&void 0!==n&&n.api?(0,w.jsxs)("div",{children:[y.PWx?(0,w.jsxs)("div",{className:"input-icon input-icon-right mb-4 position-relative d-flex align-items-center mt-2 w-100",children:[(0,w.jsx)("label",{className:"mb-0 me-2",style:{whiteSpace:"nowrap"},children:"User Key"}),(0,w.jsxs)("div",{className:"position-relative d-flex align-items-center w-100",children:[(0,w.jsx)("input",{onClick:()=>v("copy_url-api"),id:"copy_url-api",type:"text",className:"form-control overflow-hidden text-ellipsis text-nowrap me-2 edit_url font-weight-bolder",placeholder:"",value:h,readOnly:!0}),o?(0,w.jsx)("span",{id:"copy-success-alert",style:{display:"block"},children:"Copied!"}):null,(0,w.jsx)("span",{className:"w-auto",children:(0,w.jsx)("button",{style:{width:"39px",height:"39px"},onClick:()=>v("copy_url-api"),className:"btn btn-icon icon-xs copy-btn-display","data-factors-click-bind":"true",children:(0,w.jsx)(p.gc,{type:"solid",icon:"copy"})})})]})]}):null,(0,w.jsxs)("div",{className:"f-center py-10 custom-api-section",children:[(0,w.jsx)(c.A,{variant:"light",className:"mx-2 f-center",onClick:()=>m("json"),children:(0,w.jsx)(d.A,{src:(0,p.pc)("media/images/json.png"),height:70,width:70,fluid:!0})}),(0,w.jsx)(c.A,{variant:"light",className:"mx-2 f-center",onClick:()=>m("xml"),children:(0,w.jsx)(d.A,{src:(0,p.pc)("media/images/xml.png"),height:70,width:70,fluid:!0})}),y.PWx?null:(0,w.jsx)(c.A,{variant:"light",className:"mx-2 f-center",onClick:()=>m("rss"),style:{height:200,width:200},children:(0,w.jsx)(d.A,{src:(0,p.pc)("media/images/rss.png"),height:70,width:70,fluid:!0})})]})]}):(0,w.jsx)("div",{className:"f-center",style:{minHeight:"calc(100vh - 300px)"},children:(0,w.jsx)(N.A,{title:"API Access",desc:`Get API access with our upgraded plan to integrate ${y.SxH} gallery in your application and make your app stand out.`,error:"api-access-error",button:{action:()=>u("/price"),text:"Upgrade Now"},isFullScreen:!1})})})}var _=s(73878),C=s(98361),S=s(18038),k=(s(41397),s(58423)),D=s(59074),I=s(30615),E=s(9996),P=s(17247);function W(e){var l;let{userData:s,allWalls:n}=e;const[i,o]=(0,a.useState)(!0),[d,r]=(0,a.useState)([]),[c,h]=(0,a.useState)([]),[u,m]=(0,a.useState)({}),[p,v]=(0,a.useState)([]),x=(0,g.Zp)(),{request:j,spinner:b}=(0,E.P)(),{request:f}=(0,E.P)(),A=()=>{if((null===n||void 0===n?void 0:n.length)>0){var e;const l=null!==(e=null===n||void 0===n?void 0:n.map((e=>({label:e.name,value:e.id}))))&&void 0!==e?e:[];h(l),m(null===l||void 0===l?void 0:l.find((e=>e.value==localStorage.getItem("wallId"))))}f({url:y.JuG,showToast:!1,onSuccess:e=>{const l=(null===e||void 0===e?void 0:e.responseData)||[];o(0==(null===l||void 0===l?void 0:l.length)),(null===l||void 0===l?void 0:l.length)>0&&_(l[0].wallId),r(l)}})},_=e=>{m(null===c||void 0===c?void 0:c.find((l=>l.value==e))),f({url:`${y.iTc}/${e}`,showToast:!1,onSuccess:e=>{v((null===e||void 0===e?void 0:e.responseData)||[])}})};return(0,a.useEffect)((()=>{var e;null!==s&&void 0!==s&&null!==(e=s.UserRule)&&void 0!==e&&e.download_img&&A()}),[s]),(0,w.jsx)(t.A,{fluid:!0,children:null!==s&&void 0!==s&&null!==(l=s.UserRule)&&void 0!==l&&l.download_img?(0,w.jsx)("div",{children:i?(0,w.jsxs)("div",{children:[(0,w.jsxs)("form",{onSubmit:e=>{e.preventDefault(),j({method:"POST",url:y.vNT,body:{ownerId:localStorage.getItem("ownerId"),wallId:null===u||void 0===u?void 0:u.value},onSuccess:()=>{o(!1),A()}})},className:"maintainPopUp noLoader",method:"post","accept-charset":"utf-8",children:[(0,w.jsx)("div",{className:"downloadImgColm",children:(0,w.jsx)("div",{className:"row customPostSec postcWrapC",children:(0,w.jsx)("div",{className:"col-md-12 wallcreateshow",children:(0,w.jsx)("div",{className:"portlet-body",children:(0,w.jsx)("div",{className:"downldSlctWalBlock downloadImages_wrap",children:(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:"col-md-6 col-sm-6",children:(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"",className:"form-label",children:"Select Wall"}),(0,w.jsx)("div",{className:"input-group flex-nowrap",style:{maxWidth:"400px"},children:(0,w.jsx)(I.Ay,{className:"w-100",classNamePrefix:"selectpicker ",onChange:e=>_(e.value),options:c,value:u})})]})}),(0,w.jsx)("div",{className:"col-md-6 col-sm-6",children:d.length>0?(0,w.jsx)("ul",{className:"nav justify-content-end",children:(0,w.jsx)("li",{children:(0,w.jsxs)("div",{onClick:e=>o(!1),title:"create","data-theme":"dark","data-bs-toggle":"tooltip",className:"commanBtn btn btn-sm btn-primary popUp maintainPopUp creatNewPostBtn tooltips","data-popup-width":"data-width='750px'",children:[(0,w.jsx)("i",{className:"fa fa-chevron-left"})," Back"]})})}):null})]})})})})})}),(0,w.jsx)("div",{className:"f-center justify-content-end position-absolute bottom-0 start-0 w-100 py-4 px-4 px-xl-6 bg-body card-footer",children:(0,w.jsx)("button",{type:"submit",className:`btn btn-primary ${b?"spinner spinner-white spinner-right disabled":null}`,children:"Download Images"})})]}),(0,w.jsx)(a.Fragment,{children:(null===p||void 0===p?void 0:p.length)>0?(0,w.jsx)(P.A,{selectContent:p,postContent:()=>{}}):null},null===u||void 0===u?void 0:u.value)]}):(0,w.jsx)("div",{className:"row customPostSec postcWrapC",children:(0,w.jsx)("div",{className:"col-md-12 wallcreateshow",children:(0,w.jsxs)("div",{className:"portlet-body",children:[(0,w.jsx)("div",{className:"d-flex justify-content-end",children:(0,w.jsx)("div",{onClick:e=>o(!0),className:"commanBtn btn-sm btn btn-primary dwnldImgsBtn mb-0",children:"Add New"})}),(0,w.jsx)("label",{className:"columnTitle"}),(0,w.jsx)("div",{className:"table-scrollable table-scrollable-borderless globalTblList mt0",children:(0,w.jsxs)("table",{className:"table",children:[(0,w.jsx)("tbody",{children:(0,w.jsxs)("tr",{className:"uppercase text-center",children:[(0,w.jsx)("th",{className:"text-start",children:"Wall Name"}),(0,w.jsx)("th",{className:"text-start",children:"Status"}),(0,w.jsx)("th",{className:"text-start",children:"Expire on"}),(0,w.jsx)("th",{className:"text-center",children:"Action"})]})}),(0,w.jsx)("tbody",{children:d.map(((e,l)=>{var s;return(0,w.jsxs)("tr",{className:"text-center",align:"center",children:[(0,w.jsxs)("td",{className:"authorPicTd text-start align-middle",children:[" ",(null===(s=e.wall)||void 0===s?void 0:s.name)||""]}),(0,w.jsx)("td",{className:"align-middle text-start",children:1==e.download_complete?(0,w.jsx)("font",{color:"green",children:"Completed"}):2==e.download_complete?(0,w.jsx)("font",{color:"orange",children:"No Data Available"}):(0,w.jsx)("font",{color:"orange",children:"In Progress"})}),(0,w.jsx)("td",{className:"align-middle text-start",children:1==e.download_complete?e.download_cron_time:(0,w.jsx)("font",{color:"orange",children:"-"})}),(0,w.jsx)("td",{className:"align-middle text-center",children:(0,w.jsx)("a",{href:""+(1==e.download_complete?`${y.btP}/wallimages/archive/${e.foldername}.zip?v=${Math.floor(1e5*Math.random())}`:"javascript:void(0)"),className:`btn btn-default btn-sm tooltips ${1==e.download_complete?"readyDwnld":null} `,"data-original-title":"Download",children:(0,w.jsx)("i",{className:"fa fa-download me-0"})})})]},l)}))})]})})]})})})}):(0,w.jsx)("div",{className:"f-center",style:{minHeight:"calc(100vh - 300px)"},children:(0,w.jsx)(N.A,{title:"Download Images",desc:"Download images from your feed and repurpose it on other marketing touchpoints.",icon:"download",button:{action:()=>x("/price"),text:"Upgrade Now"},isFullScreen:!1})})})}var T=s(97997),$=s(26787);const F=[{id:6,icon:"language",title:"Language"},{id:9,icon:"arrow-down-to-line",title:"Download"},{id:8,icon:"plug",title:"API"},{id:10,icon:"bag-shopping",title:"Shoppable"}];class U extends a.Component{constructor(e){super(e),this.closeAside=()=>this.setState({filterToggle:!1}),this.changeApp=e=>{const l=F.find((l=>l.id===e));this.setState({currentTitle:l.title})},this.state={customeNetWorkList:[],filterToggle:!1,currentTitle:"Choose language",activeKey:"app_6"}}componentDidMount(){const{netWorkList:e,GET_ADD_FEED:l}=this.props;null!==e&&void 0!==e&&e.length||l()}render(){const{filterToggle:e,currentTitle:l,activeKey:s}=this.state,{allWalls:a,userData:i,UPDATE_USER_HOME_DATA:o}=this.props;return(0,w.jsxs)("div",{className:"d-flex flex-column flex-column-fluid full-content py-0",children:[(0,w.jsx)($.A,{crumbs:[{name:"Apps & more",link:"/apps-more",icon:"grid-2"},{name:"Home",link:"/home"},{name:l}],crumbIcon:"grid-2"}),(0,w.jsx)(t.A,{className:""+((0,x.C2)()?"":"mw-100 px-0 container-apps-and-more"),children:(0,w.jsx)(n.A.Container,{id:"apps_more__",activeKey:s,onSelect:e=>this.setState({activeKey:e}),children:(0,w.jsx)(r.A,{className:"content_inner apps_more border-0 rounded-0 bg-transparent shadow-none",children:(0,w.jsxs)(r.A.Body,{className:"p-0 d-flex w-100 ",children:[(0,w.jsx)(S.A,{filterToggle:e,closeAside:this.closeAside,children:(0,w.jsxs)(r.A,{className:"a_header_ rounded-0 rounded-0",children:[(0,w.jsx)(r.A.Header,{className:"py-3 border-0",children:(0,w.jsx)("p",{className:"h5 my-2 ",children:"Apps & more"})}),(0,w.jsx)(r.A.Body,{className:"aside_body p-0 w-100 border-0",children:(0,w.jsx)("div",{className:"pb-3 mb-4",children:(0,w.jsx)(C.A,{variant:"primary",className:"flex-column",children:(0,w.jsx)(u.A,{className:"select-group d-flex m-0 p-2 pt-0",children:F.map(((e,l)=>(0,w.jsx)(m.A,{className:"col-4 px-1 mb-2",children:(0,w.jsx)(C.A.Item,{className:"apps_tab h-100",children:(0,w.jsxs)(C.A.Link,{eventKey:`app_${e.id}`,variant:"grid","data-grid":e.id,className:"border rounded d-flex flex-column align-items-center p-1 w-100",onClick:l=>this.changeApp(e.id),children:[(0,w.jsx)("div",{className:"w-100 h-68px f-center mb-1",children:(0,w.jsx)("i",{className:`fa-regular fa-${e.icon}`})}),(0,w.jsx)("p",{className:"mb-0 text-center fw-semibold fs-9 f-center",children:e.title})]})})},l)))})})})})]})}),(0,w.jsx)(r.A,{className:((0,x.C2)()?"rounded-0 shadow-none":"m-5")+" w-100",children:(0,w.jsxs)("div",{className:"preview_ p_header_",children:[(0,w.jsxs)(r.A.Header,{className:"py-4 f-between w-100 px-xl-7",children:[(0,w.jsx)("p",{className:"h5 my-2 ",children:l}),(0,w.jsx)("div",{children:(0,w.jsxs)(c.A,{id:"toggle_aside",variant:"link",size:"sm",className:"d-flex d-xl-none",onClick:()=>this.setState({filterToggle:!e}),children:["Menu",(0,w.jsx)(p.gc,{icon:"sliders",iconClass:"ms-2 lh-base"})]})})]}),(0,w.jsx)(r.A.Body,{className:"p-0 px-xl-4 card-body-download",children:(0,w.jsxs)(n.A.Content,{children:[(0,w.jsx)(n.A.Pane,{className:"my-5",eventKey:"app_6",children:"app_6"==s&&(0,w.jsx)(j,{allWalls:a,getNewData:()=>o()})}),(0,w.jsx)(n.A.Pane,{className:"my-5",eventKey:"app_7",children:"app_7"==s&&(0,w.jsx)(f,{allWalls:a,getNewData:()=>o()})}),(0,w.jsx)(n.A.Pane,{className:"my-5",eventKey:"app_8",children:"app_8"==s&&(0,w.jsx)(A,{userData:i})}),(0,w.jsx)(n.A.Pane,{className:"my-5",eventKey:"app_9",children:"app_9"==s&&(0,w.jsx)(W,{userData:i,allWalls:a})}),(0,w.jsx)(n.A.Pane,{className:"my-5",eventKey:"app_10",children:"app_10"==s&&(0,w.jsx)(T.A,{userData:i,allWalls:a,activeKey:s})})]})})]})})]})})})})]})}}const L=(0,_.Ng)((e=>{var l,s,a,t,n,i;return{userData:null===(l=e.authorized)||void 0===l||null===(s=l.userData)||void 0===s?void 0:s.user_data,netWorkList:null===(a=e.addFeedReducer)||void 0===a||null===(t=a.addFeedNetworks)||void 0===t?void 0:t.networks,allWalls:null===(n=e.dashboardData)||void 0===n||null===(i=n.dashboarddata)||void 0===i?void 0:i.allWalls}}),(e=>({UPDATE_USER_HOME_DATA:()=>e((0,D.ZU)()),GET_ADD_FEED:()=>e((0,k.Ux)())})))(U)},18038:(e,l,s)=>{s.d(l,{A:()=>d});var a=s(9950),t=s(97937),n=s(54810),i=s(44414);class o extends a.Component{constructor(e){super(e),this.handleClose=()=>{this.props.filterToggleCallback(!1)},this.state={width:window.innerWidth,isSavedList:!1},this.handleWindowResize=this.handleWindowResize.bind(this)}handleWindowResize(){this.setState({width:window.innerWidth})}componentDidMount(){window.addEventListener("resize",this.handleWindowResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize)}render(){const{filterToggle:e,closeAside:l}=this.props,{width:s}=this.state;return(0,i.jsxs)("div",{className:"aside__ border-end "+(s<1280?"offcanvas offcanvas-start "+(e?"show":""):""),id:"aside__toggle",children:[(0,i.jsx)("div",{className:"d-flex justify-content-end d-xl-none p-3 border-bottom h-48px",children:(0,i.jsx)(t.A,{variant:"secondary",id:"toggle_aside",size:"sm",className:"d-flex border-0",onClick:()=>l(),children:(0,i.jsx)(n.gc,{icon:"xmark",iconClass:"me-0"})})}),(0,i.jsx)("div",{className:"aside__body w-100",children:this.props.children})]})}}const d=o},68849:(e,l,s)=>{s.d(l,{A:()=>n});var a=s(9950),t=s(44414);const n=e=>{let{id:l,defaultColor:s,changeColor:n,inheritStyle:i}=e;(0,a.useEffect)((()=>{o()}),[s]);const o=()=>{const e=window.$(`#${l}`);e.data("minicolors-initialized")?e.minicolors("value",s):e.minicolors({control:"hue",letterCase:"lowercase",position:"bottom left",change:d,theme:"bootstrap",value:s})},d=(e,l)=>{e&&n(e)};return(0,t.jsx)("input",{className:"form-control minicolors-input","data-control":"hue",type:"text",id:l,defaultValue:s,disabled:i})}},17247:(e,l,s)=>{s.d(l,{A:()=>u});var a=s(9950),t=s(86781),n=s(68459),i=s(97937),o=s(54810),d=s(82094),r=s(52867),c=s(44414);class h extends a.Component{render(){const{selectContent:e,getPosts:l,postContent:s,showMore:a}=this.props;return(0,c.jsx)("div",{className:"email_gallery",children:e&&(null===e||void 0===e?void 0:e.length)>0?(0,c.jsxs)("div",{className:"py-3 w-100",children:[(0,c.jsx)(t.A,{className:"gx-1",children:null===e||void 0===e?void 0:e.map(((e,l)=>(0,c.jsx)(n.A,{sm:4,lg:3,xl:4,xxl:3,children:(0,c.jsxs)("div",{"data-id":`media-${e.id}`,className:"position-relative mb-1 cursor-pointer mail_media_",onClick:l=>s(e),children:[(0,c.jsx)(d.A,{mediaClass:"bg-gray-200",size:100,height:300,width:300,url:e.postFile,isCover:!0,alt:(0,r.wG)(e.postFile)}),e.active?(0,c.jsx)("div",{className:"position-absolute top-0 end-0 p-2",children:(0,c.jsx)("span",{className:"h-20px w-20px rounded-circle border border-light bg-primary f-center text-white fs-10",children:(0,c.jsx)(o.gc,{type:"solid",icon:"check"})})}):null,(0,c.jsx)("div",{className:"position-absolute p-2 end-0 bottom-0 social_icon",children:(0,c.jsx)("img",{className:"img-fluid",loading:"lazy",src:(0,o.pc)(`media/icons/social-icons/${(0,r.EC)(e.networkId)}.svg`),height:16,width:16,alt:(0,r.Oi)(e.networkId),"data-invert":(0,r.Oi)(e.networkId)})})]})},l)))}),a?(0,c.jsx)("div",{className:"f-center my-4",children:(0,c.jsx)(i.A,{id:"mail_more_btn",variant:"link text-nowrap",size:"sm",onClick:()=>l(!0),children:"Show More"})}):null]}):null})}}const u=h}}]);