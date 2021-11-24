import cssIntroPage from '../styles/IntroPage.module.css'
import bg from "../images/login_sample.png"
const IntroPage = () => {
    return (
        <img src={bg.src} className={cssIntroPage.bg} />
    )
}

export default IntroPage