"use client"
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import { CustomTopArrow } from '@/elements/ElementsCustom';
const TopArrow = () => {
    const [isVisible, setIsVisible] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            {isVisible && (
                <CustomTopArrow>
                    <IconButton onClick={scrollToTop}>
                        <NavigationIcon />
                    </IconButton>
                </CustomTopArrow>

            )}
        </>
    )
}

export default TopArrow
