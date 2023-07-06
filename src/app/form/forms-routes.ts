import { Route } from '@angular/router';

export const formsRoutes: Route[] = [
    {
        path:'',
        loadComponent:()=>import('./pages/reactive/reactive.component').then((m=>m.ReactiveComponent))
    },
    {
        path:'template',
        loadComponent:()=>import('./pages/tempale-form/tempale-form.component').then((m=>m.TempaleFormComponent))
    }
];
