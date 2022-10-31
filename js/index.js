const {createApp, reactive, toRefs, computed, ref, onMounted} = Vue
const app = createApp({
  setup() {
    const config = reactive({
      pixiWidth: 1280,
      pixiHeight: 720,
    })
    const data = reactive({});
    const pixi = ref();
    const pixiContainerStyle = computed(() => {
      return {
        'width': config.pixiWidth + 'px',
        'height': config.pixiHeight + 'px',
      }
    });
    onMounted(() => {
      const pixiAPP = new PIXI.Application({
        width: config.pixiWidth,
        height: config.pixiHeight,
        backgroundColor: 0xffffff
      });
      // pixiAPP.renderer.BackgroundSystem.color = 0x000000
      pixi.value.appendChild(pixiAPP.view);
      setTimeout(() => {
        Functions.fetchScenarioConfig().then((config) => {
          Player.load(config, pixiAPP, () => {
            Reactive.specialItem.loading = false
            console.log("success")
            Player.next();
          })
        })
      }, 2000)
    })
    function doSelect(selection) {
      Player.doSelect(selection)
    }
    function next() {
      if (Reactive.specialItem.showSelect) return
      Player.next()
    }
    return {
      ...toRefs(data),
      ...toRefs(config),
      pixiContainerStyle,
      pixi,
      ...toRefs(Reactive.specialItem),
      doSelect,
      next
    }
  }
}).mount("#app");
