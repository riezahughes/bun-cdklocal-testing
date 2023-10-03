#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BunCdkTestingStack } from '../lib/bun-cdk-testing-stack';

const app = new cdk.App();
new BunCdkTestingStack(app, 'BunCdkTestingStack');
