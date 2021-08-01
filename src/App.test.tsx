import { shallow } from 'enzyme';
import App from './App';
import Chop from './chop';


const mockDataset = {
  bread: "baguette",
  cheese: "brie cheese",
};

const mockMyTemplate = `I like to eat ${mockDataset.bread} and ${mockDataset.cheese}`;

describe('rendering Components', () => {

  it('should render App correctly', () => {
    const appShallow = shallow(<App />);
    expect(appShallow).toBeDefined();
    expect(appShallow).toMatchSnapshot();
  })

  it('should render Chop correctly', () => {
    const chopShallow = shallow(<Chop data={mockDataset} template={mockMyTemplate} />)
    expect(chopShallow).toBeDefined();
    expect(chopShallow).toMatchSnapshot();
  })

  //**! with correct props */
  it('should render chop with chop element', () => {
    const chopShallow = shallow(<Chop data={mockDataset} template={mockMyTemplate} />);
    expect(chopShallow.html()).toBe("<div style=\"color:green\"><p>I like to eat baguette and brie cheese</p></div>")
  })

  //**! missing one of the props */
  it('should render the error Message', () => {
    const mockEmptyDataset = null
    const chopShallow = shallow(<Chop data={mockEmptyDataset} template={mockMyTemplate} />);
    // expect(chopShallow.contains().toBeTruthy();
    expect(chopShallow.html()).toBe("<div style=\"color:red\"><p>template and dataset are mandatory parameters</p></div>")

  })

});





