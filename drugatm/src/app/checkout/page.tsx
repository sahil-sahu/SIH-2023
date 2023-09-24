'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import styles from './components/home.module.css';
import Header from '../components/header/header';
import whitetri from '@/app/assets/whitetri.svg'

import camera from './assets/camera.svg';

type Item = {
    _id: string;
    quantity: number;
  };

  type Medicine = {
    _id: string;
    name: string;
    description: string;
    // Add other properties if needed
  };
  
  type Medicines = {
    [key: string]: Medicine;
  };

export default function Checkout() {
    const router = useRouter();
    const cost = 100;
    const [itemList, setItemList] = useState<Item[] | null>(null);
    const [medicines, setMedicines] = useState<Medicines|null>();
    useEffect(()=>{
        const payload = sessionStorage.getItem('payload');
        if(payload){
            setItemList(JSON.parse(payload));
        }else{
            router.push("/");
        }
        const storedMedicines = localStorage.getItem('medicines');

        if (storedMedicines) {
        // Parse the data and set it as the initial state
        setMedicines(JSON.parse(storedMedicines));
        }
    },[])
    // console.log(atm);
    return (
    <main className="" style={{height:"100vh"}}>
        <Header></Header>
        <div style={{margin:"auto",width:"80%"}}>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th scope="col" className="px-6 py-4">Medicine</th>
                    <th scope="col" className="px-6 py-4">Cost</th>
                    <th scope="col" className="px-6 py-4">Quantity</th>
                    <th scope="col" className="px-6 py-4">Total</th>
                </tr>
                </thead>
                <tbody>
                    {
                        medicines && itemList?.map((e)=>{
                            let item = medicines[e._id];
                            return(
                                <tr key={e._id} className="dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{cost}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{e.quantity}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{cost*(e.quantity)}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <br />
            <br />
            <button onClick={()=>{router.push('/pay')}} style={{borderRadius:163,backgroundColor:"var(--orange)",boxShadow:"0px 0px 15px 0px rgba(42, 42, 42, 0.68) inset",padding:15, display:'flex', alignItems:'center',gap:16,float:'right'}}>
                Proceed to Pay <Image src={whitetri} height={24} alt="▶️"/>
            </button>
        </div>
    </main>
    )
}

// border-radius: 163px;
// background: #E29D34;
// box-shadow: 0px 0px 15px 0px rgba(42, 42, 42, 0.68) inset;
