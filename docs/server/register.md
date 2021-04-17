---
title: Server Options
sidebar_label: Server Options
keywords:
- documentation
- oscrud
- server
- options
- example
description: server options of oscrud server
---

Metadata is like state but is for single request, so won't have value in another request. 

| Method                        | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| UseMiddleware(Middleware)     | Register middleware                              |
| UseBanner(bool)               | Disable or enable banner ( enabled by default)   |
| UseRecover(func(interface{})) | Recover handler                                  |
| UseDevServer(string)          | Start with development server to work with tools |