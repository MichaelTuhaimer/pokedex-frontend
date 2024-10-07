# Pokédex React Frontend

A React-based frontend application that interacts with a custom Ruby on Rails API and the PokeAPI to allow users to explore Pokémon, create accounts, and save their favorite Pokémon. This project showcases full-stack development skills, focusing on seamless communication between the frontend and backend.

## Table of Contents
* Features
* Installation
* Usage
* Project Structure
* Technologies Used
* Project Highlights

## Features
* Pokémon Listing: Display all Pokémon retrieved from the PokeAPI, with the ability to explore detailed information about each Pokémon.
* User Authentication: Users can sign up, log in, and access personalized features.
* Favorite Pokémon: Users can select and save their favorite Pokémon, with a dedicated section to manage them.
* Version Selection: Users can view and select specific versions of Pokémon.

## Installation
### Prerequisites
* Node.js (version >= 14.x.x)
* Yarn or npm

### Setup
1. Clone the repository:

```bash
git clone https://github.com/MichaelTuhaimer/pokedex-frontend
cd pokemon-react-frontend
```

2. Install dependencies:
```bash
npm install
```

4. Create a .env file in the root directory and add your backend API URL:
```arduino
REACT_APP_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm start
```

5. The app will be running at http://localhost:3000.

## Usage
### User Authentication
Users can sign up or log in to the platform, which enables them to access additional features like saving favorite Pokémon. Authentication is handled through JWT tokens sent by the Rails backend.

### Pokémon Exploration
* Browse all Pokémon from the PokeAPI.
* View detailed information about each Pokémon, including abilities, stats, and different versions.
* Filter or search Pokémon based on their names or attributes.

### Favorite Pokémon
* Users can add Pokémon to their favorites with the click of a button.
* A dedicated section lists all favorite Pokémon, which users can manage (add or remove).

## Project Structure
* src/components - Contains React components like PokemonsIndex, PokemonsShow, Favorites, Navbar, and Auth.
* src/services - Handles API calls to the Rails backend using Axios.
* src/hooks - Custom React hooks for managing data fetching, authentication, and state.
* src/styles - Tailwind CSS is used for styling the application, offering a responsive and modern user interface.

## Technologies Used
* React - JavaScript library for building user interfaces.
* Axios - For making API requests to the Rails backend.
* React Router - For navigation and handling routes.
* Tailwind CSS - Utility-first CSS framework for styling.
* Rails API - Backend for managing users, favorites, and interfacing with the PokeAPI.

## Project Highlights
* Full-Stack Integration: Built a robust frontend that seamlessly communicates with a Rails API backend.
* State Management: Utilized React’s useState and useEffect hooks to efficiently manage component state and API data.
* Authentication: Implemented secure user authentication using JWT, with tokens stored in localStorage.
* Responsive UI: Designed a clean, responsive interface using Tailwind CSS to enhance user experience on various devices.
