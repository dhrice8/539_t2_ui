export const urlShortenerApi = async(longUrl, accessToken) => {
    const formData = new URLSearchParams();

    try{
        formData.append('longurl',longUrl)
        const startTime = Date.now();
        //const response = await fetch(`http://localhost:8080/api/longurl`, {
        const response = await fetch(`https://rice-comp-539-spring-2022.uk.r.appspot.com/api/longurl`, {
            method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${accessToken}` 
      },
      body : formData.toString(),
      
    //   body: new URLSearchParams({
    //     'longurl': JSON.stringify({ longUrl }),
    //     }),
        });
        
        if (response.ok) {
            const shortUrl = await response.text();
            const endTime = Date.now();
            const latency = endTime - startTime;
            console.log(
                "response", response
            );
            console.log(shortUrl)
            return {shortUrl, latency};
        }
        else{
            throw new Error(`Error: ${response.status}`);
        }
    }
    catch(error){
        throw error;
    }
};
// //import { useSelector } from 'react-redux';

// export const urlShortenerApi = async(longUrl, accessToken) => {
//     //const accessToken = useSelector((state) => state.auth.accessToken);

//     try{
//         // const encodedURL = encodeURIComponent(longUrl);
//         const response = await fetch(`http://localhost:8080/api/longurl/${longUrl}`, {
//         //const response = await fetch(`https://rice-comp-539-spring-2022.uk.r.appspot.com/${longUrl}`, {   
//             method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         // "Access-Control-Allow-Origin": "*",
//         'Authorization': `Bearer ${accessToken}` 
//       },
//       body: new URLSearchParams({
//         'longurl': JSON.stringify({ longUrl }),
//         }),
//         });
        
//         if (response.ok) {
//             const shortUrl = await response.text();
//             console.log(
//                 "response", response
//             );

//             return shortUrl;
//         }
//         else{
//             throw new Error(`Error: ${response.status}`);
//         }
//     }
//     catch(error){
//         throw error;
//     }
// };