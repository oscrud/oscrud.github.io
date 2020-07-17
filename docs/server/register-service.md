---
title: Registering Services
---

For registering service on a specified path, basically service would includes 6 endpoints. It's have same registering strategy with endpoint.


* GET /basePath - Service.Find
* GET /basePath/:$id - Service.Get
* POST /basePath - Service.Create
* PUT /basePath/:$id - Service.Update
* PATCH /basePath/:$id - Service.Patch
* DELETE /basePath/:$id - Service.Delete

```go
package oscrud

func main() {
	server := oscrud.NewOscrud()
    middleware := oscrud.MiddlewareOptions{
        Before: []oscrud.Handler{
            func(ctx oscrud.Context) oscrud.Context {
                log.Println("I'm Before Middleware")
                return ctx
            }
        },
    }

	// Sqlike database conn initialize
	client := sql.MustConnect("mysql",
		options.Connect().
			SetHost("localhost").
			SetPort("3306").
			SetUsername("root").
			SetPassword("test"),
	)
	client.SetPrimaryKey("Key")

	// Service Definition
    service := sqlike.NewService(client).Database("test")

    // User is a query model struct based on oscrud.DataModel interface
	server.RegisterService("test", service.ToService("user", new(User)), middleware)
}
```