# React Concepts
### 1. Don't touch the DOM. I'll do it.
* The DOM stands for **(Document Object Model)** : It's what the browser uses to display a website or 
a web app, and JavaScript is simply manipulating this DOM.
* The DOM is a tree representation of the page.
* We can manipulate the DOM using this :
   * document.getElementById(id)
   * document.getElementByTagName(name)
   * document.createElement(name)
   * parentNode.appendChild(node)
   * element.innerHTML
   * element.style.left
   * element.setAttribute()
   * element.getAttribute()
   * element.addEventListener()
   * window.content
   * window.onload
   * window.dump()
   * window.scrollTo()
* The previous methods allow us to completely manipulate the **DOM**, like adding
new elements, removing old elements, or altering or modifying existing elements.
* Imperative paradigm stands for directly changing an individual parts of your app
in response to various user events.
* The problem with **Imperative** programming, it becomes difficult to see the relationship
between events and all these edge cases.
* React came with a novel concept called **Declarative Approach**.
* **DOM** manipulation is one of the biggest performance bottlenecks. It takes a long
time for **DOM** changes to happen. The browser has to do two really intensive operations:
* to repaint, that is change an element and added onto a page and then 
refloat which is to recalculate the layout of the page and move things around if need be.
* So changing the dome is a really expensive operation : React will take care of that,
and I'll find the best way to change the **DOM** and just declare to me what your app
looks like.
All we need to do is say hey this is a javascript object of how I want the app to look
and React is going to hold this JavaScript object, this massive blueprint of how 
things should look. Based on this blueprint, React will manipulate the **DOM**.
* In React mode, we tell the state of our application and **React** automatically just
does it for us.
* The benefits of using react are:
   * less complexity .
   * Better code quality.
   * faster development times.
### 2. Building websites like lego blocks.
React is design around the concept of reusable components. Each of these individual 
components create the whole app.
* Each peace of the application is a component.
* A component can contain another component just like lego blocks.
* People can share these components around and all of them will work.
* Components: are simply just JavaScript functions that received some sort of input
or attributes , which we call props, and in return, it returns this thing that kind of
look like HTML.
### 3. Unidirectional DATA flow.
In **React**, we have this idea of state which you can think of it as a JavaScript object
that describes our app. Our components are built using **JSX** which is like HTML
inside JavaScript.
* State and JSX all combine to essentially give to our react:
  * `function React(state, components) {}`
* React is going to create a Virtual **DOM** (Creating a version of JavaScript DOM).
  * The Virtual DOM is tree like object (blueprint of the DOM)
* React is going to look on the blueprint and modifies the DOM for us.
* Unidirectional data flows means that when we need to change our web page the state 
has to change.
  * For example, when we click on a button, React is going to intercept that event and
change the state according to needed one.
* React is going to combine again the state and all our components and update the **DOM**.
* When the state changes, React is going to diffuse this information and let every node
or component know about that change.
 * **Note:** DATA never moves up.
* By having the restriction of data only being able to move down from the state of our 
application all the way to the **DOM** and if any changes or events happen that change
the state while we go back to the state and that's state change trickles down to 
different components in one direction is a restriction on how data can move through
our app and by adding this restriction it's becomes easy to debug code.
### 4. UI, The rest is up to you. (React is Every where)
the idea of cross platform really took off with React, and you'll notice when start building our
projects that we actually import React Core library and React DOM to our project.




   
