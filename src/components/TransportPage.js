import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Advantages from '../components/common/Advantages';
import DocumentMeta from 'react-document-meta';

export default class TransportPage extends React.Component {
    constructor(props) {
        super(props);

        this.printPage = this.printPage.bind(this);
    }

    printPage() {
        window.print();
    }

    render() {
        const meta = {
            title: 'Общественный транспорт',
            description: 'ЖК Малахит Общественный транспорт'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1">Расписание автобуса №105</div>
                    <Row>
                        <Col lg="8" md="12" sm="12" xs="12">
                            <div className="transport-table__wrap">
                                <table className="transport-table">
                                    <thead>
                                    <tr>
                                        <th colSpan="2">м. Заельцовская</th>
                                        <th colSpan="2">ост. «Стадион» (ЖК «Малахит»)</th>
                                    </tr>
                                    <tr>
                                        <td>Прибытие</td>
                                        <td>Отправление</td>
                                        <td>Прибытие</td>
                                        <td>Отправление</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>-</td>
                                        <td>6:10</td>
                                        <td>7:01</td>
                                        <td>7:02</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>6:55</td>
                                        <td>7:46</td>
                                        <td>7:47</td>
                                    </tr>
                                    <tr>
                                        <td>7:35</td>
                                        <td>7:40</td>
                                        <td>8:31</td>
                                        <td>8:32</td>
                                    </tr>
                                    <tr>
                                        <td>8:20</td>
                                        <td>8:25</td>
                                        <td>9:16</td>
                                        <td>9:17</td>
                                    </tr>
                                    <tr>
                                        <td>9:50</td>
                                        <td>9:55</td>
                                        <td>10:46</td>
                                        <td>10:47</td>
                                    </tr>
                                    <tr>
                                        <td>9:05</td>
                                        <td>10:20</td>
                                        <td>11:11</td>
                                        <td>11:12</td>
                                    </tr>
                                    <tr>
                                        <td>11:45</td>
                                        <td>11:50</td>
                                        <td>12:41</td>
                                        <td>12:42</td>
                                    </tr>
                                    <tr>
                                        <td>13:15</td>
                                        <td>13:20</td>
                                        <td>14:11</td>
                                        <td>14:12</td>
                                    </tr>
                                    <tr>
                                        <td>11:20 (обед)</td>
                                        <td>14:10</td>
                                        <td>15:01</td>
                                        <td>15:02</td>
                                    </tr>
                                    <tr>
                                        <td>15:35</td>
                                        <td>15:40</td>
                                        <td>16:31</td>
                                        <td>16:32</td>
                                    </tr>
                                    <tr>
                                        <td>14:45 (обед)</td>
                                        <td>16:25</td>
                                        <td>17:16</td>
                                        <td>17:17</td>
                                    </tr>
                                    <tr>
                                        <td>17:05</td>
                                        <td>17:10</td>
                                        <td>18:01</td>
                                        <td>18:02</td>
                                    </tr>
                                    <tr>
                                        <td>17:50</td>
                                        <td>17:55</td>
                                        <td>18:46</td>
                                        <td>18:47</td>
                                    </tr>
                                    <tr>
                                        <td>18:35</td>
                                        <td>18:40</td>
                                        <td>19:31</td>
                                        <td>19:32</td>
                                    </tr>
                                    <tr>
                                        <td>19:20</td>
                                        <td>20:10</td>
                                        <td>21:01</td>
                                        <td>21:02</td>
                                    </tr>
                                    <tr>
                                        <td>21:35</td>
                                        <td>21:40</td>
                                        <td>22:31</td>
                                        <td>22:32</td>
                                    </tr>
                                    <tr>
                                        <td>23:05</td>
                                        <td>(в парк)</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col lg="4" md="12" sm="12" xs="12">
                            <div className="button button_print" onClick={this.printPage}><span>Распечатать</span></div>
                        </Col>
                    </Row>
                </Container>

                <Advantages/>
            </div>
        );
    }
}