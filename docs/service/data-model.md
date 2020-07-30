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

| Method                                       | Usage                                                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ToQuery(ServiceAction) (interface{}, error)  | For returning query syntax based on service requirement, for sqlike is expr cosntruct from their query builder. |
| ToResult(ServiceAction) (interface{}, error) | For construct model and return for find / get                                                                   |
| ToUpdate(ServiceModel) error                 | For construct model and return for update                                                                       |
| ToPatch(ServiceModel) error                  | For construct model and return for patch                                                                        |
| ToDelete() error                             | For construct model and return for delete                                                                       |
| ToCreate() error                             | For construct model and return for create                                                                       |


```go
// User :
type User struct {
	ID   int    `json:"id" oscrud:"id"`
	Name string `json:"name"`
}

// ToCreate :
func (user *User) ToCreate() error {
	if len(user.Name) > 20 {
		return errors.New("username have a maximum length 20")
	}
	return nil
}

// ToResult :
func (user *User) ToResult(action oscrud.ServiceAction) (interface{}, error) {
	return user, nil
}

// ToQuery :
func (user *User) ToQuery(action oscrud.ServiceAction) (interface{}, error) {
	return user, nil
}

// ToPatch :
func (user *User) ToPatch(incoming oscrud.ServiceModel) error {
	incomingUser := incoming.(*User)
	user.Name = incomingUser.Name
	return nil
}

// ToUpdate :
func (user *User) ToUpdate(incoming oscrud.ServiceModel) error {
	incomingUser := incoming.(*User)
	user.Name = incomingUser.Name
	return nil
}

// ToDelete :
func (user *User) ToDelete() error {
	return nil
}
```