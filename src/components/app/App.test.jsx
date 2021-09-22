import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArtistSearch from '../../containers/ArtistSearch';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import test from '../../fixtures/test.json';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
    return res(ctx.json(test));
  })
);

describe('AristSearch Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should display a list of artists matching a search term', async () => {
    const { container } = render(
      <MemoryRouter>
        <ArtistSearch />
      </MemoryRouter>
    );

    const searchBar = await screen.findByRole('textbox', { name: 'searchBar' });
    userEvent.type(searchBar, '{selectall}{del}beatles');

    return waitFor(() => {
      const list = screen.getAllByText('beatles', { exact: false });

      expect(list.length).toBeGreaterThan(2);
      expect(container).toMatchSnapshot();
    });
  });
});
