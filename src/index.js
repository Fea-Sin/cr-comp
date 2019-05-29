import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider, create } from 'mini-store'
import { noop } from './util';

class TestOne extends PureComponent {
  static propTypes = {
    mode: PropTypes.oneOf(['A', 'B', 'C']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    mode: 'A',
    onClick: noop,
    className: '',
    style: {},
  }

  constructor(props) {
    super(props)
    this.store = create({
      // selectKeys,
      // activeKey,
    })
  }
  
  componentDidMount() {
    console.log('comta-testone-didmount')
  }

  componentDidUpdate() {
    console.log('comta-testone-didupdatemount')
  }

  render() {
    let {...props} = this.props
    return (
      <Provider store={this.store}>
        <div {...props} ref={node => this.comtaTestone = node}>
          <span>comta testone</span>
        </div>
      </Provider>
    )
  }
}

export default TestOne