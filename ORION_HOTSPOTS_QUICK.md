# ORION DEMO — REFERENCIA RÁPIDA DE HOTSPOTS

> **Imprime esta página y tenla al lado del 3DVista.**
> Para detalle completo de cada hotspot, ver `ORION_DEMO_GUION_MAESTRO.md`.

---

## ESCENA 0 — SPLASH

Sin hotspots. Reutiliza `orion_3_creative_intro.html` como cortinilla autoplay (6–8 s).

## ESCENA 1 — LA SALA (HERO)

| ID | Tipo | Título | Acción |
|---|---|---|---|
| HS-01-001 | INFO | Esto no es una sala. Es ventas recurrentes. | Cierra |
| HS-01-002 | OVERLAY | Ver propiedad en vivo | Mini-tour anidado |
| HS-01-003 | INFO | ¿Cómo genera dinero recurrente? | Overlay 1.A |
| HS-01-004 | INFO | ¿Para quién? | Overlay 1.B |
| HS-01-005 | JUMP | Ver el ecosistema completo | → Escena 2 |
| HS-01-006 | LINK | orion3creative.com | Web |

## ESCENA 2 — ECOSISTEMA

| ID | Tipo | Título | Salta a |
|---|---|---|---|
| HS-02-001 | JUMP | Real Estate Experiences | Escena 3 |
| HS-02-002 | JUMP | Virtual Staging + Design | Escena 3 |
| HS-02-003 | JUMP | 3D Asset Library | Escena 4 |
| HS-02-004 | JUMP | Furniture Ecommerce | Escena 4 |
| HS-02-005 | JUMP | 3D Scanning Service | Escena 5 |
| HS-02-006 | JUMP | Orion Platform (futuro) | Escena 9 |

## ESCENA 3 — VIRTUAL STAGING

| ID | Tipo | Título |
|---|---|---|
| HS-03-001 | OVERLAY | Antes / Después (toggle) |
| HS-03-002 | INFO | Cambia el estilo en vivo |
| HS-03-003 | INFO | Cada mueble es real |
| HS-03-004 | INFO | Diseñado por humanos, no por filtros |
| HS-03-005 | JUMP | Ver la librería → Escena 4 |

## ESCENA 4 — LIBRERÍA 3D + ECOMMERCE

| ID | Tipo | Título |
|---|---|---|
| HS-04-001 | 3D | Toca para girarlo |
| HS-04-002 | INFO | Comprar este mueble (Overlay 4.A) |
| HS-04-003 | INFO | Pack premium |
| HS-04-004 | INFO | Para diseñadores y artistas |
| HS-04-005 | JUMP | Ver cómo escaneamos → Escena 5 |

## ESCENA 5 — 3D SCANNING

| ID | Tipo | Título |
|---|---|---|
| HS-05-001 | INFO | Capturamos la realidad |
| HS-05-002 | INFO | Para marcas y fabricantes (Overlay 5.A) |
| HS-05-003 | MEDIA | Ver el proceso (45 s) |
| HS-05-004 | INFO | Optimizado para VR/AR |
| HS-05-005 | JUMP | Ver el resultado en uso → Escena 6 |

## ESCENA 6 — AR / MIXED REALITY

| ID | Tipo | Título |
|---|---|---|
| HS-06-001 | INFO | Trae el diseño a tu casa |
| HS-06-002 | INFO | Cero devoluciones por sorpresa |
| HS-06-003 | INFO | Compatible con Quest, Vision Pro y web AR |
| HS-06-004 | JUMP | Conoce al equipo → Escena 7 |

## ESCENA 7 — EQUIPO

| ID | Tipo | Título |
|---|---|---|
| HS-07-001 | OVERLAY | Jennifer Lipman · Co-Founder · Operations |
| HS-07-002 | OVERLAY | Xander Nicolai · Co-Founder · Strategy |
| HS-07-003 | OVERLAY | Steffani McCann · Co-Founder · Design & Staging |
| HS-07-004 | OVERLAY | William Moxham · Co-Founder · Real Estate |
| HS-07-005 | OVERLAY | Rubén Silva · Director Técnico |

## ESCENA 8 — IMPACTO AMBIENTAL

| ID | Tipo | Título |
|---|---|---|
| HS-08-001 | INFO | El staging tradicional cuesta toneladas |
| HS-08-002 | INFO | Empaque, transporte, devolución |
| HS-08-003 | INFO | El staging virtual no se mueve |
| HS-08-004 | INFO | Decisiones más informadas |
| HS-08-005 | OVERLAY | Apoyo a artistas y diseñadores (Overlay 8.A) |

## ESCENA 9 — MODELO DE NEGOCIO

| ID | Tipo | Título |
|---|---|---|
| HS-09-001 | INFO | Servicios (Sala + Tours + MR) |
| HS-09-002 | INFO | Comisión sobre productos |
| HS-09-003 | INFO | Librería 3D (free + premium) |
| HS-09-004 | INFO | Plataforma SaaS (futuro) |
| HS-09-005 | OVERLAY | Por qué ahora (Overlay 9.A) |
| HS-09-006 | LINK | Hablemos con el equipo |

## ESCENA 10 — CTA

| ID | Tipo | Título |
|---|---|---|
| HS-10-001 | LINK | Hablemos (mailto / Calendly) |
| HS-10-002 | LINK | orion3creative.com |
| HS-10-003 | JUMP | Volver al inicio → Escena 1 |

---

## TOTAL HOTSPOTS

**~55 hotspots** distribuidos en 10 escenas + 9 overlays extendidos.

## REGLA DE ORO DURANTE EL MONTAJE

> Si un hotspot no tiene destino o payoff visual, **escóndelo** hasta que esté listo.
> Mejor un demo con 30 hotspots que funcionan, que 55 con mitad rotos.

## ATAJOS DE PRODUCCIÓN

- **Hotspot template HTML** (para overlays): usa `<div class="orion-overlay">` con CSS de marca (cyan `#7FEFEF`, navy `#0B1320`, Cormorant Garamond para wordmark, Inter para cuerpo).
- **Naming de panoramas:** `orion_e[##]_[descripcion]_v[##].jpg` — facilita versionado.
- **Backup obligatorio antes de exportar:** copia del proyecto 3DVista a Drive.
