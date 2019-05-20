webpackJsonp([1],{

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(813)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(807),
  /* template */
  __webpack_require__(818),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8431c3e8",
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

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blockstack__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blockstack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blockstack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_radiks__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_radiks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_radiks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_models_Listing__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Profile_UserCard__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Profile_UserCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Profile_UserCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_starter_SampleNavbar_vue__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_starter_SampleNavbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__layout_starter_SampleNavbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_starter_SampleFooter_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_starter_SampleFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__layout_starter_SampleFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_starter_Content_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_starter_Content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__layout_starter_Content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_starter_MobileMenu__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_starter_MobileMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__layout_starter_MobileMenu__);



var logger = __webpack_require__(59);



var PUBLIC_STORAGE_FILE = 'public/publicInformation.json';
var LISTING_FILE = 'Listing/listings.json';






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile',
  components: {
    TopNavbar: __WEBPACK_IMPORTED_MODULE_5__layout_starter_SampleNavbar_vue___default.a,
    ContentFooter: __WEBPACK_IMPORTED_MODULE_6__layout_starter_SampleFooter_vue___default.a,
    DashboardContent: __WEBPACK_IMPORTED_MODULE_7__layout_starter_Content_vue___default.a,
    MobileMenu: __WEBPACK_IMPORTED_MODULE_8__layout_starter_MobileMenu___default.a,
    UserCard: __WEBPACK_IMPORTED_MODULE_4__Profile_UserCard___default.a
  },
  props: ['user'],
  data: function data() {
    return {
      blockstack: window.blockstack,
      publicInformation: {
        name: '',
        email: ''
      },
      person: '',
      personInfo: '',
      username: '',
      userListings: '',
      userData: ''
    };
  },
  mounted: function mounted() {
    this.fetchData();
    this.getListings();
    this.getUser();
  },
  created: function created() {
    this.profileId = this.$route.params.id;
  },

  computed: {
    signedIn: function signedIn() {
      return this.blockstack.isUserSignedIn();
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.$vs.loading();
      var blockstack = this.blockstack;
      var username = this.profileId;

      logger.info('looking up profile', { username: username });
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_blockstack__["lookupProfile"])(username).then(function (profile) {
        logger.info('found profile', { username: username });
        _this.person = new __WEBPACK_IMPORTED_MODULE_1_blockstack__["Person"](profile);
        _this.username = username;
      }).catch(function (error) {
        logger.error('could not resolve profile: ' + error);
        _this.notifyFailure(_this.$t('profile.alerts.userNotFound'));
        _this.$vs.loading.close();
      });

      var options = { username: username, decrypt: false, verify: false };
      blockstack.getFile(PUBLIC_STORAGE_FILE, options).then(function (publicInformationJson) {
        logger.info('grabbed public information file for user', { username: username });
        _this.$vs.loading.close();
        if (publicInformationJson !== null) {
          var publicInformation = JSON.parse(publicInformationJson || '[]');
          _this.publicInformation = publicInformation;
          _this.personInfo = {
            username: _this.username,
            person: _this.person,
            publicInformation: _this.publicInformation
          };
        }
      }).catch(function (publicInfoError) {
        console.error('could not resolve public info: ' + publicInfoError);
        _this.$vs.loading.close();
      });
    },
    getListings: function getListings() {
      var _this2 = this;

      this.$vs.loading();
      var username = this.profileId;
      var options = { username: username, decrypt: false, verify: false };
      this.blockstack.getFile(LISTING_FILE, options).then(function (listingsJson) {
        var userListings = JSON.parse(listingsJson || '');
        if (userListings) {
          logger.info('Grabbed user listings');
          _this2.userListings = userListings;
          _this2.$vs.loading.close();
        }
      }).catch(function () {
        logger.info('Could not get user listings');
        _this2.$vs.loading.close();
      });
    },
    deleteListing: function deleteListing(listing) {
      var _this3 = this;

      var listingToDelete = listing;
      var index = this.userListings.indexOf(listingToDelete);
      confirm(this.$t('profile.deleteListing')) && this.userListings.splice(index, 1) && this.updateListings();

      __WEBPACK_IMPORTED_MODULE_3__assets_models_Listing__["a" /* default */].findById(listingToDelete._id).then(function (radiksListing) {
        radiksListing.destroy().then(function () {
          _this3.loadListings();
        });
      }).catch(function (error) {
        logger.info('failed to delete listing from server: ' + error);
        _this3.notifyFailure(_this3.$t('profile.failureDeleteListing'), null);
      });
    },
    updateListings: function updateListings() {
      var _this4 = this;

      this.blockstack.putFile(LISTING_FILE, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.userListings), { encrypt: false }).then(function () {
        _this4.notifySuccess(_this4.$t('general.removed'), _this4.$t('profile.alerts.removedListing'));
      }).catch(function (error) {
        _this4.notifyFailure(_this4.$t('profile.alerts.failureDeleteListingUser'), error);
      });
    },
    getUser: function getUser() {
      if (this.blockstack.isUserSignedIn()) {
        this.radiksUser = __WEBPACK_IMPORTED_MODULE_2_radiks__["User"].currentUser();
        this.userData = this.blockstack.loadUserData();
      }
    },
    canDelete: function canDelete(createdBy) {
      return this.userData === '' ? false : this.userData.username === createdBy;
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

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(794)(true);
// imports


// module
exports.push([module.i, ".app-margin[data-v-8431c3e8]{margin:10px}.app-left-margin[data-v-8431c3e8]{margin-left:10px}.app-top-minus-two-margin[data-v-8431c3e8]{margin-top:-2px}", "", {"version":3,"sources":["/Users/anthonyronning/Dev/Repos/Personal/BoltathonProject/src/pages/Profile.vue"],"names":[],"mappings":"AACA,6BACE,WAAa,CACd,AACD,kCACE,gBAAkB,CACnB,AACD,2CACE,eAAiB,CAClB","file":"Profile.vue","sourcesContent":["\n.app-margin[data-v-8431c3e8] {\n  margin: 10px;\n}\n.app-left-margin[data-v-8431c3e8] {\n  margin-left: 10px;\n}\n.app-top-minus-two-margin[data-v-8431c3e8] {\n  margin-top: -2px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(809);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(795)("8487c9e2", content, true, {});

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('side-bar', {
    attrs: {
      "title": "Local Lightning"
    }
  }, [_c('template', {
    slot: "links"
  }, [_c('sidebar-link', {
    attrs: {
      "to": "/home",
      "name": _vm.$t('sidebar.listings'),
      "icon": "tim-icons icon-paper"
    }
  }), _vm._v(" "), (_vm.signedIn) ? _c('sidebar-link', {
    attrs: {
      "to": "/following",
      "name": _vm.$t('sidebar.following'),
      "icon": "tim-icons icon-single-02"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.signedIn) ? _c('sidebar-link', {
    attrs: {
      "to": "/settings",
      "name": _vm.$t('sidebar.settings'),
      "icon": "tim-icons icon-settings"
    }
  }) : _vm._e()], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "main-panel"
  }, [_c('top-navbar'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('user-card', {
    attrs: {
      "user": _vm.personInfo
    }
  }), _vm._v(" "), _c('card', {
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
  }, [_c('div', {
    staticClass: "row app-margin"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('sidebar.listings')) + "\n          ")])]), _vm._v(" "), _c('base-table', {
    attrs: {
      "data": _vm.userListings,
      "columns": _vm.columns
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(ref) {
        var row = ref.row;

        return [_c('td', [_vm._v(_vm._s(row.attrs.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(row.attrs.city))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(row.attrs.state))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(row.attrs.country))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(row.attrs.capacity))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(row.attrs.currency))]), _vm._v(" "), (_vm.canDelete(row.attrs.createdBy)) ? _c('td', {
          staticClass: "td-actions text-right"
        }, [_c('base-button', {
          attrs: {
            "type": "danger",
            "size": "sm",
            "icon": ""
          },
          on: {
            "click": function($event) {
              return _vm.deleteListing(row)
            }
          }
        }, [_c('i', {
          staticClass: "tim-icons icon-simple-remove"
        })])], 1) : _vm._e()]
      }
    }])
  }, [_c('template', {
    slot: "columns"
  }, [_c('th', [_vm._v(_vm._s(_vm.$t('general.name')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('general.city')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('general.state')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('general.country')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('general.capacity')))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t('general.currency')))])])], 2)], 1)], 1), _vm._v(" "), _c('content-footer')], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=1.733bbb82af720c734361.js.map