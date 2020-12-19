import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
// ini kan memanggil komponen beranda
import Karya from './karya';
import Profil from './profil';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} /> 
        {/* terus di load disini nak */}
        <Route path="/karya" component={Karya} />
        <Route path="/Profil" component={Profil} />
    </Switch>
)

export default Utama;

// file khusus link