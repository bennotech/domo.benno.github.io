<template>
  <div>
    <div id="footer-links">
      <div class="benno-container">
        <div class="footer-w-xs">
          <div class="row">
            <div class="col-12">
              <router-link to="/" class="title">
                Domo
                <span>
                  <div>Smarter</div>
                  <div>Savings</div>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="benno-footer">
      <div class="benno-container">
        <div class="footer-w-xs">
          <div class="row">
            <div class="col-12 text-left">
              <router-link to="/" class="title">
                Domo
                <span>
                  <div>Smarter</div>
                  <div>Savings</div>
                </span>
              </router-link>
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
    secondaryNav: function () {
      let currPath = this.$route.path
      let n = ''
      this.navItems.forEach(p => {
        if ((currPath === '/' + p) || (currPath.includes(p + '/'))) {
          n = p
        }
      })
      if (n.length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      navItems: [ 'mission-control', 'a', 'b', 'c' ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#footer-links {
  font-family: Gibson, sans-serif;
  background-color: #0e305a;
  padding: 150px 0;
}


#benno-footer {
  font-family: Gibson, sans-serif;
  background-color: #00062a;
  padding: 50px 0;
}

.footer-w-xs {
  padding-left: 150px;
  padding-right: 150px;
}

.title {
  font-family: classico-urw, sans-serif;
  display: inline-block;
  font-size: 36px;
  font-weight: 500;
  padding: 0;
  color: #fff;
}

.title span {
  font-family: Gibson, sans-serif;
  font-size: 11px;
  display: inline-block;
  line-height: 1;
  opacity: .75;
  font-weight: 500;
}

.title:hover {
  text-decoration: none;
}

</style>
