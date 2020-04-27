import Index from '../../../../src/components/pages/Route/index';
import { Typography, Container } from "@material-ui/core";
import CategoryList from "../../../../src/components/pages/CategoryList";
import Title from "../../../../src/components/form/Title";
import Map from "../../../../src/components/Map";
import Table from "../../../../src/components/table";
import { unwrap } from "@material-ui/core/test-utils";

const ComponentNaked = unwrap(Index);

function createTestProps(props) {
  return {
      route: {
        id: 1,
        title: 'Test route',
        locations: ['Test location'],
        categories: ['Test category'],
        description: "Test description",
      },
      classes: {},
      schema: [],
      locations: [],
      match: { params: {}},
      ...props,
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<ComponentNaked {...props} /> );
});

describe('<Index /> rendering', () => {
  it('should render 1 <Container />', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should render 1 <Title />', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('should render 1 <Map />', () => {
    expect(wrapper.find(Map)).toHaveLength(1);
  });

  it('should render 1 <Typography />', () => {
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should render 1 <Table />', () => {
    expect(wrapper.find(Table)).toHaveLength(1);
  });
});

describe('<RouteFormButton /> interactions', () => {
  var mockedDeleteRoute;

  beforeEach(() => {
    mockedDeleteRoute = jest.fn();

    props = createTestProps({
      deleteRoute: mockedDeleteRoute,
      match: { params: {}},
      history: ['/locations/'],
    });
    wrapper = shallow(<ComponentNaked {...props} /> );
  });

  describe('Index.onLocationClick', () => {
    it('should add location to history when location in <Table /> is clicked', () => {
      expect(props.history).not.toContain('/location/1/');

      wrapper.find(Table).first().props().onClick(1);

      expect(props.history[props.history.length-1]).toEqual('/location/1/');
    });
  });

  describe('Index.onRemove', () => {
    it('should change history when onRemove for <Title /> is clicked and call deleteRoute function from props', () => {
      expect(props.history).not.toContain('/');

      wrapper.find(Title).first().props().onRemove();

      expect(mockedDeleteRoute).toHaveBeenCalledTimes(1);
      expect(props.history[props.history.length-1]).toEqual('/');
    });
  });

  describe('Index.onEdit', () => {
    it('should change history when onRemove for <Title /> is clicked and call deleteRoute function from props', () => {
      expect(props.history).not.toContain('/route/edit/1');

      wrapper.find(Title).first().props().onEdit();

      expect(props.history[props.history.length-1]).toEqual('/route/edit/1');
    });
  });
});

describe('<Index /> lifecycle method invocations', () => {
  var mockedLoadRoute;

  beforeEach(() => {
    mockedLoadRoute = jest.fn();

    props = createTestProps({
      loadRoute: mockedLoadRoute,
      match: { params: { id: 1 }},
    });
    wrapper = shallow(<ComponentNaked {...props} /> );
  });

  it('should call loadRoute function when componentDidMount method is invoked and id is present', () => {
    expect(mockedLoadRoute).toHaveBeenCalledTimes(1);
  });
});
