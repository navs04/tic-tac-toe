# Tic-Tac-Toe
A fully functional Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS, following a modular architecture using the Module Pattern (IIFE).
The game supports two players, win and tie detection, turn switching, and a reset feature — all with clean separation between logic and UI.

# Architecture

This project follows a separation of concerns approach using JavaScript modules:

GameBoard Module:

- Storing the board state as a 3×3 array

- Setting and validating moves

- Resetting the board

GameController Module:

- Tracking the current player

- Switching turns

- Counting moves

- Detecting wins and ties

- Managing game state

DisplayController Module:

- Rendering the board in the DOM

- Handling user clicks

- Calling the game logic

- Updating the UI after every move

- Resetting the UI