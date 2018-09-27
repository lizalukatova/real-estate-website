import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DocsTabs from '../../components/about/DocsTabs';
import DocumentMeta from 'react-document-meta';

const meta = {
    title: 'О комплексе: Застройщик',
    description: 'ЖК Малахит О комплексе: Застройщик'
};

const AboutCompanyPage = () => (
    <div>
        <DocumentMeta {...meta} />

        <Container>
            <div className="header-1">Застройщик ЖК Малахит</div>
            <Row>
                <Col>
                    <p className="text_18">Застройщиком данного проекта выступает ООО «Управляющая компания Малахит».
                    </p>
                    <p className="text_18">Подрядчиком по строительству проекта выступает ООО «ЭСКаД».
                    </p>
                    <p className="text_18">Продажи строящихся объектов ведутся в строгом соответствии с Федеральным законом от 30.12.2004
                        года №214-ФЗ «Об участии в долевом строительстве многоквартирных домов и иных объектов недвижимости…».
                    </p>
                </Col>
            </Row>
            <div className="header-1 padding-t-0">Документы</div>
            <a href="/files/row-1.pdf" target="_blank" className="docs__link docs__link_small" rel="noopener noreferrer" download>
                <span>Электронный журнал - первая очередь</span>
            </a>
            <a href="/files/row-2.pdf" target="_blank" className="docs__link docs__link_small" rel="noopener noreferrer" download>
                <span>Электронный журнал - вторая очередь</span>
            </a>
            <DocsTabs />
        </Container>
    </div>
);

export default AboutCompanyPage;