Package.describe({
  name: 'granth:publish-with-count',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Automatically publish result count when creating a publication.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/GrantOnGit/meteor-publish-with-count.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript@0.9.0');  
  api.use(['meteor'], 'server'); // Core deps
  api.mainModule('publish-with-count.js', 'server');
});

// Package.onTest(function(api) {
//   api.use('ecmascript@0.9.0');
//   api.use('tinytest');
//   api.use('granth:filter-helper');
//   api.mainModule('filter-helper-tests.js');
// });
