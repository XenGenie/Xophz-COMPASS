export default {
  template: '{{displayNumber}}',
  props: { start: { default: 0 }, number: { default: 0 }, sound: { default: '' } },
  data () {
    return {
      audio: new Audio(),
      displayNumber: 0,
      interval: false
    }
  },
  mounted () {
    if (this.start) this.displayNumber = this.start
  },

  ready () {
    if (this.sound) this.displayNumber = this.number ? this.number : 0
  },

  watch: {
    number () {
      if (this.number > 0 && this.sound) {
        this.audio = new Audio(this.sound)
        this.audio.pause()
        this.audio.play()
      }

      clearInterval(this.interval)
      if (this.number === this.displayNumber) {
        this.audio.pause()
        this.audio.currentTime = 0
        return
      }

      this.interval = window.setInterval(() => {
        this.$emit('updateProgress', this.displayNumber)
        if (this.displayNumber !== this.number) {
          let change = (this.number - this.displayNumber) / 10
          change = change >= 0 ? Math.ceil(change) : Math.floor(change)
          this.displayNumber = this.displayNumber + change
        } else {
          this.audio.pause()
          this.audio.currentTime = 0
          clearInterval(this.interval)
        }
      }, 50)
    }
  }
}
