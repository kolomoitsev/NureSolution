import React from "react";
import {Redirect} from "react-router-dom"


let Logout = () => {

    sessionStorage.clear();

        return(
            <Redirect to="/" />
        )

}

export default Logout;