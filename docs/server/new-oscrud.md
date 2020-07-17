---
title: Constructing Oscrud
---

For constructing a new instance with some default parameters. *Preferred* to use this instead construct yourself unless you know what you're doing.

```go
package oscrud

func main() {
    server := oscrud.NewOscrud()
}
```