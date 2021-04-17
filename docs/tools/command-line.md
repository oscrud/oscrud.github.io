---
title: Command Line
sidebar_label: Command Line ( CLI )
keywords:
- oscrud
- cli
description: command line for oscrud
---

# Installation

```
$ go install github.com/oscrud/core/oscrud
```

After installation succes, you can run `oscrud` it will display as below.

```
[OSCRUD] (INFO) | ┌─┐┌─┐┌─┐┬─┐┬ ┬┌┬┐
[OSCRUD] (INFO) | │ │└─┐│  ├┬┘│ │ ││
[OSCRUD] (INFO) | └─┘└─┘└─┘┴└─└─┘─┴┘
[OSCRUD] (INFO) |———————————————————— Oscrud CLI ————————————————————————|
[OSCRUD] (INFO) | > oscrud help       | Print oscrud basic commands      |
[OSCRUD] (INFO) | > oscrud generate   | Generate grpc client             |
[OSCRUD] (INFO) | > oscrud dev        | Start app in development mode    |
[OSCRUD] (INFO) | > oscrud build      | Build production binary          |
[OSCRUD] (INFO) |————————————————————————————————————————————————————————|
```

# Help

Help is for show list of commands with simple description.


# Generate 

Generate is for generating client code based on oscrud server code.

# Dev

Start app in development mode with `.oscrud.json` configuration.

# Build

Build production binary file but environment is not injected inside, so u will still need provide environment variables at your app container.