import React from 'react'
import { useMap } from 'react-leaflet'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';



const MyMarker = (props) => {

    const map = useMap();
    map.flyTo(props.pos);
    
    return (
        <>
            <Marker position={props.pos}>
                <Popup>
                    Address / Business name
                </Popup>
                <Tooltip>
                    Address / Business name
                </Tooltip>
            </Marker>
        </>
    )
}

export default MyMarker