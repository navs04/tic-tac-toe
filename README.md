# tic-tac-toe
A fully functional Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS, following a modular architecture using the Module Pattern (IIFE).
The game supports two players, win and tie detection, turn switching, and a reset feature — all with clean separation between logic and UI.

# Architecture

This project follows a separation of concerns approach using JavaScript modules:

1. GameBoard Module

Responsible for:

- Storing the board state as a 3×3 array

- Setting and validating moves

- Resetting the board

2. GameController Module

Responsible for:

- Tracking the current player

- Switching turns

- Counting moves

- Detecting wins and ties

- Managing game state

3. DisplayController Module

Responsible for:

- Rendering the board in the DOM

- Handling user clicks

- Calling the game logic

- Updating the UI after every move

- Resetting the UI