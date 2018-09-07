<template>
  <div>

  <div class="controls container">
      <button type="button" class="control" data-filter="all">All</button>
      <button type="button" class="control" data-filter=".tour">#투어</button>
      <button type="button" class="control" data-filter=".design">#디자인</button>
      <button type="button" class="control" data-filter=".map">#지도</button>
      <button type="button" class="control" data-filter=".edu">#교육</button>
      <button type="button" class="control" data-filter=".pre">#강의</button>
      <button type="button" class="control" data-filter=".local">#지역</button>
      <button type="button" class="control" data-filter=".city">#도시재생</button>
      <button type="button" class="control" data-filter=".fest">#축제</button>
      <button type="button" class="control" data-filter=".evt">#행사</button>
  </div>
  <div class="container">
    <div class="profile-items">
      <div class="columns is-multiline is-mobile">

        <template  v-for="(n, index) in 3">
          <div v-bind:key="index" class="column is-one-third mix tour">
            <div class="image is-1by1" @click="openModal(item)">
              <img src="https://via.placeholder.com/256x256"/>
            </div>
          </div>
        </template>

        <template  v-for="(n, index) in 3">
          <div v-bind:key="index" class="column is-one-third mix">
            <div class="image is-1by1" @click="openModal(item)">
              <img src="https://via.placeholder.com/256x256"/>
            </div>
          </div>
        </template>

        <div class="gap"></div>
        <div class="gap"></div>
        <div class="gap"></div>
      </div>
      <div class="modal" :class="modalClass">
        <div class="modal-background" @click="closeModal()"></div>
        <div class="modal-content">
          <div class="box">
            <div class="columns">
              <div class="column">
                <div class="image is-1by1">
                  <img :src="modalData.content" />
                </div>
              </div>
              <div class="column">
                <h1 class="title">
                  Project title {{ modalData.type }}
                </h1>
                <h2 class="subtitle">
                  <small>
                    기간: {{ modalData.owner.name }}
                    <br />
                    지역: {{ modalData.itemId }}
                    <br />
                    협력기관: {{ modalData.itemId }}
                    <br />
                    내용및 관련 url: {{ modalData.itemId }}
                  </small>
                </h2>
                <p>
                  <small>
                    {{ modalData.caption }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="modal-close" @click="closeModal()"></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import mixitup from 'mixitup';
export default {
  name: 'profileItems',
  data() {
    return {
      isModalVisible: false,
      selectedItem: null,
    };
  },
  computed: {
    modalClass() {
      return {
        'is-active': this.isModalVisible,
      };
    },
    itemList() {
      return this.items;
    },
    modalData() {
      const selectedItem = this.selectedItem || {};
      const user = this.itemOwner || {};
      return {
        ...selectedItem,
        owner: user,
      };
    },
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedItem = null;
    }
  },
  created() {
  },
  mounted() {
    var containerEl = document.querySelector('.container');
    var mixer = mixitup(containerEl);
  }
};
</script>

<style lang="scss">
.sui-contribute-new-item {
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-content .content.max-lines--one-plus-three {
  // 6em is based on the default line-height of 1.5em
  max-height: 6em;
  overflow: hidden;
  position: relative;
}

// This will fade out the last line to 'white' (the assumed background colour)
.media-content .content.max-lines--one-plus-three::before {
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%);
  content: '\00200c';
  display: block;
  position: absolute;
  right: 0;
  top: 4.5em;
  width: 30%;
}

.controls {
    margin: auto;
    padding: 1rem;
    background: #333;
    font-size: 2rem;
}

.control {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 2.7rem;
    background: #444;
    cursor: pointer;
    font-size: 10px;
    color: white;
    transition: background 150ms;
    text-decoration: none;
    text-align: center;
  }

.control:hover {
    background: #3f3f3f;
}
/*.control[data-filter]:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    border: 2px solid currentColor;
    border-radius: 2px;
    background: currentColor;
    transition: background-color 150ms, border-color 150ms;
}*/
.mixitup-control-active {
    background: #393939;
}

.mixitup-control-active[data-filter]:after {
    background: transparent;
}

.control:first-of-type {
    border-radius: 3px 0 0 3px;
}

.control:last-of-type {
    border-radius: 0 3px 3px 0;
}

.control[data-filter] + .control[data-sort] {
    margin-left: .75rem;
}


/* Container
---------------------------------------------------------------------- */
/*
.container {
    padding: 1rem;
    text-align: justify;
    font-size: 0.1px;
}

.container:after {
    content: '';
    display: inline-block;
    width: 100%;
}*/

/* Target Elements
---------------------------------------------------------------------- */
.profile-items{
  padding-top : 1em;
}

.gap {
    display: inline-block;
    vertical-align: top;
}
/*
.mix {
    background: #fff;
    border-top: .5rem solid currentColor;
    border-radius: 2px;
    margin-bottom: 1rem;
    position: relative;
}

.mix:before {
    content: '';
    display: inline-block;
    padding-top: 56.25%;
}
*/
.mix.green {
    color: #91e6c7;
}

.mix.pink {
    color: #d595aa;
}

.mix.blue {
    color: #5ecdde;
}
/* 3 Columns */

@media screen and (min-width: 541px) {
    .mix,
    .gap {
        width: calc(100%/3 - (((3 - 1) * 1rem) / 3));
    }
}
</style>
