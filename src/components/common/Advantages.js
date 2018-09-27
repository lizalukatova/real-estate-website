import React from 'react';
import { Container } from 'reactstrap';
import advantagePic1 from '../../images/main/plus_tihaya_gavan.png';
import advantagePic2 from '../../images/main/plus_classic_technology.png';
import advantagePic3 from '../../images/main/plus_svoboda_deistvii.png';
import advantagePic4 from '../../images/main/plus_vse_ryadom.png';
import advantagePic5 from '../../images/main/plus_communication.png';

const Advantages = () => (
    <div className="bg_light-green">
        <Container>
            <div className="header-1">Преимущества</div>
            <div className="advantages">
                <div className="advantage">
                    <img src={advantagePic1} />
                    <div className="advantage__title">Тихая гавань</div>
                    <div className="advantage__text">Отсутствие промышленных предприятий, локация среди леса на участке в 16 га</div>
                </div>
                <div className="advantage">
                    <img src={advantagePic2} />
                    <div className="advantage__title">Классическая технология</div>
                    <div className="advantage__text">Все дома возводятся из кирпича по классической технологии с толщиной стен 65 см</div>
                </div>
                <div className="advantage">
                    <img src={advantagePic3} />
                    <div className="advantage__title">Свобода действий</div>
                    <div className="advantage__text">Возможна перепланировка, объединение нескольких квартир, ремонт «под ключ»</div>
                </div>
                <div className="advantage">
                    <img src={advantagePic4} />
                    <div className="advantage__title">Всё рядом</div>
                    <div className="advantage__text">Несколько школ и детсадов, магазины и поликлиники в 5-минутной автомобильной доступности</div>
                </div>
                <div className="advantage">
                    <img src={advantagePic5} />
                    <div className="advantage__title">Благоустройство</div>
                    <div className="advantage__text">Небольшие парки и скверы, площадки для спорта и отдыха, ландшафтный дизайн, геопластика</div>
                </div>
            </div>
        </Container>
    </div>
);

export default Advantages;