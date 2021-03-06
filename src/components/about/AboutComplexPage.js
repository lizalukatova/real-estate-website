import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DocumentMeta from 'react-document-meta';

const meta = {
    title: 'О комплексе',
    description: 'ЖК Малахит О комплексе'
};

const AboutComplexPage = () => (
    <div>
        <DocumentMeta {...meta} />

        <Container>
            <div className="header-1">О жилом квартале Малахит</div>
        </Container>
        <div className="about__img-header">
            <div className="about__img-header__photo" />
        </div>

        <Container>
            <Row className="padding-b-30">
                <Col lg={{size: 8, offset: 2}}>
                    <p className="text_18">В пригороде Новосибирска строится малоэтажный жилой квартал «Малахит».
                        Он для тех, кто привык к городскому ритму и при этом мечтает о тишине, уюте и свежем воздухе.
                        ЖК «Малахит» – это качественное жилье в  15-20 минутах езды на машине или 25-35 минутах на
                        общественном транспорте от площади Калинина. Отсутствие промышленных предприятий, локация среди
                        леса на участке в 16 гектаров и при этом транспортная доступность – главное преимущество ЖК «Малахит».
                    </p>
                    <p className="text_18">Завершено строительство первой очереди, начато строительство  второго этапа.
                        Всего же проект включает 40 домов, разделенных на семь очередей строительства. Все они возводятся из кирпича по классической технологии.
                    </p>
                    <p className="text_18">В «Малахите» есть как классические планировки, так и студии, а так же
                        квартиры с террасами. Уютные дворы, закрытые для проезда автомобилей, придомовые территории с
                        небольшими парками и скверами, зоны для отдыха и спорта для взрослых и детей, охрана и
                        видеонаблюдение позволит жильцам быть спокойным за себя и своих близких.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default AboutComplexPage;