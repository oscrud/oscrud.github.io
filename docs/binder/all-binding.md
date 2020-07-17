---
title: All Binding
---

All binding will bind all possible valus by get key from `reflect.Tag` and retrieve value from all maps, if exists will bind to struct. `qm` tag have higher priority then `json` so if `qm` tag exists, will take `qm` instead of `json`. After having the tag value will try to get value from *header, query, body, param and request-level state*. Binding struct when calling must have addressable, if not will return error `ErrSourceNotAddressable`.

```go
var i struct {
    Id string `qm:"id"`
    Token string `json:"token" qm:"x-authorization"`
}

ctx.BindAll(&i)
```