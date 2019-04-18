webpackJsonp([2],{

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(834)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(825),
  /* template */
  __webpack_require__(839),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b8db2798",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);



var logger = __webpack_require__(26);
var PRIVATE_FRIENDS_LIST = 'private/following.json';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'following',
  props: ['user'],
  data: function data() {
    return {
      blockstack: window.blockstack,
      followingList: [],
      loading: true,
      columns: ['name', 'username']
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },

  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.$vs.loading();
      var blockstack = this.blockstack;

      var userData = blockstack.loadUserData();
      var username = userData.username;
      logger.info('Grabbing followingList list', { username: username });
      blockstack.getFile(PRIVATE_FRIENDS_LIST, { decrypt: true }).then(function (followingListJson) {
        if (followingListJson !== null) {
          logger.info('parsing followingList list: ' + followingListJson);
          var followListParsed = JSON.parse(followingListJson || '[]');
          logger.info(followListParsed.toString());
          _this.followingList = followListParsed;
          _this.$vs.loading.close();
        } else {
          _this.$vs.loading.close();
          logger.info('followingList list empty');
        }
      }).catch(function (error) {
        logger.error('could not get followingList list: ' + error, { username: username });
        _this.$vs.loading.close();
      });
    },
    loadUser: function loadUser(username) {
      this.$router.push({ path: '/profile/' + username + '/' });
    },
    deleteUser: function deleteUser(user) {
      var index = this.followingList.indexOf(user);

      confirm('Are you sure you want to stop following this user?') && this.followingList.splice(index, 1) && this.updateFollowingList();
    },
    updateFollowingList: function updateFollowingList() {
      var _this2 = this;

      this.blockstack.putFile(PRIVATE_FRIENDS_LIST, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.followingList), { encrypt: true }).then(function () {
        _this2.notifySuccess('Removed', 'Removed user from following list');
      }).catch(function (error) {
        _this2.notifyFailure('Failure To Remove', error);
      });
    },
    notifySuccess: function notifySuccess(title, text) {
      this.$vs.notify({
        color: 'success',
        title: title,
        text: text
      });
    },
    notifyFailure: function notifyFailure(title, text) {
      this.$vs.notify({
        color: 'danger',
        title: title,
        text: text
      });
    }
  }
});

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(813)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Following.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(830);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(814)("7c6cee78", content, true, {});

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('card', {
    staticClass: "card",
    attrs: {
      "header-classes": {
        'text-right': _vm.isRTL
      }
    }
  }, [_c('h4', {
    staticClass: "card-title",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.followingList')))]), _vm._v(" "), _c('base-table', {
    attrs: {
      "data": _vm.followingList,
      "columns": _vm.columns
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(ref) {
        var row = ref.row;

        return [_c('td', [_vm._v(_vm._s(row.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(row.username))]), _vm._v(" "), _c('td', {
          staticClass: "td-actions text-right"
        }, [_c('base-button', {
          attrs: {
            "type": "info",
            "size": "sm",
            "icon": ""
          },
          on: {
            "click": function($event) {
              return _vm.loadUser(row.username)
            }
          }
        }, [_c('i', {
          staticClass: "tim-icons icon-single-02"
        })]), _vm._v(" "), _c('base-button', {
          attrs: {
            "type": "danger",
            "size": "sm",
            "icon": ""
          },
          on: {
            "click": function($event) {
              return _vm.deleteUser(row)
            }
          }
        }, [_c('i', {
          staticClass: "tim-icons icon-simple-remove"
        })])], 1)]
      }
    }])
  }, [_c('template', {
    slot: "columns"
  }, [_c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Username")]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v("Actions")])])], 2)], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=2.affb98be5a4b294b6097.js.map