(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(9),i=a.n(o),l=a(14),u=a(11),m=a(5),h=a(6),d=a(8),p=a(7),g=a(10),b=(a(15),a(24)),j=a.n(b).a.create({baseURL:"https://pixabay.com/api",method:"GET",params:{key:"22675248-9d53002fe5bb858ba3591edf9",image_type:"photo",orientation:"horizontal",per_page:"12"}}),f=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/?q=".concat(t,"&page=").concat(a));case 2:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=f,O=a(1),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.imageName;if(""===a.trim())return g.b.error("Enter the name of the picture!");e.props.onSubmit(a),e.setState({imageName:""})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.imageName;return Object(O.jsx)("header",{className:"Searchbar",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(O.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:e,onChange:this.handleNameChange,autoComplete:"off",autoFocus:!0})]})})}}]),a}(n.Component),S=x,y=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,r=e.handleSelectedImage;return Object(O.jsx)("li",{className:"ImageGalleryItem",children:Object(O.jsx)("img",{src:t,alt:a,onClick:function(){return r(n,a)},className:"ImageGalleryItem-image"})})},w=function(e){var t=e.hits,a=e.handleSelectedImage;return Object(O.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(O.jsx)(y,{webformatURL:n,tags:r,largeImageURL:c,handleSelectedImage:a},t)}))})},k=a(25),N=a.n(k),C=(a(71),function(){return Object(O.jsx)("div",{className:"Loading",children:Object(O.jsx)(N.a,{type:"Oval",color:"#00BFFF",height:60,width:60,timeout:2500})})}),I=function(e){var t=e.onClick;return Object(O.jsx)("button",{onClick:t,className:"Button",children:"Load More"})},L=document.querySelector("#modal-root"),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(O.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(O.jsx)("div",{className:"Modal",children:Object(O.jsx)("img",{src:t,alt:a})})}),L)}}]),a}(n.Component),U=F,E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",hits:[],page:1,status:"idle",selectedImage:""},e.handleFormSubmit=function(t){e.setState({imageName:t,hits:[],page:1})},e.pageIncrement=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleSelectedImage=function(t,a){e.setState({selectedImage:{src:t,tags:a}})},e.handleCloseModal=function(){e.setState({selectedImage:""})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,c,s,o,u,m,h,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.imageName,r=a.page,c=this.state,s=c.imageName,o=c.page,n===s&&r===o){e.next=20;break}return e.prev=3,u=this.state,m=u.imageName,h=u.page,this.setState({status:"pending"}),e.next=8,v(m,h);case 8:if(d=e.sent,this.setState({status:"resolved"}),0!==d.length){e.next=12;break}return e.abrupt("return",g.b.error("Picture with the name ".concat(m," is not in the catalog")));case 12:this.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(d))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),this.setState({status:"rejected"}),console.error(e.t0.message);case 20:case"end":return e.stop()}}),e,this,[[3,16]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.selectedImage,n=e.status;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{onSubmit:this.handleFormSubmit}),"pending"===n&&Object(O.jsx)(C,{}),"resolved"===n&&Object(O.jsx)(w,{hits:t,handleSelectedImage:this.handleSelectedImage}),t.length>0&&Object(O.jsx)(I,{onClick:this.pageIncrement}),a&&Object(O.jsx)(U,{onClose:this.handleCloseModal,src:a.src,alt:a.tags}),Object(O.jsx)(g.a,{autoClose:2500})]})}}]),a}(n.Component),R=E;a(72);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.55599f75.chunk.js.map