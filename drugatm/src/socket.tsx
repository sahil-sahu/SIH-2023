"use client";
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useRouter } from "next/navigation";

console.log("yo");

interface Item {
    _id: string;
    quantity: number;
  }

export function Socket(){

    const mrsocket = useRef<any>(null);
    const router = useRouter();

    const handleRequest = (payload:Item[]) => {
        sessionStorage.setItem('payload',JSON.stringify(payload));
        console.log(payload);
        router.push("/checkout");
    }
    const handlePayment = (status:boolean) => {
        if(status)
        router.push("/processing");
    }

    useEffect(()=>{
        const socket = io("http://13.127.78.108:3000");
        console.log("Socket initializing")
        socket.emit('web', {type: "testing",message:'Hello, Server!'});
        socket.on('web', (message:any) => {
            console.log(message.type);
            if(message.type == "initialize")
                handleRequest(message.payload);
            switch (message.type) {
                case "initialize":
                    handleRequest(message.payload);
                    break;
                case "payment":
                    handlePayment(message.status);
                    break;
                case "job":
                    router.push("/");
                    break;
            
                default:
                    break;
            }
        });
        mrsocket.current = socket;
        const fetcher = async ()=>{
            const response = await fetch("http://13.127.78.108:3000/medicines/hashmap");
            localStorage.setItem("medicines", JSON.stringify(await response.json()));
        }
        fetcher();
    },[]) // Connect to the server
    
    return null;
}
