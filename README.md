# MCP Course Website - Setup Instructions

This package contains the source code for the Model Context Protocol (MCP) Beginner's Course website, built with Next.js.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1.  **Node.js:** (Version 18.x or later recommended). You can download it from [https://nodejs.org/](https://nodejs.org/).
2.  **pnpm:** This project uses pnpm as its package manager. If you don't have it, you can install it after installing Node.js by running:
    ```bash
    npm install -g pnpm
    ```

## Setup and Running Locally

1.  **Extract the Archive:**
    Unzip the `mcp_course_website.zip` file to a directory of your choice on your local machine.

2.  **Navigate to the Project Directory:**
    Open your terminal or command prompt and navigate into the extracted `mcp_course_website` folder:
    ```bash
    cd path/to/your/mcp_course_website
    ```

3.  **Install Dependencies:**
    Run the following command to install all the necessary project dependencies:
    ```bash
    pnpm install
    ```
    This might take a few minutes.

4.  **Run the Development Server:**
    Once the dependencies are installed, start the Next.js development server:
    ```bash
    pnpm dev
    ```

5.  **View the Website:**
    The terminal will indicate that the server is running, usually on `http://localhost:3000`.
    Open your web browser and navigate to this address to view the course website.

## Project Structure

*   `src/app/page.tsx`: Contains the main content for the single-page course website.
*   `src/app/globals.css`: Contains global styles and Tailwind CSS directives.
*   `tailwind.config.js`: Tailwind CSS configuration file, including the color scheme.
*   `public/images/`: Contains all the Excalidraw-style visuals used in the course.
*   Other files and folders are standard Next.js project structure. Test 123

If you encounter any issues, please ensure Node.js and pnpm are correctly installed and that all dependencies were installed without errors.
