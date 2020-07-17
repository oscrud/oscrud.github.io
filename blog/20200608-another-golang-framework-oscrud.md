---
title: Another Golang Framework - Oscrud
author: Oska Ng
author_title: Maintainer of Oscrud
author_image_url: https://avatars3.githubusercontent.com/u/15674107?s=400&u=1a548a4df62740cde8c27ad823a3c5851b6b6984&v=4
author_url: https://github.com/Oskang09
tags: [oscrud]
---

Oscrud is a golang resftul api wrapper framework. The purpose of the framework is make everything independent like transport, authentication, middleware and parser. So we can change the component to what we want anytime without changing code. This framework is inspired from [FeathersJS](https://feathersjs.com/). Mainly the framework is able to work with different library & services. Most of the part can be customizable are transports, service, logger, binder and option for now.


## Table Of Contents

* [Transport](#transport)
* [Service](#service)
* [Logger](#logger)
* [Binder](#binder)
* [Options](#options)


### Transport

Transport part in oscrud is about the way for framework receiving request and response to request like http and websockets. Currently only support [Echo](https://github.com/oscrud/echo) which done by myself. Transport is an interface, its have only three method that must implement. `Name()` to declare transport name to whether know the request come from which transport. `Register()` will called everytime register endpoint have been called at core struct. `Start()` will just been called once when core struct have fired start.

```go
type Transport struct {}

func (t *Transport) Name() string {
	return "TransportName"
}

func (t *Transport) Register(method string, endpoint string, handler oscrud.TransportHandler) {
	// Every endpoint registration will call this method.
}

func (t *Transport) Start() error {
	// Transport start receiving request
}
```

### Service

Service part in oscrud is expect to be support ORM and expose CRUD endpoints with a single model definition. Service by default come with 6 actions following [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) standard. Currently customizing a service may required some basic knowledge on `reflect` package, but we trying to minimize usage of `reflect` when creating own services and we also only supported one of the ORM only for now [Sqlike](https://github.com/oscrud/sqlike). Here the list of endpoint will be registered.

```
GET /basePath - Service.Find
POST /basePath - Service.Create
GET /basePath/:$id - Service.Get
PUT /basePath/:$id - Service.Update
PATCH /basePath/:$id - Service.Patch
DELETE /basePath/:$id - Service.Delete
```

For creating own service, must implement the interface have been defined in `oscrud`. And there also come with 2 built in `Query` objects, `oscrud.Query` and `oscrud.QueryOne` for bind data from requests and standardize query naming for all services. Example of built-in query for `oscrud.QueryOne` is just `$select` for ORM to know selecting which field only. And `oscrud.Query` have `$select`, `$order` to defined ascending or descending, and some pagination keyword ( `$cursor`, `$offset`, `$page`, `$limit` ).

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

For work with the service, need a service model. Service Model is a struct usually will be a table in database. So when work with service, we can use method to filter result or returning data even prevent toxic data injection. $id tag will automatically assign input value from endpoint, such as GET /test/:$id for a Get action.

```go
// User :
type User struct {
	Key  *types.Key `json:"-"`
	ID   string     `json:"id" qm:"$id" sqlike:"-"`
	Name string     `json:"name"`
}

// ToCreate :
func (user *User) ToCreate() (interface{}, error) {
	user.Key = types.NewIDKey("User", nil)
	user.Name += "-" + util.RandomString(6)
	if len(user.Name) > 20 {
		return nil, errors.New("username have a maximum length 20")
	}
	return user, nil
}

// ToResult :
func (user *User) ToResult() (interface{}, error) {
	if user.Key != nil {
		user.ID = user.Key.ID()
	}

	return user, nil
}

// ToQuery :
func (user *User) ToQuery() (interface{}, error) {
	if user.ID != "" {
		return expr.Equal("Key", "User,"+user.ID), nil
	}

	var query interface{}
	if user.Name != "" {
		query = expr.Equal("Name", user.Name)
	}
	return query, nil
}

// ToPatch :
func (user *User) ToPatch(incoming oscrud.ServiceModel) (interface{}, error) {
	incomingUser := incoming.(*User)
	user.Name = incomingUser.Name
	return user, nil
}

// ToUpdate :
func (user *User) ToUpdate(incoming oscrud.ServiceModel) (interface{}, error) {
	incomingUser := incoming.(*User)
	user.Name = incomingUser.Name
	return user, nil
}

// ToDelete :
func (user *User) ToDelete() (interface{}, error) {
	return user, nil
}
```

### Logger

Logger is an important part for every library, framework to track down any issues or bug in the code. So logger will be track down when incoming request & outgoing response, also when doing API user can also log down the operation, content with the core struct. All of the logger method will run in goroutine to prevent slowing down when processing request.


```go
// Logger :
type Logger struct {}

// Log :
func (l Logger) Log(operation string, content string) {
	log.Println("Operation - ", operation)
	log.Println("Content - ", content)
}

// StartRequest :
func (l Logger) StartRequest(ctx oscrud.Context) {
	log.Println("**************************************")
	log.Println("RequestID - ", ctx.RequestID())
	log.Println("Method - ", ctx.Method())
	log.Println("Path - ", ctx.Path())
	log.Println("State - ", ctx.State())
	log.Println("Header - ", ctx.Headers())
	log.Println("Query - ", ctx.Query())
	log.Println("Body - ", ctx.Body())
	log.Println("**************************************")
}

// EndRequest :
func (l Logger) EndRequest(ctx oscrud.Context) {
	log.Println("**************************************")
	log.Println("RequestID - ", ctx.RequestID())
	log.Println("Method - ", ctx.Method())
	log.Println("Path - ", ctx.Path())
	log.Println("State - ", ctx.State())
	log.Println("Header - ", ctx.Headers())
	log.Println("Query - ", ctx.Query())
	log.Println("Body - ", ctx.Body())
	log.Println("**************************************")
}

func main() {
	server := oscrud.NewOscrud()
    server.RegisterLogger(Logger{})
    server.Log("Action", "Content")
}
```

### Binder

Binder is a serialize & deserialize library to easily customize serialize / deserialize from Type A to Type B. Binder will be default binder for oscrud framework but you can make your own binder also ( but not recommended ). Every type have default binding method included primitive types, slice, array and struct. By default, primitive types will convert to string and `reflect.Set()` to field. For slice, struct, array will be check `assignableTo` only `reflect.Set()` to field. You can still customize all of the binder method, registered method will have higher priority than default method. This binder is another package under Oscrud also so you can use it standalone without the framework. [Oscrud Binder](https://github.com/oscrud/binder)

With Default Method ( for primitive types only )

```go
package main

import (
    "log"
    "github.com/oscrud/oscrud-binder"
)

func main() {
    binder := binder.NewBinder()
    
    var data int32
    
    if err := binder.Bind(&data, "30"); err != nil {
        log.Println(err)
    }
    log.Println(data) // 30

    if err := binder.Bind(&data, int64(10)); err != nil {
        log.Println(err)
    }
    log.Println(data) // 10

    if err := binder.Bind(&data, "20.5"); err != nil {
        log.Println(err) // trying to convert 20.5 to int32
    }
}
```

With Custom Method ( Registered to Binder before use )

```go
package main

import (
    "log"
    "fmt"
    "github.com/oscrud/oscrud-binder"
)

type AnyStruct struct {
    Data string
}

func main() {
    binder := binder.NewBinder()
    
    // register from string to AnyStruct
    binder.Register(string(""), AnyStruct{}, func(raw interface{}) (interface{}, error) {
        return AnyStruct{fmt.Sprintf(raw)}
    })

    // register from AnyStruct to string
    // without this will will parse automatically with fmt.Sprintf("%v", raw)
    binder.Register(AnyStruct{}, string(""), func(raw interface{}) (interface{}, error) {
        strct := raw.(AnyStruct)
        return strct.Data
    })

    strct := new(AnyStruct)
    if err := binder.Bind(&strct, "will set to data"); err != nil {
        log.Println(err)
    }
    log.Println(strct.Data) // will set to data

    var str string
    if err := binder.Bind(&str, strct); err != nil {
        log.Println(err)
    }
    log.Println(str) // will set to data

    if err := binder.Bind(&strct, 10); err != nil {
        log.Println(err) // Trying to convert 10 to struct AnyStruct
    }
}
```

### Options

Options will be like middleware at other framework. Currently only supported `TimeoutOptions`, `EventOptions` and `MiddlewareOption`. It can be under server level or endpoint level.

```go
package oscrud

server := oscrud.NewOscrud()
middleware := oscrud.MiddlewareOptions{
	Before: []oscrud.Handler{
        func(ctx oscrud.Context) oscrud.Context {
            log.Println("I'm Before Middleware")
            return ctx
        }
    },
}
event := oscrud.EventOptions{
    OnComplete: func(ctx oscrud.Context) {
        log.Println("This running from go-routine as event-drive OnComplete().")
    },
}

// You can just apply all in one line.
server.UseOptions(middleware, event)

// Also work with endpoint only
server.RegisterEndpoint("GET", "/test", func(ctx oscrud.Context) oscrud.Context {
		return ctx.String(200, "Hello World").End()
}, middleware, event)
```


Lastly, this framework is still under development so not suggested to use in production. There also come with an [example](https://github.com/oscrud/example) about all current features and [documentation](https://github.com/oscrud/oscrud) is under main repository will be expose soon with the github templates. Any suggestions would be greatly appreciated. 