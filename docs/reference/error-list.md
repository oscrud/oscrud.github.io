---
title: Errors List
---

| Error                   | Description                                                                             | Message                                       |
| ----------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- |
| ErrNotFound             | default endpoint not found error message & `ctx.NotFound()` error message               | endpoint or service not found                 |
| ErrResponseNotComplete  | error message when `End()` doesn't called and reach end of handler.                     | response doesn't called end in all handlers   |
| ErrResponseFailed       | error message when `Send()`'s information, transport unable to handler or not supported | response doesn't return properly in transport |
| ErrSourceNotAddressable | error message when binding source is not addressable                                    | binder source must be addressable             |
| ErrRequestTimeout       | default request timeout error message                                                   | request timeout                               |