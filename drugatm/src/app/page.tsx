'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';
import styles from './components/home.module.css';
import { QRCode } from 'react-qrcode';
import { Socket } from '../socket';

import camera from './assets/camera.svg';


export default function Home() {

  const SearchParams = useSearchParams();
  const [atm, setAtm] = useState<string | null>(null);
  useEffect(()=>{
    const id = SearchParams.get('atm');
    if(id){
      setAtm(id);
      localStorage.setItem('atm', id);

    } else {
      setAtm(localStorage.getItem('atm'));
    }
  },[SearchParams])
  // console.log(atm);
  return (
    <>
      <main className="" style={{height:"100vh"}}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>
              Welcome to 
            </h2>
            <h1>
              MrChemist
            </h1>
            <p>
              kindly this in scan in <br />
              MrChemist app during checkout
            </p>
          </div>
          {atm && <QRCode value={atm ?? ''} size={512} className={styles.qrcode}></QRCode>}
        </div>
        <Image className={styles.cam} src={camera} height={50} width={50} alt="click to open scanner"/>
      </div>
    </main>
    {/* <Socket /> */}
    </>
  )
}
