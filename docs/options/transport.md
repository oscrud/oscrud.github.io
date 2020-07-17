---
title: Transport Options
---

Transport Options is to limiting endpoint registration for some specified transport. Disabled transport will not receiving that route registeration.

```go
disable := oscrud.TransportOptions{
	DisableRegister: map[oscrud.TransportID]bool{
		echo.TransportID: true,
	},
}
```
