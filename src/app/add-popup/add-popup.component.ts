import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/utils/services/common/common.service';
@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.scss']
})
export class AddPopupComponent implements OnInit {
  public addItemForm: FormGroup;
  public submitted:boolean = false;
  public themecolor:any;
  public editdata:any = null;
  public refresh:boolean = true;
  public button = "Add";
  public title = "Add Task"
  constructor(
    private formBuilder: FormBuilder,
    private DialogRef:MatDialogRef<AddPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private commonService:CommonService
  ) {
    this.themecolor = data.theme;
    if(data.data){
      this.editdata = data.data;
      this.title = "Update Task"
      this.button = "Update"
      
    }
   }

  ngOnInit() {
    console.log("data",this.data)
    this.addItemForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
     
  });
  if(this.editdata){
    this.addItemForm.controls.title.setValue(this.editdata.title); 
    this.addItemForm.controls.text.setValue(this.editdata.text); 
  }
  }
  close(){
    this.refresh = false;
    this.DialogRef.close(false);

  }

  onSubmit(){
    
    if(this.refresh){
    console.log("this.addItemForm",this.addItemForm);
    this.submitted = true;
    
    if(this.addItemForm.status == "VALID"){
      if(this.editdata){
      // this.editdata.title = this.addItemForm.controls.title.value;
      // this.editdata.text = this.addItemForm.controls.text.value
      let data = {};
      data = {'title':this.addItemForm.controls.title.value,
       text:this.addItemForm.controls.text.value};
      this.updateData(data);

      }else{
      let data = {};
      data = {'title':this.addItemForm.controls.title.value,
       text:this.addItemForm.controls.text.value};
       this.savedata(data);
      }
    }
  
  }
    
  }

  get f() { return this.addItemForm.controls; }
  savedata(data){
    this.commonService.postData("",data).
    subscribe(res=>{
      this.DialogRef.close(true);
     
    })
  }
  updateData(data){
    this.commonService.putData('/'+this.editdata.id,data).
    subscribe(res=>{
      this.DialogRef.close(true);
     
    })
  }

}
