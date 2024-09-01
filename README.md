# PDF Merger

## Overview

PDF Merger is a Node.js application that allows users to merge multiple PDF files into a single document. This project utilizes the `pdf-lib` package for PDF manipulation and includes a web interface styled with Bootstrap components.

## Features

- **Merge PDFs**: Combine multiple PDF files into one.
- **User-Friendly Interface**: Responsive design using Bootstrap.
- **Simple Setup**: Easy installation and usage with npm.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/pdf-merger.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd pdf-merger
    ```

3. **Install the required npm packages:**

    ```bash
    npm install
    ```

4. **Install Bootstrap:**

    Bootstrap can be included in the `index.html` file or installed via npm:

    ```bash
    npm install bootstrap
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

    This command starts the Node.js server and makes the application accessible at `http://localhost:3000`.

2. **Access the Web Interface:**

    Open your web browser and go to `http://localhost:3000` to use the PDF merger tool.

3. **Upload and Merge PDFs:**

    - Click the "Choose Files" button to select multiple PDF files.
    - Click the "Merge PDFs" button to combine the selected files.
    - Download the merged PDF file once the process is complete.

## Project Structure

- **`index.html`**: The main HTML file with Bootstrap components for the user interface.
- **`server.js`**: The Node.js server file responsible for handling PDF merging operations.
- **`public/`**: Directory containing static files, including Bootstrap CSS and JavaScript.
- **`package.json`**: Contains project dependencies and scripts.

## Dependencies

- `pdf-lib`: Library for PDF manipulation.
- `express`: Web framework for Node.js.
- `bootstrap`: Frontend framework for styling.

