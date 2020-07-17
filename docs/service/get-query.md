---
title: Default Query for Get
---

`$select` as selecting which field to return from server-side. Example `?$select=Name,Key` will returning Name & Key only.

```go
package oscrud

// QueryOne :
type QueryOne struct {
	Select string `query:"$select"`
}

```