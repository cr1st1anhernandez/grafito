# firefox

Mi configuración de Firefox: tema propio (`userChrome.css`) en color Grafito y `user.js`.

## Instalación

1. Abre `about:support` → **Carpeta de perfil** → *Abrir carpeta*.
2. Copia la carpeta `chrome/` y el archivo `user.js` dentro del perfil.
3. En **Ajustes → General → Apariencia** elige el tema **Oscuro** de Firefox.
4. Reinicia Firefox dos veces (la segunda ya muestra la pantalla de carga).

`user.js` ya activa `toolkit.legacyUserProfileCustomizations.stylesheets`, así que el tema carga sin tocar `about:config`.

## Arranque sin destello gris

El fondo acrílico/Mica de Windows (`widget.windows.mica`) está apagado: con cualquiera de los dos, Windows enseña el fondo crudo (un gris) antes de que Firefox dibuje su primer cuadro. Sin él, Firefox usa su pantalla de carga nativa (*skeleton UI*), que necesita `browser.startup.blankWindow = true` y un tema integrado (Predeterminado, Claro u Oscuro).

## Animaciones

Todas usan solo `transform`/`opacity` y se apagan con el interruptor de Windows *Efectos de animación* (`prefers-reduced-motion`); `user.js` las fuerza activas con `ui.prefersReducedMotion = 0` (bórralo si quieres que Windows mande).

- **Pestañas:** entrada con fade, hover con elevación, ✕ solo al pasar el mouse, barra de carga animada, brillo suave del icono de audio.
- **Barra de direcciones:** brillo de acento al enfocar, resultados en cascada.
- **Menús y paneles:** los paneles (☰, descargas, extensiones) caen y escalan suavemente; submenús, barra de menús y carpetas de marcadores aparecen con fade. Los menús contextuales de primer nivel no se pueden animar con CSS.
- **Contenido:** fundido suave al cambiar de pestaña.
- **`user.js`:** scroll suave con física MSD (`mousewheel.default.delta_multiplier_y` ajusta la velocidad), fundido al entrar/salir de pantalla completa y `layout.frame_rate = 72` (ajústalo a los Hz de tu monitor).
