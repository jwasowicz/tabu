import SettingsBackButton from "./SettingsBackButton"
import SettingsTimer from "./SettingsTimer"



const SettingsHeader = () => {
  return (
    <header className="settings-container__header">
        <SettingsBackButton />
        <SettingsTimer />
    </header>
  )
}

export default SettingsHeader