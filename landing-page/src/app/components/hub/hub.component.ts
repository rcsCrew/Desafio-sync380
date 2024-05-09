import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // NgIf  NgForOf   NgSwitch   DatePipe   UpperCasePipe   LowerCasePipe
import { FormsModule } from '@angular/forms'; // NgModel  ngForm   ngSubmit FormsModule  required  minLength  maxLength 



@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
   ],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss'
})
export class HubComponent {
  // Variáveis para armazenar os dados do formulário
  nome: string = '';
  idade: number = 0;
  enderecoRua: string = '';
  enderecoBairro: string = '';
  enderecoEstado: string = '';
  biografia: string = '';

  // Array para armazenar os dados da tabela
  users: any[] = [];

  constructor() { }

  onSubmit() {
    // Verifica se algum campo está vazio
    if (!this.nome || this.nome.trim() === '' ||
        !this.idade || this.idade < 0 || 
        !this.enderecoRua || this.enderecoRua.trim() === '' ||
        !this.enderecoBairro || this.enderecoBairro.trim() === '' ||
        !this.enderecoEstado || this.enderecoEstado.trim() === '' ||
        !this.biografia || this.biografia.trim() === '') {
      // Exibe um alerta informando que todos os campos são obrigatórios
      alert('Todos os campos são obrigatórios');
      return; // Impede o envio do formulário se algum campo estiver vazio
    }
    // Adiciona os dados do formulário ao array de usuários
    this.users.push({
      nome: this.nome,
      idade: this.idade,
      enderecoRua: this.enderecoRua,
      enderecoBairro: this.enderecoBairro,
      enderecoEstado: this.enderecoEstado,
      biografia: this.biografia
    });

    // Limpa os campos do formulário
    this.clearForm();
  }
  // assim que mandar ele seta todos os campos como novo formulário
  clearForm() {
    this.nome = '';
    this.idade = 0;
    this.enderecoRua = '';
    this.enderecoBairro = '';
    this.enderecoEstado = '';
    this.biografia = '';
  }
}
  
  

