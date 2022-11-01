const CHARACTER_TO_IMAGE = {
  "hoshino": "星野"
}
const CHARACTER_TO_BELONG = {
  "hoshino": "对策委员会"
};
const POS_MAP = {
  1: 128,
  2: 384,
  3: 640,
  4: 896,
  5: 1152,
};
const EFFECT_POS_MAP = {
  1: 0,
  2: 256,
  3: 512,
  4: 768,
  5: 1024,
};
const POS_INDEX_MAP = {
  1: 2,
  2: 3,
  3: 4,
  4: 3,
  5: 2,
};
const EMOTION_LIST = ["react", "mad", "kira", "music", "sweat", "heart"];
(() => {
  let pointer = -1
  let config = {}
  let resource = {}
  let pixi = null
  let lock = false
  const _map = new Map();

  function load(_config, _pixi, onSuccess) {
    config = _config
    pixi = _pixi
    const resourceList = buildResourceList(config)
    loadResource(resourceList).then((res) => {
      resource = res;
      pointer = 0;
      if (onSuccess) {
        onSuccess()
      }
    })
    _map.set("Title", title)
    _map.set("Place", place)
    _map.set("Script", script)
    _map.set("Select", select)
    _map.set("EffectScript", effectScript)
    _map.set("Wait", wait)
    _map.set("HideALL", hideAll)
    _map.set("Home", home)
  }

  function home(now) {
    hideAll()
  }

  function hideAll(now) {
    Reactive.specialItem.title = ""
    Reactive.specialItem.titleOpacity = 0
    Reactive.specialItem.place = ""
    Reactive.specialItem.placeOpacity = 0
    Reactive.specialItem.chat.content = ""
    Reactive.specialItem.chat.contentVisible = false
    Reactive.specialItem.chat.studentName = ""
    Reactive.specialItem.chat.studentBelong = ""
    Reactive.specialItem.showSelect = false
    Reactive.specialItem.selectGroup = []
    clear()
    const keys = Object.keys(resource).filter(item => resource[item].visible)
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        Effect.action("fadeOut", null, resource[key], 1, () => {
          resource[key].visible = false
          next()
        })
      } else {
        Effect.action("fadeOut", null, resource[key], 1, () => {
          resource[key].visible = false
        })
      }
    })
  }

  function wait(now) {
    lock = true;
    setTimeout(() => {
      lock = false
      next()
    }, Number(now.text))
  }

  function loadResource(list) {
    return Promise.all(list.map((item) => {
      return fetchTexture(item.url)
    })).then(res => {
      const obj = {}
      list.forEach((item, index) => {
        const sprite = new PIXI.Sprite(res[index])
        sprite.visible = false
        sprite.alpha = 0
        pixi.stage.addChild(sprite)
        Reflect.set(obj, item.name, sprite)
      })
      return obj;
    })
  }

  function fetchTexture(url) {
    const {Texture} = PIXI
    return Texture.fromURL(url)
  }

  function buildResourceList(config) {
    const set = new Map();
    const list = config.content
        .filter(item => item.bg || (item.character && item.face))
        .map(item => {
          let name = item.bg
          if (!name) {
            name = buildCharacterName(item.character, item.face)
          }
          if (set.get(name)) {
            return null
          } else {
            set.set(name, name)
            return {
              name: name,
              url: `${RESOURCE_BASE_URL}${name}.png`
            }
          }
        })
        .filter(item => item);
    list.push(
        ...config.content
            .filter(item => item.script)
            .map(item => item.script)
            .flat(1)
            .filter(item => EMOTION_LIST.includes(item.type))
            .map(item => {
              const name = item.type
              if (set.get(name)) {
                return null
              } else {
                set.set(name, name)
                return {
                  name: name,
                  url: `${RESOURCE_EMOTION_BASE_URL}${name}.png`
                }
              }
            })
            .filter(item => item)
    );
    return list;
  }

  function to(index) {

  }

  function next(arg) {
    if (lock) {
      return;
    }
    if (pointer === -1) {
      return
    }
    if (arg && arg.step) {
      pointer += arg.step
    }
    let now = config.content[pointer]
    if (arg && arg.select) {
      while (now.select !== arg.select && pointer < config.content.length - 1) {
        pointer++
        now = config.content[pointer]
      }
    } else {
      while (now.select) {
        pointer++
        now = config.content[pointer]
      }
    }
    if (!now) {
      return;
    }
    const action = _map.get(now.type)
    if (action) {
      // loadBG
      if (now.bg) {
        displayResource(now.bg, {fadeIn: now.script && now.script.some(item => item.type === "fadeIn") ? 1: undefined})
      }
      action(now)
    }
    pointer++
  }

  function title(now) {
    faceInOut(now, "title", () => {
      next()
    })
  }

  function place(now) {
    faceInOut(now, "place", () => {
    }, 2500)
    setTimeout(() => {
      next()
    })
  }

  function faceInOut(now, key, cb, delay = 2000, animationDelay = 1000) {
    const opacityKey = key + "Opacity"
    Reflect.set(Reactive.specialItem, key, now.text)
    setTimeout(() => {
      Reflect.set(Reactive.specialItem, opacityKey, 1)
      setTimeout(() => {
        setTimeout(() => {
          Reflect.set(Reactive.specialItem, key, "")
          if (cb) {
            cb()
          }
        }, animationDelay)
        Reflect.set(Reactive.specialItem, opacityKey, 0)
      }, delay)
    }, 50)
  }

  function script(now) {
    const keep = (now.script || []).some(item => item.type === "keep")
    if (now.character && now.face) {
      if (!keep) {
        hideResource(now.character)
      }
      const name = buildCharacterName(now.character, now.face)
      if (resource[name] && !resource[name].visible) {
        const fadeIn = now.script && now.script.some(item => item.type === "appear")
        const config = {
          posX: POS_MAP[now.pos],
          posY: 150,
          scale: 0.6,
          zIndex: POS_INDEX_MAP[now.pos],
        }
        if (fadeIn) {
          Reflect.set(config, "fadeIn", 1)
          Reflect.set(config, "onComplete", () => {
            if (now.script) {
              doScript(now)
            }
            showChatContent(now)
          })
        } else {
          if (now.script) {
            doScript(now)
          }
          showChatContent(now)
        }
        if (!keep) {
          displayResource(name, config)
        }
      } else {
        if (now.script) {
          doScript(now)
        }
        showChatContent(now)
      }
    } else {
      Reactive.specialItem.chat.contentVisible = true;
      Reactive.specialItem.chatDialogVisible = true;
      doScript(now);
      showChatContent(now);
    }
  }

  function doScript(now) {
    const name = buildCharacterName(now.character, now.face)
    const auto = (now.script || []).some(item => item.type === "auto")
    const script = (now.script || []).filter(item => item.type !== "auto")
    script.forEach((item, index) => {
      const emotion = resource[item.type]
      // if (emotion && emotion.parent !== pixi.stage) {
      //   emotion.setParent(pixi.stage)
      // }
      setTimeout(() => {
        if (auto && index === script.length - 1) {
          Effect.action(item.type, resource[name], emotion || resource[name], EFFECT_POS_MAP[now.pos], resource[name].y, item.args, () => {
            next()
          })
        } else {
          Effect.action(item.type, resource[name], emotion || resource[name], EFFECT_POS_MAP[now.pos], resource[name].y, item.args)
        }
      })
    })
  }

  function effectScript(now) {
    const name = buildCharacterName(now.character, now.face)
    now.script.forEach(item => {
      setTimeout(() => {
        if (item.type === "disappear") {
          Effect.action(item.type, null, resource[name], Number(now.text), () => {
            next()
          })
        } else if (item.type === "bgShake") {
          Effect.action(item.type, null, resource[now.bg], Number(now.text), () => {
            next()
          })
        } else {
          Effect.action(item.type, null, resource[item.type] || resource[name], EFFECT_POS_MAP[now.pos], resource[name].y, item.args)
        }
      })
    })
  }

  function select(now) {
    const selection = now.text.split("\n").map(item => item.trim())
    Reactive.specialItem.showSelect = true;
    Reactive.specialItem.selectGroup = selection;
  }

  function doSelect(selection) {
    next({
      select: Number(selection)
    })
  }

  function showChatContent(now, speed = 50) {
    if (!now.text) {
      return
    }
    clear()
    const text = now.text
    const speaker = CHARACTER_TO_IMAGE[now.character]
    const belong = CHARACTER_TO_BELONG[now.character]
    Reactive.specialItem.chat.contentVisible = true;
    Reactive.specialItem.chatDialogVisible = true;
    Reactive.specialItem.chat.studentName = speaker;
    Reactive.specialItem.chat.studentBelong = belong;
    let pointer = 0
    let handler = setInterval(() => {
      Reactive.specialItem.chat.content = text.slice(0, ++pointer);
      if (pointer === text.length) {
        clearInterval(handler)
      }
    }, speed)
  }

  function buildCharacterName(character, face) {
    return character + "_" + face
  }

  function hideResource(name) {
    Object.keys(resource).forEach(key => {
      if (key.startsWith(name)) {
        resource[key].visible = false;
      }
    })
  }

  function displayResource(name, config) {
    if (name) {
      const sprite = Reflect.get(resource, name)
      if (sprite) {
        if (config) {
          if (config.scale) {
            sprite.scale.set(config.scale, config.scale)
          }
          if (config.posX) {
            sprite.x = config.posX - sprite.width / 2
          }
          if (config.posY) {
            sprite.y = config.posY
          }
          if (config.zIndex) {
            sprite.zIndex = config.zIndex
          }
        }
        if (config && config.fadeIn) {
          sprite.alpha = 0
          sprite.visible = true
          Effect.action("fadeIn", null, sprite, config.fadeIn, config.onComplete)
        } else {
          sprite.alpha = 1
          sprite.visible = true
        }
      }
    }
  }

  function clear() {
    // Reactive.specialItem.title = ""
    // Reactive.specialItem.titleOpacity = 0
    // Reactive.specialItem.place = ""
    // Reactive.specialItem.placeOpacity = 0
    // Reactive.specialItem.chat.content = ""
    // Reactive.specialItem.chat.contentVisible = false
    // Reactive.specialItem.chat.studentName = ""
    // Reactive.specialItem.chat.studentBelong = ""
    Reactive.specialItem.showSelect = false
    Reactive.specialItem.selectGroup = []
    EMOTION_LIST.forEach(name => {
      if (resource[name]) {
        resource[name].visible = false;
        resource[name].alpha = 0;
      }
    })
  }

  function isFinish() {
    return pointer === config.content.length - 1
  }

  window.Player = {
    load,
    next,
    to,
    isFinish,
    showChatContent,
    title,
    doSelect,
    displayResource
  }
})();
