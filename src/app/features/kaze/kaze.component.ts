import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextComponent} from '../text/text.component';
import {VideoComponent} from '../video/video.component';

@Component({
  selector: 'app-kaze',
  templateUrl: './kaze.component.html',
  styleUrls: ['./kaze.component.css'],
  standalone: true,
  imports: [CommonModule, TextComponent,
    VideoComponent],
})
export class KazeComponent {}


