# Elastic-Container-Service-dashboard

The app will allow to monitor the current AWS ECS containers
status and observe scalability. 

For each solution deployed, user
shall be able to see the graphical dashboard with amount of
containers deployed, their current status, RAM and CPU capacity
and health. 

The solution will be implemented using ReactJS,
TypeScript and AWS SDK API


bin/my-ecs-dashboard.ts -- contains the entry point for your CDK app.
lib/ecs-cluster-stack.ts -- contains the CDK code for creating an ECS cluster.
lib/ecs-service-stack.ts -- contains the CDK code for creating an ECS service and associated resources such as a load balancer and target group.
src/ecs-data.ts -- contains the Lambda function code for fetching data from the ECS cluster.
