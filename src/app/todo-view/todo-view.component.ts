import { Component, OnInit } from '@angular/core';
import { AddPopupComponent} from '../add-popup/add-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/utils/services/common/common.service';
@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {
  themearray= [];
  themecolor:any;
  displayItemarray = [];
  
  constructor(private dialog: MatDialog,
    private commonService:CommonService) { 
    this.themearray.push("Dark");
    this.themearray.push("Light");
    this.themecolor = "Light";
  //   this.displayItemarray = [{'title': 'test','text':'test'},
  //   {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'}, {'title': 'test','text':'test'},
  // ];
  }

  ngOnInit() {
    this.getdata();
  }
  openDialog(Data){
      
      const dialogRef = this.dialog.open(AddPopupComponent, {
          width: '700px',
          data: {
              data: Data,
              theme: this.themecolor
          }
      });
      dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.getdata();
            

          }
      });
  }
  getdata(){
    this.commonService.getData('')
     .subscribe(response => {
      this.displayItemarray =response ;
     });

}
deleterow(index){
this.commonService.deleteData('/'+index)
    .subscribe(response => {
      this.getdata();
    });
  }

  editrow(item){
    this.openDialog(item);
  }

}
