---
title: "Memos Support Matrix"
---

This page lists the supported versions of [✍️memos](https://github.com/usememos/memos) by Moe Memos. If you run into any compatibility issues, please refer to this page to upgrade or downgrade the app or server versions.

It is recommended to use [docker tag](https://hub.docker.com/r/neosmemo/memos/tags) to specify the latest currently supported server version.

## iOS

| App Version (below) | 0.5.0 - 0.7.3 | 0.8.0 - 0.9.0 | 0.9.1 | 0.10.0 - 0.10.1 | 0.10.2 - 0.10.3 | 0.11.0 - 0.11.2 | 0.12.0 - 0.13.1 | 0.13.2 | 0.14.0 | 0.14.1 - 0.14.4 |
|--|--|--|--|--|--|--|--|--|--|--|
| **1.5.4** | ✅ | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 1.5.3 | ✅ | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| 1.5.2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| 1.5.1 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - | - |
| 1.3.4 - 1.5 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - | - | - |
| 1.3.2 - 1.3.3 | ✅ | ✅ | ✅ | ✅ | ✅ | - | - | - | - | - |
| 1.3.1 | ✅ | ✅ | ✅ | ✅ | - | - | - | - | - | - |
| 1.2.1 - 1.3 | ✅ | ✅ | ✅ | - | - | - | - | - | - | - |
| 1.1.2 - 1.2 | ✅ | ✅ | - | - | - | - | - | - | - | - |
| 1.0 - 1.1.1 | ✅ | - | - | - | - | - | - | - | - | - |

## Android

| App Version (below) | 0.5.0 - 0.7.3 | 0.8.0 - 0.9.0 | 0.9.1 | 0.10.0 - 0.10.1 | 0.10.2 - 0.10.3 | 0.11.0 - 0.11.2 | 0.12.0 - 0.13.1 | 0.13.2 | 0.14.0 - 0.14.4 |
|--|--|--|--|--|--|--|--|--|--|
| **0.7.0** | - | - | - | - | - | - | - | - | ✅ |
| 0.6.2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| 0.6.1 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| 0.5.4 - 0.6.0 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - | - | - |
| 0.5.2 - 0.5.3 | ✅ | ✅ | ✅ | ✅ | ✅ | - | - | - | - |
| 0.5.1 | ✅ | ✅ | ✅ | ✅ | - | - | - | - | - |
| 0.4.1 | ✅ | ✅ | ✅ | - | - | - | - | - | - |
| 0.2.1 - 0.4.0 | ✅ | ✅ | - | - | - | - | - | - | - |
| 0.1.0 - 0.2.0 | ✅ | - | - | - | - | - | - | - | - |

## Updates

- Memos 0.14.1 changed the response of `/api/v1/status` which broke Moe Memos for iOS, it is fixed in 1.5.4.
- Memos 0.14.0 introduced major API breaking changes. It is supported in Moe Memos iOS 1.5.3 / Android 0.7.0. As earlier versions are available for download and the difficulty to maintain API differences, Moe Memos for Android 0.7.0 dropped support for Memos 0.13.2 or eariler. Moe Memos for iOS also removed the workaround to the CSRF issue of 0.9.1, which is skipped in 0.10.0.
- Memos 0.13.2 introduced an API change to logging-in, and add authentication for attachments. This is supported in Moe Memos iOS 1.5.2 / Android 0.6.2.
- Memos 0.12.0 changed the URI of attachments, which is supported by Moe Memos iOS 1.5.1 / Android 0.6.1.
- Memos 0.9.0 changed how tags are created and stored. Discovering new tags when saving memos is supported by Moe Memos iOS 1.5 / Android 0.6.0.
- Memos 0.11.0 indroduced external storage, which is supported by Moe Memos iOS 1.3.4 / Android 0.5.4.
- Memos 0.10.2 introduced an API change to resource uploading. This is fixed in iOS 1.3.2 / Android 0.5.2.
- Memos 0.10.0 changed sign out API from `/auth/logout` to `/auth/signout`. This is supported in iOS 1.3.1 / Android 0.5.1.
- Memos 0.9.1 fixed CSRF security issues, which affects username and password login on Moe Memos. This is fixed in iOS 1.2.1 / Android 0.4.1.
- Memos 0.8.0 changed the schema of user and added username field. This is supported in Moe Memos iOS 1.1.2 / Android 0.2.1.
- Attachments in Moe Memos is only supported for Memos 0.5.0 or later.