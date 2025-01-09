import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InicioComponent } from './componentes/home/inicio/inicio.component';
import { MaterialModule } from './material/material.module';
import { ParticipanteListaComponent } from './componentes/participante/participante-lista/participante-lista.component';
import { ParticipanteCardComponent } from './componentes/participante/participante-card/participante-card.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TerraComponent } from './componentes/cenario-espacial/terra/terra.component';
import { LuaComponent } from './componentes/cenario-espacial/lua/lua.component';
import { FogueteComponent } from './componentes/cenario-espacial/foguete/foguete.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ParticipanteListaComponent,
    ParticipanteCardComponent,
    TerraComponent,
    LuaComponent,
    FogueteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
