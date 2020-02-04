/**
 *
 * Asynchronously loads the component for OrgPage
 *
 */

import loadable from './node_modules/utils/loadable';

export default loadable(() => import('./index'));
