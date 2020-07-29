module.exports = {
    defaultSidebar: [
        'introduction',
        'getting-start',
        {
            "Server": [
                "server/overview",
                "server/new-oscrud",
                "server/new-request",
                "server/use-options",
                "server/register-binder",
                "server/register-transport",
                "server/register-logger",
                "server/register-endpoint",
                "server/register-service",
                "server/get-transport",
                "server/state",
                "server/manual-log",
                "server/start",
            ],
            "Handler": [
                "handler/overview",
                "handler/example",
                "handler/request",
                "handler/response",
                "handler/response-object"
            ],
            "Options": [
                "options/overview",
                "options/middleware",
                "options/event",
                "options/timeout",
                "options/transport"
            ],
            "Service": [
                "service/overview",
                "service/create-own-service",
                "service/data-model"
            ],
            "Transport": [
                "transport/overview",
                "transport/create-own-transport"
            ],
            "Binder": [
                "binder/overview",
                "binder/register-new-binder",
                "binder/all-binding",
                "binder/specific-binding"
            ],
            "Reference": [
                "reference/content-type",
                "reference/error-list",
                "reference/request-lifecycle"
            ],
            "Third Party Packages": [
                {
                    "General": [
                        "package/general/graphql-handler",
                    ],
                },
                {
                    "Transport": [
                        "package/transport/websocket/overview",
                    ],
                },
            ],
        },
    ],
};