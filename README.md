[README.md](https://github.com/user-attachments/files/33658354/README.md)
[README.md](https://github.com/user-attachments/files/33658359/README.md)# Longmen Ling WeChat Mini Program

This directory contains the native WeChat Mini Program version of the Longmen Ling Jiayuguan AR Adventure prototype. It is a separate implementation from the static web app in the parent directory and supports the same bilingual, two-route visitor experience.

## Import and preview

1. Open WeChat Developer Tools and choose **Import Project**.
2. Select this directory: `longmen-wechat-mini-program`.
3. In `project.config.json`, replace `appid` with an AppID you are authorized to use, or select a supported test AppID in the developer tools.
4. Configure WeChat's location privacy declaration before testing location access. The app declares `scope.userLocation` in `app.json`.
5. Preview in the simulator or use device preview. The prototype does not require a backend.

## Visitor experience

- Select **Ming Garrison** or **Western Caravan**. Each role has its own route, NPC missions, score, fragments, and reward progress.
- Review the satellite-image route map and recommended stop order.
- Use the persistent scenic AR-style panel and scan entry point to discover mission clues.
- Scan task QR codes containing the current role's mission ID: `g1`–`g5` for the Garrison or `c1`–`c5` for the Caravan. Use the simulated scan flow when no physical markers are available.
- Interact with NPCs, complete a photo prompt, answer the mission question, and receive points plus one Longmen Token fragment.
- Collect five fragments to unlock the complete token and limited-gift registration screen. Points can also be used for demonstration photography, food, and souvenir coupons.
- Switch between Chinese and English from the app header.

Visitor progress, coupon claims, and gift status are stored locally on the device. They are demonstration data and are not connected to a scenic-area account, inventory, or redemption system.

## Routes

**Ming Garrison:** East Gate → Guerrilla General's Mansion → Guanghua Tower → Rouyuan Tower → Jiayuguan Tower.

**Western Caravan:** outer trade road by the East Gate → Wenchang Pavilion → open ground and the Great Wall foundation trail → corridor between the outer and inner walls → Luocheng / West Wengcheng → proposed Gobi viewpoint outside the West Gate.

The caravan route is drawn through the open space between the outer and inner walls. The West Gate viewpoint and some trail segments are proposed; confirm access, safety, and heritage restrictions with the scenic-area operator before deployment. Route lines are planning illustrations, not surveyed navigation tracks.

## Prototype limitations

The AR panel uses scenic photos and a simulated scanning overlay. The Mini Program can scan QR codes and request location permission, but it does not provide live image-recognition AR, NFC, geofencing, or turn-by-turn navigation. Location does not automatically validate mission completion.

Before public launch, obtain approval for routes, photo and map usage, QR/NFC markers, and heritage-area access. Add the required privacy notices and a backend for accounts, task validation, reward inventory, and coupon redemption.

See the [project README](../README.md) for the web version, media references, and additional project details. Product ideas were reviewed in the official [WeChat Mini Program demo](https://github.com/wechat-miniprogram/miniprogram-demo), [AR.js](https://github.com/AR-js-org/AR.js), and [GP-Scavenger](https://github.com/StoutsHonor/GP-Scavenger). This project does not copy their source code or assets.
