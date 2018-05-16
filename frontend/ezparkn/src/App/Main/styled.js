import styled from 'styled-components';

const AppView = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainView = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const Para = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
`

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`
const Sidebar = styled.nav`
  min-width: 250px;
  max-width: 250px;
  background: #333333;
  color: #fff;
  transition: all 0.3s;
  font-family: 'Raleway', sans-serif;
`

const SideHead = Sidebar.extend`
  padding: 20px;
  background:#333333;
  font-family: 'Raleway', sans-serif;
`

const SideActive = Sidebar.extend`
  margin-left: -250px;
` 

const List = Sidebar.withComponent('ul')

const SideComponents = List.extend`
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
  font-family: 'Raleway', sans-serif;
`

const Listmore = SideComponents.withComponent('li')

const SideComponentsMore = Listmore.extend`
  padding-left: 20px;
`

const SideUlP = styled.p`
  min-width: 250px;
  max-width: 250px;
  background: #333333;
  color: #fff;
  transition: all 0.3s;
  color: #fff;
  padding: 10px;
  font-family: 'Raleway', sans-serif;
`
const SideUlUlA = styled.li`
  min-width: 250px;
  max-width: 250px;
  background: #333333;
  color: #fff;
  transition: all 0.3s;
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
`
const Content = styled.div `
  padding: 20px;
  overflow: hidden;
  width: 100%; 
  margin: 0px;
  padding: 0px;
`

const NavDisplay = styled.li`
  display: inline-block;
  overflow: hidden;
  width: 100%; 
  margin: 0px;
  padding: 0px;
`

const MapDisplay = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  padding-top: 75px;
  z-index: 1;

`

const Hover = styled.h2`
  &:hover {
    color: #c94e50;
  };
  cursor: pointer;
`

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
`

const Modal = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`

const RightModal = styled.div`

`


export {
  AppView,
  MainView,
  Para,
  Wrapper,
  Sidebar,
  SideHead,
  SideActive,
  SideComponents,
  SideUlP,
  SideUlUlA,
  Content,
  SideComponentsMore,
  NavDisplay,
  MapDisplay,
  Hover,
  Logo, 
  Modal
};
