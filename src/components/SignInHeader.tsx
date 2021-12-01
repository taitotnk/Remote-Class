import cssHeader from '../styles/SignInHeader.module.css'
import Icon from "../images/icon5_change.png"
import IntroPage from './IntroPage'
import login from "lib/login";
import { Link as Scroll } from 'react-scroll';
const SignInHeader = () => {

    return(
        <>
        <header className={cssHeader.header}>
            <img src={Icon.src} className={cssHeader.icon} alt='icon' />
            <div className={cssHeader.centerText}>
                <p className={cssHeader.centerTextTop}>Virtual Space</p>
                <p className={cssHeader.centerTextBottom}> for INIAD</p>
            </div>
            <div className={cssHeader.end}>
                <ul className={cssHeader.menuGroup}>
                <li className={cssHeader.menuGroup}><Scroll to="bg3" smooth={true}><p className={cssHeader.right +" "+cssHeader.appIntro}>アプリ紹介</p></Scroll></li>
                <li className={cssHeader.menuGroup}><Scroll to="bg4" smooth={true}><p className={cssHeader.right +" "+cssHeader.funcIntro}>機能紹介</p></Scroll></li>
                <li className={cssHeader.menuGroup}><p className={cssHeader.right +" "+ cssHeader.login} onClick={login}>ログイン</p></li>
                </ul>
            </div>
        </header>
     
        </>
    )
}


export default SignInHeader