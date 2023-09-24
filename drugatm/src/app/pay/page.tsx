'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import Header from '../components/header/header';
import styles from '../components/home.module.css';
import { QRCode } from 'react-qrcode';
export default function Checkout() {
    const router = useRouter();
    return (
    <main className="" style={{height:"100vh"}}>
        <Header></Header>
        <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h3 style={{fontSize:40,fontWeight:500,}}>
            Pay using UPI <br />
            or by app
            </h3>
          </div>
          <QRCode value={"upi://pay?pa=sahilku2003-1@okicici&pn=Sahil%20Sahu%20(Cool_Sahil)&aid=uGICAgICf0crlZQ&am=540"} size={512} className={styles.qrcode}></QRCode>
        </div>
      </div>
    </main>
    )
}
