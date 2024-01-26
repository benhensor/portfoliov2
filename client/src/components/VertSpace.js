import React from 'react'
import styled from 'styled-components'

const VertDiv = styled.div`
    width: 100%;
    height: 900em;
    background-color: var(--background-static);
    user-select: none;
    text-align: center;
`

export default function VertSpace() {
  return (
    <VertDiv>VertSpace</VertDiv>
  )
}