import cssIntroPage from '../styles/IntroPage.module.css'
import login from "lib/login";
import Image from "next/image";

import { Link as Scroll } from 'react-scroll';



const IntroPage = (props) => {
    return (
        <>
        <div style={{position: 'relative', width:'100%', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page1.png" alt="page1" layout='fill' objectFit='contain' />
        </div>

        <div style={{position: 'relative', width: '100%', height:'100hv', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page2.png" alt="page2" layout='fill' objectFit='contain' />
        </div>

        <div style={{position: 'relative', width: '1920', height:'1080', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page3.png" alt="page3" layout='fill' objectFit='contain'/>
        </div>

        <div style={{position: 'relative', width: '1920', height:'1080', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page4.png" alt="page4" layout='fill'objectFit='contain'/>
        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page5.png" alt="page5" layout='fill'/>
        </div>
        
        <div style={{position: 'relative', width: '100%', height:'100vh', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page6.png" alt="page6" layout='fill'/>
        </div>

        <div style={{position: 'relative', width: '100%', height:'100vh', backgroundColor: 'red'}}>
        <Image src="/images/login_img/page7.png" alt="page7" layout='fill'/>
        </div>
        
        </>

    )
}

export default IntroPage