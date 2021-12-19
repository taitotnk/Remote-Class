import cssIntroPage from '../styles/IntroPage.module.css'
import login from "lib/login";
import Image from "next/image";

import { Link as Scroll } from 'react-scroll';
import { css } from '@emotion/react';
import page1 from 'images/login_img/page1.png'
import image from 'next/image';

const IntroPage = (props) => {
    return (
        <>
        <div className={cssIntroPage.page1}></div>
        <div className={cssIntroPage.page2}></div>
        <div className={cssIntroPage.page3} id="page3"></div>
        <div className={cssIntroPage.page4}></div>
        <div className={cssIntroPage.page5}></div>
        <div className={cssIntroPage.page6} id="page6"></div>
        <div className={cssIntroPage.page7}></div>
    </>  

    )
}

export default IntroPage