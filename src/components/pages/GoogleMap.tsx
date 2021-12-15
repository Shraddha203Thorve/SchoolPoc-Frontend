
import React,{ useState }  from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const GoogleMap = () => {
    const [center, setCenter] = useState({lat: 18.592092, lng: 73.734547 });
    const [zoom, setZoom] = useState(11);
    return (
        <div className="m-auto align-self-center mt-2" style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCECphDgJiUmOjNWBsorguce8Uwzbjzh68' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
         <Marker
            lat={18.592092}
            lng={73.734547}
            name="LCPS"
            color="#cc0000"
          />
        </GoogleMapReact>
      </div>
    )
}

export default GoogleMap
