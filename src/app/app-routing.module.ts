import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';     // Add your component here
import { ProductComponent } from './pages/product/product.component';  // Add your component here
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

//This is my case 
const routes: Routes = [
    
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'product/:productKey',
        component: ProductComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: '',
        component: HomeComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }