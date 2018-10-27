// http://fb.me/react-polyfills
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'raf/polyfill'

configure({ adapter: new Adapter() })
