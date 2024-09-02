# Example App for `reactjs-weekdays-picker`

This repository contains an example application demonstrating the usage of the `reactjs-weekdays-picker` library.

## Getting Started

Follow these instructions to get the example app running on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v12 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository**:

    ```bash
    https://github.com/jaditi930/reactjs-weekdays-picker.git
    cd reactjs-weekdays-picker/example
    ```

2. **Install dependencies**:

    Run the following command to install the required dependencies:

    ```bash
    npm install
    ```

### Running the App

After installing the dependencies, start the development server with:

```bash
npm start
```

This will launch the app in your default web browser. By default, the app will be available at http://localhost:3000.

## Using reactjs-weekdays-picker in Your Own Project

If you want to use the `reactjs-weekdays-picker` library in your own project, you can install it via npm:

```bash
npm install reactjs-weekdays-picker
```

Then, import and use the components in your React application:

```jsx
import { DefaultSelector, CircularDayPicker, DropdownSelector, CustomMenuSelector } from 'reactjs-weekdays-picker';

// Example usage
const App = () => (
  <div>
    <DefaultSelector />
    <CircularDayPicker />
    <DropdownSelector />
    <CustomMenuSelector />
  </div>
);

export default App;
```
