import { NextRouter } from "next/router";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
	return {
		query: {},
		isFallback: false,
		back: jest.fn(),
		beforePopState: jest.fn(),
		pathname: [],
		...router
	}
}