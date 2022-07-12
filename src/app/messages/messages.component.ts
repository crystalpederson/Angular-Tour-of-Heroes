import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //inject the MessageService into the messageService property when this component is created.
  //must be public bc we will bind it in to the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
