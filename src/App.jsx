import './App.css'
import { useTranslation } from "react-i18next"
import Languageselector from './components/Languageselector.jsx';

function App() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <Languageselector />
      <h1>{t("greeting")}</h1>
    </div>
  )
}

export default App
