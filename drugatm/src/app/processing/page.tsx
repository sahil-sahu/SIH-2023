'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import process from "@/app/assets/processing.png";

export default function Checkout() {
    const router = useRouter();
    return (
    <main className="" style={{height:"100vh"}}>
        <header>
            <ul style={{
                display: 'flex',
                justifyContent:'space-between',
                padding:"1rem",
                margin:"auto",
                width:"80%",
                alignItems:"center",
            }}>
                <li>
                    <Link href={"/"} style={{
                        color:"var(--orange)",
                        fontSize: 40,
                        fontWeight: 700,
                    }}>MrChecklist</Link>
                </li>
            </ul>
        </header>
        <section style={{display:"flex", justifyContent:"center",flexDirection:"column",margin:"auto",alignItems:'center',padding:20,}}>
            <Image src={process} style={{width:"50vh"}} alt='processing'/>
            <h2 style={{fontSize:30, fontWeight:600, color:"var(--blue)",}}>
                Processing your medicine 
            </h2>
        </section>
    </main>
    )
}
