import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


class Profil extends Component {
    render() {
        return(
            <div className="body">
                <Jumbotron fluid className="jumbooo">
                    <Container className="titlekar">
                        <h1 className="titlekar1">Profil Adiwiyata SMK Telkom Malang</h1>
                        <p className="parakar">
                            penghargaan dan acara - acara dari sekolah untuk mensukseskan program Adiwiyata.
                        </p>
                    </Container>
                </Jumbotron>
                
                    <Container >
                        <Row >
                            <Col >
                                <img src="./image/sertif.jpg" className="kiripro"/>
                            </Col>
                            
                            <Col className="kananpro">
                                <h1 className="titleapa">Penghargaan Sekolah Adiwiyata</h1>
                                <p className="paragapa">SMK Telkom Malang adalah pelopor Sekolah menengah kejuruan pertama di Indonesia di bidang Teknologi dan Informatika. Berpengalaman dari tahun 1992 yang telah terakreditasi "A" dan mempunyai standart mutu ISO 9001:2015. SMK Telkom Malang juga merupakan sekolah adiwiyata yang menerapkan prinsip sekolah hijau, hal tersebut semakin memberikan suasana yang nyaman bagi warga sekolah.</p>
                                
                            </Col>
                        </Row>
                    </Container>

                <div className="jarakAcara">
                    <Container>
                        <div className="judulacara">
                            <h1 className="titlekar3">Acara Kegiatan Adiwiyata</h1>
                        </div>
                        
                        <CardColumns className="jarakcard">
                        <Card>
                            <Card.Img variant="top" src="./image/aca12.png" />
                                <Card.Body>
                                    <Card.Title>Pelatihan dan Budidaya Magot</Card.Title>
                                    <Card.Text>
                                        Magot ini merupakan pakan ikan alternatif yang telah berhasil dikembangkan, dan sampah sisa yang terbuang bisa menjadi sumber protein bagi magot.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./image/aca13.png" />
                                <Card.Body>
                                    <Card.Title>Kegiatan Peduli Lingkungan SMK Telkom Malang</Card.Title>
                                    <Card.Text>
                                        Kegiatan peduli dengan membagikan totebag yang berisi starter pack yang sangat dibutuhkan saat ini. {' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./image/aca15.png" />
                                <Card.Body>
                                    <Card.Title>Pelatihan Pengolahan Kompos</Card.Title>
                                    <Card.Text>
                                    Pelatihan ini bertujuan untuk meningkatkan pemahaman kepada masyarakat tentang cara pembuatan pupuk kompos dari sampah rumah tangga.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./image/aca7.png" />
                                <Card.Body>
                                    <Card.Title>Pengurangan Limbah Plastik dan Kantin Sehat</Card.Title>
                                    <Card.Text>
                                        Pengurangan limbah plastik dengan memulai gerakan memakai botol <i>(tumbler)</i> setiap siswa dan. {' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./image/aca17.png" />
                                <Card.Body>
                                    <Card.Title>Penghijauan Area Sekolah</Card.Title>
                                    <Card.Text>
                                        Penghijauan dilakukan untuk menambah meresapnya air hujan dan membuat lingkungan sekolah menjadi rindang dan lebih banyak oksigen. Dapat mengurangi pemanasan global.{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./image/aca18.png" />
                                <Card.Body>
                                    <Card.Title>Budidaya Membuang Sampah Pada Tempatnya</Card.Title>
                                    <Card.Text>
                                        Membiasakan siswa - siswi untuk melakukan gerakan 3R (Reduce, Reuse, Recycle).{' '}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                    </CardColumns>
                    </Container>
                </div>
                
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

export default Profil;