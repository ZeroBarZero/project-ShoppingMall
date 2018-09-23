<template>
  <form>
    <input v-model="text1"
                  type="text"
                  placeholder="Enter your name"/>
    <p>Value: {{ text1 }}</p>
    <input v-model="text2"
                  type="text"
                  placeholder="Enter your password"/>
    <p>Value: {{ text2 }}</p>
    <input type="file" ref="files" v-on:change="handleFilesUpload()" multiple placeholder="Choose a file..."/>
    <button variant="warning" @click="test">실험중</button>
    <button variant="danger" @click="test2">실험중2</button>
    <button variant="success" @click="test3">실험중3</button>

    <div class="large-12 medium-12 small-12 cell">
      <div v-for="(file, key) in files" v-bind:key="file.name" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>
    </div>
  </form>
</template>
<script>
/* eslint-disable */
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
    },
    handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;
        /*
          Adds the uploaded file to the files array
        */
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
    },
    removeFile( key ){
        this.files.splice( key, 1 );
    }
  }
}
</script>
