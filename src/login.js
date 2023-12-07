import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { setAccessToken } from './authSlice';

const clientId="904917579142-vc1lop92kollnuspfcvdpk26e87kb5u2.apps.googleusercontent.com"

function Login(){
    const dispatch = useDispatch();

    const onSuccess= (res) =>{
        console.log("Login Success! User: ", res.profileObj);
        dispatch(setAccessToken(res.tokenObj.id_token));
        console.log('accessToken:', res.tokenObj.id_token); 
    }
    const onError= (res) =>{
        console.log("Login Failed! res: ", res);
    }

    return(
        <div id="LoginButton">
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign Up/Sign In"
              onSuccess={onSuccess}
              onFailure={onError}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />

        </div>


    )
}

export default Login;