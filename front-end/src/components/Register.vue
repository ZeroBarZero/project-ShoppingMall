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
                      <div>
                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="email" v-model="email" placeholder="Your Email" autofocus="">
                              </div>
                          </div>
                          <div class="field">
                              <div class="control">
                                  <input id="pw" class="input is-large" type="password" v-model="password" placeholder="Your Password">
                              </div>
                          </div>
                          <div class="field">
                              <div class="control">
                                  <input id="pwcheck" class="input is-large" type="password" v-model="pwcheck" placeholder="Check Password">
                              </div>
                          </div>
                          <div class="field">
                              <div class="control">
                                  <input class="input is-large" type="text" v-model="name" placeholder="name" autofocus="">
                              </div>
                          </div>
                          <div class="field">
                              <div class="control">
                                  <input class="input is" type="text" v-model="phoneNumber" placeholder="전화번호를 입력해주세요. (ex. 01012345678)" autofocus="">
                              </div>
                          </div>
                              <input class="input is" type="text" id="sample6_postcode" placeholder="우편번호">
                              <input class="button is-block is-danger is-fullwidth" type="button" v-on:click="sample6_execDaumPostcode" value="우편번호 찾기"><br>
                              <input class="input is" type="text" id="sample6_address" placeholder="주소">
                              <input class="input is" type="text" id="sample6_address2" placeholder="상세주소">
                          <button class="button is-block is-info is-large is-fullwidth" v-on:click="sendForm">Sign up</button>
                      </div>
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
      email: '',
      password: '',
      pwcheck: '',
      name: '',
      phoneNumber: '',
      postcode: '',
      addr1: '',
      addr2: ''
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

          document.getElementById('sample6_address2').focus();
        }
      }).open()
    },
    sendForm: function () {
      this.postcode = document.getElementById('sample6_postcode').value
      this.addr1 = document.getElementById('sample6_address').value
      this.addr2 = document.getElementById('sample6_address2').value

      var warnString = '다음 항목을 확인해주세요.\n\n'
      var err = false

      if (this.email==='') {
        warnString += '이메일 비어있음\n'
          err = true
      }
      else {
        var emailVal = this.email
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        if (!(emailVal.match(regExp) != null)) {
          warnString += '이메일 형식 올바르지 않음\n'
          err = true
        }
      }
      if (this.password==='') {
        warnString += '비밀번호 비어있음\n'
        err = true
      }
      if (this.pwcheck === '') {
        warnString += '비밀번호 확인 비어있음\n'
        err = true
      }
      if (this.name==='') {
        warnString += '이름 비어있음\n'
        err = true
      }
      if (this.phoneNumber === '') {
        warnString += '전화번호 비어있음\n'
        err = true
      }
      if (this.password!==this.pwcheck) {
        warnString += '비밀번호와 비밀번호 확인이 일치하지 않음\n'
        err = true
      }
      if (this.postcode === '') {
        warnString += '우편번호가 비어있음\n'
        err = true
      }
      if (this.addr1 === '' || this.addr2 === ''){
        warnString += '주소가 비어있음'
        err = true
      }


      if (err) {
        alert(warnString)
      }
      else {
        var addr = this.addr1 + this.addr2
        var formData = {
          email: this.email,
          password: this.password,
          name: this.name,
          phoneNumber: this.phoneNumber,
          postcode: this.postcode,
          address: addr
        }
        this.$http.post('/api/user/signup', formData).then(response => {
          alert(response)
        })
      }
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
