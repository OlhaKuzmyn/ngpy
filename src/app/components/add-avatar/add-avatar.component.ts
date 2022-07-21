import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.css']
})
export class AddAvatarComponent implements OnInit {
  form: FormGroup
  // avatar: File | null
  avatar: File
  constructor(private authService:AuthService) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm():void {
    this.form = new FormGroup({
      avatar: new FormControl(null)
    })
  }

  // saveAvatar() {
  //   this.authService.addAvatar(this.form.value).subscribe()
  // }

  // handleFileInput(files: FileList) {
  //   this.avatar = files.item(0)
  //
  // }
  // handleFileInput(event: Event) {
  //   this.avatar = event.target?.files[0]
  // }
  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log(fileList)
      this.avatar = fileList[0]
      console.log(this.avatar);
      this.authService.addAvatar(this.avatar).subscribe()
    }
  }
}
