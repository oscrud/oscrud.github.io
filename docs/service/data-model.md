---
title: Defining Model
sidebar_label: Defining Model
keywords:
- documentation
- oscrud
- service
- model
description: defining model for service of oscrud server
---

Service model is a model struct usually will be a table from database. Service model must have implmenet method from `oscrud.DataModel`. So when creating own service, we can use method to filter result or returning data even prevent toxic data injection. `id` tag will automatically assign input value from endpoint, such as `GET /test/:id` for a `Get` action.

| Method                                                | Usage                                                                                                           |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ToQuery(Context, ServiceAction) (interface{}, error)  | For returning query syntax based on service requirement, for sqlike is expr cosntruct from their query builder. |
| ToResult(Context, ServiceAction) (interface{}, error) | For construct model and return for find / get                                                                   |
| ToUpdate(Context, ServiceModel) error                 | For construct model and return for update                                                                       |
| ToPatch(Context, ServiceModel) error                  | For construct model and return for patch                                                                        |
| ToDelete(Context) error                               | For construct model and return for delete                                                                       |
| ToCreate(Context) error                               | For construct model and return for create                                                                       |


```go
// User :
type User struct {
	ID   int    `json:"id" oscrud:"id"`
	Name string `json:"name"`
}

// ToCreate :
func (user *User) ToCreate(ctx *oscrud.Context) error {
	if len(user.Name) > 20 {
		return errors.New("username have a maximum length 20")
	}
	return nil
}

// ToResult :
func (user *User) ToResult(ctx *oscrud.Context, action oscrud.ServiceAction) (interface{}, error) {
	return user, nil
}

// ToQuery :
func (user *User) ToQuery(ctx *oscrud.Context, action oscrud.ServiceAction) (interface{}, error) {
	return user, nil
}

// ToPatch :
func (user *User) ToPatch(ctx *oscrud.Context, incoming oscrud.ServiceModel) error {
	incomingUser := incoming.(*User)
	user.Name = incomingUser.Name
	return nil
}

// ToUpdate :
func (user *User) ToUpdate(ctx *oscrud.Context, incoming oscrud.ServiceModel) error {
	incomingUser := incoming.(*User)
	user.Name = incomingUser.Name
	return nil
}

// ToDelete :
func (user *User) ToDelete(ctx *oscrud.Context) error {
	return nil
}
```