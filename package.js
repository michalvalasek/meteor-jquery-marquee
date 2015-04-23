Package.describe({
  name: 'michalvalasek:jquery-marquee',
  version: '1.3.1',
  summary: 'Meteor packaging of aamirafridi/jQuery.Marquee',
  git: 'https://github.com/michalvalasek/meteor-jquery-marquee',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');

  api.addFiles('lib/jquery-marquee/jquery.marquee.js', 'client');
});
