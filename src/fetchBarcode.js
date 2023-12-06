export const fetchBarcode = async (longUrl) => {
  const formData = new URLSearchParams();
  
  try{
    formData.append('longurl',longUrl)
  // const encodedURL = encodeURIComponent(longUrl);
  const response = await fetch(`http://localhost:8080/api/barcode`, {
      method: 'POST',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
  // "Access-Control-Allow-Origin": "*",
  'Authorization': 'Bearer '
},
body : formData.toString(),

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
  else{
      throw new Error(`Error: ${response.status}`);
  }
}
catch(error){
  throw error;
}
  
  //   try {
  //     const response = await fetch(`http://localhost:8080/api/barcode/${longUrl}`, {
  //       method: 'GET',
  // headers: {

  //   'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTA0OTE3NTc5MTQyLXZjMWxvcDkya29sbG51c3BmY3ZkcGsyNmU4N2tiNXUyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTA0OTE3NTc5MTQyLXZjMWxvcDkya29sbG51c3BmY3ZkcGsyNmU4N2tiNXUyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0OTU4MTY2NjYxOTk2MTIxMDU4IiwiaGQiOiJyaWNlLmVkdSIsImVtYWlsIjoiaWsyMEByaWNlLmVkdSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiVkNVUThua0dRTWFtVkdwcWZsYW9HQSIsIm5iZiI6MTcwMTc1MzE4MSwibmFtZSI6IklzaGl0YSBLdW5kYWxpeWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0xLRnpGN3M5QzJfcTFwMW0xVHRoNENhSW5SWlpNM1ZUdDFGSzRReS1qPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IklzaGl0YSIsImZhbWlseV9uYW1lIjoiS3VuZGFsaXlhIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDE3NTM0ODEsImV4cCI6MTcwMTc1NzA4MSwianRpIjoiYWU0MjA1NmI0NTBjMjdjNzM0MGEyNGE1Y2M2M2M2YzIzNzZhNDY3NSJ9.YxRIeKsO-iAxTtFQAFF-tZWyUrxZBSFbJk7yZItD21sg3zmAPkxuq3DcY4NVMsH80jgRJt32gyL2LIieu82ohvVUi75X3kjrO5N1lDvRO6xrK_8YXKdh71e5ZaKku3XvKBmXTq8ZVDw9QxYJm0_wSXyEJeFgRf8ZGg9lfr1BcGuVDdaLEBAEG_PvCGJKD7KCOJE80cizrIC2TcsMnwL4sC_Xnl1glySQvEYTP28Wylsm7XXP_gdNZVmowBlOQLf6jST6dcVh-3cg3GkIfBqNeFeLqX1WMnwjmVmN53qsLateEIPy4YwB4htjxo2unf9-rEWdg1PDT-6qzYEQHBMH9w'
  //  }});
  //     if (response.ok) {
  //       const blob = await response.blob();
  //       const imageUrl = URL.createObjectURL(blob);
  //       console.log(imageUrl);
  //       return imageUrl;
  //     } else {
  //       throw new Error('Failed to load the barcode image.');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching barcode:', error);
  //   }
  };
  