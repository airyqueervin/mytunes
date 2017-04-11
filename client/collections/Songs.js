// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfs.hackreactor.com/mytunes/classes/songs',

  parse: function(data) {
    return data.results;
  }

});
