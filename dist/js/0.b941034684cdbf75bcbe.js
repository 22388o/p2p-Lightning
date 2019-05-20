webpackJsonp([0],{

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(814)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(805),
  /* template */
  __webpack_require__(819),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);



var logger = __webpack_require__(59);
var PRIVATE_FOLLOW_LIST = 'private/following.json';
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      blockstack: window.blockstack
    };
  },
  computed: {
    userEmail: function userEmail() {
      if (this.user && this.user.publicInformation && this.user.publicInformation.email) {
        return this.user.publicInformation.email;
      }
      return '';
    },
    userLocation: function userLocation() {
      if (this.user && this.user.publicInformation && this.user.publicInformation.location) {
        return this.user.publicInformation.location;
      }
      return '';
    },
    userDescription: function userDescription() {
      if (this.user && this.user.publicInformation && this.user.publicInformation.description) {
        return this.user.publicInformation.description;
      }
      return '';
    },
    userNodeInfo: function userNodeInfo() {
      if (this.user && this.user.publicInformation && this.user.publicInformation.nodeInformation) {
        return this.user.publicInformation.nodeInformation;
      }
      return '';
    },
    signedIn: function signedIn() {
      return this.blockstack.isUserSignedIn();
    }
  },
  methods: {
    addFollow: function addFollow() {
      var _this = this;

      var blockstack = this.blockstack;
      logger.info('Grabbing followingList list');
      blockstack.getFile(PRIVATE_FOLLOW_LIST, { decrypt: true }).then(function (followListJson) {
        var updateFollowList = false;
        var followList = [];
        var storeToFollow = { username: _this.user.username, name: _this.user.person.name(), avatar: _this.user.person.avatarUrl() };
        if (followListJson) {
          logger.info('followingList list: ' + followListJson);
          followList = JSON.parse(followListJson || '[]');

          var alreadyFollowing = followList.find(function (f) {
            return f.username === _this.user.username;
          });
          if (!alreadyFollowing) {
            followList.push(storeToFollow);
            updateFollowList = true;
          } else {
            logger.info('user already following');
          }
        } else {
          logger.info('followingList list empty');
          followList = [storeToFollow];
          updateFollowList = true;
        }
        if (updateFollowList) {
          logger.info('Saving private file', { file: PRIVATE_FOLLOW_LIST });
          blockstack.putFile(PRIVATE_FOLLOW_LIST, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(followList), { encrypt: true }).then(function () {
            _this.notifySuccess(_this.$t('profile.alerts.followingUser'), null);
          }).catch(function (error) {
            _this.notifyFailure(_this.$t('profile.alerts.failureFollowingUser'), error);
          });
        } else {
          _this.notifyWarning(_this.$t('profile.alerts.alreadyFollowingUser'));
        }
      }).catch(function (error) {
        logger.error('could not get/save followingList list: ' + error);
        _this.notifyFailure(_this.$t('profile.alerts.failureFollowingUser'), error);
      });
    },
    emailUser: function emailUser() {
      window.location.href = 'mailto:' + this.user.publicInformation.email;
    },
    notifySuccess: function notifySuccess(title, text) {
      this.$vs.notify({
        color: 'success',
        title: title,
        text: text
      });
    },
    notifyWarning: function notifyWarning(title, text) {
      this.$vs.notify({
        color: 'warning',
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

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(794)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserCard.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(801);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(795)("701e3402", content, true, {});

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(802)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(800),
  /* template */
  __webpack_require__(804),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('card', {
    attrs: {
      "type": "user"
    }
  }, [_c('p', {
    staticClass: "card-text"
  }), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_c('div', {
    staticClass: "block block-one"
  }), _vm._v(" "), _c('div', {
    staticClass: "block block-two"
  }), _vm._v(" "), _c('div', {
    staticClass: "block block-three"
  }), _vm._v(" "), _c('div', {
    staticClass: "block block-four"
  }), _vm._v(" "), _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "avatar-placeholder.png",
      "alt": "..."
    }
  }), _vm._v(" "), _c('h5', {
    staticClass: "title"
  }, [_vm._v("\n      " + _vm._s(_vm.user.person ? _vm.user.person.name() ? _vm.user.person.name() : _vm.user.username : "Nameless Person") + "'s " + _vm._s(_vm.$t('general.profile')) + "\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "description"
  }, [_vm._v("\n      " + _vm._s(_vm.userEmail) + "\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "description"
  }, [_vm._v("\n      " + _vm._s(_vm.userLocation) + "\n    ")])]), _vm._v(" "), _c('p'), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c('p', {
    staticClass: "card-description"
  }, [_vm._v("\n      " + _vm._s(_vm.userNodeInfo) + "\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "card-description"
  }, [_vm._v("\n      " + _vm._s(_vm.userDescription) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "button-container",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [(_vm.signedIn) ? _c('base-button', {
    attrs: {
      "round": ""
    },
    on: {
      "click": _vm.addFollow
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('general.follow')) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('base-button', {
    attrs: {
      "round": ""
    },
    on: {
      "click": _vm.emailUser
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('general.email')) + "\n    ")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Profile_EditProfileForm__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Profile_EditProfileForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Profile_EditProfileForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Profile_UserCard__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Profile_UserCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Profile_UserCard__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EditProfileForm: __WEBPACK_IMPORTED_MODULE_0__Profile_EditProfileForm___default.a,
    UserCard: __WEBPACK_IMPORTED_MODULE_1__Profile_UserCard___default.a
  },
  props: ['user'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);



var logger = __webpack_require__(59);

var PUBLIC_STORAGE_FILE = 'public/publicInformation.json';

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      blockstack: window.blockstack,
      validPublic: false,
      validPrivate: false,
      nameField_Public: '',
      emailField_Public: '',
      publicInformation: {
        name: '',
        email: '',
        description: '',
        location: '',
        nodeInformation: ''
      }
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },

  methods: {
    submitPublic: function submitPublic() {
      var _this = this;

      var blockstack = this.blockstack;

      logger.info('Saving public file', { file: PUBLIC_STORAGE_FILE });
      return blockstack.putFile(PUBLIC_STORAGE_FILE, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.publicInformation), { encrypt: false }).then(function () {
        _this.notifySuccess(_this.$t('editProfile.alerts.savedProfile'), null);
      }).catch(function (error) {
        _this.notifyFailure(_this.$t('editProfile.alerts.failedSavedProfile'), error.message);
      });
    },
    clearPublic: function clearPublic() {
      this.$refs.publicForm.reset();
    },
    fetchData: function fetchData() {
      var _this2 = this;

      var blockstack = this.blockstack;

      blockstack.getFile(PUBLIC_STORAGE_FILE, { decrypt: false }).then(function (publicInformationJson) {
        if (publicInformationJson !== null) {
          var publicInformation = JSON.parse(publicInformationJson || '[]');
          _this2.publicInformation = publicInformation;
        }
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

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(794)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"EditProfile.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(794)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"EditProfileForm.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(810);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(795)("17c708e2", content, true, {});

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(812);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(795)("a75e6068", content, true, {});

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(816)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(808),
  /* template */
  __webpack_require__(821),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('edit-profile-form', {
    attrs: {
      "user": _vm.user
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('card', [_c('h5', {
    staticClass: "title",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t('editProfile.editProfile')))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3 px-md-1"
  }, [_c('base-input', {
    attrs: {
      "label": _vm.$t('general.name'),
      "placeholder": _vm.$t('general.name')
    },
    model: {
      value: (_vm.publicInformation.name),
      callback: function($$v) {
        _vm.$set(_vm.publicInformation, "name", $$v)
      },
      expression: "publicInformation.name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 pl-md-1"
  }, [_c('base-input', {
    attrs: {
      "label": _vm.$t('general.email'),
      "type": "email",
      "placeholder": _vm.$t('general.email')
    },
    model: {
      value: (_vm.publicInformation.email),
      callback: function($$v) {
        _vm.$set(_vm.publicInformation, "email", $$v)
      },
      expression: "publicInformation.email"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 pr-md-1"
  }, [_c('base-input', {
    attrs: {
      "label": _vm.$t('general.location'),
      "placeholder": _vm.$t('general.location')
    },
    model: {
      value: (_vm.publicInformation.location),
      callback: function($$v) {
        _vm.$set(_vm.publicInformation, "location", $$v)
      },
      expression: "publicInformation.location"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('base-input', {
    attrs: {
      "label": _vm.$t('general.nodeInformation'),
      "placeholder": _vm.$t('general.nodeInformation')
    },
    model: {
      value: (_vm.publicInformation.nodeInformation),
      callback: function($$v) {
        _vm.$set(_vm.publicInformation, "nodeInformation", $$v)
      },
      expression: "publicInformation.nodeInformation"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('base-input', [_c('label', [_vm._v(_vm._s(_vm.$t('general.aboutMe')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.publicInformation.description),
      expression: "publicInformation.description"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "4",
      "cols": "80",
      "placeholder": _vm.$t('general.description')
    },
    domProps: {
      "value": (_vm.publicInformation.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.publicInformation, "description", $event.target.value)
      }
    }
  })])], 1)]), _vm._v(" "), _c('base-button', {
    attrs: {
      "slot": "footer",
      "type": "primary",
      "fill": ""
    },
    on: {
      "click": _vm.submitPublic
    },
    slot: "footer"
  }, [_vm._v("\n    " + _vm._s(_vm.$t('general.save')) + "\n  ")])], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=0.b941034684cdbf75bcbe.js.map