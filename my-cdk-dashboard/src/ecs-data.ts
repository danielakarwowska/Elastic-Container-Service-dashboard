{
    "clusterName": "my-cluster-name",
    "services": [
      {
        "serviceName": "my-service-1",
        "desiredCount": 3,
        "runningCount": 3,
        "pendingCount": 0,
        "cpu": {
          "reserved": 1024,
          "available": 1024
        },
        "memory": {
          "reserved": 2048,
          "available": 2048
        },
        "healthStatus": "HEALTHY"
      },
      {
        "serviceName": "my-service-2",
        "desiredCount": 2,
        "runningCount": 2,
        "pendingCount": 0,
        "cpu": {
          "reserved": 512,
          "available": 512
        },
        "memory": {
          "reserved": 1024,
          "available": 1024
        },
        "healthStatus": "UNHEALTHY"
      }
    ]
  }