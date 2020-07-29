---
title: Constructing Request
sidebar_label: Constructing Request
keywords:
- documentation
- oscrud
- transport
description: constructing oscrud transport request
---

Constructing new request for access endpoint. Mainly for transport to construct request when receive any incoming requests.

```go
req := oscrud.NewRequest().
    Transport(t).
    Context(e).
    SetBody(body).
    SetQuery(query).
    SetHeader(header).
    SetParam(param)
```