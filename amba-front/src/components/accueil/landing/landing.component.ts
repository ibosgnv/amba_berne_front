import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApercuService } from '../apercu-service/apercu-service.component';
import { Actualites } from '../actualites/actualites.component';
import { InfosUtiles } from '../infos-utiles/infos-utiles.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ApercuService, Actualites, InfosUtiles],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class Landing {}
