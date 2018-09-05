<template>
  <div class="container">
    <div class="profile-items">
      <div class="columns is-multiline is-mobile">

        <template  v-for="(n, index) in 10">
          <div v-bind:key="index" class="column is-one-third">
            <div class="image is-1by1" @click="openModal(item)">
              <img src="https://via.placeholder.com/256x256"/>
            </div>
          </div>
        </template>
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
                  Some {{ modalData.type }}
                </h1>
                <h2 class="subtitle">
                  <small>
                    Curator: {{ modalData.owner.name }}
                    <br />
                    ImageId: {{ modalData.itemId }}
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
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'profileItems',
  props: ['person'],
  data() {
    return {
      isModalVisible: false,
      selectedItem: null,
    };
  },
  computed: {
    ...mapGetters([
      'routeParams',
      'routeQueryParams',
      'items',
      'itemOwner',
    ]),
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
    this.fetchProfile('me');
    this.fetchProfile(this.routeParams.profileId);
    this.fetchItems();
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
</style>
