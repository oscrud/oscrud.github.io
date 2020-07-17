---
title: Request Lifecycle
---

List of oscrud original content-type. you can pass custom content type also but you will need to handle at transport layer so will depend on transport.

```go
// ContentType Definition
var (
	ContentTypePlainText = "text/plain"
	ContentTypeHTML      = "text/html"
	ContentTypeJSON      = "application/json"
	ContentTypeXML       = "application/xml"
)
```