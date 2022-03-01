import { Component,OnInit } from '@angular/core';
import {FaceSnapModel} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!:FaceSnapModel[];
/*mySnap!:FaceSnapModel
mySecondSnap!:FaceSnapModel
myThirdSnap!:FaceSnapModel*/

  ngOnInit() {

    this.faceSnaps = [
      {
        title: "Kermit",
        description: "Mon ami ami depuis tout petit",
        createdDate: new Date(),
        snaps: 0,
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/27/23/29/kermit-2687975_960_720.jpg",
        location: "Etats Unis"

      },

      {
        title :"Steack",
        description :"Steack beurre maitre d'hôtel",
        createdDate :new Date(),
        snaps : 0,
        imageUrl:"https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"

      },

      {
        title :"Deadpool",
        description :" Première fois que je dis ça, t'avale surtout pas.",
        createdDate: new Date(),
        snaps : 0,
        imageUrl:"https://cdn.pixabay.com/photo/2019/03/21/02/51/deadpool-4070071_960_720.jpg",
        location :"Canada"

      }

    ]
  /*this.mySnap = {
    title: "Kermit",
    description: "Mon ami ami depuis tout petit",
    createdDate: new Date(),
    snaps: 0,
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/27/23/29/kermit-2687975_960_720.jpg",
    location: "Etats Unis"

  }
  this.mySecondSnap = {
     title :"Steack",
      description :"Steack beurre maitre d'hôtel",
      createdDate :new Date(),
     snaps : 0,
    imageUrl:"https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"

  }

  this.myThirdSnap = {
    title :"Deadpool",
    description :" Première fois que je dis ça, t'avale surtout pas.",
    createdDate: new Date(),
    snaps : 0,
    imageUrl:"https://cdn.pixabay.com/photo/2019/03/21/02/51/deadpool-4070071_960_720.jpg",
    location :"Canada"

  }
*/
  }

}
