import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Enzyme from 'enzyme'
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

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
import PopOutChat from './PopOutChat'
import { Footer } from './components/Footer'

Enzyme.configure({ adapter: new Adapter() });

describe('routes using memory router', () => {
  it('show Home for / router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/' ]}>
      <Home />
    </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  }) 

  it('show About for /about router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/about' ]}>
      <About />
    </MemoryRouter>
    );
    expect(component.find(About)).toHaveLength(1);
  }) 

  it('show Contact for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/contact' ]}>
      <Contact />
    </MemoryRouter>
    );
    expect(component.find(Contact)).toHaveLength(1);
  }) 

  it('show LiveChat for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/contact/livechat' ]}>
      <LiveChat />
    </MemoryRouter>
    );
    expect(component.find(LiveChat)).toHaveLength(1);
  }) 

  it('show FOne for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterone' ]}>
      <FOne />
    </MemoryRouter>
    );
    expect(component.find(FOne)).toHaveLength(1);
  }) 

  it('show FOneA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterone/a' ]}>
      <FOneA />
    </MemoryRouter>
    );
    expect(component.find(FOneA)).toHaveLength(1);
  })

  it('show FOneB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterone/b' ]}>
      <FOneB />
    </MemoryRouter>
    );
    expect(component.find(FOneB)).toHaveLength(1);
  })

  it('show FOneC for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterone/c' ]}>
      <FOneC />
    </MemoryRouter>
    );
    expect(component.find(FOneC)).toHaveLength(1);
  })

  it('show FTwo for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filtertwo' ]}>
      <FTwo />
    </MemoryRouter>
    );
    expect(component.find(FTwo)).toHaveLength(1);
  })

  it('show FTwoA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filtertwo/a' ]}>
      <FTwoA />
    </MemoryRouter>
    );
    expect(component.find(FTwoA)).toHaveLength(1);
  })

  it('show FTwoB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filtertwo/b' ]}>
      <FTwoB />
    </MemoryRouter>
    );
    expect(component.find(FTwoB)).toHaveLength(1);
  })

  it('show FThree for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterthree' ]}>
      <FThree />
    </MemoryRouter>
    );
    expect(component.find(FThree)).toHaveLength(1);
  })

  it('show FThreeA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterthree/a' ]}>
      <FThreeA />
    </MemoryRouter>
    );
    expect(component.find(FThreeA)).toHaveLength(1);
  })

  it('show FThreeB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterthree/b' ]}>
      <FThreeB />
    </MemoryRouter>
    );
    expect(component.find(FThreeB)).toHaveLength(1);
  })

  it('show FFour for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterfour' ]}>
      <FFour />
    </MemoryRouter>
    );
    expect(component.find(FFour)).toHaveLength(1);
  })

  it('show FFourA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterfour/a' ]}>
      <FFourA />
    </MemoryRouter>
    );
    expect(component.find(FFourA)).toHaveLength(1);
  })

  it('show FFourB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/contact/livechat/filterfour/b' ]}>
      <FFourA />
    </MemoryRouter>
    );
    expect(component.find(FFourA)).toHaveLength(1);
  })

  it('show NoMatch for /unknown router', () => {
    const component = mount(<MemoryRouter initialEntries 
    = {[ '/unknown' ]}>
      <NoMatch />
    </MemoryRouter>
    );
    expect(component.find(NoMatch)).toHaveLength(1);
  })

})