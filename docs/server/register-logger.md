---
title: Register Logger
sidebar_label: Register Logger
keywords:
- documentation
- oscrud
- logger
description: register logger to oscrud server
---

For register logger for the server. Every request made will be run all logger in goroutine, prevent for slowing down requests.

```go
package oscrud

// Logger :
type Logger struct {
}

// Log :
func (l Logger) Log(operation string, content string) {
	log.Println("Operation - ", operation)
	log.Println("Content - ", content)
}

// StartRequest :
func (l Logger) StartRequest(ctx oscrud.Context) {
	log.Println("**************************************")
	log.Println("RequestID - ", ctx.RequestID())
	log.Println("Method - ", ctx.Method())
	log.Println("Path - ", ctx.Path())
	log.Println("State - ", ctx.State())
	log.Println("Header - ", ctx.Headers())
	log.Println("Query - ", ctx.Query())
	log.Println("Body - ", ctx.Body())
	log.Println("**************************************")
}

// EndRequest :
func (l Logger) EndRequest(ctx oscrud.Context) {
	log.Println("**************************************")
	log.Println("RequestID - ", ctx.RequestID())
	log.Println("Method - ", ctx.Method())
	log.Println("Path - ", ctx.Path())
	log.Println("State - ", ctx.State())
	log.Println("Header - ", ctx.Headers())
	log.Println("Query - ", ctx.Query())
	log.Println("Body - ", ctx.Body())
	log.Println("**************************************")
}

func main() {
	server := oscrud.NewOscrud()
    server.RegisterLogger(Logger{})
}
```