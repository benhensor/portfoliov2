import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Page } from '../styles/GlobalStyles'

const Contact = forwardRef((props, ref) => {
  return (
    <Page ref={ref}>Contact</Page>
  )
})

export default Contact