import { useQuery, gql } from "@apollo/client";
import React from 'react';

const getSessionId = gql`
    query getSession_Id{
        sessionId
    }
`;

const SetSessionId = () =>{
    const {loading, error, data} = useQuery(getSessionId,{
        variables:{
            id: '123'
        }
    });
    if(loading) return (<div></div>);
    if(error) {
        console.log(error);
    };

    // save the sessionId in cookie and set expiry date of next day
    let tommorow = new Date();
    tommorow.setDate(new Date().getDate()+1);

    document.cookie = "sessionId="+ data.sessionId;
    document.cookie = "expires="+ tommorow.toUTCString() + ";"

    console.log("Next day date",tommorow);

    console.log(data.sessionId);

    return (<div></div>);
};

export default SetSessionId;
