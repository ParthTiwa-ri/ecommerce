## 🚀 Features

- **User Registration:** Allows new users to create an account by providing necessary information such as username, email, and password.
- **User Login:** Provides a login page for existing users to authenticate themselves and access their accounts. Implemented using [DummyJSON Auth](https://dummyjson.com/docs/auth).
- **Authentication Token:** Saves the login token for authorization purposes, ensuring secure access to protected routes.
- **Protected Routes:** Makes the homepage a protected route, allowing only logged-in users to access it.
- **Product Fetching:** Fetches products from [DummyJSON Products](https://dummyjson.com/docs/products) and displays them on the homepage.
- **Search Functionality:** Adds a search bar on the homepage to search products based on their name.
- **Filtering by Price:** Implements a filter option on the homepage to filter products based on price.
- **Shopping Cart:** Implements a shopping cart feature, allowing users to add products to their cart and view the total count and amount of items.
- **Add to Cart Button:** Adds an "Add to Cart" button on product cards for easy addition of items to the shopping cart.

## 🛠️ Technologies Used:

- **React v16+**
- **React Router:** For managing navigation and routing within the application.
- **React Context API:** For managing global state such as user authentication status and shopping cart items.
- **Local Storage API:** For persisting user authentication tokens or other necessary data locally in the browser.
- **DummyJSON:** For simulating backend API calls and fetching dummy data for user authentication and product information.
- **Iconscout Library:** For accessing and using icons within the application for better visual representation.

## 🛡️ Non-functional Features

- **Route Protection:** Ensures only authenticated users can access sensitive pages, redirecting unauthorized users.
- **Data Persistence:** Securely stores user data and shopping cart items locally, maintaining session continuity across browser sessions.
- **Responsive Design:** Ensures the application adapts and functions seamlessly across various devices and screen sizes.
- **Error Handling:** Implements robust error handling, input validation, and security measures to ensure stable and secure user interactions.

## 🚀 Usage

- Please access the [shopping portal](https://shopping-app-example.vercel.app/) in your browser.

- **Homepage:** When you open the application, you will be directed to the homepage. Only logged-in users can access this page.
- **Registration:** If you're a new user, click on the "Sign Up" link on the homepage to create a new account.
- **Login:** Existing users can log in by providing their credentials on the login page.
- **Product Viewing:** Once logged in, you can view the available products on the homepage. Use the search bar to find specific products or use the filter option to refine your search by price.
- **Shopping Cart:** Add products to your cart by clicking the "Add to Cart" button on product cards. You can view your cart's total count and amount at the top of the page.
- **Navigation:** Navigate between pages using the links provided in the application or the browser's back and forward buttons.

## 🛠️ Installation

Follow these steps to get a local copy of the project up and running on your machine:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yourusername/shopping-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd shopping-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server with Vite:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit the development server link to view the application.**
