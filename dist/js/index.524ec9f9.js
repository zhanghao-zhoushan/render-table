(function(e){function n(n){for(var a,l,i=n[0],s=n[1],c=n[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(a=!1)}a&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},r={index:0},o=[];function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c31f")},"9dac":function(e,n,t){},c31f:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"bashCode",(function(){return d})),t.d(a,"columnsCode",(function(){return p})),t.d(a,"useCode",(function(){return h})),t.d(a,"javascriptCode",(function(){return m})),t.d(a,"EventJavascriptCode",(function(){return g})),t.d(a,"htmlCode",(function(){return f})),t.d(a,"propsCode",(function(){return b})),t.d(a,"actionCode",(function(){return v}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var r,o,l=t("2b0e"),i=t("5c96"),s=t.n(i),c=(t("0fae"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"page-content"},[t("h1",[e._v("RenderTable")]),t("p",[e._v("集成 Pagination、Table、 TableColumn、 Loading 组件，更快的开发 Table")]),t("h2",[e._v("Demo")]),t("RenderTable",{attrs:{columns:e.columns,loading:e.loading,total:e.total,tableData:e.tableData,currentPage:e.params.currentPage,pageSize:e.params.pageSize},on:{change:e.handleChange}}),t("h2",[e._v("Install")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:"$ npm install render-el-table -S",expression:"'$ npm install render-el-table -S'"}]},[t("code",{staticClass:"bash"})]),t("h2",[e._v("Usable")]),t("p",[e._v("在 main.js 文件中引入")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.bashCode,expression:"code.bashCode"}]},[t("code",{staticClass:"javascript"})]),t("p",[e._v("在项目中使用 RenderTable")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.htmlCode,expression:"code.htmlCode"}]},[t("code",{staticClass:"html"})]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.useCode,expression:"code.useCode"}]},[t("code",{staticClass:"javascript"})]),t("h2",[e._v("Set columns")]),t("p",[e._v("你可以通过在 columns 配置自定义 column, 支持 JSX")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.columnsCode,expression:"code.columnsCode"}]},[t("code",{staticClass:"javascript"})]),t("h2",[e._v("Event")]),t("p",[e._v("监听 Pagination 的 change 事件触发")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.htmlCode,expression:"code.htmlCode"}]},[t("code",{staticClass:"html"})]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.EventJavascriptCode,expression:"code.EventJavascriptCode"}]},[t("code",{staticClass:"javascript"})]),t("h1",[e._v("Action")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.actionCode,expression:"code.actionCode"}]},[t("code",{staticClass:"javascript"})]),t("h1",[e._v("RenderTable Support Props")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.propsCode,expression:"code.propsCode"}]},[t("code",{staticClass:"javascript"})])],1),e._m(1)])}),u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-header"},[t("h1",[e._v("RenderTable")]),t("h2",[e._v("基于 Element Table 的二次封装")]),t("a",{staticClass:"btn",attrs:{href:"https://github.com/zhanghao-zhoushan/render-el-table",target:"_blank"}},[e._v("View on GitHub")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-footer"},[e._v(" RenderTable 插件由 "),t("a",{attrs:{href:"https://www.zhanghao-zhoushan.cn/",target:"_blank"}},[e._v("sailor")]),e._v("编写 ")])}],d="import RenderTable from 'render-el-table'\nVue.use(RenderTable)",p="const columns = [\n  {\n    prop: 'date',\n    label: '日期',\n    render(h, ctx) {\n      const { row: { date } = {} } = ctx.props\n      return <span style='color: #409eff'>{date}</span>\n    }\n  },\n  { prop: 'name', label: '姓名' },\n  { prop: 'address', label: '地址' }\n]",h="export default {\n  data() {\n    return {\n      columns,\n      tableData: [],\n      total: 0,\n      loading: false,\n      params: {\n        pageSize: 10,\n        currentPage: 1\n      }\n    }\n  },\n  created() {\n    this.onSubmit()\n  },\n  methods: {\n    onSubmit() {\n      this.loading = true\n      setTimeout(() => {\n        this.loading = false\n        this.total = 100\n        this.tableData = []\n      }, 500)\n    },\n    handleChange(params) {\n      console.log('handleChange: ', params)\n      this.params = params\n      this.onSubmit()\n    }\n  }\n}",m="export default {\n  name: 'App',\n  data() {\n    return {\n      columns,\n      tableData: [],\n      total: 0,\n      loading: false,\n      params: {\n        pageSize: 10,\n        currentPage: 1\n      }\n    }\n  },\n  created() {\n    this.onSubmit()\n    this.addCctionColumn()\n  },\n\n  methods: {\n    onSubmit() {\n      this.loading = true\n      setTimeout(() => {\n        this.loading = false\n        this.total = 100\n        this.tableData = tableData\n      }, 500)\n    },\n    addCctionColumn() {\n      const self = this\n      this.columns.push({\n        prop: 'action',\n        label: '操作',\n        render(h, ctx) {\n          const { row } = ctx.props\n          return (\n            <el-button size='small' type='primary' onClick={() => self.handleClick(row)}>\n              主要按钮\n            </el-button>\n          )\n        }\n      })\n    },\n    handleClick(row) {\n      console.log('handleClick: ', row)\n    },\n    handleChange(params) {\n      console.log('handleChange: ', params)\n      this.params = params\n      this.onSubmit()\n    }\n  }\n}",g="export default {\n  methods: {\n    handleChange(params) {\n      console.log('handleChange: ', params)\n      this.params = params\n      this.onSubmit()\n    }\n  }\n}",f='<RenderTable\n  :columns="columns"\n  :loading="loading"\n  :total="total"\n  :tableData="tableData"\n  :currentPage="params.currentPage"\n  :pageSize="params.pageSize"\n  @change="handleChange" />',b="// render-el-table.vue\nexport default {\n  props: {\n    columns: {\n      type: Array,\n      default: () => []\n    },\n    tableData: {\n      type: Array,\n      default: () => {}\n    },\n    loading: {\n      type: Boolean,\n      default: false\n    },\n    total: {\n      type: Number,\n      default: 0\n    },\n    currentPage: {\n      type: Number,\n      default: 1\n    },\n    pageSize: {\n      type: Number,\n      default: 10\n    },\n    pageSizes: {\n      type: Array,\n      default: () => [10, 20, 30, 40, 50]\n    },\n    layout: {\n      type: String,\n      default: 'total, sizes, prev, pager, next, jumper'\n    }\n  }\n}",v="export default {\n  created() {\n    this.addCctionColumn()\n  },\n  methods: {\n    addCctionColumn() {\n      const self = this\n      this.columns.push({\n        prop: 'action',\n        label: '操作',\n        render(h, ctx) {\n          const { row } = ctx.props\n          return (\n            <el-button size='small' type='primary' onClick={() => self.handleClick(row)}>\n              主要按钮\n            </el-button>\n          )\n        }\n      })\n    },\n    handleClick(row) {\n      console.log('handleClick: ', row)\n    }\n  }\n}",C=[{type:"selection",width:55},{prop:"date",label:"日期",children:[{prop:"date",label:"日期1"},{prop:"date",label:"日期2"}],render:function(e,n){var t=n.props.row;t=void 0===t?{}:t;t.date;return e("span",["date"])}},{prop:"name",label:"姓名"},{prop:"address",label:"地址"}],y=[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],w={name:"App",data:function(){return{code:a,columns:C,tableData:[],total:0,loading:!1,params:{pageSize:10,currentPage:1}}},created:function(){this.onSubmit(),this.addCctionColumn()},methods:{onSubmit:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.total=100,e.tableData=y}),500)},addCctionColumn:function(){this.$createElement;var e=this;this.columns.push({prop:"action",label:"操作",render:function(n,t){var a=t.props.row;return n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(){return e.handleClick(a)}}},["主要按钮"])}})},handleClick:function(e){console.log("handleClick: ",e)},handleChange:function(e){console.log("handleChange: ",e),this.params=e,this.onSubmit()}}},j=w,S=(t("e780"),t("2877")),_=Object(S["a"])(j,c,u,!1,null,null,null),x=_.exports,z=(t("d81d"),t("b0c0"),t("caad"),t("a9e3"),t("5530")),T=t("2638"),P=t.n(T),k={name:"RenderTableColumn",functional:!0,render:function(e,n){var t=arguments[0],a=n.props,r=a.row,o=a.column,l=o.render,i=o.prop;return"function"!==typeof l?t("div",[r[i]]):l(e,n)}},O=k,D=Object(S["a"])(O,r,o,!1,null,null,null),N=D.exports;N.install=function(e){e.component(N.name,N)};var E,A,R=N,$={name:"RenderTable",props:{columns:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){}},loading:{type:Boolean,default:!1},total:{type:Number,default:0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,40,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"}},computed:{params:function(){return{currentPage:this.currentPage,pageSize:this.pageSize}}},methods:{renderElTableColumn:function(e,n){var t=n.children,a=void 0===t?[]:t,r=["index","selection"],o=a&&a.length,l={default:function(t){var r=t.row;return o?a.map((function(n){return e(R,{attrs:{row:r,column:n}})})):e(R,{attrs:{row:r,column:n}})}};return n.type&&r.includes(n.type)&&(l=null),e("elTableColumn",P()([{},{props:n,scopedSlots:l},{attrs:{type:n.type,label:n.label,prop:n.prop},key:n.key}]))},handleSizeChange:function(e){this.$emit("change",Object(z["a"])(Object(z["a"])({},this.params),{},{pageSize:e,currentPage:1}))},handleCurrentChange:function(e){this.$emit("change",Object(z["a"])(Object(z["a"])({},this.params),{},{currentPage:e}))}},render:function(e){var n=this,t=this.columns,a=this.loading,r=this.tableData,o=this.total,l=this.layout,i=this.currentPage,s=this.pageSize,c=this.pageSizes;return e("div",{class:"render-table"},[e("div",{class:"render-table__content",style:"margin-bottom: 20px;"},[e("elTable",{attrs:{data:r},directives:[{name:"loading",value:a}],props:Object(z["a"])({},this.$attrs),style:"width: 100%"},[t.map((function(t){return n.renderElTableColumn(e,t)}))])]),e("div",{class:"render-table__pagination",style:"text-align: center;"},[e("elPagination",{on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange},attrs:{currentPage:i,pageSizes:c,pageSize:s,layout:l,total:o}})])])}},J=$,B=Object(S["a"])(J,E,A,!1,null,null,null),M=B.exports;M.install=function(e){e.component(M.name,M)};var V=M,q=[V,R],U=function e(n){e.installed||q.map((function(e){return n.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&U(window.Vue);var G={install:U,renderTable:V,renderTableColumn:R},H=(t("4160"),t("159b"),t("1487")),I=t.n(H),L=(t("6476"),{install:function(e){e.directive("highlightjs",{deep:!0,bind:function(e,n){var t=e.querySelectorAll("code");t.forEach((function(e){n.value&&(e.textContent=n.value),I.a.highlightBlock(e)}))},componentUpdated:function(e,n){var t=e.querySelectorAll("code");t.forEach((function(e){n.value&&(e.textContent=n.value,I.a.highlightBlock(e))}))}})}}),X=L;l["default"].use(s.a),l["default"].use(G),l["default"].use(X),l["default"].config.productionTip=!1,new l["default"]({render:function(e){return e(x)}}).$mount("#app")},e780:function(e,n,t){"use strict";var a=t("9dac"),r=t.n(a);r.a}});
//# sourceMappingURL=index.524ec9f9.js.map