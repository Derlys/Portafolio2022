import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./ui/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    // If this path is the 'full' match...
    pathMatch: "full",
    // ...redirect to this route.
    redirectTo: "about"
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "about",
        loadChildren: () =>
          import("./pages/about/about.module").then((m) => m.AboutModule)
      },
      {
        path: "portfolio",
        loadChildren: () =>
          import("./pages/portfolio/portfolio.module").then(
            (m) => m.PortfolioModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
