# 🐳 Secure Code Runner in Docker (Python & JavaScript)

Run Python & JavaScript code in secure Docker containers.  
Simple setup for isolated, reproducible execution.

**🔗 GitHub Repo:** [docker-code-runner](https://github.com/SyedShamaan2000/docker-code-runner.git)

---

## ✨ Features

-   🔒 Secure, isolated execution in Docker containers
-   ⚙️ Pre-configured for Python & Node.js
-   🔁 Easily extensible to other languages
-   🚀 Simple setup & usage
-   🤝 Contributions welcome!

---

## 📦 Requirements

-   [Docker](https://docs.docker.com/get-docker/) installed

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/SyedShamaan2000/docker-code-runner.git
cd docker-code-runner

# Build Docker containers
docker-compose build

# Start the containers
docker-compose up
```

---

## 🐍 Run Python Code

```bash
docker exec -i python-runner python3 <<EOF
print("Hello from Python!")
EOF
```

---

## 📜 Run JavaScript Code

```bash
docker exec -i node-runner node <<EOF
console.log("Hello from Node.js!");
EOF
```

---

## ⚙️ Add More Languages

1. Create a new folder (e.g., `ruby/`)
2. Add a `Dockerfile` for that language
3. Update `docker-compose.yml` with a new service
4. Rebuild with `docker-compose build`

---

## 🧪 Use Cases

-   Secure code execution
-   Dev/testing environments
-   CI/CD runners
-   Code sandboxing for tutorials

---

## 🙌 Contributing

Pull requests are welcome!  
Please fork the repo, make changes, and submit a PR.
