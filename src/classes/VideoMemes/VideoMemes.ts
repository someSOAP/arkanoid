import { getRandom } from '@/utils'
import { CatVideosPreloaded } from '@/types'

export class VideoMemes {
  isPlaying: boolean
  isSad: boolean
  video: HTMLVideoElement
  catVideosPreloaded: CatVideosPreloaded

  constructor(video: HTMLVideoElement, catVideosPreloaded: CatVideosPreloaded) {
    this.video = video
    this.isSad = true
    this.isPlaying = false
    this.catVideosPreloaded = catVideosPreloaded
    this.video.addEventListener('ended', this.playNext)
  }

  private playNext = () => {
    this.video.src = this.getCatVideo()
    this.play()
  }

  private getCatVideo() {
    return getRandom(this.catVideosPreloaded[this.isSad ? 'sad' : 'happy'])
  }

  async play() {
    this.isPlaying = true
    this.video.play()
  }

  stop() {
    if (!this.isPlaying) {
      return
    }
    this.isPlaying = false
    this.video.pause()
  }

  setSadMood(val: boolean) {
    if (val === this.isSad) {
      return
    }
    this.isSad = val
    this.video.src = this.getCatVideo()
    this.play()
  }
}
