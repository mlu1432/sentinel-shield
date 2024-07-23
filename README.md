## SentinelShield is a comprehensive mobile application designed to provide emergency assistance with real-time location sharing and communication. This repository contains both the frontend and backend codebases for the project.

# Table of Contents

# Project Structure
Installation
Usage
Frontend
Backend
Configuration
Dependencies
License
Project Structure
lua

SentinelShield/
├──
├── 
├── sentinel-shield-backend
│   ├── .expo
│   ├── cypress
│   ├── routes
│   ├── .gitignore
│   ├── app.js
│   ├── cypress.config.js
│   ├── firebaseAdmin.js
│   ├── firebaseConfig.js
│   ├── hashPasswords.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── sentinel-shield-frontend
│   ├── .anima
│   ├── .vscode
│   ├── assets
│   ├── firebase
│   ├── src
│   ├── .gitignore
│   ├── app.json
│   ├── App.jsx
│   ├── babel.config.js
│   ├── index.jsx
│   ├── metro.config.js
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json


Frontend
Screens
AuthScreen: User authentication (login/signup)
DashboardScreen: Main dashboard after login
EmergencyCommunicationScreen: Communication interface during emergencies
EmergencyContactScreen: Manage emergency contacts
HomeScreen: Initial home screen
LocationSharingScreen: Share and view real-time location

Backend
Routes
POST /api/contacts/add-contact: 
DELETE /api/contacts/delete-contact/
/
: Delete a trusted contact
Configuration
The project uses Firebase for authentication and real-time database functionalities. Make sure to set up Firebase in your project and add the Firebase configuration to the firebaseConfig.js file located in the firebase directory.