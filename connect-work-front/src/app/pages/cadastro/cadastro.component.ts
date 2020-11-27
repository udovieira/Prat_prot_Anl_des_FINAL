import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroContratante: FormGroup;
  cadastroContratado: FormGroup;
  tipoCadastro: string = 'contratante';

  constructor(    
    private fb: FormBuilder,
    ) { }

    public checks = [
      {description: 'descr1', value: 'value1'},
      {description: "descr2", value: 'value2'},
      {description: "descr3", value: 'value3'}
    ];

  ngOnInit(): void {
    this.cadastroContratante = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.cadastroContratado = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      servicos: new FormArray([]),

    });
  }

  cadastrarContratante(){
    console.log(this.cadastroContratante)

  }

  cadastrarContratado(){
    console.log(this.cadastroContratado)
    
  }

  onCheckChange(event) {
    const formArray: FormArray = this.cadastroContratado.get('servicos') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }
}
