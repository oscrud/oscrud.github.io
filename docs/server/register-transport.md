---
title: Registering Trasnports
---

For register transport for the server, *must be called before any endpoint registration*. Every transport must be implemented based on interface.

```go
package oscrud

func main() {
	server := oscrud.NewOscrud()
    server.RegisterTransport(e.NewEcho(echo.New()).UsePort(3000))
}
```