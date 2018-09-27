import React from 'react';
import { Container, Nav, NavItem} from 'reactstrap';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Advantages from '../../components/common/Advantages';
import AboutComplexPage from '../../components/about/AboutComplexPage';
import AboutCompanyPage from '../../components/about/AboutCompanyPage';
import AboutTownhousesPage from '../../components/about/AboutTownhousesPage';

const AboutPage = () => (
    <div>
        <Container>
            <Nav tabs className="about-tabs">
                <NavItem>
                    <NavLink className="nav-link" to={'/about/complex'}>
                        О комплексе
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to={'/about/company'}>
                        Застройщик
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to={'/about/townhouses'}>
                        Таунхаусы и земельные участки
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>

        <Switch>
            <Route path={'/about/complex'} component={AboutComplexPage} />
            <Route path={'/about/company'} component={AboutCompanyPage} />
            <Route path={'/about/townhouses'} component={AboutTownhousesPage} />
            <Redirect exact from="/about" to="/about/complex"/>
        </Switch>

        <Advantages/>
    </div>
);

export default AboutPage;