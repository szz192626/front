"use strict";

var app = new Vue({
  el: '#app',
  data: {
    students: [{
      "id": "2",
      "name": "⾦晨星",
      "github_name": "flobby949",
      "nickname": "flobby",
      "hometown": "江苏苏州",
      "birthday": "2001.08.28",
      "constellation": "处⼥座",
      "mobile": "18962521753",
      "qq": "2541226493",
      "email": "2541226493@qq.com",
      "avatar": "https://flobby.oss-cn-shenzhen.aliyuncs.com/avatar/4a3935d6-9579-467f-b63d-4a956414306f.jpg",
      "github": "https://github.com/Flobby949",
      "hobby": "美⻝，游戏，影视，编程",
      "signature": "不负热爱，远赴⼭海",
      "color": "#7bafd4"
    }, {
      "id": "3",
      "name": "杨煜帆",
      "github_name": "goddiezz",
      "nickname": "PotatoRice",
      "hometown": "江苏泰州",
      "birthday": "1999.08.20",
      "constellation": "狮⼦座",
      "mobile": "19822666656",
      "qq": "1048706559",
      "email": "1048706559@qq.com",
      "avatar": "https://potato-rice.oss-cn-hangzhou.aliyuncs.com/img/1594093672430.png",
      "github": "https://github.com/goddiezz",
      "hobby": "思考..",
      "signature": "仿⽣⼈也会涮电⼦⽺吗",
      "color": "#FFDCDC"
    }, {
      "id": "4",
      "name": "林丹丹",
      "github_name": "dandan1232",
      "nickname": "⼗⾥.",
      "hometown": "江苏苏州",
      "birthday": "2000.11.08",
      "constellation": "天蝎座",
      "mobile": "18962494510",
      "qq": "345652127",
      "email": "345652127@qq.com",
      "avatar": "https://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/md/20210315130639.jpg",
      "github": "https://github.com/dandan1232",
      "hobby": "吃吃吃、⾳乐、徐正、编程",
      "signature": "前途浩浩荡荡，万事皆可期待",
      "color": "#42A5F5"
    }, {
      "id": "5",
      "name": "钱锦辉",
      "github_name": "jinhuiqian",
      "nickname": "来树下",
      "hometown": "江苏⽆锡",
      "birthday": "2000.11.29",
      "constellation": "射⼿座",
      "mobile": "18552415135",
      "qq": "1286122850",
      "email": "1286122850@qq.com",
      "avatar": "https://jinhuiqian.oss-cn-beijing.aliyuncs.com/avatar/08f33c7d8b09e9b440a40f03287f5fff.png",
      "github": "https://github.com/jinhuiqian",
      "hobby": "编程、⾳乐、游戏",
      "signature": "",
      "color": ""
    }, {
      "id": "7",
      "name": "柏楠",
      "github_name": "bainan224",
      "nickname": "⻓街",
      "hometown": "江苏盐城",
      "birthday": "2001.9.16",
      "constellation": "处⼥座",
      "mobile": "19827063716",
      "qq": "2403906364",
      "email": "2403906364@qq.com",
      "avatar": "http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/tou.jpg",
      "github": "https://github.com/bainan224",
      "hobby": "编程，写作，阅读，⾳乐，美⻝",
      "signature": "越努⼒越幸运",
      "color": "#F1F1FA"
    }, {
      "id": "10",
      "name": "林凡",
      "github_name": "lingoufan",
      "nickname": "HYAKKIYAKOU",
      "hometown": "江苏徐州",
      "birthday": "2001.10.23",
      "constellation": "天秤座",
      "mobile": "15371010361",
      "qq": "1400695792",
      "email": "1400695792@qq.com",
      "avatar": "https://pic--go.oss-cn-hangzhou.aliyuncs.com/img/avatar.jpg",
      "github": "https://github.com/lingoufan",
      "hobby": "篮球 、⾳乐 、健身 、阅读（实体书）",
      "signature": "狮⼦不因⽝吠回头，鸿鹄不理燕雀喳喳。",
      "color": "\t#9900FF"
    }, {
      "id": "12",
      "name": "孙周⾈",
      "github_name": "szz192626",
      "nickname": "梦游记",
      "hometown": "江苏宿迁",
      "birthday": "2001.11.22",
      "constellation": "天蝎座",
      "mobile": "18805176609",
      "qq": "1135304930",
      "email": "1135304930@qq.com",
      "avatar": "https://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/md/20210315131849.jpg",
      "github": "https://github.com/szz192626?tab=repositories",
      "hobby": "魔⽅、游戏、旅游、搞创新实践、各种玩",
      "signature": "即便拼尽全⼒也不要轻⾔放弃，你不⽤为了天亮去跑，跑下去，天⾃⼰会亮",
      "color": "＃2196f3"
    }, {
      "id": "13",
      "name": "王珊",
      "github_name": "Ws1118",
      "nickname": "天呐",
      "hometown": "江苏连云港",
      "birthday": "2001.11.18",
      "constellation": "天蝎座",
      "mobile": "13151768681",
      "qq": "2865094521",
      "email": "2865094521@qq.com",
      "avatar": "https://wshan.oss-cn-beijing.aliyuncs.com/head.jpg",
      "github": "https://github.com/Ws1118",
      "hobby": "美⻝、游戏、阅读、运动、⼆次元",
      "signature": "去⼲饭的路上⻛都是温暖的",
      "color": "#88D4D7"
    }, {
      "id": "16",
      "name": "赵嘉纯",
      "github_name": "zjcrxh",
      "nickname": ".",
      "hometown": "⼴东汕头",
      "birthday": "2000.05.02",
      "constellation": "双⼦座",
      "mobile": "18120159939",
      "qq": "2287809691",
      "email": "2287809691@qq.com",
      "avatar": "https://zjcrxh.oss-cn-shenzhen.aliyuncs.com/20210311065448.jpg",
      "github": "https://github.com/zjcrxh",
      "hobby": "美⻝，烘焙，做饭，⼩说，养猫",
      "signature": "向着光去",
      "color": "pink"
    }, {
      "id": "17",
      "name": "⾦晨⾬",
      "github_name": "Gin1217",
      "nickname": "安懿",
      "hometown": "江苏南京",
      "birthday": "2000.12.17",
      "constellation": "射⼿座",
      "mobile": "13305162365",
      "qq": "935684264",
      "email": "935684364@qq.com",
      "avatar": "https://i.loli.net/2021/03/12/7RXdxO9CiIWf5My.jpg",
      "github": "https://github.com/Gin1217",
      "hobby": "阅读，⾳乐，写作，观影，绘画",
      "signature": "你知道当你需要个夏天我会拼了命努⼒",
      "color": "#5698c3"
    }, {
      "id": "23",
      "name": "闵耀梁",
      "github_name": "yeweiyang-hub",
      "nickname": "yeweiyang",
      "hometown": "江苏淮安",
      "birthday": "1996.11.08",
      "constellation": "天蝎座",
      "mobile": "18252322561",
      "qq": "972464402",
      "email": "myl08@qq.com",
      "avatar": "https://avatars.githubusercontent.com/u/58315817? s=400&u=7647730650444a6a069ca320801ec43420466ecc&v=4",
      "github": "https://github.com/yeweiyang-hub",
      "hobby": "打游戏、看电影、看微博、知乎、⾖瓣",
      "signature": "空⽩",
      "color": "#FFF"
    }, {
      "id": "34",
      "name": "张怡沁",
      "github_name": "Demo-Qin",
      "nickname": "ZYQin",
      "hometown": "浙江嘉兴",
      "birthday": "2001.1.31",
      "constellation": "⽔瓶座",
      "mobile": "18851672790",
      "qq": "1792357514",
      "email": "1792357514@qq.com",
      "avatar": "https://avatars.githubusercontent.com/u/58162179?s=460&u=48caefb589c071638de2e7fb353bbeaa99e17f1a&v=4",
      "github": "https://github.com/Demon-Qin",
      "hobby": "编程、看剧、⼲饭、偶尔唱唱歌",
      "signature": "",
      "color": "#c3bef0"
    }]
  }
});