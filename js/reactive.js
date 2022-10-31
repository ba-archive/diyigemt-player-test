(() => {
  const { reactive } = Vue
  const specialItem = reactive({
    loading: true,
    titleOpacity: 0,
    title: "",
    placeOpacity: 0,
    place: "",
    chatDialogVisible: false,
    chat: {
      studentName: "",
      studentBelong: "",
      content: "",
      contentVisible: false
    },
    showSelect: false,
    selectGroup: []
  })
  window.Reactive = {
    specialItem
  }
})();
