import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const ButtonStyle = styled.button`
  background: #f7f7f7;
  border: none;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 24px;
  border-radius: 10px;
  padding: 5px 30px;
`

export default function Button({children, link=''}) {
  console.log(children, link)

  return <Link to={"/" + link}>
      <ButtonStyle>
        {children}
      </ButtonStyle>
    </Link>
}