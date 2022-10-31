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
  function fadeIn(sprite, speed = 1, onComplete) {
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
  function fadeOut(sprite, speed = 1, onComplete) {
    const tl = new gsap.timeline();
    tl.to(sprite, {
      alpha: 0,
      duration: speed,
      onComplete: () => {
        const complete = typeof speed === "number" ? onComplete : speed
        if (complete) {
          complete()
        }
      }
    })
  }
  function react(sprite, posX, posY) {
    generalSetting(sprite, posX, posY)
    kirakira(sprite)
  }
  function kirakira(sprite) {
    setTimeout(() => {
      sprite.visible = false
    }, 50)
    setTimeout(() => {
      sprite.visible = true
    }, 100)
    setTimeout(() => {
      sprite.visible = false
    }, 150)
    setTimeout(() => {
      sprite.visible = true
    }, 200)
  }
  function mad(sprite, posX, posY) {
    generalSetting(sprite, posX, posY)
  }
  function kira(sprite, posX, posY) {
    generalSetting(sprite, posX, posY)
    kirakira(kira)
  }
  function music(sprite, posX, posY) {
    generalSetting(sprite, posX, posY)
    const tlSize = new gsap.timeline();
    tlSize.timeScale(3.3)
    const tlPos = new gsap.timeline();
    tlPos.timeScale(3.3)
    sprite.scale.set(0.3, 0.3)
    const x = sprite.x
    const y = sprite.y
    tlSize.to(sprite.scale,{x: 0.5,duration:1.2})
        .to(sprite.scale,{y: 0.5,duration:1.2}, 0)
    tlPos.to(sprite,{x:x-50,duration:1.2},0)
        .to(sprite,{y:y+5,angle:-8,duration:0.3},0)
        .to(sprite,{y:y,angle:0,duration:0.3},0.3)
        .to(sprite,{y:y+5,angle:-8,duration:0.4},0.6)
        .to(sprite,{y:y,angle:0,duration:0.4},1.0)
        .then(()=>{sprite.visible=false})
  }
  function disappear(sprite, speed, onComplete) {
    const tl = new gsap.timeline();
    tl.to(sprite, {
      alpha: 0,
      duration: speed,
      onComplete: () => {
        if (onComplete) {
          onComplete()
        }
      }
    })
  }
  function generalSetting(sprite, posX, posY) {
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
  _map.set("fadeOut", fadeOut)
  _map.set("react", react)
  _map.set("mad", mad)
  _map.set("kira", kira)
  _map.set("music", music)
  _map.set("disappear", disappear)
  window.Effect = {
    action
  }
})();
