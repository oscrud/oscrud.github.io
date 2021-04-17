---
title: Initialize Server
sidebar_label: Initialize Server
keywords:
- documentation
- oscrud
- initialize
- example
description: initialization server of oscrud server
---

For example you can clone [scaffold](https://github.com/oscrud/scaffold) or start with below code. Mainly must have these code to run with `oscrud-cli`.

```go
package main

import (
	oscrud "github.com/oscrud/core"
	"github.com/oscrud/scaffold/service"
)

func main() {
	oscrud := oscrud.NewOscrud()
	oscrud.Register(new(service.ExampleService))
	oscrud.UseDevServer("some_secret_password")
	oscrud.Start()
}
```