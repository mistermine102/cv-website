import { createStore } from 'vuex'

const popupGallery = {
  namespaced: true,
  state() {
    return {
      isShown: false,
      initial: 0,
      images: [],
    }
  },
  mutations: {
    set_is_shown(state, payload) {
      state.isShown = payload
    },
    set_images(state, payload) {
      state.images = payload
    },
    set_initial(state, payload) {
      state.initial = payload
    },
  },
  actions: {
    toggle(ctx, payload) {
      //clear images
      ctx.commit('set_images', [])

      if (payload) {
        const { images, initial } = payload

        if (images) {
          ctx.commit('set_images', images)
        }

        //initial might be 0, can't be interpreted as false
        if (initial || initial === 0) {
          ctx.commit('set_initial', initial)
        }
      }

      ctx.commit('set_is_shown', !ctx.state.isShown)
    },
  },
}

const store = createStore({
  modules: {
    popupGallery,
  },
  actions: {
    toggleBodyScroll() {
      // document.body.style.overflowY = document.body.style.overflowY === '' ? 'hidden' : ''
    },
  },
})

export default store
