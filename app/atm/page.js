import classes from './Atm.module.sass'
import React from 'react'
import main from './main/page'
import Title from '@/components/title/Title'
import Link from 'next/link'

const AtmLayout = ( {children}) => {
    
    return (
        <main>{children}</main>
    )
}

export default AtmLayout