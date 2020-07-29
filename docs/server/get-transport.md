---
title: Get Transport
sidebar_label: Get Transport
keywords:
- documentation
- oscrud
- transport
description: get transport using transport id from oscrud server
---

Get transport by id from transport list 

```go
package oscrud

func main() {
	server := oscrud.NewOscrud()
	echo, exists := server.GetTransport(echo.TransportID)
}
```