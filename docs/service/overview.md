---
title: Overview
sidebar_label: Overview
keywords:
- documentation
- oscrud
- service
description: service overview of oscrud server
---

Service has 6 action following [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) standard. Basically service will registering 6 endpoints by default. Currently creating a service may required some basic knowledge on `reflect` package, we trying to minimize usage of reflect when creating own service.

* GET /basePath - Service.Find
* POST /basePath - Service.Create
* GET /basePath/:id - Service.Get
* PUT /basePath/:id - Service.Update
* PATCH /basePath/:id - Service.Patch
* DELETE /basePath/:id - Service.Delete