import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [AsideComponent, MainComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
