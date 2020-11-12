# API
Desarrollado en un entorno python (virtualenv)
Para funcionar correctamente debe usarse en un entorno python
El servidor usado es hypercorn

Nota:
Para activar el api correctamente siga los siguientes pasos:

	*Ubique la carpeta en una direccion sin espacios, preferiblemente en la raiz del disco (para evitar errores de ruta).
	*Abra la consola en dicha carpeta y use los comandos: 
	1. cd Scripts
	2. activate
	3. cd ..
	*Por ultimo use el comando: hypercorn main:app
	*Para desactivarlo use el comando deactivate