<template>
  <div>
    <div id="domo-home">
      <div class="benno-container">

        <div class="section" style="padding-top: 200px;">

          <div class="icon-box outlined text-center">
            <span>$</span>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <h2>
                Pricing
              </h2>
              <p>
                We try hard to reduce and simplify our rates and fees.
                </br>
                Please see below for our pricing policies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="domo-body">
      <div class="benno-container">

        <div class="section section-w-sm">
          <div class="row align-items-center justify-content-end">
            <div class="col-12 text-left">
              <h6>
                Individuals
              </h6>
            </div>
            <div class="col-11 text-left">
              <h5>
                <span>Free.  </span>
                Domo is free for individuals that want to own a home and
                improve their home ownership knowledge.
              </h5>
            </div>
          </div>
        </div>
        <div class="section section-w-sm">
          <div class="row align-items-center justify-content-end">
            <div class="col-12 text-left">
              <h6>
                Financial Institutions
              </h6>
            </div>
            <div class="col-11 text-left">
              <h5>
                <span>Contact Domo.  </span>
                Domo makes money by partnering with
                banks, credit unions and financial institutions.
                These partnerships allow us to provide our services
                to individuals free of charge.
              </h5>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'pricing',
  computed: {
  },
  methods: {
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
#domo-home {
  color: #000;
  background-color: #fff;
}
#domo-body {
  color: #000;
  background-color: #f6f8fb;
  padding-bottom: 200px;
}

#domo-spacer {
  color: #fff;
  background-color: #0e305a;
}
h1 {

}

h2 {
  font-family: classico-urw, sans-serif;
  font-size: 62px;
  line-height: 69px;
  font-weight: 400;
  margin-bottom: 25px;
  width: 100%;
  color: #0e305a;
}
p {
  font-family: Gibson, sans-serif;
  font-size: 19px;
  font-weight: 300;
  font-style: normal;
  color: #0e305a;
  opacity: 0.45;
  text-align: center;
  line-height: 26px;
  display: block;
  margin: 0px auto 15px;
  padding: 0px;
}
.col-feat {
  padding: 0px 60px;
}
.col-feat h2 {
  font-family: classico-urw, sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  margin-bottom: 12px;
  width: 100%;
  color: #0e305a;
  text-align: center !important;
}
.col-feat p {
  font-family: Gibson, sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  color: #0e305a;
  opacity: 1;
  text-align: center;
  line-height: 17px;
  display: block;
  margin: 0px auto 15px;
  padding: 0px;
}

.col-feat:not(:last-child)::before {
  position: absolute;
  content: "";
  width: 1px;
  height: 100%;
  right: 0px;
  opacity: 0.2;
  background: #0e305a;
}

.list-features {
  padding: 0 75px 75px;
}
.list-feat {
  width: 50%;
  padding-left: 50px;
  display: inline-flex;
}
.list-feat.long {
  width: 100%;
}
.list-feat i {
  width: 55px;
  height: 55px;
  border: 2px solid #f0b13e;
  border-radius: 50%;
  margin-top: 32.5px;
}
.list-feat span {
width: 55px;
height: 55px;
font-size: 30px;
display: inline-block;
text-align: center;
margin: 32.5px auto 0;
padding-top: 0;
font-weight: 600;
font-style: normal;
}
.list-feat p {
  font-family: Gibson, sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  color: #0e305a;
  opacity: 1;
  text-align: center;
  display: block;
  padding: 0px;
  line-height: 22px;
  text-align: left;
  margin: 50px 0px 50px 50px;
}
.list-feat h5 {
  font-family: Gibson, sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  color: #0e305a;
  opacity: 1;
  text-align: center;
  display: block;
  padding: 0px;
  line-height: 22px;
  text-align: left;
  margin: 50px 0px 50px 50px;
}

h3 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgb(55, 126, 84);
  margin: 25px 0;
  padding: 0px;
}
h3 span {
  font-family: Gibson, sans-serif;
  background-color: rgba(55, 126, 84, .35);
  border-radius: 5px;
  display: block;
  width: fit-content;
  padding: 1px 10px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: rgb(55, 126, 84);
  text-align: center;
}
h4 {
  font-family: Gibson, sans-serif;
  font-size: 22px;
  line-height: 28px;
  margin: 35px 0px 25px;
  font-style: normal;
  font-weight: 300;
  color: #0e305a;
}
h5 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #0e305a;
  margin: auto auto 50px;
  font-size: 24px;
  line-height: 38px;
}
h5 span {
  font-weight: 600;
  margin-right: 4px;
}

h6 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #0e305a;
  margin: auto auto 50px;
  font-size: 34px;
  line-height: 38px;
}


.signup-block {
  text-align: center;
  max-width: 550px;
  margin: auto;
}
.signup-block p {
  max-width: 100%;
}

.card-icon {
width: 48px;
height: 48px;
margin-bottom: 24px;
margin-top: 100px;
}

.domo-btn {

  font-family: Gibson, sans-serif;

  line-height: 1;
  box-sizing: border-box;
  min-width: 200px;
  font-weight: 500;
  z-index: 1;
  position: relative;
  color: rgb(255, 255, 255);
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 14px 14px;
  border-radius: 5px;
  background: rgb(55, 126, 84);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(55, 126, 84);
  border-image: initial;
  margin: 40px auto;
  padding: 22px 20px 20px;
  font-size: 14px;
  text-align: center;

  width: fit-content;
}
.domo-btn:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
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
  width: fit-content;
  margin: auto;
}
.action-btn:hover {
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
}

.spacer-text {
  margin: auto;
  font-size: 28px;
  color: #fff;
}
.domotext-sm {
  font-size: 13px;
  font-weight: 600;
}

.section {
  padding: 100px 0 25px;
}

.section-w-sm {
  padding-left: 75px;
  padding-right: 75px;
}

.section-w-xs {
  padding-left: 150px;
  padding-right: 150px;
}

.section-h-eq {
  padding-top: 75px;
  padding-bottom: 75px;
}

.bottom-bar {
  border-bottom: 1px solid rgba(7, 17, 72, .2);
  padding-bottom: 150px;
}

.icon-box {
  width: 350px;
  margin: auto;
  text-align: center;
  position: absolute;
  left: calc(50% - 150px);
  top: 100px;
}
.icon-box.outlined {
  position: relative;
  border: 8px solid #0e305a;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 0 auto 50px;
  padding: 0;
  display: block;
  left: unset;
  top: unset;
}
.icon-box.outlined span {
font-family: classico-urw, sans-serif;
font-size: 62px;
font-weight: 600;
color: #0e305a;
line-height: 130px;
}

</style>
