//import { useSelector } from 'react-redux';

export const fetchBarcode = async (longUrl, accessToken) => {
  //const accessToken = useSelector((state) => state.auth.accessToken); 
    try {
      const response = await fetch(`http://localhost:8080/api/barcode/${longUrl}`, {
        method: 'GET',
  headers: {

    'Authorization': `Bearer ${accessToken}` 
  }});
      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        return imageUrl;
      } else {
        throw new Error('Failed to load the barcode image.');
      }
    } catch (error) {
      console.error('Error fetching barcode:', error);
    }
  };
  