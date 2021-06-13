import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Output() complete = new EventEmitter();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  completeHandler() {
    console.log('Card Complete');
    this.complete.emit('EMITTING DATA');
    this.userService.fetchUsers();
  }

}
