/**
 * @jest-environment jsdom 
 */

 import "@testing-library/jest-dom";
 import ReactDOM from 'react-dom'
 import { render, screen, waitFor, fireEvent } from "@testing-library/react";
 
 import { act } from 'react-dom/test-utils';
 import userEvent from '@testing-library/user-event';
 import HomePage from "./index";
 import { AppProvider } from "../../components/Provider";
 
const mockQuery = jest.fn();

jest.mock('../../utils/client', () => ({
	query: (args) => mockQuery(args),
}));

 const mock = [
	{
		id: '1',
		name: 'Earth (C-137)',
		residents: [
			{
				id: '38',
				name: 'Test',
				status: 'Alive',
				gender: 'Human',
				image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
				location: {
					name: 'Earth (C-137)',
				},
				origin: {
					name: 'Earth (C-137)',
				},
			},
		],
		dimension: 'Dimension C-137',
		type: 'Planet',
	},
];
 
 const mockFetch = {
	 locations: {
		 results: [
			{
				id: '45',
				name: 'Earth (C-137)',
				residents: [
					{
						id: '71',
						name: 'Test 2',
						status: 'Alive',
						gender: 'Human',
						image: 'https://rickandmortyapi.com/api/character/avatar/71.jpeg',
						location: {
							name: 'Earth (C-137)',
						},
						origin: {
							name: 'Earth (C-137)',
						},
					},
				],
				dimension: 'Dimension C-137',
        type: 'Planet',
			},
		],
	},
};
 
 global.fetch = jest.fn(() =>
	 Promise.resolve({
		 json: () => Promise.resolve({data: mockFetch }),
	 })
 );
 
 const renderComponent = () => render(
	 <AppProvider>
		 <HomePage initialLocations={mock}  />
	 </AppProvider>
 );
 
describe("HomePage", () => {
	describe('Render', () => {
		test("should render the page with carousel Filter your location", () => {
			mockQuery.mockResolvedValue({ data: mock });
			renderComponent();

			expect(screen.getByText('Filter your location')).toBeInTheDocument();
			expect(screen.getByText('Locations:')).toBeInTheDocument();
		});
	});
	 
	describe('Fetching data', () => {
		test("should render Dimension when hover on Earth (C-137) and render Resident after hovering over Test", async () => {
			renderComponent()
	 
			fireEvent.mouseOver(screen.getByText('Earth (C-137)'));

			await waitFor(async () => {
				expect(screen.getByText('Test')).toBeInTheDocument();
			})

			fireEvent.mouseOver(screen.getByText('Test'));

			await waitFor(async () => {
				expect(screen.getByText('Alive')).toBeInTheDocument();
			});
		});

		test("should show Layout View", async () => {
			renderComponent()
	 
			fireEvent.click(screen.getByAltText('layer view button'));
 
			await waitFor(async () => {
				expect(screen.getByText('Earth (C-137)')).toBeInTheDocument();
			});

			fireEvent.click(screen.getByText('Earth (C-137)'));

			await waitFor(async () => {
				expect(screen.getByText('Name: Test')).toBeInTheDocument();
				expect(screen.getByText('Status: Alive')).toBeInTheDocument();
			});
		});
	});
});