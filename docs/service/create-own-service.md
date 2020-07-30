---
title: Creating Own Oscrud Service
sidebar_label: Creating Own Oscrud Service
keywords:
- documentation
- oscrud
- service
- customization
description: custom service for oscrud server
---

For creating own service, you must have implement methods based on `oscrud.Service` interface.


```go
type Service struct {}
func (service Service) Create(ctx oscrud.Context) oscrud.Context {
	// Createing data
}

func (service Service) Find(ctx oscrud.Context) oscrud.Context {
	// List data
}

func (service Service) Get(id string, ctx oscrud.Context) oscrud.Context {
	// Get data ( should be one result always )
}

func (service Service) Update(id string, ctx oscrud.Context) oscrud.Context {
	// update data
}

func (service Service) Patch(id string, ctx oscrud.Context) oscrud.Context {
	// patch data
}

func (service Service) Delete(id string, ctx oscrud.Context) oscrud.Context {
	// delete data
}
```