import React from 'react'
import { shallow } from 'enzyme'

import Controls from './index';

describe('Controls', () => {
  it('Render controls', () => {
    const wrapper = shallow(
      <Controls
        appStatus={null}
        cellSize={40}
        gameLevel={null}
        renderWhileSolving={false}
        minesFound={1}
        setCellSize={jest.fn()}
        setRenderWhileSolvingValue={jest.fn()}
        finishGame={jest.fn()}
        solveUntilWin={jest.fn()}
        startOver={jest.fn()}
        tryToSolveAutomatically={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('All controls should be disabled before game start', () => {
    const wrapper = shallow(
      <Controls
        appStatus={null}
        cellSize={40}
        gameLevel={null}
        renderWhileSolving={false}
        minesFound={1}
        setCellSize={jest.fn()}
        setRenderWhileSolvingValue={jest.fn()}
        finishGame={jest.fn()}
        solveUntilWin={jest.fn()}
        startOver={jest.fn()}
        tryToSolveAutomatically={jest.fn()}
      />
    );

    const buttons = wrapper.find('button');
    const inputs = wrapper.find('input');

    expect(buttons.length).toBe(4);
    expect(buttons.everyWhere(button => button.props().disabled)).toBe(true);
    expect(inputs.length).toBe(2);
    expect(inputs.everyWhere(input => input.props().disabled)).toBe(true);
  });
});
