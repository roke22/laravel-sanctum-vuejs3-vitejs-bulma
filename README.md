# Laravel 9 + Sanctum + Vuejs 3 + TS + Vite + Bulma.io

## How to install?
    1. Clone the project
    2. In root folder run "composer install"
    3. In "public-dev" folder run "npm install"
    4. In "public-dev" folder run "npm run dev" to start develpment server or 
       "npm run build" to build the frontend in "public" folder

## Views

    You have a unique view where you can:
        - Log in: Use the POST "/api/login" route and the 
          "app\Http\Controllers\Auth\LoginController" with "login" method
        - Get User: Protected route that show the information about the user, 
          use the GET "/api/user" route.
        - Log out: Use the GET "/api/logout" route to logout with the 
          "app\Http\Controllers\Auth\LoginController" with "logout" method

## What packages have been used?
## Backend
### Laravel 9 https://laravel.com/
    PHP Framework that made easy the development
### Laravel Sanctum https://laravel.com/docs/9.x/sanctum

    Laravel Sanctum provides a featherweight authentication system for SPAs 
    (single page applications), mobile applications, and simple, token based APIs
    
## Frontend

### Vite https://vitejs.dev/
    Development environment that allows us to see the changes we make in the frontend in real time,
    among many other things.

### Vuejs 3 https://vuejs.org/
    Vuejs 3 Javascript Framework

## What have we done to make it work?

### Backend
    1. Install laravel 9 and laravel sanctum
    
    2. We configure sanctum as indicated in https://laravel.com/docs/9.x/sanctum#spa-authentication
    
    3. Instead of modifying the sanctum config file, we add the SANCTUM_STATEFUL_DOMAINS variable to
       the env to have greater visibility
    
    4. We modify in the env 
            SESSION_DRIVER=cookie
            SESSION_DOMAIN=.domain.com
            SANCTUM_STATEFUL_DOMAINS=your.domain.com:8000,your.domain.com

       In SANCTUM_STATEFUL_DOMAINS we put both because Vitejs use the port 8000 for frontend 
       development so we ensure that both are trusted

### Frontend
    1. Install vitejs with the command:
        npm create vite@latest public-dev --template vue

    2. Install vue-router with the command "npm install vue-router@4 --save"
       Ahora importamos vue-router en el fichero "public-dev/src/main.ts"

    3. We install fontawesome with the commands:
        npm i --save @fortawesome/fontawesome-svg-core
        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/free-regular-svg-icons\n
        npm i --save @fortawesome/free-brands-svg-icons
        npm i --save @fortawesome/vue-fontawesome@latest-3

       Now we import fontawesome in the file "public-dev/src/main.ts"
    
    4. Install axios for api requests with the command "npm install axios --save"
    
        We import axios by creating the file "public-dev/src/plugins/api.ts" which we then 
        import into "/public-dev/src/main.ts"

    5. We include bulma.io, in the folder "public-dev/src/assets" we are going to copy the 
       file bulma.css and bulma.css.map and import the file in "public-dev/src/main.ts" 
       (https://github.com/jgthms/bulma/tree/master/css)

    6. To avoid csrf token errors and unwritable cookies we are going to configure the vitejs 
       development environment to use the same domain as the backend.

       For this we will modify the file "public-dev/vite.config.ts", all the modifications 
       have been commented to understand them

# SPANISH

# Laravel 9 + Sanctum + Vuejs 3 + TS + Vite + Bulma.io 

## ¿Como lo instalo?
    1. Clona el proyecto
    2. En el directorio raiz ejecuta "composer install"
    3. En la carpeta "public-dev" ejecuta "npm install"
    4. En la carpeta "public-dev" ejecuta "npm run dev" para levantar el servidor 
       de desarrollo o "npm run build" para hacer el build en la carpeta raiz "public" 

## Vistas
    Tienes una unica vista en la que puedes:
        - Log in: Usa el metodo POST de la ruta "/api/login" que usa el controlador
          "app\Http\Controllers\Auth\LoginController" con el metodo "login"
        - Obtener usuario: Es una ruta protegida que usa el metodo GET de la ruta 
          "/api/user" para obtener la informacion del usuario
        - Log out: Usa el metodo GET de la ruta "/api/logout" que usa el controlador
          "app\Http\Controllers\Auth\LoginController" con el metodo "logout"

## ¿ Que paquetes se han utilizado ?
## Backend
### Laravel 9 https://laravel.com/
    PHP Framework que nos facilitara el desarrollo de nuestro backend
### Laravel Sanctum https://laravel.com/docs/9.x/sanctum

    Paquete que gestiona los tokens, sesión basada en cookie y CSRF que nos ayudara a 
    gestionar la autenticación
    
## Frontend

### Vite https://vitejs.dev/
    Entorno de desarrollo que nos permite ver los cambios que hacemos en el frontend en 
    tiempo real entre otras muchas cosas.

### Vuejs 3 https://vuejs.org/
    Vuejs 3 Javascript Framework

## ¿Que hemos hecho para hacerlo funcionar?

### Backend
    1. Instalar laravel 9 y laravel sanctum
    
    2. Configuramos sanctum tal y como indican en 
       https://laravel.com/docs/9.x/sanctum#spa-authentication 
    
    3. En lugar de modificar el fichero config de sanctum añadimos en el env la variable 
       SANCTUM_STATEFUL_DOMAINS para tener mayor visibilidad
    
    4. Modificamos en el env 
            SESSION_DRIVER=cookie
            SESSION_DOMAIN=.domain.com
            SANCTUM_STATEFUL_DOMAINS=your.domain.com:8000,your.domain.com

       En SANCTUM_STATEFUL_DOMAINS ponemos ambos porque Vitejs use el puerto 8000 para el 
       desarrollo del frontend asi nos aseguramos que funcionan

### Frontend
    1. Instalamos vitejs con el comando: 
        npm create vite@latest public-dev --template vue

    2. Instalamos vue-router con el comando "npm install vue-router@4 --save"
       Ahora importamos vue-router en el fichero "public-dev/src/main.ts"

    3. Instalamos fontawesome con los comandos:
        npm i --save @fortawesome/fontawesome-svg-core
        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/free-regular-svg-icons\n
        npm i --save @fortawesome/free-brands-svg-icons
        npm i --save @fortawesome/vue-fontawesome@latest-3

       Ahora importamos fontawesome en el fichero "public-dev/src/main.ts"
    
    4. Instalar axios para las peticiones a la api con el comando 
        "npm install axios --save"
    
        Importamos axios creando el fichero "public-dev/src/plugins/api.ts" que luego 
        importamos en "/public-dev/src/main.ts"

    5. Incluimos bulma.io, en la carpeta "public-dev/src/assets" vamos a copiar el fichero 
       bulma.css y bulma.css.map e importamos el fichero en "public-dev/src/main.ts" 
       (https://github.com/jgthms/bulma/tree/master/css)

    6. Para evitar errores de csrf token y cookies que no pueden escribirse vamos a configurar 
       el entorno de desarrollo de vitejs para usar el mismo dominio que el backend.

       Para ello modificaremos el fichero "public-dev/vite.config.ts", todas las modificaciones
       han sido comentadas para comprenderlas
