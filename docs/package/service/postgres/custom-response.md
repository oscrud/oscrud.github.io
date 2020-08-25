---
title: Customize Response
sidebar_label: Customize Response
keywords:
- documentation
- oscrud
- service
- postgres
description: oscrud go-pg service customize response
---

customizing response will be just easy by passing a function. return will under your control so you need return using context `ctx`.


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
    pg.UseCustomResponse(customResponse)

	// Service Definition
	server.RegisterService("/user", pg.ToService(db, model), new(oscrud.ServiceOptions))

	// Everything done? Start the server.
	server.Start()
}

func customResponse(ctx *oscrud.Context, result *postgres.ServiceResult, err error) *oscrud.Context {
    if err != nil {
        return ctx.Error(http.StatusBadRequest, err)
    }
    return ctx.JSON(http.StatusOK, result)
}
```