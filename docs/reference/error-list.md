---
title: Errors List
sidebar_label: Errors List
keywords:
- documentation
- oscrud
- error
description: error list for oscrud server
---

| Error                   | Description                                                                             | Message                                       |
| ----------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- |
| ErrNotFound             | default endpoint not found error message & `ctx.NotFound()` error message               | endpoint or service not found                 |
| ErrResponseFailed       | error message when `Send()`'s information, transport unable to handler or not supported | response doesn't return properly in transport |
| ErrSourceNotAddressable | error message when binding source is not addressable                                    | binder source must be addressable             |
| ErrRequestTimeout       | default request timeout error message                                                   | request timeout                               |