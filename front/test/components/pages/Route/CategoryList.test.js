import CategoryList from '../../../../src/components/pages/Route/CategoryList';
import { Icon } from '@material-ui/core';

function createTestProps(props) {
  return {
      list: ['Add', 'Check' ],
      ...props,
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<CategoryList {...props} /> );
});

describe('<CheckboxList /> rendering', () => {
  it('should render 2 <Icon />', () => {
    expect(wrapper.find(Icon)).toHaveLength(2);
  });
});
