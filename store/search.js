export const state = () => ({
  selectedSuburb: {
    latitude: -28.4793,
    longitude: 24.6727,
  },
})

export const mutations = {
  setSelectedSuburb(state, suburb) {
    state.selectedSuburb = suburb
  },
}
