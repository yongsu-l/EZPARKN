import styled from 'styled-components';

const Container = styled.div`
    left: 0;
    margin: auto;
    margin-top: -100px;
    position: absolute;
    top: 50%;
    width: 100%;
`

const Title = styled.h1`
  color: black;
  font-size: 50px;
  text-outline: white;

`

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: ${props => props.small ? '0.25em 1em' : '0.5em 2em'};
  font-size: ${props => props.small ? '12px' : '16px'};
`

export {
  Button,
  Container,
  Title,
};