export const urlShortenerApi = async(longUrl) => {
    const formData = new URLSearchParams();

    try{
        formData.append('longurl',longUrl)
        const response = await fetch(`http://localhost:8080/api/longurl`, {
            method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer '
      },
      body : formData.toString(),
      
    //   body: new URLSearchParams({
    //     'longurl': JSON.stringify({ longUrl }),
    //     }),
        });
        
        if (response.ok) {
            const shortUrl = await response.text();
            console.log(
                "response", response
            );
            console.log(shortUrl)
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