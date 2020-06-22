<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

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
3. Instalar el paquete Sanctum de laravel https://laravel.com/docs/7.x/sanctum
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

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- [UserInsights](https://userinsights.com)
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)
- [Invoice Ninja](https://www.invoiceninja.com)
- [iMi digital](https://www.imi-digital.de/)
- [Earthlink](https://www.earthlink.ro/)
- [Steadfast Collective](https://steadfastcollective.com/)
- [We Are The Robots Inc.](https://watr.mx/)
- [Understand.io](https://www.understand.io/)
- [Abdel Elrafa](https://abdelelrafa.com)
- [Hyper Host](https://hyper.host)
- [Appoly](https://www.appoly.co.uk)
- [OP.GG](https://op.gg)
- [云软科技](http://www.yunruan.ltd/)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
