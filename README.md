# BASIC CONCEPTS

**Required JavaScript Knowledge**:
* Arrays
* Classes
* Objects
* Arrow functions

**Thinking in React**
*  Source: https://react.dev/learn/thinking-in-react
* It's a tool that makes writing front-end application easier
* To break up codes into different components
* Combine everything together to make your application
* Look at the final result - break it down into components

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/19d8fd74-25bb-4d34-985f-0fa3ad8cfcc8)


**These notes are extracted from: Reacts in 100 seconds**: https://youtu.be/Tn6-PIqc4UM?si=eg9--8FUdM7qz6FE

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/b41bcee8-d13b-4871-afe3-a8a2c9e5f3d8)

# REACT CONCEPTS

**These notes are extracted from: Every React concept**: https://youtu.be/wIyHSOugGGw?si=mnaaS1hXhva2IKQE

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/322a8bce-77b3-4b64-8b05-551af80bcaa7)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/ff217197-e64c-4673-bb53-ea73e9a85fe0)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/b4d7d9fa-4f44-4900-85f9-8df389b9392d)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/e48d546c-e4a0-4cf5-adc9-7f22445df94b)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/7f6d9b5d-7480-494b-9fb1-1dc341b584d9)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/6f3d2524-cfbe-4166-a340-9f900e8fd79d)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/7fc6539c-ee9d-411f-bbbd-ea17bb331aab)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/aaebd1d6-39f9-4785-954c-e1b56cc7447c)
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/f2e17c04-f71d-46dd-9f5e-c211b46cc2ce)

# REACT - INSTALLATION

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/b9269bf1-5839-4afb-aab4-f2d1de75629e)

# REACT - PROJECT STRUCTURE

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/6cf72a4a-943f-4117-ab50-c161c0e7cba2)

**Creating our first component - delete the sample project**
* Note that the app.jsx is the sample project, not the project we created.
* App.jsx was imported into main.jsx - import App from './App.jsx'Create root element - app component
  1) delete everything inside function to create our component
  2) Delete import
*  Keep the export statement
*  We can delete App.jsx as we no longer need it

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/55ed2ee7-67ff-46e8-85a0-c023778d5416)


# SIMPLE PROJECT - FOOD WEBSITE

**HEADER COMPONENT**

**Got to src folder, create header file Header.jsx**
* Create function header
* Write export statement
* Add return statement
* Create pure HTML inside return - Header element
* React component is only capable of returning a single element, but you can place children element within

**App component**
* Import the header component
* Type import, name of component, from, location of folder
* Write a return statement
* Add angle brackets (<></>)and type the name of the component - they're a pair of two
* The alternative syntax would be <Header/>

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/3b7ad1f8-27b0-4f35-9acc-80d5264c4b2b)

**ADD ELEMENTS INTO HEADER COMPONENT**
* Navigation
* Unordered list
* Wrap lists inside anchor element
* Horizontal line

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/c6bea0e3-4487-47dc-9adf-330a327e94d3)

**FOOTER COMPONENT**

**Go to src folder, create a Footer.jsx file**
* Create a function based component - it returns a footer component
* Add a paragraph to create trademark
* Export the footer component using export statement into App.jsx

**App Component**
* Import footer component
* Type import, name of component, from, location of folder
* Write a return statement for Footer component
* BUT React component is only capable of returning a single element - WE WILL GET AN ERROR if we return both Header and Footer
* It will prompt an error and asks us to wrap elements in enclosing tags
  
![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/e48e2830-6bd4-4628-805f-4bc3c80fd330)

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/2fbb406d-74df-463a-ac3c-4c0a78c82f5b)

**INSERT JAVASCRIPT MEHTOD INTO HTML REACT ELEMENT**
* Add a set of curly braces {}
* We create a new data object - getFullYear method
* It will return the current year - 2024!

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/0a2911c0-0e47-4186-8da3-4019a9ee5902)

**FOOD COMPONENT**

**Go to src folder, create a Food.jsx file**
* Create a function based component
* Add returns statement - it returns a Food component
* Export the footer component using export statement into App.jsx
* Create food variable using JS constant - food1, food2
* Utilize food constants inside return statement using unordered list
* In order to utilize JS, we need to insert them inside curly braces
* We can also add JavaScript method using dot notation (i.e. .toUpperCase)

**App component**
* Import footer component into app component
* Type import, name of component, from, location of folder
* Write a return statement for Food component
* AND OUR SIMPLE FOOD WEBSITE IS NOW COMPLETE! 😊

![image](https://github.com/asyikin22/REACT-BASICS/assets/148519441/b4847b0f-b8ca-4265-9299-fa6a42f6c93c)





















