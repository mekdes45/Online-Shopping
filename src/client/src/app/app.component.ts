import { Component } from '@angular/core';
import { SocketioService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'client';
  constructor(private socketService: SocketioService) {}

  ngOnInit() {
    this.socketService.getMessage().subscribe(message => { console.log(message); });
  }
}
