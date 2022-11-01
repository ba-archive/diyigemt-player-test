const FAKE_NETWORK_TIMEOUT = 1000
// const RESOURCE_BASE_URL = "http://127.0.0.1:5500/"
// const RESOURCE_EMOTION_BASE_URL = "http://127.0.0.1:5500/emotion/"
const RESOURCE_BASE_URL = "https://arona.cdn.diyigemt.com/image/scenario/"
const RESOURCE_EMOTION_BASE_URL = "https://arona.cdn.diyigemt.com/image/scenario/emotion/"
const FAKE_SCENARIO_DATA = {
  base: {
    title: "沉睡的鯨魚",
    shortcut: "星野以整理器材為由，把老師叫來在倉庫裡打造午睡專用的秘密基地。"
  },
  content: [
        {
      type: "Title",
      text: "沉睡的鯨魚"
    },
    {
      type: "Place",
      bg: "bg1",
      text: "對策委員會社團室"
    },
    {
      type: "Script",
      pos: 3,
      character: "hoshino",
      face: 12,
      script: [{
        type: "react"
      }, {
        type: "appear"
      }],
      text: "也就是說鯨魚睡覺的時候會憋著氣喔，你不覺得很厲害嗎？"
    }, {
      type: "Select",
      text: "「為什麼說到鯨魚？」\n「你說需要幫忙的是什麼事？」"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 7,
      select: 1,
      text: "啊啊。原來老師你也完全不懂浪漫呢。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 7,
      select: 2,
      text: "啊啊。原來老師你也完全不懂浪漫呢。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 11,
      script: [{
        type: "music"
      }],
      text: "呃嘿～其實是因為我有件事需要一點人手幫忙，有個東西我自己一個人搬不動。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 10,
      text: "因為除了看起來很悠哉的老師以外，我想不到還有什麼人可以幫忙，所以就變成這樣子了。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 12,
      script: [{
        type: "hophop"
      }, {
        type: "kira"
      }],
      text: "沒想到你竟然還是願意過來，果然還是老師對我最好了。"
    }, {
      type: "Select",
      text: "「如果是費力的事，是不是該叫其他成員……？」"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      select: 1,
      text: "你不要說那種讓人難過的話嘛，這件事要對其他社員保密喔。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 12,
      script: [{
        type: "music"
      }],
      text: "好，那咱們走吧。正好學校現在空無一人，這是個好機會。"
    }, {
      type: "EffectScript",
      character: "hoshino",
      pos: 3,
      face: 12,
      script: [{
        type: "disappear"
      }],
      text: "1.5"
    }, {
      type: "Wait",
      character: "hoshino",
      pos: 3,
      face: 13,
      text: "1500"
    }, {
      type: "HideALL",
    },
    {
      type: "Place",
      bg: "bg2",
      script: [{
        type: "fadeIn"
      }],
      text: "不使用的倉庫",
    }, {
      type: "Script",
      text: "（喀答答答—）"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 5,
      script: [{
        type: "mad"
      }, {
        type: "appear"
      }],
      text: "咳咳、咳咳。來，就是這裡，灰塵超多的……"
    },
    {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 8,
      script: [{
        type: "react"
      }],
      text: "啊，小心那裡，老師，你要好好看著腳下才行。"
    },
    {
      type: "Select",
      text: "「這裡是……？」\n「……倉庫？」"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 11,
      select: 1,
      text: "嗯，這間倉庫專門放置沒在使用的器材，咱們學校有好幾間像這樣的倉庫。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 11,
      select: 2,
      text: "嗯，這間倉庫專門放置沒在使用的器材，咱們學校有好幾間像這樣的倉庫。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 14,
      text: "雖然大部分值錢的東西都拿去賣了，所以這裡只剩下一些雜物而已。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 14,
      script: [{
        type: "move",
        args: [2, 0.6]
      }, {
        type: "auto"
      }],
    }, {
      type: "Script",
      character: "hoshino",
      pos: 2,
      face: 14,
      script: [{
        type: "greeting"
      }],
      text: "不過偶爾來翻翻找找……就會像這樣……"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 2,
      face: 8,
      script: [{
        type: "kira"
      }, {
        type: "stiff"
      }],
      text: "咳咳、咳咳。鏘！"
    },
    {
      type: "Script",
      character: "hoshino",
      pos: 2,
      face: 12,
      script: [{
        type: "react"
      }, {
        type: "hophop"
      }, {
        type: "move",
        args: [3, 0.6]
      }],
      text: "還能夠挖到這麼棒的東西。怎麼樣，很棒吧？"
    }, {
      type: "Select",
      text: "「體育墊子……？」\n「你要用這個做什麼？」"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 2,
      select: 1,
      script: [{
        type: "hophop"
      }, {
        type: "react"
      }],
      text: "大膽，這不是普通的體操墊，這個東西可是象徵了咱們學校往日的風光及富足！"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 2,
      select: 2,
      script: [{
        type: "hophop"
      }, {
        type: "react"
      }],
      text: "大膽，這不是普通的體操墊，這個東西可是象徵了咱們學校往日的風光及富足！"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 12,
      script: [{
        type: "kira"
      }],
      text: "而且還是鵝毛體操墊！"
    },
    {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 10,
      text: "這裡面塞的可不是不織布那種廉價的填充物，而是用貨真價實的鴨毛！"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 16,
      script: [{
        type: "sweat"
      }],
      text: "又不是平常睡覺蓋的棉被，居然在學生們踩來踩去的體操墊裡面塞鴨毛，這到底是在開什麼玩笑。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 8,
      text: "呃嘿，不過這世界上什麼事情都有可能發生，所以就算有這種詭異的東西也不是什麼大不了的事。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 10,
      text: "想太多的話就輸了？"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 12,
      script: [{
        type: "kira"
      }],
      text: "從現在起，大叔我會好好愛護你的♪"
    },
    {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      text: "好了，老師，你抓著那邊。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      script: [{
        type: "greeting"
      }, {
        type: "auto"
      }],
      text: ""
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 14,
      script: [{
        type: "closeup"
      }, {
        type: "auto"
      }],
      text: ""
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 14,
      script: [{
        type: "keep"
      }],
      text: "嘿咻～……那咱們就走吧"
    }, {
      type: "Wait",
      character: "hoshino",
      pos: 3,
      face: 14,
      text: "1000"
    }, {
      type: "HideALL",
    },
    {
      type: "Place",
      bg: "bg3",
      script: [{
        type: "fadeIn"
      }],
      text: "不使用的空教室",
    }, {
      type: "Script",
      text: "（喀答答答—）"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      script: [{
        type: "appear"
      }],
      text: "好，這裡應該就行了，你放開吧。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      text: "（癱軟—）"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      script: [{
        type: "move",
        args: [2, 0.6]
      }],
      text: "嗯，角度好像有點不太對……再過來一點點……"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 2,
      face: 13,
      script: [{
        type: "stiff"
      }, {
        type: "auto"
      }],
      text: ""
    }, {
      type: "Wait",
      pos: 2,
      text: "1000"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 2,
      face: 12,
      script: [{
        type: "move",
        args: [3, 0.6]
      }, {
        type: "heart"
      }],
      text: "……行了。這樣剛剛好，很完美！"
    },
    {
      type: "Select",
      text: "「把墊子搬到這裡想做什麼？」"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 11,
      select: 1,
      text: "呃嘿，還不是因為老師你問了個理所當然的問題。"
    }, {
      type: "Script",
      character: "hoshino",
      pos: 3,
      face: 13,
      script: [{
        type: "jump"
      }, {
        type: "music"
      }, {
        type: "auto"
      }],
      text: "（用力）"
    }, {
      type: "EffectScript",
      character: "hoshino",
      pos: 3,
      face: 13,
      script: [{
        type: "disappear"
      }],
      text: "1.5"
    }, {
      type: "EffectScript",
      bg: "bg3",
      script: [{
        type: "bgShake"
      }],
      text: "0.05"
    }, {
      type: "Select",
      text: "「躺下來了？！」\n「舒服的就寢模式？！」"
    }, {
      type: "Script",
      character: "hoshino",
      select: 1,
      text: "加上這個睡午覺的秘密基地就完成了！"
    }, {
      type: "Script",
      character: "hoshino",
      select: 2,
      text: "只屬於我的秘密休息站完成了，一定沒有人會發現。啊，老師應該不會偷偷把這個地方告訴其他人吧？！"
    }, {
      type: "Select",
      text: "「清一清灰塵，拿來用應該不錯。」\n「就這樣睡著的話會感冒的。」"
    }, {
      type: "Script",
      character: "hoshino",
      select: 1,
      text: "好，別碎碎唸了。那就謝謝囉。耶嘿～託你的福，有了個睡覺的好地方。"
    }, {
      type: "Script",
      character: "hoshino",
      select: 2,
      text: "好，別碎碎唸了。那就謝謝囉。耶嘿～託你的福，有了個睡覺的好地方。"
    }, {
      type: "Script",
      character: "hoshino",
      text: "耶嘿…鬆鬆軟軟的…這就是鴨絨的觸感嗎…"
    }, {
      type: "Script",
      character: "hoshino",
      text: "啊啊…突然好想睡…老師…"
    }, {
      type: "Script",
      character: "hoshino",
      text: "呼哈啊啊—那就晚安囉…"
    }, {
      type: "Script",
      character: "hoshino",
      text: "…幸好…不是鯨魚…"
    }, {
      type: "Script",
      character: "hoshino",
      text: "…呼。"
    }, {
      type: "Wait",
      character: "hoshino",
      text: "1500"
    }, {
      type: "Select",
      text: "「…………」\n「…真的睡著了。」"
    }, {
      type: "Script",
      select: 1,
      text: "（盯著沉睡的星野看了一會之後，想起接下來的行程，這才決定回去。）"
    }, {
      type: "Script",
      select: 2,
      text: "（盯著沉睡的星野看了一會之後，想起接下來的行程，這才決定回去。）"
    }, {
      type: "HideALL"
    }, {
      type: "Script",
      text: "（小心翼翼地離開教室。）"
    }, {
      type: "Home",
    }]
};

function fakeTime() {
  return (Math.random() + 0.5) * FAKE_NETWORK_TIMEOUT
}

(() => {
  function fetchScenarioConfig(characterId, chapterId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_SCENARIO_DATA)
      }, fakeTime());
    })
  }

  window.Functions = {
    fetchScenarioConfig: fetchScenarioConfig,
  }
})();
