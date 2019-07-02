// export function getCurrentLatLng() {
//     return new Promise(resolve => {
//       navigator.geolocation.getCurrentPosition(pos => resolve({
//         lat: pos.coords.latitude,
//         lng: pos.coords.longitude
//       }));
//     });
//   }

// export function getCurWeatherByLatLng(lat , lng) {
//     return fetch().then(res => res.json()
    
//     navigator.geolocation.getCurrentPosition(pos => reslove({
//         lat: pos.coords.latitude,
//         lon: pos.coords.longitude
//     }))

// }


export function getCurWeatherByLatLng(lat, lng) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=d3945aa316355ce92bb8cc10bf63e3da`;
    return fetch(endpoint, {mode: 'cors'}).then(res => res.json());
  }