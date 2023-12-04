import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { clearAccessToken } from './authSlice';


const clientId="904917579142-vc1lop92kollnuspfcvdpk26e87kb5u2.apps.googleusercontent.com"

function Logout(){
    const dispatch = useDispatch();

    const onSuccess= (res) =>{
        console.log("Log Out Successfull!");
        dispatch(clearAccessToken());
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSuccess}
            />

        </div>


    )
}

export default Logout;