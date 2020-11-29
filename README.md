# Web_Final

Repositorio para el proyecto final de Programación Web
Requisitos:

Realiza un api con python (Como quieras) para una aplicación para médicos, en la cual los doctores se podrán registrar con su nombre, email y clave, aquí podrán llevar el control de sus pacientes, solo podrán ver sus pacientes. Los datos para registrar un paciente son:

1. Cedula
2. Foto (se puede tirar con la webcam o subirse)
3. Nombre
4. Apellido
5. Tipo de Sangre
6. Email
7. Sexo
8. Fecha de nacimiento
9. Alergias

El doctor podrá registrar visitas o consultas que le haga un paciente, en la misma seleccionará el paciente y registrará los siguientes datos.

1. Paciente (lo seleccionara)
2. Fecha
3. Motivo de la consulta
4. #de seguro.
5. Monto pagado
6. Diagnóstico
7. Nota (que paso en la visita)
8. Puede agregar una foto o archivo de alguna evidencia de la consulta.

En cualquier momento el médico podrá consultar y modificar los datos del paciente, así como las visitas que él ha realizado.
Cuando el médico inicie sesión podrá gestionar sus datos y accede a los siguientes reportes:

1. Visitas por fecha, podrá seleccionar una fecha y saldrá los pacientes que visitaron en esa fecha.
2. Reporte zodiacal, aparecerá un listado de todos los pacientes cedula, nombre, apellido y signo zodiacal.
3. Reporte de pacientes con cantidad de visitas, aparecerá un listado con todos los pacientes registrados y al lado la cantidad de consultas que ha hecho ese paciente.

Debe realizar una aplicación web (Angular) y una aplicación móvil en APK. Puedes usar IONIC o la plataforma que prefieras. Ambas deben consumir la misma api. De tal manera de que si me registro usando la web; puedo iniciar sesión en el móvil y lo inverso.
