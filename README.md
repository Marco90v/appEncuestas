# AppEncuestas

App desarrollada como ejercicio de angular. <br>
Desarrollada en Angular, con Bootstrap, Angular Material y Chartjs. <br>
Esta es app consiste en un sistema de encuestas para medir el nivel de satisfacción de un usuario con respecto a un producto o servicio. <br>

### Funcionamiento

#### Inicio
En la vista principal se puede ver las encuestas existentes que puede realizar el usuario visitante. <br>
Al hacer clic en el botón "Iniciar" comenzar a realizar la encuesta, al finalizar la encuesta volverá a la vista inicial. <br>
Al hacer clic en botón Ingresar llevara al Dashboard (al ser un ejercicio se omitió realizar un login real). <br>

#### Dashboard
El la vista de Dashboard se podrá ver del lado izquierdo un menu que con 3 enlaces, para regresar al inicio, crear encuesta nueva y ver el listado de las Encuestas creadas. <br>
Del lado derecho se vera las vista para crear encuesta, Editar y el listado de encuestas creadas. <br>
Al hacer clic en botón Nuevo, del lado derecho cargara la nueva vista, deberá colocar un titulo para la encuesta y en el botán "Agregar pregunta", deberá hacer clic para agregar las preguntas que desea evaluar junto con una opción de respuesta. <br>
Las opciones de respuesta pueden ser Si/No, o selección de rango entre 1 al 5 y selección de rango entre el 1 al 10. <br>
Haga click en el botón Guardar para guardar la nueva encuesta. <br>
Al hacer clic en el botón Lista de Encuestas en el menu izquierdo, podrá ver la lista de las encuestas creadas como se muestras en la vista inicial, pero estaba vez con 3 opciones. <br>
Botón Eliminar el cual borra toda la encuesta junto con los resultados. <br>
Botón Editar, carga la misma vista para crear nueva encuestas, pero estaba ves con los datos de la encuesta seleccionada, para realizar cambios en ella. <br>
Botón Resultados, podrá ver los resultados de la encuesta realizada.


#### Adicional
La aplicación solo esta basada en el frontend por lo que no las encuestas y los resultados de las mismas se almacenan en el localstorage del navegador. <br>
En forma de prueba se cargo una encuesta en y resultados que son importados en el services/action.ts. <br>
El método getStorage() extrae la información del localstorage, allí mismo podrá ver dos lineas de código comentado, son las que se utilizan para ejecutar la app sin la data pre diseñada, también puede remplazar las variables "preguntasStorage" y "respuestasStorage" por "[]" <br>


<br>

# AppEncuestas

App developed as an angular exercise. <br>
Developed in Angular, with Bootstrap, Angular Material and Chartjs. <br>
This application consists of a survey system to measure the level of user satisfaction with a product or service. <br>

### Working

#### Start
In the main view you can see the interviews that the visiting user can carry out. <br>
Clicking on the "Start" button will start the survey, at the end of the survey you will return to the initial view. <br>
Clicking on the Enter button will take you to the Dashboard (as it was an exercise, a real login was omitted). <br>

#### Board
The Dashboard view can be seen on the left side in a menu with 3 links, to return to the beginning, create a new survey and see the list of Surveys created. <br>
On the right side you will see the views to create a survey, Edit and the list of created surveys. <br>
Clicking on the New button, on the right side will load the new view, you must place a title for the survey and in the "Add question" button, you must click to add the questions you want to evaluate together with an answer option. <br>
The answer options can be Yes / No, or range selection between 1 to 5 and range selection between 1 to 10. <br>
Click the Save button to save the new survey. <br>
By clicking the Survey List button in the left menu, you will see the list of created surveys as shown in the initial view, but this time with 3 options. <br>
Delete button which deletes the entire survey along with the results. <br>
Edit button, loads the same view to create new evaluations, but you were with the data of the selected survey, to make changes to it. <br>
Results button, you can see the results of the survey carried out.


#### Additional
The application is only based on the frontend, so no surveys and their results are stored in the browser localstorage. <br>
As a test, a survey is loaded in and results are imported into the services / action.ts. <br>
The getStorage () method extracts the information from the localstorage, right there you will see two lines of commented code, they are the ones that can be used to run the application without the previous data, you can also replace the variables "questionsStorage" and "answersStorage" with " [] "<br>


<br>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
