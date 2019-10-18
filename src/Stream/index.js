'use strict'

class Stream {
  constructor (EventStream, Logger, Config) {

    this._logger = Logger
    this.init = EventStream.init;
    this.options = {
      detect_ie_and_pad_with_comments: Config.get('sse.pad_for_ie'),
      compress_output: Config.get('sse.compress_output'),
      prefer_event_name: Config.get('sse.prefer_event_name'),
      prefered_event_name: Config.get('sse.prefered_event_name')
    }
  }

  static set logger (newLogger) {
    this.prototype._logger = newLogger
  }
  
  setup (source){
      return this.init(source, this.options);
  }
}

module.exports = Stream
