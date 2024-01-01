# Atrc (atrc) - Atomic React Components

> atrc, short for Atomic React Components, is a versatile collection of React components designed to empower your React projects, with a special emphasis on seamless integration with WordPress. These components follow the atomic design principles, providing a structured and scalable approach to building user interfaces.

## Prerequisites

Before incorporating Atrc into your React project, ensure that the following prerequisites are met:

1. **React Project Setup:** Atrc is designed for React applications, so make sure you have a React project set up and configured.

2. **Node.js and npm:** Atrc is distributed as an npm package. Ensure that you have Node.js and npm installed on your development environment. You can download and install them from [https://nodejs.org/](https://nodejs.org/).

3. **@wordpress/scripts (Recommended for WordPress Integration):** If you are planning to use Atrc within a WordPress project, it is recommended to set up and use `@wordpress/scripts` for streamlined integration. `@wordpress/scripts` facilitates the integration of React components into WordPress plugins and themes and provides a smooth development experience. You can find more information about `@wordpress/scripts` in the [official documentation](https://developer.wordpress.org/block-editor/packages/packages-scripts/).

4. **Knowledge of Atomic Design Principles:** Familiarize yourself with atomic design principles, as Atrc follows this design methodology. Understanding atoms, molecules, organisms, templates, and pages will help you leverage Atrc's full potential in your project.

5. **Use atomic CSS:**
   This project utilizes [Atomic CSS](https://github.com/codersantosh/atomic-css). Ensure that you integrate it into your React project. If you are using it with WordPress, consider using the `wp_enqueue_scripts`, `admin_enqueue_scripts`, `enqueue_block_editor_assets` or any appropriate hooks and in the callback function use `wp_register_style` and `wp_enqueue_style` hooks to load the CSS.

   Example for WordPress integration:

   ```php
   /* Register Atomic css */
    wp_register_style( 'atomic', 'path/to/atomic.min.css' );

   // Enqueue Atomic CSS stylesheet
   wp_enqueue_style( 'atomic' );
   ```

Once you have these prerequisites in place, you are ready to seamlessly integrate Atrc into your React project and enjoy the benefits of its atomic components.

## Table of contents

- [Atrc (atrc) - Atomic React Components](#atrc-atrc---atomic-react-components)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Import the Atrc components into your React component](#import-the-atrc-components-into-your-react-component)
    - [Use the components within your React component](#use-the-components-within-your-react-component)
    - [All available components](#all-available-components)
    - [Serving the distribution version](#serving-the-distribution-version)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License & Attribution](#license--attribution)

## Getting Started

Follow these instructions to set up Atrc in your local development environment:

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install atrc
```

Or if you prefer using Yarn:

```sh
$ yarn add atrc
```

## Usage

Now that you have Atrc installed, you can use the components in your React project. Here's a basic example:

### Import the Atrc components into your React component:

```js
import { AtrcButton, AtrcCheckbox } from 'atrc';
```

### Use the components within your React component:

```js
const MyComponent = () => {
	return (
		<div>
			<AtrcButton onClick={() => console.log('Button Clicked!')}>
				Click me
			</AtrcButton>
		</div>
	);
};
```

### All available components

Here are [All available components](https://github.com/codersantosh/atrc/blob/master/build/index.js).

## Contributing

Thank you for your interest in contributing to Project ATRC. To submit your changes, please follow the steps outlined below.

1. **Fork the Repository:** Click on the "Fork" button on the top right corner of the repository page to create your own fork.

2. **Clone your Fork:** Clone your forked repository to your local machine using the following command:

   ```sh
   git clone https://github.com/your-username/atrc.git
   ```

3. **Create a Feature Branch:** Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b my-new-feature
   ```
4. **Make Changes:** Add your changes to the project. You can use the following command to stage all changes:

   ```sh
   git add .
   ```

5. **Commit Changes:** Commit your changes with a descriptive commit message:

   ```sh
   git commit -a m 'Add some feature'
   ```

6. **Push to your Branch:** Push your changes to the branch you created on your fork:
   ```sh
   git push origin my-new-feature
   ```
7. **Submit a Pull Request:** Go to the Pull Requests tab of the original repository and click on "New Pull Request." Provide a clear title and description for your changes, and submit the pull request.

Thank you for contributing to Atrc!

## Authors

- **Santosh Kunwar** - [codersantosh](https://twitter.com/codersantosh)

See also the list of [contributors](https://github.com/codersantosh/atrc/graphs/contributors) who participated in this project.

## License & Attribution

- GPLv2 or later © [Santosh Kunwar](https://twitter.com/codersantosh).

I would like to thanks all the React.js team, Gutenberg Team, WordPress Core Contributors and My team to motivate me to create this awesome react library.
