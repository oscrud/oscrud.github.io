---
title: Registering New Binder
---

Registering new binder for sepcific type ( struct, array or slice ), primitive not supported yet. 

```go
type Example struct {
    Line1 string
    Line2 string
}

func main() {
    // You use binder independently also
    binder := oscrud.NewBinder()
    binder.Register(new(Example), func(raw interface{}) (interface{}, error) {
        str := fmt.Sprintf("%v", raw)
        if strings.Contains(raw, ",") { 
            split := strings.Split(raw, ",")
            return Example{raw[0], raw[1]}, nil
        }
        return nil, fmt.Errorf("Invalid data "%v" for deserialize to Example", raw)
    })

    example := new(Example)
    err := binder.Bind(&example, "line1,line2")
    log.Println(example, err) // { line1, line2 }, <nil>


    err := binder.Bind(&example, "line1-line2")
    log.Println(example, err) // nil, "Invalid data line-line2 for deserialize to Example"
}
```