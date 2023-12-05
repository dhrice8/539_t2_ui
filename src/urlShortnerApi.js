//import { useSelector } from 'react-redux';

export const urlShortenerApi = async(longUrl, accessToken) => {
    //const accessToken = useSelector((state) => state.auth.accessToken);

    try{
        // const encodedURL = encodeURIComponent(longUrl);
        const response = await fetch(`http://localhost:8080/api/longurl/${longUrl}`, {
            method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${accessToken}` 
      },
      body: new URLSearchParams({
        'longurl': JSON.stringify({ longUrl }),
        }),
        });
        
        if (response.ok) {
            const shortUrl = await response.text();
            console.log(
                "response", response
            );

            return shortUrl;
        }
        else{
            throw new Error(`Error: ${response.status}`);
        }
    }
    catch(error){
        throw error;
    }
};