import Title from '../../../src/components/form/Title';
import { Typography, Button, Container } from '@material-ui/core';

function createTestProps(props) {
  return {
    title: 'MyTitle',
    onEdit: jest.fn(),
    onRemove: jest.fn(),
    classes: {},
    ...props,
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<Title {...props} /> );
});

describe('<Title /> rendering', () => {
  it('should render 1 <TextField />', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should render 1 <Typography />', () => {
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should render 2 <Button />', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});

describe('<RouteFormButton /> interactions', () => {
  var mockedHandleClickOnEdit, mockedHandleClickOnRemove;

  beforeEach(() => {
    mockedHandleClickOnEdit = jest.fn();
    mockedHandleClickOnRemove = jest.fn();

    props = createTestProps({
      onEdit: mockedHandleClickOnEdit,
      onRemove: mockedHandleClickOnRemove
    });
    wrapper = shallow(<Title {...props} /> );
  });

  it("should call onEdit function when 'Edit' button is clicked", () => {
    wrapper.find(Button).first().props().onClick();
    expect(mockedHandleClickOnEdit).toHaveBeenCalledTimes(1);
  });

  it("should call onRemove function when 'Remove' button is clicked", () => {
    wrapper.find(Button).last().props().onClick();
    expect(mockedHandleClickOnRemove).toHaveBeenCalledTimes(1);
  });
});
