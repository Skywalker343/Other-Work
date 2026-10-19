(function () {
  "use strict";

  const roleData = {
    guard: {
      key: "guard", label: "边军", name: "大明边军", route: "大明边军巡防线", motto: "验明身份 · 巡城寻令 · 登楼合印", duration: "约 70 分钟", portrait: "assets/npc-guard.webp", npc: "巡关校尉",
      en: { label: "Garrison", name: "Ming Garrison", route: "Ming Garrison Patrol", motto: "Check in · Patrol · Reunite the token", npc: "Border Captain", duration: "About 70 min" },
      stops: ["东闸门 · 验明正身", "游击将军府", "光化楼", "柔远楼", "嘉峪关城楼"],
      stopsEn: ["East Gate · Identity check", "Guerrilla General’s Mansion", "Guanghua Tower", "Rouyuan Tower", "Jiayuguan Tower"],
      tasks: [
        { id: "g1", title: "东闸门验明正身", place: "东闸门「天下雄关」题刻", points: 20, shard: "东", icon: "门", scene: "assets/scene-east-gate.webp", photo: "与「天下雄关」题刻同框，完成入关打卡", line: "校尉请你先在东闸门完成身份核验。找到城门题刻中的关城关键词，再接过巡防腰牌。", question: "大明边军进入巡防线的第一步是什么？", options: ["在东闸门核验身份", "先去西门交货", "前往城外找烽火台"], answer: 0, npcLine: "守门校尉正在「天下雄关」题刻旁验看通行腰牌。", en: { title: "Check in at the East Gate", place: "East Gate · ‘天下雄关’ inscription", photo: "Frame the ‘天下雄关’ inscription for your entry check-in", line: "The captain asks you to verify your identity at the East Gate. Find the pass inscription and receive your patrol token.", question: "What is the first step on the garrison patrol?", options: ["Verify identity at the East Gate", "Deliver goods at the west gate", "Find a beacon outside the pass"], npcLine: "The gate captain is checking patrol tokens beside the pass inscription." } },
        { id: "g2", title: "游击将军府接令", place: "游击将军府", points: 35, shard: "将", icon: "戍", scene: "assets/scene-pass.webp", photo: "在府衙院落寻找边军巡防令的印记", line: "巡防令由将军府发出。与府中书吏核对关城布防次序，再领取下一枚令纹。", question: "巡防令应由哪处官署发出？", options: ["游击将军府", "文昌阁", "西门外商道"], answer: 0, npcLine: "将军府的书吏摊开巡防图，等你指出发令官署。", en: { title: "Collect orders at the mansion", place: "Guerrilla General’s Mansion", photo: "Look for the patrol seal in the historic courtyard", line: "The patrol order comes from the General’s Mansion. Check the garrison sequence with the clerk and collect the next token mark.", question: "Which office issues the patrol order?", options: ["Guerrilla General’s Mansion", "Wenchang Pavilion", "The west gate merchant trail"], npcLine: "The mansion clerk opens a patrol map and waits for you to identify the issuing office." } },
        { id: "g3", title: "光化楼辨认巡更暗记", place: "光化楼 · 城楼观景位", points: 45, shard: "巡", icon: "烽", scene: "assets/scene-east-gate.webp", photo: "以光化楼与关城墙体为背景取景", line: "登临光化楼前，请与传令兵核对巡更信号。关城与祁连山方向都是游客常取景的开阔视野。", question: "巡更交接时，先核验哪一项？", options: ["令牌与名册", "驼队货物", "游客门票"], answer: 0, npcLine: "城楼上的传令兵压低声音，向你展示一枚磨旧的边防木牌。", en: { title: "Read the watch signal at Guanghua Tower", place: "Guanghua Tower · viewing point", photo: "Photograph the tower with the fortress wall in frame", line: "Before climbing Guanghua Tower, verify the watch signal with the messenger. The broad views of the fortress and Qilian Mountains are popular photo scenes.", question: "What is checked first at a watch handover?", options: ["Pass token and roster", "Caravan cargo", "Visitor ticket"], npcLine: "The tower messenger shows you a worn border-defense tablet." } },
        { id: "g4", title: "柔远楼望楼协巡", place: "柔远楼 · 西侧登城视点", points: 55, shard: "守", icon: "楼", scene: "assets/scene-wall.webp", photo: "寻找可将光化楼与柔远楼同框的安全观景角度", line: "从柔远楼回望光化楼，确认两座城楼之间的巡防呼应。请留在开放参观区域，不攀越围栏。", question: "柔远楼在关城的哪一侧？", options: ["西侧", "东侧", "关城外南侧"], answer: 0, npcLine: "守楼军士指向对望的楼阁，等待你确认西侧巡防位置。", en: { title: "Patrol from Rouyuan Tower", place: "Rouyuan Tower · west rampart viewpoint", photo: "Find a safe viewpoint that frames both Guanghua and Rouyuan Towers", line: "Look back toward Guanghua Tower from Rouyuan Tower to confirm the signal between the two towers. Stay within visitor areas and behind barriers.", question: "On which side of the fortress is Rouyuan Tower?", options: ["West", "East", "South outside the fortress"], npcLine: "The tower guard points to the facing towers and asks you to confirm the western patrol position." } },
        { id: "g5", title: "嘉峪关城楼合令验印", place: "嘉峪关城楼 · 登楼观景点", points: 85, shard: "令", icon: "合", scene: "assets/scene-pass.webp", photo: "在城楼上眺望戈壁与祁连山，完成终章打卡", line: "五处巡防线索齐备。登上嘉峪关城楼，与守关将领完成终章验印，合成完整龙门令。", question: "集齐令纹后，如何完成终章？", options: ["在嘉峪关城楼验合令牌", "将碎片留在墙上", "把令牌交给沿途商贩"], answer: 0, npcLine: "守关将领展开验印图，邀你共同确认龙门令的归属。", en: { title: "Reunite the token at Jiayuguan Tower", place: "Jiayuguan Tower · panoramic viewpoint", photo: "Capture the Gobi and Qilian Mountain panorama from the tower", line: "All five patrol clues are ready. Meet the captain at Jiayuguan Tower for the final seal and reunite the Longmen Token.", question: "How do you finish the final chapter?", options: ["Verify the token at Jiayuguan Tower", "Leave the fragments on the wall", "Give the token to a vendor"], npcLine: "The captain opens the seal chart and invites you to verify the Longmen Token." } }
      ]
    },
    caravan: {
      key: "caravan", label: "商队", name: "西域商队", route: "西域商队出关线", motto: "商道寻路 · 文牒通关 · 远眺戈壁", duration: "约 75 分钟", portrait: "assets/npc-caravan.webp", npc: "西域行商",
      en: { label: "Caravan", name: "Western Caravan", route: "Western Caravan Passage", motto: "Follow the trade road · Prepare papers · See the Gobi", npc: "Silk Road Merchant", duration: "About 75 min" },
      stops: ["东闸门外侧商道", "文昌阁 · 筹措通关文牒", "外城开阔地 · 长城根基古道", "罗城 / 西瓮城缓冲区", "西门外戈壁观景点"],
      stopsEn: ["Merchant trail outside the East Gate", "Wenchang Pavilion · prepare travel papers", "Open outer grounds · Great Wall foundation trail", "Luocheng / West Wengcheng buffer", "Gobi viewpoint outside the West Gate"],
      tasks: [
        { id: "c1", title: "东闸门外商道寻客", place: "东闸门外侧商道", points: 20, shard: "商", icon: "驼", scene: "assets/scene-east-gate.webp", photo: "以东闸门与商道入口为背景，记录商队启程", line: "商队从关外东闸门商道出发。与行商确认队伍身份和行进方向，再开始西行旅程。", question: "商队从哪里启程？", options: ["东闸门外侧商道", "关城西门内", "嘉峪关城楼顶"], answer: 0, npcLine: "行商在东闸门外侧等候，手中拿着尚未盖印的商队路引。", en: { title: "Meet the caravan outside the East Gate", place: "Merchant trail outside the East Gate", photo: "Check in with the East Gate and merchant trail behind you", line: "The caravan begins on the merchant trail outside the East Gate. Confirm the party’s identity and direction with the merchant before setting west.", question: "Where does the caravan begin?", options: ["Merchant trail outside the East Gate", "Inside the West Gate", "On top of Jiayuguan Tower"], npcLine: "A merchant waits outside the East Gate with an unstamped travel pass." } },
        { id: "c2", title: "文昌阁筹措通关文牒", place: "文昌阁", points: 35, shard: "牒", icon: "契", scene: "assets/scene-east-gate.webp", photo: "拍摄文昌阁屋檐与商队通关文牒", line: "行商请你前往文昌阁筹措通关文牒。与掌柜补齐货单上的印记，取得下一站的通行凭据。", question: "过关前要先备齐什么？", options: ["通关文牒", "边军巡防腰牌", "城楼钥匙"], answer: 0, npcLine: "掌柜在文昌阁旁等候，手中握着一张未盖印的通关文牒。", en: { title: "Prepare travel papers at Wenchang Pavilion", place: "Wenchang Pavilion", photo: "Photograph the pavilion roofline with the caravan papers", line: "The merchant sends you to Wenchang Pavilion for travel papers. Complete the cargo seal with the shopkeeper and receive the next pass.", question: "What must be prepared before the pass?", options: ["Travel papers", "A garrison patrol token", "A tower key"], npcLine: "The shopkeeper waits beside Wenchang Pavilion with an unstamped travel document." } },
        { id: "c3", title: "外城开阔地寻古道", place: "外城开阔地 · 长城根基古道", points: 45, shard: "道", icon: "途", scene: "assets/scene-wall.webp", photo: "沿开阔地寻找不影响通行的城墙与戈壁构图", line: "沿外城开阔地绕行，寻找长城根基古道的行商标记。开阔地可分散停留拍摄，具体可走范围以现场围栏和开放指引为准。", question: "沿外城古道拍摄时应如何行动？", options: ["沿开放步道行走并避开墙体", "攀上遗址拍摄", "离开指引路线进入封闭区"], answer: 0, npcLine: "驼队向导在开阔地标示可安全停留的位置。", en: { title: "Find the old trail across the outer grounds", place: "Open outer-city grounds · Great Wall foundation trail", photo: "Find a clear composition of the wall and Gobi without blocking the trail", line: "Circle through the open outer grounds and look for the merchant mark on the Great Wall foundation trail. The open ground can spread photo stops; follow fences and current visitor guidance.", question: "How should you take photos along the outer trail?", options: ["Stay on open paths and away from the wall", "Climb the historic wall", "Enter a closed area"], npcLine: "The caravan guide points out a safe place to pause in the open grounds." } },
        { id: "c4", title: "罗城瓮城核验货单", place: "罗城 / 西瓮城缓冲区", points: 55, shard: "关", icon: "印", scene: "assets/scene-wall.webp", photo: "寻找西瓮城门洞与定城砖相关的现场讲解点", line: "进入出关缓冲区后，与关口书吏核对货单。西瓮城、门洞和定城砖常见于游客拍摄记录；请以现场开放路线为准。", question: "出关前应该在哪处缓冲区复核货单？", options: ["罗城 / 瓮城区域", "城外未开放遗址", "长城第一墩"], answer: 0, npcLine: "书吏在瓮城入口等待核验货单与通关文牒。", en: { title: "Verify the cargo list at Luocheng and Wengcheng", place: "Luocheng / West Wengcheng buffer", photo: "Look for the West Wengcheng gateway and the on-site story of the ‘settling brick’", line: "At the passage buffer, verify the cargo list with the gate clerk. The West Wengcheng, gateway, and settling-brick story appear often in visitor photos; follow the open route on site.", question: "Where should the cargo list be checked before departure?", options: ["Luocheng / Wengcheng area", "A closed ruin outside the pass", "The First Pier of the Great Wall"], npcLine: "The clerk waits at the Wengcheng entrance to check the cargo list and travel papers." } },
        { id: "c5", title: "西门外戈壁远眺交令", place: "西门外戈壁观景点（拟议）", points: 85, shard: "令", icon: "合", scene: "assets/scene-pass.webp", photo: "在获准开放的西门外观景位置拍摄关城与戈壁", line: "在拟议的西门外戈壁观景点完成远眺打卡，与接头人核验全部文牒和令纹。该点位及步行通道需景区现场确认后才能上线。", question: "在西门外完成任务前，首先要确认什么？", options: ["该观景点已开放且可安全抵达", "可以穿越任何围栏", "可以在城墙遗址上取景"], answer: 0, npcLine: "接头人约在获准开放的观景处，等待你完成最终验印。", en: { title: "Complete the passage at the West Gate Gobi viewpoint", place: "Gobi viewpoint outside the West Gate (proposed)", photo: "Photograph the fortress and Gobi from an approved viewpoint outside the West Gate", line: "At the proposed West Gate Gobi viewpoint, complete the panorama check-in and verify all papers and token marks with the courier. The location and walking access must be confirmed by the site before launch.", question: "What must be confirmed before this task?", options: ["The viewpoint is open and safely accessible", "You may cross any barrier", "You may climb the historic wall"], npcLine: "The courier waits at an approved viewpoint for the final seal." } }
      ]
    }
  };

  const couponData = [
    { id: "photo", title: "雄关旅拍优惠券", detail: "用于古装旅拍与纪念照服务", cost: 60, icon: "◎", en: { title: "Pass Photo Coupon", detail: "Costume portrait and souvenir photo services" } },
    { id: "food", title: "景区美食优惠券", detail: "用于景区餐饮消费", cost: 45, icon: "◌", en: { title: "Scenic Area Food Coupon", detail: "Food and drink inside the scenic area" } },
    { id: "souvenir", title: "关城文创优惠券", detail: "用于纪念品与文创购买", cost: 80, icon: "✦", en: { title: "Fortress Souvenir Coupon", detail: "Souvenirs and cultural creative goods" } }
  ];
  const storageKey = "longmen-mobile-prototype-v2";
  const initial = { role: null, name: "", language: "zh", screen: "identity", saves: { guard: { done: [], redeemed: [], gift: false }, caravan: { done: [], redeemed: [], gift: false } } };
  let state = loadState();
  let activeTaskId = null;
  let selectedAnswer = null;
  let toastTimer = null;
  let cameraStream = null;
  let locationReady = false;
  let scannerTimer = null;

  const copy = {
    zh: {
      language: "EN", roleBadge: "游客身份", ariaRole: "选择游戏身份", brand: "嘉峪关文物景区", arPreview: "AR 实景预览", locate: "开启定位", located: "定位已开启", scan: "扫描", scanAria: "扫描景区线索", routeNav: "路线", taskNav: "任务", fragmentNav: "碎片", rewardsNav: "兑换", navAria: "主导航", sceneDefault: "嘉峪关关城 · 实景取景", clueNearby: "线索在附近 · 扫描后与 NPC 互动", clueDone: "本处线索已归档", relicComplete: "五枚碎片已齐 · 龙门令可以合成", relicHint: "龙门令碎片 · 扫描发现任务点",
      identityEyebrow: "TOURIST ACCESS · ROLE SELECT", identityTitle: "游客入关<br>选择游览身份", identityIntro: "一枚失散的龙门令，让边军与商队走进两条不同的暗线。沿关城实景路线寻找任务点，与 NPC 互动、收集碎片，把一次游览变成一场亲历。", nameLabel: "游客称呼", namePlaceholder: "请输入称呼（可留空）", guardShort: "大明边军", guardIntro: "从东闸门验明正身，沿内城巡防线寻访关楼任务点。", merchantShort: "西域商队", merchantIntro: "从东闸门外商道出发，备齐文牒，绕行外城与长城根基古道。", enterGuard: "进入边军巡防线", enterMerchant: "进入商队出关线", demoNote: "游客体验账号 · 无需注册 · 进度保存在本机。实地游玩请停步操作，并遵守景区开放路线。",
      routeEyebrow: "YOUR ROUTE", score: "积分", recommended: "推荐任务次序", complete: "完成", routeLegendGuard: "边军 · 内城巡防", routeLegendCaravan: "商队 · 外城绕行", routeButton: "查看任务与 NPC", routeFoot: "剧情为虚构的边关寻令故事。历史地名仅用于定位；路线与可通行范围需以景区现场指引为准。",
      mapNote: "底图沿用项目提案中的嘉峪关卫星影像，并参考公开地图核对地标；路线是策划示意，不是测绘导航轨迹。游客分享常见取景点包括城楼、瓮城、关城墙与城外戈壁；路线需经景区踏勘，西门外观景点及长城根基古道需重点核验。",
      chapterEyebrow: "CHAPTERS", tasksTitle: "关城任务", greetings: "完成沿线任务，与 NPC 互动后可获得积分与一枚龙门令碎片。", done: "已完成", interact: "实景打卡 + NPC 互动", claimed: "已领取", shardBag: "碎片已入囊", shards: "令牌碎片", pointsUnit: "分", scanFirst: "扫描发现任务线索，再按提示与 NPC 对话或完成现场判读。点位为策划示意，须经景区确认。",
      missionClearEyebrow: "MISSION CLEARED", filed: "线索已归档", clueFiled: "的线索已入囊。已获得「令·", got: "」碎片与 ", pointsSuffix: " 积分。", nextTask: "继续下一项任务", fragmentView: "查看碎片", npcEyebrow: "NPC INTERACTION", fragmentMark: "令·", fragment: "碎片", completed: "已获得", undiscovered: "待发现", photoPrompt: "热门取景建议", interactPrompt: "现场互动", interactionHelp: "与沿线 NPC 对话，完成剧情线索判读并记录打卡。", completeInteraction: "完成互动，领取碎片", instant: "完成后即时入账", finalShard: "最后一枚碎片将合成完整龙门令", couponPoints: "积分可兑换旅拍、美食与文创优惠券", allTasksDone: "本条路线的任务都已完成。去碎片页查看令牌合成状态。", tokenComplete: "龙门令已合成", tokenIncomplete: "令牌尚未合璧", tokenGift: "完整龙门令", tokenPending: "龙门令 · 待合", tokenAllDone: "五处任务均已完成。凭完整令牌前往景区兑换点核验限量礼物。", tokenProgress: "每完成一项沿线任务，即可获得一枚对应碎片与积分。集齐全部五枚碎片后解锁限量礼物兑换。", giftButton: "前往礼物兑换", continueFind: "继续寻找碎片", saveNote: "进度保存在当前设备的浏览器中；正式版本需绑定游客订单或景区核验码。",
      rewardsEyebrow: "REWARD COUNTER", rewardsGift: "令牌兑换", rewardsPoints: "积分兑换", limitedGift: "LIMITED GIFT · TOKEN VERIFIED", couponTypes: "PHOTO · FOOD · SOUVENIR", couponLabel: "景区优惠券", giftUnlocked: "完整龙门令已解锁", giftRegistered: "限量礼物兑换已登记。请凭现场核验结果前往兑换点领取。", giftInstruction: "完成全部任务后获得。请凭令牌前往景区兑换点核验限量礼物。", registered: "已登记礼物兑换", redeemGift: "登记限量礼物兑换", taskLeft: "还差 ", tasksLeftEnd: " 项任务可集齐令牌。当前 ", pointsCanRedeem: " 积分可先兑换景区优惠券。", received: "已领取", couponRedeem: " 分", rewardNote: "本原型仅演示兑换逻辑。礼品库存、优惠券面额与适用商户需由景区运营方确认。", reset: "重置本机演示进度", resetConfirm: "重置当前身份的本机演示进度？",
      scannerEyebrow: "现场线索识别", scannerTitle: "扫描景区任务点", scannerAim: "将手机对准任务牌或现场建筑", scannerDemo: "此处为交互演示，可用相机或模拟扫描", scanWait: "对准景区点位，或点击按钮模拟识别", scanDone: "本条路线的任务已完成", scanNoCamera: "浏览器无法访问摄像头；仍可使用模拟扫描。", cameraReady: "摄像头已开启 · 将镜头对准现场任务牌", cameraOn: "摄像头已开启，实景扫描就绪", cameraPermission: "相机权限未开启；可继续使用下方模拟扫描。", cameraDenied: "未获取摄像头权限，已保留模拟扫描", cameraButton: "开启手机摄像头", scanNearby: "扫描附近线索", scanFoot: "请在安全停留处操作；正式项目需接入经景区核准的二维码 / NFC 点位。", close: "关闭",
      chooseFirst: "请先选择游客身份", chooseFirstScan: "先选择边军或商队身份，再接收对应线索", roleConfirmed: "身份确认 · ", routeOpened: "已开启", answerWrong: "线索还未对上，请再读一次现场提示", allDoneToast: "任务全部完成 · 龙门令碎片已合璧", taskDoneToast: "任务完成 +", gotFragment: "积分 · 获得令·", fragmentUnit: "碎片", found: "发现线索 · ", waitingNpc: "有一位 NPC 等待互动", noClues: "本条路线已无待发现任务", couponUsed: "这张优惠券已领取", pointsShort: "积分不足 · 完成更多任务后即可兑换", couponRegistered: "已登记领取：", finishRouteFirst: "先完成本条路线的全部任务", giftToast: "完整龙门令已登记 · 请在景区兑换点核验限量礼物", resetDone: "当前身份进度已重置", noGeo: "此浏览器不支持定位", geoReady: "已读取当前位置 · 路线仍按景区现场指引行走", geoDenied: "未获取定位权限 · 可继续查看路线与任务", notFound: "暂未开放", outsideWarning: "拟议点位 · 须经景区确认开放范围与安全步道后启用", scenicPhotoAlt: "嘉峪关关城实景照片", tokenAlt: "龙门令纹样概念图", guardNpcAlt: "边军 NPC 概念形象", caravanNpcAlt: "商队 NPC 概念形象", routeMapAlt: "嘉峪关关城卫星影像与双路线示意图", title: "龙门令 · 嘉峪关实景寻踪"
    },
    en: {
      language: "中文", roleBadge: "Choose identity", ariaRole: "Choose game identity", brand: "Jiayuguan Heritage Site", arPreview: "AR SCENE PREVIEW", locate: "Enable location", located: "Location on", scan: "Scan", scanAria: "Scan for scenic clues", routeNav: "Route", taskNav: "Missions", fragmentNav: "Fragments", rewardsNav: "Rewards", navAria: "Main navigation", sceneDefault: "Jiayuguan Fortress · live scene", clueNearby: "Clue nearby · scan, then meet the NPC", clueDone: "Clue recorded here", relicComplete: "All five fragments found · reunite the token", relicHint: "Longmen Token fragment · scan to find mission points",
      identityEyebrow: "TOURIST ACCESS · ROLE SELECT", identityTitle: "Enter the pass<br>Choose your journey", identityIntro: "A lost Longmen Token draws the Ming garrison and a Western caravan onto two different trails. Follow the real fortress setting, meet NPCs, and collect fragments as you explore.", nameLabel: "Visitor name", namePlaceholder: "Enter a name (optional)", guardShort: "Ming Garrison", guardIntro: "Verify at the East Gate, then follow the inner-fort patrol route.", merchantShort: "Western Caravan", merchantIntro: "Start outside the East Gate, prepare travel papers, then loop around the outer grounds and wall trail.", enterGuard: "Enter the garrison route", enterMerchant: "Enter the caravan route", demoNote: "Visitor demo · no sign-up · progress stays on this device. Stop in a safe place before interacting and follow current site guidance.",
      routeEyebrow: "YOUR ROUTE", score: "pts", recommended: "Recommended mission order", complete: "Done", routeLegendGuard: "Garrison · inner patrol", routeLegendCaravan: "Caravan · outer loop", routeButton: "View missions & NPCs", routeFoot: "The border-pass story is fictional. Historic place names are used for orientation; confirm routes and access with on-site visitor guidance.",
      mapNote: "The Jiayuguan satellite-style image comes from the project proposal, with landmarks cross-checked against public maps. The overlaid routes are planning sketches, not surveyed navigation tracks. Visitor posts often feature the towers, Wengcheng, fortress wall, and Gobi beyond the pass. Walk the routes on site first; confirm the West Gate viewpoint and Great Wall foundation trail before launch.",
      chapterEyebrow: "CHAPTERS", tasksTitle: "Fortress missions", greetings: "Complete each stop and interact with an NPC to earn points and one Longmen Token fragment.", done: "Done", interact: "Photo check-in + NPC", claimed: "Claimed", shardBag: "Fragment collected", shards: "Token fragment", pointsUnit: "pts", scanFirst: "Scan to discover a clue, then talk with the NPC or solve the on-site prompt. Stops are proposals pending site approval.",
      missionClearEyebrow: "MISSION CLEARED", filed: "Clue recorded", clueFiled: " clue collected. Earned ‘Token · ", got: "’ and ", pointsSuffix: " points.", nextTask: "Continue to next mission", fragmentView: "View fragments", npcEyebrow: "NPC INTERACTION", fragmentMark: "Token · ", fragment: "Fragment", completed: "Collected", undiscovered: "Not found", photoPrompt: "PHOTO SPOT IDEA", interactPrompt: "ON-SITE INTERACTION", interactionHelp: "Talk with the route NPC, solve the story clue, and record your check-in.", completeInteraction: "Complete interaction & collect", instant: "Added immediately", finalShard: "The final fragment reunites the complete Longmen Token", couponPoints: "Redeem points for photo, food, and souvenir coupons", allTasksDone: "All missions on this route are complete. View token status in Fragments.", tokenComplete: "Longmen Token reunited", tokenIncomplete: "Token not yet complete", tokenGift: "Complete Longmen Token", tokenPending: "Longmen Token · collecting", tokenAllDone: "All five missions are complete. Present the token at the scenic-area counter to verify a limited gift.", tokenProgress: "Each completed stop awards one fragment and points. Collect all five to unlock the limited-gift redemption.", giftButton: "Redeem limited gift", continueFind: "Find more fragments", saveNote: "Progress is stored in this browser on this device. A production version should link it to a ticket or site verification code.",
      rewardsEyebrow: "REWARD COUNTER", rewardsGift: "Token redemption", rewardsPoints: "Points redemption", limitedGift: "LIMITED GIFT · TOKEN VERIFIED", couponTypes: "PHOTO · FOOD · SOUVENIR", couponLabel: "Scenic-area coupons", giftUnlocked: "Complete Longmen Token unlocked", giftRegistered: "Gift redemption registered. Collect at the counter after on-site verification.", giftInstruction: "Earned after all missions. Present the token at the scenic-area counter to verify a limited gift.", registered: "Gift redemption registered", redeemGift: "Register gift redemption", taskLeft: "Complete ", tasksLeftEnd: " more missions to reunite the token. Your ", pointsCanRedeem: " points can be used for a coupon now.", received: "Claimed", couponRedeem: " pts", rewardNote: "This prototype demonstrates redemption only. Gift stock, coupon value, and participating merchants must be confirmed by the site operator.", reset: "Reset this demo", resetConfirm: "Reset this identity’s local demo progress?",
      scannerEyebrow: "SCENE CLUE SCANNER", scannerTitle: "Scan a mission point", scannerAim: "Point your phone at a mission marker or building", scannerDemo: "Demo mode · use the camera or simulated scan", scanWait: "Aim at a site point or tap to simulate recognition", scanDone: "All missions on this route are complete", scanNoCamera: "Camera access is unavailable in this browser. Simulated scan is still available.", cameraReady: "Camera on · point at an on-site mission marker", cameraOn: "Camera on · scene scan ready", cameraPermission: "Camera permission is off. You can still use simulated scan below.", cameraDenied: "Camera permission was not granted; simulated scan is available", cameraButton: "Enable phone camera", scanNearby: "Scan nearby clue", scanFoot: "Use the app only while safely stopped. A live launch requires site-approved QR / NFC markers.", close: "Close",
      chooseFirst: "Choose a visitor identity first", chooseFirstScan: "Choose Garrison or Caravan to receive its clues", roleConfirmed: "Identity set · ", routeOpened: " route opened", answerWrong: "That clue does not match. Read the on-site prompt again.", allDoneToast: "All missions complete · token fragments reunited", taskDoneToast: "Mission complete +", gotFragment: " pts · collected Token · ", fragmentUnit: "fragment", found: "Clue found · ", waitingNpc: " an NPC is waiting", noClues: "No undiscovered missions remain on this route", couponUsed: "This coupon has already been claimed", pointsShort: "Not enough points · complete more missions to redeem", couponRegistered: "Redemption registered: ", finishRouteFirst: "Complete all missions on this route first", giftToast: "Longmen Token registered · verify the limited gift at the site counter", resetDone: "This identity’s progress has been reset", noGeo: "Location is not supported in this browser", geoReady: "Location received · continue to follow on-site route guidance", geoDenied: "Location permission was not granted · route and missions remain available", notFound: "Not open yet", outsideWarning: "Proposed stop · activate only after the site confirms access and a safe path", scenicPhotoAlt: "Photograph of Jiayuguan Fortress", tokenAlt: "Longmen Token concept art", guardNpcAlt: "Ming garrison NPC concept art", caravanNpcAlt: "Caravan NPC concept art", routeMapAlt: "Satellite-style Jiayuguan Fortress map with two proposed routes", title: "Longmen Token · Jiayuguan AR Quest"
    }
  };
  function t(key) { return (copy[state.language] || copy.zh)[key] || copy.zh[key] || key; }
  function tx(item, key) { return state.language === "en" && item.en && item.en[key] ? item.en[key] : item[key]; }
  function shardName(task) {
    if (state.language !== "en") return task.shard;
    const names = { g1: "Entry", g2: "Order", g3: "Watch", g4: "Guard", g5: "Seal", c1: "Trade", c2: "Papers", c3: "Trail", c4: "Pass", c5: "Seal" };
    return names[task.id] || "Seal";
  }
  function shardGlyph(task) {
    if (state.language !== "en") return task.icon;
    const glyphs = { g1: "E", g2: "O", g3: "W", g4: "G", g5: "S", c1: "T", c2: "P", c3: "R", c4: "P", c5: "S" };
    return glyphs[task.id] || "✦";
  }

  function loadState() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (!stored) return structuredClone(initial);
      const next = Object.assign(structuredClone(initial), stored);
      next.saves = Object.assign(structuredClone(initial.saves), stored.saves || {});
      Object.keys(next.saves).forEach(function (key) {
        next.saves[key] = Object.assign({ done: [], redeemed: [], gift: false }, next.saves[key] || {});
      });
      return next;
    } catch (_) { return structuredClone(initial); }
  }
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}
  }
  function role() { return state.role ? roleData[state.role] : null; }
  function currentSave() { return state.role ? state.saves[state.role] : null; }
  function completedIds() { return currentSave() ? currentSave().done : []; }
  function tasks() { return role() ? role().tasks : []; }
  function points() {
    return tasks().reduce(function (sum, task) { return sum + (completedIds().indexOf(task.id) >= 0 ? task.points : 0); }, 0);
  }
  function completedCount() { return completedIds().length; }
  function isComplete() { return !!role() && completedCount() === tasks().length; }
  function nextTask() {
    return tasks().find(function (task) { return completedIds().indexOf(task.id) < 0; }) || null;
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[ch];
    });
  }
  function routePath(key) {
    if (key === "guard") {
      return "M1227 82 L1175 140 L1118 211 L1055 290 L986 370 L915 446 L850 515 L780 577 L700 598 L616 612 L670 628 L742 653 L660 674 L582 689 L512 696 L430 727 L345 772";
    }
    return "M1227 82 L1192 145 L1150 215 L1100 290 L1044 365 L988 438 L950 488 L916 532 L892 575 L881 635 L862 614 L840 593 L820 572 L804 558 L775 556 L746 558 L716 562 L686 568 L654 575 L622 584 L590 593 L558 603 L527 614 L497 628 L469 643 L445 660 L420 680 L405 698 L395 718 L395 730 L382 742 L365 750 L346 751 L317 742 L285 732 L252 722 L235 719";
  }
  function routeDots(key) {
    const pointsByRole = {
      guard: [[1227,82],[616,612],[742,653],[512,696],[345,772]],
      caravan: [[1227,82],[881,635],[804,558],[395,730],[235,719]]
    };
    return pointsByRole[key].map(function (point, index) {
      const muted = key !== state.role ? " is-muted" : "";
      const marker = String(index + 1);
      return '<g class="route-point ' + key + muted + '"><circle cx="' + point[0] + '" cy="' + point[1] + '" r="12"></circle><text x="' + point[0] + '" y="' + (point[1] + 3.5) + '" text-anchor="middle">' + marker + '</text></g>';
    }).join("");
  }
  function mapSvg() {
    const active = state.role;
    const other = active === "guard" ? "caravan" : "guard";
    const activeClass = active === "guard" ? "route-guard" : "route-merchant";
    const otherClass = other === "guard" ? "route-guard" : "route-merchant";
    return '<svg class="map-route" viewBox="0 0 1420 1000" preserveAspectRatio="none" aria-label="' + (state.language === "en" ? "Two proposed visitor routes" : "两条拟议游览路线") + '">' +
      '<path class="route-outline" d="' + routePath(active) + '"></path>' +
      '<path class="route-outline" d="' + routePath(other) + '"></path>' +
      '<path class="' + otherClass + ' is-muted" d="' + routePath(other) + '"></path>' +
      '<path class="' + activeClass + '" d="' + routePath(active) + '"></path>' +
      routeDots(other) + routeDots(active) + '</svg>';
  }
  function pageHeader(eyebrow, title, right) {
    return '<div class="section-head"><div><div class="eyebrow">' + eyebrow + '</div><h1>' + title + '</h1></div>' + (right || "") + '</div>';
  }
  function renderIdentity() {
    return '<div class="eyebrow">' + t("identityEyebrow") + '</div>' +
      '<h1 class="hero-title">' + t("identityTitle") + '</h1>' +
      '<p class="intro-copy">' + t("identityIntro") + '</p>' +
      '<div class="role-name-wrap"><label class="field-label" for="playerName">' + t("nameLabel") + '</label><input class="name-input" id="playerName" maxlength="12" value="' + escapeHtml(state.name) + '" placeholder="' + t("namePlaceholder") + '"></div>' +
      '<div class="role-grid">' +
        '<button class="role-card guard" data-action="choose-role" data-role="guard"><small>LINE 01 · INNER WATCH</small><h2>' + tx(roleData.guard, "name") + '</h2><p>' + t("guardIntro") + '</p><span class="role-select">' + t("enterGuard") + ' <span>→</span></span></button>' +
        '<button class="role-card merchant" data-action="choose-role" data-role="caravan"><small>LINE 02 · SILK ROAD</small><h2>' + tx(roleData.caravan, "name") + '</h2><p>' + t("merchantIntro") + '</p><span class="role-select">' + t("enterMerchant") + ' <span>→</span></span></button>' +
      '</div><p class="form-note">' + t("demoNote") + '</p>';
  }
  function renderRoute() {
    const r = role();
    const stops = r.stops.map(function (stop, index) {
      const name = state.language === "en" ? r.stopsEn[index] : stop;
      return '<div class="stop-item"><span class="stop-number">' + String(index + 1).padStart(2, "0") + '</span><span>' + name + '</span></div>';
    }).join("");
    const all = completedCount() + "/" + r.tasks.length;
    return pageHeader(t("routeEyebrow"), tx(r, "route"), '<span class="score-pill">' + points() + ' ' + t("score") + '</span>') +
      '<div class="route-card"><div class="route-card-top"><div><small>' + tx(r, "name") + ' · ' + t("recommended") + '</small><h2>' + tx(r, "motto") + '</h2></div><div class="route-length">' + tx(r, "duration") + '<br>' + t("complete") + ' ' + all + '</div></div>' +
      '<div class="map-frame"><img src="assets/jiayuguan-satellite.webp" alt="' + t("routeMapAlt") + '">' + mapSvg() + '</div>' +
      '<div class="map-legend"><span><i class="legend-dot guard"></i>' + t("routeLegendGuard") + '</span><span><i class="legend-dot merchant"></i>' + t("routeLegendCaravan") + '</span></div>' +
      '<p class="map-note">' + t("mapNote") + ' <a href="https://ditu.amap.com/place/B0HDHGB3WJ" target="_blank" rel="noreferrer">' + (state.language === "en" ? "Open AMap place map" : "打开高德景区地图") + '</a> · <a href="https://mapcarta.com/W178837941" target="_blank" rel="noreferrer">OpenStreetMap / satellite reference</a></p></div>' +
      '<div class="route-stops">' + stops + '</div>' +
      '<button class="button button-primary button-block" data-nav="tasks">' + t("routeButton") + ' <span>→</span></button>' +
      '<div class="rule-note" style="margin-top:11px">' + t("routeFoot") + '</div>';
  }
  function renderTasks() {
    const r = role();
    const progressWidth = Math.round((completedCount() / r.tasks.length) * 100);
    const rows = r.tasks.map(function (task, index) {
      const done = completedIds().indexOf(task.id) >= 0;
      return '<button class="task-row ' + (done ? "is-done" : "") + '" data-action="open-task" data-task="' + task.id + '">' +
        '<span class="task-index">' + (done ? "✓" : String(index + 1).padStart(2, "0")) + '</span>' +
        '<span class="task-info"><strong>' + tx(task, "title") + '</strong><small>' + tx(task, "place") + ' · ' + (done ? t("done") : t("interact")) + '</small></span>' +
        '<span class="task-reward">' + (done ? t("claimed") : "+" + task.points + " " + t("pointsUnit")) + '<em>' + (done ? t("shardBag") : t("shards")) + '</em></span></button>';
    }).join("");
    return pageHeader(t("chapterEyebrow"), t("tasksTitle"), '<span class="score-pill">' + points() + ' ' + t("score") + '</span>') +
      '<div class="intro-copy">' + escapeHtml(state.name || (state.language === "en" ? "Visitor" : "游客")) + ' · ' + t("greetings") + '</div>' +
      '<div class="progress-line"><span style="width:' + progressWidth + '%"></span></div>' +
      '<div class="task-list">' + rows + '</div>' +
      '<p class="map-note">' + t("scanFirst") + '</p>';
  }
  function renderTaskDetail() {
    const r = role();
    const task = tasks().find(function (item) { return item.id === activeTaskId; }) || nextTask();
    if (!task) return '<div class="reward-state">' + t("allTasksDone") + '</div><button class="button button-primary button-block" data-nav="fragments">' + t("fragmentView") + '</button>';
    if (completedIds().indexOf(task.id) >= 0) {
      return pageHeader(t("missionClearEyebrow"), t("filed"), '<span class="score-pill">+' + task.points + ' ' + t("pointsUnit") + '</span>') +
        '<div class="token-panel"><img src="assets/longmen-token.webp" alt="' + t("tokenAlt") + '"><div><h3>' + tx(task, "title") + '</h3><p>' + tx(task, "place") + t("clueFiled") + shardName(task) + t("got") + task.points + t("pointsSuffix") + '</p></div></div>' +
        '<button class="button button-primary button-block" data-nav="tasks">' + t("nextTask") + ' <span>→</span></button>';
    }
    const selected = selectedAnswer;
    const options = task.options.map(function (option, index) {
      let cls = "choice-button";
      if (selected === index) cls += " selected";
      return '<button class="' + cls + '" data-action="select-answer" data-answer="' + index + '">' + String.fromCharCode(65 + index) + "　" + option + '</button>';
    }).join("");
    const allFinished = completedCount() + 1 === r.tasks.length;
    const portraitAlt = state.role === "guard" ? t("guardNpcAlt") : t("caravanNpcAlt");
    return pageHeader(t("npcEyebrow"), tx(task, "title"), '<span class="score-pill">+' + task.points + ' ' + t("pointsUnit") + '</span>') +
      '<div class="mission-location"><span>⌖　' + tx(task, "place") + '</span><span>' + t("fragmentMark") + shardName(task) + ' ' + t("fragment") + '</span></div>' +
      '<div class="photo-tip"><small>' + t("photoPrompt") + '</small><p>' + tx(task, "photo") + '</p></div>' +
      '<div class="npc-card"><img class="npc-portrait" src="' + r.portrait + '" alt="' + portraitAlt + '"><div class="npc-copy"><small>NPC · ' + tx(r, "npc") + '</small><h2>' + tx(task, "npcLine") + '</h2><p>' + t("interactionHelp") + '</p></div><span class="mission-stamp">关</span></div>' +
      '<p class="mission-copy">' + tx(task, "line") + '</p>' +
      (task.id === "c5" ? '<div class="rule-note">' + t("outsideWarning") + '</div>' : '') +
      '<div class="field-label">' + tx(task, "question") + '</div><div class="choice-grid">' + options + '</div>' +
      '<button class="button button-primary button-block" data-action="complete-task" ' + (selected === null ? "disabled" : "") + '>' + t("completeInteraction") + ' <span>→</span></button>' +
      '<div class="task-footer"><span>' + t("instant") + '</span><span>' + (allFinished ? t("finalShard") : t("couponPoints")) + '</span></div>';
  }
  function renderFragments() {
    const r = role();
    const taskList = r.tasks;
    const slots = taskList.map(function (task, index) {
      const found = completedIds().indexOf(task.id) >= 0;
      return '<div class="fragment-slot ' + (found ? "found" : "") + '"><span class="slot-lock">' + (found ? t("completed") : t("undiscovered")) + '</span><span class="fragment-mark">' + (found ? shardGlyph(task) : "·") + '</span><small>' + (found ? shardName(task) : t("fragment") + " " + (index + 1)) + '</small></div>';
    }).join("");
    const complete = isComplete();
    return pageHeader("RELIC INVENTORY", state.language === "en" ? "Fragments & token" : "碎片与令牌", '<span class="score-pill">' + completedCount() + ' / ' + taskList.length + '</span>') +
      '<div class="fragment-summary"><div><div class="eyebrow">FIVE CLUES · ONE PASS</div><h2>' + (complete ? t("tokenComplete") : t("tokenIncomplete")) + '</h2></div><span class="score-pill">' + points() + ' ' + t("score") + '</span></div>' +
      '<div class="fragment-grid">' + slots + '</div>' +
      '<div class="token-panel"><img src="assets/longmen-token.webp" alt="' + t("tokenAlt") + '"><div><h3>' + (complete ? t("tokenGift") : t("tokenPending")) + '</h3><p>' + (complete ? t("tokenAllDone") : t("tokenProgress")) + '</p></div></div>' +
      '<button class="button ' + (complete ? "button-primary" : "button-quiet") + ' button-block" data-nav="' + (complete ? "rewards" : "tasks") + '">' + (complete ? t("giftButton") : t("continueFind")) + ' <span>→</span></button>' +
      '<p class="reward-note">' + t("saveNote") + '</p>';
  }
  function renderRewards() {
    if (!role()) return renderIdentity();
    const r = role();
    const save = currentSave();
    const gift = isComplete();
    const giftHtml = gift
      ? '<div class="token-panel"><img src="assets/longmen-token.webp" alt="' + t("tokenAlt") + '"><div><h3>' + t("giftUnlocked") + '</h3><p>' + (save.gift ? t("giftRegistered") : t("giftInstruction")) + '</p></div></div>' +
        '<button class="button ' + (save.gift ? "button-quiet" : "button-primary") + ' button-block" data-action="redeem-gift" ' + (save.gift ? "disabled" : "") + '>' + (save.gift ? t("registered") : t("redeemGift")) + (save.gift ? "" : " <span>→</span>") + '</button>'
      : '<div class="reward-state">' + t("taskLeft") + (r.tasks.length - completedCount()) + t("tasksLeftEnd") + points() + t("pointsCanRedeem") + '</div>';
    const couponHtml = couponData.map(function (coupon) {
      const used = save.redeemed.indexOf(coupon.id) >= 0;
      const enough = points() >= coupon.cost;
      return '<div class="reward-card"><span class="reward-icon">' + coupon.icon + '</span><span class="reward-detail"><strong>' + tx(coupon, "title") + '</strong><small>' + tx(coupon, "detail") + (used ? " · " + t("received") : "") + '</small></span>' +
        (used ? '<span class="reward-cost">' + t("received") + '</span>' : '<button class="button button-quiet button-small" data-action="redeem-coupon" data-coupon="' + coupon.id + '" ' + (enough ? "" : "disabled") + '>' + coupon.cost + t("couponRedeem") + '</button>') + '</div>';
    }).join("");
    return pageHeader(t("rewardsEyebrow"), gift ? t("rewardsGift") : t("rewardsPoints"), '<span class="score-pill">' + points() + ' ' + t("score") + '</span>') +
      '<div class="eyebrow">' + (gift ? t("limitedGift") : t("couponTypes")) + '</div>' + giftHtml +
      '<div class="field-label" style="margin-top:15px">' + t("couponLabel") + '</div>' + couponHtml +
      '<p class="reward-note">' + t("rewardNote") + '</p>' +
      '<button class="button button-quiet button-block" style="margin-top:12px" data-action="reset-progress">' + t("reset") + '</button>';
  }
  function renderChrome() {
    document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
    document.title = t("title");
    document.getElementById("brandLocation").textContent = t("brand");
    document.getElementById("brandTitle").textContent = state.language === "en" ? "Longmen Token" : "龙门令";
    document.getElementById("languageToggle").textContent = t("language");
    document.getElementById("languageToggle").setAttribute("aria-label", state.language === "en" ? "切换为中文" : "Switch to English");
    document.getElementById("roleBadge").setAttribute("aria-label", t("ariaRole"));
    document.getElementById("sceneMode").textContent = t("arPreview");
    document.getElementById("scanButtonLabel").textContent = t("scan");
    document.getElementById("scanButton").setAttribute("aria-label", t("scanAria"));
    document.getElementById("navScanLabel").textContent = t("scan");
    document.getElementById("navScan").setAttribute("aria-label", t("scanAria"));
    document.getElementById("bottomNav").setAttribute("aria-label", t("navAria"));
    document.getElementById("routeNavLabel").textContent = t("routeNav");
    document.getElementById("taskNavLabel").textContent = t("taskNav");
    document.getElementById("fragmentNavLabel").textContent = t("fragmentNav");
    document.getElementById("rewardsNavLabel").textContent = t("rewardsNav");
    document.getElementById("scannerEyebrow").textContent = t("scannerEyebrow");
    document.getElementById("scannerTitle").textContent = t("scannerTitle");
    document.getElementById("scannerAim").textContent = t("scannerAim");
    document.getElementById("cameraButton").textContent = t("cameraButton");
    document.getElementById("scanNearbyButton").innerHTML = t("scanNearby") + ' <span>→</span>';
    document.getElementById("scanFoot").textContent = t("scanFoot");
    document.querySelector(".close-button").setAttribute("aria-label", t("close"));
    document.getElementById("cameraStage").setAttribute("aria-label", state.language === "en" ? "AR scene and mission scanner" : "景区实景增强现实扫描区");
    document.getElementById("sceneImage").alt = t("scenicPhotoAlt");
    document.getElementById("scanImage").alt = t("scenicPhotoAlt");
    document.getElementById("relicHint").textContent = t("relicHint");
    if (document.getElementById("scannerModal").hidden) document.getElementById("scanStatus").textContent = t("scannerDemo");
  }
  function render() {
    renderChrome();
    document.body.classList.remove("role-guard", "role-merchant");
    if (state.role === "guard") document.body.classList.add("role-guard");
    if (state.role === "caravan") document.body.classList.add("role-merchant");
    const r = role();
    document.getElementById("roleLabel").textContent = r ? tx(r, "label") + " · " + (state.name || (state.language === "en" ? "Visitor" : "游客")) : t("roleBadge");
    const loc = document.getElementById("sceneLocation");
    const image = document.getElementById("sceneImage");
    const hint = document.getElementById("sceneHint");
    const task = activeTaskId && r ? r.tasks.find(function (item) { return item.id === activeTaskId; }) : nextTask();
    if (task) {
      image.src = task.scene;
      loc.textContent = tx(task, "place") + (state.language === "en" ? " · site photo" : " · 景区实景");
      hint.textContent = completedIds().indexOf(task.id) >= 0 ? t("clueDone") : t("clueNearby");
    } else {
      image.src = r ? "assets/scene-pass.webp" : "assets/scene-east-gate.webp";
      loc.textContent = r ? t("sceneDefault") : (state.language === "en" ? "East Gate · site photo" : "东闸门 · 景区实景");
      hint.textContent = r ? t("relicComplete") : t("relicHint");
    }
    document.getElementById("locationLabel").textContent = locationReady ? t("located") : t("locate");
    document.getElementById("floatingRelic").style.display = "";
    const pages = {
      identity: renderIdentity,
      route: renderRoute,
      tasks: renderTasks,
      task: renderTaskDetail,
      fragments: renderFragments,
      rewards: renderRewards
    };
    document.getElementById("screenContent").innerHTML = (pages[state.screen] || renderIdentity)();
    document.querySelectorAll(".nav-item").forEach(function (item) {
      item.classList.toggle("active", item.dataset.nav === (state.screen === "task" ? "tasks" : state.screen));
    });
    document.getElementById("pageScroll").scrollTop = 0;
    updateClock();
  }
  function updateClock() {
    try {
      document.getElementById("clock").textContent = new Intl.DateTimeFormat(state.language === "en" ? "en-GB" : "zh-CN", { timeZone: "Asia/Shanghai", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());
    } catch (_) {}
  }
  function toast(message) {
    const box = document.getElementById("toast");
    box.textContent = message;
    box.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.classList.remove("show"); }, 2600);
  }
  function setScreen(screen) {
    if (!state.role && screen !== "identity") {
      state.screen = "identity";
      render();
      toast(t("chooseFirst"));
      return;
    }
    state.screen = screen;
    if (screen !== "task") activeTaskId = null;
    persist();
    render();
  }
  function chooseRole(key) {
    if (!roleData[key]) return;
    const field = document.getElementById("playerName");
    if (field) state.name = field.value.trim().slice(0, 12) || (state.language === "en" ? "Visitor" : "游客");
    state.role = key;
    state.screen = "route";
    activeTaskId = null;
    persist();
    render();
    toast(t("roleConfirmed") + tx(roleData[key], "route") + t("routeOpened"));
  }
  function openTask(taskId) {
    const task = tasks().find(function (item) { return item.id === taskId; });
    if (!task) return;
    activeTaskId = taskId;
    selectedAnswer = null;
    state.screen = "task";
    render();
  }
  function completeTask() {
    const task = tasks().find(function (item) { return item.id === activeTaskId; });
    if (!task || selectedAnswer !== task.answer) {
      toast(t("answerWrong"));
      return;
    }
    const save = currentSave();
    if (save.done.indexOf(task.id) < 0) save.done.push(task.id);
    persist();
    activeTaskId = null;
    selectedAnswer = null;
    state.screen = "tasks";
    render();
    if (isComplete()) toast(t("allDoneToast"));
    else toast(t("taskDoneToast") + task.points + t("gotFragment") + shardName(task) + t("fragmentUnit"));
  }
  function renderModal() {
    const next = nextTask();
    document.getElementById("scanImage").src = next ? next.scene : "assets/scene-pass.webp";
    document.getElementById("scanStatus").textContent = next ? t("scanWait") : t("scanDone");
    document.getElementById("scannerModal").hidden = false;
  }
  function stopCamera() {
    if (scannerTimer) { clearInterval(scannerTimer); scannerTimer = null; }
    if (cameraStream) cameraStream.getTracks().forEach(function (track) { track.stop(); });
    cameraStream = null;
    ["sceneVideo", "scanVideo"].forEach(function (id) {
      const video = document.getElementById(id);
      video.classList.remove("is-live");
      video.srcObject = null;
    });
  }
  async function enableCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      document.getElementById("scanStatus").textContent = t("scanNoCamera");
      return;
    }
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      ["sceneVideo", "scanVideo"].forEach(function (id) {
        const video = document.getElementById(id);
        video.srcObject = cameraStream;
        video.classList.add("is-live");
        video.play().catch(function () {});
      });
      document.getElementById("scanStatus").textContent = t("cameraReady");
      if ("BarcodeDetector" in window) {
        const detector = new BarcodeDetector({ formats: ["qr_code"] });
        scannerTimer = setInterval(function () {
          const video = document.getElementById("scanVideo");
          if (!video || video.readyState < 2) return;
          detector.detect(video).then(function (codes) {
            if (codes.length) {
              const val = codes[0].rawValue || (state.language === "en" ? "site marker" : "景区任务牌");
              document.getElementById("scanStatus").textContent = (state.language === "en" ? "QR code detected · " : "识别到二维码 · ") + val.slice(0, 36);
            }
          }).catch(function () {});
        }, 1100);
      }
      toast(t("cameraOn"));
    } catch (_) {
      document.getElementById("scanStatus").textContent = t("cameraPermission");
      toast(t("cameraDenied"));
    }
  }
  function detectClue() {
    const next = nextTask();
    stopCamera();
    document.getElementById("scannerModal").hidden = true;
    if (!role()) {
      toast(t("chooseFirstScan"));
      return;
    }
    if (!next) {
      state.screen = "fragments";
      render();
      toast(t("noClues"));
      return;
    }
    activeTaskId = next.id;
    selectedAnswer = null;
    state.screen = "task";
    render();
    toast(t("found") + tx(next, "place") + t("waitingNpc"));
  }
  function redeemCoupon(id) {
    const coupon = couponData.find(function (item) { return item.id === id; });
    if (!coupon || !currentSave()) return;
    const save = currentSave();
    if (save.redeemed.indexOf(id) >= 0) { toast(t("couponUsed")); return; }
    if (points() < coupon.cost) { toast(t("pointsShort")); return; }
    save.redeemed.push(id);
    persist();
    render();
    toast(t("couponRegistered") + tx(coupon, "title"));
  }
  function handleAction(action, target) {
    switch (action) {
      case "choose-role": chooseRole(target.dataset.role); break;
      case "toggle-language":
        state.language = state.language === "zh" ? "en" : "zh";
        persist();
        render();
        break;
      case "open-identity": setScreen("identity"); break;
      case "open-task": openTask(target.dataset.task); break;
      case "select-answer":
        selectedAnswer = Number(target.dataset.answer);
        render();
        break;
      case "complete-task": completeTask(); break;
      case "scan": renderModal(); break;
      case "close-scan":
        document.getElementById("scannerModal").hidden = true;
        stopCamera();
        break;
      case "enable-camera": enableCamera(); break;
      case "detect-clue": detectClue(); break;
      case "redeem-coupon": redeemCoupon(target.dataset.coupon); break;
      case "redeem-gift":
        if (!isComplete()) { toast(t("finishRouteFirst")); break; }
        currentSave().gift = true;
        persist();
        render();
        toast(t("giftToast"));
        break;
      case "reset-progress":
        if (state.role && window.confirm(t("resetConfirm"))) {
          state.saves[state.role] = { done: [], redeemed: [], gift: false };
          persist();
          state.screen = "route";
          activeTaskId = null;
          render();
          toast(t("resetDone"));
        }
        break;
      case "locate":
        if (!navigator.geolocation) { toast(t("noGeo")); break; }
        navigator.geolocation.getCurrentPosition(function () {
          locationReady = true;
          render();
          toast(t("geoReady"));
        }, function () {
          toast(t("geoDenied"));
        }, { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 });
        break;
      default: break;
    }
  }

  document.addEventListener("click", function (event) {
    const target = event.target.closest("[data-action], [data-nav]");
    if (!target) return;
    if (target.dataset.nav) { setScreen(target.dataset.nav); return; }
    handleAction(target.dataset.action, target);
  });
  document.addEventListener("input", function (event) {
    if (event.target && event.target.id === "playerName") {
      state.name = event.target.value.slice(0, 12);
      persist();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !document.getElementById("scannerModal").hidden) {
      document.getElementById("scannerModal").hidden = true;
      stopCamera();
    }
  });
  document.getElementById("scannerModal").addEventListener("click", function (event) {
    if (event.target.id === "scannerModal") {
      event.currentTarget.hidden = true;
      stopCamera();
    }
  });
  window.addEventListener("beforeunload", stopCamera);
  setInterval(updateClock, 30000);
  render();
}());
