export const urlShortenerApi = async(longUrl) => {
    try{
        const response = await fetch('backend api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({longUrl})
        });
        
        if (response.ok) {
            // assume that the return of api is plain text
            const shortUrl = await response.text();

            // assume that the return of api is JSON
            // const shortUrl = await response.json();

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