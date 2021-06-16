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

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};