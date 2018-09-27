import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Advantages from '../components/common/Advantages';
import DocumentMeta from 'react-document-meta';

import bankDelta from '../images/banks/ipoteka_delta.jpg';
import bankGazprom from '../images/banks/ipoteka_gazprom.jpg';
import bankGlobeks from '../images/banks/ipoteka_globeks.jpg';
import bankLevober from '../images/banks/ipoteka_levober.jpg';
import bankMetallinvest from '../images/banks/ipoteka_metallinvest.jpg';
import bankRoskapital from '../images/banks/ipoteka_roskapital.jpg';
import bankRosselhoz from '../images/banks/ipoteka_rosselhoz.jpg';
import bankSberbank from '../images/banks/ipoteka_sberbank.jpg';
import bankSovkom from '../images/banks/ipoteka_sovkom.jpg';
import bankUralsib from '../images/banks/ipoteka_uralsib.jpg';
import bankVtb24 from '../images/banks/ipoteka_vtb24.jpg';
import bankVtbmoscow from '../images/banks/ipoteka_vtbmoscow.jpg';
import bankVtbvoennie from '../images/banks/ipoteka_vtbvoennie.jpg';

const meta = {
    title: 'Условия приобретения',
    description: 'ЖК Малахит Условия приобретения'
};

const BuyingPage = () => (
    <div>
        <DocumentMeta {...meta} />
        <Container>
            <div className="header-1">Условия приобретения</div>
            <div className="header-2">1. Ипотека</div>
            <Row>
                <Col sm="9" xs="12">
                    <p className="text_18">Заявки в банки-партнеры принимаем непосредственно в отделе продаж.<br/>
                        Ставки по ипотеке от 8,75%</p>
                </Col>
                <Col sm="3" className="d-none d-sm-block"><div className="lizard_mortgage" /></Col>
            </Row>
            <div className="banks">
                <img src={bankMetallinvest} alt="bank Metallinvest"/>
                <img src={bankSberbank} alt="bank Sberbank"/>
                <img src={bankRoskapital} alt="bank Roskapital"/>
                <img src={bankGlobeks} alt="bank Globeks"/>
                <img src={bankLevober} alt="bank Levober"/>
                <img src={bankDelta} alt="bank Delta"/>
                <img src={bankUralsib} alt="bank Uralsib"/>
                <img src={bankVtbmoscow} alt="bank Vtbmoscow"/>
                <img src={bankVtbvoennie} alt="bank Vtbvoennie"/>
                <img src={bankSovkom} alt="bank Sovkom"/>
                <img src={bankRosselhoz} alt="bank Rosselhoz"/>
                <img src={bankGazprom} alt="bank Gazprom"/>
                <img src={bankVtb24} alt="bank Vtb24"/>
            </div>

            <div className="green-v-line" />
            <div className="header-2">2. Рассрочка</div>
            <Row>
                <Col sm="7" xs="12">
                    <p className="text_18_sm">При оформлении покупки с рассрочкой платежа мы не берем процентов.</p>
                    <p className="text_18_sm font-weight-bold">Условия рассрочки:</p>
                    <ul className="ul-padding">
                        <li className="text_18_sm">— первый платеж от 50 % от стоимости квартиры вносится на р/с застройщика после государственной регистрации ДДУ;</li>
                        <li className="text_18_sm">— вторая часть суммы вносится на р/с застройщика равными платежами до 31.12.2018 г.;</li>
                        <li className="text_18_sm">— рассрочка возможна только при приобретении квартир во второй очереди строительства (дома №5, №6, №7, №8). </li>
                    </ul>
                </Col>
                <Col sm={{size: 3, offset: 2}} className="d-none d-sm-block"><div className="lizard_installment" /></Col>
            </Row>

            <div className="green-v-line" />
            <div className="header-2">3. Дистанционная покупка квартиры</div>
            <Row>
                <Col sm="7" xs="12">
                    <p className="text_18_sm">Мы предоставляем своим клиентам возможность оформить и оплатить квартиру online, без визита в офис из любой точки РФ.</p>
                </Col>
                <Col sm={{size: 3, offset: 2}} className="d-none d-sm-block"><div className="lizard_online" /></Col>
            </Row>
        </Container>

        <div className="bg_light-yellow pb-4">
            <Container>
                <div className="header-1">Наши гарантии</div>
                <Row>
                    <Col sm="6" xs="12">
                        <div className="guarantee__block">Бесплатное юридическое сопровождение сделки и страхование договора</div>
                        <div className="guarantee__block">Соблюдение Федерального закона №214-ФЗ</div>
                    </Col>
                    <Col sm="6" xs="12">
                        <div className="guarantee__block">Государственная регистрация договора участия в долевом строительстве без очереди</div>
                        <div className="guarantee__block">Земля в собственности</div>
                    </Col>
                </Row>
            </Container>
        </div>

        <Advantages/>
    </div>
);

export default BuyingPage;