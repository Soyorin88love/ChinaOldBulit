const jianzhuShuju = [
  {
    id: "forbidden-city",
    name: "北京故宫太和殿",
    city: "北京",
    era: "明清",
    dynasty: "明清",
    type: "宫殿",
    summary: "中轴秩序最强烈的宫殿建筑之一，展示了等级、尺度与色彩控制的成熟体系。",
    tags: ["重檐庑殿顶", "中轴", "皇家建筑"],
    highlight: "看大屋顶与台基的组合，理解礼制如何通过建筑被放大。",
    detail:
      "太和殿是故宫外朝核心建筑。高台基、重檐屋顶与宽阔殿身共同建立了庄严秩序，金黄琉璃瓦和朱柱形成强烈视觉记忆。",
    watch: "建议从太和门前远望整体，再靠近观察台基、栏杆与梁架层次。",
    protect: "高游客密度下，保护重点在于人流组织、彩画维护与结构监测。"
  },
  {
    id: "foguang",
    name: "佛光寺东大殿",
    city: "山西五台",
    era: "唐",
    dynasty: "唐",
    type: "寺观",
    summary: "中国现存最重要的唐代木构之一，梁架比例浑厚，屋顶出檐深远。",
    tags: ["唐代木构", "斗拱", "深远出檐"],
    highlight: "看柱网与屋檐，不需要装饰也能感受到强大结构美。",
    detail:
      "东大殿建于唐代，保留了成熟木构系统的早期风貌。整座建筑体量凝练，构架逻辑极清晰，是理解唐风建筑的关键样本。",
    watch: "先看侧面屋顶曲线，再看檐下斗拱和柱间尺度。",
    protect: "山地气候与木构老化使长期监测和预防性修缮非常关键。"
  },
  {
    id: "nanchan",
    name: "南禅寺大殿",
    city: "山西五台",
    era: "唐",
    dynasty: "唐",
    type: "寺观",
    summary: "尺度不大，却完整保存了唐代木构的纯粹气质，是观察早期殿堂的理想对象。",
    tags: ["简洁", "早期木构", "山西"],
    highlight: "它没有夸张体量，但能清楚显示柱、梁、檐之间的真实关系。",
    detail:
      "南禅寺大殿以简洁著称，构件直接、装饰克制。对于初学者来说，非常适合建立“木构建筑并非只看华丽外表”的认识。",
    watch: "留意建筑小尺度下仍然稳定有力的比例。",
    protect: "小型建筑更怕环境湿度变化和游客过度贴近。"
  },
  {
    id: "yingxian",
    name: "应县木塔",
    city: "山西朔州",
    era: "辽",
    dynasty: "辽",
    type: "塔楼",
    summary: "高耸的木塔把木构层级、抗震智慧与宗教空间结合到一起。",
    tags: ["木塔", "辽代", "高层木构"],
    highlight: "重点不是“高”，而是多层木构如何层层卸力并保持挺拔。",
    detail:
      "应县木塔是现存最高最古老的全木结构楼阁式塔。它通过复杂梁架与暗层组织形成稳定结构，是木构营造智慧的集中体现。",
    watch: "从底层仰看塔檐层叠关系，再观察立面节奏变化。",
    protect: "风荷载、木材老化和游客影响都要求持续监测。"
  },
  {
    id: "xuankong",
    name: "悬空寺",
    city: "山西大同",
    era: "北魏至明清",
    dynasty: "北朝至明清",
    type: "寺观",
    summary: "依崖而建的极端选址，让建筑和地形成为一体。",
    tags: ["依崖建筑", "栈道", "复合宗教"],
    highlight: "看“地形如何决定建筑”，它几乎是山体剖面的一部分。",
    detail:
      "悬空寺通过木梁、栈道和崖体共同构成空间系统，视觉上轻险，实际却遵循严密支撑逻辑。它也是多教合一的独特文化场所。",
    watch: "适合从远处整体看地形关系，再近看栈道与悬挑构件。",
    protect: "岩体稳定与极端天气是长期保护的核心问题。"
  },
  {
    id: "zhuozheng",
    name: "拙政园",
    city: "江苏苏州",
    era: "明",
    dynasty: "明",
    type: "园林",
    summary: "园林建筑不追求压迫感，而是通过水面、花木和小尺度建筑建立流动观看。",
    tags: ["园林", "借景", "水院"],
    highlight: "在这里要看“走动后景色如何变化”，而不是只看单体建筑。",
    detail:
      "拙政园通过厅、亭、廊、桥和水体组织出层层景框。建筑不是主角，却是把自然转化为可观空间的关键媒介。",
    watch: "建议沿廊缓慢移动，感受框景与借景不断切换。",
    protect: "园林保护不仅是建筑维护，也包括植被、水系与游线控制。"
  },
  {
    id: "wangshi",
    name: "网师园",
    city: "江苏苏州",
    era: "清",
    dynasty: "清",
    type: "园林",
    summary: "以更紧凑的尺度体现江南园林“以小见大”的空间组织能力。",
    tags: ["小园林", "紧凑布局", "曲折空间"],
    highlight: "建筑、墙体与水面一起制造“近中见远”的错觉。",
    detail:
      "网师园的精妙之处在于有限面积中仍能完成多次空间转折。门洞、漏窗、廊道与亭台形成连续观看路径。",
    watch: "观察漏窗和门框如何把景色裁切成一幅幅画面。",
    protect: "高密度细部构造需要长期细致维护。"
  },
  {
    id: "tulou",
    name: "永定土楼",
    city: "福建龙岩",
    era: "明清",
    dynasty: "明清",
    type: "民居",
    summary: "夯土围合出的集体居住体系，把防御、家族和日常生活整合在同一建筑中。",
    tags: ["夯土", "围合式", "聚族而居"],
    highlight: "看圆与方的围合关系，就能理解土楼为何既像堡垒又像家。",
    detail:
      "福建土楼多为大型围合式民居，外墙厚重，内部木构环绕天井布置。它是一种兼顾防御、协作与生活礼序的地方建筑类型。",
    watch: "最好站在中庭观察环形廊道与房间层次。",
    protect: "传统材料修补、排水与社区延续是保护的关键。"
  },
  {
    id: "hongcun",
    name: "宏村月沼民居群",
    city: "安徽黄山",
    era: "明清",
    dynasty: "明清",
    type: "民居",
    summary: "徽派民居把水系、巷道和白墙灰瓦组织成极具识别度的生活景观。",
    tags: ["徽派", "马头墙", "村落水系"],
    highlight: "不要只拍白墙黑瓦，更要看村落如何依水组织日常空间。",
    detail:
      "宏村的价值在于整体村落格局。住宅、祠堂、水圳和月沼共同构成连续的空间系统，展示了典型徽州生活结构。",
    watch: "清晨或傍晚更容易观察墙体、倒影和巷道关系。",
    protect: "旅游商业化与原住民生活平衡始终是重点议题。"
  },
  {
    id: "penglai",
    name: "蓬莱阁",
    city: "山东烟台",
    era: "宋至清",
    dynasty: "宋至清",
    type: "塔楼",
    summary: "阁楼建筑与海岸地形结合，形成强烈的临海观景体验。",
    tags: ["临海", "阁楼", "山海关系"],
    highlight: "它展示了建筑如何把自然奇景转化为观看舞台。",
    detail:
      "蓬莱阁依山临海，既是建筑也是景观节点。它的价值不仅在单体形式，更在“海天一色”中的位置与视线组织。",
    watch: "优先看阁与海平线、岩岸的关系。",
    protect: "海风、盐雾和游客压力都对外部构件有持续影响。"
  },
  {
    id: "yueyang",
    name: "岳阳楼",
    city: "湖南岳阳",
    era: "宋至清",
    dynasty: "宋至清",
    type: "塔楼",
    summary: "文学记忆与楼阁空间叠加，使建筑成为文化想象的一部分。",
    tags: ["楼阁", "临湖", "文人传统"],
    highlight: "注意楼阁层层出挑的屋檐如何强化远眺体验。",
    detail:
      "岳阳楼是典型楼阁式建筑，因文人书写而获得更强文化象征。它也是理解“建筑如何承载文学记忆”的好例子。",
    watch: "从楼外看檐层节奏，再进入内部感受视线高度变化。",
    protect: "临水环境对木构耐久性提出更高要求。"
  },
  {
    id: "tiantan",
    name: "祈年殿",
    city: "北京",
    era: "明清",
    dynasty: "明清",
    type: "宫殿",
    summary: "圆形大木构与祭天空间结合，几何秩序非常鲜明。",
    tags: ["祭祀建筑", "圆形平面", "蓝瓦"],
    highlight: "观察圆形体量、台基和色彩系统如何构成独特气质。",
    detail:
      "祈年殿以圆形平面和层层上收的屋顶著称，与天坛整体祭祀空间共同构成极强的象征意味，体现礼制建筑的另一种表达。",
    watch: "远看整体比例，近看色彩与柱列组织。",
    protect: "大型木构节点与彩画保存同样重要。"
  }
];

const tupianMulu = {
  supremeHarmony: {
    src: "./assets/images/hall-of-supreme-harmony.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Hall_of_Supreme_Harmony_(20241127120000).jpg",
    title: "故宫太和殿",
    credit: "Wpcpey",
    license: "CC BY-SA 4.0"
  },
  qinian: {
    src: "./assets/images/hall-of-prayer-for-good-harvests.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Temple_of_Heaven_-_Hall_of_Prayer_for_Good_Harvests_01_(cropped).jpg",
    title: "天坛祈年殿",
    credit: "xiquinhosilva",
    license: "CC BY 2.0"
  },
  foguang: {
    src: "./assets/images/foguang-temple-east-hall.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Foguang_Temple_4.JPG",
    title: "佛光寺东大殿",
    credit: "Angus Cepka",
    license: "CC BY-SA 2.5"
  },
  humble: {
    src: "./assets/images/humble-administrators-garden.jpg",
    source: "https://commons.wikimedia.org/wiki/File:20230329_Humble_Administrator%27s_Garden_14.jpg",
    title: "拙政园",
    credit: "N509FZ",
    license: "CC BY-SA 4.0"
  },
  wangshi: {
    src: "./assets/images/master-of-the-nets-garden.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Master_of_the_Nets_Garden.jpg",
    title: "网师园",
    credit: "Bobak Ha'Eri",
    license: "CC BY 2.5"
  },
  tulou: {
    src: "./assets/images/fujian-tulou.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Fujian_Tulou.jpg",
    title: "福建土楼",
    credit: "CEphoto, Uwe Aranas",
    license: "CC BY-SA 3.0"
  },
  hongcun: {
    src: "./assets/images/hongcun-moon-pond.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Moon_Pond,_Hongcun.jpg",
    title: "宏村月沼",
    credit: "Minghong",
    license: "CC BY-SA 3.0"
  },
  hangingTemple: {
    src: "./assets/images/hanging-temple.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Hanging_Temple_-_panoramio_(1).jpg",
    title: "悬空寺",
    credit: "静雨 from Shanghai, China",
    license: "CC BY 3.0"
  },
  yueyang: {
    src: "./assets/images/yueyang-tower.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Frontal_view_of_Yueyang_Tower,_Hunan,_China1.jpg",
    title: "岳阳楼",
    credit: "Huangdan2060",
    license: "CC0"
  }
};

const tupianYingshe = {
  "forbidden-city": "supremeHarmony",
  foguang: "foguang",
  nanchan: "foguang",
  yingxian: "foguang",
  xuankong: "hangingTemple",
  zhuozheng: "humble",
  wangshi: "wangshi",
  tulou: "tulou",
  hongcun: "hongcun",
  penglai: "yueyang",
  yueyang: "yueyang",
  tiantan: "qinian"
};

const jingxuanLunbo = [
  {
    buildingId: "forbidden-city",
    photo: tupianMulu.supremeHarmony,
    title: "礼制尺度",
    text: "高台基、重檐与中轴，把皇家建筑的秩序感推到极致。"
  },
  {
    buildingId: "foguang",
    photo: tupianMulu.foguang,
    title: "唐风木构",
    text: "不靠繁复装饰，仅凭比例、屋檐和结构就足够震撼。"
  },
  {
    buildingId: "zhuozheng",
    photo: tupianMulu.humble,
    title: "园林借景",
    text: "建筑成为观看自然的框架，步移景异才是核心体验。"
  },
  {
    buildingId: "tulou",
    photo: tupianMulu.tulou,
    title: "聚落围合",
    text: "厚重外墙与内部木构并存，防御与日常生活被整合在一起。"
  }
];

const jiugongTupian = [
  {
    buildingId: "forbidden-city",
    photo: tupianMulu.supremeHarmony,
    title: "太和殿",
    text: "礼制与尺度"
  },
  {
    buildingId: "tiantan",
    photo: tupianMulu.qinian,
    title: "祈年殿",
    text: "祭祀与几何"
  },
  {
    buildingId: "foguang",
    photo: tupianMulu.foguang,
    title: "佛光寺",
    text: "唐风木构"
  },
  {
    buildingId: "zhuozheng",
    photo: tupianMulu.humble,
    title: "拙政园",
    text: "园林借景"
  },
  {
    buildingId: "wangshi",
    photo: tupianMulu.wangshi,
    title: "网师园",
    text: "以小见大"
  },
  {
    buildingId: "tulou",
    photo: tupianMulu.tulou,
    title: "福建土楼",
    text: "围合聚居"
  },
  {
    buildingId: "hongcun",
    photo: tupianMulu.hongcun,
    title: "宏村月沼",
    text: "徽派村落"
  },
  {
    buildingId: "xuankong",
    photo: tupianMulu.hangingTemple,
    title: "悬空寺",
    text: "依崖而建"
  },
  {
    buildingId: "yueyang",
    photo: tupianMulu.yueyang,
    title: "岳阳楼",
    text: "楼阁远眺"
  }
];

const zhantingGushi = [
  {
    eyebrow: "Act I",
    title: "先看秩序，古建筑从来不是零散单体。",
    lead:
      "宫殿建筑最先抓住人的不是细节，而是被精确组织过的抵达路径。中轴、门阙、月台和重檐，让身体在靠近时自然进入一种被礼制控制的节奏。",
    quote: "从远望开始，你看到的不是一栋房子，而是一整套被放大的秩序。",
    photo: tupianMulu.supremeHarmony,
    tags: ["中轴", "台基", "重檐"],
    notes: [
      "远看时先抓整体轮廓，判断屋顶比例和台基高度。",
      "行进过程中留意门、院、殿之间的层层递进。",
      "真正的庄严感往往来自序列，而不是装饰堆砌。"
    ],
    asideTitle: "代表场景",
    asideText: "故宫太和殿、祈年殿一类建筑最适合训练这种“先读秩序”的观看方式。"
  },
  {
    eyebrow: "Act II",
    title: "再看结构，木构的力量藏在檐下阴影里。",
    lead:
      "当你靠近建筑，真正决定气质的是结构节奏。柱网、梁架、斗拱和深远出檐共同制造出稳定、弹性和阴影层次，中国木构的技术之美就在这里显现。",
    quote: "斗拱不是挂在檐下的花边，而是屋顶重量被优雅分解的痕迹。",
    photo: tupianMulu.foguang,
    tags: ["斗拱", "木构", "深檐"],
    notes: [
      "观察斗拱时，先看它如何承托檐口，而不是只记名称。",
      "柱距和梁架比例决定了空间的呼吸感。",
      "唐代木构尤其适合看“少装饰但极有力量”的状态。"
    ],
    asideTitle: "代表场景",
    asideText: "佛光寺东大殿这样的实例，最能把结构逻辑直接暴露给观看者。"
  },
  {
    eyebrow: "Act III",
    title: "转入园林，建筑开始为风景服务。",
    lead:
      "到了江南园林，建筑不再用宏大压迫你，而是不断引导你转身、停顿、借景。亭、廊、窗洞和水面一起工作，让风景成为被组织过的连续体验。",
    quote: "园林里的建筑像镜头，负责裁切、框住，再慢慢放出景色。",
    photo: tupianMulu.humble,
    tags: ["借景", "廊道", "步移景异"],
    notes: [
      "不要停在原地拍照，真正的看点在移动后的变化。",
      "门洞、漏窗和廊柱会不断把景色重新切成画面。",
      "园林的节奏是轻的，但空间控制一点也不松。"
    ],
    asideTitle: "代表场景",
    asideText: "拙政园、网师园适合从“连续镜头”的角度去理解建筑与自然的关系。"
  },
  {
    eyebrow: "Act IV",
    title: "最后回到生活，古建筑也曾是被真实使用的日常空间。",
    lead:
      "民居和聚落把防御、协作、礼序和居住都塞进同一套建筑系统里。土楼、徽派村落这类类型最能说明，古建筑不是舞台布景，而是完整生活方式的外壳。",
    quote: "真正的古建现场，不只有美感，还有家族、天气、邻里和时间留下的痕迹。",
    photo: tupianMulu.tulou,
    tags: ["聚居", "围合", "地方生活"],
    notes: [
      "先看整体围合，再进入内部理解廊道和天井的组织。",
      "注意建筑如何应对气候、防御和人际关系。",
      "村落尺度上的水系与巷道，和单体民居同样重要。"
    ],
    asideTitle: "代表场景",
    asideText: "福建土楼与宏村这样的聚落，让“建筑即生活系统”变得非常直观。"
  }
];

const shijianzhous = [
  {
    dynasty: "唐",
    title: "唐代｜浑厚有力，木构气象初显",
    description:
      "唐代留存不多，但现存实例已能看到成熟木构的力量感。柱网清晰、出檐深远、装饰克制，建筑以整体比例取胜。",
    facts: [
      "代表样本：佛光寺东大殿、南禅寺大殿",
      "关键词：大尺度屋顶、深檐、结构诚实",
      "观看重点：先看体量，再看梁架和斗拱的节奏"
    ],
    influence: "唐风重在整体气象，对后世殿堂建筑比例和构架思路影响深远。"
  },
  {
    dynasty: "宋",
    title: "宋代｜制度成形，营造法式确立规范",
    description:
      "宋代最重要的变化是建造经验被系统化。《营造法式》推动构件尺度、等级和做法更明确，建筑更讲究法度与精密。",
    facts: [
      "代表方向：制度化营造、城市建筑发展",
      "关键词：模数、法式、构件等级",
      "观看重点：理解“规范”如何让建筑更可复制、更稳定"
    ],
    influence: "宋代让建筑知识从匠作经验走向可传承的技术体系。"
  },
  {
    dynasty: "辽金",
    title: "辽金｜高层木构与北方风格继续推进",
    description:
      "辽金建筑在北方形成鲜明风格，楼阁、塔类建筑与寺观体系都展现出更复杂的结构组织和更强视觉识别度。",
    facts: [
      "代表样本：应县木塔",
      "关键词：高层木构、楼阁式、北方体量",
      "观看重点：观察层层出檐与立面垂直节奏"
    ],
    influence: "辽金让北方木构的体量、挺拔感和技术复杂度进一步提升。"
  },
  {
    dynasty: "元",
    title: "元代｜在延续中调整尺度与城市格局",
    description:
      "元代在建筑制度和城市布局上有重要承接，虽然现存实例不如明清丰富，但都城规划和宫殿制度具有过渡意义。",
    facts: [
      "代表方向：都城布局、宫殿系统承接",
      "关键词：过渡、城市格局、制度延续",
      "观看重点：把它放在宋明之间理解其连接作用"
    ],
    influence: "元代为明清都城和宫殿体系的成熟提供了重要基底。"
  },
  {
    dynasty: "明",
    title: "明代｜宫殿、园林与民居全面成熟",
    description:
      "明代古建筑类型更加丰富，皇家建筑、园林、祠庙和地方民居都进入成熟期，形式体系与空间表达高度统一。",
    facts: [
      "代表样本：故宫、拙政园、徽派民居",
      "关键词：成熟、秩序、类型丰富",
      "观看重点：比较宫殿、园林与民居的不同空间逻辑"
    ],
    influence: "明代让中国古建筑形成大众最熟悉的典型面貌。"
  },
  {
    dynasty: "清",
    title: "清代｜工艺精细，修缮与延续并行",
    description:
      "清代在继承明制的基础上更强调装饰、色彩与构件细部，很多今天看到的重要古建筑也在这一时期经历重建与修整。",
    facts: [
      "代表样本：祈年殿、网师园、大量修缮宫殿与楼阁",
      "关键词：细部精致、彩画、延续性修建",
      "观看重点：理解“现存古建”常常包含多朝叠加痕迹"
    ],
    influence: "清代让传统建筑在晚期达到高度精致，也留下丰富修缮经验。"
  }
];

const goujianShuju = [
  {
    kind: "斗拱",
    title: "斗拱｜屋檐下最聪明的缓冲结构",
    description:
      "斗拱位于柱头与屋檐之间，既承担传力，也把屋顶重量层层分解。它让出檐更深、层次更丰富，同时形成中国古建筑最具辨识度的檐下景观。",
    points: [
      "看点一：层层挑出，形成檐口阴影和节奏感",
      "看点二：不只是装饰，而是关键受力节点",
      "看点三：不同等级建筑的斗拱尺度和复杂度不同"
    ]
  },
  {
    kind: "屋顶",
    title: "屋顶｜建筑气质往往从屋顶开始",
    description:
      "庑殿、歇山、悬山、硬山等屋顶形式决定了建筑外轮廓。中国古建筑的第一眼吸引力，往往就来自飞檐曲线、出檐深度和屋顶比例。",
    points: [
      "看点一：先辨认屋顶类型，再理解等级差异",
      "看点二：飞檐不只是好看，也有遮阳避雨功能",
      "看点三：屋面曲线会直接影响建筑的精神气质"
    ]
  },
  {
    kind: "台基",
    title: "台基｜把建筑从地面抬升成仪式空间",
    description:
      "台基抬高建筑，处理排水、防潮与视觉尊严。大型宫殿的高台基尤其明显，它把“进入建筑”变成一步步上升的仪式过程。",
    points: [
      "看点一：台基越高，礼制意味通常越强",
      "看点二：栏板、踏步与月台是观察重点",
      "看点三：它决定了建筑与地面的关系"
    ]
  },
  {
    kind: "院落",
    title: "院落｜中国建筑最核心的空间组织方式",
    description:
      "院落不是空地，而是空间秩序的中心。它把采光、通风、家庭生活、礼仪行动和视线组织整合在一起，是中国古建筑最普遍的空间语言。",
    points: [
      "看点一：院落决定了人如何进、停、看、转身",
      "看点二：宫殿、寺院、民居都在用不同尺度的院落",
      "看点三：看懂院落，才能看懂中轴和空间序列"
    ]
  }
];

const luxianShuju = [
  {
    name: "中轴盛典线",
    region: "北京",
    days: "1-2 天",
    title: "北京中轴与礼制建筑路线",
    summary:
      "适合第一次系统接触皇家建筑的人。重点不是跑景点，而是把中轴、台基、屋顶等级和祭祀空间串起来看。",
    list: [
      "上午：故宫外朝轴线，重点看太和殿台基与重檐屋顶",
      "下午：天坛祈年殿，比较祭祀建筑与宫殿建筑的空间差异",
      "补充：景山高点俯瞰整体格局，更容易理解都城秩序"
    ],
    asideTitle: "适合人群",
    asideText: "偏好宏大秩序、礼制文化和宫殿建筑的人。",
    season: "秋季和初冬更适合观察屋顶色彩与空间层次。"
  },
  {
    name: "晋北木构线",
    region: "山西",
    days: "2-3 天",
    title: "山西唐辽木构深看路线",
    summary:
      "这条线更适合认真看结构。山西保存了中国最关键的一批早期木构，是理解中国古建筑技术史的核心区域。",
    list: [
      "佛光寺与南禅寺：比较唐代木构在不同尺度下的气质",
      "应县木塔：观察高层木构如何层层组织",
      "悬空寺：理解极端地形与建筑结构的互相依赖"
    ],
    asideTitle: "适合人群",
    asideText: "对营造技术、木构体系和古建考察感兴趣的人。",
    season: "春秋最适合，光线清晰，山地行走体验也更稳定。"
  },
  {
    name: "江南园居线",
    region: "苏州·徽州",
    days: "2-4 天",
    title: "江南园林与民居空间路线",
    summary:
      "如果你更在意空间氛围和生活美学，这条线最适合。它会让你看到古建筑并不只有宏大，也可以非常细腻和日常。",
    list: [
      "苏州拙政园与网师园：比较大园和小园的借景方式",
      "徽州宏村：观察村落与民居如何围绕水系展开",
      "建议放慢节奏，边走边记“门洞、廊道、转折”"
    ],
    asideTitle: "适合人群",
    asideText: "喜欢园林、摄影、居住文化与慢节奏漫游的人。",
    season: "春季和初夏最佳，水面、植物与白墙灰瓦层次更丰富。"
  },
  {
    name: "山海聚落线",
    region: "福建·山东·湖南",
    days: "4-5 天",
    title: "土楼、阁楼与临水建筑路线",
    summary:
      "这一条更强调建筑与地理环境的关系。你会看到围合、防御、临海远眺和临湖登楼这些完全不同的空间逻辑。",
    list: [
      "永定土楼：看集体居住和厚重围合",
      "蓬莱阁：看建筑如何成为海景观看平台",
      "岳阳楼：感受楼阁与文学记忆共同塑造的文化景观"
    ],
    asideTitle: "适合人群",
    asideText: "想同时体验地方建筑与自然地貌互动的人。",
    season: "避开极端天气，选择能见度高的季节更容易获得完整体验。"
  }
];

const zhuangtai = {
  shaixuan: "all",
  sousuo: "",
  dangqianLunbotu: 0,
  dangqianShijianzhou: 0,
  dangqianGoujian: 0,
  dangqianLuxian: 0
};

const jianzhuLiebiao = document.querySelector("#jianzhuLiebiao");
const shaixuanZu = document.querySelector("#shaixuanZu");
const sousuoInput = document.querySelector("#sousuoInput");
const xiangqingTanchuang = document.querySelector("#xiangqingTanchuang");
const xiangqingNeirong = document.querySelector("#xiangqingNeirong");
const guanbiXiangqing = document.querySelector(".tanchuang-guanbi");
const shijianzhouDaohang = document.querySelector("#shijianzhouDaohang");
const shijianzhouMianban = document.querySelector("#shijianzhouMianban");
const goujianQian = document.querySelector("#goujianQian");
const goujianMianban = document.querySelector("#goujianMianban");
const goujianShijue = document.querySelector("#goujianShijue");
const luxianQian = document.querySelector("#luxianQian");
const luxianMianban = document.querySelector("#luxianMianban");
const tudie = document.querySelector("#tudie");
const shijingChanglang = document.querySelector("#shijingChanglang");
const gushiWutai = document.querySelector("#gushiWutai");
const gushiGuiji = document.querySelector("#gushiGuiji");
const lunbotuGuidao = document.querySelector("#lunbotuGuidao");
const lunbotuMengceng = document.querySelector("#lunbotuMengceng");
const lunbotuDianzu = document.querySelector("#lunbotuDianzu");
const lunbotuQian = document.querySelector("#lunbotuQian");
const lunbotuHou = document.querySelector("#lunbotuHou");

let lunbotuDingshiqi;

function huoquJianzhuTupian(item) {
  const key = tupianYingshe[item.id] || "supremeHarmony";
  return tupianMulu[key];
}

function shengchengTupianLaiyuan(photo, className = "tupian-laiyuan") {
  return `
    <a class="${className}" href="${photo.source}" target="_blank" rel="noreferrer noopener">
      摄影：${photo.credit} · ${photo.license}
    </a>
  `;
}

function bofangMianbanQiehuan(element) {
  element.classList.remove("mianban-qiehuan");
  void element.offsetWidth;
  element.classList.add("mianban-qiehuan");
}

function shengchengTudie() {
  tudie.innerHTML = jingxuanLunbo
    .slice(0, 3)
    .map(
      (item, index) => `
        <figure class="tudie-ka" data-shicha data-sudu="${0.08 + index * 0.03}" style="
          width: ${index === 0 ? "238px" : index === 1 ? "208px" : "194px"};
          height: ${index === 0 ? "304px" : index === 1 ? "244px" : "218px"};
          left: ${index === 0 ? "18px" : index === 1 ? "164px" : "260px"};
          top: ${index === 0 ? "32px" : index === 1 ? "4px" : "136px"};
          --tilt: ${index === 0 ? "-7deg" : index === 1 ? "6deg" : "-4deg"};
          animation-delay: ${index * 0.8}s;
        ">
          <img src="${item.photo.src}" alt="${item.photo.title}" loading="eager" />
          <figcaption>
            <strong>${item.photo.title}</strong>
            <span>${item.title}</span>
          </figcaption>
        </figure>
      `
    )
    .join("");
}

function shengchengLunbotu() {
  lunbotuGuidao.innerHTML = jingxuanLunbo
    .map(
      (item, index) => `
        <figure class="lunbotu__huandeng ${index === zhuangtai.dangqianLunbotu ? "is-active" : ""}" data-lunbotu-huandeng="${index}">
          <img src="${item.photo.src}" alt="${item.photo.title}" loading="${index === 0 ? "eager" : "lazy"}" />
        </figure>
      `
    )
    .join("");

  lunbotuDianzu.innerHTML = jingxuanLunbo
    .map(
      (_, index) => `
        <button
          class="lunbotu__dian ${index === zhuangtai.dangqianLunbotu ? "is-active" : ""}"
          type="button"
          data-lunbotu-dian="${index}"
          aria-label="切换到第 ${index + 1} 张"
        ></button>
      `
    )
    .join("");

  gengxinLunbotuNeirong();
}

function gengxinLunbotuNeirong() {
  const current = jingxuanLunbo[zhuangtai.dangqianLunbotu];
  const slides = [...document.querySelectorAll("[data-lunbotu-huandeng]")];
  const dots = [...document.querySelectorAll("[data-lunbotu-dian]")];

  slides.forEach((slide, index) => slide.classList.toggle("is-active", index === zhuangtai.dangqianLunbotu));
  dots.forEach((dot, index) => dot.classList.toggle("is-active", index === zhuangtai.dangqianLunbotu));

  lunbotuMengceng.innerHTML = `
    <p class="lunbotu__xiaobiao">首屏轮播</p>
    <h3 class="lunbotu__biaoti">${current.photo.title}</h3>
    <p class="lunbotu__wenan">${current.text}</p>
    <button class="lunbotu__anniu button button--kongxin" type="button" data-lunbotu-xiangqing="${current.buildingId}">
      查看 ${current.photo.title} 详情
    </button>
  `;
}

function qiehuanLunbotu(index) {
  zhuangtai.dangqianLunbotu = (index + jingxuanLunbo.length) % jingxuanLunbo.length;
  gengxinLunbotuNeirong();
}

function qidongLunbotu() {
  clearInterval(lunbotuDingshiqi);
  lunbotuDingshiqi = window.setInterval(() => {
    qiehuanLunbotu(zhuangtai.dangqianLunbotu + 1);
  }, 4200);
}

function shengchengShijingChanglang() {
  shijingChanglang.innerHTML = jiugongTupian
    .map(
      (item, index) => `
        <article
          class="shijing-ka jianxian"
          tabindex="0"
          role="button"
          aria-label="查看 ${item.title} 详情"
          data-jianzhu-id="${item.buildingId}"
          data-shicha
          data-sudu="${0.04 + index * 0.015}"
        >
          <img src="${item.photo.src}" alt="${item.photo.title}" loading="lazy" />
          <div class="shijing-ka__wenan">
            <span class="shijing-ka__xuhao">${String(index + 1).padStart(2, "0")}</span>
            <div class="shijing-ka__zhuti">
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>
            <span class="shijing-ka__anniu">点击展开建筑详情</span>
            ${shengchengTupianLaiyuan(item.photo, "tupian-laiyuan shijing-ka__laiyuan")}
          </div>
        </article>
      `
    )
    .join("");
}

function shengchengZhanting() {
  gushiWutai.innerHTML = `
    ${zhantingGushi
      .map(
        (item, index) => `
          <figure class="gushi-wutai__ceng ${index === 0 ? "is-active" : ""}" data-gushi-ceng="${index}">
            <img src="${item.photo.src}" alt="${item.photo.title}" loading="${index === 0 ? "eager" : "lazy"}" />
          </figure>
        `
      )
      .join("")}
      <div class="gushi-wutai__mengceng" id="storyOverlay">
        <p class="gushi-wutai__xiaobiao">${zhantingGushi[0].eyebrow}</p>
        <h3 class="gushi-wutai__biaoti">${zhantingGushi[0].title}</h3>
        <p class="gushi-wutai__yinju">${zhantingGushi[0].quote}</p>
        <div class="gushi-wutai__biaoqian">${zhantingGushi[0].tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        ${shengchengTupianLaiyuan(zhantingGushi[0].photo, "tupian-laiyuan gushi-wutai__laiyuan")}
      </div>
  `;

  gushiGuiji.innerHTML = zhantingGushi
    .map(
      (item, index) => `
        <article class="gushi-buzhou ${index === 0 ? "is-active" : ""}" data-gushi-buzhou="${index}">
          <span class="gushi-buzhou__xuhao">${item.eyebrow}</span>
          <h3>${item.title}</h3>
          <p class="gushi-buzhou__daoyu">${item.lead}</p>
          <div class="gushi-buzhou__wangge">
            <ul class="gushi-buzhou__yaodian">
              ${item.notes.map((note) => `<li>${note}</li>`).join("")}
            </ul>
            <aside class="gushi-buzhou__cebian">
              <strong>${item.asideTitle}</strong>
              <p>${item.asideText}</p>
            </aside>
          </div>
        </article>
      `
    )
    .join("");
}

function shengchengJianzhu() {
  const keyword = zhuangtai.sousuo.trim().toLowerCase();
  const shaixuaned = jianzhuShuju.filter((item) => {
    const typeMatch = zhuangtai.shaixuan === "all" || item.type === zhuangtai.shaixuan;
    const text = [item.name, item.city, item.era, item.dynasty, ...item.tags].join(" ").toLowerCase();
    const sousuoMatch = text.includes(keyword);
    return typeMatch && sousuoMatch;
  });

  if (!shaixuaned.length) {
    jianzhuLiebiao.innerHTML = `<div class="xiangqing-kong">没有匹配结果，试试搜索城市、朝代或切换分类。</div>`;
    return;
  }

  jianzhuLiebiao.innerHTML = shaixuaned
    .map(
      (item) => {
        const photo = huoquJianzhuTupian(item);
        return `
        <button class="tujian-ka" type="button" data-jianzhu-id="${item.id}">
          <span class="tujian-ka__meiti">
            <img src="${photo.src}" alt="${item.name}" loading="lazy" />
            <span class="tujian-ka__leixing">${item.type}</span>
          </span>
          <span class="tujian-ka__zhuti">
            <strong class="tujian-ka__mingcheng">${item.name}</strong>
            <span class="tujian-ka__xinxi">${item.city} · ${item.era} · ${item.highlight}</span>
            <span class="tujian-ka__biaoqian">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</span>
          </span>
          <span class="tujian-ka__jiantou">↗</span>
        </button>
      `;
      }
    )
    .join("");
}

function shengchengXiangqing(id) {
  const item = jianzhuShuju.find((entry) => entry.id === id);
  if (!item) return;
  const photo = huoquJianzhuTupian(item);

  xiangqingNeirong.innerHTML = `
    <div class="xiangqing-toutu">
      <img src="${photo.src}" alt="${item.name}" loading="eager" />
      ${shengchengTupianLaiyuan(photo)}
    </div>
    <div class="xiangqing-wangge">
      <div>
        <p class="eyebrow">建筑详情</p>
        <h3>${item.name}</h3>
        <div class="xiangqing-xinxi">
          <span>${item.city}</span>
          <span>${item.era}</span>
          <span>${item.type}</span>
        </div>
        <div class="xiangqing-biaoqian">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="xiangqing-kuai">
          <strong>建筑概述</strong>
          <p>${item.detail}</p>
        </div>
        <div class="xiangqing-kuai">
          <strong>推荐观看方式</strong>
          <p>${item.watch}</p>
        </div>
        <div class="xiangqing-kuai">
          <strong>保护关注点</strong>
          <p>${item.protect}</p>
        </div>
      </div>
      <aside class="xiangqing-cebian">
        <strong>一眼要点</strong>
        <p>${item.summary}</p>
        <strong>本页建议</strong>
        <p>${item.highlight}</p>
      </aside>
    </div>
  `;

  xiangqingTanchuang.showModal();
}

function shengchengShijianzhou() {
  shijianzhouDaohang.innerHTML = shijianzhous
    .map(
      (item, index) => `
        <button type="button" class="${index === zhuangtai.dangqianShijianzhou ? "is-active" : ""}" data-index="${index}">
          ${item.dynasty}
        </button>
      `
    )
    .join("");

  const current = shijianzhous[zhuangtai.dangqianShijianzhou];
  shijianzhouMianban.innerHTML = `
    <p class="eyebrow">${current.dynasty}</p>
    <h3>${current.title}</h3>
    <div class="shijianzhou-mianban__wangge">
      <div>
        <p>${current.description}</p>
        <p>${current.influence}</p>
      </div>
      <div class="shijianzhou-mianban__yaodian">
        ${current.facts
          .map(
            (fact, index) => `
              <div>
                <strong>0${index + 1}</strong>
                <span>${fact}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
  bofangMianbanQiehuan(shijianzhouMianban);
}

function shengchengGoujian() {
  goujianQian.innerHTML = goujianShuju
    .map(
      (item, index) => `
        <button type="button" class="${index === zhuangtai.dangqianGoujian ? "is-active" : ""}" data-index="${index}">
          ${item.kind}
        </button>
      `
    )
    .join("");

  const current = goujianShuju[zhuangtai.dangqianGoujian];
  goujianMianban.innerHTML = `
    <p class="eyebrow">构件模块</p>
    <h3>${current.title}</h3>
    <p>${current.description}</p>
    <ul class="goujian-mianban__liebiao">
      ${current.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
  `;

  const diagramCount = current.kind === "斗拱" ? 4 : 2;
  goujianShijue.innerHTML = `
    <div class="goujian-tu" data-kind="${current.kind}">
      ${Array.from({ length: diagramCount }, () => "<span></span>").join("")}
    </div>
  `;
  bofangMianbanQiehuan(goujianMianban);
}

function shengchengLuxian() {
  luxianQian.innerHTML = luxianShuju
    .map(
      (item, index) => `
        <button type="button" class="${index === zhuangtai.dangqianLuxian ? "is-active" : ""}" data-index="${index}">
          ${item.name}
        </button>
      `
    )
    .join("");

  const current = luxianShuju[zhuangtai.dangqianLuxian];
  luxianMianban.innerHTML = `
    <div class="luxian-mianban__wangge">
      <div>
        <p class="eyebrow">${current.region} · ${current.days}</p>
        <h3>${current.title}</h3>
        <p>${current.summary}</p>
        <ul class="luxian-mianban__liebiao">
          ${current.list.map((entry) => `<li>${entry}</li>`).join("")}
        </ul>
      </div>
      <aside class="luxian-mianban__cebian">
        <strong>${current.asideTitle}</strong>
        <p>${current.asideText}</p>
        <strong>建议季节</strong>
        <p>${current.season}</p>
      </aside>
    </div>
  `;
  bofangMianbanQiehuan(luxianMianban);
}

function bangdingShijian() {
  shaixuanZu.addEventListener("click", (event) => {
    const target = event.target.closest("[data-shaixuan]");
    if (!target) return;
    zhuangtai.shaixuan = target.dataset.shaixuan;
    shaixuanZu.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("is-active"));
    target.classList.add("is-active");
    shengchengJianzhu();
  });

  sousuoInput.addEventListener("input", (event) => {
    zhuangtai.sousuo = event.target.value;
    shengchengJianzhu();
  });

  jianzhuLiebiao.addEventListener("click", (event) => {
    const target = event.target.closest("[data-jianzhu-id]");
    if (!target) return;
    shengchengXiangqing(target.dataset.jianzhuId);
  });

    xiangqingTanchuang.addEventListener("click", (event) => {
      if (event.target === xiangqingTanchuang) {
        xiangqingTanchuang.close();
      }
    });

    guanbiXiangqing.addEventListener("click", () => {
      xiangqingTanchuang.close();
    });

    shijianzhouDaohang.addEventListener("click", (event) => {
    const target = event.target.closest("[data-index]");
    if (!target) return;
    zhuangtai.dangqianShijianzhou = Number(target.dataset.index);
    shengchengShijianzhou();
  });

  goujianQian.addEventListener("click", (event) => {
    const target = event.target.closest("[data-index]");
    if (!target) return;
    zhuangtai.dangqianGoujian = Number(target.dataset.index);
    shengchengGoujian();
  });

  luxianQian.addEventListener("click", (event) => {
    const target = event.target.closest("[data-index]");
    if (!target) return;
    zhuangtai.dangqianLuxian = Number(target.dataset.index);
    shengchengLuxian();
  });

  lunbotuDianzu.addEventListener("click", (event) => {
    const target = event.target.closest("[data-lunbotu-dian]");
    if (!target) return;
    qiehuanLunbotu(Number(target.dataset.lunbotuDian));
    qidongLunbotu();
  });

  lunbotuQian.addEventListener("click", () => {
    qiehuanLunbotu(zhuangtai.dangqianLunbotu - 1);
    qidongLunbotu();
  });

  lunbotuHou.addEventListener("click", () => {
    qiehuanLunbotu(zhuangtai.dangqianLunbotu + 1);
    qidongLunbotu();
  });

    lunbotuMengceng.addEventListener("click", (event) => {
      const target = event.target.closest("[data-lunbotu-xiangqing]");
      if (!target) return;
      shengchengXiangqing(target.dataset.lunbotuXiangqing);
    });

    shijingChanglang.addEventListener("click", (event) => {
      if (event.target.closest(".shijing-ka__laiyuan")) return;
      const target = event.target.closest("[data-jianzhu-id]");
      if (!target) return;
      shengchengXiangqing(target.dataset.jianzhuId);
    });

    shijingChanglang.addEventListener("keydown", (event) => {
      if (event.target.closest(".shijing-ka__laiyuan")) return;
      const target = event.target.closest("[data-jianzhu-id]");
      if (!target || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      shengchengXiangqing(target.dataset.jianzhuId);
    });

    const lunbotu = document.querySelector("#lunbotu");
    lunbotu.addEventListener("mouseenter", () => clearInterval(lunbotuDingshiqi));
    lunbotu.addEventListener("mouseleave", qidongLunbotu);
}

function bangdingJianxian() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".jianxian").forEach((item) => observer.observe(item));
}

function bangdingShicha() {
  const items = [...document.querySelectorAll("[data-shicha]")];
  if (!items.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let ticking = false;

  const update = () => {
    const viewportHeight = window.innerHeight || 1;
    items.forEach((item) => {
      const speed = Number(item.dataset.sudu || 0.05);
      const rect = item.getBoundingClientRect();
      const offset = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) * speed;
      item.style.setProperty("--parallax-y", `${offset * -1}px`);
    });
    ticking = false;
  };

  const requestTick = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
}

function bangdingGushi() {
  const steps = [...document.querySelectorAll("[data-gushi-buzhou]")];
  const layers = [...document.querySelectorAll("[data-gushi-ceng]")];
  const overlay = document.querySelector("#storyOverlay");
  if (!steps.length || !layers.length || !overlay) return;

  const applyStory = (index) => {
    const story = zhantingGushi[index];
    layers.forEach((layer, layerIndex) => layer.classList.toggle("is-active", layerIndex === index));
    steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));
    overlay.innerHTML = `
      <p class="gushi-wutai__xiaobiao">${story.eyebrow}</p>
      <h3 class="gushi-wutai__biaoti">${story.title}</h3>
      <p class="gushi-wutai__yinju">${story.quote}</p>
      <div class="gushi-wutai__biaoqian">${story.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      ${shengchengTupianLaiyuan(story.photo, "tupian-laiyuan gushi-wutai__laiyuan")}
    `;
    bofangMianbanQiehuan(overlay);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        applyStory(Number(entry.target.dataset.gushiBuzhou));
      });
    },
    {
      threshold: 0.55,
      rootMargin: "-10% 0px -20% 0px"
    }
  );

  steps.forEach((step) => observer.observe(step));
}

function bangdingGunDongDaohang() {
  const links = [...document.querySelectorAll(".wangzhan-daohang a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.55 }
  );

  sections.forEach((section) => observer.observe(section));
}

shengchengTudie();
shengchengLunbotu();
shengchengShijingChanglang();
shengchengZhanting();
shengchengJianzhu();
shengchengShijianzhou();
shengchengGoujian();
shengchengLuxian();
bangdingShijian();
bangdingJianxian();
bangdingGunDongDaohang();
bangdingShicha();
bangdingGushi();
qidongLunbotu();
