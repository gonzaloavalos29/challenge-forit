# Challenge Full Stack - Task Manager

Proyecto desarrollado para el proceso de selección de la Academia FORMAR. Se trata de una aplicación de gestión de tareas que permite realizar operaciones CRUD conectando un frontend en React con un servidor en Node.js.

## 🛠️ Tecnologías
- **Backend:** Node.js, Express, CORS.
- **Frontend:** React (Vite), CSS3, Fetch API.
- **Herramientas:** Git para el control de versiones.

## ⚙️ Configuración del Proyecto

### 1. Clonar y preparar carpetas
Primero, clonar el repositorio y asegurarse de instalar las dependencias en ambos directorios:

**Para el Backend:**
cd backend
npm install

**Para el Frontend:**
cd frontend
npm install

### 2. Variables de Entorno
Crea un archivo .env en cada carpeta si no existen:

En backend/.env: PORT=3000

En frontend/.env: VITE_API_URL=http://localhost:3000/api

🚀 Cómo correr la App
Es necesario tener dos terminales abiertas al mismo tiempo:

Terminal 1 (Servidor API)
Desde la carpeta backend:
Bash
node index.js

Terminal 2 (Cliente React)
Desde la carpeta frontend:
Bash
npm.cmd run dev

(Nota: En Windows, si el comando npm falla por políticas de ejecución, usar npm.cmd).
Una vez iniciados, abrir el navegador en: http://localhost:5173

📝 Notas sobre el Desarrollo
Se estructuró el frontend en componentes reutilizables (TaskForm, TaskList, TaskItem).

Se implementó el manejo de estados con useState y useEffect para asegurar la sincronía con la API.

Se configuró el middleware cors en el servidor para permitir la comunicación entre puertos.