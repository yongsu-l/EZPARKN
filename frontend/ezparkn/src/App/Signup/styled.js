import styled from 'styled-components';

const Container = styled.div`
    left: 0;
    margin: auto;
    margin-top: -200px;
    position: absolute;
    top: 50%;
    width: 100%;
    color: #fff;
`

const Button = styled.button`
  background-color: #c94e50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: ${props => props.small ? '0.75em 1.25em' : '1.0em 2.5em'};
  font-size: ${props => props.small ? '14px' : '18px'};
  border-radius: 15px;
`


export {
  Container,
  Button
};