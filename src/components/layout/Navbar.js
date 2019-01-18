//no state, so can be a function component not class component

import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
// these two signin and signout components will show under some logic authentication
const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">TraverseNZ</Link>
              
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>

    )
}
export default Navbar;