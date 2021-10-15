// NOT IMPLEMENTED

const withSound = (Component) => (src) => (props) => {
  const playSound = () => {
    console.log(`Play ${src}`)
  }
  return (
    <>
      <Component {...props} onPlaySound={playSound} />
    </>
  )
}
