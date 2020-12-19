import React, {Component} from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


class App extends Component{
  render(){
    return(
      <div>

        <Navbar className="header" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home" className="header1">
              <img alt="" src="./image/plant.svg" width="30" height="30" className="d-inline-block align-top"/>
              {' '}
              AdiwiyaWeb
            </Navbar.Brand>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto" >
                  <li class="nav-item"><Link class="nav-link" to="/">Beranda</Link></li>
                  {/* ini kan cuma buat menu saja dan ngasih link beranda itu pakai '/' aja */}
                  <li class="nav-item"><Link class="nav-link" to="/karya">Karya</Link></li>
                  <li class="nav-item"><Link class="nav-link" to="/profil">Profil</Link></li>
                </ul>
            </div>
          </Container>
        </Navbar>

        <p><Utama /></p>

      </div>
    );
  }
}

export default App;