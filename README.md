# managment-app# Management App

A modern Angular application built with TypeScript for efficient management operations.

## 📋 Description

This is a single-page application (SPA) built with Angular 17, designed for comprehensive train component management. It provides an intuitive interface to manage train components, leveraging the latest Angular features and modern development practices.

## 🚀 Features

- Built with Angular 17.3.12
- Progressive Web App (PWA) support with Service Worker
- Reactive forms and animations
- Modern TypeScript implementation
- Responsive design
- Single Page Application architecture

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.13.0 or higher
- **npm**: Version 8.19.0 or higher
- **Angular CLI**: Version 17.3.10 (will be installed with dependencies)

You can check your current versions by running:
```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mdashko/managment-app.git
   cd managment-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Development

### Running the Development Server

Start the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm test` - Runs unit tests via Karma
- `npm run ng` - Access Angular CLI commands

## 🏛️ Architecture

This application is built using:

- **Angular 17.3.12** - Core framework
- **TypeScript 5.4.5** - Programming language
- **RxJS 7.8.0** - Reactive programming
- **Angular Router** - Navigation and routing
- **Angular Forms** - Form handling and validation
- **Angular Animations** - UI animations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Marta Dashko**
- Email: 13martadashko31@gmail.com
- GitHub: [@mdashko](https://github.com/mdashko)

## 🔗 Repository

[https://github.com/mdashko/managment-app](https://github.com/mdashko/managment-app)

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Overview](https://angular.io/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

## 🆘 Troubleshooting

### Common Issues

**Node/npm version conflicts:**
- Ensure you're using Node.js 18.13.0 or higher
- Clear npm cache: `npm cache clean --force`

**Port already in use:**
- Use a different port: `ng serve --port 4201`

**Module not found errors:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

For more help with Angular CLI, run `ng help` or check the [Angular CLI Documentation](https://angular.io/cli).
