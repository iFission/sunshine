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
import ChatProcessing from './ChatProcessing'
import ChatConnecting from './ChatConnecting'
import ChatConnected from './ChatConnected'
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
    const component = mount(<MemoryRouter initialEntries = {[ '/livechat' ]}>
      <LiveChat />
    </MemoryRouter>
    );
    expect(component.find(LiveChat)).toHaveLength(1);
  }) 

  it('show FOne for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filterone' ]}>
      <FOne />
    </MemoryRouter>
    );
    expect(component.find(FOne)).toHaveLength(1);
  }) 

  it('show FOneA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filteronea' ]}>
      <FOneA />
    </MemoryRouter>
    );
    expect(component.find(FOneA)).toHaveLength(1);
  })

  it('show FOneB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filteroneb' ]}>
      <FOneB />
    </MemoryRouter>
    );
    expect(component.find(FOneB)).toHaveLength(1);
  })

  it('show FOneC for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filteronec' ]}>
      <FOneC />
    </MemoryRouter>
    );
    expect(component.find(FOneC)).toHaveLength(1);
  })

  it('show FTwo for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filtertwo' ]}>
      <FTwo />
    </MemoryRouter>
    );
    expect(component.find(FTwo)).toHaveLength(1);
  })

  it('show FTwoA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filtertwoa' ]}>
      <FTwoA />
    </MemoryRouter>
    );
    expect(component.find(FTwoA)).toHaveLength(1);
  })

  it('show FTwoB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filtertwob' ]}>
      <FTwoB />
    </MemoryRouter>
    );
    expect(component.find(FTwoB)).toHaveLength(1);
  })

  it('show FThree for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filtertwo' ]}>
      <FThree />
    </MemoryRouter>
    );
    expect(component.find(FThree)).toHaveLength(1);
  })

  it('show FThreeA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filterthreea' ]}>
      <FThreeA />
    </MemoryRouter>
    );
    expect(component.find(FThreeA)).toHaveLength(1);
  })

  it('show FThreeB for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filterthreeb' ]}>
      <FThreeB />
    </MemoryRouter>
    );
    expect(component.find(FThreeB)).toHaveLength(1);
  })

  it('show FFour for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filterfour' ]}>
      <FFour />
    </MemoryRouter>
    );
    expect(component.find(FFour)).toHaveLength(1);
  })

  it('show FFourA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filterfoura' ]}>
      <FFourA />
    </MemoryRouter>
    );
    expect(component.find(FFourA)).toHaveLength(1);
  })

  it('show FFourA for /contact router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/filterfourb' ]}>
      <FFourA />
    </MemoryRouter>
    );
    expect(component.find(FFourA)).toHaveLength(1);
  })

  it('show NoMatch for /unknown router', () => {
    const component = mount(<MemoryRouter initialEntries = {[ '/unknown' ]}>
      <NoMatch />
    </MemoryRouter>
    );
    expect(component.find(NoMatch)).toHaveLength(1);
  })

})






// })
// test('valid path no redirect to 404', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={[ '/' ]}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(wrapper.find(Home)).toHaveLength(1);
//   expect(wrapper.find(About)).toHaveLength(2);
//   expect(wrapper.find(Contact)).toHaveLength(3);
//   expect(wrapper.find(LiveChat)).toHaveLength(4);
//   expect(wrapper.find(FOne)).toHaveLength(5);
//   expect(wrapper.find(FOneA)).toHaveLength(6);
//   expect(wrapper.find(FOneB)).toHaveLength(7);
//   expect(wrapper.find(FOneC)).toHaveLength(8);
//   expect(wrapper.find(FTwo)).toHaveLength(9);
//   expect(wrapper.find(FTwoA)).toHaveLength(10);
//   expect(wrapper.find(FTwoB)).toHaveLength(11);
//   expect(wrapper.find(FThree)).toHaveLength(12);
//   expect(wrapper.find(FThreeA)).toHaveLength(13);
//   expect(wrapper.find(FThreeB)).toHaveLength(14);
//   expect(wrapper.find(FFour)).toHaveLength(15);
//   expect(wrapper.find(FFourA)).toHaveLength(16);
//   expect(wrapper.find(FFourB)).toHaveLength(17);
//   expect(wrapper.find(NoMatch)).toHaveLength(0);
// })

// test('invalid path redirect to 404', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={[ '/random' ]}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(wrapper.find(Home)).toHaveLength(0);
//   expect(wrapper.find(About)).toHaveLength(0);
//   expect(wrapper.find(Contact)).toHaveLength(0);
//   expect(wrapper.find(LiveChat)).toHaveLength(0);
//   expect(wrapper.find(FOne)).toHaveLength(0);
//   expect(wrapper.find(FOneA)).toHaveLength(0);
//   expect(wrapper.find(FOneB)).toHaveLength(0);
//   expect(wrapper.find(FOneC)).toHaveLength(0);
//   expect(wrapper.find(FTwo)).toHaveLength(0);
//   expect(wrapper.find(FTwoA)).toHaveLength(0);
//   expect(wrapper.find(FTwoB)).toHaveLength(0);
//   expect(wrapper.find(FThree)).toHaveLength(0);
//   expect(wrapper.find(FThreeA)).toHaveLength(0);
//   expect(wrapper.find(FThreeB)).toHaveLength(0);
//   expect(wrapper.find(FFour)).toHaveLength(0);
//   expect(wrapper.find(FFourA)).toHaveLength(0);
//   expect(wrapper.find(FFourB)).toHaveLength(0);
//   expect(wrapper.find(NoMatch)).toHaveLength(1);
// })



// test('App Test', () => {
//   expect(true).toBeTruthy();
// })

