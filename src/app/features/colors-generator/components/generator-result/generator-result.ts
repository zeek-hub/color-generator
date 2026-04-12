import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
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

@Component({
  selector: 'app-generator-result',
  imports: [
    NgIf
  ],
  templateUrl: './generator-result.html',
  styleUrl: './generator-result.css',
})
export class GeneratorResult implements  AfterViewInit {
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
    const geometry = new BoxGeometry(.7, .7, .7);
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
}
