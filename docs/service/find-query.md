---
title: Default Query for Find
---

`$select` as selecting which field to return from server-side. Example `?$select=Name,Key` will returning Name & Key only.

`$order` as order based on desc or asc.

`$cursor` as cursor for pagination based on Service, they will filter by cursor or offset.

`$offset` as offset for pagination based on Service, they will filter by cursor or offset.

`$page` as page for pagination based on Service, they will filter by cursor or offset.

`$limit` as limit for pagination based on Service, they will filter by cursor or offset.

```go
package oscrud

// Query :
type Query struct {
	Cursor string `query:"$cursor"`
	Offset int    `query:"$offset"`
	Page   int    `query:"$page"`
	Limit  int    `query:"$limit"`
	Order  string `query:"$order"`
	Select string `query:"$select"`
}
```