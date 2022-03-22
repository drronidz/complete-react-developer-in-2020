# React Concepts
1. Don't touch the DOM. I'll do it.
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



   
