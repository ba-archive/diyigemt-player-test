const FAKE_NETWORK_TIMEOUT = 1000
const RESOURCE_BASE_URL = "https://arona.cdn.diyigemt.com/image/scenario/"
const RESOURCE_EMOTION_BASE_URL = "https://arona.cdn.diyigemt.com/image/scenario/emotion/"
const FAKE_SCENARIO_DATA = {
  base: {
    title: "沉睡的鯨魚",
    shortcut: "星野以整理器材為由，把老師叫來在倉庫裡打造午睡專用的秘密基地。"
  },
  content: [{
    type: "Title",
    text: "沉睡的鯨魚"
  }, {
    type: "Place",
    bg: "bg1",
    text: "對策委員會社團室"
  }, {
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
  }, {
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
    },{
      type: "appear"
    }],
    text: "咳咳、咳咳。來，就是這裡，灰塵超多的……"
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
