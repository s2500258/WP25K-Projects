# Web Development Study Projects

This repository contains 6 study projects created during my study at Business College Helsinki (course: WP25K, student: Aleksandr Akulov). Each project has a short description, and some have live demo links.

---

## Table of Contents
- [Spring 2025 Projects](#spring-2025-projects)
   - [1. ATM interface simulator](#1-atm-interface-simulator)
   - [2. Little zoo](#2-little-zoo)
   - [3. 007 Portfolio Website](#3-007-portfolio-website)
- [Summer 2025 Projects](#summer-2025-projects)
   - [4. Age calculator](#4-age-calculator)
   - [5. Country guesser "Europa-pa"](#5-country-guesser-europa-pa)
   - [6. Pannukakku (osa 3)](#6-pannukakku-osa-3)
- [Bonus Projects](#bonus-projects)
   - [7. Basic browser 3D viewer](#7-basic-browser-3d-viewer)

---

## Spring 2025 Projects

### 1. ATM interface simulator  
- **Description:** A single-page simulator of an ATM interface to practice basics of HTML, CSS and Javascript in the begining of studing course (first given project). 
User must enter PIN-code first to activate input elements (any code will work). After inputs are activated user can set the amount of money they want to deposit or withdraw. If user wants to withdraw amount bigger than current account ballance, the script will show an error. If user entered not a number, the script will show error message as well.
- **Technologies:** HTML, CSS, basic JavaScript.  

### 2. Little zoo  
- **Description:** This is a web page of a small zoo that displays a list of animals in it (name of the animal species and what order it belongs to). The user can search for an animal by name, filter by order, sort, add a new one and delete an existing one.  
- **Technologies:** HTML, CSS, JavaScript.  
- **Live demo:** [View website](https://pikku-elaintarha.web.app/)  

### 3. 007 Portfolio Website  
- **Description:** This is a single-page website that is a humorous portfolio of the James Bond character aka Agent 007. It has sections "About Me", "Projects", "Contact Form", and there are also dark and light versions of the site. 
In the process of creating the style file, fragments written by Gemini AI were used.
- **Technologies:** HTML, CSS.  

---

## Summer 2025 Projects

### 4. Age calculator  
- **Description:** This is a solution to the [Age calculator app challenge on Frontend Mentor]
(https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). 
On the page user are capable to:
- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size 
- **Technologies:** HTML, CSS, JavaScript.  

### 5. Country guesser "Europa-pa"  
- **Description:** Europa-pa, a little fun game site that guesses a country that you were thinkikng of.
1. The user mentally thinks of any country located in Europe and presses the Start button (by "country" we mean an independent state recognized by the UN).
It is advisable to choose a country about which the user knows enough information to have minimal need to resort to additional search. But still, if user doesn't know an answer to certain quastion it's totally OK to google it. 
2. Then the site will ask the user a series of questions with two possible answers: YES and NO. If the user is not sure of the answer,  it is allowed to use the search.
3. If the user answered all the questions correctly, then at the end the site will give the country the user thought of. If he made mistakes, the site will report that it could not determine what the user thought of.
No AI was used in code writing. Only images were created with MidJourney v.7.  
- **Technologies:** JavaScript, CSS, HTML.  
- **Live demo:** [View website](https://europa-pa.web.app)  

### 6. Pannukakku (osa 3)  
- **Description:** On the page orders.html user (administrator) can check all orders that previously were made on the main page. 
Access is granted after correct password is entered. Password "123" stores in script as a hash (SHA-256).  
Order can have one of three statuses: 
- "waiting"→ 🟡 Yellow
- "ready"→ 🔵 Blue
- "delivered"→ 🟢 Green
Also user can
- change orders's status,
- sort orders, 
- make search by customer's name or ID, 
- delete delivered ones. 
- **Technologies:** HTML, CSS, JavaScript.  

---

## Bonus Projects

### 7. Basic browser 3D viewer  
- **Description:** A simple web-page with installed frame that allows to oserve a 3D-object.
On the page user can choose one of four types of 3D objects: cylinder, cone, torus or cube, and color for selected type of object. In the frame user can rotate object around all its axes by making mouse movements. 
- **Technologies:** HTML, CSS, JavaScript, basics of THREE library.  
- **Live demo:** [View website](https://aku-3d-first-frame.web.app/)  # WP25K-Projects
