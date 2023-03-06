/**
 * "createStore is deprecated" message :)
 * For the record this has nothing to do with your actual application code. It is
 *  specifically a message to users like you who are using "plain Redux" - it's trying to
 *  tell you that you're following patterns that are much harder to use, and we want you to
 *  use Redux Toolkit instead because it will make your life much easier :)
 *
 *  You'll note that this isn't even a runtime warning being printed in the console - it's
 * literally just a visual indicator in your editor, like createStore.
 *
 */
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
