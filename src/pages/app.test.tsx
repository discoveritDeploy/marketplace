import React from 'react';
import {render, screen} from '@testing-library/react';
import { 
	mainCarouselData, 
	flashDealsData,
	serviceList,
	usersReviews,
} from '@client/fake-db/server/superstore-shop/super-store-data';
import { Props } from './index'
import Home from './index';
import { createMockRouter } from '../__mocks__/mockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

const data: Props = {
	mainCarouselData: mainCarouselData, 
	flashDealsData: flashDealsData,
	serviceList: serviceList,
	reviewList: usersReviews,
}


test('it works', async () => {
	const slogan = 'Cambiando la forma de comprar y vender inventario en Latinoamérica'
	const {container} = render(
		<RouterContext.Provider value={createMockRouter({})}>
			<Home {...data}/>
		</RouterContext.Provider>
	)

	const categories = screen.getByText(slogan)
	expect(categories).toBeInTheDocument()
	expect(container).toMatchInlineSnapshot(`
	<AppLayout>
		<Section1 carouselData={mainCarouselData} />
		<Section12 serviceList={serviceList} />
		<Section14 flashDeals={flashDealsData} />
		<Section15 usersReview={reviewList} />
		<Section16 />
	</AppLayout>
	`)
})
