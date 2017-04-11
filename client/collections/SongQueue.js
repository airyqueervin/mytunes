// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst(song);
    }
  },

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext(song);
    } else {
      this.remove(song);
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }
});