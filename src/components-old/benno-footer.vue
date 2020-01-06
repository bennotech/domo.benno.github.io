<template>
  <div>
    <div id="benno-footer">
      <div class="benno-container">
        <div class="benno-itembox">
          <div class="row">
            <div class="col-12 text-right">
              <router-link to="/">© 2019 Domo Capital</router-link>
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

#benno-footer {
  font-family: Arial, sans-serif;
  background-color: #000;
}

.benno-itembox {
  padding: 10px 0 20px;
}

.benno-itembox a {
  font-size: 15px;
  color: #fff;
  line-height: 1.35;
  letter-spacing: .1px;
  margin-right: 20px;
}
.benno-itembox a:hover {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

.footer-title {
  font-family: brandon-grotesque, sans-serif;
  max-width: fit-content;
  padding: 27px 40px;
  margin-left: auto;
}
.footer-title .spec {
  color: #f9f9f9;
  font-weight: 600;
  height: 100%;
  display: flex;
  font-size: 14px;
  letter-spacing: .85px;
  border: 2px solid #f9f9f9;
  padding: 10px 14px;
}
.footer-title .spec:hover {
  cursor: default;
}
.red {
  border-color: #ed1c24 !important;
  color: #ed1c24 !important;
}
.red:hover {
  text-decoration: none;
}
.blue {
  border-color: #0077cc !important;
  color: #0077cc !important;
}
.blue:hover {
  text-decoration: none;
}
</style>
