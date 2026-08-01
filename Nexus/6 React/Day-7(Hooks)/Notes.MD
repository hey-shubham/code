## Notes on React Hooks

- Hooks are a new addition in React 16.8 that allow you to use state and other React features without writing a class. They enable you to reuse stateful logic across components, making your code more modular and easier to maintain.

- The most commonly used hooks are:
  - `useState`: Allows you to add state to functional components.
  - `useEffect`: Allows you to perform side effects in functional components.
  - `useContext`: Allows you to access context in functional components.
  - `useRef`: Allows you to create a reference to a DOM element or a value that persists across renders.
  - `useMemo`: Allows you to memoize values and prevent unnecessary re-computations.
  - `useCallback`: Allows you to memoize functions and prevent unnecessary re-creations.

  ### Rules of Hooks
  - Only call hooks at the top level of your component. Do not call hooks inside loops, conditions, or nested functions.
  - Only call hooks from React function components or custom hooks. Do not call hooks from regular JavaScript functions.

  ## Custom Hooks
  - You can create your own custom hooks to encapsulate reusable logic. A custom hook is a JavaScript function whose name starts with "use" and can call other hooks. Custom hooks allow you to share logic between components without changing their structure.

  ## Example of a Custom Hook
  ```javascript 
  const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return { count, increment, decrement, reset };
  };
  ```

  ### Conclusion
  - React Hooks provide a powerful way to manage state and side effects in functional components. By following the rules of hooks and creating custom hooks, you can write cleaner and more maintainable code in your React applications.
  
