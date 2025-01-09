import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-participante-card',
  standalone: false,

  templateUrl: './participante-card.component.html',
  styleUrl: './participante-card.component.scss'
})
export class ParticipanteCardComponent {


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'custom_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/EstrelaPontos.svg'),

    );

    this.matIconRegistry.addSvgIcon(
      'trofeu_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/trofeuPontos.svg')
    );
  }

}
