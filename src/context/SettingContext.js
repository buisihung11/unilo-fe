import { createContext, useState } from 'react'

const SettingContext = createContext()

const DEFAULT_STATE = {
  mute: false,
}

export const SettingProvider = (props) => {
  const [state, setState] = useState(DEFAULT_STATE)

  const updateSoundMode = (mute) => setState({ ...state, mute })

  return (
    <SettingContext.Provider value={{ ...state, updateSoundMode }}>
      {props.children}
    </SettingContext.Provider>
  )
}

export default SettingContext
