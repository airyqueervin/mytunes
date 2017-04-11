// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.next, this);
  },

  enqueue: function() {
    if (this.length === 1) {
      // console.log('THIS IN THE ENQUUEE', this);
      this.playFirst();
    }
  },

  dequeue: function() {
    if (this.at(0) === this) {
      this.next();
    } else {
      this.remove(this);
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  next: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }
});