import styled from 'styled-components';

const AppView = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(../img/nycstreet.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainView = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export {
  AppView,
  MainView,
};