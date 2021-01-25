import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  private AlertMessage: string;

  constructor(public alertController: AlertController) { }

  async openAlert(event){
    
    this.AlertMessage = "Are you shure you want to create a new user?";
    let that = this;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New User',
      message: that.AlertMessage,
      buttons: [
        {
          text: "Yes",
          handler: function(){
            console.log("Yes is clicked");
          }
        }, 'Cancel']
    });

    this.test((data)=>{
      console.log("The callback for the called function");
      console.log(data);
    })

    await alert.present();
  }


  test(callback){
    console.log("this is the called function");
    callback({'status': 'success', 'message': '200'});
  }

  ngOnInit() {}

}
