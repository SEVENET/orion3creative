# ORION 3 CREATIVE — GUION MAESTRO DEL DEMO

**Versión:** Lanzamiento general (cliente Frame Sixty + inversionistas + observadores)
**Plataforma:** 3DVista (Virtual Tour Pro)
**Fecha:** 6 de mayo, 2026
**Director técnico:** Rubén Silva
**Idioma primario:** Español (con variantes EN listadas para uso futuro)

---

## 0. CÓMO USAR ESTE DOCUMENTO

Cada bloque de escena contiene:

1. **Función narrativa** — qué papel cumple en el demo.
2. **Estado del panorama** — listo, pendiente render, IA pase, etc.
3. **Tabla de hotspots** — copia/pega directo a 3DVista.
4. **Notas de producción** — posiciones, transiciones, audio.

Convención de IDs de hotspot: `HS-[escena]-[número]` (p. ej., `HS-01-003`).
Tipos:

- **INFO** = popup de texto/imagen
- **JUMP** = salto a otro panorama
- **MEDIA** = video/audio embebido
- **3D** = visor de modelo 3D
- **LINK** = URL externa
- **OVERLAY** = pantalla flotante con contenido HTML

---

## NARRATIVA GENERAL — EL ARCO DE 90 SEGUNDOS

> Hipótesis de venta: la **Sala de Presentación Inmersiva** es el producto-gancho.
> Genera ingresos recurrentes (suscripción + servicio) y abre la puerta a los demás verticales: staging, librería 3D, ecommerce de muebles y escaneo.
> Todo el demo se construye alrededor de esa promesa.

```
[0]  SPLASH                        →  Marca y tono
[1]  LA SALA (hero)                →  Promesa central + recurrencia
[2]  ECOSISTEMA                    →  Mapa de productos
[3]  STAGING VIRTUAL               →  Upsell #1
[4]  LIBRERÍA 3D + ECOMMERCE       →  Upsell #2 (escalable)
[5]  ESCANEO 3D                    →  Motor del sistema
[6]  AR / MIXED REALITY            →  Visión de futuro
[7]  EQUIPO                        →  Quién lo hace posible
[8]  IMPACTO AMBIENTAL             →  Por qué importa
[9]  MODELO DE NEGOCIO             →  Cómo ganamos (y cómo ganan)
[10] CTA FINAL                     →  Hablemos
```

Tres reglas de copy en hotspots, sin excepciones:

1. **Título ≤ 6 palabras.**
2. **Cuerpo ≤ 35 palabras.** Si no cabe, abrir un OVERLAY con contenido extendido.
3. **Una sola idea por hotspot.** Si hay dos ideas, son dos hotspots.

---

## ESCENA 0 — SPLASH / APERTURA

**Función narrativa:** establecer marca, tono cinematográfico y promesa.
**Estado del panorama:** se reutiliza `orion_3_creative_intro.html` como pre-loader o cortinilla autoplay.
**Duración objetivo:** 6–8 segundos antes de soltar al usuario en Escena 1.

**Hotspots:** ninguno. Puro brand moment.

**Texto en pantalla (motion):**

- Wordmark *ORION 3 CREATIVE* (Cormorant Garamond, serif).
- Subtítulo: *"Immersive Visualization."*
- Cierre: *"Design the experience."*

**Notas de producción:**

- Si 3DVista lo permite, embeber el HTML del intro como página de bienvenida; si no, capturar un MP4 de 8s y usarlo como Intro Video del tour.
- Audio sugerido: pad ambient suave + un solo "swoosh" sincronizado con la entrada del wordmark. Volumen base −12 LUFS.

---

## ESCENA 1 — LA SALA DE PRESENTACIÓN (HERO)

**Función narrativa:** el usuario aterriza dentro del producto. La sala se vende a sí misma.
**Estado del panorama:** este es el render más importante. Si solo hay 4 renders pendientes, prioriza este desde dos ángulos (vista frontal hacia muro principal + vista hacia mesa central).
**Mood:** sala iluminada cálida, una pieza arquitectónica protagonista en el muro principal. Pantalla embebida en el muro mostrando una propiedad navegable.

### 1.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-01-001 | INFO | Centro del muro principal, flotante | Esto no es una sala. Es ventas recurrentes. | Una experiencia inmersiva instalable que reemplaza la oficina de ventas tradicional. Permanente, escalable, alquilable por mes. | Cierra al click |
| HS-01-002 | OVERLAY | Pantalla en el muro | Ver propiedad en vivo | Toca cualquier propiedad y entra a su recorrido en segundos. Sin imprimir, sin maquetas. Sin esperar. | Abre overlay con mini-tour 360 anidado |
| HS-01-003 | INFO | Sobre la mesa central | ¿Cómo genera dinero recurrente? | Setup único + suscripción mensual del software + comisión sobre productos vendidos a través de la experiencia. | Abre OVERLAY 1.A |
| HS-01-004 | INFO | Esquina superior derecha | ¿Para quién? | Developers, realtors, marcas de muebles y diseñadores que quieren vender espacios o productos sin moverlos físicamente. | Abre OVERLAY 1.B |
| HS-01-005 | JUMP | Punto de fuga al fondo | Ver el ecosistema completo | — | Salta a Escena 2 |
| HS-01-006 | LINK | Footer de UI | orion3creative.com | — | Abre web en pestaña nueva |

### 1.2 OVERLAY 1.A — Modelo de ingresos de la Sala

> **Tres motores en una sola instalación.**
>
> 1. **Setup inicial.** Diseño, render y configuración del espacio físico + experiencia digital.
> 2. **Suscripción mensual.** Acceso al sistema, actualizaciones de contenido, soporte.
> 3. **Comisión por venta.** Cada mueble, propiedad o producto que se vende dentro de la sala paga un porcentaje a la sala.
>
> *Una sala, tres flujos. El cliente no paga una sola vez: paga cada mes, y nosotros ganamos cada vez que él gana.*

### 1.3 OVERLAY 1.B — Para quién

> **Real estate developers** que necesitan vender unidades antes de tenerlas listas.
> **Realtors** que quieren cerrar más rápido y diferenciarse.
> **Marcas de muebles** que buscan mostrar contexto, no solo catálogo.
> **Diseñadores de interiores** que quieren proponer escenarios que el cliente puede *sentir*.

### 1.4 Notas de producción

- El hotspot HS-01-001 es el primero que el usuario ve. **Si solo lee uno, este lo cuenta todo.** Itera la copia hasta que haga clic en el corazón.
- HS-01-002 (overlay con mini-tour) es el "wow" del demo. Aunque sea un dummy, debe responder al click. Aquí muestras el producto haciendo lo que vende.
- Sonido ambiente sutil de "oficina premium" (low murmur + clima). Sin música encima.

---

## ESCENA 2 — ECOSISTEMA ORION

**Función narrativa:** zoom out. Después de ver la sala, mostramos que la sala es solo la entrada al ecosistema.
**Estado del panorama:** vista exterior o aérea del proyecto inmobiliario donde se inserta la sala, con seis hotspots flotantes orbitando puntos del paisaje urbano.
**Composición:** cielo limpio, ciudad como telón. Cada hotspot ancla un vertical de Orion.

### 2.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-02-001 | JUMP | NE — sobre edificio residencial | Real Estate Experiences | Tours 360, staging virtual, recorridos en MR y maquetas interactivas para vender propiedades. | Escena 3 |
| HS-02-002 | JUMP | E — sobre showroom | Virtual Staging + Design | Amueblamos espacios vacíos en horas. Cambia de estilo en vivo, sin mover un solo mueble. | Escena 3 |
| HS-02-003 | JUMP | SE — sobre tienda | 3D Asset Library | Modelos 3D escaneados de muebles reales, listos para VR/AR. Gratis y premium. | Escena 4 |
| HS-02-004 | JUMP | S — sobre marketplace flotante | Furniture Ecommerce | Comprar el mueble que ves, donde lo ves. Comisión por cada venta. | Escena 4 |
| HS-02-005 | JUMP | SW — sobre fábrica | 3D Scanning Service | Convertimos productos físicos en gemelos digitales optimizados para VR/AR. | Escena 5 |
| HS-02-006 | JUMP | W — sobre nube | Orion Platform (futuro) | Diseñas. Visualizas. Compras. Compartes. Una sola plataforma. | Escena 9 |

### 2.2 Notas

- Los seis hotspots deben quedar **a la misma altura visual** y a distancia uniforme del centro de la cámara: el usuario debe leer "constelación", no "lista".
- Animación sugerida: pulso lento (0.6s ease in/out, 4s ciclo) para indicar interactividad sin saturar.
- Texto de UI persistente abajo: *"Toca cualquiera para entrar. Toda experiencia conecta con la Sala."*

---

## ESCENA 3 — VIRTUAL STAGING + DESIGN

**Función narrativa:** demostrar el upsell #1 — el producto que más se vende junto con la Sala.
**Estado del panorama:** una habitación renderizada vacía. Se aplica una transición suave a la misma habitación amueblada en estilo A. Luego cambio en vivo a estilo B.
**Variantes a renderizar:** 1 escena vacía + 2 estilos amueblados (mínimo). Idealmente 3 estilos.

### 3.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-03-001 | OVERLAY | Esquina superior izq. | Antes / Después | Misma habitación. Cero obra. Veinticuatro horas. | Toggle vacío ↔ amueblado |
| HS-03-002 | INFO | Sofá | Cambia el estilo en vivo | Nórdico, industrial, contemporáneo, lujo. Un click. | Abre selector de estilos |
| HS-03-003 | INFO | Mesa | Cada mueble es real | No es maqueta. Cada pieza está disponible para comprar. | Abre HS de modelo 3D |
| HS-03-004 | INFO | Lámpara | Diseñado por humanos, no por filtros | Curaduría profesional. Cada estilo lo arma un diseñador del equipo Orion. | Cierra al click |
| HS-03-005 | JUMP | Salida visual | Ver la librería | — | Escena 4 |

### 3.2 Notas

- La transición entre escena vacía ↔ amueblada debe ser **instantánea o con cross-fade ≤ 300ms**. Si demora más, se rompe el "wow".
- Si 3DVista no soporta cambio de panorama dentro de la misma "vista", usar dos panoramas idénticos y hotspot que dispara `loadScene()` con cámara mantenida.

---

## ESCENA 4 — LIBRERÍA 3D + FURNITURE ECOMMERCE

**Función narrativa:** transformar los muebles que vio en Escena 3 en un negocio.
**Estado del panorama:** showroom virtual o estantería de modelos 3D flotantes. Cada mueble rota suavemente.
**Producto demostrado:** core de monetización por comisión.

### 4.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-04-001 | 3D | Sofá protagonista | Toca para girarlo | Arrastra para inspeccionar. 360°, materiales reales, escala 1:1. | Abre visor 3D |
| HS-04-002 | INFO | Etiqueta de precio | Comprar este mueble | Cada compra dentro de Orion paga comisión a la sala donde se vio. | Abre OVERLAY 4.A |
| HS-04-003 | INFO | Vitrina | Pack premium | Muebles exclusivos de marcas aliadas. No están en Amazon. No están en showrooms. Solo aquí. | Cierra al click |
| HS-04-004 | INFO | Estante de herramientas | Para diseñadores y artistas | Descarga assets para tus propios proyectos. Free tier + premium. | Abre overlay con tiers |
| HS-04-005 | JUMP | — | Ver cómo escaneamos | — | Escena 5 |

### 4.2 OVERLAY 4.A — Comisión y modelo

> **Cada experiencia es un punto de venta.**
> El cliente entra a la Sala → ve el mueble en su contexto → lo compra → la marca paga comisión.
> Orion conecta inventario real con experiencias inmersivas. El comprador ya no decide en una foto: decide adentro.

### 4.3 Notas

- HS-04-001 (visor 3D) es crítico. Si 3DVista no lo soporta nativamente, usar `<model-viewer>` embebido en un OVERLAY o redirigir a una página externa con el modelo. **No vendamos lo que no se puede tocar.**
- Mantener catálogo de demo a **6 muebles máximo**. Más es ruido.

---

## ESCENA 5 — 3D SCANNING SERVICE

**Función narrativa:** mostrar la infraestructura. *Esto no es magia, es proceso.*
**Estado del panorama:** vista del set de escaneo (truss frame, LED cyan bars, plataforma rotatoria) en operación. Iluminación característica de la marca.
**Mood:** azul cyan `#7FEFEF` dominante.

### 5.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-05-001 | INFO | Sobre el truss | Capturamos la realidad | Fotografía estructurada + fotogrametría + retopología. Resultado: gemelo digital fiel. | Cierra al click |
| HS-05-002 | INFO | Sobre la plataforma | Para marcas y fabricantes | Si vendes muebles, productos o piezas únicas, escaneamos tu inventario para que viva en cualquier experiencia. | Abre OVERLAY 5.A |
| HS-05-003 | MEDIA | Pantalla técnica | Ver el proceso (45s) | — | Reproduce video de pipeline |
| HS-05-004 | INFO | Esquina | Optimizado para VR/AR | Salida en glTF y USDZ. Listo para Quest, Vision Pro y web. Sin retoque adicional. | Cierra al click |
| HS-05-005 | JUMP | — | Ver el resultado en uso | — | Escena 6 |

### 5.2 OVERLAY 5.A — Servicio de escaneo

> **Tres entregas estándar.**
>
> 1. **Modelo high-poly** para render cinemático.
> 2. **Modelo optimizado** (VR/AR/web) con LODs.
> 3. **Modelo licenciable** que entra a la Librería 3D si la marca lo autoriza, generando ingreso pasivo.
>
> *La marca paga el escaneo y, si publica, gana cada vez que su producto aparece en una experiencia.*

### 5.3 Notas

- Si el video de proceso (HS-05-003) no está listo, esconder el hotspot. **Nunca un hotspot sin payoff.**
- Considerar grabar un B-roll corto del set real para esta escena en una segunda iteración.

---

## ESCENA 6 — AR / MIXED REALITY

**Función narrativa:** "lo que ves en la sala también vive afuera de ella."
**Estado del panorama:** render de un usuario caminando en un espacio real con muebles colocados en MR. Si no hay render, usar un compuesto de foto real + overlay 3D + UI de Quest/Vision Pro.

### 6.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-06-001 | INFO | Sobre el usuario | Trae el diseño a tu casa | Coloca cualquier mueble de la librería en tu espacio real, escala 1:1, antes de comprar. | Cierra al click |
| HS-06-002 | INFO | Sobre el sofá colocado | Cero devoluciones por sorpresa | El cliente ya sabe cómo se ve antes de pagar. Menos devoluciones. Mejor margen. | Cierra al click |
| HS-06-003 | INFO | Headset | Compatible con Quest, Vision Pro y web AR | No requiere instalación. URL o app y listo. | Cierra al click |
| HS-06-004 | JUMP | — | Conoce al equipo que lo construye | — | Escena 7 |

### 6.2 Notas

- Esta escena es la más débil si los renders no están listos. Si falta tiempo: comprimir a una sola pantalla emergente con un GIF/MP4 demostrativo y dejar la escena como "preview" en el menú.

---

## ESCENA 7 — EQUIPO

**Función narrativa:** humanizar Orion. Quién está detrás. Por qué se puede confiar.
**Estado del panorama:** sala lateral del showroom con cinco "tarjetas" flotantes (una por miembro). Composición simétrica.
**Datos confirmados** (Adobe Sign del Operating Agreement, 1 mayo 2026):

| Miembro | Rol propuesto | Email |
|---|---|---|
| Jennifer Lipman | Co-Founder | jennifer.lipman@orion3creative.com |
| Xander Nicolai | Co-Founder | xandernicolai@orion3creative.com |
| Steffani McCann | Co-Founder | steffani.mccann@orion3creative.com |
| William Moxham | Co-Founder | williammoxham@orion3creative.com |
| Rubén Silva | Director Técnico / Co-Founder | rudasestn@gmail.com |

> **Acción pendiente para ti:** confirmar roles exactos de cada miembro. Lo que sigue son hotspots con campos para llenar.

### 7.1 Hotspots (uno por persona)

Plantilla repetible:

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-07-00X | OVERLAY | Tarjeta flotante X | [Nombre] · [Rol] | [Una frase de qué hace en Orion + un dato de credibilidad: experiencia, formación o tracción] | Abre OVERLAY 7.X (bio extendida) |

**Ejemplo concreto (Rubén):**

| HS-07-005 | OVERLAY | Tarjeta central | Rubén Silva · Director Técnico | Lidera la pipeline de visualización inmersiva: 3D, render, escaneo y entrega en 3DVista. Construye el motor que hace creíble cada experiencia Orion. | Abre OVERLAY 7.E |

### 7.2 OVERLAYS 7.A–7.E (bios extendidas)

> **Pendiente de input directo.** Te dejo plantilla; cada miembro responde 4 preguntas y el overlay se llena solo:
>
> 1. ¿Qué haces en Orion en una frase?
> 2. ¿Qué hiciste antes que importa para esto?
> 3. ¿Qué problema te obsesiona resolver?
> 4. Una línea personal (cita, lema, lo que quieras).

**Notas:**

- Foto de perfil en alta calidad, fondo neutro, mismo tratamiento de color para los cinco. Si no hay tiempo: silueta + ícono cyan.
- Mismo template visual para los cinco. La diferencia la hace el contenido, no el diseño.

---

## ESCENA 8 — IMPACTO AMBIENTAL

**Función narrativa:** "Orion no solo vende mejor — produce menos basura."
**Estado del panorama:** comparativa visual: a la izquierda, un staging físico (camión, embalajes, muebles transportados). A la derecha, la misma operación digital (laptop, headset, sala iluminada).
**Mood:** primera mitad gris, segunda mitad cyan.

### 8.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-08-001 | INFO | Sobre camión | El staging tradicional cuesta toneladas | Una propiedad amueblada físicamente mueve entre 800 kg y 2 toneladas de mobiliario por sesión. Cada cambio repite el ciclo. | Cierra al click |
| HS-08-002 | INFO | Sobre embalajes | Empaque, transporte, devolución | El 30% del mobiliario para staging termina dañado, devuelto o descartado en menos de 18 meses (estimado de industria). | Cierra al click |
| HS-08-003 | INFO | Sobre laptop | El staging virtual no se mueve | Cero camiones. Cero empaques. Cero devoluciones por insatisfacción visual. | Cierra al click |
| HS-08-004 | INFO | Sobre headset | Decisiones más informadas | El comprador ve antes de comprar. Las devoluciones de muebles caen y la huella logística se reduce. | Cierra al click |
| HS-08-005 | OVERLAY | Centro | Apoyo a artistas y diseñadores | Cada modelo en la librería paga regalías. Le damos canal de distribución a creadores que hoy compiten contra catálogos masivos. | Abre OVERLAY 8.A |

### 8.2 OVERLAY 8.A — Mensaje de sostenibilidad

> **Lo que reducimos:**
>
> - Transporte de muebles para staging y showroom rotativo.
> - Empaque, embalaje y residuos.
> - Devoluciones por "no era lo que pensé".
> - Producción especulativa de inventario que nunca se vende.
>
> **Lo que multiplicamos:**
>
> - Ingresos para diseñadores y artistas que digitalizan su trabajo.
> - Tiempo de venta de las marcas (más rápido = menos stock parado).
> - Acceso del comprador final a productos premium en cualquier ciudad.
>
> *Orion convierte el desperdicio físico en decisiones digitales.*

### 8.3 Notas

- Las cifras "800 kg / 2 toneladas" y "30%" son estimados de industria. **Antes de publicar, validar con dos fuentes citables.** Marcado para QA final.
- Si quieres datos firmes, dime y los buscamos en una segunda iteración con WebSearch.

---

## ESCENA 9 — MODELO DE NEGOCIO

**Función narrativa:** cerrar la lógica económica. Un inversionista debe entender de dónde sale el dinero en 30 segundos.
**Estado del panorama:** sala de control / dashboard inmersivo. Cuatro paneles flotantes, uno por stream.

### 9.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-09-001 | INFO | Panel 1 | Servicios (Sala + Tours + MR) | Setup + suscripción mensual. Recurrente, alto margen, ancla del modelo. | Cierra al click |
| HS-09-002 | INFO | Panel 2 | Comisión sobre productos | Cada mueble vendido a través de una experiencia Orion paga comisión. Escalable sin contratar. | Cierra al click |
| HS-09-003 | INFO | Panel 3 | Librería 3D (free + premium) | Tier gratuito atrae usuarios. Tier premium y packs exclusivos generan ingreso recurrente B2B. | Cierra al click |
| HS-09-004 | INFO | Panel 4 | Plataforma SaaS (futuro) | Desde 2027: licencia para que estudios y desarrolladores construyan sobre Orion. | Cierra al click |
| HS-09-005 | OVERLAY | Centro | Por qué ahora | VR/AR alcanzaron consumo masivo. Vision Pro y Quest 3 cambiaron el costo de entrada. La infraestructura existe. Falta la experiencia. | Abre OVERLAY 9.A |
| HS-09-006 | LINK | Footer | Hablemos con el equipo | — | Abre formulario / mailto |

### 9.2 OVERLAY 9.A — Why now

> **Cuatro condiciones que no estaban hace 24 meses:**
>
> 1. **Hardware accesible.** Quest 3, Vision Pro y AR web democratizaron la entrada.
> 2. **Pipeline maduro.** Render en tiempo real (D5, Unreal) es de calidad fotográfica.
> 3. **Costo de escaneo cae.** Lo que costaba miles ahora cuesta cientos.
> 4. **Comprador entrenado.** El consumidor post-pandemia decide online y espera experiencias inmersivas.

### 9.3 Notas

- Esta escena es donde el inversionista hace clic más veces. Cada panel debe tener payoff inmediato y dato concreto. Si una cifra falta, mejor escribir cualitativo que mentir.

---

## ESCENA 10 — CTA FINAL

**Función narrativa:** salida controlada. Una sola acción.
**Estado del panorama:** fade a negro o regreso a la Sala (Escena 1) con hotspot de CTA centrado.

### 10.1 Hotspots

| ID | Tipo | Posición | Título | Cuerpo | Acción / Target |
|---|---|---|---|---|---|
| HS-10-001 | LINK | Centro | Hablemos | — | Abre `mailto:hello@orion3creative.com` o calendly del equipo |
| HS-10-002 | LINK | Inferior | orion3creative.com | — | Web |
| HS-10-003 | JUMP | Esquina | Volver al inicio | — | Escena 1 |

**Texto en pantalla:**

> *"Toda experiencia es una decisión.
> Construyamos la próxima decisión de tu proyecto."*
>
> **— Orion 3 Creative**

---

## UI PERSISTENTE DEL TOUR

Estos elementos viven sobre todas las escenas:

- **Floating menu** (esquina superior izquierda): logo Orion + dropdown con las 10 escenas.
- **Minimapa** (esquina inferior derecha): muestra la posición actual en el arco narrativo (10 puntos, uno encendido).
- **Breadcrumb** (centro inferior): "Sala → Ecosistema → Staging" — indica de dónde vienes.
- **Botón de audio mute** (esquina superior derecha).
- **Idioma ES/EN** (toggle, esquina inferior izquierda).

---

## CHECKLIST DE PRODUCCIÓN PARA HOY

```
[  ] Render Escena 1.A (Sala, vista frontal)              ★ crítico
[  ] Render Escena 1.B (Sala, vista mesa)                 ★ crítico
[  ] Render Escena 2 (Ecosistema / aérea)                 ★ crítico
[  ] Render Escena 3 (Habitación vacía + 2 estilos)       ★ crítico
[  ] Render Escena 4 (Showroom de muebles)                  alto
[  ] Render Escena 5 (Set de escaneo)                       medio
[  ] Render Escena 6 (AR/MR compuesto)                      medio
[  ] Render Escena 7 (Equipo, sala lateral)                 medio
[  ] Render Escena 8 (Comparativa ambiental)                bajo
[  ] Render Escena 9 (Dashboard de negocio)                 bajo
[  ] Render Escena 10 (CTA / fade)                          bajo

[  ] Cargar 10 panoramas en 3DVista
[  ] Configurar UI persistente (menú, minimapa, breadcrumb, audio, idioma)
[  ] Pegar todos los hotspots de este documento (≈55 hotspots totales)
[  ] Conectar OVERLAYS extendidos
[  ] QA clic-por-clic completo
[  ] Validar que no hay hotspot sin destino
[  ] Exportar versión web + versión local + versión VR (si aplica)
[  ] Backup del proyecto a Drive (carpeta "Orion 3 Creative")
```

---

## DECISIONES PENDIENTES (REQUIEREN INPUT TUYO)

1. **Roles definitivos del equipo.** Tengo nombres confirmados, faltan títulos finales para los hotspots de Escena 7.
2. **Cifras de impacto ambiental.** Hay placeholders (800 kg, 30%); necesitan validación o fuentes citables antes de publicar.
3. **CTA de Escena 10.** ¿Mailto, Calendly, formulario embebido, o todos? Define un solo contacto principal.
4. **Idioma del demo de lanzamiento.** ¿Solo español, solo inglés, o bilingüe con toggle? El bilingüe duplica trabajo de copy.
5. **Audio.** ¿Locución en off, solo música, solo ambiente? Recomiendo: ambiente + un acento musical por escena.

---

*Fin del guion maestro.*
