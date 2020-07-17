---
title: Request Lifecycle
---

Basically a request firstly will come to Transport. Transport will do the basic handling to construct a `oscrud.Request` and only bring request to `oscrud`. 

1. Transport

Usually process incoming request and construct request for pass to handler.

2. Start Request Logger

3. Timeout Handler

Construct timeout handler & run handler using go-routine. When timeout reach will just return timeout error.

4. Oscrud

Lookup route, if exists construct middleware handler & main handler which required for the route.

5. Before Middleware Handler
6. Main Handler
7. After Middleware Handler
8. Event onComplete()
9. End Request Logger
