# Micro Frontend with React, TypeScript, and Webpack Module Federation

**P.S.** If you find this project helpful, please consider giving it a star! ⭐

Let's start!

This project demonstrates the implementation of a micro frontend architecture using React, TypeScript, and Webpack 5 with Module Federation. It consists of a container app and two independent child apps.

## 🚀 Features

- **Container App**: Hosts and coordinates the child apps
- **Child Apps 1 & 2**: Independent applications that can be developed and deployed separately
- **Module Federation**: Enables sharing of components and logic between apps
- **React & TypeScript**: For robust and type-safe development
- **Webpack 5**: For efficient bundling and Module Federation configuration

## 🛠 Installation

Clone the repository and install dependencies for each application:

```bash
# Clone the repository
git clone https://github.com/crestianiam/template-react-webpack-ts-module-federation
cd template-react-webpack-ts-module-federation

# Install dependencies for the container app
cd container
npm install

# Install dependencies for firstChild app
cd ../firstChild
npm install

# Install dependencies for secondChild app
cd ../secondChild
npm install

```
## 🚦 Getting Started

To run the micro frontend applications, follow these steps:

### Prerequisites

- Node.js (version 18 or later)
- npm (usually comes with Node.js)
- Dependencies installed as described in the Installation section

### Running the Applications

You need to start each application separately. Open three terminal windows, one for each app.
```bash
#inside all 3 folders
npm start
