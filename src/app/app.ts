import { Component, signal } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Header} from '@widgets/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('movie-app');
}
