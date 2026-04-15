import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, HostListener,
  Input, OnDestroy,
  ViewChild
} from '@angular/core';
import {ColorModel} from '../../models/ColorModel.model';
import {NgIf} from '@angular/common';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
@Component({
  selector: 'app-generator-result',
  imports: [
    NgIf
  ],
  templateUrl: './generator-result.html',
  styleUrl: './generator-result.css',
})
export class GeneratorResult implements  AfterViewInit {
  @ViewChild('star', {static: true}) starEl!: ElementRef;
  @ViewChild('text', {static: true}) textEl!: ElementRef;
  @ViewChild('box', {static: true}) boxEl!: ElementRef;
  @ViewChild('previewBoxCanvas', { static: false }) previewBoxCanvas!: ElementRef;
  @Input() set color(color: ColorModel) {
    this._color = color;
    if(this.material){
      const alphaHex = this._color.HEX.slice(7, 9);
      const alpha = parseInt(alphaHex, 16) / 255;
      this.material.opacity = alpha;
      this.material.color.set(this._color.HEX.slice(0, 7));
    }
  }
  public _color!: ColorModel;
  private material!: MeshBasicMaterial;

  public RGBACopied: boolean = false;
  public HEXCopied: boolean = false;

  constructor(private cdf: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const canvas = this.previewBoxCanvas.nativeElement;
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const scene = new Scene();
    const geometry = new BoxGeometry(.7, .7, .7)
    this.material = new MeshBasicMaterial({
      color: this._color.HEX.slice(0, 7),
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });
    const mesh = new Mesh(geometry, this.material);
    scene.add(mesh);
    mesh.position.set(0.7, -1.3, 1);
    const camera = new PerspectiveCamera()
    camera.position.z = 3;
    camera.lookAt(mesh.position);

    const renderer = new WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(sizes.width, sizes.height);

    const tick = () => {
      mesh.rotation.y += 0.0002;
      if(mesh.rotation.y > 360){
        mesh.rotation.y -= 360;
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    }

    tick();
    this.initTextAnimation();
  }

  copyRGBAToClipboard(){
    navigator.clipboard.writeText(this._color.RGBA.fullColor);
    this.RGBACopied = true;
    setTimeout(() =>{
      this.RGBACopied = false;
      this.cdf.detectChanges();
    }, 1000)
  }
  copyHEXToClipboard(){
    navigator.clipboard.writeText(this._color.HEX);
    this.HEXCopied = true;
    setTimeout(() => {
      this.HEXCopied = false;
      this.cdf.detectChanges();
    }, 1000)
  }

  @HostListener('window:resize')
  onResize() {
    ScrollTrigger.refresh(true);
  }

  private getScale() {
    return gsap.utils.clamp(0.7, 1.2, window.innerWidth / 1440);
  }

  protected initTextAnimation(){
    const scale = this.getScale();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.textEl.nativeElement,
        start: "top 180vh",
        toggleActions: "play none none none",
      }
    });
    const splitText = new SplitText(this.textEl.nativeElement, { type: 'chars' });
    const charAnimations = [
      { i: 0, from: { x: -50, rotateY: 90 }, to: { x: 0, rotateY: 0 } },
      { i: 1, from: { right: 90 }, to: { right: 0 } },
      { i: 3, from: { rotateX: 90 }, to: { rotateX: 0 } },
      { i: 2, from: { top: 70 }, to: { top: 0 } },
      { i: 4, from: { left: 90 }, to: { left: 0 } },
      { i: 5, from: { rotate: 180 }, to: { rotate: 0 } },
      { i: 6, from: { scale: 1.5 }, to: { scale: 1 } },
      { i: 7, from: { top: 180 }, to: { top: 0 } },
      { i: 8, from: { right: 90 }, to: { right: 0 } },
    ];

    let secondTween;
    let thirdTween;
    let fourthTween;
    let fifthTween;
    let sixthTween;
    let seventhTween;

    charAnimations.forEach((cfg, idx) => {
      const tween = tl.fromTo(
        splitText.chars[cfg.i],
        {
          opacity: 0,
          transformOrigin: "center",
          ...cfg.from
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          ...cfg.to
        },
        idx * .5
      );

      if (idx === 1) secondTween = tween;
      if (idx === 2) thirdTween = tween;
      if (idx === 3) fourthTween = tween;
      if (idx === 4) fifthTween = tween;
      if (idx === 5) sixthTween = tween;
      if (idx === 6) seventhTween = tween;
    });
  //STAR
    tl.to(this.starEl.nativeElement, {
      x: '9vw',
      rotate: 360,
      duration: 1,
      ease: "power2.out"
    }, secondTween!.startTime() + 0.5);
    tl.to(this.starEl.nativeElement, {
      y: '-6vw',
      duration: 1,
      ease: "power2.out"
    }, thirdTween!.startTime() + 1.3);
    tl.to(this.starEl.nativeElement, {
      rotate: +90,
      duration: 1,
      repeat: -1,
      repeatDelay: 2,
      ease: "power2.out"
    }, fourthTween!.startTime() + 2);
  //BOX
    const baseBoxScale = scale;
    tl.to(this.boxEl.nativeElement, {
      scale: baseBoxScale,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, fifthTween!.startTime() + 1);
    tl.to(this.boxEl.nativeElement, {
      scale: baseBoxScale * 1.2,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, sixthTween!.startTime() + 2);
    tl.to(this.boxEl.nativeElement, {
      scale: baseBoxScale * 1.7,
      y: baseBoxScale * 100,
      filter: 'blur(100px)',
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, seventhTween!.startTime() + 3);
  }
}
