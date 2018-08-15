<template>
<div id="projectlist">
  <div id="main">
<div>
  <div id="root_isotope" class="isoDefault">
    <div v-isotope-for="element in list" :options='option' @click="selected=element">
      {{element.name}}
      <br> {{element.id}}
    </div>
  </div>
</div>

<div id="change">
  <button @click="add">Add</button>
  <button @click="replace">Replace</button>
</div>
<div id="filter">
  <div>
    <input type="text" v-model="filterText" placeholder="no filter">
    <button :class="[filterOption==='filterByText' ? 'is-checked' : '']" @click="filter('filterByText')">Filter</button>
  </div>
  <button :class="[filterOption==='isEven' ? 'is-checked' : '']" @click="filter('isEven')">Filter Even</button>
  <button :class="[filterOption==='isOdd' ? 'is-checked' : '']" @click="filter('isOdd')">Filter Odd</button>
  <button @click="filter()">Unfilter</button>
</div>
<div id="sort">
  <button :class="[sortOption==='name' ? 'is-checked' : '']" @click="sort('name')">Sort by name</button>
  <button :class="[sortOption==='id' ? 'is-checked' : '']" @click="sort('id')">Sort by id</button>
  <button @click="shuttle">Shuttle</button>
</div>
<div>
  <div v-if="selected" class="item">
    <input type="text" name="" v-model="selected.name">
    <br>
    <input type="text" name="" v-model="selected.id">
  </div>
</div>
</div>

</div>

</template>

<script>
var count = 0;

var vm = new Vue({
  el: "#main",
  data: {
    list: [{
      name: "John",
      id: 25
    }, {
      name: "Joao",
      id: 7
    }, {
      name: "Albert",
      id: 100
    }, {
      name: "Jean",
      id: 100
    }],
    selected: null,
    sortOption: null,
    filterOption: null,
    filterText: "",
    option: {
      getSortData: {
        id: "id",
        name: function(itemElem) {
          return itemElem.name.toLowerCase();
        }
      },
      getFilterData: {
        isEven: function(itemElem) {
          return itemElem.id % 2 === 0;
        },
        isOdd: function(itemElem) {
          return itemElem.id % 2 !== 0;
        },
        filterByText: function(itemElem) {
          return itemElem.name.toLowerCase().includes(this.filterText.toLowerCase());
        }
      }
    }
  },
  methods: {
    add: function() {
      this.list.push({
        name: 'Juan',
        id: count++
      });
    },
    replace: function() {
      this.list = [{
        name: 'Edgard',
        id: count++
      }, {
        name: 'James',
        id: count++
      }]
    },
    sort: function(key) {
      this.isotopeSort(key);
      this.sortOption = key;
    },
    filter: function(key) {
      if (this.filterOption == key)
        key = null;
      this.isotopeFilter(key);
      this.filterOption = key;
    },
    shuttle: function() {
      this.isotopeShuttle();
      this.sortOption = null;
    }
  }
});
</script>

<style>
.item {
  background-color: #eee;
  padding: 10px;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: monospace;
  color: #333;
}

.is-checked {
  background-color: #28F;
}

.isoDefault {
  min-height: 210px;
}
</style>
