export const fetchBarcode = async (longUrl, accessToken) => {
  const formData = new URLSearchParams();

  try {
    formData.append('longurl', longUrl)
    // const encodedURL = encodeURIComponent(longUrl);
    const response = await fetch(`http://localhost:8080/api/barcode`, {
      //const response = await fetch(`https://rice-comp-539-spring-2022.uk.r.appspot.com/api/barcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${accessToken}`
      },
      body: formData.toString(),

      // body: new URLSearchParams({
      //   'longurl': JSON.stringify({ longUrl }),
      //   }),
    });

    if (response.ok) {
      const barcodeBase64 = await response.text();
      console.log(
        "response", response
      );
      console.log(barcodeBase64)
      return barcodeBase64;
    }
    else {
      throw new Error(`Error: ${response.status}`);
    }
  }
  catch (error) {
    throw error;
  }
};
