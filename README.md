# 🚀 Node.js App with CI/CD Pipeline (GitHub Actions + DockerHub)

This is a sample Node.js web application integrated with a **CI/CD pipeline** using **GitHub Actions** and **DockerHub**.

Whenever code is pushed to the `main` branch:
- The app is automatically tested, built, dockerized
- The image is pushed to DockerHub

---

## 🛠 Tech Stack

- Node.js
- Express.js
- GitHub Actions (CI/CD)
- Docker + DockerHub

---

## 🔁 CI/CD Workflow

Defined in `.github/workflows/main.yml`

### Trigger:
- Push to `main` branch

### Jobs:
1. ✅ Checkout the code  
2. 🧪 Install dependencies and run tests  
3. 🐳 Log in to DockerHub  
4. 📦 Build Docker image  
5. 🚀 Push image to DockerHub

---

## 🔐 GitHub Secrets Required

| Secret Name        | Description                       |
|--------------------|-----------------------------------|
| `DOCKER_USERNAME`  | Your DockerHub username           |
| `DOCKER_PASSWORD`  | Your DockerHub password or token  |

> 💡 Add these under GitHub Repo → Settings → Secrets and Variables → Actions → New Repository Secret

---

## 🐳 Docker Commands

To test locally:

```bash
# Add Commit Code 
git add .
git commit -m "Initial commit with Node app and CI/CD"

# Push Code 
git push -u origin main


# Build Docker image
docker build -t nodejs-demo-app .

# Run container on port 3000
docker run -p 3000:3000 nodejs-demo-app
