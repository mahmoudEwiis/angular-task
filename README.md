# 📋 Angular Task

## 📖 Notes 
1. to try the project use this credentials:
- **UserName**: `emilys`
- **Password**: `emilyspass`

2. additionally, you can register a new user using the register page but the data can't use backend don't save.

**Angular Task** is a fully functional web application built with Angular that includes authentication, reusable UI components, reactive forms, and a responsive layout. The project follows Angular best practices and demonstrates component-based design and modular architecture.

---

## 🧰 Tech Stack

- **Angular**
- **RxJS**
- **Angular Router**
- **Reactive Forms**
- **Bootstrap 5**
- **SCSS**
- **TypeScript**

---

## 📁 Project Structure

``` plaintext
angular-task/
├── src/
│   ├── app/
│   │   ├── Core/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   └── services/
│   │   ├── Feature/
│   │   │   ├── auth/
│   │   │   │   ├── pages/
│   │   │   │   └── service/
│   │   ├── Shared/
│   │   │   ├── components/
│   │   │   └── directives/
│   │   ├── Layout/
│   │   │   ├── components/
│   │   │   └── layout.component.ts
│   │   ├── AppComponent/
│   │   └── app.module.ts
├── assets/
├── environments/
├── angular.json
├── package.json
└── README.md
```
---

## 🔐 Authentication

- **Register & Login**: Using reactive forms, user inputs are validated and sent to a mock API.
- **Token Storage**: The token is stored in `localStorage` for authenticated requests.
- **AuthGuard**: Protects routes from unauthorized access.
- **AdminGuard**: Ensures only admin users can access certain routes. 
- **AuthInterceptor**: Automatically attaches token to HTTP requests.

---

## 🧩 Shared Components

- `InputFieldComponent`: Input with error handling.
- `ButtonComponent`: Customizable button.
- `CardComponent`: Flexible Bootstrap-style card with header/footer slots.


---

## 📐 Layout
- **Responsive Design**: Built with Bootstrap 5, ensuring a mobile-first approach.
- **Header & Footer**: Reusable components for consistent layout.
- **Sidebar**: Collapsible sidebar for navigation, with links to different sections.

---

## 📄 Pages
- **Login Page**: User authentication with email and password.
- **Register Page**: User registration with form validation.
- **Dashboard Page**: Displays user information and a welcome message.
- **Not Found Page**: Custom 404 page for unmatched routes.
- **Home Page**: Landing page with application overview.
---

## 📦 Modules
- **CoreModule**: Contains singleton services, guards, and interceptors.
- **FeatureModule**: Contains feature-specific components and services, such as authentication.
- **SharedModule**: Contains shared components, directives, and pipes.
- **LayoutModule**: Contains layout components like header, footer, and sidebar.
---

## 📑 Features
- **GLOBAL Api Service**: A centralized service for making HTTP requests. 
- **Authentication**: Register and login functionality with form validation.
- **interceptors**: HTTP interceptors for request/response handling.
- **Guards**: Route guards for protecting routes based on authentication and roles.
- **Loader**: Global loading indicator for async operations.
- **Reusable Components**: Input fields, buttons, and cards for consistent UI.
- **Responsive Layout**: Mobile-first design using Bootstrap 5.
- **Error Handling**: Global error handling for HTTP requests.
- **Lazy Loading**: Feature modules are lazy-loaded for better performance.
---

## 🧪 Forms

- **ReactiveFormsModule**: Used for all forms.
- **Validation**: Required, email, password length, password match, terms agreement.
- **Dynamic error messages** shown in the template.

---

## 🧭 Routing

- **Modular Routing**: Feature-based lazy loading.
- **Guards**: `canActivate`, `canLoad` used for protecting routes.
- **Navigation**: Clean navigation between login, register, dashboard.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mahmoudEwiis/angular-task.git
cd angular-task
```
### 2. Install Dependencies

```bash
npm install
``` 
### 3. Run the Application

```bash
ng serve
```
### 4. Open in Browser
Open your browser and navigate to `http://localhost:4200`.
