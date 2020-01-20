/**
 *
 * Asynchronously loads the component for Config
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
