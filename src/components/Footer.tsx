import { css } from "@emotion/react";
import Image from "next/image";
import cssFooter from "../styles/Footer.module.css";
const Footer = (props) => {
    return (
        <>
            <footer className={cssFooter.footer}>
                <div className={cssFooter.copyright}>
                    <p>©Copyright 2021 by Virtual<br></br>
                            Space for INIAD, Inc.
                    </p>
                </div>

                <div className={cssFooter.centerText}>
                    <p className={cssFooter.centerTextTop}>Virtual Space</p>
                    <p className={cssFooter.centerTextBottom}> for INIAD</p>
                </div>

                <div className={cssFooter.iconDiv}>
                <Image src="/images/icon.png" layout="fill" objectFit="contain"></Image>
                </div>
            </footer>

        </>

    )
}

export default Footer