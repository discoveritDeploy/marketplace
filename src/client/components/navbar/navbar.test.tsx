import React from 'react'
import {render, screen} from '@testing-library/react';
import navbarNavigations from "client/data/navbarNavigations";
import Navbar from './Navbar'

describe('navbar test', () => {
	test('hay cinco links en el navbar', () => {
		render(<Navbar />)

		const links = screen.getAllByTestId('navbar-link')
		expect(links).toHaveLength(4)
	});
})