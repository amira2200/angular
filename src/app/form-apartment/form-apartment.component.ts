import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent implements OnInit {
  apartForm : FormGroup = new FormGroup({
    ApartmentNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    FloorNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    Surface: new FormControl('',[Validators.required]),
    SurfaceTerrace: new FormControl({value: '', disabled: true },[Validators.required]),
    Terrace: new FormControl ('',[Validators.required] ),
    Description: new FormControl('',[Validators.required, Validators.minLength(10)]),
    Residence: new FormControl('',[Validators.required]),
    Category: new FormControl ('',[Validators.required] ),


  });

 terraceOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'NO' }

  ]; 

  
 CategoryOptions = [
  { label: 'S1', value: 'S1' },
  { label: 'S2', value: 'S2' },
  { label: 'S3', value: 'S3' }


]; 

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  // Récupérer l'ID de la résidence depuis l'URL
  const residenceIdFromUrl = this.route.snapshot.paramMap.get('residenceId');

  // Préremplir le champ Residence avec l'ID récupéré
  this.apartForm.get('Residence')?.setValue(residenceIdFromUrl);
}
// Méthode pour réagir aux changements de la valeur de Terrace
onTerraceChange(): void {
  const terraceValue = this.apartForm.get('Terrace')?.value;

  // Activer ou désactiver le champ SurfaceTerrace en fonction de la valeur de Terrace
  if (terraceValue === 'Yes') {
    this.apartForm.get('SurfaceTerrace')?.enable();
  } else {
    this.apartForm.get('SurfaceTerrace')?.disable();
  }
}


   


}
