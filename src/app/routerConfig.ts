import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ControlesComponent } from './controles/controles.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'categorias',
        component: CategoriasComponent
    },
    {
        path: 'plantilla',
        component: PlantillaComponent
    },
    {
        path: 'controles',
        component: ControlesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
export default appRoutes;