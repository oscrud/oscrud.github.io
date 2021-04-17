---
title: Overview
sidebar_label: Overview
keywords:
- documentation
- oscrud
- handler
- example
description: overview handler of oscrud server
---

Handler is a function like `func (Context, struct) (struct, error)` to accept and process requests. Since internally we're using reflection to map incoming request to specified handler, so we standardize handler for it.