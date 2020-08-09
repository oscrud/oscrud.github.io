---
title: All Binding
sidebar_label: All Binding 
keywords:
- documentation
- oscrud
- binder
description: oscrud binder bind all data
---

All binding will bind all possible valus by get key from `reflect.Tag` and retrieve value from all maps, if exists will bind to struct. `oscrud` tag have higher priority then `json` so if `oscrud` tag exists, will take `oscrud` instead of `json`. After having the tag value will try to get value from *header, query, body, param, form and request-level state*. Binding struct when calling must have addressable, if not will return error `ErrSourceNotAddressable`. You can pass extra setting for bind using golang built-in ways, etc `json` package.

```go
var i struct {
    Id string `oscrud:"id"`
    Token string `json:"token" oscrud:"x-authorization"`
}

ctx.BindAll(&i)
// bind with json package
ctx.BindAll(&i, oscrud.BinderSetting{UseJSON:true})
```