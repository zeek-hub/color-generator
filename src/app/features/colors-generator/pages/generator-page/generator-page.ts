import {GeneratorForm} from '../../components/generator-form/generator-form';
import {GeneratorResult} from '../../components/generator-result/generator-result';
import {Component, AfterViewInit, ElementRef} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ColorModel} from '../../models/ColorModel.model';
import {NgOptimizedImage} from '@angular/common';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-generator-page',
  imports: [
    GeneratorForm,
    GeneratorResult,
    NgOptimizedImage,
  ],
  templateUrl: './generator-page.html',
  styleUrl: './generator-page.css',
})
export class GeneratorPage implements AfterViewInit {
  private blobs!: ElementRef[];
  private navLinks!: ElementRef[];
  private colorWheel!: ElementRef;
  public color: ColorModel = {
    RGBA: {
      r: 100,
      g: 100,
      b: 100,
      a: 255,
      fullColor: `rgb(${100},${100},${100},${255})`
    },
    HEX: '#646464FF'
  };
  constructor(private el: ElementRef) {}
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',

    });
  }
  ngAfterViewInit(): void {
    this.blobs = Array.from(
      this.el.nativeElement.querySelectorAll('.blob')
    );
    this.navLinks = Array.from(
      this.el.nativeElement.querySelectorAll('.nav-link')
    )
    this.colorWheel = this.el.nativeElement.querySelectorAll('.color-wheel')
    this.blobs.forEach((blob: any, i) => {
      gsap.to(blob, {
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        duration: 5 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    window.addEventListener('mousemove', (e) => {
      const max = 80;
      const x = (e.clientX / window.innerWidth - 0.5) * 2 * max;
      const y = (e.clientY / window.innerHeight - 0.5) * 2 * max;
      gsap.to(this.blobs, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
    });
    this.navLinks.forEach((link: any) => {
      link.addEventListener('click', () => {
        const clickAnimation = [
          { transform: "translateY(0)" },
          { transform: "translateY(-15px)" },
          { transform: "translateY(-13px)" },
          { transform: "translateY(0)" },
        ];
        const clickTiming = {
          duration: 500,
          iterations: 1,
        }
        link.animate(clickAnimation, clickTiming);
      })
    });
    gsap.to(this.colorWheel, {
      y: '100vh',
      rotate: 59,
      opacity: 1,
      filter: 'blur(1px)',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'center center',
        scrub: true,
      }
    })
  }
  public onColor(event: ColorModel){
    this.color = event;
    this.scroll('result-section');
  }
}
