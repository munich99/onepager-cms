import { Component, OnInit } from '@angular/core';
import { FileService } from '../_service/file.service';
import { FormBuilder, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  form: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private formBuilder: FormBuilder, private _FileService: FileService) { }

 
  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }


  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);

    this._FileService.upload(formData, this.userId).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }

  




}
