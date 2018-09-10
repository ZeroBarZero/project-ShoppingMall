<template>
<div id="register">
  <section class="hero is-success is-fullheight">
      <div class="hero-body">
          <div class="container has-text-centered">
              <div class="column is-4 is-offset-4">
                  <h3 class="title has-text-grey">Sign up</h3>
                  <p class="subtitle has-text-grey">Simply regist!</p>
                  <div class="box">
                      <figure class="avatar">
                          <img src="https://placehold.it/128x128">
                      </figure>
                      <form>
                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                              </div>
                          </div>

                          <div class="field">
                              <div class="control">
                                  <input id="pw" class="input is-large" type="password" placeholder="Your Password" onchange="issame (this)">
                              </div>
                          </div>

                          <div class="field">
                              <div class="control">
                                  <input id="pwcheck" class="input is-large" type="password" placeholder="Check Password" onchange="issame (this)">
                              </div>
                              <span id="same"></span>
                          </div>
                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="text" placeholder="name" autofocus="">
                              </div>
                          </div>
                          <div class="field">
                              <div class="control">
                                  <input class="input is" type="text" placeholder="전화번호를 입력해주세요. (ex. 01012345678)" autofocus="">
                              </div>
                          </div>
                          <div class="field">
                            <div class="control">
                              <input class="input is" type="text" id="sample6_postcode" placeholder="우편번호">
                              <input class="button is-fullwidth" type="button" v-on:click="sample6_execDaumPostcode" value="우편번호 찾기"><br>
                            </div>
                          </div>

                          <div class="field">
                            <div class="control">
                              <input class="input is" type="text" id="sample6_address" placeholder="주소">
                              <input class="input is" type="text" id="sample6_address2" placeholder="상세주소">
                            </div>
                          </div>
                          <button class="button is-block is-info is-large is-fullwidth">Sign up</button>
                      </form>
                  </div><p class="has-text-grey">
                      <router-link to="/login">Already Member?</router-link>
                  </p>
              </div>
          </div>
      </div>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      result: ''
    }
  },
  methods: {
    /* eslint-disable*/
    sample6_execDaumPostcode: function () {
      new daum.Postcode({
        oncomplete: function(data) {
          var fullAddr = ''
          var extraAddr = ''
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            fullAddr = data.roadAddress
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
            fullAddr = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
          if (data.userSelectedType === 'R') {
            //법정동명이 있을 경우 추가한다.
            if (data.bname !== '') {
              extraAddr += data.bname
            }
            // 건물명이 있을 경우 추가한다.
            if (data.buildingName !== '') {
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName)
            }
            // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
            fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '')
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample6_postcode').value = data.zonecode
          document.getElementById('sample6_address').value = fullAddr

          // 커서를 상세주소 필드로 이동한다.
          document.getElementById('sample6_address2').focus()
        }
      }).open()
    }
  }
}
</script>
<style>

#register {
  font-family: 'Open Sans', serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
#register .box {
  margin-top: 5rem;
}
#register .avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
#register .avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
#register input {
  font-weight: 300;
}
#register span {
  padding-top: 1rem;
}

</style>
