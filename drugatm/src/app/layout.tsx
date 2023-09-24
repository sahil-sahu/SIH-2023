import { Socket } from '@/socket'
import './globals.css'
import type { Metadata } from 'next'

import React, { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import { Poppins } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ['400', '500','700'],
  subsets: ['latin'],
  display: 'swap',
})

const Mysocket: React.FC<ChildrenProps> = ({ children }) =>{
  return(
    <>
    <Socket />
    {children}
    </>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}><Mysocket>{children}</Mysocket></body>
    </html>
  )
}

