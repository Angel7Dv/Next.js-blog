import Navbar from "../Navbar";
import Head from 'next/head'
import Image from 'next/image'

import utilsStyles from '../../styles/utils.module.css'
import Link from "next/link";

export default function index({ children, title, content, home, userName }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />


            {home &&
                <header >
                    <div className={utilsStyles.justifyCenter}>

                    <Image
                        className={utilsStyles.avatar}
                        src="/img/i.jpg"
                        width={150}
                        height={150}
                        >
                    </Image>
                        </div>
                    <h1>welcome {userName}</h1>

                </header> 
            }


            <main
            className={utilsStyles.content}
            >{children}</main>



            {!home &&
            <Link href="/">
                <a className={utilsStyles.justifyCenter} >← back to home</a>
            </Link>
            }
        </div>
    )
}

index.defaultProps = {
    title: "page | next",
    content: "content | next"

}
