import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Page } from '../styles/GlobalStyles'

const Projects = forwardRef((props, ref) => {
  return (
    <Page ref={ref}>Projects</Page>
  )
})

export default Projects