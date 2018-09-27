import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>
    <div className="container">
        <h1 className="header-1">Страница не найдена</h1>
        <p>Неправильно набран адрес или такой страницы на сайте больше не существует</p>
        <p>Вернитесь на <Link  to='/'>главную страницу</Link>.</p>
    </div>

export default NotFound;