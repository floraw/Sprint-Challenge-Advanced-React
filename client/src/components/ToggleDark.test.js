import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../App';
import ToggleDark from './ToggleDark';

test('ToggleDark renders to the DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToggleDark />, div);
    ReactDOM.unmountComponentAtNode(div);
});