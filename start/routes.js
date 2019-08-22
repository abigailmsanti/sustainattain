"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

//landing page
Route.on('/').render('home')

Route.on("/result").render("impact");

Route.on("/quizTest").render("quiz/quizTest");

//Route.get("quizTest/:id", ({ view, params }) => {
 // return view.render(`quiz/${params.id}`);
//});

Route.on("/test").render("test");
