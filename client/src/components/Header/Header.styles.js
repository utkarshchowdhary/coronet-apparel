import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 10px;
  }
`

export const LogoContainer = styled(Link)`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
