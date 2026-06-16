# Abogapp - API MVP

## Autenticación

### Registro de usuario

POST /auth/register

Body:
- nombre
- apellido
- email
- password
- rol

Respuesta:
- token
- usuario

---

### Login

POST /auth/login

Body:
- email
- password

Respuesta:
- token
- usuario

---

## Abogados

### Buscar abogados

GET /lawyers

Filtros:
- especialidad
- ciudad
- modalidad

Respuesta:
- listado de abogados

---

### Ver perfil de abogado

GET /lawyers/:id

Respuesta:
- datos personales
- especialidades
- experiencia
- valor consulta
- calificaciones

---

## Disponibilidad

### Obtener agenda

GET /lawyers/:id/availability

Respuesta:
- fechas disponibles
- horarios disponibles

---

## Reservas

### Crear reserva

POST /bookings

Body:
- abogado_id
- fecha
- horario

Respuesta:
- reserva creada

---

### Mis reservas

GET /bookings

Respuesta:
- reservas activas
- reservas finalizadas

---

## Reseñas

### Crear reseña

POST /reviews

Body:
- abogado_id
- puntuacion
- comentario

Respuesta:
- reseña creada

---

## Administración

### Aprobar abogado

PATCH /admin/lawyers/:id/approve

### Suspender usuario

PATCH /admin/users/:id/suspend

### Gestionar incidencias

PATCH /admin/incidents/:id