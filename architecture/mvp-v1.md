# TuAbogado - MVP v1

## 1. Definición del Proyecto

TuAbogado es una plataforma LegalTech orientada a conectar usuarios con abogados mediante reserva online de consultas jurídicas.

En esta primera versión, la plataforma funcionará como un SaaS de visibilidad, agenda y captación de clientes para abogados.

La plataforma no administrará, retendrá ni distribuirá fondos de terceros.

## 2. Modelo de Monetización

El modelo inicial de Abogapp se basará en una suscripción mensual abonada por los abogados que deseen formar parte de la plataforma.

Durante la etapa MVP v1 la plataforma no cobrará comisiones por consulta.

La plataforma no administrará, retendrá ni distribuirá fondos correspondientes a honorarios profesionales.

Los pagos de las consultas serán realizados directamente entre cliente y abogado utilizando el medio de pago que este último configure en su perfil profesional.

### Plan de Suscripción

Para el MVP v1 se implementará un único plan de suscripción para abogados.

Condiciones iniciales:

- Primer mes gratuito.
- Luego, suscripción mensual fija.
- El valor de la suscripción será definido por la administración de la plataforma.
- El abogado podrá mantener activo su perfil profesional mientras tenga la suscripción vigente.

### Beneficios para el abogado

- Perfil profesional dentro de la plataforma.
- Aparición en búsquedas por especialidad y ubicación.
- Gestión de agenda y disponibilidad.
- Recepción de reservas de consultas.
- Captación de potenciales clientes.
- Presencia digital profesional organizada.

## 3. Flujo Principal

Usuario busca abogado  
→ selecciona perfil  
→ reserva turno  
→ coordina/paga directamente con el abogado  
→ realiza consulta  
→ califica la experiencia

## 4. Roles

### Cliente
- Registro
- Login
- Buscar abogados
- Ver perfiles profesionales
- Reservar turno
- Cancelar turno
- Calificar experiencia

### Abogado
- Registro
- Perfil profesional editable
- Especialidad
- Valor de consulta
- Datos de contacto profesional
- Configuración de disponibilidad
- Visualización de reservas
- Confirmación o cancelación de consultas
- Suscripción mensual

### Administrador
- Gestión de usuarios
- Gestión de abogados
- Gestión de suscripciones
- Gestión de incidencias
- Suspensión o baja de abogados
- Moderación básica

## 5. Estados del Turno

- draft
- pending_confirmation
- confirmed
- completed
- cancelled_by_client
- cancelled_by_lawyer

Todos los cambios de estado deberán registrarse.

## 6. Política de Cancelaciones

### Cancelación por parte del cliente

- Más de 24 horas antes del turno: corresponde reintegro del 100% por parte del abogado.
- Menos de 24 horas antes del turno: no corresponde reintegro.

La plataforma no realiza el reintegro porque no administra fondos. Solo registra el evento.

### Cancelación por parte del abogado

- Corresponde reintegro del 100% al cliente en todos los casos.
- Se registra una incidencia en la plataforma.
- Cancelaciones reiteradas podrán generar advertencia, suspensión o exclusión.

## 7. Garantía de Continuidad

Si el abogado cancela una consulta, la plataforma podrá realizar sus mejores esfuerzos para ofrecer al cliente otro profesional disponible.

Este reemplazo no se garantiza automáticamente y dependerá de la disponibilidad de otros abogados.

El abogado alternativo podrá recibir beneficios internos, como bonificaciones en su suscripción, por asumir consultas derivadas.

## 8. Stack Tecnológico Sugerido

Frontend:
- Next.js

Backend:
- Node.js

Base de datos:
- PostgreSQL

Autenticación:
- JWT

Infraestructura:
- Vercel
- AWS o similar en etapas futuras

## 9. Fuera de Alcance del MVP v1

- Retención de fondos
- Split de pagos
- Comisión por consulta
- Reintegros automáticos desde la plataforma
- Chat interno
- Expedientes digitales
- Firma digital
- IA jurídica
- App móvil nativa

## 10. Objetivo del MVP

Validar si los abogados están dispuestos a pagar una suscripción mensual por:

- Visibilidad profesional
- Captación de clientes
- Gestión de agenda
- Presencia digital organizada
- Derivación de consultas

## 11. Pantallas del MVP

### Pantallas del Cliente

1. Home / Landing
- Explica qué es Abogapp.
- Permite buscar abogados.
- Muestra beneficios principales.

2. Registro de cliente
- Nombre
- Apellido
- Email
- Contraseña
- Teléfono

3. Login
- Email
- Contraseña
- Recuperación de contraseña

4. Búsqueda de abogados
- Filtro por especialidad
- Filtro por ubicación
- Listado de abogados disponibles

5. Perfil del abogado
- Nombre
- Foto
- Especialidad
- Descripción profesional
- Valor de consulta
- Modalidad de atención
- Disponibilidad
- Botón para reservar turno

6. Reserva de turno
- Selección de día
- Selección de horario
- Confirmación de solicitud

7. Mis consultas
- Consultas pendientes
- Consultas confirmadas
- Consultas completadas
- Consultas canceladas

8. Calificación de consulta
- Puntaje
- Comentario
- Confirmación de experiencia


### Pantallas del Abogado

1. Registro de abogado
- Nombre
- Apellido
- Email
- Contraseña
- Matrícula
- Colegio profesional
- Especialidad

2. Login
- Email
- Contraseña

3. Dashboard del abogado
- Resumen de reservas
- Próximas consultas
- Estado de suscripción

4. Mi perfil profesional
- Editar datos personales
- Editar descripción profesional
- Editar especialidades
- Editar valor de consulta
- Editar medio de pago

5. Agenda y disponibilidad
- Configurar días de atención
- Configurar horarios disponibles
- Bloquear horarios específicos

6. Solicitudes de consulta
- Ver solicitudes pendientes
- Confirmar consulta
- Cancelar consulta
- Marcar consulta como completada

7. Suscripción
- Ver estado de suscripción
- Ver fecha de vencimiento
- Acceso al primer mes gratuito
- Información del plan mensual


### Pantallas del Administrador

1. Dashboard administrativo
- Total de abogados
- Total de clientes
- Total de reservas
- Incidencias abiertas

2. Gestión de abogados
- Ver abogados registrados
- Activar abogado
- Suspender abogado
- Dar de baja abogado

3. Gestión de usuarios
- Ver usuarios registrados
- Activar o desactivar usuario

4. Gestión de suscripciones
- Ver suscripciones activas
- Ver suscripciones vencidas
- Marcar suscripción como activa o vencida

5. Gestión de incidencias
- Ver cancelaciones por abogado
- Registrar advertencias
- Suspender abogado por incumplimiento

## 12. Modelo de Base de Datos

### Tabla: usuarios

- id
- nombre
- apellido
- email
- password_hash
- telefono
- rol (cliente, abogado, administrador)
- fecha_creacion
- activo

### Tabla: abogados

- id
- usuario_id
- matricula
- especialidad
- descripcion_profesional
- valor_consulta
- medio_pago
- suscripcion_activa
- fecha_alta

### Tabla: disponibilidad

- id
- abogado_id
- dia_semana
- hora_inicio
- hora_fin

### Tabla: turnos

- id
- cliente_id
- abogado_id
- fecha_hora
- estado
- observaciones
- fecha_creacion

### Tabla: calificaciones

- id
- turno_id
- cliente_id
- puntuacion
- comentario
- fecha_creacion

### Tabla: suscripciones

- id
- abogado_id
- fecha_inicio
- fecha_vencimiento
- estado

### Tabla: incidencias

- id
- abogado_id
- turno_id
- motivo
- fecha_creacion
- estado

## 13. Especialidades Jurídicas Iniciales

- Familia
- Alimentos
- Divorcio
- Comunicación y cuidado personal
- Sucesiones
- Civil
- Laboral
- Accidentes de tránsito
- Penal
- Comercial
- Consumidor
- Previsional
- Inmobiliario
- Contratos
- Daños y perjuicios

## 14. Perfil Profesional del Abogado

Cada abogado podrá completar:

- Nombre y apellido
- Fotografía profesional
- Matrícula
- Colegio profesional
- Especialidades
- Descripción profesional
- Años de experiencia
- Modalidad de atención
    - Virtual
    - Presencial
    - Ambas
- Dirección del estudio
- Valor de la consulta
- Medio de pago
- Teléfono
- Correo electrónico

## 15. Criterios de Validación del MVP

El MVP será considerado validado si durante los primeros meses de operación se verifica que:

- Los abogados completan su perfil profesional.
- Los abogados mantienen activa su suscripción.
- Los clientes realizan reservas de consultas.
- Los abogados reciben contactos genuinos.
- Se generan consultas efectivas entre clientes y profesionales.
- Existe intención real de pago por parte de los abogados para permanecer en la plataforma.

## 16. API Inicial del MVP

### Autenticación

- POST /auth/register
- POST /auth/login
- POST /auth/logout
- POST /auth/forgot-password

### Clientes

- GET /lawyers
- GET /lawyers/:id
- POST /appointments
- GET /appointments/my
- PATCH /appointments/:id/cancel
- POST /ratings

### Abogados

- GET /lawyer/profile
- PATCH /lawyer/profile
- POST /lawyer/availability
- GET /lawyer/appointments
- PATCH /lawyer/appointments/:id/confirm
- PATCH /lawyer/appointments/:id/cancel
- PATCH /lawyer/appointments/:id/complete

### Administrador

- GET /admin/users
- GET /admin/lawyers
- PATCH /admin/lawyers/:id/activate
- PATCH /admin/lawyers/:id/suspend
- GET /admin/subscriptions
- PATCH /admin/subscriptions/:id
- GET /admin/incidents
- PATCH /admin/incidents/:id

## 17. Prioridad de Desarrollo

### Fase 1 - Base del sistema

- Registro y login
- Roles
- Perfil de abogado
- Búsqueda de abogados

### Fase 2 - Agenda y reservas

- Disponibilidad del abogado
- Reserva de turnos
- Estados del turno
- Cancelaciones

### Fase 3 - Suscripción e incidencias

- Gestión de suscripción
- Incidencias por cancelación
- Panel administrador básico

### Fase 4 - Calificaciones y cierre MVP

- Calificación de consultas
- Ajustes generales
- Deploy inicial