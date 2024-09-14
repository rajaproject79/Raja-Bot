module.exports.config = {
  name: "/",
  version: "1.0.0", 
  permssion: 0,
  credits: "Islamick Cyber Chat", 
  prefix: 'false',
  description: " stutus video",
  category: "system video", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json')
  const Shaon = apis.data.api
  
    const res = await axios.get(`${Shaon}/video/status2`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.url.url}`;
    let cp = `${res.data.url.title}`
    let Shaon1 = `${res.data.author}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));

    {
        msg += `°\n\n__${cp}\n\n🍂𝘉𝘖𝘛 𝘖𝘞𝘕𝘌𝘙:𝘙𝘈𝘑𝘈 卝 চৌধুরী .🌸`

    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
      }
