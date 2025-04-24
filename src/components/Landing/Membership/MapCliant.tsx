"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicMap = dynamic(() => import("../../map/mapLeaflat"), {
    ssr: false
})

const MapCliant = () => {
    return (
        <div style={{
            position: 'absolute',
            bottom: "-50%",
            right: 0,
            zIndex: -1,
            width: '100%',
            padding : "5rem 0" ,  
            height: '1000px' , 
        }}>
            <DynamicMap />

        </div>
    )
}

export default MapCliant
