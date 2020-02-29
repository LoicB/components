import * as React from 'react'
import { mount } from 'enzyme'
import { Toaster, Toast } from '../src'

jest.useFakeTimers()

describe('Toaster', () => {
  it('Toast notification renders itself without crashing', () => {
    const toasterWrapper = mount(<Toaster autoClose={3000} hideProgressBar draggable />)
    const toastifyWrapper = toasterWrapper.find('.Toastify')
    expect(toastifyWrapper).toBeTruthy()
  })

  it('correctly renders a info notification', () => {
    const App = () => (
      <div>
        <Toaster />
      </div>
    )

    const wrapper = mount(<App />)
    Toast('info', 'message')
    jest.runAllTimers()
    expect(wrapper).toMatchSnapshot()
  })
})