---
title: Creating Own Oscrud Service
---

For creating own service, you must have implement methods based on `oscrud.Service` interface. There built in have 2 Query Struct ( `oscrud.Query`, `oscrud.QueryOne` ) for `bind` data from incoming requests, mainly for standardize query naming.


```go
type Service struct {}
func (service Service) Create(ctx oscrud.Context) oscrud.Context {
	// Createing data
}

func (service Service) Find(ctx oscrud.Context) oscrud.Context {
	// List data
}

func (service Service) Get(ctx oscrud.Context) oscrud.Context {
	// Get data ( should be one result always )
}

func (service Service) Update(ctx oscrud.Context) oscrud.Context {
	// update data
}

func (service Service) Patch(ctx oscrud.Context) oscrud.Context {
	// patch data
}

func (service Service) Delete(ctx oscrud.Context) oscrud.Context {
	// delete data
}
```