# UniCityFilmClub

# How to Install/Run
- download zip or clone repository. 
- In terminal/cmd: change into project directory, then run:
- npm i              
- npm run dev       
  
Note: Our database is being hosted by MongoDB Atlas, and is public to all IP addresses.

# Motivation
Developing a dynamic web application that allows the members of UOIT's Universe City Film Club to experience the community online.

# Design and Preparation
<img width="885" alt="design" src="https://user-images.githubusercontent.com/18250516/55269897-c9fa1200-526e-11e9-9385-97404a5287e9.png">

# Requirements Locations
# DHTML
- src/pages/Login.js (append form error messages)
- src/pages/Signup.js (append form error messages)
- src/pages/Anncmnts.js (mapping each database announcement to a component and displaying) 
- src/pages/Projects.js (mapping each database project to a component and displaying) 
- src/pages/Films.js (mapping each film from youtube to a component)
- src/components/Projectcard.js (assigning each projectcard a unique id dynamically, and applying styles to each)

# Form submission / validation 
- src/pages/Login.js
- src/pages/Signup.js
- src/pages/Create.js

# Session Tracking
- src/pages/Account.js (using UserContext.Provider to send information to child elements)
- src/pages/Create.js (using activeuser from UserContext passed from parent)
- src/components/Header.js (using activeruser from UserContext passed from parent)

# Node.js, express, mongoDB, mongoose
- server.js

# AJAX 
- src/pages/Login.js
- src/pages/Signup.js
- src/pages/Account.js
- src/pages/Anncmnts.js
- src/pages/Projects.js
- src/pages/Create.js

## Authors
Martin Ridge Reventar
Mir Afgan Talpur

Project was created by programming together


