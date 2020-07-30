---
title: Override Primary Key
sidebar_label: Override PK
keywords:
- documentation
- oscrud
- service
- postgres
- pagination
description: oscrud go-pg service pagination setting
---

If you wan't to override the default selection from model. You can use `UsePrimaryKey` to override. First key is the *primary key field name of go struct* and the second only the *primary key field name of sql*. Setting primary key will also affect `cursor` pagination, since `cursor` paginatinon is using model's primary key valu as next cursor. After setting primary key, service `Get`, `Patch`, `Update`, `Delete` will use this primary key as comparison `WHERE primaryKey = id` to get data in postgres.

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
    pg.UsePrimaryKey("ID", "id")

	// Service Definition
	server.RegisterService("/user", pg.ToService(db, model), new(oscrud.ServiceOptions))

	// Everything done? Start the server.
	server.Start()
}
```