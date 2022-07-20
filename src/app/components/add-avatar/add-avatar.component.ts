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
  avatar: File | null
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

  saveAvatar() {
    this.authService.addAvatar(this.form.value).subscribe()
  }

  // handleFileInput(files: FileList) {
  //   this.avatar = files.item(0)
  // }
}
