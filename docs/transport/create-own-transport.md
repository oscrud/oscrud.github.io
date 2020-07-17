---
title: Creating Own Oscrud Transport
---

For creating own transport, you have to implement method from `oscrud.Transport`. Basically have 2 type registraion way. Way 1 is in `Register` for those transport which support endpoint routing like Echo. Way 2 is in `Start` for those transport doesn't have a router support like `net/http` package.

```go
type Transport struct {}

const (
	TransportName oscrud.TransportID = "TransportName"
)

func (t *Transport) Name() oscrud.TransportID {
	return TransportName
}

func (t *Transport) Register(method string, endpoint string, handler oscrud.TransportHandler) {
	// Every endpoint registration will call this method.
}

func (t *Transport) Start() error {
	// Transport start receiving request
}
```
