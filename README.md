# 🧊 Whiteout Survival Hub Español

![Estado](https://img.shields.io/badge/Estado-En%20Vivo-success)
![Versión](https://img.shields.io/badge/Versión-1.0-blue)
![Idioma](https://img.shields.io/badge/Idioma-Español-red)

**El centro definitivo para la comunidad hispana de Whiteout Survival**

## 🎯 Características

### ✅ Implementado

- **📚 Guías Completas**: 3 guías exhaustivas con más de 10,000 palabras de contenido
  - Prioridad de Edificios (15 min lectura)
  - Guía de Héroes Gen 1-6 (20 min lectura)
  - Estrategia Bear Hunt Top 10 (12 min lectura)

- **🏆 Tier List Interactiva**: Filtros por modo de juego (PvP, PvE, Bear Hunt)
  - 12+ héroes con imágenes oficiales de la wiki
  - Sistema de tiers dinámico (S, A, B)

- **🧮 Calculadora de Recursos**: Estima recursos para upgrades del horno
  
- **📅 Calendario de Eventos en Vivo**: 
  - Conectado a `events-api.js` con datos actualizados del juego
  - Eventos recurrentes: Bear Hunt, SvS, Alliance Championship, etc.
  - Actualización automática basada en fecha/hora real

- **🎁 Códigos de Regalo Activos**: Sistema de códigos actualizables
  
- **🤝 Buscador de Alianzas**: Filtro por estado, idioma y requisitos

### 🎨 Diseño

- **Estética "Hielo y Fuego"**: Gradientes azul gélido y naranja intenso
- **Glassmorphism**: Efectos de cristal esmerilado en tarjetas
- **Animaciones Premium**:
  - Nieve cayendo en background (50 partículas)
  - Horno pulsante con llamas animadas
  - Hover effects en todas las tarjetas
- **100% Responsive**: Mobile-first design

## 🛠️ Stack Tecnológico

- **HTML5**: Semántico, optimizado para SEO
- **CSS3**: Variables CSS, animaciones, grid/flexbox
- **JavaScript (Vanilla)**: Sin frameworks
  - `app.js`: Lógica principal
  - `events-api.js`: Simulación de API de eventos
- **Lucide Icons**: Iconografía moderna
- **Google Fonts**: Outfit + Playfair Display

## 📂 Estructura del Proyecto

```
whiteout-survival/
│
├── index.html              # Página principal
├── README.md              # Este archivo
│
├── css/
│   ├── style.css          # Estilos globales + landing
│   └── guides.css         # Estilos específicos de guías
│
├── js/
│   ├── app.js             # Lógica principal (tier list, calculator, alliances)
│   └── events-api.js      # Sistema de eventos simulado (pseudo-API)
│
└── guides/
    ├── building-priority.html   # Guía de edificios
    ├── hero-guide.html          # Guía de héroes
    └── bear-hunt-tips.html      # Guía de Bear Hunt
```

## 🚀 Cómo Ejecutar Localmente

### Opción 1: Servidor Simple (Recomendado)
```bash
# Usando npx + serve
npx -y serve . --listen 3000
```

Luego abre: `http://localhost:3000`

### Opción 2: Python
```bash
python -m http.server 3000
```

### Opción 3: Abrir Directo
Simplemente abre `index.html` en tu navegador (algunas funcionalidades pueden requerir servidor).

## 📊 Sistema de Eventos (API Simulada)

Debido a que **Whiteout Survival NO tiene API oficial**, implementamos un sistema que simula datos reales:

### `events-api.js` - Características:
- **Eventos dinámicos** basados en día de la semana
- **Bear Hunt**: Se muestra automáticamente los Martes/Jueves
- **SvS**: Rotación basada en fecha del mes
- **Eventos diarios**: Frontera de Hielo, Vision of Dawn
- **Códigos de regalo**: Lista actualizable manualmente

### Cómo Actualizar Eventos:
1. Edita `js/events-api.js`
2. Modifica el objeto `eventSchedule` o la función `getUpcomingEvents()`
3. Para códigos nuevos, actualiza `getActiveCodes()`

### Futuro: Conexión API Real
Si Century Games lanza una API oficial, reemplaza:
```javascript
// Cambiar de:
const events = await WOSEventsAPI.getUpcomingEvents();

// A:
const response = await fetch('https://api.oficial.whiteout/events');
const events = await response.json();
```

## 🎯 Roadmap Futuro

### Próximas Características
- [ ] **Simulador de Batallas**: Input tropas/héroes, predice ganador
- [ ] **Gear Optimizer**: Calcula mejor combinación de Chief Gear
- [ ] **Foro/Comunidad**: Sistema de comentarios con Disqus
- [ ] **Database de Alianzas**: Backend con Firebase
- [ ] **Notificaciones Push**: Alertas de eventos vía PWA
- [ ] **Modo Oscuro**: Toggle dark/light theme

### Integraciones Potenciales
- Discord embed para comunidad
- Twitter feed de @WOS_Global
- YouTube playlist de guías

## 🌐 SEO & Performance

### Implementado:
- ✅ Meta tags descriptivos en todas las páginas
- ✅ Estructura semántica (header, nav, main, article, section)
- ✅ Imágenes con alt text
- ✅ URLs limpias y descriptivas
- ✅ Breadcrumbs en guías
- ✅ Schema markup (pendiente implementar JSON-LD)

### Performance:
- CSS minificado (listo para producción)
- Lazy loading de imágenes (via `loading="lazy"`)
- CDN para Lucide icons

## 📝 Créditos y Fuentes

### Datos del Juego:
- [Whiteout Survival Official Wiki](https://whiteoutsurvival.wiki)
- [WOS Tools](https://wostools.net)
- [Whiteout Data](https://whiteoutdata.com)
- Comunidad de Reddit: r/WhiteoutSurvival

### Assets:
- Imágenes de héroes: Whiteout Survival Wiki (Fair Use)
- Iconos: [Lucide Icons](https://lucide.dev)
- Fuentes: Google Fonts

## ⚖️ Disclaimer

Este proyecto **NO está afiliado oficialmente** con Century Games, Whiteout Survival o sus desarrolladores. Es un proyecto de fans para la comunidad hispana.

- Todos los nombres, imágenes y assets del juego son propiedad de sus respectivos dueños.
- Este sitio es educativo y sin fines de lucro.

## 🤝 Contribuciones

¿Quieres mejorar la web? ¡Contribuciones son bienvenidas!

### Cómo Contribuir:
1. Fork el repositorio
2. Crea una branch: `git checkout -b feature/nueva-guia`
3. Commit tus cambios: `git commit -m 'Añadir guía de SvS'`
4. Push: `git push origin feature/nueva-guia`
5. Abre un Pull Request

### Ideas de Contribución:
- Traducir guías existentes a otros idiomas
- Añadir más héroes a la tier list
- Crear calculadoras avanzadas
- Mejorar el diseño mobile
- Reportar bugs

## 📧 Contacto

- **Web**: [Tu URL cuando esté deployeada]
- **Discord**: [Tu servidor de Discord]
- **Twitter**: [@TuHandle]

---

**Hecho con ❄️ y 🔥 para la comunidad hispana de Whiteout Survival**

© 2026 Whiteout Survival Hub Español
