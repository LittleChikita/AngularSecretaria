import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FuncionarioService} from '../../services/funcionario-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.scss'
})
export class FuncionarioFormComponent implements OnInit{
  formFuncionario: FormGroup;

  constructor(
    private service: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formFuncionario = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cargo: new FormControl('', Validators.required),
      salario: new FormControl('', [Validators.required, Validators.min(0.01)]),
      dataAdmissao: new FormControl('', Validators.required),
      ativo: new FormControl(true)
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.service.buscarPorId(id).subscribe(f => this.formFuncionario.patchValue(f));
    }
  }

  submit() {
    if (this.formFuncionario.valid) {
      this.service.salvar(this.formFuncionario.value).subscribe(() => {
        alert('Funcionário salvo com sucesso!');
        this.router.navigate(['/']);
      });
    }
  }
}
