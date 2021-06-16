// 1 ) Look at browser’s localStorage. If there is a serialized string state, parse it as JSON.
// 2) Wrapped in a try/catch block bc calls to localStorage.getItem fail if user privacy mode not allow the use of localStorage.
// 3) Return undefined if something goes wrong so that app doesn’t crash
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
const persistedState = loadState();
const store = createStore(
    app,
    persistedState
);
store.subscribe(() => {
    saveState({
        movieList: store.getState().movieList
    });
});
// const persistedState = loadState()
// const configureStore = (preloadedState) => {
//   const middlewares = [promise]
//   const middlewareEnhancer = applyMiddleware(...middlewares)
//   const enhancers = [middlewareEnhancer]
//   const composedEnhancers = compose(...enhancers)
//   const store = createStore(rootReducer, preloadedState, composedEnhancers)
//   return store
// }
// const store = configureStore(persistedState)
export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};