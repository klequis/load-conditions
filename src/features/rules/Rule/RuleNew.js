import React from 'react'
import styled from 'styled-components'
import { Criteria, Actions } from 'features/rules'

// eslint-disable-next-line
import { green, purple, red } from 'logger'

const RuleDiv = styled.div``

export const RuleNew = () => {
  return (
    <RuleDiv id="Rule">
      <Criteria />
      <Actions />
    </RuleDiv>
  )
}