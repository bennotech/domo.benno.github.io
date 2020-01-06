<template>
  <div>
    <div id="navbar">
      <div class="benno-container">

        <router-link to="/" class="title">
          Domo
          <span>
            <div class="d-none d-md-block">Smarter</div>
            <div class="d-none d-md-block">Savings</div>
          </span>
        </router-link>


        <div class="pull-right d-none d-lg-inline-block">
          <div class="action-item">
            <router-link to="/" class="action-btn">
              LOGIN
            </router-link>
          </div>
          <div class="action-item">
            <router-link to="/" class="action-btn">
              JOIN DOMO
            </router-link>
          </div>
        </div>

        <div class="d-inline-block d-xl-none pull-right" style="padding-top: 14px;">
          <div class="item dropdown">
            <button class="item-btn" type="button" id="domoLinks" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Links
            </button>
            <div class="dropdown-menu item-box" aria-labelledby="domoLinks">
              <router-link to="/" class="dropdown-item link">Join Domo</router-link>
              <router-link to="/about" class="dropdown-item link">Login</router-link>
              <router-link to="/about" class="dropdown-item link">Domo Account</router-link>
              <router-link to="/about" class="dropdown-item link">Smarter Savings</router-link>
              <router-link to="/about" class="dropdown-item link">Pricing</router-link>
              <router-link to="/about" class="dropdown-item link">Legal</router-link>
            </div>
          </div>
        </div>


        <div class="d-none d-xl-inline-block pull-right" style="padding-top: 14px;">
          <div class="item dropdown">
            <button class="item-btn" type="button" id="domoDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Why Domo Smarter Savings
            </button>
            <div class="dropdown-menu item-box" aria-labelledby="domoDropdown">
              <router-link to="/" class="dropdown-item link">Domo Account</router-link>
              <router-link to="/about" class="dropdown-item link">Smarter Savings</router-link>
              <router-link to="/pricing" class="dropdown-item link">Pricing</router-link>
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
  background-color: #fff;
  z-index: 99;
  height: 90px;
  padding: 0;
}

.title {
  font-family: classico-urw, sans-serif;
  display: inline-block;
  font-size: 56px;
  font-weight: 500;
  padding: 0;
  color: #0e305a;
}

.title span {
  font-family: Gibson, sans-serif;
  font-size: 17px;
  display: inline-block;
  line-height: 1;
  opacity: .75;
  font-weight: 500;
}

.title:hover {
  text-decoration: none;
}

.item {
  font-family: Gibson, sans-serif;
  display: inline-block;
  box-sizing: border-box;
  z-index: 2;
  height: 100%;
  vertical-align: middle;
  font-weight: 500;
  margin: 0 10px;
  min-width: 200px;
}

.item-btn {
  font-family: Gibson, sans-serif;
  position: relative;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0e305a;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 20px 60px 20px 20px;
  background: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
  -webkit-appearance: button;
}
.item-btn::after {
  content: '';
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: absolute;
  right: 25px;
  top: 20px;
}
.item-btn:hover {
  text-decoration: none;
}
.item-box {
  position: absolute !important;
  top: calc(100% + 25px) !important;
  left: -12.5% !important;
  min-width: 125% !important;
  cursor: pointer !important;
  z-index: 1 !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 7px 24px !important;
  padding: 0px !important;
  margin: 0px !important;
  border-radius: 5px !important;
  background: rgb(255, 255, 255) !important;
  transform: none !important;
  border: none !important;
}
.item-box::after {
  content: "";
  position: absolute;
  top: -15px;
  left: calc(50% - 15px);
  width: 0px;
  height: 0px;
  z-index: 10;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgb(255, 255, 255);
}
.item-box .link {
  padding: 25px 30px 25px 25px;
  font-size: 17px;
  font-weight: 400;
}
.item-box .link:hover {
  text-shadow: 0 0 0.5px #000, 0 0 0.5px #000;
}
.item-box .link:active {
  color: inherit;
  background-color: inherit;
  text-decoration: none;
}

.action-item {
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin-left: auto;
  margin-right: 20px;
  vertical-align: top;
  padding-top: 34px;
  float: right;
}
.action-item:hover {
}

.action-btn {
  font-family: Gibson, sans-serif;
  padding: 22px 48px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(7, 17, 72);
  background: rgb(255, 255, 255);
  padding: 22px 48px 20px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
}

.action-btn:hover {
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
}

</style>
