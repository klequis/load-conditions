
import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ruleEditActionUpdate, selectRuleEditAction } from 'features/ruleEdit'
import * as R from 'ramda'

// eslint-disable-next-line
import { purple, green, redf } from 'logger'
import { selectRuleEditRenameDescriptionAction } from 'features/ruleEdit'

export const RenameDescription = () => {

  const action = useSelector(selectRuleEditRenameDescriptionAction)
  const { _id: actionId } = action

  const dispatch = useDispatch()

  const _onChange = (event) => {
    const { value } = event.target
    const newAction = R.mergeRight(action, { replaceWithValue: value })
    dispatch(ruleEditActionUpdate(newAction))
  }

  return (
    <input
      key={actionId}
      type="text"
      value={action.replaceWithValue}
      name="replaceWithValue"
      onChange={_onChange}
      // onBlur={_onBlur}
      placeholder='hi'
      // onKeyDown={_onKeyDown}
    />
  )
}

/*



import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ruleEditActionUpdate, selectRuleEditAction } from 'features/ruleEdit'
import * as R from 'ramda'

// eslint-disable-next-line
import { purple, green, redf } from 'logger'

export const RenameDescription = ({ actionId }) => {

  const action = useSelector(state => selectRuleEditAction(actionId, state))

  const dispatch = useDispatch()

  const _onChange = (event) => {
    const { value } = event.target
    const newAction = R.mergeRight(action, { replaceWithValue: value })
    dispatch(ruleEditActionUpdate(newAction))
  }

  return (
    <input
      key={actionId}
      type="text"
      value={action.replaceWithValue}
      name="replaceWithValue"
      onChange={_onChange}
      // onBlur={_onBlur}
      placeholder='hi'
      // onKeyDown={_onKeyDown}
    />
  )
}


*/
