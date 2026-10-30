# 📋 Guía de Prompts Secuenciales para Claude AI - Proyecto QUBIT

Este documento contiene **5 prompts independientes y secuenciales** diseñados específicamente para que Claude implemente el frontend de **QUBIT** paso a paso, con precisión quirúrgica, sin adelantarse y sin generar código innecesario.

---

### Instrucciones de Uso para el Usuario:
1. Copia y pega **un solo prompt a la vez** en Claude.
2. Espera a que Claude genere el código correspondiente, pruébalo en el navegador (`npm run dev`) y asegúrate de que funcione sin errores.
3. Solo cuando el paso actual esté completo y verificado, pasa al siguiente prompt.

---

```markdown
<!-- COPIAR A PARTIR DE AQUÍ PARA EL PROMPT 1 -->
```

## PROMPT 1: Fundaciones, Mock Data, Estado del Carrito y Layout Global

### Contexto del Proyecto:
Estamos construyendo un catálogo web interactivo en **React + Vite + Tailwind CSS** para **QUBIT**, una marca lúdica de piezas y parches modulares tipo rompecabezas.
Ya tenemos configurado Vite, Tailwind v4, React Router y Lucide Icons.

### Objetivo de este paso:
Crear los datos iniciales simulados (mock data), el contexto global del carrito de compras (`CartContext`), los componentes del layout global (`Navbar`, `SubHeader`, `Footer`) y la configuración inicial de rutas en `App.jsx` con páginas temporales (placeholders).

### Archivos a crear o modificar:

1. **`src/data/products.js`**:
   - Crear un arreglo con **4 combos** de ejemplo:
     - Cada combo debe tener: `id` (1, 2, 3, 4), `name` (ej. "Combo Patch Alfa", "Combo Patch Beta", etc.), `description`, `price`, `images` (array con 4 ángulos o vistas simuladas con placeholders/SVGs o colores) y opciones de colores por defecto.
   - Crear un arreglo con **5 productos individuales**:
     - Cada uno debe tener: `id` (101 a 105), `name` (ej. "Módulo Individual Mini", "Módulo Cuadrado Soft", etc.), `price`, `image` (URL de placeholder amigable o SVG redondeado).

2. **`src/context/CartContext.jsx`**:
   - Crear un contexto de React con `useState` para gestionar:
     - `items`: arreglo de productos agregados al carrito (con sus selecciones de tipo y color).
     - `addToCart(product, options)`: agrega el item con un id único.
     - `removeFromCart(uniqueId)`: elimina un item.
     - `clearCart()`: vacía el carrito.
     - `totalItems`: cantidad total de productos en el carrito.
     - `isCartOpen` y `setIsCartOpen`: booleano para abrir/cerrar el drawer del carrito.
   - Exportar el hook personalizado `useCart()`.

3. **`src/components/layout/Navbar.jsx`**:
   - Barra superior fija o estática con fondo crema (`#FAF6F0`) y borde inferior suave:
     - **Izquierda**: Icono de menú hamburguesa (o tres puntos) e icono de lupa (búsqueda).
     - **Centro**: Logotipo interactivo "QUBIT" con cada letra estilizada en los colores de la marca (Q: violeta pastel `#A594C9`, U: coral `#E2847A`, B: mostaza `#E5B25D`, I: verde salvia `#7CA682`, T: azul `#6E94B2`). Al hacer clic, navega a `/` con `Link`.
     - **Derecha**: Icono de usuario (`User`) e icono de bolsa de compras (`ShoppingBag`) con una pequeña insignia (badge) que muestre `totalItems` usando `useCart()`. Al hacer clic en la bolsa, activa `setIsCartOpen(true)`.

4. **`src/components/layout/SubHeader.jsx`**:
   - Componente reutilizable para la barra de sección:
     - Fondo rosado empolvado (`#F6ECE8`), texto en mayúsculas centradas, tono bordó suave (`#8A5665`), tipografía redondeada y espaciado entre letras (`tracking-wider`).
     - Recibe la prop `title` (ej. "PRODUCTOS", "EVENTOS", "PRODUCTO - NOMBRE").

5. **`src/components/layout/Footer.jsx`**:
   - Barra inferior en verde salvia (`#8EAE8D`), con texto en blanco o verde oscuro suave, enlaces decorativos ("Inicio", "Combos", "Eventos", "Contacto") y copyright de Qubit.

6. **`src/App.jsx`**:
   - Configurar `BrowserRouter`, envolver con `CartProvider`, e incluir el `Navbar` arriba y el `Footer` abajo.
   - Configurar las rutas:
     - `/` -> `HomePage` (por ahora un `div` placeholder que diga "Home en construcción")
     - `/combos` -> `CombosPage` (placeholder)
     - `/combos/:id` -> `ComboDetailPage` (placeholder)
     - `/eventos` -> `EventsPage` (placeholder)

### ⚠️ REGLAS ESTRICTAS DE ALCANCE:
- **SOLO** implementa los archivos listados arriba.
- **NO** comiences a programar el contenido interno de la Home, ni el catálogo de combos, ni el configurador de producto todavía.
- Mantén las páginas como componentes simples con texto provisional para que el enrutamiento funcione sin errores.

---

```markdown
<!-- COPIAR A PARTIR DE AQUÍ PARA EL PROMPT 2 -->
```

## PROMPT 2: Página Principal (Home `/`)

### Contexto del Proyecto:
Ya tenemos el Layout global (`Navbar`, `SubHeader`, `Footer`), el `CartContext`, el archivo `products.js` y las rutas base funcionando en React.

### Objetivo de este paso:
Construir todas las secciones de la página principal (`HomePage.jsx`) siguiendo con fidelidad las imágenes de diseño de la marca QUBIT.

### Archivos a crear o modificar:

1. **`src/components/home/HeroSlider.jsx`**:
   - Slider / carrusel de novedades en la parte superior.
   - Contenedor rectangular con fondo celeste pastel suave (`#C8D7E3`), bordes redondeados (`rounded-3xl`).
   - Flechas de navegación izquierda y derecha estilizadas en dorado/mostaza cálido (`#E5B25D`).
   - Soporte para avanzar y retroceder entre 2 o 3 banners destacados simulados, con indicadores circulares en la parte inferior.

2. **`src/components/home/GiftCardBar.jsx`**:
   - Barra / botón interactivo para canje de Giftcards.
   - Diseño: silueta con bordes y pestañas que recuerdan a una pieza de rompecabezas en tono violeta/lila (`#8B68BA`).
   - Contiene un campo de texto (input) para ingresar el código y un botón de canje ("Canjear").
   - **Lógica de Redirección Automática**:
     - Al ingresar el código y presionar Enter o hacer clic en canjear:
       - Si el código es `GIFT1` o `COMBO1` ➔ Redirige con `useNavigate` a `/combos/1`
       - Si el código es `GIFT2` o `COMBO2` ➔ Redirige a `/combos/2`
       - Si el código es `GIFT3` o `COMBO3` ➔ Redirige a `/combos/3`
       - Si el código es `GIFT4` o `COMBO4` ➔ Redirige a `/combos/4`
       - Si el código es cualquier otro ➔ Muestra un mensaje amigable de error debajo del input: *"Código inválido. Prueba con COMBO1, COMBO2, COMBO3 o COMBO4"*.

3. **`src/components/home/CombosBanner.jsx`**:
   - Gran banner rectangular ilustrado y llamativo que invita a entrar a la sección de combos.
   - Marco perimetral decorado con estrellas y siluetas de piezas de rompecabezas en colores pastel.
   - Título central gigante en tipografía 3D "puffy": **"COMBOS"**.
   - Icono de cursor / mano que indica que es clickeable.
   - Efecto hover con escala suave (`hover:scale-[1.01] transition`).
   - Al hacer clic, navega a la ruta `/combos`.

4. **`src/components/home/IndividualGrid.jsx`**:
   - Sección que muestra **5 cards normales de producto** (no siluetas de rompecabezas, sino tarjetas estándar con bordes redondeados `rounded-2xl`, sombra suave y fondo blanco o marfil).
   - Cada tarjeta muestra la imagen del producto (usar los datos de `products.js`), el título del producto y la etiqueta "Individual".
   - **Comportamiento**: Son tarjetas de exhibición estática; **no tienen enlaces ni redirigen a ningún lado**.

5. **`src/components/home/ContactButton.jsx`** (o botón de contacto):
   - Botón circular celeste pastel centrado debajo de la grilla de productos individuales con la etiqueta "Contacto".
   - Al hacer clic, abre un modal sencillo con información de contacto (correo de soporte, redes y formulario rápido de mensaje).

6. **`src/components/home/EventsBanner.jsx`**:
   - En lugar de un slider, una **imagen grande destacada** (banner ancho con bordes redondeados `rounded-3xl` y fondo celeste suave) que representa la sección de eventos y "Quiénes Somos" con texto y fotos integradas.

7. **`src/pages/HomePage.jsx`**:
   - Ensamblar en orden vertical:
     1. `HeroSlider`
     2. `GiftCardBar`
     3. `CombosBanner`
     4. `IndividualGrid`
     5. Botón de Contacto (con su modal)
     6. `EventsBanner`

### ⚠️ REGLAS ESTRICTAS DE ALCANCE:
- **SOLO** implementa los componentes de la Home y actualiza `HomePage.jsx`.
- **NO** toques la página de combos (`/combos`) ni la de detalle de producto (`/combos/:id`).
- Asegúrate de que la redirección del GiftCardBar funcione exactamente con los códigos especificados hacia `/combos/1`, `/combos/2`, `/combos/3` y `/combos/4`.

---

```markdown
<!-- COPIAR A PARTIR DE AQUÍ PARA EL PROMPT 3 -->
```

## PROMPT 3: Catálogo de Combos (`/combos`)

### Contexto del Proyecto:
Ya tenemos la Home completa y funcional con sus redirecciones. Ahora nos enfocaremos en la página del catálogo de combos.

### Objetivo de este paso:
Construir la página `/combos` con la barra de título, buscador en tiempo real y la grilla de las 4 tarjetas de combos en forma de pieza de rompecabezas verde salvia clickeables.

### Archivos a crear o modificar:

1. **`src/components/combos/ComboCard.jsx`**:
   - Tarjeta visual con la silueta de una pieza de rompecabezas (puzzle piece) en color verde salvia suave (`#8EAE8D`).
   - Puedes implementar la forma de rompecabezas mediante un SVG decorativo con volumen, o con CSS / bordes combinados que simulen las pestañas salientes del puzzle.
   - En el centro de la pieza debe llevar el texto en rosa/terracota suave (`#C96876`): *"Combo patch"*.
   - Debajo de la pieza de puzzle, mostrar el nombre del combo, un párrafo descriptivo breve y el precio.
   - Efecto hover interactivo: elevación sutil (`hover:-translate-y-1 transition duration-300`).
   - Al hacer clic en la tarjeta, debe navegar a la ruta de detalle: `/combos/${combo.id}`.

2. **`src/pages/CombosPage.jsx`**:
   - Renderizar el `SubHeader` con el título `PRODUCTOS`.
   - Incluir una barra de búsqueda limpia con icono de lupa para filtrar los 4 combos por nombre en tiempo real.
   - Grilla responsiva de tarjetas (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`) que itere sobre los combos de `src/data/products.js` renderizando `ComboCard`.
   - Si no hay resultados en la búsqueda, mostrar un mensaje amigable: *"No se encontraron combos con ese nombre"*.

### ⚠️ REGLAS ESTRICTAS DE ALCANCE:
- **SOLO** implementa `ComboCard.jsx` y `CombosPage.jsx`.
- **NO** avances a programar el detalle del combo (`/combos/:id`) todavía.
- Verifica que el enrutamiento funcione: al hacer clic en cualquier combo, la URL debe cambiar a `/combos/1`, `/combos/2`, etc.

---

```markdown
<!-- COPIAR A PARTIR DE AQUÍ PARA EL PROMPT 4 -->
```

## PROMPT 4: Detalle de Producto y Configurador Modular (`/combos/:id`)

### Contexto del Proyecto:
Ya tenemos el catálogo de combos y la navegación hacia cada combo individual (`/combos/:id`).

### Objetivo de este paso:
Construir la página de detalle del producto (`ComboDetailPage.jsx`) con su layout en dos columnas: carrusel vertical de ángulos, visor principal, modal "¿Cómo quedaría?", panel de especificaciones, configurador modular de tipos y colores, y botón para añadir al carrito.

### Archivos a crear o modificar:

1. **`src/components/product/AngleSelector.jsx`**:
   - Columna vertical de 4 botones circulares ("Fotos de dist ángulos").
   - Al hacer clic en cada círculo, actualiza la vista activa (ej. Frente, Lateral, Ensamble, Perspectiva).
   - El círculo activo debe tener un borde o sombra destacada.

2. **`src/components/product/PreviewModal.jsx`**:
   - Modal interactivo que se abre al presionar el botón "¿Cómo quedaría?".
   - Muestra una visualización ampliada o simulación de cómo lucen las piezas modulares combinadas en un espacio o superficie.
   - Botón para cerrar el modal.

3. **`src/components/product/ColorPicker.jsx`**:
   - Fila de 5 muestras circulares de color con la paleta de la marca:
     - Rosa / Terracota (`#B86B77`)
     - Lila / Violeta pastel (`#CFA0D6`)
     - Mostaza / Ocre (`#CFA04E`)
     - Verde salvia (`#8EA77B`)
     - Azul pizarra (`#667493`)
   - Permite seleccionar un color activo (marcado con un aro o tilde).

4. **`src/components/product/TypePicker.jsx`**:
   - Fila de 5 botones cuadrados con esquinas muy redondeadas para seleccionar la forma o tipo del módulo (Tipos: A, B, C, D, E o siluetas 1 al 5).
   - Marca visualmente cuál variante está seleccionada.

5. **`src/pages/ComboDetailPage.jsx`**:
   - Obtener el `id` del combo desde la URL con `useParams()`. Buscar el combo correspondiente en `src/data/products.js`. Si no existe, mostrar un mensaje de producto no encontrado con botón para volver a `/combos`.
   - Renderizar el `SubHeader` con el texto `PRODUCTO - [NOMBRE DEL COMBO]`.
   - **Layout en 2 columnas (Grid / Flex responsivo)**:
     - **Columna Izquierda**:
       - Contenedor con la imagen/pieza principal en grande ("Combo patch") en el ángulo seleccionado.
       - La columna vertical `AngleSelector` a su lado.
       - Debajo: el botón alargado estilo píldora **"¿Cómo quedaría?"** que abre el `PreviewModal`.
     - **Columna Derecha**:
       - Bloque celeste redondeado (`#C8D7E3`) con "Info del producto": descripción detallada, materiales (foam/tacto suave), medidas y precio destacado.
       - **Configurador Modular**:
         - Bloque **"Módulo pequeño 1"**: selector de Tipos (`TypePicker`) + selector de Colores (`ColorPicker`).
         - Bloque **"Módulo pequeño 2"**: segundo selector de Tipos + segundo selector de Colores.
       - **Botón "Agregar al carrito"**:
         - Botón ancho redondeado en celeste/verde suave.
         - Al hacer clic, llama a `addToCart(combo, { angle, module1Type, module1Color, module2Type, module2Color })` de `CartContext`.
         - Muestra feedback visual inmediato (ej. texto cambia a "¡Agregado al carrito! ✓" durante 2 segundos o abre una pequeña notificación toast).

### ⚠️ REGLAS ESTRICTAS DE ALCANCE:
- **SOLO** programa `ComboDetailPage.jsx` y los componentes de producto (`AngleSelector`, `PreviewModal`, `ColorPicker`, `TypePicker`).
- **NO** modifiques la Home ni la página de eventos.
- Asegúrate de que el contador del carrito en el `Navbar` aumente reactivamente al presionar "Agregar al carrito".

---

```markdown
<!-- COPIAR A PARTIR DE AQUÍ PARA EL PROMPT 5 -->
```

## PROMPT 5: Página de Eventos (`/eventos`) y Drawer del Carrito

### Contexto del Proyecto:
Todas las rutas de productos (Home, Combos y Detalle con configurador) ya están operativas y el carrito almacena los items seleccionados.

### Objetivo de este paso:
Construir la página de `/eventos` con la estética de "Próximamente más...", e implementar el Drawer o Modal del Carrito de compras desplegable desde el `Navbar` para ver los productos agregados y sus configuraciones.

### Archivos a crear o modificar:

1. **`src/pages/EventsPage.jsx`**:
   - Renderizar el `SubHeader` con el título `EVENTOS`.
   - Contenedor central amplio con fondo celeste pastel (`#C8D7E3`) y esquinas redondeadas (`rounded-3xl`):
     - Título destacado en color terracota/bordó: **"PRÓXIMAMENTE MÁS..."**.
     - Logotipo 3D pastel de **QUBIT** centrado como remate visual.
     - Sección opcional y limpia: campo de texto "Déjanos tu correo para avisarte de próximos eventos y talleres" con botón "Suscribirme" (con feedback simulado de "¡Gracias por suscribirte!").

2. **`src/components/cart/CartDrawer.jsx`**:
   - Panel lateral deslizable (*slide-over*) o modal que se abre cuando `isCartOpen` es `true` (al hacer clic en la bolsa de compras del `Navbar`).
   - Muestra:
     - Título "Tu Carrito" y botón de cerrar (X).
     - Si está vacío: mensaje simpático ("Tu carrito está vacío, ¡agrega un combo modular!") y botón para ir a `/combos`.
     - Si tiene items: lista de los combos agregados, mostrando nombre, precio, los colores elegidos para cada módulo y un botón para eliminar el item (`removeFromCart`).
     - Resumen del total de la compra.
     - Botón "Finalizar pedido" (simula compra completada mostrando un mensaje de felicitaciones y vaciando el carrito con `clearCart()`).

3. **`src/App.jsx` o `src/components/layout/Navbar.jsx`**:
   - Integrar `CartDrawer` en la estructura para que se monte cuando `isCartOpen` sea verdadero.
   - Revisión final de navegación: verificar que todos los enlaces (Home, Combos, Detalle de combos 1 a 4, Eventos) funcionen fluidamente sin errores en la consola.

### ⚠️ REGLAS ESTRICTAS DE ALCANCE:
- **SOLO** implementa `EventsPage.jsx` y `CartDrawer.jsx`.
- Realiza una revisión visual para comprobar que la paleta de colores y las formas redondeadas sean coherentes en todo el sitio.
- Deja el proyecto listo para ejecutar con `npm run dev`.
