import * as cdk from 'aws-cdk-lib'
import { EcsClusterStack } from '../lib/ecs-cluster-stack'

const app = new cdk.App()
new EcsClusterStack(app, 'EcsClusterStack')