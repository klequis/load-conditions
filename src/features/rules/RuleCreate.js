import React from 'react'
import { Rule } from './Rule'
import { CriteriaResults } from 'features/criteriaResults'
import { ContainerFluid } from 'components/ContainerFluid'
import styled from 'styled-components'
import { selectRuleEditIsTmpRule } from 'features/ruleEdit'
import { useSelector } from 'react-redux'

import Button from 'components/Button'

// eslint-disable-next-line
import { purple, green, redf, yellow, blue } from 'logger'
// eslint-disable-next-line
import { RenderCount } from 'components/RenderCount'

let countTotal = 0
let countReturn = 0

const H2 = styled.h2`
  margin-bottom: 0;
`

const canRenderRule = () => {
  // 3. state.transactions.activeTransactionId !== null

  // 1. rules & transactions status === fulfilled

  // 2. notNilOrEmpty(state.transactions.items)

  // 4. ruleEdit.ruleEdit populated (existing rule || ruleEditTmpMake called)

  // 5.  action =   const action = useSelector(selectRuleEditRenameDescriptionAction)
  
}


export const RuleCreate = React.memo(() => {
  countTotal = countTotal + 1
  const isTmpRule = useSelector(selectRuleEditIsTmpRule)
  countReturn = countReturn + 1
  return (
    <ContainerFluid id="RuleCreates">
      <RenderCount 
        componentName='RuleCreates' 
        countTotal={{ actual: countTotal, min: 1, max: 1 }}
        countReturn={{ actual: countReturn, min: 8, max: 10 }}
      />
      <div>
        {isTmpRule ? <H2>Create Rule</H2> : <H2>Edit Rule</H2>}
        <Rule />
      </div>
      <div>
        {/* <CriteriaResults /> */}
      </div>
    </ContainerFluid>
  )
})
