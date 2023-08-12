import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';

const MyMap: React.FC = () => {
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;

    async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: "AIzaSyCL1DRZKzq-WHwvd4joVy4X5IQwhRrcQkk",
            config: {
                center: {
                    lat: 48.6,
                    lng: 11.5,
                },
                zoom: 8,
                streetViewControl: false,
                disableDefaultUI: true

            }
        })
    }

    return (
        <div className="component-wrapper">
            <capacitor-google-map ref={mapRef} style={{
                display: 'inline-block',
                width: 275,
                height: 400
            }}></capacitor-google-map>

            <button onClick={createMap}>Create Map</button>
        </div>
    )
}

export default MyMap;