import Link from "next/link";
import cancel from '@/app/assets/cancel.svg'
import Image from "next/image";

export default function Header(){
    return(
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
                <li>
                    <Link href={"/"}>
                        <div>
                        <Image alt="cancel" height={50} src={cancel} />
                        </div>
                    </Link>
                </li>
            </ul>
        </header>
    );
}