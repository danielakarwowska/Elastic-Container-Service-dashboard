import * as cdk from 'aws-cdk-lib'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2'
import { Construct } from 'constructs'

export class EcsClusterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpc = new ec2.Vpc(this, 'EcsClusterVpc', {})
    const cluster = new ecs.Cluster(this, 'EcsCluster', {
      vpc: vpc,
    })

    const alb = new elbv2.ApplicationLoadBalancer(this, 'Alb', {
      vpc: vpc,
      internetFacing: true
    })

    const taskDefinition = new ecs.FargateTaskDefinition(this, 'TaskDefinition', {
      memoryLimitMiB: 512,
      cpu: 256,
    })

    const container = taskDefinition.addContainer('AppContainer', {
      image: ecs.ContainerImage.fromRegistry('nginx'),
      memoryLimitMiB: 256,
      cpu: 128,
    })
    container.addPortMappings({
      containerPort: 80,
      protocol: ecs.Protocol.TCP,
    })

    const service = new ecs.FargateService(this, 'Service', {
      cluster: cluster,
      taskDefinition: taskDefinition,
      desiredCount: 1,
    })

    const targetGroup = new elbv2.ApplicationTargetGroup(this, 'TargetGroup', {
      vpc: vpc,
      targets: [service],
      port: 80,
      protocol: elbv2.ApplicationProtocol.HTTP,
      healthCheck: {
        path: '/',
        interval: cdk.Duration.seconds(30),
      },
    });
    
    const listener = alb.addListener('Listener', {
      port: 80,
      protocol: elbv2.ApplicationProtocol.HTTP,
      defaultTargetGroups: [targetGroup],
    });
  }
}