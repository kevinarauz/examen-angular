import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';

const routes: Routes = [
    { path: '', redirectTo: 'pantallaExamen', pathMatch: 'full'},
    { path: 'pantallaExamen', component: PantallaExamenComponent  }
];

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {}