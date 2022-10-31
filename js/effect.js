(() => {
  function hophop(sprite) {
    const cacheY = sprite.y
    const tl = new gsap.timeline();
    tl.to(sprite, {
      y: cacheY - 30,
      duration: 0.1
    }).to(sprite, {
      y: cacheY,
      duration: 0.1
    }).to(sprite, {
      y: cacheY - 30,
      duration: 0.1
    }).to(sprite, {
      y: cacheY,
      duration: 0.1
    })
  }
  function fadeIn(sprite, speed, onComplete) {
    const tl = new gsap.timeline();
    tl.to(sprite, {
      alpha: 1,
      duration: speed,
      onComplete: () => {
        if (onComplete) {
          onComplete()
        }
      }
    })
  }
  function react(sprite, posX, posY) {
    sprite.scale.set(0.5, 0.5)
    sprite.visible = true
    sprite.alpha = 1
    sprite.x = posX - sprite.width / 2
    sprite.y = posY + sprite.height / 2
  }
  function action(name, ...args) {
    const handler = _map.get(name)
    if (handler) {
      handler(...args)
    }
  }
  function transformSprite(sprite, screenHeight = 1280, cut = 0.7) {
    const { width, height } = sprite._texture.orig
    sprite.y = screenHeight - (height * cut)
  }
  const _map = new Map();
  _map.set("hophop", hophop)
  _map.set("fadeIn", fadeIn)
  _map.set("react", react)
  window.Effect = {
    action
  }
})();
