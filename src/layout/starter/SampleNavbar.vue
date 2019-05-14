<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button" class="navbar-toggler"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
            <div class="search-bar input-group" @click="searchModalVisible = true">
              <!-- <input type="text" class="form-control" placeholder="Search...">
              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> -->
              <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
                <i class="tim-icons icon-zoom-split"></i>
              </button>
              <!-- You can choose types of search input -->
            </div>
            <modal :show.sync="searchModalVisible"
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
              <input
                slot="header"
                v-model="search"
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                :placeholder="$t('general.search')"
                v-on:keyup.enter="searchUser">
            </modal>

            <!-- settings dropdown -->
            <base-dropdown v-if="signedIn"
                           tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a"
                           class="nav-item"
                           menu-classes="dropdown-navbar">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                  <img src="avatar-placeholder.png">
                </div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
              </a>
              <li class="nav-link">
                <a @click="goToProfile" href="#" class="nav-item dropdown-item">{{ $t('general.profile') }}</a>
              </li>
              <li class="nav-link">
                <router-link :to="{name: 'Settings'}">
                  <a href="#" class="nav-item dropdown-item">{{ $t('general.settings') }}</a>
                </router-link>
              </li>
              <div class="dropdown-divider"></div>
              <li class="nav-link">
                <a @click="signOut" href="#" class="nav-item dropdown-item">{{ $t('general.logOut') }}</a>
              </li>
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>

      <!-- sign in button -->
      <button v-if="!signedIn" class="btn btn-default" @click.prevent="radiksSignIn">{{ $t('general.signIn') }}</button>

      <!-- locale changer -->
      <div class="locale-changer">
        <vs-select
          v-model="locale"
          width="55px"
        >
          <vs-select-item :key="`Lang${i}`"
                          :value="lang"
                          :text="lang"
                          v-for="(lang, i) in langs" />
        </vs-select>
      </div>
    </div>
  </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions'
  import Modal from '@/components/Modal'
  const logger = require('heroku-logger')
  import { getConfig } from 'radiks'

export default {
    components: {
      CollapseTransition,
      Modal
    },
    computed: {
      routeName () {
        const { name } = this.$route
        return this.capitalizeFirstLetter(name)
      },
      isRTL () {
        return this.$rtl.isRTL
      },
      signedIn () {
        return this.blockstack.isUserSignedIn()
      }
    },
    data: () => ({
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      blockstack: window.blockstack,
      userSearch: '',
      activeItem: 5,
      search: '',
      userSession: null,
      langs: ['en', 'es', 'fr'],
      locale: 'en'
    }),
    watch: {
      locale: function (newLang, oldLang) {
        console.log('language changed from ' + oldLang)
        this.$i18n.locale = newLang
        localStorage.setItem('locale', newLang)
      }
    },
    mounted () {
      this.loadLocale()
    },
    methods: {
      loadUserData () {
        const { userSession } = getConfig()
        this.userSession = userSession
        // console.log('user is signed in: ' + this.blockstack.isUserSignedIn())
      },
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      toggleMenu () {
        this.showMenu = !this.showMenu
      },
      searchUser () {
        logger.info('searching for user: ' + this.search)
        this.$router.push({ path: `/profile/${this.search}/` })
      },
      goToProfile () {
        var userData = this.blockstack.loadUserData()
        var username = userData.username
        logger.info('searching for user: ' + this.search)
        this.$router.push({ path: `/profile/${username}/` })
      },
      radiksSignIn () {
        const { userSession } = getConfig()
        userSession.redirectToSignIn()
      },
      signOut () {
        this.blockstack.signUserOut(window.location.href)
        const { userSession } = getConfig()
        userSession.signUserOut()
        this.$router.push('/home?signedOut=True')
        // this.user = null
        // this.radiksUser = null
      },
      loadLocale () {
        const loadedLocale = localStorage.getItem('locale')
        if (loadedLocale !== null) {
          console.log('loading with locale: ' + loadedLocale)
          this.$i18n.locale = loadedLocale
          this.locale = loadedLocale
        }
      }
    }
  }
</script>
<style>
</style>
