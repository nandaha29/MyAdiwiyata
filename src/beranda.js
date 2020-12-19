import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Beranda extends React.Component{
    render(){
        return(
            <div className="body">

            <Card className="bg-dark text-white beranda">
              <Card.Img src="./image/pohon1.jpg" alt="Card image" className="image"/>
              <Container>
                <Card.ImgOverlay className="title1">
                    <h1 className="title2">Selamat Datang<br /> My<span>Adiwiyata</span></h1>
                </Card.ImgOverlay>
              </Container>
            </Card>
                
            <Container className="jarak1">
                <Row >
                    <Col >
                        <img src="./image/logo2.png" className="kiri"/>
                    </Col>
                    <Col className="kanan">
                        <h1 className="titleapa">Pengertian Adiwiyata</h1>
                        <p className="paragapa">Sekolah Adiwiyata adalah Sekolah yang peduli lingkungan yang sehat, bersih serta lingkungan yang indah. Dengan adanya program adiwiyata diharapkan seluruh masyarakat di sekitar sekolah agar dapat menyadari bahwa lingkungan yang hijau adalah lingkungan yang sehat bagi kesehatan tubuh kita.</p>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <img src="./image/taman2.jpg" className="kana"/>
                    </Col>
                    <Col>
                        <h1 className="titleapa2">Tujuan Adiwiyata</h1>
                        <ul className="paragapa2">
                            <li><span1>Tujuan Umum :</span1> Membentuk sekolah peduli dan berbudaya lingkungan yang mampu berpartisipasi dan melaksanakan upaya pelestarian lingkungan dan pembangunan berkelanjutan bagi kepentingan generasi sekarang maupun yang akan datang.</li>
                            <li><span1>Tujuan Khusus:</span1> Mewujudkan warga sekolah yang bertanggung jawab dalam upaya perlindungan dan pengelolaan lingkungan melalui tata kelola sekolah yang baik untuk untuk mendukung pembangunan berkelanjutan.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

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

export default Beranda;