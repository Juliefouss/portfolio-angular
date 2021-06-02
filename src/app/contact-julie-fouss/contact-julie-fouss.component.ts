import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../services/message/message.service';
import {ContactMessage} from '../services/message/contact-message.model';
import {DateTime} from 'luxon';




@Component({
  selector: 'app-contact-julie-fouss',
  templateUrl: './contact-julie-fouss.component.html',
  styleUrls: ['./contact-julie-fouss.component.css']
})
export class ContactJulieFoussComponent implements OnInit{

  contactForm!: FormGroup;
  formSend = false;

  constructor( private formBuilder: FormBuilder , private messageService: MessageService) { }

  ngOnInit(): void {
    this.initForm();
  }
  // pour pouvoir envoyer les données reçues par le formulaire et les insérer dans la base de données
  // il faut vérifier les paramètres
 initForm(): void{
    this.contactForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numero: ['', Validators.required],
      mail : ['', Validators.email],
      message: ['', Validators.required],
      date: ['']
   });
 }
 // envoyer les données du formulaire avec les valeurs et donc créer un nouveau message dans la base de données
onSubmit(): void {

  if (this.contactForm.valid){
     const message = new ContactMessage(
       this.contactForm.value.nom,
       this.contactForm.value.prenom,
       this.contactForm.value.numero,
       this.contactForm.value.mail,
       this.contactForm.value.message,
       DateTime.now()
     );
     console.log('nouveau message', message);

     this.messageService.create(message)
     .subscribe(() => this.formSend = true);
     this.contactForm.reset();
  }
}

}
