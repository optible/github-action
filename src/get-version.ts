import * as core from '@actions/core';
import Docker from './docker';

const docker = new Docker();
core.setOutput('version', "optible-renovate-"+docker.version());
