---
title: Defining Data Model
---

Service model is a model struct usually will be a table from database. Service model must have implmenet method from `oscrud.DataModel`. So when creating own service, we can use method to filter result or returning data even prevent toxic data injection. `$id` tag will automatically assign input value from endpoint, such as `GET /test/:$id` for a `Get` action.

| Method                                      | Usage                                                                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ToQuery() (interface{}, error)              | For returning query syntax based on service requirement, for sqlike is expr cosntruct from their query builder. |
| ToUpdate(ServiceModel) (interface{}, error) | For construct model and return for update                                                                       |
| ToPatch(ServiceModel) (interface{}, error)  | For construct model and return for patch                                                                        |
| ToCreate() (interface{}, error)             | For construct model and return for create                                                                       |
| ToResult() (interface{}, error)             | For construct model and return for find / get                                                                   |


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