Package.describe({
  name: 'ostrio:loggerfile',
  version: '0.0.10',
  summary: 'Simply store application logs into file within ostrio:logger package',
  git: 'https://github.com/VeliovGroup/Meteor-logger-file',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['coffeescript', 'ostrio:logger@0.0.7'], ['client', 'server']);
  api.use('ostrio:meteor-root@1.0.0', 'server')
  api.addFiles('loggerfile.coffee', ['client', 'server']);
});

Npm.depends({
  'fs-extra': '0.16.3'
});