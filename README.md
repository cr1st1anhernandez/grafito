# firefox

Mi configuración de Firefox: tema propio (`userChrome.css`) con fondo acrílico de Windows, selector de colores y `user.js`.

## Instalación

1. Abre `about:support` → **Carpeta de perfil** → *Abrir carpeta*.
2. Copia la carpeta `chrome/` y el archivo `user.js` dentro del perfil.
3. Reinicia Firefox.

`user.js` ya activa `toolkit.legacyUserProfileCustomizations.stylesheets`, así que el tema carga sin tocar `about:config`.

## Selector de colores

En `about:config` crea un booleano `tema.<azul|morado|verde>.<1-3>` en `true` (por defecto: azul 1).
