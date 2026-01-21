# Azure AI Intelligent Search Application

🚀 **Live Demo:** [https://azure-intelligent-search-applicatio.vercel.app/](https://azure-intelligent-search-applicatio.vercel.app/)

A powerful, intelligent search application built with **Azure AI Search**, allowing users to query company policies and documents using natural language. This project demonstrates a full-stack integration of a modern frontend with a robust Node.js backend connected to Azure's cognitive services.

## ✨ Features

*   **Semantic Search**: Understands user intent beyond simple keyword matching using Azure AI.
*   **Instant Results**: Fast and relevant document retrieval.
*   **Modern UI**: Clean, responsive interface with a gradient design and smooth interactions.
*   **"Enter" to Search**: optimized user experience with keyboard support.
*   **Secure Backend**: Backend proxy to securely handle API keys and requests.

## 🛠️ Tech Stack

*   **Frontend**: HTML, CSS (Custom Gradient Design), JavaScript
*   **Backend**: Node.js, Express.js
*   **AI Service**: Azure AI Search
*   **Deployment**: Vercel (Frontend) + Render (Backend)

## 🚀 Setup & Installation

### Prerequisites
*   Node.js installed
*   Azure AI Search Service setup (Endpoint, Index, and API Key)

### Local Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rajesh-potharla/azure-intelligent-search-application.git
    cd azure-intelligent-search-application
    ```

2.  **Setup Backend**
    ```bash
    cd backend
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the `backend` folder:
    ```env
    AZURE_SEARCH_ENDPOINT=your_endpoint_here
    AZURE_SEARCH_INDEX=your_index_name
    AZURE_SEARCH_API_KEY=your_api_key
    PORT=3000
    ```

4.  **Run the Application**
    ```bash
    # From the root directory
    npm start
    ```
    The backend will run on `http://localhost:3000`.

5.  **Frontend Setup**
    *   Open `frontend/index.html`.
    *   Ensure `API_URL` is set to `http://localhost:3000` for local testing.
    *   Open `index.html` in your browser.

## 📦 Deployment

*   **Frontend**: [Vercel](https://vercel.com/)
*   **Backend**: [Render](https://render.com/)

---
*Built with ❤️ by Rajesh Potharla*