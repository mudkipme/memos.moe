---
title: "Memos Support Matrix"
---

This page lists the supported versions of [✍️memos](https://github.com/usememos/memos) by Moe Memos. If you run into any compatibility issues, please refer to this page to upgrade or downgrade the app or server versions.

It is recommended to use [docker tag](https://hub.docker.com/r/neosmemo/memos/tags) to specify the latest currently supported server version.

## iOS

| App Version (below) | 0.5.0 - 0.7.3 | 0.8.0 - 0.9.0 | 0.9.1 | 0.10.0 - 0.10.1 | 0.10.2 |
|--|--|--|--|--|--|
| *1.3.2 (upcoming)* | ✅ | ✅ | ✅ | ✅ | ✅ |
| **1.3.1 (current)** | ✅ | ✅ | ✅ | ✅ | - |
| 1.2.1 - 1.3 | ✅ | ✅ | ✅ | - | - |
| 1.1.2 - 1.2 | ✅ | ✅ | - | - | - |
| 1.0 - 1.1.1 | ✅ | - | - | - | - |

## Android

| App Version (below) | 0.5.0 - 0.7.3 | 0.8.0 - 0.9.0 | 0.9.1 | 0.10.0 - 0.10.1 | 0.10.2 |
|--|--|--|--|--|--|
| *0.5.2 (upcoming)* | ✅ | ✅ | ✅ | ✅ | ✅ |
| **0.5.1 (current)** | ✅ | ✅ | ✅ | ✅ | - |
| 0.4.1 | ✅ | ✅ | ✅ | - | - |
| 0.2.1 - 0.4.0 | ✅ | ✅ | - | - | - |
| 0.1.0 - 0.2.0 | ✅ | - | - | - | - |

## Updates

- Memos 0.10.2 introduced an API change to resource uploading. This will be fixed in iOS 1.3.2 / Android 0.5.2.
- Memos 0.10.0 changed sign out API from `/auth/logout` to `/auth/signout`. This is supported in iOS 1.3.1 / Android 0.5.1.
- Memos 0.9.1 fixed CSRF security issues, which affects username and password login on Moe Memos. This is fixed in iOS 1.2.1 / Android 0.4.1.
- Memos 0.8.0 changed the schema of user and added username field. This is supported in Moe Memos iOS 1.1.2 / Android 0.2.1.
- Attachments in Moe Memos is only supported for Memos 0.5.0 or later.