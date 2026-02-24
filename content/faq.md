---
title: "FAQ"
menu: "main"
---

### Behind Moe Memos

There are hundreds of decent note-taking apps today. When something comes to my mind, I want to write down a memo as soon as possible. When learning new things, I tend to take quick notes before writing them down in other second-brain knowledge bases.

I discovered [flomo](https://flomoapp.com/) and became its pro member in 2021. It has a curated feature set, a powerful community, and it's the perfect tool for quick capture.

In the meantime, I'm transitioning to a more niche digital lifestyle. I built a homelab with network-attached storage, an always-on mini PC, and a Raspberry Pi for study and fun. I want to self-host the services I rely on and store all my data at home.

Later I discovered [Memos](https://github.com/usememos/memos) from [Awesome-Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted). It's a satisfying alternative for capturing ideas and it's very easy to set up. After a month of usage, I decided to build a mobile app for it.

So here it is: **Moe Memos**. It's a mobile app to capture thoughts and ideas. It has a minimal and delightful design and feels native to your device.

It's [open source](https://github.com/mudkipme?tab=repositories&q=moe+memos) and available for free on the [App Store](https://apps.apple.com/app/moe-memos/id1643902185), [F-Droid](https://f-droid.org/packages/me.mudkip.moememos/) and [Google Play](https://play.google.com/store/apps/details?id=me.mudkip.moememos).

> Moe (萌え) refers to cute, adorable and inspiring.

### Why self-hosting?

Self-hosting means the user has complete control over their data. Through self-hosting, users can learn more about how software and computer infrastructure work. I became proficient in Docker, Kubernetes, FluxCD, and many other tools by practicing on my own.

For computer nerds like me, privacy advocates, and anyone who already has an open-source router, a NAS, a used PC at home, or a cloud server thousands of miles away, self-hosting is well-suited, and I hope you try [Memos](https://github.com/usememos/memos) and **Moe Memos**.

### Supported Memos server versions

The current version of Moe Memos supports Memos 0.21.0 and Memos 0.26.0 to 0.26.2. Memos updates may introduce breaking API changes. If you are using a version higher than 0.26.2, it is recommended to use [Mortis](https://github.com/mudkipme/mortis) to convert the newer Memos API to the Memos 0.21.0 API and re-login in Moe Memos.

### Syncing attachments failed with "413 Entity Too Large" message

If you put your Memos server behind a proxy, please increase the maximum allowed size of the client request body. Here's the Nginx configuration for example:

```nginx
client_max_body_size 128m;
```

### Is there a Mac/Windows/Linux version?

You can install Moe Memos on Apple Silicon Macs for now, and official macOS support is planned.

### Can I use Moe Memos offline?

Moe Memos is fully functional offline, and you can sync with your Memos server when you are back online. You can also use Moe Memos locally without a Memos installation.
