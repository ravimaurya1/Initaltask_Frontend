const GetSessionId = () =>{
    let allcookies = document.cookie;

    //Get all the cookies pairs in an array
    let cookiearray = allcookies.split(';');

    let session_value;

    //Now take key value pair out of this array
    for(let i = 0; i < cookiearray.length ;i++){
        let name = cookiearray[i].split('=')[0];
        let value = cookiearray[i].split('=')[1];
        if(name === 'sessionId'){
            session_value = value;
            break;
        }
    }
    return session_value;
}

export default GetSessionId;