import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../App';
import PlayerCard from './PlayerCard';

test('PlayerCard renders to the DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayerCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});