/**
 * npm import
 */
import { createStore } from 'redux';

/**
 * local import
 */
import reducer from './reducer';

/**
 * store
 */
const store = createStore(reducer);

/**
 * Export
 */
export default store;
