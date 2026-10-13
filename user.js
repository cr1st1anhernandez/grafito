user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("widget.windows.mica", true);
user_pref("widget.windows.mica.toplevel-backdrop", 2);
user_pref("widget.windows.mica.popups", 1);
// No ofrecer guardar contraseñas
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
// No ofrecer traducir sitios
user_pref("browser.translations.enable", false);
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.panelShown", true);

// Sin aviso "X está ahora en pantalla completa"
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.warning.delay", -1);
// Mostrar URL completa con https://
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.trimHttps", false);

// Animaciones del navegador siempre activas (aunque Windows tenga "Efectos de animación" apagado)
user_pref("toolkit.cosmeticAnimations.enabled", true);
user_pref("ui.prefersReducedMotion", 0);
// Scroll suave con física (MSD)
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 250);
user_pref("apz.overscroll.enabled", true);
// Fundido al entrar/salir de pantalla completa
user_pref("full-screen-api.transition-duration.enter", "200 200");
user_pref("full-screen-api.transition-duration.leave", "200 200");
// Monitor a 72 Hz
user_pref("layout.frame_rate", 72);
// Sin ventana gris provisional al arrancar (no carga userChrome.css ni el tinte)
user_pref("browser.startup.blankWindow", false);
