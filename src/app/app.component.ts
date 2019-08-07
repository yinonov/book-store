import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  updateChannel = new BroadcastChannel('app-shell');

  ngOnInit() {
    this.updateChannel.addEventListener('message', e => {
      alert('update');
    });
  }

}
