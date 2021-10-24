import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import WinWheel from 'winwheeljs'
import {
  WheelBackground,
  WheelPointer,
  WheelTrigger,
  WheelWrapper,
} from './Wheel.style'
import wheelImg from '../../assets/images/wheel/wheel.png'
import marker from '../../assets/images/wheel/marker.png'
import triggerImg from '../../assets/images/wheel/trigger.png'

const segments = ['A', 'B', 'C', 'C', 'C']

const DEFAULT_WIDTH = 340
const DEFAULT_HEIGHT = 340

const wrapText = (text) => {
  const words = text.split(' ')
  let multilineText = ''
  for (let index = 0; index < words.length; index = index + 2) {
    multilineText =
      multilineText + '\n' + words.slice(index, index + 2).join(' ')
  }
  return multilineText
}

const Wheel = ({
  segments,
  rewardSegmentIdx,
  onStart,
  onFinish,
  isPlaying,
  ...props
}) => {
  const [wheel, setWheel] = useState(null)

  const finishRotate = useCallback(() => {
    console.log('FINISH ROUTE')
    onFinish()
  }, [onFinish])

  useEffect(() => {
    if (!segments) return

    const styledSegments = segments.map((seg) => ({
      ...seg,
      text: wrapText(seg.text),
    }))

    const myWheel = new WinWheel({
      numSegments: segments.length,
      canvasId: 'wheel-canvas',
      // textFontWeight: 'Mali',
      textFontSize: 12,
      textFillStyle: '#FFF',
      strokeStyle: null,
      lineWidth: 0,
      textAligment: 'outer',
      textMargin: 30,
      outerRadius: 140, // Use these three properties to
      centerX: DEFAULT_WIDTH / 2 + 1, // correctly position the wheel
      centerY: DEFAULT_WIDTH / 2,
      segments: styledSegments,
      animation: {
        type: 'spinToStop',
        duration: 5,
        spins: 8,
        callbackFinished: finishRotate,
      },
      textOrientation: 'curved',
      // innerRadius: 40,
    })
    setWheel(myWheel)
  }, [segments, finishRotate])

  useEffect(() => {
    if (!rewardSegmentIdx || !isPlaying) return
    let stopAt = wheel.getRandomForSegment(rewardSegmentIdx + 1)
    console.log(`stopAt`, rewardSegmentIdx, stopAt)
    // Important thing is to set the stopAngle of the animation before stating the spin.
    wheel.animation.stopAngle = stopAt
    // Start the spin animation here.
    wheel.startAnimation()
  }, [rewardSegmentIdx, wheel, isPlaying])

  return (
    <WheelWrapper {...props} width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT}>
      <canvas
        id="wheel-canvas"
        width={DEFAULT_WIDTH - 20}
        height={DEFAULT_WIDTH - 20}
      ></canvas>
      {/* <WheelBackground src={wheelImg} /> */}
      <WheelTrigger onClick={onStart} src={triggerImg} />
      <WheelPointer top={60} left={DEFAULT_WIDTH / 2} src={marker} />
    </WheelWrapper>
  )
}

Wheel.propTypes = {
  isRotate: PropTypes.bool,
  deg: PropTypes.number,
  duration: PropTypes.number,
  onWinner: PropTypes.func,
}
Wheel.defaultProps = {
  isRotate: false,
  deg: 5000,
  duration: 5000,
}

export default Wheel
