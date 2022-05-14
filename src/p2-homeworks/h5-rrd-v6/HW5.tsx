import React from 'react'

import {HashRouter} from "react-router-dom";
import Pages from "./Pages";
import Header from "./Header";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
