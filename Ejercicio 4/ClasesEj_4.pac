| package |
package := Package name: 'ClasesEj_4'.
package paxVersion: 1;
	basicComment: ''.

package classNames
	add: #Alumno;
	add: #Comision;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\..\..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\..\..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\..\..\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

Object subclass: #Alumno
	instanceVariableNames: 'legajo nota'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

Object subclass: #Comision
	instanceVariableNames: 'alumnos'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"End of package definition"!

"Source Globals"!

"Classes"!

Alumno guid: (GUID fromString: '{0dad7a21-d96a-4c71-9625-dd98ab148da7}')!

Alumno comment: ''!

!Alumno categoriesForClass!Kernel-Objects! !

!Alumno methodsFor!

ingresarAlumno
self legajo: (Prompter prompt: 'Ingrese el legajo del alumno')asNumber.
self nota: (Prompter prompt: 'Ingrese la nota del alumno')asNumber.
!

legajo
	^legajo!

legajo: anObject
	legajo := anObject!

nota
	^nota!

nota: anObject
	nota := anObject! !

!Alumno categoriesForMethods!
ingresarAlumno!public! !
legajo!accessing!public! !
legajo:!accessing!public! !
nota!accessing!public! !
nota:!accessing!public! !
!

Comision guid: (GUID fromString: '{3bc619aa-8110-4cff-b13d-7479bfe76260}')!

Comision comment: ''!

!Comision categoriesForClass!Kernel-Objects! !

!Comision methodsFor!

alumnos
	^alumnos!

alumnos: anObject
	alumnos := anObject!

alumnosMayMitadProm
|acum objetos prom promMitad|
acum:=0.
alumnos do: [:alumnos | acum:=  acum + alumnos nota ].
prom:=acum/(alumnos size).
promMitad:= (prom/2)asFloat.
objetos:=alumnos select: [:alumnos | alumnos nota >= (promMitad ) and: [alumnos nota < prom]  ].
Transcript show:  'Alumnos que superan la mitad del promedio'.
Transcript cr. 
Transcript show:  'LEGAJO'. Transcript tab. Transcript show: 'NOTA'. Transcript cr.
objetos do: [:alumnos | Transcript show:  (alumnos legajo)printString. Transcript tab . Transcript show: (alumnos nota)printString . Transcript cr ].
!

alumnosMayProm
|acum objetos prom|
acum:=0.
alumnos do: [:alumnos | acum:=  acum + alumnos nota ].
prom:=acum/(alumnos size).
objetos:=alumnos select: [:alumnos | alumnos nota >= prom ].
Transcript show:  'Alumnos que superan el promedio'.
Transcript cr. 
Transcript show:  'LEGAJO'. Transcript tab. Transcript show: 'NOTA'. Transcript cr.
objetos do: [:alumnos | Transcript show:  (alumnos legajo)printString.
Transcript tab .
Transcript show: (alumnos nota)printString .
Transcript cr ].
!

alumnosMenProm
|acum objetos prom promMitad|
acum:=0.
alumnos do: [:alumnos | acum:=  acum + alumnos nota ].
prom:=acum/(alumnos size).
promMitad:= (prom/2)asFloat.
objetos:=alumnos select: [:alumnos | alumnos nota < (promMitad ) ].
Transcript show:  'Alumnos que superan no superan la mitad del promedio'.
Transcript cr. 
Transcript show:  'LEGAJO'. Transcript tab. Transcript show: 'NOTA'. Transcript cr.
objetos do: [:alumnos | Transcript show:  (alumnos legajo)printString. 
Transcript tab . 
Transcript show: (alumnos nota)printString .
Transcript cr ].
!

cantidadAlumnos
MessageBox notify: 'La cantidad de allumnos es: ',(alumnos size)printString .!

inicializar
alumnos:= OrderedCollection new.!

inscribirAlumno: al
alumnos add: al.!

promedioAlumnos
|acum|
acum:=0.
alumnos do: [:alumnos | acum:=  acum + alumnos nota ].
MessageBox notify: 'El promedio de nota de los alumnos es:', (acum / (alumnos size))printString.! !

!Comision categoriesForMethods!
alumnos!accessing!public! !
alumnos:!accessing!public! !
alumnosMayMitadProm!public! !
alumnosMayProm!public! !
alumnosMenProm!public! !
cantidadAlumnos!public! !
inicializar!public! !
inscribirAlumno:!public! !
promedioAlumnos!public! !
!

"Binary Globals"!

