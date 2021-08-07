import React from 'react';
import { shallow } from 'enzyme';

import { AppStatus, GameLevel } from 'constant';
import GameField from './index';

describe('GameField', () => {
  it('Render game levels if the level is not chosen', () => {
    const wrapper = shallow(
      <GameField
        field={[[]]}
        gameLevel={null}
        appStatus={null}
        cellSize={40}
        startGame={jest.fn()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').length).toBeGreaterThan(1);
  });

  it('Render loading', () => {
    const wrapper = shallow(
      <GameField
        field={[[]]}
        gameLevel={GameLevel.LEVEL_1}
        appStatus={AppStatus.LOADING}
        cellSize={40}
        startGame={jest.fn()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('Loading...');
  });

  it('Render the game', () => {
    const wrapper = shallow(
      <GameField
        field={[[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]}
        gameLevel={GameLevel.LEVEL_1}
        appStatus={null}
        cellSize={40}
        startGame={jest.fn()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Row').length).toBe(3);
  });
});
