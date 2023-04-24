import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
type Any = any[];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  uploadedFiles: FileUpload[] = []; // <- Agregar la propiedad uploadedFiles

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file); // Agregar el archivo cargado a uploadedFiles
    }
  }
}
