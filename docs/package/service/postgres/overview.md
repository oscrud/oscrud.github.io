---
title: Postgres ( go-pg )
sidebar_label: Postgres ( go-pg )
keywords:
- documentation
- oscrud
- service
- postgres
description: go-pg service implementation for oscrud server
---

postgres service for oscrud and build using [go-pg](https://github.com/go-pg/pg).


### Usage

| Method                                         | Usage                                                                             |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| New() *Postgres                                | Default constructor for initialization                                            |
| UseCustomResponse(ResponseBuilder) *Postgres   | Customizing Result                                                                |
| UsePagination(paginationType, bool) *Postgres  | Select pagination type and is meta return with next page url by default is offset |
| UsePrimaryKey(string, string) *Postgres        | Set primary key by default will take first primary key from model                 |
| UseEncode(encodeType) *Postgres                | Select encode type for cursor pagination to encode next cursor                    |
| ToService(pg.DB, oscrud.ServiceModel) *Service | Transform current setting into a service for registering                          |

### Installation

```
$ go get github.com/oscrud/postgres
```

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