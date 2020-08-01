---
title: Register Binder
sidebar_label: Register Binder
keywords:
- documentation
- oscrud
- binder
description: register new binder to oscrud binder
---

Registering new binder for sepcific type ( struct, array or slice ), primitive not supported yet. 

```go
package main

import (
    "log"
    "fmt"
    "github.com/oscrud/oscrud-binder"
)

type AnyStruct struct {
    Data string
}

func main() {
    binder := binder.NewBinder()
    binder.Register(string(""), AnyStruct{}, func(raw interface{}) (interface{}, error) {
        return AnyStruct{fmt.Sprintf(raw)}
    })

    binder.Register(AnyStruct{}, string(""), func(raw interface{}) (interface{}, error) {
        strct := raw.(AnyStruct)
        return strct.Data
    })

    strct := new(AnyStruct)
    if err := binder.Bind(&strct, "will set to data"); err != nil {
        log.Println(err)
    }
    log.Println(strct.Data) // will set to data

    var str string
    if err := binder.Bind(&str, strct); err != nil {
        log.Println(err)
    }
    log.Println(str) // will set to data

    if err := binder.Bind(&strct, 10); err != nil {
        log.Println(err) // Trying to convert 10 to struct AnyStruct
    }
}
```