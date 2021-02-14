/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockData from '../data/MockData.json';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './CharacterList';

const server = setupServer(
  rest.get('https://xfiles-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(MockData));
  })
);

describe('CharacterList container with Mock Data and mock server interceptor', () => {
  // starts and ends mock server for tests 
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  // ------------------------------------------------------------

  it('displays a list of all x-files characters', async() => {
    render(
      // mock router to check and see if we are rendering characterslist
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    // ------------------------------------------------------------

    // determines if a list is showing up after loading screen finishes
    const theTestList = await screen.findByTestId('charactersTest');
        
    return waitFor(() => {
      expect(theTestList).not.toBeEmptyDOMElement();
    });
  });
});

