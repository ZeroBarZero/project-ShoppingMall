<template>
  <b-container>
    <b-table striped hover :items="items">
      <template slot="name" slot-scope="data">
        <b-button :variant="primary">
          {{data.value}}
        </b-button>
      </template>
      <template slot="category" slot-scope="data">
        <b-button :variant="primary">
          {{data.value}}
        </b-button>
      </template>
      <template slot="price" slot-scope="data">
        <b-button :variant="primary">
          {{data.value}}
        </b-button>
      </template>
      <template slot="stock" slot-scope="data">
        <b-button :variant="primary">
          {{data.value}}
        </b-button>
      </template>
    </b-table>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      fields: ['id', 'name', 'category', 'price', 'stock', 'img', 'created', 'updated'],
      items: [],
      cvalue: '',
      show: true
    }
  },
  methods: {
    getProduct () {
      this.$http.get('/api/mod/product').then((response) => {
        this.items = response.data
      })
    }
  },
  created: function () {
    this.getProduct()
  }
}
</script>
