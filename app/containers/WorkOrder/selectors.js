import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workOrderPage state domain
 */

const selectWorkOrderPageDomain = state => state.workOrderPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WorkOrderPage
 */

const makeSelectWorkOrderPage = () =>
  createSelector(
    selectWorkOrderPageDomain,
    substate => substate,
  );

export default makeSelectWorkOrderPage;
export { selectWorkOrderPageDomain };
