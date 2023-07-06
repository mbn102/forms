import {Route} from '@angular/router';


//Todo add roleGuard to routes
export const appRoutes: Route[] = [
    {
        path:'',
        loadChildren:()=>import('./form/forms-routes').then((m)=>m.formsRoutes)
    }
];
