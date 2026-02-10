---
title: "FAQ"
menu: "main"
---

### Behind Moe Memos

There are hundreds of decent note-taking apps today. When something comes to my mind, I want to write down a memo as soon as possible. When learning new things, I tend to take quick notes before write down in other second brain knowledge bases.

I discovered [flomo](https://flomoapp.com/) and became its pro member in 2021. It has a curated feature set, a powerful community and it's the perfect tool for quick capture.

In the meantime, I'm transforming into a more niche digital life. I built a Homelab with a network-attached storage, an always-on mini PC and a Raspberry Pi for study and fun. I want to self host the services I rely on and store all my data at home.

Later I discovered [✍️memos](https://github.com/usememos/memos) from [Awesome-Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted). It's a satisfying alternative for capturing ideas and it's very easy to set up. After a month's usage, I decided to build a mobile app for it.

So here it is **Moe Memos**. It's an mobile app to capture thoughts and ideas. It has a minimal and delightful design and feels native to your device.

It's [open source](https://github.com/mudkipme?tab=repositories&q=moe+memos) and available for free on [App Store](https://apps.apple.com/app/moe-memos/id1643902185), [F-Droid](https://f-droid.org/packages/me.mudkip.moememos/) and [Google Play](https://play.google.com/store/apps/details?id=me.mudkip.moememos).

> Moe (萌え) refers to cute, adorable and inspiring.

### Why self-hosting?

Self-hosting means the user has complete control over their data. Through self-hosting, the user can learn more about how software and computer infrastructure work. I became proficient in Docker, Kubernetes, Flux CD and many tools via practicing myself.

For computer nerds like me, privacy advocates and whoever already have an open source router, a NAS, an used PC at home, or a cloud server thousands miles away, self-hosting is well suited and I wish you try [✍️memos](https://github.com/usememos/memos) and **Moe Memos**.

### Supported Memos server versions

Current Moe Memos version supports Memos 0.21.0, 0.26.0 and 0.26.1. Memos updates may introduce breaking API changes. If you are using a version higher than 0.26.1, it is recommended to use [Mortis](https://github.com/mudkipme/mortis) to convert the newer Memos API to the Memos 0.21.0 API and re-login in Moe Memos.

### Uploading images failed with "413 Entity Too Large" message

If you put your Memos server behind a proxy, please increase the maximum allowed size of the client request body. Here's the nginx configruation for example:

```nginx
client_max_body_size 128m;
```

### Is there an Mac/Windows/Linux version?

While you can install Moe Memos on Apple Silicon Macs, for the best desktop experience the web version of [✍️memos](https://github.com/usememos/memos) is recommended, which can be installed as a Progressive Web App.

### Can I use Moe Memos offline?

Please use the latest [TestFlight](https://testflight.apple.com/join/YVHheZ50) (iOS) or [GitHub Pre-release](https://github.com/mudkipme/MoeMemosAndroid/releases) (Android) version for local on-device storage support, as well as offline-first syncing with Memos server support.

Be aware these versions are still in testing and you should backup your Memos database first.
