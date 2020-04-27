import Field from '../../../src/components/form/TextField';
import { TextField, Container, Typography } from '@material-ui/core';

function createTestProps(props) {
  return {
    label: 'Test label',
    helpText: helpText,
    classes: {},
    value: text,
    onInput: jest.fn(),
    title: 'MyTitle',
    ...props,
  };
}

const text = "This is just test text.";
const helpText = "Jut simple help text.";
let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<Field {...props} /> );
});

describe('<Field /> rendering', () => {
  it('should render 1 <TextField />', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });
  it('should render 1 <TextField />', () => {
    expect(wrapper.find(TextField)).toHaveLength(1);
  });

  it('should display provided text', () => {
    expect(wrapper.find(TextField).props().value).toEqual(text);
  });

  it('should display provided hepler text', () => {
    expect(wrapper.find(Typography).text()).toEqual(helpText);
  });
});
