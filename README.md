# 📱 PhonePe MERN Clone (Backend Only)

A simple, easy-to-understand Backend for a PhonePe clone project. This system is heavily commented and uses beginner-friendly architectures while simulating a real-world FinTech application environment.

---

## 🌟 Full Feature Set

### 1. User Authentication
- Strict JWT-based Register and Login system.

### 2. Dynamic UPI IDs
- Newly registered users automatically receive a unique UPI tag  
  (e.g., saurabh354@phonepe).

### 3. Strict MPIN System
- All outbound transactions enforce a robust 4-digit MPIN verification layer.

### 4. Flexible Peer-to-Peer Transfers
- Send money using:
  - 10-digit Phone Number  
  - Assigned UPI ID  

### 5. Wallet Top-Up
- Simulate direct bank transfers by adding deposits into a user's wallet.

### 6. Utility Bill Payments
- Mock endpoints for:
  - Mobile Data recharge  
  - Electricity Bills  
- Deducts wallet balance and logs BILL_PAY history.

### 7. Detailed Transaction Records
- Includes:
  - Deposits  
  - Withdrawals  
  - Utility bills  
  - Transfers  
- All mapped to the logged-in user.

### 8. Swagger User Interface
- Auto-generated documentation UI for all endpoints.

### 9. Interactive Postman Library
- Pre-configured collection with auto-saving token setup.

---

## 🛠 Tech Stack Used

- NodeJS & ExpressJS  
- MongoDB with Mongoose ORM  
- BcryptJS (Password & MPIN hashing)  
- JSON Web Token (JWT)  
- Swagger UI  

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
2. Configure Environment Variables
Inside your root folder, please ensure you have an .env file containing this strict outline:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/phonepe-clone
JWT_SECRET=super_secret_key_change_in_production
(If you're deploying this or using Mongo Atlas, swap out mongodb://127.0.0.1:27017/phonepe-clone with your cloud URI connection string)
3. Generate Swagger Document
Refresh the static UI configurations mapping to your local ports by executing:

npm run swagger

4. Seed Dummy Data (Highly Recommended)
npm run seed
Seeded Users
amit@example.com

What gets seeded?

amit@example.com (Phone: 9876543210 | UPI: amit123@phonepe | Bal: 5000)
priya@example.com (Phone: 9876543211 | UPI: priya456@phonepe | Bal: 3000)
rahul@example.com (Phone: 9876543212 | UPI: rahul789@phonepe | Bal: 1500)
neha@example.com (Phone: 9876543213 | UPI: neha012@phonepe | Bal: 8000)
Global Credentials For these seeded accounts:

Password: password123
MPIN: 1234

5. Run the Server

Production

npm start

Development

npm run dev

Server runs at:
http://localhost:5000

📖 API Endpoints
Auth Routes (/api/auth)
POST /register
Register user and generate UPI
POST /login
Validate credentials and return token
GET /profile
Get user info and MPIN status
POST /setup-mpin
Set 4-digit MPIN (Requires Token)
Transactions (/api/transactions)

POST /send
Send money

Request Body:

{
  "receiverIdentifier": "phone or upi",
  "amount": 100,
  "mpin": "1234"
}
GET /history
Get transaction history
Wallet (/api/wallet)
POST /add-money
Add balance

POST /pay-bill
Pay bills

Request Body:

{
  "billerName": "electricity",
  "amount": 500,
  "mpin": "1234"
}
🔍 API Testing
Swagger UI

Visit:

http://localhost:5000/api-docs
Postman Setup
Open Postman
Import postman_collection.json
Run Login API
Token auto-saves in {{token}}
Use other APIs directly (no manual token needed)

---

Agar tu chahe next step me main is README ko **GitHub standout banane ke liye badges + screenshots + architecture diagram** bhi add kar sakta hoon 🚀
arey bhenchode , ek sath same file mai likh na yaar

Hello, Master Ray ⚡
Samajh gaya — ek hi continuous README file, clean, no breaks, no extra explanation. Copy–paste ready 👇

# 📱 PhonePe MERN Clone (Backend Only)

A simple, easy-to-understand Backend for a PhonePe clone project. This system is heavily commented and uses beginner-friendly architectures while simulating a real-world FinTech application environment.

---

## 🌟 Full Feature Set

### 1. User Authentication
- Strict JWT-based Register and Login system.

### 2. Dynamic UPI IDs
- Newly registered users automatically receive a unique UPI tag (e.g., saurabh354@phonepe).

### 3. Strict MPIN System
- All outbound transactions enforce a robust 4-digit MPIN verification layer.

### 4. Flexible Peer-to-Peer Transfers
- Send money using:
  - 10-digit Phone Number  
  - Assigned UPI ID  

### 5. Wallet Top-Up
- Simulate direct bank transfers by adding deposits into a user's wallet.

### 6. Utility Bill Payments
- Mock endpoints for:
  - Mobile Data recharge  
  - Electricity Bills  
- Deducts wallet balance and logs BILL_PAY history.

### 7. Detailed Transaction Records
- Includes:
  - Deposits  
  - Withdrawals  
  - Utility bills  
  - Transfers  
- All mapped to the logged-in user.

### 8. Swagger User Interface
- Auto-generated documentation UI for all endpoints.

### 9. Interactive Postman Library
- Pre-configured collection with auto-saving token setup.

---

## 🛠 Tech Stack Used

- NodeJS & ExpressJS  
- MongoDB with Mongoose ORM  
- BcryptJS (Password & MPIN hashing)  
- JSON Web Token (JWT)  
- Swagger UI  

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
2. Configure Environment Variables

Create a .env file in root:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/phonepe-clone
JWT_SECRET=super_secret_key_change_in_production

(If using Mongo Atlas, replace the URI with your cloud connection string)

3. Generate Swagger Document
npm run swagger
4. Seed Dummy Data (Highly Recommended)
npm run seed
Seeded Users
amit@example.com

Phone: 9876543210 | UPI: amit123@phonepe | Balance: 5000
priya@example.com

Phone: 9876543211 | UPI: priya456@phonepe | Balance: 3000
rahul@example.com

Phone: 9876543212 | UPI: rahul789@phonepe | Balance: 1500
neha@example.com

Phone: 9876543213 | UPI: neha012@phonepe | Balance: 8000
Global Credentials
Password: password123
MPIN: 1234
5. Run the Server

Production

npm start

Development

npm run dev

Server runs at:
http://localhost:5000

📖 API Endpoints
Auth Routes (/api/auth)
POST /register
Register user and generate UPI
POST /login
Validate credentials and return token
GET /profile
Get user info and MPIN status
POST /setup-mpin
Set 4-digit MPIN (Requires Token)
Transactions (/api/transactions)
POST /send
Send money

Request Body:

{
  "receiverIdentifier": "phone or upi",
  "amount": 100,
  "mpin": "1234"
}
GET /history
Get transaction history
Wallet (/api/wallet)
POST /add-money
Add balance
POST /pay-bill
Pay bills

Request Body:

{
  "billerName": "electricity",
  "amount": 500,
  "mpin": "1234"
}
🔍 API Testing
Swagger UI

Visit:
http://localhost:5000/api-docs

Postman Setup
Open Postman
Import postman_collection.json
Run Login API
Token auto-saves in {{token}}
Use other APIs directly (no manual token needed)