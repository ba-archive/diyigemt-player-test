(() => {
  function hophop(parent, sprite) {
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
  function jump(parent, sprite) {
    const cacheY = sprite.y
    const tl = new gsap.timeline();
    tl.to(sprite, {
      y: cacheY - 30,
      duration: 0.1
    }).to(sprite, {
      y: cacheY,
      duration: 0.1
    })
  }
  function fadeIn(parent, sprite, speed = 1, onComplete) {
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
  function fadeOut(parent, sprite, speed = 1, onComplete) {
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
  function react(parent, sprite, posX, posY) {
    generalSetting(sprite, parent, posX, posY)
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
  function mad(parent, sprite, posX, posY) {
    generalSetting(sprite, parent, posX, posY)
  }
  function heart(parent, sprite, posX, posY) {
    generalSetting(sprite, parent, posX, posY)
  }
  function sweat(parent, sprite, posX, posY) {
    generalSetting(sprite, parent, posX, posY)
    const cacheY = sprite.y
    sprite.y = cacheY - 35
    const tl = new gsap.timeline();
    tl.to(sprite, {
      y: cacheY,
      duration: 0.8,
      ease: "power4.out",
      onComplete: () => {
        setTimeout(() => {
          sprite.visible = false
        }, 25)
      }
    })
  }
  function kira(parent, sprite, posX, posY) {
    generalSetting(sprite, parent, posX, posY)
    kirakira(kira)
  }
  function music(parent, sprite, posX, posY, _, onComplete) {
    generalSetting(sprite, parent, posX, posY)
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
        .to(sprite,{y:y,angle:0,duration:0.4, onComplete:onComplete},1.0)
        .then(()=>{sprite.visible=false})
  }
  function disappear(parent, sprite, speed, onComplete) {
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
  function bgShake(parent, sprite, speed, onComplete) {
    const tl = new gsap.timeline({
      defaults: {
        duration: speed
      }
    });
    const cacheX = sprite.x
    tl.to(sprite, {
      x: cacheX - 10,
    }).to(sprite, {
      x: cacheX + 20,
    }).to(sprite, {
      x: cacheX - 20,
    }).to(sprite, {
      x: cacheX + 10,
      onComplete: () => {
        if (onComplete) {
          onComplete()
        }
      }
    })
  }
  function move(parent, sprite, _, posY, args, onComplete) {
    const moveToX = POS_MAP[Number(args[0])] - sprite.width / 2
    const tl = new gsap.timeline();
    tl.to(sprite, {
      x: moveToX,
      duration: Number(args[1]),
      onComplete: () => {
        if (onComplete) {
          onComplete()
        }
      }
    })
  }
  function moveTo(parent, sprite, _, posY, args, onComplete) {
    const config = {
      posX: POS_MAP[args[0]],
      posY: 150,
      scale: 0.6,
      zIndex: POS_INDEX_MAP[args[0]],
    }
    Player.displayResource(args[1], config)
    const moveToX = POS_MAP[Number(args[2])] - sprite.width / 2
    const tl = new gsap.timeline();
    tl.to(sprite, {
      x: moveToX,
      duration: Number(args[3]),
      onComplete: () => {
        if (onComplete) {
          onComplete()
        }
      }
    })
  }
  function greeting(parent, sprite, _, __, ___, onComplete) {
    const cacheY = sprite.y
    const tl = new gsap.timeline();
    tl.to(sprite, {
      y: cacheY + 30,
      duration: 0.2
    }).to(sprite, {
      y: cacheY,
      duration: 0.2,
      onComplete: onComplete
    }, 0.3)
  }
  function stiff(parent, sprite, _, __, ___, onComplete) {
    const cacheX = sprite.x
    const tl = new gsap.timeline({
      defaults: {
        duration: 0.05
      },
    });
    tl.to(sprite, {
      x: cacheX - 2,
      duration: 0.025
    }).to(sprite, {
      x: cacheX + 4,
    }).to(sprite, {
      x: cacheX - 4,
    }).to(sprite, {
      x: cacheX + 4,
    }).to(sprite, {
      x: cacheX - 4,
    }).to(sprite, {
      x: cacheX + 4,
    }).to(sprite, {
      x: cacheX - 4,
    }).to(sprite, {
      x: cacheX,
      duration: 0.025,
      onComplete: onComplete
    })
  }
  function closeup(parent, sprite, _, __, ___, onComplete) {
    const cacheX = sprite.x
    const cacheY = sprite.y
    const posX = cacheX + sprite.width / 2
    sprite.scale.set(0.7, 0.7)
    sprite.y = cacheY + 100
    sprite.x = posX - sprite.width / 2
    if (onComplete) {
      onComplete()
    }
  }
  function generalSetting(sprite, parent, posX, posY) {
    sprite.scale.set(0.5, 0.5)
    if (posX && !sprite.visible) {
      sprite.x = posX - sprite.width / 2
    }
    if (posY && !sprite.visible) {
      sprite.y = posY + sprite.height / 2
    }
    sprite.visible = true
    sprite.alpha = 1
    if (parent && parent !== sprite) {
      sprite.scale.set(1, 1)
      sprite.x = sprite.width
      sprite.y = sprite.height / 2
      sprite.setParent(parent)
    }
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
  _map.set("jump", jump)
  _map.set("fadeIn", fadeIn)
  _map.set("fadeOut", fadeOut)
  _map.set("react", react)
  _map.set("mad", mad)
  _map.set("heart", heart)
  _map.set("sweat", sweat)
  _map.set("kira", kira)
  _map.set("music", music)
  _map.set("disappear", disappear)
  _map.set("bgShake", bgShake)
  _map.set("move", move)
  _map.set("moveTo", moveTo)
  _map.set("greeting", greeting)
  _map.set("stiff", stiff)
  _map.set("closeup", closeup)
  window.Effect = {
    action
  }
})();
