import { shallow } from 'enzyme';
import App from './App';
import Chop from './chop';
import renderer from 'react-test-renderer';


const MockDataset = {
  bread: "baguette",
  cheese: "brie cheese",
};

const myTemplate: string = `I like to eat ${MockDataset.bread} and ${MockDataset.cheese}`;

describe('rendering App', () => {

  it('should render correctly', () => {
    const AppWrapper = shallow(<App />);
    console.log('AppWrapper', AppWrapper);
    expect(AppWrapper).toMatchSnapshot();
  })

  it('should render chop', () => {
    const tree = renderer.create(<Chop data={MockDataset} template={myTemplate} />).toJSON()
    expect(tree).toMatchSnapshot();
    // expect(tree).tobe
    console.log('tree', tree);
  })


  //**! with correct props */
  it('should render chop with chop element', () => {
    const wrapper = shallow(<Chop data={MockDataset} template={myTemplate} />);
    expect(wrapper.contains(<p>{myTemplate}</p>)).toBeTruthy();

  })

  //**! missing one of the props */
  it('should render the error Message', () => {
    const MockEmptyDataset = null
    const wrapper = shallow(<Chop data={MockEmptyDataset} template={myTemplate} />);
    expect(wrapper.contains(<p>template and dataset are mandatory parameters</p>)).toBeTruthy();
  })


});

