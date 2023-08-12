import { GoogleMap } from '@capacitor/google-maps';
import { useEffect, useRef } from 'react';

const MyMap: React.FC = () => {
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;

    useEffect(() => {
        createMap();
      }, []);

    async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: "AIzaSyCL1DRZKzq-WHwvd4joVy4X5IQwhRrcQkk",
            config: {
                center: {
                    lat: 48.139654431697515,
                    lng:  11.580722771538866
                },
                zoom: 13,
                streetViewControl: false,
                disableDefaultUI: true

            }
        })
        // Add a marker to the map
        const markerId = await newMap.addMarker({
            coordinate: {
                lat: 48.13838582559387,
                lng: 11.566516639189507
            }
        });
        const markerId2 = await newMap.addMarker({
            coordinate: {
                lat: 48.1483619145341357,
                lng: 11.589001109996095
            }
        });
        const markerId3 = await newMap.addMarker({
            coordinate: {
                lat: 48.13663938762427,
                lng: 11.594337751261142
            }
        });
    }

    return (
        <div className="component-wrapper">
            <capacitor-google-map ref={mapRef} style={{
                display: 'inline-block',
                width: 275,
                height: 400
            }}></capacitor-google-map>
        </div>
    )
}

export default MyMap;