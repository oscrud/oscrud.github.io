---
title: Constructing Request
---

Constructing new request for access endpoint. Mainly for transport.

```go
req := oscrud.NewRequest().
    Transport(t).
    Context(e).
    SetBody(body).
    SetQuery(query).
    SetHeader(header).
    SetParam(param)
```