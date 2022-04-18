// Global setup for Jest, will run once per test file
// import { reseedDatabase } from "./seed";
import prisma from "../server/db/prisma";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			pathname: "",
			query: "",
			asPath: "",
		};
	},
}));


// beforeEach(async () => {
// 	await reseedDatabase();
// });

// afterAll(() => {
// 	// Disconnect Prisma from the database after all tests are complete
// 	// to avoid open handles stopping Jest from exiting
// 	prisma.$disconnect();
// });
