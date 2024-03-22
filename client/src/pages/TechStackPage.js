import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Page } from '../styles/GlobalStyles'

const TechStack = forwardRef((props, ref) => {
  return (
    <Page ref={ref}>Tech Stack</Page>
  )
})

export default TechStack