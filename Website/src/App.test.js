import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Enzyme from 'enzyme'
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import PostForm from './components/PostForm';
import { Home } from './Home';
import { About } from './About';
import Contact from './Contact';
import LiveChat from './LiveChat'
import { NoMatch } from './NoMatch';
import FOne from './FOne'
import FTwo from './FTwo'
import FThree from './FThree'
import FFour from './FFour'
import FOneA from './FOneA'
import FOneB from './FOneB'
import FOneC from './FOneC'
import FTwoA from './FTwoA'
import FTwoB from './FTwoB'
import FThreeA from './FThreeA'
import FThreeB from './FThreeB'
import FFourA from './FFourA'
import FFourB from './FFourB'
import { shallow } from 'enzyme';
import PopOutChat from './PopOutChat';

Enzyme.configure({ adapter: new Adapter() });

describe('routes using memory router', () => {
  it('show Home for / router', () => {
    const component = mount(<MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  })

  it('show About for /about router', () => {
    const component = mount(<MemoryRouter initialEntries={['/about']}>
      <About />
    </MemoryRouter>
    );
    expect(component.find(About)).toHaveLength(1);
  })

  it('show Contact for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries={['/contact']}>
      <Contact />
    </MemoryRouter>
    );
    expect(component.find(Contact)).toHaveLength(1);
  })

  it('show LiveChat for /contact/livechat router', () => {
    const component = mount(<MemoryRouter initialEntries={['/contact/livechat']}>
      <LiveChat />
    </MemoryRouter>
    );
    expect(component.find(LiveChat)).toHaveLength(1);
  })

  it('show FOne for filterone router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterone']}>
      <FOne />
    </MemoryRouter>
    );
    expect(component.find(FOne)).toHaveLength(1);
  })

  it('show FOneA for filerone a router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterone/a']}>
      <FOneA />
    </MemoryRouter>
    );
    expect(component.find(FOneA)).toHaveLength(1);
  })

  it('show FOneB for filerone b router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterone/b']}>
      <FOneB />
    </MemoryRouter>
    );
    expect(component.find(FOneB)).toHaveLength(1);
  })

  it('show FOneC for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterone/c']}>
      <FOneC />
    </MemoryRouter>
    );
    expect(component.find(FOneC)).toHaveLength(1);
  })

  it('show FTwo for filerone c router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filtertwo']}>
      <FTwo />
    </MemoryRouter>
    );
    expect(component.find(FTwo)).toHaveLength(1);
  })

  it('show FTwoA for filtertwo a router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filtertwo/a']}>
      <FTwoA />
    </MemoryRouter>
    );
    expect(component.find(FTwoA)).toHaveLength(1);
  })

  it('show FTwoB for filtertwo b router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filtertwo/b']}>
      <FTwoB />
    </MemoryRouter>
    );
    expect(component.find(FTwoB)).toHaveLength(1);
  })

  it('show FThree for filterthree router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterthree']}>
      <FThree />
    </MemoryRouter>
    );
    expect(component.find(FThree)).toHaveLength(1);
  })

  it('show FThreeA for filterthree a router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterthree/a']}>
      <FThreeA />
    </MemoryRouter>
    );
    expect(component.find(FThreeA)).toHaveLength(1);
  })

  it('show FThreeB for filterthree b router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterthree/b']}>
      <FThreeB />
    </MemoryRouter>
    );
    expect(component.find(FThreeB)).toHaveLength(1);
  })

  it('show FFour for filterfour router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterfour']}>
      <FFour />
    </MemoryRouter>
    );
    expect(component.find(FFour)).toHaveLength(1);
  })

  it('show FFourA for filterfour a router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterfour/a']}>
      <FFourA />
    </MemoryRouter>
    );
    expect(component.find(FFourA)).toHaveLength(1);
  })

  it('show FFourB for filterfour b router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/contact/livechat/filterfour/b']}>
      <FFourB />
    </MemoryRouter>
    );
    expect(component.find(FFourB)).toHaveLength(1);
  })

  it('show PopOutChat for popout chat router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/startchat']}>
      <PopOutChat />
    </MemoryRouter>
    );
    expect(component.find(PopOutChat)).toHaveLength(1);
  })

  it('show NoMatch for /unknown router', () => {
    const component = mount(<MemoryRouter initialEntries
      ={['/unknown']}>
      <NoMatch />
    </MemoryRouter>
    );
    expect(component.find(NoMatch)).toHaveLength(1);
  });

  test('postform test', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper).toMatchSnapShot;
  });

  test('app test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapShot;
  });
  

})