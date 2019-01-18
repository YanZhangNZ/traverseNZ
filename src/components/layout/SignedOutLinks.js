//no state, so can be a function component not class component

import React from 'react';
import {NavLink} from 'react-router-dom';
 

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/signup' >Signup</NavLink></li>
            <li><NavLink to='/signin' >Login</NavLink></li>
        </ul>

    )
}
export default SignedOutLinks;