"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicMap = dynamic(() => import("../../map/mapLeaflat"), {
    ssr: false
})

const MapCliant = () => {
    return (
        <div>
            <DynamicMap />

        </div>
    )
}

export default MapCliant
