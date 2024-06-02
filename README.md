# Landing Page Component

This project features a React-based landing page component designed with TailwindCSS for styling and responsiveness. The component includes various sections such as a header, main content, and feature highlights with icons and images. It is optimized for both desktop and mobile views.

- Checkout the live project link - [https://uifry-landingpage.netlify.app/]

## Features

- **Header**: Includes a logo, navigation links, and a download button.
- **Main Content**: Contains promotional text, call-to-action buttons, and an image section.
- **Tag Container**: Highlights features and achievements with icons and text.
- **Responsive Design**: Uses TailwindCSS and media queries to ensure the layout adapts to various screen sizes.

## Project Structure

src/
|-- assets/
| |-- image-1.png
| |-- image-2.png
| |-- blur-image.png
| |-- Star 1.png
|-- components/
| |-- LandingPage.jsx
|-- App.js
|-- index.js
|-- landingPage.css


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/landing-page-component.git
   ```
2. Navigate to the project directory:
   ```bash
   cd landing-page-component
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to http://localhost:3000 to see the landing page in action.

## Code Overview
`LandingPage.jsx`
This file contains the main LandingPage component with the following sections:
- Header: Contains the logo, navigation links, and the download button.
- Main Content: Contains the heading, descriptive text, and call-to-action buttons.
- Tag Container: Highlights features and achievements with icons and descriptive text.
- Images: Includes the main phone images and decorative elements.
`landingPage.css`
This file includes the TailwindCSS utility classes and custom styles for the `LandingPage` component. Media queries are used to adjust the layout for mobile screens.
```bash
.body-container {
  @apply flex justify-evenly py-4 flex-col items-center;
}
/* Other styles as described in the project */
@media (max-width: 500px) {
  /* Mobile responsive styles */
}
```

## Technologies Used
- React: A JavaScript library for building user interfaces.
- TailwindCSS: A utility-first CSS framework for rapid UI development.
- React Icons: For including icons in the component.
- Node.js & npm: For managing dependencies and running the development server.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Any improvements or bug fixes are welcome!

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact bandamanjunatha2002@gmail.com

Feel free to adjust the information, links, and contact details as needed.
