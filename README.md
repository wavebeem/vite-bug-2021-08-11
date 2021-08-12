# Vite Bug (2021-08-11)

1. Clone the repo

2. `npm install`

3. `npm run dev`

4. Open browser to <http://localhost:3000/>

5. Open browser dev tools

6. Change the text `CHANGE ME` in `src/App.jsx` to `oops`

7. Refresh the browser

8. The JS console now says `Uncaught ReferenceError: can't access lexical declaration 'App' before initialization`
