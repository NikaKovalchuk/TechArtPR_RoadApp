import RouteFormButton from '../../../src/components/form/RouteFormButton';
import Button from "@material-ui/core/Button";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { unwrap } from "@material-ui/core/test-utils";

const ComponentNaked = unwrap(RouteFormButton);

function createTestProps(props) {
  return {
      locations: [],
      data: [],
      history: '',
      classes: {},
      isValid: true,
      ...props,
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<ComponentNaked {...props} /> );
});

describe('<RouteFormButton /> rendering', () => {
  it('should render 1 <Button />', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});

describe('<RouteFormButton /> interactions', () => {
  var mockedHandleClickAddRoute, mockedHandleClickUpdateRoute;

  describe('when with id', () => {
    beforeEach(() => {
      mockedHandleClickAddRoute = jest.fn();
      mockedHandleClickUpdateRoute = jest.fn();

      props = createTestProps({
        id: 1,
        addRoute: mockedHandleClickAddRoute,
        updateRoute: mockedHandleClickUpdateRoute
      });
      wrapper = shallow(<ComponentNaked {...props} /> );
    });

    it('should call updateRoute function when button is clicked', () => {
      wrapper.find(Button).first().props().onClick();
      expect(mockedHandleClickUpdateRoute).toHaveBeenCalledTimes(1);
    });

    it('should not call addRoute function when button is clicked', () => {
      wrapper.find(Button).first().props().onClick();
      expect(mockedHandleClickAddRoute).toHaveBeenCalledTimes(0);
    });
  });

  describe('when without id', () => {
    beforeEach(() => {
      mockedHandleClickAddRoute = jest.fn();
      mockedHandleClickUpdateRoute = jest.fn();

      props = createTestProps({
        addRoute: mockedHandleClickAddRoute,
        updateRoute: mockedHandleClickUpdateRoute
      });
      wrapper = shallow(<ComponentNaked {...props} /> );
    });

    it('should call addRoute function when button is clicked', () => {
      wrapper.find(Button).first().props().onClick();
      expect(mockedHandleClickAddRoute).toHaveBeenCalledTimes(1);
    });

    it('should not call updateRoute function when button is clicked', () => {
      wrapper.find(Button).first().props().onClick();
      expect(mockedHandleClickUpdateRoute).toHaveBeenCalledTimes(0);
    });
  });
});
