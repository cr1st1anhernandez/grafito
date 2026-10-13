# firefox

Mi configuración de Firefox: tema propio (`userChrome.css`) con fondo acrílico de Windows, selector de colores y `user.js`.

## Instalación

1. Abre `about:support` → **Carpeta de perfil** → *Abrir carpeta*.
2. Copia la carpeta `chrome/` y el archivo `user.js` dentro del perfil.
3. Reinicia Firefox.

`user.js` ya activa `toolkit.legacyUserProfileCustomizations.stylesheets`, así que el tema carga sin tocar `about:config`.

## Selector de colores

En `about:config` crea un booleano `tema.<azul|morado|verde>.<1-3>` en `true` (por defecto: azul 1).

## Animaciones

Todas usan solo `transform`/`opacity` y se apagan con el interruptor de Windows *Efectos de animación* (`prefers-reduced-motion`); `user.js` las fuerza activas con `ui.prefersReducedMotion = 0` (bórralo si quieres que Windows mande).

- **Pestañas:** entrada con fade, hover con elevación, ✕ solo al pasar el mouse, línea de acento bajo la pestaña activa, barra de carga animada, rebote + brillo del icono de audio.
- **Barra de direcciones:** brillo de acento al enfocar, resultados en cascada.
- **Menús y paneles:** los paneles (☰, descargas, extensiones) caen y escalan suavemente; submenús, barra de menús y carpetas de marcadores aparecen con fade. Los menús contextuales de primer nivel no se pueden animar con CSS.
- **Contenido:** fundido suave al cambiar de pestaña.
- **Selector de colores:** el cambio de tono se funde en 0.5 s.
- **`user.js`:** scroll suave con física MSD (`mousewheel.default.delta_multiplier_y` ajusta la velocidad) y fundido al entrar/salir de pantalla completa.
