---
title: Pagination Setting
sidebar_label: Pagination Setting
keywords:
- documentation
- oscrud
- service
- postgres
- pagination
description: oscrud go-pg service pagination setting
---

there's two type of pagination, `cursor` and `offset`. by default will use `offset` as well. If you want ot use `cursor` and doesn't want `cursor` to display truth value, you can chooose encoding type `hex` or `base64`. And when passing `UsePagination` second value is to determine is it wan't to return next page url.

### Example 

```go
package main

import (
	"github.com/go-pg/pg"
	"github.com/go-pg/pg/orm"
	"github.com/oscrud/oscrud"
	"github.com/oscrud/postgres"
)

func main() {
    db := // go-pg database client
    model := // oscrud service model
    server := oscrud.NewOscrud()
    
    pg := postgres.New()
    pg.UsePagination(postgres.PaginationTypeCursor, true)
    pg.UseEncode(postgres.EncodeTypeHex)

	// Service Definition
	server.RegisterService("/user", pg.ToService(db, model), new(oscrud.ServiceOptions))

	// Everything done? Start the server.
	server.Start()
}
```