---
title: Specific Binding
sidebar_label: Specific Binding
keywords:
- documentation
- oscrud
- binder
description: oscrud binder bind specific data
---

Specific binding will bind value based on specified tag. If you want to bind from all with specified key, you can use all binding instead of specific binding. Binding struct when calling must have addressable, if not will return error `ErrSourceNotAddressable`.

* `header` will target to Header. 
* `query` will target to Query. 
* `body` will target to Body. 
* `param` will target to Param.
* `state` will target to Request Level State

```go
var i struct {
    Token string `header:"token"`
    IsNew string `query:"isNew"`
    Username string `body:"username"`
    Password string `body:"password"`
    Id string `param:"id"`
    State string `state:"state"`
}

ctx.Bind(&i)
```