const lunboShuju = [
  {
    eyebrow: "On-site Sequence",
    subtitle: "第一幕 · 正立面",
    title: "先让轮廓建立秩序",
    text: "先从正立面进入，抓住屋顶、檐口和殿身比例，这是一切细节的起点。",
    detail: "这一张不是为了看装饰，而是为了确认整座建筑如何站立。远望时，屋顶压下来的重量感和殿身的稳定感会先一步成立，后面的细部观看才有坐标。",
    tags: ["正立面", "整体轮廓", "尺度感"],
    image: "./image/img1.jpg",
    alt: "佛光寺东大殿正立面"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第二幕 · 斜侧观看",
    title: "把深檐和柱列读出来",
    text: "换到斜侧角度，出檐深度和柱列节奏会比正面更明显，结构感也更强。",
    detail: "正面给你秩序，斜侧面才真正把结构层次推到前景。站在这个角度时，檐下阴影会更厚，柱列的节奏也会从平面关系变成立体关系。",
    tags: ["斜侧视角", "出檐", "柱列"],
    image: "./image/img2.jpg",
    alt: "佛光寺东大殿斜侧面"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第三幕 · 近景构件",
    title: "让构件替你解释受力",
    text: "靠近之后，注意构件之间不是堆叠关系，而是被精确组织过的受力关系。",
    detail: "近看时最容易误以为细部只是装饰，但真正值得看的，是构件如何一层层把重量拆开。越靠近，越能发现这座建筑的克制感其实来自结构本身的自信。",
    tags: ["近景", "构件", "结构秩序"],
    image: "./image/img3.jpg",
    alt: "佛光寺东大殿近景"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第四幕 · 环境关系",
    title: "把建筑放回它的现场里",
    text: "古建筑从来不是孤立存在的，它和院落、树木、地势一起构成现场氛围。",
    detail: "当你把视线从单体建筑移开，现场才真正开始成立。院落、路径、植被和地势不是背景，它们共同决定了这座建筑为什么会被这样抵达、这样观看。",
    tags: ["环境关系", "院落", "现场感"],
    image: "./image/img4.jpg",
    alt: "佛光寺东大殿与环境"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第五幕 · 檐下光影",
    title: "在阴影里感受木构节奏",
    text: "檐下是最适合感受木构节奏的地方，阴影会把层次和尺度都推到前面来。",
    detail: "很多木构建筑真正的力量不在阳光下，而在檐下。阴影会把层次压出来，把构件的先后关系推出来，也让人第一次真正感受到空间的深度。",
    tags: ["檐下", "光影", "层次"],
    image: "./image/img5.jpg",
    alt: "佛光寺东大殿檐下光影"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第六幕 · 回望全景",
    title: "最后让整体重新收束",
    text: "离开前回望一次，通常会比第一眼更懂这座建筑真正稳定而克制的力量。",
    detail: "回望的意义，不是重复第一眼，而是把刚才读到的出檐、柱列、构件和阴影重新缝回整体。这时你看到的，已经不是一张照片，而是一套完整的秩序。",
    tags: ["全景", "回望", "整体秩序"],
    image: "./image/img6.jpg",
    alt: "佛光寺东大殿全景"
  }
];

const shengfenShuju = [
  { name: "北京", x: 68.7, y: 30.6, dx: 10, dy: -16, summary: "以都城礼制建筑为核心，适合从中轴、台基、重檐和整体秩序理解古建筑的空间气势。", type: "代表类型：宫殿 / 祭祀建筑", spot: "代表建筑：故宫太和殿、祈年殿" },
  { name: "天津", x: 70.9, y: 31.5, dx: 10, dy: 8, summary: "城市尺度更紧凑，适合把北方近代城市格局和传统建筑残留放在一起看。", type: "代表类型：城厢建筑 / 近代遗存", spot: "代表建筑：广东会馆、天后宫" },
  { name: "河北", x: 66.5, y: 33.4, dx: -52, dy: -12, summary: "连接都城与地方的过渡地带，寺观、长城沿线和皇家建筑外围体系都很重要。", type: "代表类型：寺观 / 山地建筑 / 长城沿线", spot: "代表建筑：承德避暑山庄、正定古建群" },
  { name: "山西", x: 59.2, y: 35.2, dx: -40, dy: -14, summary: "中国古代木构遗存最集中的地区之一，适合从梁架、斗拱和早期殿堂比例建立结构审美。", type: "代表类型：寺观 / 木构 / 塔", spot: "代表建筑：佛光寺、南禅寺、应县木塔" },
  { name: "内蒙古", x: 56.2, y: 24.2, dx: -50, dy: -18, summary: "草原与边地城镇共存，建筑更强调地理跨度和边疆文化交流。", type: "代表类型：寺庙 / 王府 / 边地城镇", spot: "代表建筑：大召寺、五塔寺" },
  { name: "辽宁", x: 78.9, y: 25.8, dx: 10, dy: -14, summary: "东北地区的皇家遗存和近代城市格局都很典型，适合看气候与材料适应。", type: "代表类型：宫殿 / 城市建筑", spot: "代表建筑：沈阳故宫" },
  { name: "吉林", x: 83.7, y: 21.8, dx: 10, dy: -12, summary: "寒地环境会明显影响建筑围护和聚落尺度，适合和华北建筑对照观看。", type: "代表类型：寺庙 / 聚落", spot: "代表建筑：北山古庙群" },
  { name: "黑龙江", x: 86.6, y: 15.1, dx: -8, dy: -16, summary: "更适合从地域边界和近现代城市层次理解建筑形态变化。", type: "代表类型：宗教建筑 / 城市遗存", spot: "代表建筑：文庙、极乐寺" },
  { name: "上海", x: 77.2, y: 54.6, dx: 10, dy: -14, summary: "江南城市纹理和近代租界空间叠加，适合看传统与现代如何并置。", type: "代表类型：园林 / 城市宅院", spot: "代表建筑：豫园" },
  { name: "江苏", x: 74.3, y: 50.3, dx: -42, dy: -16, summary: "园林、书院、古镇和城厢建筑并存，最适合练习从路径读空间。", type: "代表类型：园林 / 民居 / 古镇", spot: "代表建筑：拙政园、网师园" },
  { name: "浙江", x: 76.3, y: 57.9, dx: 10, dy: -14, summary: "山水、书院、古村和临水聚落一起构成细密而灵动的江南建筑景观。", type: "代表类型：园林 / 古村 / 书院", spot: "代表建筑：保国寺、乌镇古建" },
  { name: "安徽", x: 69.7, y: 52.1, dx: -36, dy: 8, summary: "徽派建筑是地区观看最直接的入口，马头墙、水系和村落秩序很鲜明。", type: "代表类型：民居 / 祠堂 / 村落", spot: "代表建筑：宏村、西递" },
  { name: "福建", x: 72.4, y: 64.7, dx: 10, dy: -14, summary: "围合聚居和山地防御性布局很突出，适合从共居系统理解民居建筑。", type: "代表类型：土楼 / 宗族民居", spot: "代表建筑：永定土楼、南靖土楼" },
  { name: "江西", x: 67.3, y: 58.9, dx: -30, dy: -16, summary: "书院、祠堂和村落体系都很完整，适合看儒家空间如何进入地方日常。", type: "代表类型：书院 / 祠堂 / 民居", spot: "代表建筑：白鹿洞书院、婺源古建" },
  { name: "山东", x: 74.4, y: 39.4, dx: 10, dy: -14, summary: "山海之间的楼阁与礼制建筑都很鲜明，适合看高台与观景关系。", type: "代表类型：楼阁 / 庙宇 / 城厢", spot: "代表建筑：蓬莱阁、曲阜孔庙" },
  { name: "河南", x: 63.8, y: 43.2, dx: -34, dy: -16, summary: "中原地带建筑类型极丰富，适合从古都遗存和宗教建筑看文化叠层。", type: "代表类型：寺塔 / 古都建筑", spot: "代表建筑：少林寺、开封铁塔" },
  { name: "湖北", x: 60.2, y: 53.1, dx: -34, dy: -16, summary: "长江中游的楼阁与山地寺观很有代表性，适合看临水与登高视线。", type: "代表类型：楼阁 / 寺观", spot: "代表建筑：黄鹤楼、武当山古建群" },
  { name: "湖南", x: 57.2, y: 60.1, dx: -34, dy: -16, summary: "山水和楼阁的关系很典型，适合看文人记忆如何叠加到建筑上。", type: "代表类型：楼阁 / 山水建筑", spot: "代表建筑：岳阳楼" },
  { name: "广东", x: 61.2, y: 73.8, dx: 10, dy: -14, summary: "宗祠、骑楼和岭南园林共同塑造出更适应湿热气候的建筑面貌。", type: "代表类型：宗祠 / 骑楼 / 园林", spot: "代表建筑：陈家祠、可园" },
  { name: "广西", x: 53.1, y: 70.9, dx: -38, dy: -16, summary: "山地聚落和少数民族建筑并存，适合从地貌和生活方式读建筑。", type: "代表类型：鼓楼 / 风雨桥 / 聚落", spot: "代表建筑：程阳风雨桥" },
  { name: "海南", x: 58.5, y: 84.2, dx: 10, dy: -14, summary: "热带气候让建筑更强调通风、遮阴和与海洋环境的适应。", type: "代表类型：民居 / 宗教建筑", spot: "代表建筑：骑楼老街、文庙" },
  { name: "重庆", x: 51.4, y: 56.4, dx: -26, dy: 10, summary: "山城空间最适合理解建筑如何被坡地和城市高差重新组织。", type: "代表类型：吊脚楼 / 山城聚落", spot: "代表建筑：湖广会馆、磁器口古建" },
  { name: "四川", x: 43.2, y: 53.4, dx: -34, dy: -16, summary: "盆地城市、寺观和山地聚落都很丰富，适合看地形如何改变建筑尺度。", type: "代表类型：寺观 / 山地聚落", spot: "代表建筑：乐山古建、青城山建筑群" },
  { name: "贵州", x: 46.8, y: 63.1, dx: -26, dy: 10, summary: "高差和湿润环境让聚落更依赖木构和架空空间，地方性很强。", type: "代表类型：鼓楼 / 吊脚楼 / 村寨", spot: "代表建筑：西江苗寨、肇兴侗寨" },
  { name: "云南", x: 35.2, y: 71.3, dx: -28, dy: -16, summary: "多民族和多地貌共同塑造了极丰富的地方建筑系统，适合从气质进入。", type: "代表类型：民居 / 寺庙 / 古城", spot: "代表建筑：丽江古城、大理古建" },
  { name: "西藏", x: 19.3, y: 57.1, dx: -26, dy: -16, summary: "高原环境让建筑和宗教空间高度一体，体量、色彩和地形关系都极强。", type: "代表类型：宫殿 / 寺庙", spot: "代表建筑：布达拉宫、大昭寺" },
  { name: "陕西", x: 49.4, y: 43.5, dx: -34, dy: -16, summary: "古都遗存和唐宋陵寝体系都很关键，适合从都城尺度进入。", type: "代表类型：古都 / 塔寺 / 陵寝", spot: "代表建筑：大雁塔、华清宫" },
  { name: "甘肃", x: 36.1, y: 36.5, dx: -32, dy: -16, summary: "丝路沿线建筑更适合放在文化交流和边地交通体系里理解。", type: "代表类型：石窟 / 佛寺 / 边塞遗存", spot: "代表建筑：麦积山石窟、炳灵寺" },
  { name: "青海", x: 28.4, y: 43.8, dx: -26, dy: -16, summary: "高原与多民族文化交汇，建筑会更直接地显出地理边界感。", type: "代表类型：寺院 / 聚落", spot: "代表建筑：塔尔寺" },
  { name: "宁夏", x: 44.1, y: 37.6, dx: 10, dy: -14, summary: "黄河沿线与西北边地联系紧密，适合看城市遗存和宗教建筑并置。", type: "代表类型：寺塔 / 城市遗存", spot: "代表建筑：承天寺塔" },
  { name: "新疆", x: 16.4, y: 27.3, dx: -26, dy: -16, summary: "绿洲城市、清真寺和边疆城镇共同构成完全不同于中原的建筑体验。", type: "代表类型：清真寺 / 城市街区", spot: "代表建筑：艾提尕尔清真寺" },
  { name: "台湾", x: 82.8, y: 74.5, dx: 10, dy: -14, summary: "闽南建筑、庙宇和山海聚落共同形成紧凑而鲜明的建筑印象。", type: "代表类型：庙宇 / 聚落", spot: "代表建筑：林安泰古厝、龙山寺" },
  { name: "香港", x: 63.6, y: 76.2, dx: 10, dy: 8, summary: "高密度城市背景下的传统建筑残留更适合从城市更新角度去看。", type: "代表类型：庙宇 / 祠堂", spot: "代表建筑：文武庙、屏山文物径" },
  { name: "澳门", x: 61.7, y: 77.1, dx: -28, dy: 8, summary: "中西混合语境非常突出，适合把地方建筑放在跨文化交流里理解。", type: "代表类型：庙宇 / 城市街区", spot: "代表建筑：郑家大屋、妈阁庙" }
];

const quyuFenleiShuju = [
  {
    title: "华北",
    intro: "适合从礼制、都城和早期木构进入，秩序感最强。",
    provinceNames: ["北京", "天津", "河北", "山西", "内蒙古"],
    focus: "中轴、台基、斗拱、寺观群",
    spots: "故宫太和殿、佛光寺、承德避暑山庄"
  },
  {
    title: "东北",
    intro: "皇家遗存与寒地城市共存，适合看气候和尺度适应。",
    provinceNames: ["辽宁", "吉林", "黑龙江"],
    focus: "宫殿格局、寒地围护、近代城市纹理",
    spots: "沈阳故宫、北山古庙群、文庙"
  },
  {
    title: "华东",
    intro: "园林、书院、古村和城厢建筑最密集，路径感和细节感最丰富。",
    provinceNames: ["上海", "江苏", "浙江", "安徽", "福建", "江西", "山东"],
    focus: "园林借景、徽派民居、土楼围合、书院体系",
    spots: "拙政园、宏村、永定土楼、蓬莱阁"
  },
  {
    title: "华中",
    intro: "中原与长江中游叠在一起，适合看古都、楼阁和宗教建筑的连续性。",
    provinceNames: ["河南", "湖北", "湖南"],
    focus: "古都遗存、楼阁视线、山地寺观",
    spots: "少林寺、黄鹤楼、岳阳楼"
  },
  {
    title: "华南",
    intro: "湿热气候下的宗祠、骑楼和海岛民居，最适合读生活方式。",
    provinceNames: ["广东", "广西", "海南"],
    focus: "宗祠体系、骑楼街区、风雨桥、通风遮阴",
    spots: "陈家祠、程阳风雨桥、骑楼老街"
  },
  {
    title: "西南",
    intro: "山地、坡地和多民族聚落最鲜明，建筑和地形关系极紧。",
    provinceNames: ["重庆", "四川", "贵州", "云南", "西藏"],
    focus: "吊脚楼、山城高差、古城聚落、宗教建筑",
    spots: "湖广会馆、青城山建筑群、布达拉宫"
  },
  {
    title: "西北",
    intro: "丝路、石窟和边地城镇把建筑放进更大的交通与文化交换里。",
    provinceNames: ["陕西", "甘肃", "青海", "宁夏", "新疆"],
    focus: "塔寺、石窟、绿洲城市、边塞遗存",
    spots: "大雁塔、麦积山石窟、塔尔寺、艾提尕尔清真寺"
  },
  {
    title: "港澳台",
    intro: "跨海文化、庙宇系统和高密城市语境，共同形成另一种建筑观看方式。",
    provinceNames: ["香港", "澳门", "台湾"],
    focus: "庙宇、街区叠层、山海聚落",
    spots: "文武庙、郑家大屋、龙山寺"
  }
];

const lunboGuidao = document.querySelector("#lunboGuidao");
const lunboNeirong = document.querySelector("#lunboNeirong");
const lunboMeibiao = document.querySelector("#lunboMeibiao");
const lunboFubiaoti = document.querySelector("#lunboFubiaoti");
const lunboBiaoti = document.querySelector("#lunboBiaoti");
const lunboWenan = document.querySelector("#lunboWenan");
const lunboXiangjie = document.querySelector("#lunboXiangjie");
const lunboBiaoqian = document.querySelector("#lunboBiaoqian");
const lunboDianzu = document.querySelector("#lunboDianzu");
const lunboJishu = document.querySelector("#lunboJishu");
const lunboQian = document.querySelector("#lunboQian");
const lunboHou = document.querySelector("#lunboHou");
const lunboQu = document.querySelector("#lunbo");

const anniuDiqu = document.querySelector("#anniuDiqu");
const anniuGouzao = document.querySelector("#anniuGouzao");
const anniuTese = document.querySelector("#anniuTese");
const diquZhanshi = document.querySelector("#diquZhanshi");
const anniuDituShitu = document.querySelector("#anniuDituShitu");
const anniuAnquyu = document.querySelector("#anniuAnquyu");
const dituShituMianban = document.querySelector("#dituShituMianban");
const quyuFenleiMianban = document.querySelector("#quyuFenleiMianban");
const dituDianceng = document.querySelector("#dituDianceng");
const quyuFenleiWangge = document.querySelector("#quyuFenleiWangge");
const shengfenMingcheng = document.querySelector("#shengfenMingcheng");
const shengfenJianjie = document.querySelector("#shengfenJianjie");
const shengfenLeixing = document.querySelector("#shengfenLeixing");
const shengfenDaibiao = document.querySelector("#shengfenDaibiao");
const shengfenXiangqingLianjie = document.querySelector("#shengfenXiangqingLianjie");

const shengfenYeLujing = {
  "北京": "./area/beijing.html",
  "天津": "./area/tianjin.html",
  "河北": "./area/hebei.html",
  "山西": "./area/shanxi.html",
  "内蒙古": "./area/neimenggu.html",
  "辽宁": "./area/liaoning.html",
  "吉林": "./area/jilin.html",
  "黑龙江": "./area/heilongjiang.html",
  "上海": "./area/shanghai.html",
  "江苏": "./area/jiangsu.html",
  "浙江": "./area/zhejiang.html",
  "安徽": "./area/anhui.html",
  "福建": "./area/fujian.html",
  "江西": "./area/jiangxi.html",
  "山东": "./area/shandong.html",
  "河南": "./area/henan.html",
  "湖北": "./area/hubei.html",
  "湖南": "./area/hunan.html",
  "广东": "./area/guangdong.html",
  "广西": "./area/guangxi.html",
  "海南": "./area/hainan.html",
  "重庆": "./area/chongqing.html",
  "四川": "./area/sichuan.html",
  "贵州": "./area/guizhou.html",
  "云南": "./area/yunnan.html",
  "西藏": "./area/xizang.html",
  "陕西": "./area/shaanxi.html",
  "甘肃": "./area/gansu.html",
  "青海": "./area/qinghai.html",
  "宁夏": "./area/ningxia.html",
  "新疆": "./area/xinjiang.html",
  "台湾": "./area/taiwan.html",
  "香港": "./area/xianggang.html",
  "澳门": "./area/aomen.html"
};

const zhuangtai = {
  dangqian: 0,
  dangqianShengfen: "北京",
  diquShitu: "ditu"
};

let lunboDingshiqi;

function qudeShengfenXiangqingLujing(shengfenMingcheng) {
  return shengfenYeLujing[shengfenMingcheng] || "./area/index.html";
}

function shengchengHuandeng() {
  lunboGuidao.innerHTML = lunboShuju
    .map(
      (item, index) => `
        <figure class="lunbo-qu__huandeng ${index === zhuangtai.dangqian ? "is-active" : ""}" data-index="${index}">
          <img src="${item.image}" alt="${item.alt}" loading="${index === 0 ? "eager" : "lazy"}" />
        </figure>
      `
    )
    .join("");

  lunboDianzu.innerHTML = lunboShuju
    .map(
      (_, index) => `
        <button
          class="lunbo-qu__dian ${index === zhuangtai.dangqian ? "is-active" : ""}"
          type="button"
          data-index="${index}"
          aria-label="切换到第 ${index + 1} 张"
        ></button>
      `
    )
    .join("");
}

function gengxinMengceng() {
  const dangqian = lunboShuju[zhuangtai.dangqian];
  lunboNeirong.classList.remove("is-active");
  void lunboNeirong.offsetWidth;
  lunboNeirong.classList.add("is-active");
  lunboMeibiao.textContent = dangqian.eyebrow;
  lunboFubiaoti.textContent = dangqian.subtitle;
  lunboBiaoti.textContent = dangqian.title;
  lunboWenan.textContent = dangqian.text;
  lunboXiangjie.textContent = dangqian.detail;
  lunboBiaoqian.innerHTML = dangqian.tags.map((item) => `<span>${item}</span>`).join("");
  lunboJishu.textContent = `${String(zhuangtai.dangqian + 1).padStart(2, "0")} / ${String(lunboShuju.length).padStart(2, "0")}`;
}

function qiehuanLunbo(index) {
  zhuangtai.dangqian = (index + lunboShuju.length) % lunboShuju.length;
  lunboGuidao.querySelectorAll(".lunbo-qu__huandeng").forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === zhuangtai.dangqian);
  });
  lunboDianzu.querySelectorAll(".lunbo-qu__dian").forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === zhuangtai.dangqian);
  });
  gengxinMengceng();
}

function qidongLunbo() {
  clearInterval(lunboDingshiqi);
  lunboDingshiqi = window.setInterval(() => {
    qiehuanLunbo(zhuangtai.dangqian + 1);
  }, 4200);
}

function shengchengDianwei() {
  dituDianceng.innerHTML = shengfenShuju
    .map(
      (item) => `
        <button
          class="shengfen-dian ${item.name === zhuangtai.dangqianShengfen ? "is-active" : ""}"
          type="button"
          data-shengfen="${item.name}"
          aria-label="查看 ${item.name} 古建筑信息"
          style="left:${item.x}%; top:${item.y}%"
        >
          <span class="shengfen-dian__biaoqian" style="--biaoqian-x:${item.dx}px; --biaoqian-y:${item.dy}px">${item.name}</span>
        </button>
      `
    )
    .join("");
}

function shengchengQuyuFenlei() {
  quyuFenleiWangge.innerHTML = quyuFenleiShuju
    .map(
      (item) => `
        <article class="quyu-fenlei__ka">
          <p class="quyu-fenlei__meibiao">${item.title}</p>
          <h4>${item.intro}</h4>
          <p class="quyu-fenlei__zhongdian">观看重点：${item.focus}</p>
          <p class="quyu-fenlei__jianzhu">推荐建筑：${item.spots}</p>
          <div class="quyu-fenlei__shengfenzu">
            ${item.provinceNames
              .map(
                (shengfen) =>
                  `<a class="quyu-fenlei__shengfen" href="${qudeShengfenXiangqingLujing(shengfen)}">${shengfen}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function gengxinShengfenXinxi() {
  const dangqian = shengfenShuju.find((item) => item.name === zhuangtai.dangqianShengfen) || shengfenShuju[0];
  shengfenMingcheng.textContent = dangqian.name;
  shengfenJianjie.textContent = dangqian.summary;
  shengfenLeixing.textContent = dangqian.type;
  shengfenDaibiao.textContent = dangqian.spot;
  if (shengfenXiangqingLianjie) {
    shengfenXiangqingLianjie.href = qudeShengfenXiangqingLujing(dangqian.name);
    shengfenXiangqingLianjie.textContent = `进入${dangqian.name}详情`;
  }
  dituDianceng.querySelectorAll(".shengfen-dian").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.shengfen === dangqian.name);
  });
}

function qiehuanDiquShitu(moshi) {
  zhuangtai.diquShitu = moshi;
  anniuDituShitu.classList.toggle("is-active", moshi === "ditu");
  anniuAnquyu.classList.toggle("is-active", moshi === "quyu");
  dituShituMianban.classList.toggle("is-hidden", moshi !== "ditu");
  quyuFenleiMianban.classList.toggle("is-hidden", moshi !== "quyu");
}

function dakaiDiquZhanshi() {
  anniuDiqu.classList.add("is-active");
  anniuGouzao.classList.remove("is-active");
  anniuTese.classList.remove("is-active");
  diquZhanshi.classList.remove("is-hidden");
  qiehuanDiquShitu("ditu");
  diquZhanshi.scrollIntoView({ behavior: "smooth", block: "start" });
}

function shouqiDiquZhanshi(mubiaoAnniu) {
  anniuDiqu.classList.remove("is-active");
  anniuGouzao.classList.toggle("is-active", mubiaoAnniu === "gouzao");
  anniuTese.classList.toggle("is-active", mubiaoAnniu === "tese");
  diquZhanshi.classList.add("is-hidden");
}

function bangdingShijian() {
  lunboQian.addEventListener("click", () => {
    qiehuanLunbo(zhuangtai.dangqian - 1);
    qidongLunbo();
  });

  lunboHou.addEventListener("click", () => {
    qiehuanLunbo(zhuangtai.dangqian + 1);
    qidongLunbo();
  });

  lunboDianzu.addEventListener("click", (event) => {
    const mubiao = event.target.closest("[data-index]");
    if (!mubiao) return;
    qiehuanLunbo(Number(mubiao.dataset.index));
    qidongLunbo();
  });

  lunboQu.addEventListener("mouseenter", () => clearInterval(lunboDingshiqi));
  lunboQu.addEventListener("mouseleave", qidongLunbo);

  anniuDiqu.addEventListener("click", dakaiDiquZhanshi);
  anniuGouzao.addEventListener("click", () => shouqiDiquZhanshi("gouzao"));
  anniuTese.addEventListener("click", () => shouqiDiquZhanshi("tese"));

  anniuDituShitu.addEventListener("click", () => qiehuanDiquShitu("ditu"));
  anniuAnquyu.addEventListener("click", () => qiehuanDiquShitu("quyu"));

  dituDianceng.addEventListener("click", (event) => {
    const mubiao = event.target.closest("[data-shengfen]");
    if (!mubiao) return;
    zhuangtai.dangqianShengfen = mubiao.dataset.shengfen;
    gengxinShengfenXinxi();
  });

  quyuFenleiWangge.addEventListener("click", (event) => {
    const mubiao = event.target.closest("[data-shengfen]");
    if (!mubiao) return;
    zhuangtai.dangqianShengfen = mubiao.dataset.shengfen;
    gengxinShengfenXinxi();
    qiehuanDiquShitu("ditu");
  });
}

shengchengHuandeng();
gengxinMengceng();
shengchengDianwei();
shengchengQuyuFenlei();
gengxinShengfenXinxi();
bangdingShijian();
qidongLunbo();
