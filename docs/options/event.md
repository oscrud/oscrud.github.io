---
title: Event Options
sidebar_label: Event Options
keywords:
- documentation
- oscrud
- event
- options
description: event options for oscrud server
---

Event options is for applying event-driven functionality, like `OnComplete`. For some of the transport may have bidirectional communicate, so have to remind when every requests complete. And this function will invoke using go-routine. As order will run `endpoint options` and only we run `server options`.

```go
event := oscrud.EventOptions{
	OnComplete: func(ctx oscrud.Context) {
		log.Println("This running from go-routine as event-drive OnComplete().")
	},
}
```
