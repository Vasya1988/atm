'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from './Navigation.module.sass'

const Navigation = (props) => {

    const pathName = usePathname()
    
    return (
        <>
            <nav className={classes.Navigate}>
                {
                    props.navLinks.map((link) => {
                        const activePage = pathName.split('/')
                        const isActive = link.label.toLowerCase() === activePage[activePage.length-1]
                        
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={isActive ? classes.active : ''}
                            >
                                {link.label}
                            </Link>
                        )
                    })
                }
            </nav>
        </>
    )
}
export default Navigation