import './Blog.css'
const Blog = () => {
    return (
        <div className="blog-area">
            <div className='blog-content'>
                <h1>When Should You Use Context Api?</h1>
                <p>When you have data that has to be available to different components throughout your application, Reacts Context API comes in handy. Without having to pass props down through each level of the component hierarchy, it enables you to communicate state between components.
                    as an example
                    Localization: The Context API can be used to supply translations to your components if you need to display text in multiple languages.
                    Authentication: You can use the Context API to tell your components whether a user is signed in or has the right rights to access particular areas of your application.
                    E.t.c</p>
            </div>
            <div className='blog-content'>
                <h1>What Is Custom Hook?</h1>
                <p>A custom hook in React is a JavaScript function that lets you take the logic from a component and reuse it elsewhere. You may easily use and test reusable logic by encapsulating it in custom hooks.

                    By defining a function that makes use of one or more of the built-in React hooks, such as useState, useEffect, useContext, and so forth, a custom hook is produced. Additional custom hooks may be called by the custom hook.
                </p>
            </div>
            <div className='blog-content'>
                <h1>what is useRef and How does It Work?</h1>
                <p>UseRef is a hook in React that enables you to construct a mutable reference to any other value or DOM element. It provides a response that has a property called current that can be set to any value.
                    When the component mounts, we additionally utilize the useEffect hook to focus on the input element. This is accomplished by invoking the focus method on the inputRef objects current property.
                    All things considered, useRef is an effective tool for referencing DOM elements and other variables that must endure across renderings. It gives you the ability to store state and modify the DOM in a simple and effective manner.
                </p>
            </div>
            <div className='blog-content'>
                <h1>what is useMemo?</h1>
                <p>UseMemo is a hook in React that enables you to memoize a function calls output and prevent pointless recalculations. It accepts two arguments: an array of dependencies and a function that returns a result. Only when one of the dependencies changes does the function undergo a new evaluation.
                    Overall, using useMemo can help you improve the speed of your React components by memoizing pricey function calls and preventing pointless recalculations. It should, however, be used with caution because it can complicate your code and is not always essential.
                </p>
            </div>
        </div>
    );
};

export default Blog;