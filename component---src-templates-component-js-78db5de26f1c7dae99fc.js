(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return f});t(162),t(74),t(75),t(77),t(78);var n=t(7),r=t.n(n),l=t(0),i=t.n(l),o=t(4),d=t.n(o),s=t(156),m=t.n(s),c=t(33),p=t.n(c),u=(t(147),t(155)),N=t(160),y="GIF",E="PNG",f=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.extractComponentsInfo=function(e){var a=/@\w*\:/,t={description:m.a.get(e,"description.text")};if(e.docblock){var n=m.a.split(e.docblock,"\n");m.a.forEach(n,function(e){if(e&&a.test(e)){var n=e.match(a)[0].slice(1,-1);t[n]=e.split(a)[1].trim()}})}return t},t.renderLink=function(e){var a=e.extendslink;return a?a.includes("http")?i.a.createElement("span",null,i.a.createElement("a",{href:e.extendslink,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("b",null,e.extends))," ",e.extendsnotes,i.a.createElement("br",null)):i.a.createElement("span",null,i.a.createElement(p.a,{to:e.extendslink},i.a.createElement("b",null,e.extends))," ",e.extendsnotes,i.a.createElement("br",null)):i.a.createElement("span",null,i.a.createElement("b",null,e.extends),e.extendsnotes,i.a.createElement("br",null))},t.renderImage=function(e,a){return i.a.createElement("img",{key:a,alt:"",src:e,style:{marginRight:20,width:320,border:"1px solid black"}})},t.renderGif=function(e,a){return i.a.createElement("img",{key:a,alt:"",src:e,style:{marginRight:20,width:320}})},t.renderImages=function(e,a){switch(a){case y:return e.map(this.renderGif);default:return e.map(this.renderImage)}},t.renderImportant=function(e){return i.a.createElement("div",{alt:"",style:{marginBottom:10}},i.a.createElement("span",{style:{fontWeight:"700"}},"IMPORTANT: ")," ",e.important,"  ",e.importantLink&&i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.importantLink},"here"))},t.renderNote=function(e,a){return i.a.createElement("div",{key:a,alt:"",style:{marginBottom:10}},e)},t.renderNotes=function(e){return e.map(this.renderNote)},t.renderComponentPage=function(){var e=this.props.pathContext.componentNode,a=this.extractComponentsInfo(e),t=m.a.get(e,"props"),n=a.gif?a.gif.split(","):void 0,r=a.image?a.image.split(","):void 0,l=a.notes?a.notes.split(";"):void 0;return i.a.createElement("div",{className:"docs-page"},i.a.createElement("div",{className:"docs-page__content"},i.a.createElement("h1",null,e.displayName),i.a.createElement("h3",null,a.description),a.extends&&i.a.createElement("div",null,"Extends: ",this.renderLink(a),"(meaning you can pass the super component's props as well)."),a.modifiers&&i.a.createElement("div",null,i.a.createElement("p",null,"Supported modifiers: ",i.a.createElement("b",null,a.modifiers),". ",i.a.createElement("br",null),"Read more about modifiers ",i.a.createElement(p.a,{to:"/modifiers/"},"here"),".")),a.notes&&i.a.createElement("div",null,i.a.createElement("h4",{style:{marginBottom:10}},"NOTES"),this.renderNotes(l)),a.important&&i.a.createElement("div",null,this.renderImportant(a)),t.length>0&&i.a.createElement("div",null,i.a.createElement("h3",null,"PROPS"),i.a.createElement(h,{props:t})),r&&i.a.createElement("div",{className:"container"},i.a.createElement("h3",null,"EXAMPLE"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 text-center"},this.renderImages(r,E)))),n&&i.a.createElement("div",{className:"container"},i.a.createElement("h3",null,"LIVE EXAMPLE"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 text-center"},this.renderImages(n,y)))),a.example&&i.a.createElement("div",null,i.a.createElement("h3",null,"CODE SAMPLE"),i.a.createElement("p",null,"See example"," ",i.a.createElement("a",{target:"_blank",href:a.example},"here"),"."))))},t.render=function(){return i.a.createElement(u.a,{navbar:i.a.createElement(N.a,null)},this.renderComponentPage())},a}(l.Component);f.propTypes={pathContext:d.a.object};var h=function(e){var a=e.props;return i.a.createElement("div",{className:"component-props"},i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"name"),i.a.createElement("th",null,"description"),i.a.createElement("th",null,"type"),i.a.createElement("th",null,"default")),m.a.map(a,function(e,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,e.name),i.a.createElement("td",null,m.a.get(e,"description.text")),i.a.createElement("td",null,m.a.get(e,"type.name")),i.a.createElement("td",null,m.a.get(e,"defaultValue.value")))}))))}},153:function(e,a,t){e.exports=t.p+"static/logo-7930350852368569acb02b9433209639.png"},154:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},155:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=t(157),d=t.n(o),s=t(33),m=t.n(s),c=(t(143),t(153)),p=t.n(c),u=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(m.a,{to:"/"},r.a.createElement("img",{className:"logo",src:p.a,alt:"logo"})),r.a.createElement(m.a,{to:"/docs/"},"DOCS"),r.a.createElement("a",{target:"_blank",href:"https://github.com/wix-private/wix-react-native-ui-lib"},"GITHUB"),r.a.createElement("a",{target:"_blank",href:"https://github.com/wix-private/wix-react-native-ui-lib/wiki"},"WIKI"))},N=(t(144),function(e){var a=e.children,t=e.navbar;e.data;return r.a.createElement("div",{className:"layout"},r.a.createElement(d.a,{title:"RNUILIB",meta:[{name:"description",content:"React Native UI Library"},{name:"keywords",content:"react native, uilib"}]}),r.a.createElement(u,null),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"sidebar"},t),r.a.createElement("div",{className:"content"},a)))});N.propTypes={navbar:i.a.element,children:i.a.func};a.a=N},158:function(e){e.exports={data:{allComponentMetadata:{edges:[{node:{displayName:"Banner"}},{node:{displayName:"IGNORE"}},{node:{displayName:"ExampleComponent"}},{node:{displayName:"ActionBar"}},{node:{displayName:"IGNORE"}},{node:{displayName:"AnimatedImage"}},{node:{displayName:"AnimatedScanner"}},{node:{displayName:"ActionSheet"}},{node:{displayName:"Badge"}},{node:{displayName:"Avatar"}},{node:{displayName:"Card.Item"}},{node:{displayName:"Card.Image"}},{node:{displayName:"Card.Section"}},{node:{displayName:"Card"}},{node:{displayName:"Checkbox"}},{node:{displayName:"Button"}},{node:{displayName:"Carousel"}},{node:{displayName:"Dialog"}},{node:{displayName:"ConnectionStatusBar"}},{node:{displayName:"Hint"}},{node:{displayName:"ListItem.Part"}},{node:{displayName:"FeatureHighlight"}},{node:{displayName:"ListItem"}},{node:{displayName:"MaskedInput"}},{node:{displayName:"TextArea"}},{node:{displayName:"TextField"}},{node:{displayName:"TextInput"}},{node:{displayName:"PageControl"}},{node:{displayName:"Notification"}},{node:{displayName:"Image"}},{node:{displayName:"PanGestureView"}},{node:{displayName:"PickerDialog"}},{node:{displayName:"PickerDialog"}},{node:{displayName:"Picker.Item"}},{node:{displayName:"IGNORE"}},{node:{displayName:"Picker"}},{node:{displayName:"ProgressBar"}},{node:{displayName:"RadioGroup"}},{node:{displayName:"RadioButton"}},{node:{displayName:"SharedArea"}},{node:{displayName:"TargetElement"}},{node:{displayName:"SourceElement"}},{node:{displayName:"IGNORE"}},{node:{displayName:"Stepper"}},{node:{displayName:"Switch"}},{node:{displayName:"TabBar.Item"}},{node:{displayName:"TagsInput"}},{node:{displayName:"Tour"}},{node:{displayName:"TouchableOpacity"}},{node:{displayName:"TabBar"}},{node:{displayName:"Text"}},{node:{displayName:"IGNORE"}},{node:{displayName:"LoaderScreen"}},{node:{displayName:"View"}},{node:{displayName:"Toast"}},{node:{displayName:"Modal.TopBar"}},{node:{displayName:"StateScreen"}},{node:{displayName:"IGNORE"}},{node:{displayName:"Modal"}},{node:{displayName:"IGNORE"}},{node:{displayName:"Drawer"}},{node:{displayName:"NativePicker"}}]}}}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=t(56),d=t(2),s=function(e){var a=e.location,t=d.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},160:function(e,a,t){"use strict";t(74),t(75);var n=t(35),r=t.n(n),l=t(7),i=t.n(l),o=t(158),d=t(0),s=t.n(d),m=t(4),c=t.n(m),p=t(33),u=t.n(p),N=(t(154),s.a.createContext({})),y=function(e){return s.a.createElement(N.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};y.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var E=t(156),f=t.n(E),h=(t(145),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={filter:""},t.renderNavbar=function(e){var a=t.state.filter,n=t.getNavbarComponents(e),r=f.a.filter(n,function(e){return f.a.includes(f.a.lowerCase(e.node.displayName),f.a.lowerCase(a))});return s.a.createElement("div",{className:"navbar"},s.a.createElement("div",{className:"search"},s.a.createElement("input",{placeholder:"Search...",onChange:t.setFilter})),s.a.createElement("ul",null,f.a.map(r,function(e,a){return s.a.createElement("li",{key:a},s.a.createElement(u.a,{key:e.node.displayName,to:"/docs/"+e.node.displayName+"/"},e.node.displayName))})))},t.setFilter=t.setFilter.bind(r()(t)),t}i()(a,e);var t=a.prototype;return t.setFilter=function(e){var a=e.target.value;this.setState({filter:a})},t.getNavbarComponents=function(e){var a=e.allComponentMetadata.edges;return f.a.chain(a).filter(function(e){return"IGNORE"!==e.node.displayName}).sortBy("node.displayName").value()},t.render=function(){return s.a.createElement(y,{query:"4270028697",render:this.renderNavbar,data:o})},a}(d.Component));h.propTypes={components:c.a.array};a.a=h},162:function(e,a,t){var n=t(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-component-js-78db5de26f1c7dae99fc.js.map