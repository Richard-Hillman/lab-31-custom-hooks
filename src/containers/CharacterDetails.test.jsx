/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockData2 from '../data/MockData2.json';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

const server = setupServer(
  rest.get('https://xfiles-api.herokuapp.com/api/v1/characters/Absalom', (req, res, ctx) => {
    return res(ctx.json(MockData2));
  })
);

describe('Character container with Mock Data and mock server interceptor', () => {
  // starts and ends mock server for tests 
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  // ------------------------------------------------------------

  it('displays a character', async() => {
    render(
      // mock router to check and see if we are rendering characterslist
      <MemoryRouter>
        <CharacterDetails  match={{ params: { name: 'Absalom' } }} />
      </MemoryRouter>
    );

    // ------------------------------------------------------------

    // determines if a list is showing up after loading screen finishes
    const char = await screen.findByTestId('character');
        
    return waitFor(() => {
      expect(char).not.toBeEmptyDOMElement();
    });
  });
});

