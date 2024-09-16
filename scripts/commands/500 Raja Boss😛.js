const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/VZsUlt3.mp4",

];

module.exports.config = {
  name: "@RAJA 卝 মিমヅ",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "auto reply to @RAJA 卝 মিমヅ",
  category: "noprefix",
  usages: "@RAJA 卝 মিমヅ",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("@RAJA 卝 মিমヅ")) {
    const rahad = [
      "•┄┅════❁🌺❁════┅┄• \n     পরিপূর্ণ সৌন্দর্য-!!🌼🫶\n•┄┅════❁🌺❁════┅┄• ",
      "•┄┅════❁🌺❁════┅┄• \n     পরিপূর্ণ সৌন্দর্য-!!🌼🫶\n•┄┅════❁🌺❁════┅┄• "

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["@RAJA 卝 মিমヅ"] === "undefined" || data["@RAJA 卝 মিমヅ"]) data["@RAJA 卝 মিমヅ"] = false;
  else data["@RAJA 卝 মিমヅ"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["@RAJA 卝 মিমヅ"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
