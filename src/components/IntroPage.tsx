import cssIntroPage from '../styles/IntroPage.module.css'
import bg1 from "../images/login_img/login1.png"
import bg2 from "../images/login_img/login2.png"
import bg3 from "../images/login_img/login3.png"
import bg4 from "../images/login_img/login4.png"
import bg7 from "../images/login_img/login7.png"
import scroll from "../images/login_img/scroll.png"
import loginButton from "../images/login_img/loginbutton.png"
import underLoginButton from "../images/login_img/under_login_button.png"
import login from "lib/login";

import { Link as Scroll } from 'react-scroll';



const IntroPage = () => {
    return (
        <>
        <div className={cssIntroPage.bg1Box}>
        <img src={bg1.src} className={cssIntroPage.bg + " " + cssIntroPage.topPage}/>
        <img src={loginButton.src} className={cssIntroPage.loginButton} onClick={login}/>
        <Scroll to="bg2" smooth={true}><img src={scroll.src} className={cssIntroPage.scroll}/></Scroll>
        </div>

        <img src={bg2.src} className={cssIntroPage.bg} id="bg2"/>
        <img src={bg3.src} className={cssIntroPage.bg} id="bg3"/>
        <img src={bg4.src} className={cssIntroPage.bg} id="bg4"/>

        <div className={cssIntroPage.bg7Box}>
        <img src={bg7.src} className={cssIntroPage.bg} id="bg7"/>
        <img src={underLoginButton.src} className={cssIntroPage.underLoginButton} onClick={login} />
        </div>
        </>
    )
}

export default IntroPage