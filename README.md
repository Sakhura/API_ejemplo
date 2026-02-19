# 🌐 Demo Fetch API - Usuarios desde API Pública

Proyecto demostrativo que muestra cómo consumir una API REST pública usando JavaScript moderno, comparando dos enfoques: **Promesas con `.then()`** y **async/await**.

---

## 📁 Estructura del Proyecto

```
demo-fetch-api/
├── index.html   → Interfaz de usuario
├── app.js       → Lógica JavaScript (Fetch API)
├── style.css    → Estilos de las tarjetas
└── README.md    → Este archivo
```

---

## 🚀 ¿Cómo ejecutar?

1. Descarga o clona los archivos del proyecto.
2. Abre `index.html` directamente en tu navegador (doble clic).
3. Haz clic en cualquiera de los dos botones para cargar los usuarios.

> ⚠️ Necesitas conexión a internet ya que se consulta una API externa.

---

## 🔧 Funcionalidades

| Botón | Método | Descripción |
|---|---|---|
| **Cargar con .then()** | Promesas encadenadas | Usa `.then()` y `.catch()` para manejar la respuesta |
| **Cargar con async/await** | Sintaxis moderna | Usa `async/await` con `try/catch` para el mismo resultado |

Ambos botones llaman a la misma API y muestran el mismo resultado. El objetivo es **comparar los dos estilos de código**.

---

## 🌍 API Utilizada

**JSONPlaceholder** → `https://jsonplaceholder.typicode.com/users`

Es una API pública gratuita para pruebas. Devuelve 10 usuarios ficticios con los siguientes datos:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "address": { "city": "Gwenborough" },
  "website": "hildegard.org"
}
```

---

## 🧠 Conceptos que aprenderás

- **Fetch API**: forma moderna de hacer peticiones HTTP en JavaScript.
- **Promesas (Promises)**: objetos que representan una operación asíncrona.
- **`.then()` / `.catch()`**: métodos para manejar el resultado o error de una promesa.
- **`async/await`**: sintaxis más legible para trabajar con promesas.
- **Manipulación del DOM**: creación dinámica de tarjetas con `createElement`.
- **Manejo de errores**: uso de `throw new Error()` y captura con `.catch()` / `try-catch`.

---

## 🐛 Bug corregido

| Archivo | Línea | Error | Corrección |
|---|---|---|---|
| `app.js` | `mostrarUsuarios()` | `usuarios.foreach(...)` | `usuarios.forEach(...)` |

> JavaScript **distingue mayúsculas y minúsculas**. El método correcto del array es `forEach` con F mayúscula. Escribirlo en minúscula lanzaba un `TypeError` silencioso que impedía mostrar las tarjetas.

---

## 📌 Flujo del código

```
[Click en botón]
      ↓
fetch(URL)  →  Petición HTTP GET
      ↓
.then() / await  →  Verificar respuesta (respuesta.ok)
      ↓
.json()  →  Convertir respuesta a objeto JavaScript
      ↓
mostrarUsuarios()  →  Crear tarjetas en el DOM
      ↓
[Tarjetas visibles en pantalla]
```

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript ES6+ (Fetch API, Promises, async/await)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (API de prueba gratuita)