# Arcanoid

A modern take on the classic Arkanoid game built with TypeScript and Vite. This version features funny cat videos that play in the background as you clear blocks!

## Features

- **Classic Gameplay**: Paddle, ball, and blocks to break.
- **Cat Memes Integration**: Blocks reveal and play funny cat videos when hit.
- **Responsive Design**: Adapts to different screen sizes.
- **Mobile Friendly**: Includes touch controls for playing on mobile devices.
- **Optimized Experience**: Disabled accidental text selection and scroll-bouncing for uninterrupted gameplay.

## Tech Stack

- **TypeScript**: For type-safe game logic.
- **Vite**: For fast development and bundling.
- **HTML5 Canvas**: For rendering game elements.
- **CSS3**: For styling and layout.

The game is available at [somesoap.net/arkanoid](https://somesoap.net/arcanoid/).
This repository features automated deployment.

## Controls

- **Mouse/Touch**: Move the paddle to keep the ball in play.
- **Keyboard**: Use Left/Right arrows (if applicable).

## Project Structure

- `src/`: Contains the TypeScript source code.
  - `classes/`: Game logic classes (like `VideoMemes`).
  - `utils/`: Helper functions for canvas, colors, and more.
  - `game.ts`: Core game loop and logic.
  - `main.ts`: Entry point for the application.
- `index.html`: The main HTML file.
- `src/style.css`: Global styles.

## License

This project is open-source.
