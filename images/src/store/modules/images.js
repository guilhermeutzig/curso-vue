const state = {
  images: []
}

const getters = {
  allImages: state => state.images;
}

const actions = {
  uploadImages: () => {
    // Subir imagens
  },
  fetchImages: () => {
    // Buscar imagens
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}

export default {
  state, getters, actions, mutations
}
