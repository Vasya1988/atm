'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from './Navigation.module.sass'
import { useEffect, useState } from "react"
import Title from "../title/Title"

const Navigation = (props) => {

    const [myText, setMyText] = useState(null)

    const pathName = usePathname()

    return (
        <>
            <nav className={classes.Navigate}>
                {
                    props.navLinks.map((link) => {
                        const isActive = pathName === link.href
                        
                        console.log('this path --> ', link.href, pathName, isActive)
                        console.log(myText)

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={isActive ? (useEffect(()=> setMyText(link.label)), classes.active) : ''}
                            >
                                {link.label}
                            </Link>
                        )
                    })
                }
            </nav>
            <Title tag='h2' text={myText} />
        </>
    )
}
export default Navigation