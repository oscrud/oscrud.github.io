---
title: Getting Started
sidebar_label: Getting Started
keywords:
- documentation
- oscrud
- getting start
- example
description: getting start and example of oscrud server
---

If you doesn't have *Go* installed on your pc. You can get it [here](https://golang.org/doc/install). After installed *Go* on your pc, you can install CLI and go module with command below.

```
$ go get -u github.com/oscrud/core
$ go install github.com/oscrud/core/oscrud
```

After complete installation, you can Go with a simple [scaffold](https://github.com/oscrud/scaffold). Once cloned you can start your application in development mode with simple `oscrud dev`. 

```go
package main

import (
	oscrud "github.com/oscrud/core"
)

func main() {
	options := &oscrud.DevServerOptions{
		Password: "some_secret_password",
		RequestMarshaler: func(name string, rType reflect.Type) []byte {
			rValue := reflect.New(rType)
			message := rValue.Interface()
			str, _ := json.Marshal(message)
			return str
		},
	}
	oscrud := oscrud.NewOscrud()
	oscrud.Register(new(service.ExampleService))
	oscrud.UseDevServer(options)
	oscrud.Start()
}
```