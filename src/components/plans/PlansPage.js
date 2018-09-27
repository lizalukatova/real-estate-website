import React from 'react';
import { Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

import Advantages from '../../components/common/Advantages';

const meta = {
    title: 'Генплан',
    description: 'ЖК Малахит Генплан'
};

const AboutPage = () => (
    <div>
        <DocumentMeta {...meta} />

        <Container>
            <div className="header-1 mb-4">Дома на карте</div>
        </Container>

        <div className="genplan">
            <div className="genplan__link__wrap">
                <Link className="genplan__link genplan__link_blue genplan__link_8" to={'/plans/house-8'}>8</Link>
                <Link className="genplan__link genplan__link_blue genplan__link_7" to={'/plans/house-7'}>7</Link>
                <Link className="genplan__link genplan__link_blue genplan__link_6" to={'/plans/house-6'}>6</Link>
                <Link className="genplan__link genplan__link_blue genplan__link_5" to={'/plans/house-5'}>5</Link>

                <Link className="genplan__link genplan__link_yellow genplan__link_4" to={'/plans/house-4'}>4</Link>
                <Link className="genplan__link genplan__link_yellow genplan__link_3" to={'/plans/house-3'}>3</Link>
                <Link className="genplan__link genplan__link_yellow genplan__link_2" to={'/plans/house-2'}>2</Link>
                <Link className="genplan__link genplan__link_yellow genplan__link_1" to={'/plans/house-1'}>1</Link>

                <Link className="genplan__link genplan__link_townhouse_1" to={'/about/townhouses'} />
                <Link className="genplan__link genplan__link_townhouse_2" to={'/about/townhouses'} />
                <Link className="genplan__link genplan__link_townhouse_3" to={'/about/townhouses'} />

                <Link className="genplan__link genplan__link_land_1" to={'/about/townhouses'} />
                <Link className="genplan__link genplan__link_land_2" to={'/about/townhouses'} />
            </div>

            <Container>
                <div className="genplan__legend">
                    <p className="genplan__legend_text genplan__legend_yellow">Готовые дома (I очередь)</p>
                    <p className="genplan__legend_text genplan__legend_blue">Строящиеся дома (II очередь)</p>
                    <p className="genplan__legend_text genplan__legend_orange">Земельные участки</p>
                    <p className="genplan__legend_text genplan__legend_pink">Таунхаусы</p>
                </div>
            </Container>
        </div>

        <div className="bg_light-yellow pt-5 pb-4">
            <Container>
                <p className="text_18_sm">В жилом комплексе на этапе строительства 4-ой очереди предусмотрено строительство собственной школы.</p>
                <p className="text_18_sm">Помимо этого, в пятиминутной автомобильной доступности расположено несколько школ и дошкольных образовательных учреждений, поликлиники и магазины.</p>
            </Container>
        </div>

        <Advantages/>
    </div>
);

export default AboutPage;