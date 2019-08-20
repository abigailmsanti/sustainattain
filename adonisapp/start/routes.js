'use strict'

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
const Route = use('Route')


//landing page
Route.on('/home').render('home')

Route.on('/result').render('impact')
Route.on('/quiz1').render('quiz1')

Route.on('/quiz2').render('quiz2')

Route.on('/quiz3').render('quiz3')

Route.on('/quiz4').render('quiz4')

Route.on('/quiz5').render('quiz5')

Route.on('/quiz6').render('quiz6')

Route.on('/quiz7').render('quiz7')

Route.on('/quiz8').render('quiz8')

Route.on('/test').render('test')




