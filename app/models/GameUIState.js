const CocoModel = require('./CocoModel')

class GameUIState extends CocoModel {
  constructor () {
    super()
    this.className = 'GameUIState'
    this.schema = {
      type: 'object',
      properties: {
        canDragCamera: {
          type: 'boolean',
          description: 'Serves as a lock to enable or disable camera movement.'
        },
        selected: {
          type: 'object',
          description: 'Array of selected thangs',
          properties: {
            sprite: { description: 'Lank instance' },
            thang: { description: 'Thang object generated by the world' }
          }
        },
        fastForwardingSpeed: {
          type: ['number', 'null'],
          description: 'Speed at which playback is fast-forwarding, if set (2.0 would be 2x speed)'
        },
        scrubbingPlaybackSpeed: {
          type: ['number', 'null'],
          description: 'Speed at which playback is scrubbing, if set (2.0 would be 2x speed)'
        }
      }
    }
  }

  defaults () {
    return {
      selected: [],
      canDragCamera: true,
      realTimeInputEvents: new Backbone.Collection(),
      fastForwardingSpeed: null,
      scrubbingPlaybackSpeed: null
    }
  }
}

module.exports = GameUIState
