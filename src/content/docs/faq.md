---
title: "Frequently Asked Questions"
description: "The story behind Moe Memos, supported Memos server versions, offline and local mode, reverse proxy tips, and desktop availability."
---

## Behind Moe Memos

There are hundreds of decent note-taking apps today. When something comes to mind, I want to write down a memo as soon as possible. When learning new things, I tend to take quick notes before organizing them into other second-brain knowledge bases.

I discovered [flomo](https://flomoapp.com/) and became a pro member in 2021. It has a curated feature set, a strong community, and works well for quick capture.

At the same time, I was transitioning to a self-hosted digital lifestyle—building a homelab with network-attached storage, an always-on mini PC, and a Raspberry Pi for study and fun so that I could own and store all my data at home.

Later I discovered [Memos](https://github.com/usememos/memos) from [Awesome-Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted). It was a satisfying alternative for capturing ideas and very easy to set up. After a month of daily use, I decided to build a native mobile app for it.

So here it is: **Moe Memos**—a minimal, delightful, open-source mobile app for capturing thoughts and ideas that feels native to your device. It is available for free on the [App Store](https://apps.apple.com/app/moe-memos/id1643902185), [Google Play](https://play.google.com/store/apps/details?id=me.mudkip.moememos), [F-Droid](https://f-droid.org/packages/me.mudkip.moememos/), and [GitHub Releases](https://github.com/mudkipme/MoeMemosAndroid/releases/latest).

> *Moe (萌え)* refers to cute, adorable, and inspiring.

## Can I use Moe Memos offline or without a server?

Yes. Moe Memos is **offline-first** and works in two ways:

- **Local on-device mode**: Use Moe Memos without installing or hosting a Memos server at all. Your memos and attachments stay on your device, and you can export local backups (ZIP) at any time. On Android, you can also restore local backups or transfer your local memos and attachments to a Memos server later.
- **Two-way Memos sync**: Connect to your self-hosted Memos server and keep writing, editing, pinning, or archiving while offline. Changes are saved locally and automatically pushed when your connection returns.

## Why self-hosting?

Self-hosting gives you complete control over your own data. Along the way, it is also a great way to learn how software and infrastructure work—practicing with tools like Docker, Kubernetes, and FluxCD at home.

Whether you have a NAS, a mini PC, an open-source router, a cloud VPS, or prefer to start locally on your phone first, [Memos](https://github.com/usememos/memos) and **Moe Memos** make owning your notes straightforward.

## Supported Memos server versions

The current versions of Moe Memos support:

- **Memos 0.21.0**
- **Memos 0.27.0 to 0.31.0**
- **Memos 26.10.0 to 26.11.2**

Memos updates can introduce breaking API changes. If you run an unsupported or newer Memos version, use [Mortis](https://github.com/mudkipme/mortis) to translate the newer Memos API to the Memos 0.21.0 OpenAPI, then sign in again in Moe Memos.

## Syncing attachments failed with "413 Entity Too Large"

If your Memos server sits behind a reverse proxy, increase the maximum allowed client request body size. For example, in Nginx:

```nginx
client_max_body_size 128m;
```

## Is there a Mac, Windows, or Linux version?

You can install the iPad/iOS app directly on **Apple Silicon Macs** from the App Store today, and dedicated macOS support is planned. On Windows and Linux, you can use the official Memos web interface from any browser while syncing with Moe Memos on mobile.
