import React, {Component} from 'react';
// import { render } from 'react-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Karya extends Component {
    render() {
        return(
            <div className="body">
                <Jumbotron fluid className="jumboo">
                    <Container className="titlekar">
                        <h1 className="titlekar1">Karya Program Adiwiyata</h1>
                        <p className="parakar">
                            karya - karya dari siswa untuk mensukseskan program Adiwiyata.
                        </p>
                    </Container>
                </Jumbotron>

                <div className="judul">
                    <h1 className="titlekar2">Macam Kerajinan Karya</h1>
                </div>

                    <CardColumns className="jarakcard">
                        <Card>
                            <Card.Img variant="top" src="./image/ker7.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Pot Kaleng</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="./image/ker4.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Tas Plastik</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="./image/ker1.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Bunga Plastik</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="./image/ker5.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Dompet Plastik</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card> 

                        <Card>
                            <Card.Img variant="top" src="./image/ker10.png" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Bunga Koran</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="./image/ker6.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Nanas Sendok Plastik</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="./image/ker8.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Lampu Botol</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="./image/ker3.jpg" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Bunga Plastik</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        
                        <Card>
                            <Card.Img variant="top" src="./image/ker9.png" />
                                <Card.Body>
                                    <Card.Title>Kerajinan Pohon Botol</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardColumns>
                    
                <footer class="bg-dark text-white">
                    <Container>
                        <div class="row pt-3">
                            <div class="col text-center">
                                <p>Copyright Nanda_Hafiza_Y_33/XI-R1</p>
                            </div>
                        </div>
                    </Container>
                </footer>
            </div>
        )
    }
}

export default Karya;