import { Composition } from 'remotion'
import { MyComp } from './MyComp'

export function RemotionRoot() {
  return (
    <Composition
      id="MyComp"
      component={MyComp}
      durationInFrames={90}
      fps={30}
      width={1280}
      height={720}
      defaultProps={{ message: 'Hello, Remotion!' }}
    />
  )
}
