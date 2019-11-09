import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GOTCharacterComponent implements OnInit {
  GOTCharacter:string[];
  GOTCharacterfirstname:string[] = ['john','Arya','sam','Dany'];
  GOTCharactersecondname:string[] = ['snow','stark','night','tageriayn'];
  i=0;
  stopswitch:any;
 switchstatus = true;
  switchstop(){
    clearInterval(this.stopswitch);
    this.switchstatus = true;
  }
  switchcharactername(){

  this.stopswitch = setInterval(()=>{
  if(this.i%2==0){
  this.GOTCharacter=this.GOTCharacterfirstname;  }
  else{

    this.GOTCharacter=this.GOTCharactersecondname;
  }
  this.i++
  }, 3000);
this.switchstatus = false;
  }


  constructor() {

}


  ngOnInit() {
  }

}
