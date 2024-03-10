
## Tecnologías Utilizadas

- React JS
- Redux (para manejar el estado de los usuarios)
- Firebase (para guardar la información de los usuarios y el contenido)
- React Router (para la navegación dentro de la aplicación)
- TypeScript (para una tipificación más sólida)
- Bootstrap (para el diseño responsive)
- API de Movie Database (para obtener información sobre películas y series)



## Componentes Principales

### 1. Componente 'Login'

Este componente se encarga de autenticar a los usuarios. Implementa la lógica de validación de campos vacíos y caracteres permitidos para el campo de email. Se ha integrado Firebase para el almacenamiento de usuarios y autenticación.

### 2. Componente 'Home'

El componente 'Home' muestra 5 cards que representan las categorías a las cuales el usuario logueado tendrá acceso. También incluye un navbar básico para facilitar la navegación. Las categorías y los enlaces en el navbar se obtienen dinámicamente según la autenticación del usuario y la información proporcionada por la API de Movie Database.

### 3. Componente 'contentCategory'

Este componente muestra todo el contenido multimedia relacionado con la categoría seleccionada desde el componente 'Home'. Utiliza la información de la API de Movie Database para mostrar el contenido de manera organizada y fácil de navegar.

### 4. Componente 'contentDetails'

Este componente permite visualizar el contenido multimedia seleccionado desde el componente 'contentCategory', junto con su respectiva sinopsis o resumen. Utiliza la información de la API de Movie Database para mostrar detalles específicos del contenido seleccionado.

## Estructura del Proyecto

El proyecto está organizado de manera modular siguiendo las mejores prácticas de desarrollo. Cada componente está separado en su propio archivo para facilitar la escalabilidad y el mantenimiento del código.



Para instalar y ejecutar esta aplicación en tu máquina local, sigue estos pasos:

1. Instala las dependencias utilizando `yarn`..
2. Inicia la aplicación utilizando `yarn dev `.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
