import { mount } from 'enzyme'
import React from 'react'

import * as Icons from '../src'

const handleClickSpy = jest.fn()

describe('src/index', () => {
  beforeEach(() => {
    handleClickSpy.mockReset()
  })

  Object.keys(Icons)
    .filter(n => n !== 'default')
    .forEach(componentName => {
      const component = Icons[componentName]
      renderFactory(component)
    })

  function renderFactory(component) {
    it(`should ${component.name ||
      component.displayName} render properly`, () => {
      const wrapper = mount(
        React.createElement(component, { onClick: handleClickSpy })
      )
      expect(wrapper.find('svg').length).toBe(1)
      wrapper.find('svg').simulate('click')
      expect(handleClickSpy.mock.calls.length).toBe(1)
    })
  }
})
