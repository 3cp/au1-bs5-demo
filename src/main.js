import environment from './environment';
import 'bootstrap';
import '@popperjs/core';
// cli-bundler has some limitation on stubbing "process".
// https://aurelia.io/docs/cli/cli-bundler/dependency-management#auto-tracing
import process from 'process';
window.process = process;

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
