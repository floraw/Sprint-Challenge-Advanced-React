import React from 'react';
import ReactDOM from 'react-dom';
import { render, queryByText } from '@testing-library/react';
import App from '../App';
import PlayerList from './PlayerList';

test('PlayerList renders to the DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayerList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('Marta card displays', () => {
    const { querybyText } = render(<PlayerList />);
    queryByText(/marta/i)
});