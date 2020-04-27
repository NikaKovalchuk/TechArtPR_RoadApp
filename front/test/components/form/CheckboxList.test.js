import CheckboxList from '../../../src/components/form/CheckboxList';
import { FormControlLabel, Checkbox } from "@material-ui/core";

function createTestProps(props) {
  return {
      items: [
        {id: 1, title: 'first'},
        {id: 2, title: 'second'}
      ],
      onChange: jest.fn(),
      checked: [2],
      ...props,
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<CheckboxList {...props} /> );
});


describe('<CheckboxList /> rendering', () => {  
  it('should render 2 <FormControlLabel />', () => {
    expect(wrapper.find(FormControlLabel)).toHaveLength(2);
  });

  it('should render first <Checkbox /> non checked', () => {
    expect(wrapper.find(FormControlLabel).at(0).props().control.props.checked).toBeFalsy;
  });

  it('should render second <Checkbox /> checked', () => {
    expect(wrapper.find(FormControlLabel).at(1).props().control.props.checked).toBeTruthly;
  });
});
