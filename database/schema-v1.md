# Base de Datos MVP

## users

- id
- nombre
- apellido
- email
- password_hash
- telefono
- rol (cliente, abogado, admin)
- fecha_creacion
- activo

## lawyers

- id
- user_id
- matricula
- especialidad
- descripcion
- valor_consulta
- aprobado
- calificacion_promedio

## availabilities

- id
- lawyer_id
- fecha
- hora_inicio
- hora_fin
- disponible

## bookings

- id
- cliente_id
- abogado_id
- fecha
- hora
- estado
  - pendiente
  - aceptada
  - rechazada
  - cancelada
  - completada

## payments

- id
- booking_id
- monto
- comision
- monto_abogado
- estado

## reviews

- id
- booking_id
- cliente_id
- abogado_id
- puntaje
- comentario

## incidents

- id
- abogado_id
- booking_id
- motivo
- fecha
- resuelta