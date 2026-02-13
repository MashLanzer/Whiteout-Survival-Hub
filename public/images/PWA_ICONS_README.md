# PWA Icons Required

Para que la PWA funcione completamente, necesitas crear los siguientes iconos en la carpeta `/images/`:

## Iconos Requeridos:

### App Icons (Critical)
- `icon-72x72.png` - 72x72px
- `icon-96x96.png` - 96x96px
- `icon-128x128.png` - 128x128px
- `icon-144x144.png` - 144x144px
- `icon-152x152.png` - 152x152px
- `icon-192x192.png` - 192x192px ⭐ (Más importante)
- `icon-384x384.png` - 384x384px
- `icon-512x512.png` - 512x512px ⭐ (Más importante)

### Otros Iconos
- `badge-72x72.png` - Badge para notificaciones
- `shortcut-heroes.png` - 96x96px - Icono para shortcut de héroes
- `shortcut-calc.png` - 96x96px - Icono para shortcut de calculadoras
- `shortcut-guides.png` - 96x96px - Icono para shortcut de guías
- `shortcut-events.png` - 96x96px - Icono para shortcut de eventos

### Screenshots (Opcional, para mejor app store display)
- `screenshot1.png` - 1280x720px - Screenshot wide del hub
- `screenshot2.png` - 750x1334px - Screenshot móvil de tier list

## Diseño Recomendado:

**Concepto:** Logo de "Whiteout Survival Hub"
- Background: Dark navy/black (#0d1117)
- Primary element: Ice crystal en cyan (#00d2ff)
- Secondary element: Flame effects en orange (#ff8c00)
- Style: Moderno, limpio, game icon aesthetic

## Herramientas para Crear Iconos:

1. **Canva Pro** - Plantillas de app icons
2. **Figma** - Diseño custom
3. **PWA Asset Generator** - https://github.com/elegantapp/pwa-asset-generator
   ```bash
   npx pwa-asset-generator icon-source.png ./images --icon-only
   ```

## Placeholder Temporal:

Por ahora, puedes usar un placeholder simple de color:
- Crea un cuadrado de 512x512px
- Background: Linear gradient de #00d2ff a #ff8c00
- Text: "WOS" en blanco centrado
- Exporta en todos los tamaños requeridos

La PWA funcionará sin iconos pero mostrará el icono por defecto del navegador.
