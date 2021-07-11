# Tap Room with Redux

#### React app that keeps track of an inventory of kegs, using Redux to store app states.

#### To see my live website go to https://vnessa-su.github.io/tap-room-redux/

#### By Vanessa Su

## Description

React web app that allows the user to view a list of kegs in an inventory, add new kegs, remove pints from those kegs as they are sold to customers, edit keg information, and delete kegs from the inventory. The state storage for this app is implemented using Redux. Tests for Redux reducers and action creators are implemented in Jest

## User Story

- As a user, I want to see a list/menu of all available kegs.
- As a user, I want to submit a form to add a new keg to a list.
- As a user, I want to be able to click on a keg to see its detail page.
- As a user, I want to see how many pints are left in a keg.
- As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.
- As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake.
- As a user, I want to be able to delete a keg.

## Component Diagram

![Component Diagram](tap-room_planning.jpg?raw=true "Tap Room Planning Component Diagram")

## Technologies Used

- React
- Redux
- Javascript
- Jest
- Bootstrap
- Node
- VSCode

## Setup/Installation Requirements

### Prerequisites

- [Node](https://nodejs.org/en/)
- A text editor like [VS Code](https://code.visualstudio.com/)

### Installation

1. Clone the repository: `$ git clone https://github.com/vnessa-su/tap-room.git`
2. Navigate to the `tap-room` directory on your computer
3. Open with your preferred text editor to view the code base
4. To start a development server and view the project in the browser:
   - Navigate to `tap-room` in your command line
   - Run the command `npm install` to install dependencies
   - Run the command `npm start` to start a development server
   - Open `http://localhost:3000` in your browser to view the page
5. To run the tests:
   - Navigate to `tap-room` in your command line
   - Run the command `npm test`

## Known Bugs

- Inventory is only stored on the page, so refreshing the page will reset the inventory

## Contact Information

For any questions or comments, please reach out through GitHub.

## License

[MIT License](license)

Copyright (c) 2021 Vanessa Su
