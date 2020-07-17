---
title: Get Transport
---

Get transport by id from transport list 

```go
package oscrud

func main() {
	server := oscrud.NewOscrud()
	echo, exists := server.GetTransport(echo.TransportID)
}
```