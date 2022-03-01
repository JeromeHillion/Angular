import { Component, OnInit, Input} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!:FaceSnapModel

  buttonText!: string;

  ngOnInit() {

    this.buttonText = 'Oh snap !'
  }

  onSnap() {
    if (this.buttonText === 'Oh snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    }
    else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh snap !';
    }


  }
}
