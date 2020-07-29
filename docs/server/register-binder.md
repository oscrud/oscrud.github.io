---
title: Register Binder
sidebar_label: Register Binder
keywords:
- documentation
- oscrud
- binder
description: registering binder to oscrud server
---

For register data binding method for specific struct / array / slice. Incoming data can be any type so suggested to be make a switch-case statement with default by handling other type that not supported ( usually just a string from 'header', 'query', 'body' or 'param' ).

```go
package main

import (
    "log"
    "fmt"
    "github.com/oscrud/oscrud"
)

type AnyStruct struct {
    Data string
}

func main() {
    server := oscrud.NewOscrud()
    
    // register from string to AnyStruct
    server.RegisterBinder(string(""), AnyStruct{}, func(raw interface{}) (interface{}, error) {
        return AnyStruct{fmt.Sprintf(raw)}
    })

    // register from AnyStruct to string
    // without this will will parse automatically with fmt.Sprintf("%v", raw)
    server.RegisterBinder(AnyStruct{}, string(""), func(raw interface{}) (interface{}, error) {
        strct := raw.(AnyStruct)
        return strct.Data
    })
}
```