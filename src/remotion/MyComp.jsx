import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

export function MyComp({ message = 'Hello, Remotion!' }) {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
  const scale = interpolate(frame, [0, 20], [0.85, 1], { extrapolateRight: 'clamp' })

  // Fade out in the last 20 frames
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: 'clamp' }
  )

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          opacity: opacity * fadeOut,
          transform: `scale(${scale})`,
          color: 'white',
          fontSize: 72,
          fontFamily: 'system-ui, sans-serif',
          fontWeight: 700,
          letterSpacing: '-2px',
          textAlign: 'center',
        }}
      >
        {message}
      </div>
    </AbsoluteFill>
  )
}
