How to run (local with docker-compose)
1. Copy .env.example -> .env, set MONGO_URI to mongodb://mongo:27017/learnDB if using the included mongo service.
2. docker-compose up --build
3. Backend API will be exposed on http://localhost:5000
4. For production, use a managed MongoDB Atlas URI and set MONGO_URI accordingly. Remove the local mongo service.
