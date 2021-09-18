import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listData from '../fixtures/list.json';
import LastAirbenderContainer from './LastAirbenderContainer';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('LastAirbender Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters on the page', async () => {
    const { container } = render(
      <MemoryRouter>
        <LastAirbenderContainer />
      </MemoryRouter>
    );

    screen.getByAltText("loading spinner");

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});