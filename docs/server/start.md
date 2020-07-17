---
title: Start Server
---

For start the oscrud server, server starting will only start all the registered transport. No transported registered will panic with err. No any setup will be invoke at this step, all would be done when `register`, so internal call / access can be work before or even not calling `Start()`.

```go
func main() {
	server := oscrud.NewOscrud()
	server.Start()
}
```