## Laravel + sanctum + ui + Vuejs + Vuetify

Esta instalación de laravel tiene instalado en la carpeta de front-end vuejs y configurado para que se exporte su build a la carpeta public copiando el index.php original de laravel.

De esta forma estan completamente separados Laravel y Vuejs

La carpeta de front-end puedes tratarla como un proyecto de Vuejs independiente, de esta forma puedes separarla sin miedo de laravel para tener el front-end y backend en diferentes servidores y escalarlos por separado

## ¿Como hago funcionar Laravel + sanctum + ui + Vuejs + Vuetify?

1. Ejecuta en el directorio raiz los siguientes comandos:
```
        composer install
        npm install
        php artisan migrate
```
2. En el directorio front-end ejecuta los siguientes comandos:
```
        composer install
```
3. Para compilar las vistas en Vuejs y que se copie en la carpeta public ejecuta:
```
        npm run dev
```

## ¿Que se ha hecho para conseguir esto?

Si quieres hacerlo por tu cuenta aqui tienes una guia de como se ha conseguido instalar esta plantilla de laravel + sanctum + ui + vuejs + vuetifyjs

Puedes seguir todos los pasos o bien clonar este repositorio 

1. Instalar laravel
2. Editar el fichero de rutas web y añadir como unica ruta, esto hara que todas las peticiones web que no sean /api sean atendidas por Vuejs en lugar de laravel
```
    Route::any('/{any}', function () {
    try {
        $index = Storage::disk('website')->get('index.html');
        return $index;
    } catch (FileNotFoundException $exception) {
        return 'Missing front-end build';
    }
    })->where('any', '.*');
```
3. Instalar elpaquete Sanctum de laravel https://laravel.com/docs/7.x/sanctum
4. Añadir la variable SESSION_DOMAIN con el nombre del dominio para las cookies en el fichero .env
5. Añadir la variable SANCTUM_STATEFUL_DOMAINS con los nombres de dominio de confianza, si son varios se separan por comas
6. Cambiar en .env la variable 
```
        SESSION_DRIVER=cookie
```
7. Modificar el fichero config/cors.php para que la variable path sea:
```
        paths' => [
                'api/*',
                '/login',
                '/logout',
                '/sanctum/csrf-cookie'
            ]
```
8. Modificar el fichero config/cors.php
```     
        'supports_credentials' => true 
```

9. Modificar el fichero de rutas api.php para que quede con el siguiente codigo
```
        Route::post('login', 'Auth\LoginController@login');
        Route::post('logout', 'Auth\LoginController@logout')->name('logout');
        Route::post('register', 'Auth\RegisterController@register');
        Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
        Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

        Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
            return $request->user();
        });
```

10. Seguir el manual para la parte de vue de https://blog.codecourse.com/setting-up-laravel-sanctum-airlock-for-spa-authentication-with-vue/

11. Modificar en el fichero .env los datos necesarios y en el fichero 'front-end/src/auth.js' la url de tu endpoint al que haras las peticiones con vuejs. Recuerda que si quieres recibir el correo del reinicio de contraseña debes tener un servidor smtp valido configurado

12. Crear las vistas para utilizar las rutas creadas anteriormente a traves de la api y asi poder logear, registrar y recuperar cuentas

## ENGLISH VERSION

## Laravel + sanctum + ui + Vuejs + Vuetify

This laravel installation has vuejs installed in the front-end folder and configured so that its build is exported to the public folder by copying the original index.php of laravel.

In this way Laravel and Vuejs are completely separated

The front-end folder can be treated as a separate Vuejs project, this way you can separate it without fear from laravel to have the front-end and backend on different servers and scale them separately

## How do I make Laravel + sanctum + ui + Vuejs + Vuetify work?

1. Execute the following commands in the root directory:
```
        composer install
        npm install
        php artisan migrate
```
2. In the front-end directory run the following commands:
```
        composer install
```
3. To compile the views in Vuejs and copy them to the public folder, execute:
```
        npm run dev
```

## What has been done to achieve this?

If you want to do it on your own, here is a guide on how to install this template from laravel + sanctum + ui + vuejs + vuetifyjs

You can follow all the steps or clone this repository

1. Install laravel
2. Edit the web routes file and add as the only route, this will make all the web requests other than / api be served by Vuejs instead of laravel
```
    Route::any('/{any}', function () {
    try {
        $index = Storage::disk('website')->get('index.html');
        return $index;
    } catch (FileNotFoundException $exception) {
        return 'Missing front-end build';
    }
    })->where('any', '.*');
```
3. Install the laravel Sanctum package https://laravel.com/docs/7.x/sanctum
4. Add the SESSION_DOMAIN variable with the domain name for the cookies in the .env file
5. Add the variable SANCTUM_STATEFUL_DOMAINS with the trusted domain names, if there are several they are separated by commas
6. Change the variable in .env
```
        SESSION_DRIVER=cookie
```
7. Modify the config/cors.php file so that the path variable is:

```
        paths' => [
                'api/*',
                '/login',
                '/logout',
                '/sanctum/csrf-cookie'
            ]
```
8. Modify the config/cors.php file
```     
        'supports_credentials' => true 
```
9. Modify the routes file api.php so that it has the following code
```
        Route::post('login', 'Auth\LoginController@login');
        Route::post('logout', 'Auth\LoginController@logout')->name('logout');
        Route::post('register', 'Auth\RegisterController@register');
        Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
        Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

        Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
            return $request->user();
        });
```
10. Follow the manual for the vue part of https://blog.codecourse.com/setting-up-laravel-sanctum-airlock-for-spa-authentication-with-vue/

11. Modify the necessary data in the .env file and in the 'front-end / src / auth.js' file the url of your endpoint to which you will make the requests with vuejs. Remember that if you want to receive the password reset email you must have a valid smtp server configured

12. Create the views to use the routes previously created through the api and thus be able to log, register and recover accounts
