import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  selectedIndex: number;
  images: string[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = [
    '../../../assets/gallery/1.jpg',
    '../../../assets/gallery/2.jpg',
    '../../../assets/gallery/3.jpg',
    '../../../assets/gallery/4.jpg',
    '../../../assets/gallery/5.jpg',
    '../../../assets/gallery/6.jpg',
    '../../../assets/gallery/7.jpg',
    '../../../assets/gallery/8.jpg',
    '../../../assets/gallery/9.jpg',
    '../../../assets/gallery/10.jpg',
    '../../../assets/gallery/11.jpg',
    '../../../assets/gallery/12.jpg',
    '../../../assets/gallery/13.jpg',
    '../../../assets/gallery/14.jpg',
    '../../../assets/gallery/15.jpg'
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      width: '80%',
      height: '95vh',
      data: { selectedIndex: index, images: this.images } as DialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onLeftHover(event: any) {
    console.log('leftHover!', event);
  }

  onRightHover(event: any) {
    console.log('rightHover!', event);
  }
}

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

}

