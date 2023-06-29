'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from './Navigation.module.sass'

const Navigation = (props) => {

    const pathName = usePathname()
    

    return (
        <nav className={classes.Navigate}>
            {
                props.navLinks.map((link) => {
                    const isActive = pathName === link.href
                    console.log('this path --> ', link.href, pathName, isActive)
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
    )
}
export default Navigation