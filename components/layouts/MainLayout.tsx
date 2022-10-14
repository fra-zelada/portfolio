import Head from "next/head"
import { FC, PropsWithChildren } from "react"

interface Props {
    
}

const MainLayout:FC<PropsWithChildren<Props>> = ({ children }) => {
    return (<>

            <Head>
                <title>Portfolio</title>

            </Head>
            
                <main>
                    
                    {
                        children
                    }

                </main>

            </>
    )
}

export default MainLayout
