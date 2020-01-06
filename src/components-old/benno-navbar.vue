<template>
  <div>
    <div id="navbar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-6">
            <div class="domo-navlinks">
              <router-link to="/" class="link">
                <img class="icon-box" src="../assets/domo-logo.png" />
              </router-link>
              <div class="link" @click="showDropdown = !showDropdown">
                Solutions
              </div>
              <router-link to="/" class="link">
                Resources
              </router-link>
            </div>
          </div>
          <div class="col-6 text-right">
            <div class="domo-navlinks">
              <router-link to="/" class="link">
                Sign in
              </router-link>
              <router-link to="/" class="domo-btn" :class="{'solid': scrollPosition < 100, solid: scrollPosition > 100}">
                SEE IF YOU QUALIFY
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="spacer">
    </div>
    <div id="alert" v-if="showAlert">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <router-link to="/">
              <div class="domo-pill"><p>NEW</p></div>
              <div class="alert-text">DOMO GUIDES
                <span>
                  It's time to start saving
                  <font-awesome-icon icon="long-arrow-alt-right" class="icon-arrow" @click="showAlert = false" />
                </span>
              </div>
            </router-link>
            <div class="icon-close" @click="showAlert = false">
              <font-awesome-icon icon="times" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="spacer-secondary" v-if="showAlert">
    </div>

    <div id="dropdown" v-show="showDropdown">
      <div class="dropdown-container">
        <div class="row">
          <div class="col-8">
            <div class="row">
              <div class="col-12">
                <h1>Domo Home Savings</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <h1>For College Graduates</h1>
              </div>
              <div class="col-6">
                <h1>For College Students & Under</h1>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-12">
                <h1>Domo Partners</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'benno-navbarnew',
  computed: {
  },
  data () {
    return {
      showAlert: false,
      showDropdown: false,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navbar {
  position: fixed;
  width: 100%;
  background-color: #000;
  z-index: 99;
  height: 100px;
  padding: 25px 30px;
}
.icon-box {
  height: 50px;
  margin-bottom: 5px;
}
#spacer {
  height: 100px;
}

#alert {
  position: fixed;
  width: 100%;
  z-index: 99;
  background-color: #595959;
  height: 46px;
  padding: 10px 0;
}
#spacer-secondary {
  height: 35px;
}
#dropdown {
  width: 100%;
  background-color: #000;
  padding: 60px 205px 120px;
  position: fixed;
  z-index: 99;
}
.dropdown-container {
}
.dropdown-container h1 {
  color: #fff;
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  white-space: nowrap;
  margin: 0px 40px 40px 0;
  padding: 0;
}
.domo-navlinks {
  display: inline-block;
  width: fit-content;
}

.domo-navlinks .link {
  height: 100%;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
  white-space: nowrap;
  padding-right: 40px;
}

.domo-navlinks .link:hover {
  text-decoration: none;
  cursor: pointer;
  color: #03e7b0;
}

.domo-navlinks .link:first-child {
  width: 160px;
}
.domo-btn {

  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: .75px;
  text-transform: uppercase;

  border: 2px solid #03e7b0;
  border-radius: 1px;
  background-color: transparent;
  color: #fff;
  padding: 18px 24px;
}
.domo-btn:hover {
  background-color: #03e7b0;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.domo-btn.solid {
  background-color: #03e7b0;
  color: #fff;
}
.domo-btn.solid:hover {
  text-decoration: underline;
  cursor: pointer;
}

.domo-pill {
  width: 52px;
  height: 22px;
  background-color: #03e7b0;
  margin: 0 auto;
  border-radius: 12px;
  color: #fff;
  display: inline-block;
}
.domo-pill p {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 8px 1px 9px;
  margin: auto;
}
.alert-text {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: .75px;
  text-transform: uppercase;
  display: inline-block;
  color: #fff;
  margin-left: 17px;
}
.alert-text span {
  text-transform: none;
  font-family: Gibson, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 2px;
  color: #9FA2A6;
}

.alert-text .icon-arrow {
  color: #03e7b0;
  font-size: 17px;
  float: right;
}
.icon-close {
  color: #9FA2A6 !important;
  float: right;
  padding-top: 3px;
}
.icon-close:hover {
  cursor: pointer;
}
</style>
