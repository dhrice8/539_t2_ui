export const urlShortenerApi = async(longUrl) => {
    try{
        // const encodedURL = encodeURIComponent(longUrl);
        const response = await fetch(`http://localhost:8080/api/longurl/${longUrl}`, {
            method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTA0OTE3NTc5MTQyLXZjMWxvcDkya29sbG51c3BmY3ZkcGsyNmU4N2tiNXUyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTA0OTE3NTc5MTQyLXZjMWxvcDkya29sbG51c3BmY3ZkcGsyNmU4N2tiNXUyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3NjIwMzM0MTkwMTIxMjk3NDY5IiwiaGQiOiJyaWNlLmVkdSIsImVtYWlsIjoiYXMyNzhAcmljZS5lZHUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ii1NTUd6Q3dyenlwakpTRGtGa3gzWWciLCJuYmYiOjE3MDE1ODcxMjIsIm5hbWUiOiJBdmkgU2luZ2hhbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMM042SnByYVBvRzM1NnpMa2RNZ2dhYjJfa2E5akplb0lXRkpfMDAyS1o9czk2LWMiLCJnaXZlbl9uYW1lIjoiQXZpIiwiZmFtaWx5X25hbWUiOiJTaW5naGFsIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDE1ODc0MjIsImV4cCI6MTcwMTU5MTAyMiwianRpIjoiYzVlZjc2Y2Q2ODQxNDQ4ZGE1MWEwOWIxZjhlYWZjNGZmOWJlMWFlMiJ9.D--3ixAcU4iFx8FDzMWbM8AH3Y8O8wDGvvFqiGqOtDmLVzu0pTQ_Lib2LhRLg88NGHrs9I5QnwIjBXyGMuhXSa66qMpku0UzWW0t7Y3liuaEp5VDltyc6GPG7FgrDesLGoMy4gMX9BvohJUl0u9b8ctUkvOex2vTxWQ304uere88hnalNzcFVX-_nERgcwOXk4JOHmtRXCZ8NNKIGFdY4ysZvr0eOXH_AmNujobXzXUAx4Rz1wraORh_aslOi2b1Ex3BssK-RxcqMSz_fXM9_MSF9oP8TVhwAeLJuCKiYeinmWP6GbagEY4CTD_YWexhDISlT1RI2o7_Phgd8bzyMw'
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