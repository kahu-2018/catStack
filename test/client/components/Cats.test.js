import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../../client/components/App'
import '../setup-dom'
import store from '../../../client/store'
import {Provider} from 'react-redux'

App.prototype.componentDidMount = () => {}

test('Hello Cats renders on App', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(wrapper.find('h1').text()).toBe('Hello Cats')
})
