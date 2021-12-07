import cssIntroPage from '../styles/IntroPage.module.css'
import login from "lib/login";
import Image from "next/image";

import { Link as Scroll } from 'react-scroll';
import { css } from '@emotion/react';



const IntroPage = (props) => {
    return (
        <>
        <div style={{position: 'relative', width:'100%',height:'100vh'}}>
            <Image src="/images/login_img/page1.png" alt="page1" layout='fill' />

            <div className={cssIntroPage.loginButtonDiv}>
                <Image src="/images/login_img/loginbutton.png" alt="loginButton" width={515} height={95} className={cssIntroPage.loginBUtton} onClick={login}/>
            </div>

            <div className={cssIntroPage.scrollButtonDiv}>
                <Scroll to="page2" smooth={true}><Image src="/images/login_img/scroll.png" alt="scroll" width={200} height={200} className={cssIntroPage.scrollButton} /></Scroll>
            </div>

        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh'}} id="page2">
            <Image src="/images/login_img/page2.png" alt="page2" layout='fill' />
        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh'}} id="page3">
        <Image src="/images/login_img/page3.png" alt="page3" layout='fill'/>
        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh'}} id="page4">
        <Image src="/images/login_img/page4.png" alt="page4" layout='fill'/>
        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh'}} id="page5">
        <Image src="/images/login_img/page5.png" alt="page5" layout='fill'/>
        </div>
        
        <div style={{position: 'relative', width: '100%', height:'100vh'}} id="page6">
        <Image src="/images/login_img/page6.png" alt="page6" layout='fill'/>
        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh'}} id="page7">
        <Image src="/images/login_img/page7.png" alt="page7" layout='fill'/>
        <div className={cssIntroPage.underLoginButtonDiv}>
            <Image src="/images/login_img/underloginbutton.png" alt="under_login_button" width={782} height={128} className={cssIntroPage.underLoginButton} onClick={login}/>
        </div>
        </div>
        
        </>

    )
}

export default IntroPage