---
title: Timeout Options
sidebar_label: Timeout Options
keywords:
- documentation
- oscrud
- timeout
- options
description: timeout options for oscrud server
---

Timeout options is apply timeout for endpoint or server. Priority will take endpoint timeout options, if not specified will take server's timeout options. If none of them specified, will have a *default 30 seconds timeout* for every request.

```go
timeout := oscrud.TimeoutOptions{
	Duration: 1 * time.Microsecond,
	OnTimeout: func(ctx oscrud.Context) oscrud.Context {
		return ctx.Error(408, errors.New("Another requestimeout")).End()
	},
}
```
