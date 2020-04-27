import TextArea from '../../../src/components/form/TextArea';
import TextField from '../../../src/components/form/TextField';
import { FormControlLabel } from "@material-ui/core";

const title = 'MyTitle';

function createTestProps(props) {
  return {
      value: "This is just test text.",
      onInput: jest.fn(),
      title: title,
      ...props,
  };
}

function getChildProps() {
  return wrapper.find(FormControlLabel).props().control.props;
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<TextArea {...props} /> );
});

describe('<TextArea /> rendering', () => {
  it('should render 1 <FormControlLabel />', () => {
    expect(wrapper.find(FormControlLabel)).toHaveLength(1);
  });

  it('should set name of the <TextField /> to provided title', () => {
    expect(getChildProps().name).toEqual(title);
  });

  it('should set label of the <TextField /> to provided title', () => {
    expect(getChildProps().label).toEqual(title);
  });

  describe('when without title', () => {
    beforeEach(() => {
      props = createTestProps({title: null});
      wrapper = shallow(<TextArea {...props} /> );
    });

    it('should set name of the <TextField /> to default name', () => {
      expect(getChildProps().name).toEqual('description');
    });

    it('should set label of the <TextField /> to default label', () => {
      expect(getChildProps().label).toEqual('Описание');
    });
  })
});
