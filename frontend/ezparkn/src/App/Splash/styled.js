import styled from 'styled-components';

const Container = styled.div`
    left: 0;
    margin: auto;
    margin-top: -100px;
    position: absolute;
    top: 50%;
    width: 100%;
`

const Box = styled.div`
    position: absolute;
    height: 300px;
    width: 400px;
    margin: -100px 0 0 -200px;
    top: 50%;
    left: 50%;
    background-color: white;
    opacity: 0.9;
`
const RightSide = styled.div`
    width: 30%;
    margin-left: 10px;
    float:left;
`

const LeftSide = styled.div`
    width: 40%;
    float: left;
    text-align: right;
    color: #c94e50;
`

const Title = styled.h1`
  color: black;
  font-size: 65px;
  text-outline: #c94e50;
  font-family: "Tahoma", Times, serif;

`

const Box2 = styled.div`
    text-align: center;
    vertical-align: middle;
    background: #373a47;
    color: #fff;
`

const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: ${props => props.small ? '0.75em 1.25em' : '1.0em 2.5em'};
  font-size: ${props => props.small ? '14px' : '18px'};
  border-radius: 15px;
`

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`

const Input = styled.input`
  width: 200px;
`

export {
  Button,
  Container,
  Title,
  Box,
  Box2,
  RightSide,
  LeftSide,
  Logo,
  Input
};