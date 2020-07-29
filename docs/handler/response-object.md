---
title: Response Object
sidebar_label: Response Object
keywords:
- documentation
- oscrud
- handler
- response
description: oscrud response object
---

| Method                              | Description                  |
| ----------------------------------- | ---------------------------- |
| ContentType() string                | Return response content type |
| ResponseHeaders() map[string]string | Return response headers      |
| Status() int                        | Return response status       |
| Exception() error                   | Return response error        |
| Result() interface{}                | Return response result       |
| ErrorMap() map[string]interface{}   | Return pretty error          |