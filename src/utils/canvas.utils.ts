import Block from '@/classes/Block'
import { getRandomBlockColor } from '@/utils/color.utils.ts'

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas has no 2D context')
  }

  context.clearRect(0, 0, canvas.width, canvas.height)
}

export const drawResult = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas 2D context is null')
  }

  context.beginPath()
  context.rect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'rgba(255, 255, 255, 0.7)'
  context.fill()

  context.fillStyle = '#03175c'
  context.font = 'bold 48px sans-serif'
  context.textAlign = 'center'
  context.fillText('ARCANOID', canvas.width / 2, canvas.height / 2)

  const isMobile = window.matchMedia('(pointer: coarse)').matches

  context.fillStyle = '#414d75'
  context.font = '24px sans-serif'
  context.textAlign = 'center'
  context.fillText(
    isMobile ? 'Tap to continue' : 'Press any key to continue',
    canvas.width / 2,
    canvas.height / 2 + 48,
  )
}

export const drawMoodShadow = (canvas: HTMLCanvasElement, isSad: boolean) => {
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Canvas 2D context is null')
  }

  const gradient = context.createLinearGradient(0, 0, 0, 50)
  gradient.addColorStop(
    0,
    isSad ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 255, 0, 0.4)',
  )
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

  context.fillStyle = gradient
  context.fillRect(0, 0, canvas.width, 50)
}

export const initBlocks = (canvas: HTMLCanvasElement): Array<Block> => {
  const blocks: Array<Block> = []

  const blockWidth = 50
  const blockHeight = 20

  const blocksPerXAxis = Math.floor(canvas.width / blockWidth) - 2
  const blocksPerYAxis = Math.floor((canvas.height * 0.5) / blockHeight)
  const padding = Math.floor((canvas.width - blocksPerXAxis * blockWidth) / 2)

  for (let x = 0; x < blocksPerXAxis; x++) {
    for (let y = 0; y < blocksPerYAxis; y++) {
      const color = getRandomBlockColor()

      blocks.push(
        new Block(canvas, {
          x: padding + blockWidth * x,
          y: padding + blockHeight * y,
          width: blockWidth,
          height: blockHeight,
          color,
        }),
      )
    }
  }

  return blocks
}

export const adjustCanvasSize = (canvas: HTMLCanvasElement) => {
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
}
