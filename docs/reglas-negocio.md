# Abogapp - Reglas de Negocio

## Usuarios

### Cliente
- Puede registrarse gratuitamente.
- Puede reservar consultas.
- Puede calificar abogados luego de una consulta completada.

### Abogado
- Debe completar perfil profesional.
- Debe informar matrícula profesional.
- Debe seleccionar especialidades.
- Puede fijar el valor de sus consultas.
- Puede administrar su disponibilidad.

## Reservas

- Un horario solo puede reservarse una vez.
- El cliente debe confirmar la reserva.
- El abogado puede aceptar o rechazar la solicitud.
- Las reservas canceladas liberan el horario.

## Pagos

- El cliente paga antes de la consulta.
- La plataforma retiene el pago hasta finalizar la consulta.
- Se descuenta la comisión de la plataforma.
- El saldo restante corresponde al abogado.

## Calificaciones

- Solo pueden calificarse consultas completadas.
- Cada consulta admite una única calificación.
- El abogado no puede modificar la calificación.

## Incidencias

### Cancelación por cliente
- Se registra en el historial.

### Cancelación por abogado
- Se registra en el historial.
- Se incrementa el contador de incidencias.

### Reiteración de incumplimientos
- El administrador puede suspender la cuenta.

## Administración

- Puede aprobar abogados.
- Puede suspender abogados.
- Puede suspender clientes.
- Puede resolver incidencias.