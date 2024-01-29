"use client"

import React,{useEffect} from "react";
import { Loader } from "@googlemaps/js-api-loader";


export function Map(){

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const initMap= async()=>{
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            })
            const {Map}= await loader.importLibrary('maps');
            const position = {
                lat: -33.867,
                lng: 151.195
            }
            const mapOptions: google.maps.MapOptions= {
                center: position,
                zoom: 17,
                mapId:"MY_NEXTJS_ID"
            }
            var request = {
                query: 'Museum of Contemporary Art Australia',
                fields: ['name', 'geometry'],
              };
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        }
        initMap();
    },[])




    return(<div style={{height:'600px'}} ref={mapRef} ></div>)
}