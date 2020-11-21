import React, { useEffect } from 'react'
import * as R from 'ramda'
import { useSelector, useDispatch } from 'react-redux'
import {
  transactionsFetch,
  setRefresh,
  selectRefreshStatus,
  activeTransactionIdSet
} from 'features/transactions'
import { rulesFetch } from 'features/rules'
import { requestStatus } from 'globalConstants'
import { getRequestStatus } from 'lib/getRequestStatus'
import { RequestStatus } from 'components/RequestStatus'
import { isNilOrEmpty } from 'lib/isNilOrEmpty'
import { useRuleEditSet } from 'features/ruleEdit/useRuleEditSet'
import { RuleCreate } from 'features/rules'

// eslint-disable-next-line
import { green, yellow, red } from 'logger'
// eslint-disable-next-line
import { RenderCount } from 'components/RenderCount'

let countTotal = 0
let countReturn = 0

const getTransactionId = (transaction) => {
  return isNilOrEmpty(transaction) ? '' : transaction._id
}

const getFirstTransaction = (transactions) => {
  return isNilOrEmpty(transactions) ? null : transactions[0]
}

export const App = () => {
  countTotal = countTotal + 1

  const dispatch = useDispatch()

  const state = useSelector((state) => state)
  const slices = R.pick(['rules', 'transactions'])(state)
  const status = getRequestStatus(slices)

  const refreshTransactions = useSelector(selectRefreshStatus)

  useEffect(() => {
    if (status === requestStatus.idle || refreshTransactions === true) {
      dispatch(transactionsFetch())
      dispatch(rulesFetch())
      dispatch(setRefresh(false))
    }
  }, [dispatch, status, refreshTransactions])

  // tmp code to trigger loading of rule
  const activeTransaction = getFirstTransaction(state.transactions.items)
  const activeTransactionId = getTransactionId(activeTransaction)
  
  if (!isNilOrEmpty(activeTransaction)) {
    dispatch(activeTransactionIdSet(activeTransactionId))
  }
  // end tmp code

  useRuleEditSet(activeTransactionId)

  countReturn = countReturn + 1

  return (
    <RequestStatus status={status} className="container-fluid">
      <>
        <RenderCount
          componentName="App"
          countTotal={{ actual: countTotal, min: 8, max: 14 }}
          countReturn={{ actual: countReturn, min: 8, max: 10 }}
        />
        {/* {isNilOrEmpty(activeTransactionId) ? <Transactions /> : <RuleCreate />} */}
        <RuleCreate />
      </>
    </RequestStatus>
  )
}
