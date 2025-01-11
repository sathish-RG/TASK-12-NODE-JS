
## Features
- **User Registration**: Create a new user with name, email, and password.
- **User Login**: Authenticate users with email and password.
- **Forgot Password**: Send an OTP to the user's email to reset the password.
- **Reset Password**: Update the user's password using the OTP.


---





## API Endpoints

### 1. **Register**
**POST** `/api/auth/register`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### 2. **Login**
**POST** `/api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "token": "jwt_token_here"
  }
  ```

### 3. **Forgot Password**
**POST** `/api/auth/forgot-password`
- **Body**:
  ```json
  {
    "email": "john@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "message": "OTP sent to your email"
  }
  ```

### 4. **Reset Password**
**POST** `/api/auth/reset-password`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "otp": "123456",
    "newPassword": "newpassword123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Password reset successfully"
  }
  ```

### 5. **Home (Protected Route)**
**GET** `/api/auth/home`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer jwt_token_here"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Welcome to the home page",
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

---

## Tools & Technologies
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer
- **Password Hashing**: bcrypt

---

## Future Enhancements
- Add frontend templates (e.g., using EJS or React).
- Implement account lockout after multiple failed login attempts.
- Add multi-factor authentication (MFA).

---

## License
This project is licensed under the MIT License.

