import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const ButtonStyle = styled.button`
  background: #f7f7f7;
  border: none;
  font-size: 2.5vw;
  border-radius: 10px;
  padding: 5px 30px;

  &:hover {
    background: red;
  }
`

export default function Button({children, link=''}) {
  console.log(children, link)

  return <Link to={"/" + link}>
      <ButtonStyle>
        {children}
      </ButtonStyle>
    </Link>
}