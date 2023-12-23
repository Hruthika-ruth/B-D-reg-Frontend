import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swiper from 'swiper';

@Component({
  selector: 'reg-angular-birth-reg-form',
  templateUrl: './birth-reg-form.component.html',
  styleUrl: './birth-reg-form.component.scss',
})
export class BirthRegFormComponent implements OnInit {
  private swiper: Swiper | undefined;
  currentSlide = 1;
  formData: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.formData = _fb.group({
      fatherFirstName: ['', Validators.required],
      fatherLastName: ['', Validators.required],
      motherFirstName: ['', Validators.required],
      motherLastName: ['', Validators.required],
      birthAddress: ['', Validators.required],
      block: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      district: ['', Validators.required],
      localArea: ['', Validators.required],
      unionTerritory: ['', Validators.required],
    });
  }

  initSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: false,
      // initialSlide: 4,
      // autoHeight: true,
      speed: 500,
    });
  }

  slideNext() {
    if (this.swiper) {
      this.swiper.slideNext();
      this.currentSlide += 1;
    }
  }

  slidePrev() {
    if (this.swiper) {
      this.swiper.slidePrev();
      this.currentSlide -= 1;
    }
  }

  firstSlideNext() {
    this.slideNext();
    // const controls = [
    //   'fatherFirstName',
    //   'fatherLastName',
    //   'motherFirstName',
    //   'motherLastName',
    // ];

    // if (!controls.every((control) => this.formData.get(control)?.valid)) {
    //   controls.forEach((control) => {
    //     if (this.formData.get(control)?.invalid) {
    //       this.formData.get(control)?.markAsTouched();
    //     }
    //   });
    // } else {
    //   this.slideNext();
    // }
  }

  onSubmit() {
    console.log(this.formData.value);
  }
  ngOnInit(): void {
    this.initSwiper();
  }
}
