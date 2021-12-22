import cssIntroPage from '../styles/IntroPage.module.css'
import login from "lib/login";
import Image from "next/image";

import { Link as Scroll } from 'react-scroll';
import { css } from '@emotion/react';
import page1 from 'images/login_img/page1.png'
import image from 'next/image';
import { auth } from 'utils/Firebase';

const IntroPage = (props) => {
    return (
        <>
        <div className={cssIntroPage.page1} id="page1">
            <div className={cssIntroPage.loginButtonDiv}>
            <Image src="/images/login_img/loginbutton.png" className={cssIntroPage.loginButton} layout='fill' objectFit='contain' onClick={login}></Image>
            </div>
            <div className={cssIntroPage.scrollDiv}>
                <Scroll to="page2" smooth={true}>
                    <Image src="/images/login_img/scroll.png" className={cssIntroPage.scroll} layout='fill' objectFit='contain' ></Image>
                </Scroll>
            </div>
        </div>

        <div className={cssIntroPage.page2} id="page2"></div>
        <div className={cssIntroPage.page3} id="page3"></div>
        <div className={cssIntroPage.page4} id="page4"></div>
        <div className={cssIntroPage.page5} id="page5"></div>
        <div className={cssIntroPage.page6} id="page6"></div>
        <div className={cssIntroPage.page7} id="page7">
            <div className={cssIntroPage.underLoginButtonDiv}>
                <Image src="/images/login_img/underloginbutton.png" className={cssIntroPage.underLoginButton} layout='fill' objectFit='contain' onClick={login}></Image>
            </div>
        </div>
    </>  

    )
}

export default IntroPage