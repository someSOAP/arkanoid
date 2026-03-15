import { Sprite } from '@/classes/Sprite'
import Ball from '@/classes/Ball'
import { getPlatformColor } from '@/utils'

class Platform extends Sprite {
  canvas: HTMLCanvasElement
  speed: number
  leftKey: boolean
  rightKey: boolean

  constructor(canvas: HTMLCanvasElement, x: number, y: number) {
    const context = canvas.getContext('2d')

    if (!context) {
      throw new Error('Canvas 2D context is null')
    }

    super(context, {
      x,
      y,
      width: 150,
      height: 20,
      color: getPlatformColor(),
      borderRadius: 5,
    })

    this.canvas = canvas
    this.speed = 300
    this.leftKey = false
    this.rightKey = false
  }

  moveLeft(dTime: number): void {
    const { x, speed } = this
    this.x = Math.max(0, x - dTime * speed)
  }

  moveRight(dTime: number): void {
    const { canvas, width, x, speed } = this
    this.x = Math.min(canvas.width - width, x + dTime * speed)
  }

  moveTo(x: number): void {
    const { canvas, width } = this
    this.x = Math.max(0, Math.min(canvas.width - width, x))
  }

  checkIfIntersectedWithBall(ball: Ball): void {
    if (ball.isIntersectedWith(this)) {
      const x = ball.x + ball.width / 2
      const percent = (x - this.x) / this.width
      ball.angle = Math.PI - Math.PI * 0.8 * (percent + 0.05)
    }
  }
}

export default Platform
