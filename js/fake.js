const FAKE_NETWORK_TIMEOUT = 1000
const RESOURCE_BASE_URL = "https://arona.diyigemt.com/image/scenario/"
const RESOURCE_EMOTION_BASE_URL = "https://arona.diyigemt.com/image/scenario/emotion/"
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
    face: 12,
    script: [{
      type: "mad"
    }],
    text: "呃嘿～其實是因為我有件事需要一點人手幫忙，有個東西我自己一個人搬不動。"
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
