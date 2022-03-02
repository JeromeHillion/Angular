import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "Kermit",
      description: "Mon ami ami depuis tout petit",
      createdDate: new Date(),
      snaps: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/27/23/29/kermit-2687975_960_720.jpg",
      location: "Etats Unis"

    },

    {
      id: 2,
      title :"Steack",
      description :"Steack beurre maitre d'hôtel",
      createdDate :new Date(),
      snaps : 0,
      imageUrl:"https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"

    },

    {
      id: 3,
      title :"Deadpool",
      description :" Première fois que je dis ça, t'avale surtout pas.",
      createdDate: new Date(),
      snaps : 0,
      imageUrl:"https://cdn.pixabay.com/photo/2019/03/21/02/51/deadpool-4070071_960_720.jpg",
      location :"Canada"

    }

  ]

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  snapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if (faceSnap) {
      faceSnap.snaps++;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }
}
