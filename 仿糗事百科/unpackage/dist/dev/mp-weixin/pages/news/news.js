(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/news/news"],{

/***/ 21:
/*!************************************************************************************!*\
  !*** /Users/hongliping/Documents/-11/仿糗事百科/main.js?{"page":"pages%2Fnews%2Fnews"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _news = _interopRequireDefault(__webpack_require__(/*! ./pages/news/news.vue */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_news.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 22:
/*!*****************************************************************!*\
  !*** /Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=26a6dcc4& */ 23);
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.vue?vue&type=style&index=0&lang=css& */ 27);
/* harmony import */ var _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Documents/-11/仿糗事百科/pages/news/news.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 23:
/*!************************************************************************************************!*\
  !*** /Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue?vue&type=template&id=26a6dcc4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=template&id=26a6dcc4& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_26a6dcc4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 24:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue?vue&type=template&id=26a6dcc4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** /Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=script&lang=js& */ 26);
/* harmony import */ var _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 26:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ 142));};var commonList = function commonList() {return __webpack_require__.e(/*! import() | components/common/common-list */ "components/common/common-list").then(__webpack_require__.bind(null, /*! ../../components/common/common-list.vue */ 156));};var newsNavBar = function newsNavBar() {return __webpack_require__.e(/*! import() | components/news/news-nav-bar */ "components/news/news-nav-bar").then(__webpack_require__.bind(null, /*! ../../components/news/news-nav-bar.vue */ 163));};var topicNav = function topicNav() {return __webpack_require__.e(/*! import() | components/news/topic-nav */ "components/news/topic-nav").then(__webpack_require__.bind(null, /*! ../../components/news/topic-nav.vue */ 170));};var topicList = function topicList() {return __webpack_require__.e(/*! import() | components/news/topic-list */ "components/news/topic-list").then(__webpack_require__.bind(null, /*! ../../components/news/topic-list.vue */ 177));};var _default =






























































{
  components: {
    commonList: commonList,
    newsNavBar: newsNavBar,
    loadMore: loadMore,
    topicNav: topicNav,
    topicList: topicList },

  data: function data() {
    return {
      swiperheight: 500,
      tabIndex: 0,
      tabBars: [
      { name: "关注", id: "guanzhu" },
      { name: "话题", id: "topic" }],

      guanzhu: {
        loadtext: "上拉加载更多",
        list: [
        // 文字
        {
          userpic: "../../static/demo/userpic/10.jpg",
          username: "三鱼先生",
          sex: 0, // 0男 1女
          age: 25,
          isguanzhu: false,
          title: "我是标题",
          titleepic: "",
          video: false,
          shaer: false,
          path: "深圳 罗湖",
          shaernum: 20,
          commonnum: 30,
          goodnum: 50 },
        // 图文
        {
          userpic: "../../static/demo/userpic/10.jpg",
          username: "三鱼先生",
          sex: 1, // 0男 1女
          age: 25,
          isguanzhu: false,
          title: "我是标题",
          titleepic: "../../static/demo/datapic/14.jpg",
          video: false,
          shaer: false,
          path: "深圳 罗湖",
          shaernum: 20,
          commonnum: 30,
          goodnum: 50 },

        // 视频
        {
          userpic: "../../static/demo/userpic/10.jpg",
          username: "三鱼先生",
          sex: 0, // 0男 1女
          age: 25,
          isguanzhu: false,
          title: "我是标题",
          titleepic: "../../static/demo/datapic/14.jpg",
          video: {
            looknum: "20w",
            long: "2:17" },

          shaer: false,
          path: "深圳 罗湖",
          shaernum: 20,
          commonnum: 30,
          goodnum: 50 },

        // 分享
        {
          userpic: "../../static/demo/userpic/10.jpg",
          username: "三鱼先生",
          sex: 0, // 0男 1女
          age: 25,
          isguanzhu: false,
          title: "我是标题",
          titleepic: "",
          video: false,
          shaer: {
            title: "一只英俊的小马",
            titleepic: "../../static/demo/datapic/44.jpg" },

          path: "深圳 罗湖",
          shaernum: 20,
          commonnum: 30,
          goodnum: 50 }] },




      topic: {
        swiper: [
        { src: "../../static/demo/banner1.jpg" },
        { src: "../../static/demo/banner2.jpg" },
        { src: "../../static/demo/banner4.jpg" }],

        nav: [
        { name: "最新" },
        { name: "游戏" },
        { name: "打卡" },
        { name: "故事" },
        { name: "情感" },
        { name: "喜爱" }],

        list: [
        {
          titlepic: "../../static/demo/topicpic/3.jpeg",
          title: "#话题名称#",
          desc: "话题描述",
          totalnum: 50,
          todaynum: 20 },

        {
          titlepic: "../../static/demo/topicpic/4.jpeg",
          title: "#话题名称#",
          desc: "话题描述",
          totalnum: 50,
          todaynum: 20 },

        {
          titlepic: "../../static/demo/topicpic/5.jpeg",
          title: "#话题名称#",
          desc: "话题描述",
          totalnum: 50,
          todaynum: 20 },

        {
          titlepic: "../../static/demo/topicpic/6.jpeg",
          title: "#话题名称#",
          desc: "话题描述",
          totalnum: 50,
          todaynum: 20 },

        {
          titlepic: "../../static/demo/topicpic/7.jpeg",
          title: "#话题名称#",
          desc: "话题描述",
          totalnum: 50,
          todaynum: 20 },

        {
          titlepic: "../../static/demo/topicpic/8.jpeg",
          title: "#话题名称#",
          desc: "话题描述",
          totalnum: 50,
          todaynum: 20 }] } };






  },
  onLoad: function onLoad() {var _this = this;
    uni.getSystemInfo({
      success: function success(res) {
        // 适配屏幕高度
        var height = res.windowHeight - uni.upx2px(100);
        _this.swiperheight = height;
      } });

  },
  methods: {
    // tab切换
    chngetap: function chngetap(index) {
      this.tabIndex = index;
    },
    // 滑动事件
    tabChange: function tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    // 上拉加载
    loadmore: function loadmore() {var _this2 = this;
      if (this.guanzhu.loadtext != "上拉加载更多") {return;}
      this.guanzhu.loadtext = "加载中...";
      // 获取数据
      setTimeout(function () {
        //获取完成
        var obj = {
          userpic: "../../static/demo/userpic/10.jpg",
          username: "三鱼先生",
          sex: 0, // 0男 1女
          age: 25,
          isguanzhu: false,
          title: "我是标题",
          titleepic: "../../static/demo/datapic/14.jpg",
          video: {
            looknum: "20w",
            long: "2:17" },

          shaer: false,
          path: "深圳 罗湖",
          shaernum: 20,
          commonnum: 30,
          goodnum: 50 };

        _this2.guanzhu.list.push(obj);
        _this2.guanzhu.loadtext = "上拉加载更多";
      }, 1000);
      // this.guanzhu.loadtext = "没有更多数据了"
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 27:
/*!**************************************************************************************************!*\
  !*** /Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Desktop/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=style&index=0&lang=css& */ 28);
/* harmony import */ var _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Desktop_HBuilderX_Alpha_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 28:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hongliping/Documents/-11/仿糗事百科/pages/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[21,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/news/news.js.map