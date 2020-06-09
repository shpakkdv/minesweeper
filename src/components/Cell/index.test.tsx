import React from 'react'
import { shallow } from 'enzyme'

import Cell from './index';

describe('Cell', () => {
  it('Render a closed cell with a mine', () => {
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={-1}
        mines={[[true]]}
        setMine={jest.fn()}
        openItem={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Render a closed cell without a mine', () => {
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={-1}
        mines={[[false]]}
        setMine={jest.fn()}
        openItem={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Render an opened cell', () => {
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={3}
        mines={[[false]]}
        setMine={jest.fn()}
        openItem={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Clicking on a closed cell without a mine should open it', () => {
    const openItem = jest.fn();
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={-1}
        mines={[[false]]}
        setMine={jest.fn()}
        openItem={openItem}
      />
    );
    const button = wrapper.find('button');
    button.simulate('click');

    expect(button.text()).toBe('');
    expect(button.length).toBe(1);
    expect(openItem).toBeCalledTimes(1);
  });

  it('Clicking on closed cell with a mine should not open it', () => {
    const openItem = jest.fn();
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={-1}
        mines={[[true]]}
        setMine={jest.fn()}
        openItem={openItem}
      />
    );
    const button = wrapper.find('button');
    button.simulate('click');

    expect(button.text()).toBe('!');
    expect(button.length).toBe(1);
    expect(openItem).toBeCalledTimes(0);
  });

  it('Invoking a context menu should set a mine', () => {
    const setMine = jest.fn();
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={-1}
        mines={[[false]]}
        setMine={setMine}
        openItem={jest.fn()}
      />
    );
    const button = wrapper.find('button');
    button.simulate('contextmenu', { preventDefault: jest.fn() });

    expect(button.length).toBe(1);
    expect(button.text()).toBe('');
    expect(setMine).toBeCalledTimes(1);
  });

  it('An opened cell should not contain a button', () => {
    const wrapper = shallow(
      <Cell
        x={0}
        y={0}
        value={1}
        mines={[[false]]}
        setMine={jest.fn()}
        openItem={jest.fn()}
      />
    );
    const button = wrapper.find('button');

    expect(button.length).toBe(0);
  });
});
