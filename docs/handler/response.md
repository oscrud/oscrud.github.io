---
title: Response Context
sidebar_label: Response Context
keywords:
- documentation
- oscrud
- handler
- response
description: oscrud response context object
---

| Method                                                      | Description                                                                                                                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Set(key string, value string) Context                       | Append header to response, will override if key exists                                                                                                |
| NoContent() Context                                         | Response with status 204, and empty result.                                                                                                           |
| NotFound() Context                                          | Response with status 404, and not found error.                                                                                                        |
| String(status int, text string) Context                     | Response with status, and raw string. Content type will be set as `text/plain`                                                                        |
| HTML(status int, html string) Context                       | Response with status, and html string. Content type will be set as `text/html`.                                                                       |
| JSON(status int, i interface{}) Context                     | Response with status, and interface. Content type will be set as `application/json`.                                                                  |
| XML(status int, i interface{}) Context                      | Response with status, and interface. Content type will be set as `application/xml`.                                                                   |
| Send(status int, contentType string, i interface{}) Context | Response with status, content type and interface. Transport should be handle on this if not will return error `ErrResponseFailed`.                    |
| Error(status int, exception error)                          | Response with status, and given error                                                                                                                 |
| Stack(status int, exception error)                          | Response with status, and given error ( stack will be provided ). `errors.WithStack()`.                                                               |
| End() Context                                               | A signal to tell handler, the flow is reach end already. If `End()` didn't call until end of the handler, will return error `ErrResponseNotComplete`. |
| Response() Response                                         | Return response object                                                                                                                                |