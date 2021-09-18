import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import detailData from '../fixtures/detail.json';
import LastAirbenderDetailsContainer from './LastAirbenderDetailsContainer';


const server = setupServer(
  rest.get(`https://last-airbender-api.herokuapp.com/api/v1/characters/:id`, (req, res, ctx) => {
    return res(ctx.json(detailData));
  })
);

describe('LastAirbenderDetails', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display a single character', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/5cf5679a915ecad153ab68c9']}>
        <LastAirbenderDetailsContainer />
      </MemoryRouter>
    );

    screen.getByAltText("loading spinner");

    await screen.findByText('Aang', { exact: false });
    expect(container).toMatchSnapshot();
  });
});