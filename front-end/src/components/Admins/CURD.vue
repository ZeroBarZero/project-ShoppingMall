<template>
  <div>
    <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
    <p>Value: {{ text1 }}</p>
    <b-form-input v-model="text2"
                  type="text"
                  placeholder="Enter your password"></b-form-input>
    <p>Value: {{ text2 }}</p>
    <b-form-file v-model="files" :state="Boolean(files)" multiple placeholder="Choose a file..."></b-form-file>
    <b-button variant="warning" @click="test">실험중</b-button>
    <b-button variant="danger" @click="test2">실험중2</b-button>
    <b-button variant="success" @click="test3">실험중3</b-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text1: '',
      text2: '',
      files: []
    }
  },
  methods: {
    test () {
      let formData = new FormData()
      formData.append('name', 'qwewqewqe')
      formData.append('category', 'dasdad')
      formData.append('price', 'zzaxcasc')
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i]
        formData.append('files[' + i + ']', file)
      }
      this.$http.post('/api/mod/product', formData, {headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((response) => {
      })
    },
    test2 () {
      let formData = new FormData()
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i]
        formData.append('files[' + i + ']', file)
      }
      this.$http.put('/api/mod/product/11/u/img', formData, {headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((response) => {
      })
    },
    test3 () {
      this.$http.delete('/api/mod/product/11').then((response) => {
      })
    }
  }
}
</script>
