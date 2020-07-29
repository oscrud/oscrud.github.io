---
title: Transport Options
sidebar_label: Transport Options
keywords:
- documentation
- oscrud
- transport
- options
description: transport options for oscrud server
---

Transport Options is to limiting endpoint registration for some specified transport. Disabled transport will not receiving that route registeration.

```go
disable := oscrud.TransportOptions{
	DisableRegister: map[oscrud.TransportID]bool{
		echo.TransportID: true,
	},
}
```
