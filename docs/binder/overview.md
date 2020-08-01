---
title: Overview
sidebar_label: Overview
keywords:
- documentation
- oscrud
- binder
description: overview oscrud binder
---

Binder is a serialize & deserialize library to easily customize serialize / deserialize from *Type A* to *Type B*. Binder will be default binder for oscrud framework.

Every type have default binding method included primitive types, slice, array and struct. By default, primitive types will convert to string and `reflect.Set()` to field. For slice, struct, array will be check `assignableTo` only `reflect.Set()` to field. You can still customize all of the binder method, registered method will have higher priority than default method.

You can use this package independently instead together with oscrud.

### Example

```go
package main

import (
    "log"
    "github.com/oscrud/oscrud-binder"
)

func main() {
    binder := binder.NewBinder()
    
    var data int32
    
    if err := binder.Bind(&data, "30"); err != nil {
        log.Println(err)
    }
    log.Println(data) // 30

    if err := binder.Bind(&data, int64(10)); err != nil {
        log.Println(err)
    }
    log.Println(data) // 10

    if err := binder.Bind(&data, "20.5"); err != nil {
        log.Println(err) // trying to convert 20.5 to int32
    }
}
```