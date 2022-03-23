### The birth of Single Page Applications

An SPA (Single-page application) is a web app implementation 
that loads only a single web document, and then updates the body content of that single 
document via JavaScript APIs such as **XMLHttpRequest** and **Fetch** when different 
content is to be shown.

This allows the users to:
* using websites without loading the whole new pages from the server, which can result in
performance gains and more dynamic experience.
* With some tradeoff disadvantages such as SEO, more efforts required to maintain the state,
implementing navigation, and do meaningful performance monitoring.

### Lifecycle methods
Essentially methods that get called at different stages of when a component gets rendered.
1. `ComponentDidMount()`  when this component mounts
    * Mounting is when **React** puts our component on the page & it renders it onto the **DOM**
    for the first time.