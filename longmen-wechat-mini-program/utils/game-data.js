module.exports = {
  "guard": {
    "key": "guard",
    "label": "边军",
    "name": "大明边军",
    "route": "大明边军巡防线",
    "motto": "验明身份 · 巡城寻令 · 登楼合印",
    "duration": "约 70 分钟",
    "portrait": "assets/npc-guard.webp",
    "npc": "巡关校尉",
    "en": {
      "label": "Garrison",
      "name": "Ming Garrison",
      "route": "Ming Garrison Patrol",
      "motto": "Check in · Patrol · Reunite the token",
      "npc": "Border Captain",
      "duration": "About 70 min"
    },
    "stops": [
      "东闸门 · 验明正身",
      "游击将军府",
      "光化楼",
      "柔远楼",
      "嘉峪关城楼"
    ],
    "stopsEn": [
      "East Gate · Identity check",
      "Guerrilla General’s Mansion",
      "Guanghua Tower",
      "Rouyuan Tower",
      "Jiayuguan Tower"
    ],
    "tasks": [
      {
        "id": "g1",
        "title": "东闸门验明正身",
        "place": "东闸门「天下雄关」题刻",
        "points": 20,
        "shard": "东",
        "icon": "门",
        "scene": "assets/scene-east-gate.webp",
        "photo": "与「天下雄关」题刻同框，完成入关打卡",
        "line": "校尉请你先在东闸门完成身份核验。找到城门题刻中的关城关键词，再接过巡防腰牌。",
        "question": "大明边军进入巡防线的第一步是什么？",
        "options": [
          "在东闸门核验身份",
          "先去西门交货",
          "前往城外找烽火台"
        ],
        "answer": 0,
        "npcLine": "守门校尉正在「天下雄关」题刻旁验看通行腰牌。",
        "en": {
          "title": "Check in at the East Gate",
          "place": "East Gate · ‘天下雄关’ inscription",
          "photo": "Frame the ‘天下雄关’ inscription for your entry check-in",
          "line": "The captain asks you to verify your identity at the East Gate. Find the pass inscription and receive your patrol token.",
          "question": "What is the first step on the garrison patrol?",
          "options": [
            "Verify identity at the East Gate",
            "Deliver goods at the west gate",
            "Find a beacon outside the pass"
          ],
          "npcLine": "The gate captain is checking patrol tokens beside the pass inscription."
        }
      },
      {
        "id": "g2",
        "title": "游击将军府接令",
        "place": "游击将军府",
        "points": 35,
        "shard": "将",
        "icon": "戍",
        "scene": "assets/scene-pass.webp",
        "photo": "在府衙院落寻找边军巡防令的印记",
        "line": "巡防令由将军府发出。与府中书吏核对关城布防次序，再领取下一枚令纹。",
        "question": "巡防令应由哪处官署发出？",
        "options": [
          "游击将军府",
          "文昌阁",
          "西门外商道"
        ],
        "answer": 0,
        "npcLine": "将军府的书吏摊开巡防图，等你指出发令官署。",
        "en": {
          "title": "Collect orders at the mansion",
          "place": "Guerrilla General’s Mansion",
          "photo": "Look for the patrol seal in the historic courtyard",
          "line": "The patrol order comes from the General’s Mansion. Check the garrison sequence with the clerk and collect the next token mark.",
          "question": "Which office issues the patrol order?",
          "options": [
            "Guerrilla General’s Mansion",
            "Wenchang Pavilion",
            "The west gate merchant trail"
          ],
          "npcLine": "The mansion clerk opens a patrol map and waits for you to identify the issuing office."
        }
      },
      {
        "id": "g3",
        "title": "光化楼辨认巡更暗记",
        "place": "光化楼 · 城楼观景位",
        "points": 45,
        "shard": "巡",
        "icon": "烽",
        "scene": "assets/scene-east-gate.webp",
        "photo": "以光化楼与关城墙体为背景取景",
        "line": "登临光化楼前，请与传令兵核对巡更信号。关城与祁连山方向都是游客常取景的开阔视野。",
        "question": "巡更交接时，先核验哪一项？",
        "options": [
          "令牌与名册",
          "驼队货物",
          "游客门票"
        ],
        "answer": 0,
        "npcLine": "城楼上的传令兵压低声音，向你展示一枚磨旧的边防木牌。",
        "en": {
          "title": "Read the watch signal at Guanghua Tower",
          "place": "Guanghua Tower · viewing point",
          "photo": "Photograph the tower with the fortress wall in frame",
          "line": "Before climbing Guanghua Tower, verify the watch signal with the messenger. The broad views of the fortress and Qilian Mountains are popular photo scenes.",
          "question": "What is checked first at a watch handover?",
          "options": [
            "Pass token and roster",
            "Caravan cargo",
            "Visitor ticket"
          ],
          "npcLine": "The tower messenger shows you a worn border-defense tablet."
        }
      },
      {
        "id": "g4",
        "title": "柔远楼望楼协巡",
        "place": "柔远楼 · 西侧登城视点",
        "points": 55,
        "shard": "守",
        "icon": "楼",
        "scene": "assets/scene-wall.webp",
        "photo": "寻找可将光化楼与柔远楼同框的安全观景角度",
        "line": "从柔远楼回望光化楼，确认两座城楼之间的巡防呼应。请留在开放参观区域，不攀越围栏。",
        "question": "柔远楼在关城的哪一侧？",
        "options": [
          "西侧",
          "东侧",
          "关城外南侧"
        ],
        "answer": 0,
        "npcLine": "守楼军士指向对望的楼阁，等待你确认西侧巡防位置。",
        "en": {
          "title": "Patrol from Rouyuan Tower",
          "place": "Rouyuan Tower · west rampart viewpoint",
          "photo": "Find a safe viewpoint that frames both Guanghua and Rouyuan Towers",
          "line": "Look back toward Guanghua Tower from Rouyuan Tower to confirm the signal between the two towers. Stay within visitor areas and behind barriers.",
          "question": "On which side of the fortress is Rouyuan Tower?",
          "options": [
            "West",
            "East",
            "South outside the fortress"
          ],
          "npcLine": "The tower guard points to the facing towers and asks you to confirm the western patrol position."
        }
      },
      {
        "id": "g5",
        "title": "嘉峪关城楼合令验印",
        "place": "嘉峪关城楼 · 登楼观景点",
        "points": 85,
        "shard": "令",
        "icon": "合",
        "scene": "assets/scene-pass.webp",
        "photo": "在城楼上眺望戈壁与祁连山，完成终章打卡",
        "line": "五处巡防线索齐备。登上嘉峪关城楼，与守关将领完成终章验印，合成完整龙门令。",
        "question": "集齐令纹后，如何完成终章？",
        "options": [
          "在嘉峪关城楼验合令牌",
          "将碎片留在墙上",
          "把令牌交给沿途商贩"
        ],
        "answer": 0,
        "npcLine": "守关将领展开验印图，邀你共同确认龙门令的归属。",
        "en": {
          "title": "Reunite the token at Jiayuguan Tower",
          "place": "Jiayuguan Tower · panoramic viewpoint",
          "photo": "Capture the Gobi and Qilian Mountain panorama from the tower",
          "line": "All five patrol clues are ready. Meet the captain at Jiayuguan Tower for the final seal and reunite the Longmen Token.",
          "question": "How do you finish the final chapter?",
          "options": [
            "Verify the token at Jiayuguan Tower",
            "Leave the fragments on the wall",
            "Give the token to a vendor"
          ],
          "npcLine": "The captain opens the seal chart and invites you to verify the Longmen Token."
        }
      }
    ]
  },
  "caravan": {
    "key": "caravan",
    "label": "商队",
    "name": "西域商队",
    "route": "西域商队出关线",
    "motto": "商道寻路 · 文牒通关 · 远眺戈壁",
    "duration": "约 75 分钟",
    "portrait": "assets/npc-caravan.webp",
    "npc": "西域行商",
    "en": {
      "label": "Caravan",
      "name": "Western Caravan",
      "route": "Western Caravan Passage",
      "motto": "Follow the trade road · Prepare papers · See the Gobi",
      "npc": "Silk Road Merchant",
      "duration": "About 75 min"
    },
    "stops": [
      "东闸门外侧商道",
      "文昌阁 · 筹措通关文牒",
      "外城开阔地 · 长城根基古道",
      "罗城 / 西瓮城缓冲区",
      "西门外戈壁观景点"
    ],
    "stopsEn": [
      "Merchant trail outside the East Gate",
      "Wenchang Pavilion · prepare travel papers",
      "Open outer grounds · Great Wall foundation trail",
      "Luocheng / West Wengcheng buffer",
      "Gobi viewpoint outside the West Gate"
    ],
    "tasks": [
      {
        "id": "c1",
        "title": "东闸门外商道寻客",
        "place": "东闸门外侧商道",
        "points": 20,
        "shard": "商",
        "icon": "驼",
        "scene": "assets/scene-east-gate.webp",
        "photo": "以东闸门与商道入口为背景，记录商队启程",
        "line": "商队从关外东闸门商道出发。与行商确认队伍身份和行进方向，再开始西行旅程。",
        "question": "商队从哪里启程？",
        "options": [
          "东闸门外侧商道",
          "关城西门内",
          "嘉峪关城楼顶"
        ],
        "answer": 0,
        "npcLine": "行商在东闸门外侧等候，手中拿着尚未盖印的商队路引。",
        "en": {
          "title": "Meet the caravan outside the East Gate",
          "place": "Merchant trail outside the East Gate",
          "photo": "Check in with the East Gate and merchant trail behind you",
          "line": "The caravan begins on the merchant trail outside the East Gate. Confirm the party’s identity and direction with the merchant before setting west.",
          "question": "Where does the caravan begin?",
          "options": [
            "Merchant trail outside the East Gate",
            "Inside the West Gate",
            "On top of Jiayuguan Tower"
          ],
          "npcLine": "A merchant waits outside the East Gate with an unstamped travel pass."
        }
      },
      {
        "id": "c2",
        "title": "文昌阁筹措通关文牒",
        "place": "文昌阁",
        "points": 35,
        "shard": "牒",
        "icon": "契",
        "scene": "assets/scene-east-gate.webp",
        "photo": "拍摄文昌阁屋檐与商队通关文牒",
        "line": "行商请你前往文昌阁筹措通关文牒。与掌柜补齐货单上的印记，取得下一站的通行凭据。",
        "question": "过关前要先备齐什么？",
        "options": [
          "通关文牒",
          "边军巡防腰牌",
          "城楼钥匙"
        ],
        "answer": 0,
        "npcLine": "掌柜在文昌阁旁等候，手中握着一张未盖印的通关文牒。",
        "en": {
          "title": "Prepare travel papers at Wenchang Pavilion",
          "place": "Wenchang Pavilion",
          "photo": "Photograph the pavilion roofline with the caravan papers",
          "line": "The merchant sends you to Wenchang Pavilion for travel papers. Complete the cargo seal with the shopkeeper and receive the next pass.",
          "question": "What must be prepared before the pass?",
          "options": [
            "Travel papers",
            "A garrison patrol token",
            "A tower key"
          ],
          "npcLine": "The shopkeeper waits beside Wenchang Pavilion with an unstamped travel document."
        }
      },
      {
        "id": "c3",
        "title": "外城开阔地寻古道",
        "place": "外城开阔地 · 长城根基古道",
        "points": 45,
        "shard": "道",
        "icon": "途",
        "scene": "assets/scene-wall.webp",
        "photo": "沿开阔地寻找不影响通行的城墙与戈壁构图",
        "line": "沿外城开阔地绕行，寻找长城根基古道的行商标记。开阔地可分散停留拍摄，具体可走范围以现场围栏和开放指引为准。",
        "question": "沿外城古道拍摄时应如何行动？",
        "options": [
          "沿开放步道行走并避开墙体",
          "攀上遗址拍摄",
          "离开指引路线进入封闭区"
        ],
        "answer": 0,
        "npcLine": "驼队向导在开阔地标示可安全停留的位置。",
        "en": {
          "title": "Find the old trail across the outer grounds",
          "place": "Open outer-city grounds · Great Wall foundation trail",
          "photo": "Find a clear composition of the wall and Gobi without blocking the trail",
          "line": "Circle through the open outer grounds and look for the merchant mark on the Great Wall foundation trail. The open ground can spread photo stops; follow fences and current visitor guidance.",
          "question": "How should you take photos along the outer trail?",
          "options": [
            "Stay on open paths and away from the wall",
            "Climb the historic wall",
            "Enter a closed area"
          ],
          "npcLine": "The caravan guide points out a safe place to pause in the open grounds."
        }
      },
      {
        "id": "c4",
        "title": "罗城瓮城核验货单",
        "place": "罗城 / 西瓮城缓冲区",
        "points": 55,
        "shard": "关",
        "icon": "印",
        "scene": "assets/scene-wall.webp",
        "photo": "寻找西瓮城门洞与定城砖相关的现场讲解点",
        "line": "进入出关缓冲区后，与关口书吏核对货单。西瓮城、门洞和定城砖常见于游客拍摄记录；请以现场开放路线为准。",
        "question": "出关前应该在哪处缓冲区复核货单？",
        "options": [
          "罗城 / 瓮城区域",
          "城外未开放遗址",
          "长城第一墩"
        ],
        "answer": 0,
        "npcLine": "书吏在瓮城入口等待核验货单与通关文牒。",
        "en": {
          "title": "Verify the cargo list at Luocheng and Wengcheng",
          "place": "Luocheng / West Wengcheng buffer",
          "photo": "Look for the West Wengcheng gateway and the on-site story of the ‘settling brick’",
          "line": "At the passage buffer, verify the cargo list with the gate clerk. The West Wengcheng, gateway, and settling-brick story appear often in visitor photos; follow the open route on site.",
          "question": "Where should the cargo list be checked before departure?",
          "options": [
            "Luocheng / Wengcheng area",
            "A closed ruin outside the pass",
            "The First Pier of the Great Wall"
          ],
          "npcLine": "The clerk waits at the Wengcheng entrance to check the cargo list and travel papers."
        }
      },
      {
        "id": "c5",
        "title": "西门外戈壁远眺交令",
        "place": "西门外戈壁观景点（拟议）",
        "points": 85,
        "shard": "令",
        "icon": "合",
        "scene": "assets/scene-pass.webp",
        "photo": "在获准开放的西门外观景位置拍摄关城与戈壁",
        "line": "在拟议的西门外戈壁观景点完成远眺打卡，与接头人核验全部文牒和令纹。该点位及步行通道需景区现场确认后才能上线。",
        "question": "在西门外完成任务前，首先要确认什么？",
        "options": [
          "该观景点已开放且可安全抵达",
          "可以穿越任何围栏",
          "可以在城墙遗址上取景"
        ],
        "answer": 0,
        "npcLine": "接头人约在获准开放的观景处，等待你完成最终验印。",
        "en": {
          "title": "Complete the passage at the West Gate Gobi viewpoint",
          "place": "Gobi viewpoint outside the West Gate (proposed)",
          "photo": "Photograph the fortress and Gobi from an approved viewpoint outside the West Gate",
          "line": "At the proposed West Gate Gobi viewpoint, complete the panorama check-in and verify all papers and token marks with the courier. The location and walking access must be confirmed by the site before launch.",
          "question": "What must be confirmed before this task?",
          "options": [
            "The viewpoint is open and safely accessible",
            "You may cross any barrier",
            "You may climb the historic wall"
          ],
          "npcLine": "The courier waits at an approved viewpoint for the final seal."
        }
      }
    ]
  }
};
