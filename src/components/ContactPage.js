import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DocumentMeta from 'react-document-meta';
const counter = window.yaCounter40165370;

const meta = {
    title: 'Контактная информация',
    description: 'ЖК Малахит Контактная информация'
};

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.sendCounter = this.sendCounter.bind(this);
    }

    sendCounter() {
        counter.reachGoal('call_namber');
        console.log('yacounter call_namber sent');
        return true;
    }

    render() {
        return (
            <div>
            <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1">Контактная информация</div>
                    <Row>
                        <Col sm="7" xs="12">
                            <p className="text_18">
                                <b>Офис продаж:</b><br/>
                                г. Новосибирск, ул. Челюскинцев, д. 14/2, офис 507
                            </p>
                            <a className="contact__phone" href="tel:+73832090703" onClick={this.sendCounter}>+7 (383) 209-07-03</a>
                            <p className="text_18">
                                +7 913 450 86 89 (суб. и воскр.)<br/>
                                <a className="link link_green" href="mailto:op@malahit-nsk.ru" target="_blank" rel="noopener noreferrer" >op@malahit-nsk.ru</a>
                            </p>
                            <p className="text_18">
                                <b>Отдел маркетинга:</b><br/>
                                +7 (383) 209-05-09 (вн. 107)<br/>
                                <a className="link link_green" href="mailto:malaxitmarket@mail.ru" target="_blank" rel="noopener noreferrer" >malaxitmarket@mail.ru</a>
                            </p>
                        </Col>
                        <Col sm="5" xs="12">
                            <p className="text_18">
                                <b>Приемная:</b><br/>
                                +7 (383) 209-07-01
                            </p>
                            <p className="text_18">
                                <b>Адрес ЖК «Малахит»:</b><br/>
                                Новосибирский р-н, пос. Садовый,<br/>
                                ул. Затонского, 106
                            </p>
                            <p className="text_18">
                                <b>Строительная дирекция:</b><br/>
                                +7 (383) 209-07-02<br/>
                                <a className="link link_green" href="mailto:info@malahit-nsk.ru" target="_blank" rel="noopener noreferrer" >info@malahit-nsk.ru</a>
                            </p>
                        </Col>
                    </Row>

                    <div className="mb-5 mt-2 embed-responsive embed-responsive-21by9">
                        <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.272336038742!2d82.90132531623772!3d55.038443980368385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe434593acdd9%3A0xc45a60bcac62c082!2z0KPQmiDQnNCw0LvQsNGF0LjRgg!5e0!3m2!1sru!2sru!4v1518078146184" allowFullScreen />
                    </div>
                </Container>
            </div>
        );
    }
}
