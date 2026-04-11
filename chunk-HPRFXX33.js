import{$ as hh,Ba as ss,Ca as dt,Da as gt,E as hl,Ea as Ni,Fa as In,G as Go,Ga as yp,H as xp,Ha as Mp,I as uh,Ia as bp,Ja as yn,K as is,Ka as mh,La as It,Ma as Sr,Na as Xo,Pa as wr,Qa as qo,Sa as gh,Ua as _h,V as rs,Ya as Sp,_ as Ho,a as hn,aa as dl,b as Gn,ba as Wo,f as pp,i as mp,ia as Pt,n as gp,na as dh,oa as Ut,s as _p,sa as Ys,ta as fh,ua as wi,va as er,wa as ph,ya as vp}from"./chunk-QOBXOUGP.js";var Dp=(()=>{class r{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||r)(Ut(dh),Ut(Wo))};static \u0275dir=wi({type:r})}return r})(),Fp=(()=>{class r extends Dp{static \u0275fac=(()=>{let t;return function(i){return(t||(t=dl(r)))(i||r)}})();static \u0275dir=wi({type:r,features:[er]})}return r})(),Sh=new is("");var I0={provide:Sh,useExisting:Go(()=>bl),multi:!0};function D0(){let r=_h()?_h().getUserAgent():"";return/android (\d+)/.test(r.toLowerCase())}var F0=new is(""),bl=(()=>{class r extends Dp{_compositionMode;_composing=!1;constructor(t,n,i){super(t,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!D0())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||r)(Ut(dh),Ut(Wo),Ut(F0,8))};static \u0275dir=wi({type:r,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&In("input",function(o){return i._handleInput(o.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[Xo([I0]),er]})}return r})();function wh(r){return r==null||Ah(r)===0}function Ah(r){return r==null?null:Array.isArray(r)||typeof r=="string"?r.length:r instanceof Set?r.size:null}var Lp=new is(""),Np=new is(""),L0=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Dn=class{static min(e){return N0(e)}static max(e){return O0(e)}static required(e){return U0(e)}static requiredTrue(e){return B0(e)}static email(e){return V0(e)}static minLength(e){return k0(e)}static maxLength(e){return z0(e)}static pattern(e){return G0(e)}static nullValidator(e){return Op()}static compose(e){return Gp(e)}static composeAsync(e){return Wp(e)}};function N0(r){return e=>{if(e.value==null||r==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<r?{min:{min:r,actual:e.value}}:null}}function O0(r){return e=>{if(e.value==null||r==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>r?{max:{max:r,actual:e.value}}:null}}function U0(r){return wh(r.value)?{required:!0}:null}function B0(r){return r.value===!0?null:{required:!0}}function V0(r){return wh(r.value)||L0.test(r.value)?null:{email:!0}}function k0(r){return e=>{let t=e.value?.length??Ah(e.value);return t===null||t===0?null:t<r?{minlength:{requiredLength:r,actualLength:t}}:null}}function z0(r){return e=>{let t=e.value?.length??Ah(e.value);return t!==null&&t>r?{maxlength:{requiredLength:r,actualLength:t}}:null}}function G0(r){if(!r)return Op;let e,t;return typeof r=="string"?(t="",r.charAt(0)!=="^"&&(t+="^"),t+=r,r.charAt(r.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=r.toString(),e=r),n=>{if(wh(n.value))return null;let i=n.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function Op(r){return null}function Up(r){return r!=null}function Bp(r){return vp(r)?mp(r):r}function Vp(r){let e={};return r.forEach(t=>{e=t!=null?hn(hn({},e),t):e}),Object.keys(e).length===0?null:e}function kp(r,e){return e.map(t=>t(r))}function H0(r){return!r.validate}function zp(r){return r.map(e=>H0(e)?e:t=>e.validate(t))}function Gp(r){if(!r)return null;let e=r.filter(Up);return e.length==0?null:function(t){return Vp(kp(t,e))}}function Hp(r){return r!=null?Gp(zp(r)):null}function Wp(r){if(!r)return null;let e=r.filter(Up);return e.length==0?null:function(t){let n=kp(t,e).map(Bp);return _p(n).pipe(gp(Vp))}}function Xp(r){return r!=null?Wp(zp(r)):null}function wp(r,e){return r===null?[e]:Array.isArray(r)?[...r,e]:[r,e]}function qp(r){return r._rawValidators}function Yp(r){return r._rawAsyncValidators}function xh(r){return r?Array.isArray(r)?r:[r]:[]}function ml(r,e){return Array.isArray(r)?r.includes(e):r===e}function Ap(r,e){let t=xh(e);return xh(r).forEach(i=>{ml(t,i)||t.push(i)}),t}function Tp(r,e){return xh(e).filter(t=>!ml(r,t))}var gl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Hp(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Xp(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Js=class extends gl{name;get formDirective(){return null}get path(){return null}},Ko=class extends gl{_parent=null;name=null;valueAccessor=null},_l=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Zp=(()=>{class r extends _l{constructor(t){super(t)}static \u0275fac=function(n){return new(n||r)(Ut(Ko,2))};static \u0275dir=wi({type:r,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&mh("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[er]})}return r})(),$p=(()=>{class r extends _l{constructor(t){super(t)}static \u0275fac=function(n){return new(n||r)(Ut(Js,10))};static \u0275dir=wi({type:r,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&mh("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[er]})}return r})();var Yo="VALID",fl="INVALID",Zs="PENDING",Zo="DISABLED",Ar=class{},xl=class extends Ar{value;source;constructor(e,t){super(),this.value=e,this.source=t}},$o=class extends Ar{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},Jo=class extends Ar{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},$s=class extends Ar{status;source;constructor(e,t){super(),this.status=e,this.source=t}},vh=class extends Ar{source;constructor(e){super(),this.source=e}},jo=class extends Ar{source;constructor(e){super(),this.source=e}};function Th(r){return(Sl(r)?r.validators:r)||null}function W0(r){return Array.isArray(r)?Hp(r):r||null}function Eh(r,e){return(Sl(e)?e.asyncValidators:r)||null}function X0(r){return Array.isArray(r)?Xp(r):r||null}function Sl(r){return r!=null&&!Array.isArray(r)&&typeof r=="object"}function Jp(r,e,t){let n=r.controls;if(!(e?Object.keys(n):n).length)throw new hl(1e3,"");if(!n[t])throw new hl(1001,"")}function Kp(r,e,t){r._forEachChild((n,i)=>{if(t[i]===void 0)throw new hl(1002,"")})}var Ks=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return wr(this.statusReactive)}set status(e){wr(()=>this.statusReactive.set(e))}_status=qo(()=>this.statusReactive());statusReactive=Ho(void 0);get valid(){return this.status===Yo}get invalid(){return this.status===fl}get pending(){return this.status===Zs}get disabled(){return this.status===Zo}get enabled(){return this.status!==Zo}errors;get pristine(){return wr(this.pristineReactive)}set pristine(e){wr(()=>this.pristineReactive.set(e))}_pristine=qo(()=>this.pristineReactive());pristineReactive=Ho(!0);get dirty(){return!this.pristine}get touched(){return wr(this.touchedReactive)}set touched(e){wr(()=>this.touchedReactive.set(e))}_touched=qo(()=>this.touchedReactive());touchedReactive=Ho(!1);get untouched(){return!this.touched}_events=new pp;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ap(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ap(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Tp(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Tp(e,this._rawAsyncValidators))}hasValidator(e){return ml(this._rawValidators,e)}hasAsyncValidator(e){return ml(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(Gn(hn({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Jo(!0,n))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),e.onlySelf||this._parent?._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new Jo(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(Gn(hn({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new $o(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new $o(!0,n))}markAsPending(e={}){this.status=Zs;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $s(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(Gn(hn({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Zo,this.errors=null,this._forEachChild(i=>{i.disable(Gn(hn({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new xl(this.value,n)),this._events.next(new $s(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Gn(hn({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Yo,this._forEachChild(n=>{n.enable(Gn(hn({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Gn(hn({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Yo||this.status===Zs)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new xl(this.value,t)),this._events.next(new $s(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(Gn(hn({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Zo:Yo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Zs,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let n=Bp(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,i)=>n&&n._find(i),this)}getError(e,t){let n=t?this.get(t):this;return n?.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new $s(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new rs,this.statusChanges=new rs}_calculateStatus(){return this._allControlsDisabled()?Zo:this.errors?fl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Zs)?Zs:this._anyControlsHaveStatus(fl)?fl:Yo}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,e.onlySelf||this._parent?._updatePristine(e,t),i&&this._events.next(new $o(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Jo(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Sl(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=W0(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=X0(this._rawAsyncValidators)}},vl=class extends Ks{constructor(e,t,n){super(Th(t),Eh(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Kp(this,!0,e),Object.keys(e).forEach(n=>{Jp(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let i=this.controls[n];i&&i.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,i)=>{n.reset(e?e[i]:null,Gn(hn({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new jo(this))}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,i)=>((n.enabled||this.disabled)&&(t[i]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((i,s)=>{n=t(n,i,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var yh=class extends vl{};var jp=new is("",{factory:()=>Ch}),Ch="always";function q0(r,e){return[...e.path,r]}function Ep(r,e,t=Ch){Rh(r,e),e.valueAccessor.writeValue(r.value),(r.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(r.disabled),Z0(r,e),J0(r,e),$0(r,e),Y0(r,e)}function Cp(r,e,t=!0){let n=()=>{};e?.valueAccessor?.registerOnChange(n),e?.valueAccessor?.registerOnTouched(n),Ml(r,e),r&&(e._invokeOnDestroyCallbacks(),r._registerOnCollectionChange(()=>{}))}function yl(r,e){r.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Y0(r,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};r.registerOnDisabledChange(t),e._registerOnDestroy(()=>{r._unregisterOnDisabledChange(t)})}}function Rh(r,e){let t=qp(r);e.validator!==null?r.setValidators(wp(t,e.validator)):typeof t=="function"&&r.setValidators([t]);let n=Yp(r);e.asyncValidator!==null?r.setAsyncValidators(wp(n,e.asyncValidator)):typeof n=="function"&&r.setAsyncValidators([n]);let i=()=>r.updateValueAndValidity();yl(e._rawValidators,i),yl(e._rawAsyncValidators,i)}function Ml(r,e){let t=!1;if(r!==null){if(e.validator!==null){let i=qp(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==e.validator);s.length!==i.length&&(t=!0,r.setValidators(s))}}if(e.asyncValidator!==null){let i=Yp(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==e.asyncValidator);s.length!==i.length&&(t=!0,r.setAsyncValidators(s))}}}let n=()=>{};return yl(e._rawValidators,n),yl(e._rawAsyncValidators,n),t}function Z0(r,e){e.valueAccessor.registerOnChange(t=>{r._pendingValue=t,r._pendingChange=!0,r._pendingDirty=!0,r.updateOn==="change"&&Qp(r,e)})}function $0(r,e){e.valueAccessor.registerOnTouched(()=>{r._pendingTouched=!0,r.updateOn==="blur"&&r._pendingChange&&Qp(r,e),r.updateOn!=="submit"&&r.markAsTouched()})}function Qp(r,e){r._pendingDirty&&r.markAsDirty(),r.setValue(r._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1}function J0(r,e){let t=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n)};r.registerOnChange(t),e._registerOnDestroy(()=>{r._unregisterOnChange(t)})}function K0(r,e){r==null,Rh(r,e)}function j0(r,e){return Ml(r,e)}function Q0(r,e){if(!r.hasOwnProperty("model"))return!1;let t=r.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ex(r){return Object.getPrototypeOf(r.constructor)===Fp}function tx(r,e){r._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function nx(r,e){if(!e)return null;Array.isArray(e);let t,n,i;return e.forEach(s=>{s.constructor===bl?t=s:ex(s)?n=s:i=s}),i||n||t||null}function ix(r,e){let t=r.indexOf(e);t>-1&&r.splice(t,1)}function Rp(r,e){let t=r.indexOf(e);t>-1&&r.splice(t,1)}function Pp(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===2&&"value"in r&&"disabled"in r}var pl=class extends Ks{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(Th(t),Eh(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Sl(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Pp(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new jo(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Rp(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Rp(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Pp(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var rx=r=>r instanceof pl;var em=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275dir=wi({type:r,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return r})();var sx={provide:Sh,useExisting:Go(()=>Ph),multi:!0},Ph=(()=>{class r extends Fp{writeValue(t){this.setProperty("value",parseFloat(t))}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=dl(r)))(i||r)}})();static \u0275dir=wi({type:r,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(n,i){n&1&&In("change",function(o){return i.onChange(o.target.value)})("input",function(o){return i.onChange(o.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[Xo([sx]),er]})}return r})(),Mh=class extends Ks{constructor(e,t,n){super(Th(t),Eh(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Kp(this,!1,e),e.forEach((n,i)=>{Jp(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,i)=>{n.reset(e[i],Gn(hn({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new jo(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var ox=(()=>{class r extends Js{callSetDisabledState;get submitted(){return wr(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=qo(()=>this._submittedReactive());_submittedReactive=Ho(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,n,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ml(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Ep(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Cp(t.control||null,t,!1),ix(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,n){this.form.get(t.path).setValue(n)}onReset(){this.resetForm()}resetForm(t=void 0,n={}){this.form.reset(t,n),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,tx(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new vh(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,i=this.form.get(t.path);n!==i&&(Cp(n||null,t),rx(i)&&(Ep(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);K0(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let n=this.form?.get(t.path);n&&j0(n,t)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Rh(this.form,this),this._oldForm&&Ml(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||r)(Ut(Lp,10),Ut(Np,10),Ut(jp,8))};static \u0275dir=wi({type:r,features:[er,hh]})}return r})();var tm=new is("");var ax={provide:Ko,useExisting:Go(()=>Ih)},Ih=(()=>{class r extends Ko{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new rs;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,i,s,o){super(),this._ngModelWarningConfig=o,this._parent=t,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=nx(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Q0(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return q0(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||r)(Ut(Js,13),Ut(Lp,10),Ut(Np,10),Ut(Sh,10),Ut(tm,8))};static \u0275dir=wi({type:r,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Xo([ax]),er,hh]})}return r})();var lx={provide:Js,useExisting:Go(()=>Dh)},Dh=(()=>{class r extends ox{form=null;ngSubmit=new rs;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=dl(r)))(i||r)}})();static \u0275dir=wi({type:r,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&In("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Xo([lx]),er]})}return r})();var cx=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=fh({type:r});static \u0275inj=uh({})}return r})();function Ip(r){return!!r&&(r.asyncValidators!==void 0||r.validators!==void 0||r.updateOn!==void 0)}var nm=(()=>{class r{useNonNullable=!1;get nonNullable(){let t=new r;return t.useNonNullable=!0,t}group(t,n=null){let i=this._reduceControls(t),s={};return Ip(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new vl(i,s)}record(t,n=null){let i=this._reduceControls(t);return new yh(i,n)}control(t,n,i){let s={};return this.useNonNullable?(Ip(n)?s=n:(s.validators=n,s.asyncValidators=i),new pl(t,Gn(hn({},s),{nonNullable:!0}))):new pl(t,n,i)}array(t,n,i){let s=t.map(o=>this._createControl(o));return new Mh(s,n,i)}_reduceControls(t){let n={};return Object.keys(t).forEach(i=>{n[i]=this._createControl(t[i])}),n}_createControl(t){if(t instanceof pl)return t;if(t instanceof Ks)return t;if(Array.isArray(t)){let n=t[0],i=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,i,s)}else return this.control(t)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=xp({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var im=(()=>{class r{static withConfig(t){return{ngModule:r,providers:[{provide:tm,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:jp,useValue:t.callSetDisabledState??Ch}]}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=fh({type:r});static \u0275inj=uh({imports:[cx]})}return r})();var wl=class{static RGBAToHex(e,t,n,i){let s=o=>o<0||o>255?"00":Math.round(o).toString(16).padStart(2,"0");return`#${s(e)}${s(t)}${s(n)}${s(i)}`}};var Al=class r{constructor(e){this.fb=e}color=new rs;colorForm;ngOnInit(){this.colorForm=this.fb.group({r:[100,[Dn.required,Dn.min(0),Dn.max(255)]],g:[100,[Dn.required,Dn.min(0),Dn.max(255)]],b:[100,[Dn.required,Dn.min(0),Dn.max(255)]],a:[255,[Dn.required,Dn.min(0),Dn.max(255)]]})}generateColor(){this.colorForm.patchValue({r:Math.floor(Math.random()*255),g:Math.floor(Math.random()*255),b:Math.floor(Math.random()*255),a:Math.floor(Math.random()*255)})}onSubmit(){this.sendColor()}sendColor(){this.color.emit(this.getColor())}getColor(){let e=this.colorForm.get("r")?.value,t=this.colorForm.get("g")?.value,n=this.colorForm.get("b")?.value,i=this.colorForm.get("a")?.value;return{RGBA:{r:e,g:t,b:n,a:i,fullColor:`rgb(${e},${t},${n},${i})`},HEX:wl.RGBAToHex(e,t,n,i)}}static \u0275fac=function(t){return new(t||r)(Ut(nm))};static \u0275cmp=Ys({type:r,selectors:[["app-generator-form"]],outputs:{color:"color"},decls:35,vars:15,consts:[[1,"position-relative","w-100","h-100","d-flex","justify-content-center","align-items-center"],[1,"m-3","z-0"],[1,"d-flex","flex-column","z-1","w-50",3,"formGroup"],[1,"d-flex"],[1,"input-color","input-red"],["type","range","min","0","max","255","formControlName","r",1,"form-range","red"],[1,"input-color","input-green"],["type","range","min","0","max","255","formControlName","g",1,"form-range","green"],[1,"input-color","input-blue"],["type","range","min","0","max","255","formControlName","b",1,"form-range","blue"],[1,"input-color","input-alpha"],["type","range","min","0","max","255","formControlName","a",1,"form-range","alpha"],[1,"d-flex","justify-content-end"],[1,"button","m-3","p-2","w-25","align-self-end",3,"click"]],template:function(t,n){t&1&&(dt(0,"div",0)(1,"h1",1),It(2,"Make your color"),gt(),dt(3,"form",2)(4,"div",3)(5,"label"),It(6,"\u{1F534} Red ->"),gt(),dt(7,"p",4),It(8),gt()(),Ni(9,"input",5),dt(10,"div",3)(11,"label"),It(12,"\u{1F7E2} Green ->"),gt(),dt(13,"p",6),It(14),gt()(),Ni(15,"input",7),dt(16,"div",3)(17,"label"),It(18,"\u{1F535} Blue ->"),gt(),dt(19,"p",8),It(20),gt()(),Ni(21,"input",9),dt(22,"div",3)(23,"label"),It(24,"\u{1F7E3} Alpha ->"),gt(),dt(25,"p",10),It(26),gt()(),Ni(27,"input",11),dt(28,"div",12)(29,"button",13),In("click",function(){return n.onSubmit()}),dt(30,"span"),It(31,"Submit"),gt()(),dt(32,"button",13),In("click",function(){return n.generateColor()}),dt(33,"span"),It(34,"Generate"),gt()()()()()),t&2&&(Pt(3),yn("border","1px solid "+n.getColor().HEX),ss("formGroup",n.colorForm),Pt(2),yn("color","#ff0000"),Pt(3),Sr(n.getColor().RGBA.r),Pt(3),yn("color","#00ff00"),Pt(3),Sr(n.getColor().RGBA.g),Pt(3),yn("color","#0000ff"),Pt(3),Sr(n.getColor().RGBA.b),Pt(3),yn("color","#7b00ff"),Pt(3),Sr(n.getColor().RGBA.a))},dependencies:[im,em,bl,Ph,Zp,$p,Dh,Ih],styles:["h1[_ngcontent-%COMP%]{letter-spacing:8px;position:absolute;font-weight:700;color:#fff;padding:8px;font-size:7vw;top:37%;transition:.2s ease-in-out;animation:load-title .4s linear}label[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.red[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:red}.green[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#0f0}.blue[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#00f}.alpha[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#7b00ff}.form-range[_ngcontent-%COMP%]::-webkit-slider-thumb{background:#fff;border:1px solid #7a7a7a}form[_ngcontent-%COMP%]{border:1px solid #7a7a7a;padding:16px;border-radius:16px;background:#ffffff1c}.button[_ngcontent-%COMP%]{cursor:pointer;margin:8px;color:#ccc;background:#ffffff36;transition:all .2s ease-in-out;padding:8px;border-radius:24px;border:1px solid #ccc}.button[_ngcontent-%COMP%]:hover{color:#000;transform:scale(1.05) translateY(-4px);border:solid 1px rgba(255,255,255,.63);background:#fff;background-image:linear-gradient(45deg,transparent 48%,#b5b5b5 48%,#b5b5b5 52%,transparent 52%),linear-gradient(-45deg,transparent 48%,#b5b5b5 48%,#b5b5b5 52%,transparent 52%);background-size:10px 10px}.button[_ngcontent-%COMP%]:active{transform:scale(.9)}.input-color[_ngcontent-%COMP%]{margin:0;text-align:center;background:transparent;border:1px solid transparent}.input-red[_ngcontent-%COMP%]{color:red}.input-green[_ngcontent-%COMP%]{color:#0f0}.input-blue[_ngcontent-%COMP%]{color:#00f}.input-alpha[_ngcontent-%COMP%]{color:#7b00ff}"]})};var bm=0,ud=1,Sm=2;var Ma=1,wm=2,go=3,ar=0,Fn=1,Gi=2,Hi=0,ds=1,hd=2,dd=3,fd=4,Am=5;var Fr=100,Tm=101,Em=102,Cm=103,Rm=104,Pm=200,Im=201,Dm=202,Fm=203,Yl=204,Zl=205,Lm=206,Nm=207,Om=208,Um=209,Bm=210,Vm=211,km=212,zm=213,Gm=214,$l=0,Jl=1,Kl=2,fs=3,jl=4,Ql=5,ec=6,tc=7,pd=0,Hm=1,Wm=2,Ri=0,md=1,gd=2,_d=3,xd=4,vd=5,yd=6,Md=7;var nd=300,kr=301,xs=302,Ac=303,Tc=304,ba=306,nc=1e3,Bi=1001,ic=1002,an=1003,Xm=1004;var Sa=1005;var dn=1006,Ec=1007;var zr=1008;var ri=1009,bd=1010,Sd=1011,_o=1012,Cc=1013,Pi=1014,Ii=1015,Wi=1016,Rc=1017,Pc=1018,xo=1020,wd=35902,Ad=35899,Td=1021,Ed=1022,gi=1023,Vi=1026,Gr=1027,Cd=1028,Ic=1029,vs=1030,Dc=1031;var Fc=1033,wa=33776,Aa=33777,Ta=33778,Ea=33779,Lc=35840,Nc=35841,Oc=35842,Uc=35843,Bc=36196,Vc=37492,kc=37496,zc=37488,Gc=37489,Hc=37490,Wc=37491,Xc=37808,qc=37809,Yc=37810,Zc=37811,$c=37812,Jc=37813,Kc=37814,jc=37815,Qc=37816,eu=37817,tu=37818,nu=37819,iu=37820,ru=37821,su=36492,ou=36494,au=36495,lu=36283,cu=36284,uu=36285,hu=36286;var ra=2300,rc=2301,ql=2302,id=2303,rd=2400,sd=2401,od=2402;var qm=3200;var Ym=0,Zm=1,cr="",Qn="srgb",ps="srgb-linear",sa="linear",_t="srgb";var us=7680;var ad=519,$m=512,Jm=513,Km=514,du=515,jm=516,Qm=517,fu=518,eg=519,ld=35044;var Rd="300 es",Ci=2e3,oa=2001;function hx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function dx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tg(){let r=aa("canvas");return r.style.display="block",r}var sm={},ho=null;function Pd(...r){let e="THREE."+r.shift();ho?ho("log",e,...r):console.log(e,...r)}function ng(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xe(...r){r=ng(r);let e="THREE."+r.shift();if(ho)ho("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ze(...r){r=ng(r);let e="THREE."+r.shift();if(ho)ho("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function la(...r){let e=r.join(" ");e in sm||(sm[e]=!0,Xe(...r))}function ig(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var rg={[$l]:Jl,[Kl]:ec,[jl]:tc,[fs]:Ql,[Jl]:$l,[ec]:Kl,[tc]:jl,[Ql]:fs},lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fh=Math.PI/180,sc=180/Math.PI;function Ca(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function fx(r,e){return(r%e+e)%e}function Lh(r,e,t){return(1-t)*r+t*e}function Qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var yt=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ki=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==g){let p=l*h+c*d+u*g+f*_;p<0&&(h=-h,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),w=Math.sin(y);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w,l=l*m+h*a,c=c*m+d*a,u=u*m+g*a,f=f*m+_*a}else{l=l*m+h*a,c=c*m+d*a,u=u*m+g*a,f=f*m+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(om.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nh=new q,om=new ki,Ke=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],w=i[4],M=i[7],A=i[2],E=i[5],T=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*p+a*w+l*E,s[6]=o*m+a*M+l*T,s[1]=c*_+u*y+f*A,s[4]=c*p+u*w+f*E,s[7]=c*m+u*M+f*T,s[2]=h*_+d*y+g*A,s[5]=h*p+d*w+g*E,s[8]=h*m+d*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oh=new Ke,am=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function px(){let r={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=uo(i.r),i.g=uo(i.g),i.b=uo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cr?sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return la("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return la("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ps]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:am,fromXYZ:lm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:am,fromXYZ:lm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),r}var ct=px();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var js,oc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=aa("canvas")),js.width=e.width,js.height=e.height;let i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mx=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Uh(i[o].image)):s.push(Uh(i[o]))}else s=Uh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var gx=0,Bh=new q,ur=(()=>{class r extends lr{constructor(t=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=Bi,s=Bi,o=dn,a=zr,l=gi,c=ri,u=r.DEFAULT_ANISOTROPY,f=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ca(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nc:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nc:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=nd,r.DEFAULT_ANISOTROPY=1,r})(),Vt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(d+1)/2,A=(m+1)/2,E=(u+h)/4,T=(f+_)/4,x=(g+p)/4;return w>M&&w>A?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=T/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=x/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ac=class extends lr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new ur(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new fo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ca=class extends ur{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends ur{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class r{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Qs.setFromMatrixColumn(e,0).length(),s=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_x,e,xx)}lookAt(e,t,n){let i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Tr.crossVectors(n,Kn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Tr.crossVectors(n,Kn)),Tr.normalize(),Tl.crossVectors(Kn,Tr),i[0]=Tr.x,i[4]=Tl.x,i[8]=Kn.x,i[1]=Tr.y,i[5]=Tl.y,i[9]=Kn.y,i[2]=Tr.z,i[6]=Tl.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],w=n[7],M=n[11],A=n[15],E=i[0],T=i[4],x=i[8],b=i[12],N=i[1],R=i[5],D=i[9],B=i[13],z=i[2],V=i[6],k=i[10],L=i[14],j=i[3],Q=i[7],P=i[11],le=i[15];return s[0]=o*E+a*N+l*z+c*j,s[4]=o*T+a*R+l*V+c*Q,s[8]=o*x+a*D+l*k+c*P,s[12]=o*b+a*B+l*L+c*le,s[1]=u*E+f*N+h*z+d*j,s[5]=u*T+f*R+h*V+d*Q,s[9]=u*x+f*D+h*k+d*P,s[13]=u*b+f*B+h*L+d*le,s[2]=g*E+_*N+p*z+m*j,s[6]=g*T+_*R+p*V+m*Q,s[10]=g*x+_*D+p*k+m*P,s[14]=g*b+_*B+p*L+m*le,s[3]=y*E+w*N+M*z+A*j,s[7]=y*T+w*R+M*V+A*Q,s[11]=y*x+w*D+M*k+A*P,s[15]=y*b+w*B+M*L+A*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],y=l*d-c*h,w=a*d-c*f,M=a*h-l*f,A=o*d-c*u,E=o*h-l*u,T=o*f-a*u;return t*(_*y-p*w+m*M)-n*(g*y-p*A+m*E)+i*(g*w-_*A+m*T)-s*(g*M-_*E+p*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=t*a-n*o,w=t*l-i*o,M=t*c-s*o,A=n*l-i*a,E=n*c-s*a,T=i*c-s*l,x=u*_-f*g,b=u*p-h*g,N=u*m-d*g,R=f*p-h*_,D=f*m-d*_,B=h*m-d*p,z=y*B-w*D+M*R+A*N-E*b+T*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/z;return e[0]=(a*B-l*D+c*R)*V,e[1]=(i*D-n*B-s*R)*V,e[2]=(_*T-p*E+m*A)*V,e[3]=(h*E-f*T-d*A)*V,e[4]=(l*N-o*B-c*b)*V,e[5]=(t*B-i*N+s*b)*V,e[6]=(p*M-g*T-m*w)*V,e[7]=(u*T-h*M+d*w)*V,e[8]=(o*D-a*N+c*x)*V,e[9]=(n*N-t*D-s*x)*V,e[10]=(g*E-_*M+m*y)*V,e[11]=(f*M-u*E-d*y)*V,e[12]=(a*b-o*R-l*x)*V,e[13]=(t*R-n*b+i*x)*V,e[14]=(_*w-g*A-p*y)*V,e[15]=(u*A-f*w+h*y)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,y=l*c,w=l*u,M=l*f,A=n.x,E=n.y,T=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+M)*A,i[2]=(g-w)*A,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(h+m))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+w)*T,i[9]=(p-y)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Qs.set(i[0],i[1],i[2]).length(),a=Qs.set(i[4],i[5],i[6]).length(),l=Qs.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ai.copy(this);let c=1/o,u=1/a,f=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Ci,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Ci)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oa)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ci,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Ci)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===oa)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qs=new q,Ai=new Yt,_x=new q(0,0,0),xx=new q(1,1,1),Tr=new q,Tl=new q,Kn=new q,cm=new Yt,um=new ki,ms=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],f=s[9],h=s[2],d=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return cm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return um.setFromEuler(this),this.setFromQuaternion(um,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vx=0,hm=new q,eo=new ki,tr=new Yt,El=new q,ea=new q,yx=new q,Mx=new ki,dm=new q(1,0,0),fm=new q(0,1,0),pm=new q(0,0,1),mm={type:"added"},bx={type:"removed"},to={type:"childadded",child:null},Vh={type:"childremoved",child:null},ys=(()=>{class r extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,n=new ms,i=new ki,s=new q(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ke}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(dm,t)}rotateY(t){return this.rotateOnAxis(fm,t)}rotateZ(t){return this.rotateOnAxis(pm,t)}translateOnAxis(t,n){return hm.copy(t).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(dm,t)}translateY(t){return this.translateOnAxis(fm,t)}translateZ(t){return this.translateOnAxis(pm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?El.copy(t):El.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(ea,El,this.up):tr.lookAt(El,ea,this.up),this.quaternion.setFromRotationMatrix(tr),s&&(tr.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(tr),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mm),to.child=t,this.dispatchEvent(to),to.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bx),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tr.multiply(t.parent.matrixWorld)),t.applyMatrix4(tr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mm),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,t,yx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Mx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*s,o[13]+=i-o[1]*n-o[5]*i-o[9]*s,o[14]+=s-o[2]*n-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Gn(hn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>hn({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){let h=c[u];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),f=a(t.images),h=a(t.shapes),d=a(t.skeletons),g=a(t.animations),_=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(l){let c=[];for(let u in l){let f=l[u];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new q(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),hs=class extends ys{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sx={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function kh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ft=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=fx(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=kh(o,s,e+1/3),this.g=kh(o,s,e),this.b=kh(o,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Qn){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){let n=sg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return ct.workingToColorSpace(bn.copy(this),e),Math.round(ot(bn.r*255,0,255))*65536+Math.round(ot(bn.g*255,0,255))*256+Math.round(ot(bn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(bn.copy(this),t);let n=bn.r,i=bn.g,s=bn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Qn){ct.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,i=bn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Cl);let n=Lh(Er.h,Cl.h,t),i=Lh(Er.s,Cl.s,t),s=Lh(Er.l,Cl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new ft;ft.NAMES=sg;var ha=class extends ys{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new q,nr=new q,zh=new q,ir=new q,no=new q,io=new q,gm=new q,Gh=new q,Hh=new q,Wh=new q,Xh=new Vt,qh=new Vt,Yh=new Vt,Dr=class r{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),nr.subVectors(n,t),zh.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(nr),l=Ti.dot(zh),c=nr.dot(nr),u=nr.dot(zh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Xh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Xh.fromBufferAttribute(e,t),qh.fromBufferAttribute(e,n),Yh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Xh,s.x),o.addScaledVector(qh,s.y),o.addScaledVector(Yh,s.z),o}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),nr.subVectors(e,t),Ti.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Ti.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;no.subVectors(i,n),io.subVectors(s,n),Gh.subVectors(e,n);let l=no.dot(Gh),c=io.dot(Gh);if(l<=0&&c<=0)return t.copy(n);Hh.subVectors(e,i);let u=no.dot(Hh),f=io.dot(Hh);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(no,o);Wh.subVectors(e,s);let d=no.dot(Wh),g=io.dot(Wh);if(g>=0&&d<=g)return t.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(io,a);let p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return gm.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(gm,a);let m=1/(p+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lr=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Pl.subVectors(this.max,ta),ro.subVectors(e.a,ta),so.subVectors(e.b,ta),oo.subVectors(e.c,ta),Cr.subVectors(so,ro),Rr.subVectors(oo,so),os.subVectors(ro,oo);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-os.z,os.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,os.z,0,-os.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-os.y,os.x,0];return!Zh(t,ro,so,oo,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Zh(t,ro,so,oo,Pl))?!1:(Il.crossVectors(Cr,Rr),t=[Il.x,Il.y,Il.z],Zh(t,ro,so,oo,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rr=[new q,new q,new q,new q,new q,new q,new q,new q],Ei=new q,Rl=new Lr,ro=new q,so=new q,oo=new q,Cr=new q,Rr=new q,os=new q,ta=new q,Pl=new q,Il=new q,as=new q;function Zh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){as.fromArray(r,s);let a=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qt=new q,Dl=new yt,wx=0,ei=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ld,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}};var da=class extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fa=class extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mi=class extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ax=new Lr,na=new q,$h=new q,mo=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ax.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(na,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add($h)),this.expandByPoint(na.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tx=0,pi=new Yt,Jh=new ys,ao=new q,jn=new Lr,ia=new Lr,on=new q,zi=class r extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hx(e)?fa:da)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mi(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(jn.min,ia.min),jn.expandByPoint(on),on.addVectors(jn.max,ia.max),jn.expandByPoint(on)):(jn.expandByPoint(ia.min),jn.expandByPoint(ia.max))}jn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),on.add(ao)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new q,l[x]=new q;let c=new q,u=new q,f=new q,h=new yt,d=new yt,g=new yt,_=new q,p=new q;function m(x,b,N){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,N),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,N),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(_),a[b].add(_),a[N].add(_),l[x].add(p),l[b].add(p),l[N].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,b=y.length;x<b;++x){let N=y[x],R=N.start,D=N.count;for(let B=R,z=R+D;B<z;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new q,M=new q,A=new q,E=new q;function T(x){A.fromBufferAttribute(i,x),E.copy(A);let b=a[x];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(E,b);let R=M.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,R)}for(let x=0,b=y.length;x<b;++x){let N=y[x],R=N.start,D=N.count;for(let B=R,z=R+D;B<z;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new ei(h,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ex=0,gs=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=ds,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Zl,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==Zl&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var sr=new q,Kh=new q,Fl=new q,Pr=new q,jh=new q,Ll=new q,Qh=new q,cc=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kh.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Kh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Fl),a=Pr.dot(this.direction),l=-Pr.dot(Fl),c=Pr.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Kh).addScaledVector(Fl,h),d}intersectSphere(e,t){sr.subVectors(e.center,this.origin);let n=sr.dot(this.direction),i=sr.dot(sr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,s){jh.subVectors(t,e),Ll.subVectors(n,e),Qh.crossVectors(jh,Ll);let o=this.direction.dot(Qh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pr.subVectors(this.origin,e);let l=a*this.direction.dot(Ll.crossVectors(Pr,Ll));if(l<0)return null;let c=a*this.direction.dot(jh.cross(Pr));if(c<0||l+c>o)return null;let u=-a*Pr.dot(Qh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_s=class extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_m=new Yt,ls=new cc,Nl=new mo,xm=new q,Ol=new q,Ul=new q,Bl=new q,ed=new q,Vl=new q,vm=new q,kl=new q,Wn=class extends ys{constructor(e=new zi,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(ed.fromBufferAttribute(f,e),o?Vl.addScaledVector(ed,u):Vl.addScaledVector(ed.sub(t),u))}t.add(Vl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),ls.copy(e.ray).recast(e.near),!(Nl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Nl,xm)===null||ls.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(_m.copy(s).invert(),ls.copy(e.ray).applyMatrix4(_m),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=w;M<A;M+=3){let E=a.getX(M),T=a.getX(M+1),x=a.getX(M+2);i=zl(this,m,e,n,c,u,f,E,T,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let y=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);i=zl(this,o,e,n,c,u,f,y,w,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=w;M<A;M+=3){let E=M,T=M+1,x=M+2;i=zl(this,m,e,n,c,u,f,E,T,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let y=p,w=p+1,M=p+2;i=zl(this,o,e,n,c,u,f,y,w,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Cx(r,e,t,n,i,s,o,a){let l;if(e.side===Fn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ar,a),l===null)return null;kl.copy(a),kl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(kl);return c<t.near||c>t.far?null:{distance:c,point:kl.clone(),object:r}}function zl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ol),r.getVertexPosition(l,Ul),r.getVertexPosition(c,Bl);let u=Cx(r,e,t,n,Ol,Ul,Bl,vm);if(u){let f=new q;Dr.getBarycoord(vm,Ol,Ul,Bl,f),i&&(u.uv=Dr.getInterpolatedAttribute(i,a,l,c,f,new yt)),s&&(u.uv1=Dr.getInterpolatedAttribute(s,a,l,c,f,new yt)),o&&(u.normal=Dr.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new q,materialIndex:0};Dr.getNormal(Ol,Ul,Bl,h.normal),u.face=h,u.barycoord=f}return u}var uc=class extends ur{constructor(e=null,t=1,n=1,i,s,o,a,l,c=an,u=an,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var td=new q,Rx=new q,Px=new Ke,Ui=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=td.subVectors(n,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(td),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Px.getNormalMatrix(e),i=this.coplanarPoint(td).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new mo,Ix=new yt(.5,.5),Gl=new q,pa=class{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],y=s[12],w=s[13],M=s[14],A=s[15];if(i[0].setComponents(c-o,d-u,m-g,A-y).normalize(),i[1].setComponents(c+o,d+u,m+g,A+y).normalize(),i[2].setComponents(c+a,d+f,m+_,A+w).normalize(),i[3].setComponents(c-a,d-f,m-_,A-w).normalize(),n)i[4].setComponents(l,h,p,M).normalize(),i[5].setComponents(c-l,d-h,m-p,A-M).normalize();else if(i[4].setComponents(c-l,d-h,m-p,A-M).normalize(),t===Ci)i[5].setComponents(c+l,d+h,m+p,A+M).normalize();else if(t===oa)i[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=Ix.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Gl.x=i.normal.x>0?e.max.x:e.min.x,Gl.y=i.normal.y>0?e.max.y:e.min.y,Gl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ma=class extends ur{constructor(e=[],t=kr,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Nr=class extends ur{constructor(e,t,n=Pi,i,s,o,a=an,l=an,c,u=Vi,f=1){if(u!==Vi&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hc=class extends Nr{constructor(e,t=Pi,n=kr,i,s,o=an,a=an,l,c=Vi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends ur{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Or=class r extends zi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(u,3)),this.setAttribute("uv",new mi(f,2));function g(_,p,m,y,w,M,A,E,T,x,b){let N=M/T,R=A/x,D=M/2,B=A/2,z=E/2,V=T+1,k=x+1,L=0,j=0,Q=new q;for(let P=0;P<k;P++){let le=P*R-B;for(let ce=0;ce<V;ce++){let Be=ce*N-D;Q[_]=Be*y,Q[p]=le*w,Q[m]=z,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[m]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(ce/T),f.push(1-P/x),L+=1}}for(let P=0;P<x;P++)for(let le=0;le<T;le++){let ce=h+le+V*P,Be=h+le+V*(P+1),Ge=h+(le+1)+V*(P+1),Ye=h+(le+1)+V*P;l.push(ce,Be,Ye),l.push(Be,Ge,Ye),j+=6}a.addGroup(d,j,b),d+=j,h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _a=class r extends zi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let y=m*h-o;for(let w=0;w<c;w++){let M=w*f-s;g.push(M,-y,0),_.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let w=y+c*m,M=y+c*(m+1),A=y+1+c*(m+1),E=y+1+c*m;d.push(w,M,E),d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new mi(g,3)),this.setAttribute("normal",new mi(_,3)),this.setAttribute("uv",new mi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ms(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(r){let e={};for(let t=0;t<r.length;t++){let n=Ms(r[t]);for(let i in n)e[i]=n[i]}return e}function Dx(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Id(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var og={clone:Ms,merge:wn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},dc=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fc=class extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var Ur=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mc=class extends Ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rd,endingEnd:rd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sd:s=e,a=2*t-n;break;case od:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sd:o=e,l=2*n-t;break;case od:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,y=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,w=(-1-d)*p+(1.5+d)*_+.5*g,M=d*p-d*_;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+y*o[c+A]+w*o[l+A]+M*o[f+A];return s}},gc=class extends Ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},_c=class extends Ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xc=class extends Ur{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){let _=(n-t)/(i-t),p=1-_;for(let m=0;m!==a;++m)s[m]=o[c+m]*p+o[l+m]*_;return s}let d=a*2,g=e-1;for(let _=0;_!==a;++_){let p=o[c+_],m=o[l+_],y=g*d+_*2,w=h[y],M=h[y+1],A=e*d+_*2,E=f[A],T=f[A+1],x=(n-t)/(i-t),b,N,R,D,B;for(let z=0;z<8;z++){b=x*x,N=b*x,R=1-x,D=R*R,B=D*R;let k=B*t+3*D*x*w+3*R*b*E+N*i-n;if(Math.abs(k)<1e-10)break;let L=3*D*(w-t)+6*R*x*(E-w)+3*b*(i-E);if(Math.abs(L)<1e-10)break;x=x-k/L,x=Math.max(0,Math.min(1,x))}s[_]=B*p+3*D*x*M+3*R*b*T+N*m}return s}},ii=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case rc:t=this.InterpolantFactoryMethodLinear;break;case ql:t=this.InterpolantFactoryMethodSmooth;break;case id:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return ql;case this.InterpolantFactoryMethodBezier:return id}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&dx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ql,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=rc;var Br=class extends ii{constructor(e,t,n){super(e,t,n)}};Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=ra;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};vc.prototype.ValueTypeName="color";var yc=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};yc.prototype.ValueTypeName="number";var Mc=class extends Ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)ki.slerpFlat(s,0,o,c-a,o,c,l);return s}},xa=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends ii{constructor(e,t,n){super(e,t,n)}};Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=ra;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};bc.prototype.ValueTypeName="vector";var Wl=new q,Xl=new ki,Oi=new q,va=class extends ys{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wl,Xl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ir=new q,ym=new yt,Mm=new yt,Sn=class extends va{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,ym,Mm),t.subVectors(Mm,ym)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fh*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ya=class extends va{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var lo=-90,co=1,Sc=class extends ys{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Sn(lo,co,e,t);i.layers=this.layers,this.add(i);let s=new Sn(lo,co,e,t);s.layers=this.layers,this.add(s);let o=new Sn(lo,co,e,t);o.layers=this.layers,this.add(o);let a=new Sn(lo,co,e,t);a.layers=this.layers,this.add(a);let l=new Sn(lo,co,e,t);l.layers=this.layers,this.add(l);let c=new Sn(lo,co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wc=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Dd="\\[\\]\\.:\\/",Nx=new RegExp("["+Dd+"]","g"),Fd="[^"+Dd+"]",Ox="[^"+Dd.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Fd),Bx=/(WCOD+)?/.source.replace("WCOD",Ox),Vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fd),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fd),zx=new RegExp("^"+Ux+Bx+Vx+kx+"$"),Gx=["material","materials","bones","map"],cd=class{constructor(e,t,n){let i=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let n=zx.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);Gx.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;ze("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=cd,r})();Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gA=new Float32Array(1);function Ld(r,e,t,n){let i=Hx(n);switch(t){case Td:return r*e;case Cd:return r*e/i.components*i.byteLength;case Ic:return r*e/i.components*i.byteLength;case vs:return r*e*2/i.components*i.byteLength;case Dc:return r*e*2/i.components*i.byteLength;case Ed:return r*e*3/i.components*i.byteLength;case gi:return r*e*4/i.components*i.byteLength;case Fc:return r*e*4/i.components*i.byteLength;case wa:case Aa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Uc:return Math.max(r,16)*Math.max(e,8)/4;case Lc:case Oc:return Math.max(r,8)*Math.max(e,8)/2;case Bc:case Vc:case zc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Hc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ru:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case su:case ou:case au:return Math.ceil(r/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uu:case hu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(r){switch(r){case ri:case bd:return{byteLength:1,components:1};case _o:case Sd:case Wi:return{byteLength:2,components:1};case Rc:case Pc:return{byteLength:2,components:4};case Pi:case Cc:case Ii:return{byteLength:4,components:1};case wd:case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Rg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xx(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_v=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ty=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ry=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,By=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:qx,alphahash_pars_fragment:Yx,alphamap_fragment:Zx,alphamap_pars_fragment:$x,alphatest_fragment:Jx,alphatest_pars_fragment:Kx,aomap_fragment:jx,aomap_pars_fragment:Qx,batching_pars_vertex:ev,batching_vertex:tv,begin_vertex:nv,beginnormal_vertex:iv,bsdfs:rv,iridescence_fragment:sv,bumpmap_pars_fragment:ov,clipping_planes_fragment:av,clipping_planes_pars_fragment:lv,clipping_planes_pars_vertex:cv,clipping_planes_vertex:uv,color_fragment:hv,color_pars_fragment:dv,color_pars_vertex:fv,color_vertex:pv,common:mv,cube_uv_reflection_fragment:gv,defaultnormal_vertex:_v,displacementmap_pars_vertex:xv,displacementmap_vertex:vv,emissivemap_fragment:yv,emissivemap_pars_fragment:Mv,colorspace_fragment:bv,colorspace_pars_fragment:Sv,envmap_fragment:wv,envmap_common_pars_fragment:Av,envmap_pars_fragment:Tv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Bv,envmap_vertex:Cv,fog_vertex:Rv,fog_pars_vertex:Pv,fog_fragment:Iv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Fv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Uv,lights_toon_fragment:Vv,lights_toon_pars_fragment:kv,lights_phong_fragment:zv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Hv,lights_physical_pars_fragment:Wv,lights_fragment_begin:Xv,lights_fragment_maps:qv,lights_fragment_end:Yv,logdepthbuf_fragment:Zv,logdepthbuf_pars_fragment:$v,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Kv,map_fragment:jv,map_pars_fragment:Qv,map_particle_fragment:ey,map_particle_pars_fragment:ty,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:ry,morphcolor_vertex:sy,morphnormal_vertex:oy,morphtarget_pars_vertex:ay,morphtarget_vertex:ly,normal_fragment_begin:cy,normal_fragment_maps:uy,normal_pars_fragment:hy,normal_pars_vertex:dy,normal_vertex:fy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:xy,opaque_fragment:vy,packing:yy,premultiplied_alpha_fragment:My,project_vertex:by,dithering_fragment:Sy,dithering_pars_fragment:wy,roughnessmap_fragment:Ay,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:Py,skinbase_vertex:Iy,skinning_pars_vertex:Dy,skinning_vertex:Fy,skinnormal_vertex:Ly,specularmap_fragment:Ny,specularmap_pars_fragment:Oy,tonemapping_fragment:Uy,tonemapping_pars_fragment:By,transmission_fragment:Vy,transmission_pars_fragment:ky,uv_pars_fragment:zy,uv_pars_vertex:Gy,uv_vertex:Hy,worldpos_vertex:Wy,background_vert:Xy,background_frag:qy,backgroundCube_vert:Yy,backgroundCube_frag:Zy,cube_vert:$y,cube_frag:Jy,depth_vert:Ky,depth_frag:jy,distance_vert:Qy,distance_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:rM,meshbasic_vert:sM,meshbasic_frag:oM,meshlambert_vert:aM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:hM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:_M,meshtoon_frag:xM,points_vert:vM,points_frag:yM,shadow_vert:MM,shadow_frag:bM,sprite_vert:SM,sprite_frag:wM},ge={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qi={basic:{uniforms:wn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:wn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:wn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:wn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:wn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:wn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:wn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:wn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:wn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:wn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:wn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:wn([ge.common,ge.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:wn([ge.lights,ge.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};qi.physical={uniforms:wn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var pu={r:0,b:0,g:0},bs=new ms,AM=new Yt;function TM(r,e,t,n,i,s){let o=new ft(0),a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(y){let w=!1,M=d(y);M===null?p(o,a):M&&M.isColor&&(p(M,1),w=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,w){let M=d(w);M&&(M.isCubeTexture||M.mapping===ba)?(c===void 0&&(c=new Wn(new Or(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ms(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),bs.copy(w.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler(bs)),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==_t,(u!==M||f!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wn(new _a(2,2),new ni({name:"BackgroundMaterial",uniforms:Ms(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(pu,Id(r)),t.buffers.color.setClear(pu.r,pu.g,pu.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:_,dispose:m}}function EM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,o=!1;function a(R,D,B,z,V){let k=!1,L=f(R,z,B,D);s!==L&&(s=L,c(s.object)),k=d(R,z,B,V),k&&g(R,z,B,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(R,D,B,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function f(R,D,B,z){let V=z.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let L=R.isInstancedMesh===!0?R.id:0,j=k[L];j===void 0&&(j={},k[L]=j);let Q=j[B.id];Q===void 0&&(Q={},j[B.id]=Q);let P=Q[V];return P===void 0&&(P=h(l()),Q[V]=P),P}function h(R){let D=[],B=[],z=[];for(let V=0;V<t;V++)D[V]=0,B[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:z,object:R,attributes:{},index:null}}function d(R,D,B,z){let V=s.attributes,k=D.attributes,L=0,j=B.getAttributes();for(let Q in j)if(j[Q].location>=0){let le=V[Q],ce=k[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;L++}return s.attributesNum!==L||s.index!==z}function g(R,D,B,z){let V={},k=D.attributes,L=0,j=B.getAttributes();for(let Q in j)if(j[Q].location>=0){let le=k[Q];le===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));let ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),V[Q]=ce,L++}s.attributes=V,s.attributesNum=L,s.index=z}function _(){let R=s.newAttributes;for(let D=0,B=R.length;D<B;D++)R[D]=0}function p(R){m(R,0)}function m(R,D){let B=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;B[R]=1,z[R]===0&&(r.enableVertexAttribArray(R),z[R]=1),V[R]!==D&&(r.vertexAttribDivisor(R,D),V[R]=D)}function y(){let R=s.newAttributes,D=s.enabledAttributes;for(let B=0,z=D.length;B<z;B++)D[B]!==R[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function w(R,D,B,z,V,k,L){L===!0?r.vertexAttribIPointer(R,D,B,V,k):r.vertexAttribPointer(R,D,B,z,V,k)}function M(R,D,B,z){_();let V=z.attributes,k=B.getAttributes(),L=D.defaultAttributeValues;for(let j in k){let Q=k[j];if(Q.location>=0){let P=V[j];if(P===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),P!==void 0){let le=P.normalized,ce=P.itemSize,Be=e.get(P);if(Be===void 0)continue;let Ge=Be.buffer,Ye=Be.type,$=Be.bytesPerElement,ee=Ye===r.INT||Ye===r.UNSIGNED_INT||P.gpuType===Cc;if(P.isInterleavedBufferAttribute){let re=P.data,De=re.stride,Fe=P.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce,re.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)p(Q.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Ce=0;Ce<Q.locationSize;Ce++)w(Q.location+Ce,ce/Q.locationSize,Ye,le,De*$,(Fe+ce/Q.locationSize*Ce)*$,ee)}else{if(P.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)m(Q.location+re,P.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let re=0;re<Q.locationSize;re++)p(Q.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let re=0;re<Q.locationSize;re++)w(Q.location+re,ce/Q.locationSize,Ye,le,ce*$,ce/Q.locationSize*re*$,ee)}}else if(L!==void 0){let le=L[j];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(Q.location,le);break;case 3:r.vertexAttrib3fv(Q.location,le);break;case 4:r.vertexAttrib4fv(Q.location,le);break;default:r.vertexAttrib1fv(Q.location,le)}}}}y()}function A(){b();for(let R in n){let D=n[R];for(let B in D){let z=D[B];for(let V in z){let k=z[V];for(let L in k)u(k[L].object),delete k[L];delete z[V]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let B in D){let z=D[B];for(let V in z){let k=z[V];for(let L in k)u(k[L].object),delete k[L];delete z[V]}}delete n[R.id]}function T(R){for(let D in n){let B=n[D];for(let z in B){let V=B[z];if(V[R.id]===void 0)continue;let k=V[R.id];for(let L in k)u(k[L].object),delete k[L];delete V[R.id]}}}function x(R){for(let D in n){let B=n[D],z=R.isInstancedMesh===!0?R.id:0,V=B[z];if(V!==void 0){for(let k in V){let L=V[k];for(let j in L)u(L[j].object),delete L[j];delete V[k]}delete B[z],Object.keys(B).length===0&&delete n[D]}}}function b(){N(),o=!0,s!==i&&(s=i,c(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function CM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==gi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let x=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ri&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ii&&!x)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:E}}function PM(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ui,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let y=s?0:n,w=y*4,M=m.clippingState||null;l.value=M,M=u(g,h,w,d);for(let A=0;A!==w;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,M=d;w!==_;++w,M+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Hr=4,ag=[.125,.215,.35,.446,.526,.582],ws=20,IM=256,Ra=new ya,lg=new ft,Nd=null,Od=0,Ud=0,Bd=!1,DM=new q,gu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=DM}=s;Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Od,Ud),this._renderer.xr.enabled=Bd,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Wi,format:gi,colorSpace:ps,depthBuffer:!1},i=cg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FM(s)),this._blurMaterial=NM(s,e,t),this._ggxMaterial=LM(s,e,t)}return i}_compileMaterial(e){let t=new Wn(new zi,e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i,s){let l=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(lg),f.toneMapping=Ri,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Or,new _s({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(lg),m=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let A=this._cubeSize;vo(i,M*A,w>2?A:0,A,A),f.setRenderTarget(i),m&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===kr||e.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ra)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Hr?n-g+Hr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,vo(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(a,Ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,vo(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(a,Ra)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[i];f.material=c;let h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ws-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ws;p>ws&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ws}`);let m=[],y=0;for(let T=0;T<ws;++T){let x=T/_,b=Math.exp(-x*x/2);m.push(b),T===0?y+=b:T<p&&(y+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;let M=this._sizeLods[i],A=3*M*(i>w-Hr?i-w+Hr:0),E=4*(this._cubeSize-M);vo(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(f,Ra)}};function FM(r){let e=[],t=[],n=[],i=r,s=r-Hr+1+ag.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Hr?l=ag[o-r+Hr-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),w=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,x=E>2?0:-1,b=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];y.set(b,_*g*E),w.set(h,p*g*E);let N=[E,E,E,E,E,E];M.set(N,m*g*E)}let A=new zi;A.setAttribute("position",new ei(y,_)),A.setAttribute("uv",new ei(w,p)),A.setAttribute("faceIndex",new ei(M,m)),n.push(new Wn(A,null)),i>Hr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function cg(r,e,t){let n=new ti(r,e,t);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function LM(r,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function NM(r,e,t){let n=new Float32Array(ws),i=new q(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ug(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function hg(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var _u=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ma(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Or(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Hi});s.uniforms.tEquirect.value=t;let o=new Wn(i,s),a=t.minFilter;return t.minFilter===zr&&(t.minFilter=dn),new Sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};function OM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ac||d===Tc)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new _u(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Ac||d===Tc,_=d===kr||d===xs;if(g||_){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new gu(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new gu(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===Ac?h.mapping=kr:d===Tc&&(h.mapping=xs),h}function l(h){let d=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function UM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&la("WebGLRenderer: "+n+" extension not supported."),i}}}function BM(r,e,t,n){let i={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];let d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let w=0,M=y.length;w<M;w+=3){let A=y[w+0],E=y[w+1],T=y[w+2];h.push(A,E,E,T,T,A)}}else{let y=g.array;_=g.version;for(let w=0,M=y.length/3-1;w<M;w+=3){let A=w+0,E=w+1,T=w+2;h.push(A,E,E,T,T,A)}}let p=new(g.count>=65535?fa:da)(h,1);p.version=_;let m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VM(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function f(h,d,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*_[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zM(r,e,t){let n=new WeakMap,i=new Vt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var d=N;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let T=new Float32Array(A*E*4*f),x=new ca(T,A,E,f);x.type=Ii,x.needsUpdate=!0;let b=M*4;for(let R=0;R<f;R++){let D=m[R],B=y[R],z=w[R],V=A*E*4*R;for(let k=0;k<D.count;k++){let L=k*b;g===!0&&(i.fromBufferAttribute(D,k),T[V+L+0]=i.x,T[V+L+1]=i.y,T[V+L+2]=i.z,T[V+L+3]=0),_===!0&&(i.fromBufferAttribute(B,k),T[V+L+4]=i.x,T[V+L+5]=i.y,T[V+L+6]=i.z,T[V+L+7]=0),p===!0&&(i.fromBufferAttribute(z,k),T[V+L+8]=i.x,T[V+L+9]=i.y,T[V+L+10]=i.z,T[V+L+11]=z.itemSize===4?i.w:1)}}h={count:f,texture:x,size:new yt(A,E)},n.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function GM(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var HM={[md]:"LINEAR_TONE_MAPPING",[gd]:"REINHARD_TONE_MAPPING",[_d]:"CINEON_TONE_MAPPING",[xd]:"ACES_FILMIC_TONE_MAPPING",[yd]:"AGX_TONE_MAPPING",[Md]:"NEUTRAL_TONE_MAPPING",[vd]:"CUSTOM_TONE_MAPPING"};function WM(r,e,t,n,i){let s=new ti(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new ti(e,t,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),a=new zi;a.setAttribute("position",new mi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new mi([0,2,0,0,2,0],2));let l=new dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wn(a,l),u=new ya(-1,1,1,-1,0,1),f=null,h=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(y,w){s.setSize(y,w),o.setSize(y,w);for(let M=0;M<p.length;M++){let A=p[M];A.setSize&&A.setSize(y,w)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;let w=s.width,M=s.height;for(let A=0;A<p.length;A++){let E=p[A];E.setSize&&E.setSize(w,M)}},this.begin=function(y,w){if(d||y.toneMapping===Ri&&p.length===0)return!1;if(_=w,w!==null){let M=w.width,A=w.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return m===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Ri,!0},this.hasRenderPass=function(){return m},this.end=function(y,w){y.toneMapping=g,d=!0;let M=s,A=o;for(let E=0;E<p.length;E++){let T=p[E];if(T.enabled!==!1&&(T.render(y,A,M,w),T.needsSwap!==!1)){let x=M;M=A,A=x}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,l.defines={},ct.getTransfer(f)===_t&&(l.defines.SRGB_TRANSFER="");let E=HM[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(_),y.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Pg=new ur,zd=new Nr(1,1),Ig=new ca,Dg=new lc,Fg=new ma,dg=[],fg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function Mo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=dg[i];if(s===void 0&&(s=new Float32Array(i),dg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yu(r,e){let t=fg[e];t===void 0&&(t=new Int32Array(e),fg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function XM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function YM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function ZM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function $M(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;gg.set(n),r.uniformMatrix2fv(this.addr,!1,gg),en(t,n)}}function JM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;mg.set(n),r.uniformMatrix3fv(this.addr,!1,mg),en(t,n)}}function KM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;pg.set(n),r.uniformMatrix4fv(this.addr,!1,pg),en(t,n)}}function jM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function QM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function nb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function rb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function sb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function ob(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(zd.compareFunction=t.isReversedDepthBuffer()?fu:du,s=zd):s=Pg,t.setTexture2D(e||s,i)}function ab(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dg,i)}function lb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fg,i)}function cb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ig,i)}function ub(r){switch(r){case 5126:return XM;case 35664:return qM;case 35665:return YM;case 35666:return ZM;case 35674:return $M;case 35675:return JM;case 35676:return KM;case 5124:case 35670:return jM;case 35667:case 35671:return QM;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function hb(r,e){r.uniform1fv(this.addr,e)}function db(r,e){let t=Mo(e,this.size,2);r.uniform2fv(this.addr,t)}function fb(r,e){let t=Mo(e,this.size,3);r.uniform3fv(this.addr,t)}function pb(r,e){let t=Mo(e,this.size,4);r.uniform4fv(this.addr,t)}function mb(r,e){let t=Mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gb(r,e){let t=Mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _b(r,e){let t=Mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xb(r,e){r.uniform1iv(this.addr,e)}function vb(r,e){r.uniform2iv(this.addr,e)}function yb(r,e){r.uniform3iv(this.addr,e)}function Mb(r,e){r.uniform4iv(this.addr,e)}function bb(r,e){r.uniform1uiv(this.addr,e)}function Sb(r,e){r.uniform2uiv(this.addr,e)}function wb(r,e){r.uniform3uiv(this.addr,e)}function Ab(r,e){r.uniform4uiv(this.addr,e)}function Tb(r,e,t){let n=this.cache,i=e.length,s=yu(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=zd:o=Pg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Eb(r,e,t){let n=this.cache,i=e.length,s=yu(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dg,s[o])}function Cb(r,e,t){let n=this.cache,i=e.length,s=yu(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Fg,s[o])}function Rb(r,e,t){let n=this.cache,i=e.length,s=yu(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ig,s[o])}function Pb(r){switch(r){case 5126:return hb;case 35664:return db;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return vb;case 35668:case 35672:return yb;case 35669:case 35673:return Mb;case 5125:return bb;case 36294:return Sb;case 36295:return wb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}var Gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ub(t.type)}},Hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pb(t.type)}},Wd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function _g(r,e){r.seq.push(e),r.map[e.id]=e}function Ib(r,e,t){let n=r.name,i=n.length;for(Vd.lastIndex=0;;){let s=Vd.exec(n),o=Vd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_g(t,c===void 0?new Gd(a,r,e):new Hd(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Wd(a),_g(t,f)),t=f}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ib(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function xg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Db=37297,Fb=0;function Lb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var vg=new Ke;function Nb(r){ct._getMatrix(vg,ct.workingColorSpace,r);let e=`mat3( ${vg.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case sa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Lb(r.getShaderSource(e),a)}else return s}function Ob(r,e){let t=Nb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ub={[md]:"Linear",[gd]:"Reinhard",[_d]:"Cineon",[xd]:"ACESFilmic",[yd]:"AgX",[Md]:"Neutral",[vd]:"Custom"};function Bb(r,e){let t=Ub[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mu=new q;function Vb(){ct.getLuminanceCoefficients(mu);let r=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function zb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gb(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ia(r){return r!==""}function Mg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(r){return r.replace(Hb,Xb)}var Wb=new Map;function Xb(r,e){let t=Qe[e];if(t===void 0){let n=Wb.get(e);if(n!==void 0)t=Qe[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xd(t)}var qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(r){return r.replace(qb,Yb)}function Yb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Zb={[Ma]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function $b(r){return Zb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jb={[kr]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"};function Kb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Jb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var jb={[xs]:"ENVMAP_MODE_REFRACTION"};function Qb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eS={[pd]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Wm]:"ENVMAP_BLENDING_ADD"};function tS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eS[r.combine]||"ENVMAP_BLENDING_NONE"}function nS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$b(t),c=Kb(t),u=Qb(t),f=tS(t),h=nS(t),d=kb(t),g=zb(s),_=i.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(p=[wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=Xd(o),o=Mg(o,t),o=bg(o,t),a=Xd(a),a=Mg(a,t),a=bg(a,t),o=Sg(o),a=Sg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=y+p+o,M=y+m+a,A=xg(i,i.VERTEX_SHADER,w),E=xg(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(A)||"",z=i.getShaderInfoLog(E)||"",V=D.trim(),k=B.trim(),L=z.trim(),j=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,E);else{let P=yg(i,A,"vertex"),le=yg(i,E,"fragment");ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+P+`
`+le)}else V!==""?Xe("WebGLProgram: Program Info Log:",V):(k===""||L==="")&&(Q=!1);Q&&(R.diagnostics={runnable:j,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:L,prefix:m}})}i.deleteShader(A),i.deleteShader(E),x=new yo(i,_),b=Gb(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(_,Db)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}var rS=0,qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yd(e),t.set(e,n)),n}},Yd=class{constructor(e){this.id=rS++,this.code=e,this.usedTimes=0}};function sS(r,e,t,n,i,s){let o=new ua,a=new qd,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,N,R,D){let B=R.fog,z=D.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=e.get(x.envMap||V,k),j=L&&L.mapping===ba?L.image.height:null,Q=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=P!==void 0?P.length:0,ce=0;z.morphAttributes.position!==void 0&&(ce=1),z.morphAttributes.normal!==void 0&&(ce=2),z.morphAttributes.color!==void 0&&(ce=3);let Be,Ge,Ye,$;if(Q){let xe=qi[Q];Be=xe.vertexShader,Ge=xe.fragmentShader}else Be=x.vertexShader,Ge=x.fragmentShader,a.update(x),Ye=a.getVertexShaderID(x),$=a.getFragmentShaderID(x);let ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,Fe=D.isBatchedMesh===!0,Ce=!!x.map,lt=!!x.matcap,Se=!!L,Ve=!!x.aoMap,$e=!!x.lightMap,Ue=!!x.bumpMap,W=!!x.normalMap,F=!!x.displacementMap,pt=!!x.emissiveMap,et=!!x.metalnessMap,ke=!!x.roughnessMap,ve=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,J=x.sheen>0,K=x.transmission>0,Y=ve&&!!x.anisotropyMap,_e=C&&!!x.clearcoatMap,oe=C&&!!x.clearcoatNormalMap,Re=C&&!!x.clearcoatRoughnessMap,ye=O&&!!x.iridescenceMap,ne=O&&!!x.iridescenceThicknessMap,se=J&&!!x.sheenColorMap,Me=J&&!!x.sheenRoughnessMap,we=!!x.specularMap,de=!!x.specularColorMap,He=!!x.specularIntensityMap,I=K&&!!x.transmissionMap,ae=K&&!!x.thicknessMap,ie=!!x.gradientMap,fe=!!x.alphaMap,te=x.alphaTest>0,Z=!!x.alphaHash,be=!!x.extensions,Ne=Ri;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=r.toneMapping);let ut={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:Ge,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ps,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:lt,envMap:Se,envMapMode:Se&&L.mapping,envMapCubeUVHeight:j,aoMap:Ve,lightMap:$e,bumpMap:Ue,normalMap:W,displacementMap:F,emissiveMap:pt,normalMapObjectSpace:W&&x.normalMapType===Zm,normalMapTangentSpace:W&&x.normalMapType===Ym,metalnessMap:et,roughnessMap:ke,anisotropy:ve,anisotropyMap:Y,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:oe,clearcoatRoughnessMap:Re,dispersion:v,iridescence:O,iridescenceMap:ye,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:we,specularColorMap:de,specularIntensityMap:He,transmission:K,transmissionMap:I,thicknessMap:ae,gradientMap:ie,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:Z,combine:x.combine,mapUv:Ce&&g(x.map.channel),aoMapUv:Ve&&g(x.aoMap.channel),lightMapUv:$e&&g(x.lightMap.channel),bumpMapUv:Ue&&g(x.bumpMap.channel),normalMapUv:W&&g(x.normalMap.channel),displacementMapUv:F&&g(x.displacementMap.channel),emissiveMapUv:pt&&g(x.emissiveMap.channel),metalnessMapUv:et&&g(x.metalnessMap.channel),roughnessMapUv:ke&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:we&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:He&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:ae&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(W||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ce||fe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&W===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(b,x),y(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function w(x){let b=d[x.type],N;if(b){let R=qi[b];N=og.clone(R.uniforms)}else N=x.uniforms;return N}function M(x,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new iS(r,b,x,i),c.push(N),u.set(b,N)),N}function A(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:T}}function oS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function aS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ag(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,_,p,m){let y=r[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function l(h,d,g,_,p,m){let y=a(h,d,g,_,p,m);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function c(h,d,g,_,p,m){let y=a(h,d,g,_,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||aS),n.length>1&&n.sort(d||Ag),i.length>1&&i.sort(d||Ag)}function f(){for(let h=e,d=r.length;h<d;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function lS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Tg,r.set(n,[o])):i>=s.length?(o=new Tg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function cS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ft};break;case"SpotLight":t={position:new q,direction:new q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function uS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var hS=0;function dS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fS(r){let e=new cS,t=uS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,s=new Yt,o=new Yt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,w=0,M=0,A=0,E=0,T=0;c.sort(dS);for(let b=0,N=c.length;b<N;b++){let R=c[b],D=R.color,B=R.intensity,z=R.distance,V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===vs?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*B,f+=D.g*B,h+=D.b*B;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],B);T++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let L=R.shadow,j=t.get(R);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize=L.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=k,d++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(D).multiplyScalar(B),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;let L=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,L.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=L.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize=L.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=V,M++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(D).multiplyScalar(B),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=k,p++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let L=R.shadow,j=t.get(R);j.shadowIntensity=L.intensity,j.shadowBias=L.bias,j.shadowNormalBias=L.normalBias,j.shadowRadius=L.radius,j.shadowMapSize=L.mapSize,j.shadowCameraNear=L.camera.near,j.shadowCameraFar=L.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=k,g++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(B),k.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[m]=k,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==y||x.numPointShadows!==w||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,x.directionalLength=d,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=y,x.numPointShadows=w,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=T,n.version=hS++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0,p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let w=c[m];if(w.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(w.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(w.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Eg(r){let e=new fS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function pS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Eg(r),e.set(i,[a])):s>=o.length?(a=new Eg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_S=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],xS=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Cg=new Yt,Pa=new q,kd=new q;function vS(r,e,t){let n=new pa,i=new yt,s=new yt,o=new Vt,a=new fc,l=new pc,c={},u=t.maxTextureSize,f={[ar]:Fn,[Fn]:ar,[Gi]:Gi},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:mS,fragmentShader:gS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new zi;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let m=this.type;this.render=function(E,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===wm&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ma);let b=r.getRenderTarget(),N=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Hi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=m!==this.type;B&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(V=>V.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,V=E.length;z<V;z++){let k=E[z],L=k.shadow;if(L===void 0){Xe("WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let j=L.getFrameExtents();i.multiply(j),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,L.mapSize.y=s.y));let Q=r.state.buffers.depth.getReversed();if(L.camera._reversedDepth=Q,L.map===null||B===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===go){if(k.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new ti(i.x,i.y,{format:vs,type:Wi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),L.map.texture.name=k.name+".shadowMap",L.map.depthTexture=new Nr(i.x,i.y,Ii),L.map.depthTexture.name=k.name+".shadowMapDepth",L.map.depthTexture.format=Vi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=an,L.map.depthTexture.magFilter=an}else k.isPointLight?(L.map=new _u(i.x),L.map.depthTexture=new hc(i.x,Pi)):(L.map=new ti(i.x,i.y),L.map.depthTexture=new Nr(i.x,i.y,Pi)),L.map.depthTexture.name=k.name+".shadowMap",L.map.depthTexture.format=Vi,this.type===Ma?(L.map.depthTexture.compareFunction=Q?fu:du,L.map.depthTexture.minFilter=dn,L.map.depthTexture.magFilter=dn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=an,L.map.depthTexture.magFilter=an);L.camera.updateProjectionMatrix()}let P=L.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<P;le++){if(L.map.isWebGLCubeRenderTarget)r.setRenderTarget(L.map,le),r.clear();else{le===0&&(r.setRenderTarget(L.map),r.clear());let ce=L.getViewport(le);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),D.viewport(o)}if(k.isPointLight){let ce=L.camera,Be=L.matrix,Ge=k.distance||ce.far;Ge!==ce.far&&(ce.far=Ge,ce.updateProjectionMatrix()),Pa.setFromMatrixPosition(k.matrixWorld),ce.position.copy(Pa),kd.copy(ce.position),kd.add(_S[le]),ce.up.copy(xS[le]),ce.lookAt(kd),ce.updateMatrixWorld(),Be.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Cg.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Cg,ce.coordinateSystem,ce.reversedDepth)}else L.updateMatrices(k);n=L.getFrustum(),M(T,x,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===go&&y(L,x),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(b,N,R)};function y(E,T){let x=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ti(i.x,i.y,{format:vs,type:Wi})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,x,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,x,d,_,null)}function w(E,T,x,b){let N=null,R=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)N=R;else if(N=x.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=N.uuid,B=T.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let V=z[B];V===void 0&&(V=N.clone(),z[B]=V,T.addEventListener("dispose",A)),N=V}if(N.visible=T.visible,N.wireframe=T.wireframe,b===go?N.side=T.shadowSide!==null?T.shadowSide:T.side:N.side=T.shadowSide!==null?T.shadowSide:f[T.side],N.alphaMap=T.alphaMap,N.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,N.map=T.map,N.clipShadows=T.clipShadows,N.clippingPlanes=T.clippingPlanes,N.clipIntersection=T.clipIntersection,N.displacementMap=T.displacementMap,N.displacementScale=T.displacementScale,N.displacementBias=T.displacementBias,N.wireframeLinewidth=T.wireframeLinewidth,N.linewidth=T.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let D=r.properties.get(N);D.light=x}return N}function M(E,T,x,b,N){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===go)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let B=e.update(E),z=E.material;if(Array.isArray(z)){let V=B.groups;for(let k=0,L=V.length;k<L;k++){let j=V[k],Q=z[j.materialIndex];if(Q&&Q.visible){let P=w(E,Q,b,N);E.onBeforeShadow(r,E,T,x,B,P,j),r.renderBufferDirect(x,null,B,P,E,j),E.onAfterShadow(r,E,T,x,B,P,j)}}}else if(z.visible){let V=w(E,z,b,N);E.onBeforeShadow(r,E,T,x,B,V,null),r.renderBufferDirect(x,null,B,V,E,null),E.onAfterShadow(r,E,T,x,B,V,null)}}let D=E.children;for(let B=0,z=D.length;B<z;B++)M(D[B],T,x,b,N)}function A(E){E.target.removeEventListener("dispose",A);for(let x in c){let b=c[x],N=E.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}function yS(r,e){function t(){let I=!1,ae=new Vt,ie=null,fe=new Vt(0,0,0,0);return{setMask:function(te){ie!==te&&!I&&(r.colorMask(te,te,te,te),ie=te)},setLocked:function(te){I=te},setClear:function(te,Z,be,Ne,ut){ut===!0&&(te*=Ne,Z*=Ne,be*=Ne),ae.set(te,Z,be,Ne),fe.equals(ae)===!1&&(r.clearColor(te,Z,be,Ne),fe.copy(ae))},reset:function(){I=!1,ie=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,ie=null,fe=null,te=null;return{setReversed:function(Z){if(ae!==Z){let be=e.get("EXT_clip_control");Z?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=Z;let Ne=te;te=null,this.setClear(Ne)}},getReversed:function(){return ae},setTest:function(Z){Z?ee(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(Z){ie!==Z&&!I&&(r.depthMask(Z),ie=Z)},setFunc:function(Z){if(ae&&(Z=rg[Z]),fe!==Z){switch(Z){case $l:r.depthFunc(r.NEVER);break;case Jl:r.depthFunc(r.ALWAYS);break;case Kl:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case jl:r.depthFunc(r.EQUAL);break;case Ql:r.depthFunc(r.GEQUAL);break;case ec:r.depthFunc(r.GREATER);break;case tc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Z}},setLocked:function(Z){I=Z},setClear:function(Z){te!==Z&&(te=Z,ae&&(Z=1-Z),r.clearDepth(Z))},reset:function(){I=!1,ie=null,fe=null,te=null,ae=!1}}}function i(){let I=!1,ae=null,ie=null,fe=null,te=null,Z=null,be=null,Ne=null,ut=null;return{setTest:function(xe){I||(xe?ee(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(xe){ae!==xe&&!I&&(r.stencilMask(xe),ae=xe)},setFunc:function(xe,Pe,je){(ie!==xe||fe!==Pe||te!==je)&&(r.stencilFunc(xe,Pe,je),ie=xe,fe=Pe,te=je)},setOp:function(xe,Pe,je){(Z!==xe||be!==Pe||Ne!==je)&&(r.stencilOp(xe,Pe,je),Z=xe,be=Pe,Ne=je)},setLocked:function(xe){I=xe},setClear:function(xe){ut!==xe&&(r.clearStencil(xe),ut=xe)},reset:function(){I=!1,ae=null,ie=null,fe=null,te=null,Z=null,be=null,Ne=null,ut=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,y=null,w=null,M=null,A=null,E=null,T=new ft(0,0,0),x=0,b=!1,N=null,R=null,D=null,B=null,z=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,L=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=L>=1):j.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=L>=2);let Q=null,P={},le=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),Be=new Vt().fromArray(le),Ge=new Vt().fromArray(ce);function Ye(I,ae,ie,fe){let te=new Uint8Array(4),Z=r.createTexture();r.bindTexture(I,Z),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<ie;be++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ae+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Z}let $={};$[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(fs),Ue(!1),W(ud),ee(r.CULL_FACE),Ve(Hi);function ee(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function re(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function De(I,ae){return f[I]!==ae?(r.bindFramebuffer(I,ae),f[I]=ae,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ae),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Fe(I,ae){let ie=d,fe=!1;if(I){ie=h.get(ae),ie===void 0&&(ie=[],h.set(ae,ie));let te=I.textures;if(ie.length!==te.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,be=te.length;Z<be;Z++)ie[Z]=r.COLOR_ATTACHMENT0+Z;ie.length=te.length,fe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ie)}function Ce(I){return g!==I?(r.useProgram(I),g=I,!0):!1}let lt={[Fr]:r.FUNC_ADD,[Tm]:r.FUNC_SUBTRACT,[Em]:r.FUNC_REVERSE_SUBTRACT};lt[Cm]=r.MIN,lt[Rm]=r.MAX;let Se={[Pm]:r.ZERO,[Im]:r.ONE,[Dm]:r.SRC_COLOR,[Yl]:r.SRC_ALPHA,[Bm]:r.SRC_ALPHA_SATURATE,[Om]:r.DST_COLOR,[Lm]:r.DST_ALPHA,[Fm]:r.ONE_MINUS_SRC_COLOR,[Zl]:r.ONE_MINUS_SRC_ALPHA,[Um]:r.ONE_MINUS_DST_COLOR,[Nm]:r.ONE_MINUS_DST_ALPHA,[Vm]:r.CONSTANT_COLOR,[km]:r.ONE_MINUS_CONSTANT_COLOR,[zm]:r.CONSTANT_ALPHA,[Gm]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(I,ae,ie,fe,te,Z,be,Ne,ut,xe){if(I===Hi){_===!0&&(re(r.BLEND),_=!1);return}if(_===!1&&(ee(r.BLEND),_=!0),I!==Am){if(I!==p||xe!==b){if((m!==Fr||M!==Fr)&&(r.blendEquation(r.FUNC_ADD),m=Fr,M=Fr),xe)switch(I){case ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hd:r.blendFunc(r.ONE,r.ONE);break;case dd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ze("WebGLState: Invalid blending: ",I);break}else switch(I){case ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dd:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fd:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",I);break}y=null,w=null,A=null,E=null,T.set(0,0,0),x=0,p=I,b=xe}return}te=te||ae,Z=Z||ie,be=be||fe,(ae!==m||te!==M)&&(r.blendEquationSeparate(lt[ae],lt[te]),m=ae,M=te),(ie!==y||fe!==w||Z!==A||be!==E)&&(r.blendFuncSeparate(Se[ie],Se[fe],Se[Z],Se[be]),y=ie,w=fe,A=Z,E=be),(Ne.equals(T)===!1||ut!==x)&&(r.blendColor(Ne.r,Ne.g,Ne.b,ut),T.copy(Ne),x=ut),p=I,b=!1}function $e(I,ae){I.side===Gi?re(r.CULL_FACE):ee(r.CULL_FACE);let ie=I.side===Fn;ae&&(ie=!ie),Ue(ie),I.blending===ds&&I.transparent===!1?Ve(Hi):Ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let fe=I.stencilWrite;a.setTest(fe),fe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(I){N!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),N=I)}function W(I){I!==bm?(ee(r.CULL_FACE),I!==R&&(I===ud?r.cullFace(r.BACK):I===Sm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),R=I}function F(I){I!==D&&(k&&r.lineWidth(I),D=I)}function pt(I,ae,ie){I?(ee(r.POLYGON_OFFSET_FILL),(B!==ae||z!==ie)&&(B=ae,z=ie,o.getReversed()&&(ae=-ae),r.polygonOffset(ae,ie))):re(r.POLYGON_OFFSET_FILL)}function et(I){I?ee(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function ke(I){I===void 0&&(I=r.TEXTURE0+V-1),Q!==I&&(r.activeTexture(I),Q=I)}function ve(I,ae,ie){ie===void 0&&(Q===null?ie=r.TEXTURE0+V-1:ie=Q);let fe=P[ie];fe===void 0&&(fe={type:void 0,texture:void 0},P[ie]=fe),(fe.type!==I||fe.texture!==ae)&&(Q!==ie&&(r.activeTexture(ie),Q=ie),r.bindTexture(I,ae||$[I]),fe.type=I,fe.texture=ae)}function C(){let I=P[Q];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function J(){try{r.texSubImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function K(){try{r.texSubImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function oe(){try{r.texStorage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function Re(){try{r.texStorage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function ye(){try{r.texImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function ne(){try{r.texImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function se(I){Be.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Be.copy(I))}function Me(I){Ge.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Ge.copy(I))}function we(I,ae){let ie=c.get(ae);ie===void 0&&(ie=new WeakMap,c.set(ae,ie));let fe=ie.get(I);fe===void 0&&(fe=r.getUniformBlockIndex(ae,I.name),ie.set(I,fe))}function de(I,ae){let fe=c.get(ae).get(I);l.get(ae)!==fe&&(r.uniformBlockBinding(ae,fe,I.__bindingPointIndex),l.set(ae,fe))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,P={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,y=null,w=null,M=null,A=null,E=null,T=new ft(0,0,0),x=0,b=!1,N=null,R=null,D=null,B=null,z=null,Be.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:re,bindFramebuffer:De,drawBuffers:Fe,useProgram:Ce,setBlending:Ve,setMaterial:$e,setFlipSided:Ue,setCullFace:W,setLineWidth:F,setPolygonOffset:pt,setScissorTest:et,activeTexture:ke,bindTexture:ve,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:ye,texImage3D:ne,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:oe,texStorage3D:Re,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:se,viewport:Me,reset:He}}function MS(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return d?new OffscreenCanvas(C,v):aa("canvas")}function _(C,v,O){let J=1,K=ve(C);if((K.width>O||K.height>O)&&(J=O/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor(J*K.width),_e=Math.floor(J*K.height);f===void 0&&(f=g(Y,_e));let oe=v?g(Y,_e):f;return oe.width=Y,oe.height=_e,oe.getContext("2d").drawImage(C,0,0,Y,_e),Xe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+_e+")."),oe}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,v,O,J,K=!1){if(C!==null){if(r[C]!==void 0)return r[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),v===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),v===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),v===r.RGBA){let _e=K?sa:ct.getTransfer(J);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=_e===_t?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(C,v){let O;return C?v===null||v===Pi||v===xo?O=r.DEPTH24_STENCIL8:v===Ii?O=r.DEPTH32F_STENCIL8:v===_o&&(O=r.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pi||v===xo?O=r.DEPTH_COMPONENT24:v===Ii?O=r.DEPTH_COMPONENT32F:v===_o&&(O=r.DEPTH_COMPONENT16),O}function A(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function E(C){let v=C.target;v.removeEventListener("dispose",E),x(v),v.isVideoTexture&&u.delete(v)}function T(C){let v=C.target;v.removeEventListener("dispose",T),N(v)}function x(C){let v=n.get(C);if(v.__webglInit===void 0)return;let O=C.source,J=h.get(O);if(J){let K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(C),Object.keys(J).length===0&&h.delete(O)}n.remove(C)}function b(C){let v=n.get(C);r.deleteTexture(v.__webglTexture);let O=C.source,J=h.get(O);delete J[v.__cacheKey],o.memory.textures--}function N(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let K=0;K<v.__webglFramebuffer[J].length;K++)r.deleteFramebuffer(v.__webglFramebuffer[J][K]);else r.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)r.deleteFramebuffer(v.__webglFramebuffer[J]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let J=0,K=O.length;J<K;J++){let Y=n.get(O[J]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(C)}let R=0;function D(){R=0}function B(){let C=R;return C>=i.maxTextures&&Xe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function z(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){let O=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let J=C.image;if(J===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,C,v);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function k(C,v){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,v);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function L(C,v){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,v);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function j(C,v){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){ee(O,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}let Q={[nc]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[ic]:r.MIRRORED_REPEAT},P={[an]:r.NEAREST,[Xm]:r.NEAREST_MIPMAP_NEAREST,[Sa]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[Ec]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},le={[$m]:r.NEVER,[eg]:r.ALWAYS,[Jm]:r.LESS,[du]:r.LEQUAL,[Km]:r.EQUAL,[fu]:r.GEQUAL,[jm]:r.GREATER,[Qm]:r.NOTEQUAL};function ce(C,v){if(v.type===Ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Ec||v.magFilter===Sa||v.magFilter===zr||v.minFilter===dn||v.minFilter===Ec||v.minFilter===Sa||v.minFilter===zr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Q[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Sa&&v.minFilter!==zr||v.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Be(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",E));let J=v.source,K=h.get(J);K===void 0&&(K={},h.set(J,K));let Y=z(v);if(Y!==C.__cacheKey){K[Y]===void 0&&(K[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[Y].usedTimes++;let _e=K[C.__cacheKey];_e!==void 0&&(K[C.__cacheKey].usedTimes--,_e.usedTimes===0&&b(v)),C.__cacheKey=Y,C.__webglTexture=K[Y].texture}return O}function Ge(C,v,O){return Math.floor(Math.floor(C/O)/v)}function Ye(C,v,O,J){let Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,O,J,v.data);else{Y.sort((ne,se)=>ne.start-se.start);let _e=0;for(let ne=1;ne<Y.length;ne++){let se=Y[_e],Me=Y[ne],we=se.start+se.count,de=Ge(Me.start,v.width,4),He=Ge(se.start,v.width,4);Me.start<=we+1&&de===He&&Ge(Me.start+Me.count-1,v.width,4)===de?se.count=Math.max(se.count,Me.start+Me.count-se.start):(++_e,Y[_e]=Me)}Y.length=_e+1;let oe=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ne=0,se=Y.length;ne<se;ne++){let Me=Y[ne],we=Math.floor(Me.start/4),de=Math.ceil(Me.count/4),He=we%v.width,I=Math.floor(we/v.width),ae=de,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,He,I,ae,ie,O,J,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function $(C,v,O){let J=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=r.TEXTURE_3D);let K=Be(C,v),Y=v.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+O);let _e=n.get(Y);if(Y.version!==_e.__version||K===!0){t.activeTexture(r.TEXTURE0+O);let oe=ct.getPrimaries(ct.workingColorSpace),Re=v.colorSpace===cr?null:ct.getPrimaries(v.colorSpace),ye=v.colorSpace===cr||oe===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ne=_(v.image,!1,i.maxTextureSize);ne=ke(v,ne);let se=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),we=w(v.internalFormat,se,Me,v.colorSpace,v.isVideoTexture);ce(J,v);let de,He=v.mipmaps,I=v.isVideoTexture!==!0,ae=_e.__version===void 0||K===!0,ie=Y.dataReady,fe=A(v,ne);if(v.isDepthTexture)we=M(v.format===Gr,v.type),ae&&(I?t.texStorage2D(r.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,we,ne.width,ne.height,0,se,Me,null));else if(v.isDataTexture)if(He.length>0){I&&ae&&t.texStorage2D(r.TEXTURE_2D,fe,we,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)de=He[te],I?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,se,Me,de.data):t.texImage2D(r.TEXTURE_2D,te,we,de.width,de.height,0,se,Me,de.data);v.generateMipmaps=!1}else I?(ae&&t.texStorage2D(r.TEXTURE_2D,fe,we,ne.width,ne.height),ie&&Ye(v,ne,se,Me)):t.texImage2D(r.TEXTURE_2D,0,we,ne.width,ne.height,0,se,Me,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,we,He[0].width,He[0].height,ne.depth);for(let te=0,Z=He.length;te<Z;te++)if(de=He[te],v.format!==gi)if(se!==null)if(I){if(ie)if(v.layerUpdates.size>0){let be=Ld(de.width,de.height,v.format,v.type);for(let Ne of v.layerUpdates){let ut=de.data.subarray(Ne*be/de.data.BYTES_PER_ELEMENT,(Ne+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Ne,de.width,de.height,1,se,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,se,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,we,de.width,de.height,ne.depth,0,de.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,se,Me,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,we,de.width,de.height,ne.depth,0,se,Me,de.data)}else{I&&ae&&t.texStorage2D(r.TEXTURE_2D,fe,we,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)de=He[te],v.format!==gi?se!==null?I?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,se,de.data):t.compressedTexImage2D(r.TEXTURE_2D,te,we,de.width,de.height,0,de.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,se,Me,de.data):t.texImage2D(r.TEXTURE_2D,te,we,de.width,de.height,0,se,Me,de.data)}else if(v.isDataArrayTexture)if(I){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,we,ne.width,ne.height,ne.depth),ie)if(v.layerUpdates.size>0){let te=Ld(ne.width,ne.height,v.format,v.type);for(let Z of v.layerUpdates){let be=ne.data.subarray(Z*te/ne.data.BYTES_PER_ELEMENT,(Z+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,se,Me,be)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(v.isData3DTexture)I?(ae&&t.texStorage3D(r.TEXTURE_3D,fe,we,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)):t.texImage3D(r.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(v.isFramebufferTexture){if(ae)if(I)t.texStorage2D(r.TEXTURE_2D,fe,we,ne.width,ne.height);else{let te=ne.width,Z=ne.height;for(let be=0;be<fe;be++)t.texImage2D(r.TEXTURE_2D,be,we,te,Z,0,se,Me,null),te>>=1,Z>>=1}}else if(He.length>0){if(I&&ae){let te=ve(He[0]);t.texStorage2D(r.TEXTURE_2D,fe,we,te.width,te.height)}for(let te=0,Z=He.length;te<Z;te++)de=He[te],I?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,se,Me,de):t.texImage2D(r.TEXTURE_2D,te,we,se,Me,de);v.generateMipmaps=!1}else if(I){if(ae){let te=ve(ne);t.texStorage2D(r.TEXTURE_2D,fe,we,te.width,te.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Me,ne)}else t.texImage2D(r.TEXTURE_2D,0,we,se,Me,ne);p(v)&&m(J),_e.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ee(C,v,O){if(v.image.length!==6)return;let J=Be(C,v),K=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);let Y=n.get(K);if(K.version!==Y.__version||J===!0){t.activeTexture(r.TEXTURE0+O);let _e=ct.getPrimaries(ct.workingColorSpace),oe=v.colorSpace===cr?null:ct.getPrimaries(v.colorSpace),Re=v.colorSpace===cr||_e===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!ye&&!ne?se[Z]=_(v.image[Z],!0,i.maxCubemapSize):se[Z]=ne?v.image[Z].image:v.image[Z],se[Z]=ke(v,se[Z]);let Me=se[0],we=s.convert(v.format,v.colorSpace),de=s.convert(v.type),He=w(v.internalFormat,we,de,v.colorSpace),I=v.isVideoTexture!==!0,ae=Y.__version===void 0||J===!0,ie=K.dataReady,fe=A(v,Me);ce(r.TEXTURE_CUBE_MAP,v);let te;if(ye){I&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,He,Me.width,Me.height);for(let Z=0;Z<6;Z++){te=se[Z].mipmaps;for(let be=0;be<te.length;be++){let Ne=te[be];v.format!==gi?we!==null?I?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,He,Ne.width,Ne.height,0,Ne.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Ne.width,Ne.height,we,de,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,He,Ne.width,Ne.height,0,we,de,Ne.data)}}}else{if(te=v.mipmaps,I&&ae){te.length>0&&fe++;let Z=ve(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,we,de,se[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,se[Z].width,se[Z].height,0,we,de,se[Z].data);for(let be=0;be<te.length;be++){let ut=te[be].image[Z].image;I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,ut.width,ut.height,we,de,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,He,ut.width,ut.height,0,we,de,ut.data)}}else{I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,de,se[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,we,de,se[Z]);for(let be=0;be<te.length;be++){let Ne=te[be];I?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,we,de,Ne.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,He,we,de,Ne.image[Z])}}}p(v)&&m(r.TEXTURE_CUBE_MAP),Y.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function re(C,v,O,J,K,Y){let _e=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),Re=w(O.internalFormat,_e,oe,O.colorSpace),ye=n.get(v),ne=n.get(O);if(ne.__renderTarget=v,!ye.__hasExternalTextures){let se=Math.max(1,v.width>>Y),Me=Math.max(1,v.height>>Y);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,Re,se,Me,v.depth,0,_e,oe,null):t.texImage2D(K,Y,Re,se,Me,0,_e,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,ne.__webglTexture,0,F(v)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,K,ne.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(C,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){let J=v.depthTexture,K=J&&J.isDepthTexture?J.type:null,Y=M(v.stencilBuffer,K),_e=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(v),Y,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(v),Y,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Y,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,C)}else{let J=v.textures;for(let K=0;K<J.length;K++){let Y=J[K],_e=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),Re=w(Y.internalFormat,_e,oe,Y.colorSpace);pt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(v),Re,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(v),Re,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Re,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(C,v,O){let J=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ce(r.TEXTURE_CUBE_MAP,v.depthTexture);let ye=s.convert(v.depthTexture.format),ne=s.convert(v.depthTexture.type),se;v.depthTexture.format===Vi?se=r.DEPTH_COMPONENT24:v.depthTexture.format===Gr&&(se=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,se,v.width,v.height,0,ye,ne,null)}}else V(v.depthTexture,0);let Y=K.__webglTexture,_e=F(v),oe=J?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,Re=v.depthTexture.format===Gr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vi)pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,oe,Y,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Re,oe,Y,0);else if(v.depthTexture.format===Gr)pt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,oe,Y,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Re,oe,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(C){let v=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=J}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)Fe(v.__webglFramebuffer[J],C,J);else{let J=C.texture.mipmaps;J&&J.length>0?Fe(v.__webglFramebuffer[0],C,0):Fe(v.__webglFramebuffer,C,0)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=r.createRenderbuffer(),De(v.__webglDepthbuffer[J],C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Y)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),De(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(C,v,O){let J=n.get(C);v!==void 0&&re(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ce(C)}function Se(C){let v=C.texture,O=n.get(C),J=n.get(v);C.addEventListener("dispose",T);let K=C.textures,Y=C.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=v.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let Re=0;Re<v.mipmaps.length;Re++)O.__webglFramebuffer[oe][Re]=r.createFramebuffer()}else O.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(_e)for(let oe=0,Re=K.length;oe<Re;oe++){let ye=n.get(K[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){let Re=K[oe];O.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);let ye=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),se=w(Re.internalFormat,ye,ne,Re.colorSpace,C.isXRRenderTarget===!0),Me=F(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),De(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ce(r.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)re(O.__webglFramebuffer[oe][Re],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re);else re(O.__webglFramebuffer[oe],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(v)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,Re=K.length;oe<Re;oe++){let ye=K[oe],ne=n.get(ye),se=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),ce(se,ye),re(O.__webglFramebuffer,C,ye,r.COLOR_ATTACHMENT0+oe,se,0),p(ye)&&m(se)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),ce(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)re(O.__webglFramebuffer[Re],C,v,r.COLOR_ATTACHMENT0,oe,Re);else re(O.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,oe,0);p(v)&&m(oe),t.unbindTexture()}C.depthBuffer&&Ce(C)}function Ve(C){let v=C.textures;for(let O=0,J=v.length;O<J;O++){let K=v[O];if(p(K)){let Y=y(C),_e=n.get(K).__webglTexture;t.bindTexture(Y,_e),m(Y),t.unbindTexture()}}}let $e=[],Ue=[];function W(C){if(C.samples>0){if(pt(C)===!1){let v=C.textures,O=C.width,J=C.height,K=r.COLOR_BUFFER_BIT,Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(C),oe=v.length>1;if(oe)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let ne=n.get(v[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,O,J,0,0,O,J,K,r.NEAREST),l===!0&&($e.length=0,Ue.length=0,$e.push(r.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&($e.push(Y),Ue.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let ne=n.get(v[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function F(C){return Math.min(i.maxSamples,C.samples)}function pt(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function ke(C,v){let O=C.colorSpace,J=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ps&&O!==cr&&(ct.getTransfer(O)===_t?(J!==gi||K!==ri)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",O)),v}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=L,this.setTextureCube=j,this.rebindTextures=lt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=re,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bS(r,e){function t(n,i=cr){let s,o=ct.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===Rc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ad)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===bd)return r.BYTE;if(n===Sd)return r.SHORT;if(n===_o)return r.UNSIGNED_SHORT;if(n===Cc)return r.INT;if(n===Pi)return r.UNSIGNED_INT;if(n===Ii)return r.FLOAT;if(n===Wi)return r.HALF_FLOAT;if(n===Td)return r.ALPHA;if(n===Ed)return r.RGB;if(n===gi)return r.RGBA;if(n===Vi)return r.DEPTH_COMPONENT;if(n===Gr)return r.DEPTH_STENCIL;if(n===Cd)return r.RED;if(n===Ic)return r.RED_INTEGER;if(n===vs)return r.RG;if(n===Dc)return r.RG_INTEGER;if(n===Fc)return r.RGBA_INTEGER;if(n===wa||n===Aa||n===Ta||n===Ea)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Nc||n===Oc||n===Uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===Vc||n===kc||n===zc||n===Gc||n===Hc||n===Wc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bc||n===Vc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return s.COMPRESSED_R11_EAC;if(n===Gc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hc)return s.COMPRESSED_RG11_EAC;if(n===Wc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===su||n===ou||n===au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===su)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===cu||n===uu||n===hu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var SS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ni({vertexShader:SS,fragmentShader:wS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$d=class extends lr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new Zd,m={},y=t.getContextAttributes(),w=null,M=null,A=[],E=[],T=new yt,x=null,b=new Sn;b.viewport=new Vt;let N=new Sn;N.viewport=new Vt;let R=[b,N],D=new wc,B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=A[$];return ee===void 0&&(ee=new po,A[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=A[$];return ee===void 0&&(ee=new po,A[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=A[$];return ee===void 0&&(ee=new po,A[$]=ee),ee.getHandSpace()};function V($){let ee=E.indexOf($.inputSource);if(ee===-1)return;let re=A[ee];re!==void 0&&(re.update($.inputSource,$.frame,c||o),re.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",L);for(let $=0;$<A.length;$++){let ee=E[$];ee!==null&&(E[$]=null,A[$].disconnect(ee))}B=null,z=null,p.reset();for(let $ in m)delete m[$];e.setRenderTarget(w),d=null,h=null,f=null,i=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",k),i.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,De=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Gr:Vi,De=y.stencil?xo:Pi);let Ce={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ti(h.textureWidth,h.textureHeight,{format:gi,type:ri,depthTexture:new Nr(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ti(d.framebufferWidth,d.framebufferHeight,{format:gi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L($){for(let ee=0;ee<$.removed.length;ee++){let re=$.removed[ee],De=E.indexOf(re);De>=0&&(E[De]=null,A[De].disconnect(re))}for(let ee=0;ee<$.added.length;ee++){let re=$.added[ee],De=E.indexOf(re);if(De===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=E.length){E.push(re),De=Ce;break}else if(E[Ce]===null){E[Ce]=re,De=Ce;break}if(De===-1)break}let Fe=A[De];Fe&&Fe.connect(re)}}let j=new q,Q=new q;function P($,ee,re){j.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);let De=j.distanceTo(Q),Fe=ee.projectionMatrix.elements,Ce=re.projectionMatrix.elements,lt=Fe[14]/(Fe[10]-1),Se=Fe[14]/(Fe[10]+1),Ve=(Fe[9]+1)/Fe[5],$e=(Fe[9]-1)/Fe[5],Ue=(Fe[8]-1)/Fe[0],W=(Ce[8]+1)/Ce[0],F=lt*Ue,pt=lt*W,et=De/(-Ue+W),ke=et*-Ue;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Fe[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let ve=lt+et,C=Se+et,v=F-ke,O=pt+(De-ke),J=Ve*Se/C*ve,K=$e*Se/C*ve;$.projectionMatrix.makePerspective(v,O,J,K,ve,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function le($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,re=$.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(re=p.depthFar)),D.near=N.near=b.near=ee,D.far=N.far=b.far=re,(B!==D.near||z!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,z=D.far),D.layers.mask=$.layers.mask|6,b.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let De=$.parent,Fe=D.cameras;le(D,De);for(let Ce=0;Ce<Fe.length;Ce++)le(Fe[Ce],De);Fe.length===2?P(D,b,N):D.projectionMatrix.copy(b.projectionMatrix),ce($,D,De)};function ce($,ee,re){re===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function($){return m[$]};let Be=null;function Ge($,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){let re=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let De=!1;re.length!==D.cameras.length&&(D.cameras.length=0,De=!0);for(let Se=0;Se<re.length;Se++){let Ve=re[Se],$e=null;if(d!==null)$e=d.getViewport(Ve);else{let W=f.getViewSubImage(h,Ve);$e=W.viewport,Se===0&&(e.setRenderTargetTextures(M,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(M))}let Ue=R[Se];Ue===void 0&&(Ue=new Sn,Ue.layers.enable(Se),Ue.viewport=new Vt,R[Se]=Ue),Ue.matrix.fromArray(Ve.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ve.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set($e.x,$e.y,$e.width,$e.height),Se===0&&(D.matrix.copy(Ue.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),De===!0&&D.cameras.push(Ue)}let Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Se=f.getDepthInformation(re[0]);Se&&Se.isValid&&Se.texture&&p.init(Se,i.renderState)}if(Fe&&Fe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Se=0;Se<re.length;Se++){let Ve=re[Se].camera;if(Ve){let $e=m[Ve];$e||($e=new ga,m[Ve]=$e);let Ue=f.getCameraImage(Ve);$e.sourceTexture=Ue}}}}for(let re=0;re<A.length;re++){let De=E[re],Fe=A[re];De!==null&&Fe!==void 0&&Fe.update(De,ee,c||o)}Be&&Be($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Ye=new Rg;Ye.setAnimationLoop(Ge),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}},Ss=new ms,AS=new Yt;function TS(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Id(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,w,M){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),w=y.envMap,M=y.envMapRotation;w&&(p.envMap.value=w,Ss.copy(M),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Ss)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ES(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let M=w.program;n.uniformBlockBinding(y,M)}function c(y,w){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));let A=w.program;n.updateUBOMapping(y,A);let E=e.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){let w=f();y.__bindingPointIndex=w;let M=r.createBuffer(),A=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=i[y.id],M=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let E=0,T=M.length;E<T;E++){let x=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,N=x.length;b<N;b++){let R=x[b];if(d(R,E,b,A)===!0){let D=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],z=0;for(let V=0;V<B.length;V++){let k=B[V],L=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,D+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,w,M,A){let E=y.value,T=w+"_"+M;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let x=A[T];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[T]=E,!0}else if(x.equals(E)===!1)return x.copy(E),!0}return!1}function g(y){let w=y.uniforms,M=0,A=16;for(let T=0,x=w.length;T<x;T++){let b=Array.isArray(w[T])?w[T]:[w[T]];for(let N=0,R=b.length;N<R;N++){let D=b[N],B=Array.isArray(D.value)?D.value:[D.value];for(let z=0,V=B.length;z<V;z++){let k=B[z],L=_(k),j=M%A,Q=j%L.boundary,P=j+Q;M+=Q,P!==0&&A-P<L.storage&&(M+=A-P),D.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=L.storage}}}let E=M%A;return E>0&&(M+=A-E),y.__size=M,y.__cache={},this}function _(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",y),w}function p(y){let w=y.target;w.removeEventListener("dispose",p);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function m(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var CS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function RS(){return Xi===null&&(Xi=new uc(CS,16,16,vs,Wi),Xi.name="DFG_LUT",Xi.minFilter=dn,Xi.magFilter=dn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var xu=class{constructor(e={}){let{canvas:t=tg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ri}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,p=new Set([Fc,Dc,Ic]),m=new Set([ri,Pi,_o,xo,Rc,Pc]),y=new Uint32Array(4),w=new Int32Array(4),M=null,A=null,E=[],T=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,N=!1;this._outputColorSpace=Qn;let R=0,D=0,B=null,z=-1,V=null,k=new Vt,L=new Vt,j=null,Q=new ft(0),P=0,le=t.width,ce=t.height,Be=1,Ge=null,Ye=null,$=new Vt(0,0,le,ce),ee=new Vt(0,0,le,ce),re=!1,De=new pa,Fe=!1,Ce=!1,lt=new Yt,Se=new q,Ve=new Vt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function W(){return B===null?Be:1}let F=n;function pt(S,U){return t.getContext(S,U)}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ut,!1),F===null){let U="webgl2";if(F=pt(U,S),F===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ze("WebGLRenderer: "+S.message),S}let et,ke,ve,C,v,O,J,K,Y,_e,oe,Re,ye,ne,se,Me,we,de,He,I,ae,ie,fe;function te(){et=new UM(F),et.init(),ae=new bS(F,et),ke=new RM(F,et,e,ae),ve=new yS(F,et),ke.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),C=new kM(F),v=new oS,O=new MS(F,et,ve,v,ke,ae,C),J=new OM(b),K=new Xx(F),ie=new EM(F,K),Y=new BM(F,K,C,ie),_e=new GM(F,Y,K,ie,C),de=new zM(F,ke,O),se=new PM(v),oe=new sS(b,J,et,ke,ie,se),Re=new TS(b,v),ye=new lS,ne=new pS(et),we=new TM(b,J,ve,_e,g,l),Me=new vS(b,_e,ke),fe=new ES(F,C,ke,ve),He=new CM(F,et,C),I=new VM(F,et,C),C.programs=oe.programs,b.capabilities=ke,b.extensions=et,b.properties=v,b.renderLists=ye,b.shadowMap=Me,b.state=ve,b.info=C}te(),_!==ri&&(x=new WM(_,t.width,t.height,i,s));let Z=new $d(b,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(S){S!==void 0&&(Be=S,this.setSize(le,ce,!1))},this.getSize=function(S){return S.set(le,ce)},this.setSize=function(S,U,X=!0){if(Z.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}le=S,ce=U,t.width=Math.floor(S*Be),t.height=Math.floor(U*Be),X===!0&&(t.style.width=S+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(le*Be,ce*Be).floor()},this.setDrawingBufferSize=function(S,U,X){le=S,ce=U,Be=X,t.width=Math.floor(S*X),t.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(k)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,U,X,H){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,U,X,H),ve.viewport(k.copy($).multiplyScalar(Be).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,U,X,H){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,U,X,H),ve.scissor(L.copy(ee).multiplyScalar(Be).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){ve.setScissorTest(re=S)},this.setOpaqueSort=function(S){Ge=S},this.setTransparentSort=function(S){Ye=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,X=!0){let H=0;if(S){let G=!1;if(B!==null){let ue=B.texture.format;G=p.has(ue)}if(G){let ue=B.texture.type,pe=m.has(ue),he=we.getClearColor(),Te=we.getClearAlpha(),Ae=he.r,Je=he.g,tt=he.b;pe?(y[0]=Ae,y[1]=Je,y[2]=tt,y[3]=Te,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=Ae,w[1]=Je,w[2]=tt,w[3]=Te,F.clearBufferiv(F.COLOR,0,w))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),we.dispose(),ye.dispose(),ne.dispose(),v.dispose(),J.dispose(),_e.dispose(),ie.dispose(),fe.dispose(),oe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",qe),Z.removeEventListener("sessionend",Ht),Ze.stop()};function be(S){S.preventDefault(),Pd("WebGLRenderer: Context Lost."),N=!0}function Ne(){Pd("WebGLRenderer: Context Restored."),N=!1;let S=C.autoReset,U=Me.enabled,X=Me.autoUpdate,H=Me.needsUpdate,G=Me.type;te(),C.autoReset=S,Me.enabled=U,Me.autoUpdate=X,Me.needsUpdate=H,Me.type=G}function ut(S){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function xe(S){let U=S.target;U.removeEventListener("dispose",xe),Pe(U)}function Pe(S){je(S),v.remove(S)}function je(S){let U=v.get(S).programs;U!==void 0&&(U.forEach(function(X){oe.releaseProgram(X)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,H,G,ue){U===null&&(U=$e);let pe=G.isMesh&&G.matrixWorld.determinant()<0,he=fi(S,U,X,H,G);ve.setMaterial(H,pe);let Te=X.index,Ae=1;if(H.wireframe===!0){if(Te=Y.getWireframeAttribute(X),Te===void 0)return;Ae=2}let Je=X.drawRange,tt=X.attributes.position,Le=Je.start*Ae,Mt=(Je.start+Je.count)*Ae;ue!==null&&(Le=Math.max(Le,ue.start*Ae),Mt=Math.min(Mt,(ue.start+ue.count)*Ae)),Te!==null?(Le=Math.max(Le,0),Mt=Math.min(Mt,Te.count)):tt!=null&&(Le=Math.max(Le,0),Mt=Math.min(Mt,tt.count));let Wt=Mt-Le;if(Wt<0||Wt===1/0)return;ie.setup(G,H,he,X,Te);let Ot,bt=He;if(Te!==null&&(Ot=K.get(Te),bt=I,bt.setIndex(Ot)),G.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*W()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(G.isLine){let vn=H.linewidth;vn===void 0&&(vn=1),ve.setLineWidth(vn*W()),G.isLineSegments?bt.setMode(F.LINES):G.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else G.isPoints?bt.setMode(F.POINTS):G.isSprite&&bt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)la("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let vn=G._multiDrawStarts,Ie=G._multiDrawCounts,Jn=G._multiDrawCount,ht=Te?K.get(Te).bytesPerElement:1,Si=v.get(H).currentProgram.getUniforms();for(let Li=0;Li<Jn;Li++)Si.setValue(F,"_gl_DrawID",Li),bt.render(vn[Li]/ht,Ie[Li])}else if(G.isInstancedMesh)bt.renderInstances(Le,Wt,G.count);else if(X.isInstancedBufferGeometry){let vn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ie=Math.min(X.instanceCount,vn);bt.renderInstances(Le,Wt,Ie)}else bt.render(Le,Wt)};function me(S,U,X){S.transparent===!0&&S.side===Gi&&S.forceSinglePass===!1?(S.side=Fn,S.needsUpdate=!0,_n(S,U,X),S.side=ar,S.needsUpdate=!0,_n(S,U,X),S.side=Gi):_n(S,U,X)}this.compile=function(S,U,X=null){X===null&&(X=S),A=ne.get(X),A.init(U),T.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();let H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ue=G.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){let he=ue[pe];me(he,X,G),H.add(he)}else me(ue,X,G),H.add(ue)}),A=T.pop(),H},this.compileAsync=function(S,U,X=null){let H=this.compile(S,U,X);return new Promise(G=>{function ue(){if(H.forEach(function(pe){v.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){G(S);return}setTimeout(ue,10)}et.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let We=null;function Oe(S){We&&We(S)}function qe(){Ze.stop()}function Ht(){Ze.start()}let Ze=new Rg;Ze.setAnimationLoop(Oe),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(S){We=S,Z.setAnimationLoop(S),S===null?Ze.stop():Ze.start()},Z.addEventListener("sessionstart",qe),Z.addEventListener("sessionend",Ht),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;let X=Z.enabled===!0&&Z.isPresenting===!0,H=x!==null&&(B===null||X)&&x.begin(b,B);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,B),A=ne.get(S,T.length),A.init(U),T.push(A),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(lt,Ci,U.reversedDepth),Ce=this.localClippingEnabled,Fe=se.init(this.clippingPlanes,Ce),M=ye.get(S,E.length),M.init(),E.push(M),Z.enabled===!0&&Z.isPresenting===!0){let pe=b.xr.getDepthSensingMesh();pe!==null&&Ct(pe,U,-1/0,b.sortObjects)}Ct(S,U,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(Ge,Ye),Ue=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ue&&we.addToRenderList(M,S),this.info.render.frame++,Fe===!0&&se.beginShadows();let G=A.state.shadowsArray;if(Me.render(G,S,U),Fe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){let pe=M.opaque,he=M.transmissive;if(A.setupLights(),U.isArrayCamera){let Te=U.cameras;if(he.length>0)for(let Ae=0,Je=Te.length;Ae<Je;Ae++){let tt=Te[Ae];Rt(pe,he,S,tt)}Ue&&we.render(S);for(let Ae=0,Je=Te.length;Ae<Je;Ae++){let tt=Te[Ae];Jt(M,S,tt,tt.viewport)}}else he.length>0&&Rt(pe,he,S,U),Ue&&we.render(S),Jt(M,S,U)}B!==null&&D===0&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),H&&x.end(b),S.isScene===!0&&S.onAfterRender(b,S,U),ie.resetDefaultState(),z=-1,V=null,T.pop(),T.length>0?(A=T[T.length-1],Fe===!0&&se.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function Ct(S,U,X,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||De.intersectsSprite(S)){H&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);let pe=_e.update(S),he=S.material;he.visible&&M.push(S,pe,he,X,Ve.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||De.intersectsObject(S))){let pe=_e.update(S),he=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ve.copy(pe.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(lt)),Array.isArray(he)){let Te=pe.groups;for(let Ae=0,Je=Te.length;Ae<Je;Ae++){let tt=Te[Ae],Le=he[tt.materialIndex];Le&&Le.visible&&M.push(S,pe,Le,X,Ve.z,tt)}}else he.visible&&M.push(S,pe,he,X,Ve.z,null)}}let ue=S.children;for(let pe=0,he=ue.length;pe<he;pe++)Ct(ue[pe],U,X,H)}function Jt(S,U,X,H){let{opaque:G,transmissive:ue,transparent:pe}=S;A.setupLightsView(X),Fe===!0&&se.setGlobalState(b.clippingPlanes,X),H&&ve.viewport(k.copy(H)),G.length>0&&vt(G,U,X),ue.length>0&&vt(ue,U,X),pe.length>0&&vt(pe,U,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Rt(S,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let Le=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new ti(1,1,{generateMipmaps:!0,type:Le?Wi:ri,minFilter:zr,samples:Math.max(4,ke.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let ue=A.state.transmissionRenderTarget[H.id],pe=H.viewport||k;ue.setSize(pe.z*b.transmissionResolutionScale,pe.w*b.transmissionResolutionScale);let he=b.getRenderTarget(),Te=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(ue),b.getClearColor(Q),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear(),Ue&&we.render(X);let Je=b.toneMapping;b.toneMapping=Ri;let tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Fe===!0&&se.setGlobalState(b.clippingPlanes,H),vt(S,X,H),O.updateMultisampleRenderTarget(ue),O.updateRenderTargetMipmap(ue),et.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Mt=0,Wt=U.length;Mt<Wt;Mt++){let Ot=U[Mt],{object:bt,geometry:vn,material:Ie,group:Jn}=Ot;if(Ie.side===Gi&&bt.layers.test(H.layers)){let ht=Ie.side;Ie.side=Fn,Ie.needsUpdate=!0,mt(bt,X,H,vn,Ie,Jn),Ie.side=ht,Ie.needsUpdate=!0,Le=!0}}Le===!0&&(O.updateMultisampleRenderTarget(ue),O.updateRenderTargetMipmap(ue))}b.setRenderTarget(he,Te,Ae),b.setClearColor(Q,P),tt!==void 0&&(H.viewport=tt),b.toneMapping=Je}function vt(S,U,X){let H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ue=S.length;G<ue;G++){let pe=S[G],{object:he,geometry:Te,group:Ae}=pe,Je=pe.material;Je.allowOverride===!0&&H!==null&&(Je=H),he.layers.test(X.layers)&&mt(he,U,X,Te,Je,Ae)}}function mt(S,U,X,H,G,ue){S.onBeforeRender(b,U,X,H,G,ue),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(b,U,X,H,S,ue),G.transparent===!0&&G.side===Gi&&G.forceSinglePass===!1?(G.side=Fn,G.needsUpdate=!0,b.renderBufferDirect(X,U,H,G,S,ue),G.side=ar,G.needsUpdate=!0,b.renderBufferDirect(X,U,H,G,S,ue),G.side=Gi):b.renderBufferDirect(X,U,H,G,S,ue),S.onAfterRender(b,U,X,H,G,ue)}function _n(S,U,X){U.isScene!==!0&&(U=$e);let H=v.get(S),G=A.state.lights,ue=A.state.shadowsArray,pe=G.state.version,he=oe.getParameters(S,G.state,ue,U,X),Te=oe.getProgramCacheKey(he),Ae=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Je=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=J.get(S.envMap||H.environment,Je),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",xe),Ae=new Map,H.programs=Ae);let tt=Ae.get(Te);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===pe)return xn(S,he),tt}else he.uniforms=oe.getUniforms(S),S.onBeforeCompile(he,b),tt=oe.acquireProgram(he,Te),Ae.set(Te,tt),H.uniforms=he.uniforms;let Le=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=se.uniform),xn(S,he),H.needsLights=jt(S),H.lightsStateVersion=pe,H.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=tt,H.uniformsList=null,tt}function Tt(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=yo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function xn(S,U){let X=v.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function fi(S,U,X,H,G){U.isScene!==!0&&(U=$e),O.resetTextureUnits();let ue=U.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,he=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ps,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=J.get(H.envMap||pe,Te),Je=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,tt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!X.morphAttributes.position,Mt=!!X.morphAttributes.normal,Wt=!!X.morphAttributes.color,Ot=Ri;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ot=b.toneMapping);let bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vn=bt!==void 0?bt.length:0,Ie=v.get(H),Jn=A.state.lights;if(Fe===!0&&(Ce===!0||S!==V)){let sn=S===V&&H.id===z;se.setState(H,S,sn)}let ht=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Jn.state.version||Ie.outputColorSpace!==he||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==Ae||H.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==Je||Ie.vertexTangents!==tt||Ie.morphTargets!==Le||Ie.morphNormals!==Mt||Ie.morphColors!==Wt||Ie.toneMapping!==Ot||Ie.morphTargetsCount!==vn)&&(ht=!0):(ht=!0,Ie.__version=H.version);let Si=Ie.currentProgram;ht===!0&&(Si=_n(H,U,G));let Li=!1,ns=!1,Xs=!1,St=Si.getUniforms(),un=Ie.uniforms;if(ve.useProgram(Si.program)&&(Li=!0,ns=!0,Xs=!0),H.id!==z&&(z=H.id,ns=!0),Li||V!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",S.projectionMatrix),St.setValue(F,"viewMatrix",S.matrixWorldInverse);let br=St.map.cameraPosition;br!==void 0&&br.setValue(F,Se.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),V!==S&&(V=S,ns=!0,Xs=!0)}if(Ie.needsLights&&(Jn.state.directionalShadowMap.length>0&&St.setValue(F,"directionalShadowMap",Jn.state.directionalShadowMap,O),Jn.state.spotShadowMap.length>0&&St.setValue(F,"spotShadowMap",Jn.state.spotShadowMap,O),Jn.state.pointShadowMap.length>0&&St.setValue(F,"pointShadowMap",Jn.state.pointShadowMap,O)),G.isSkinnedMesh){St.setOptional(F,G,"bindMatrix"),St.setOptional(F,G,"bindMatrixInverse");let sn=G.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),St.setValue(F,"boneTexture",sn.boneTexture,O))}G.isBatchedMesh&&(St.setOptional(F,G,"batchingTexture"),St.setValue(F,"batchingTexture",G._matricesTexture,O),St.setOptional(F,G,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",G._indirectTexture,O),St.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",G._colorsTexture,O));let Mr=X.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&de.update(G,X,Si),(ns||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,St.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=RS()),ns&&(St.setValue(F,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&Kt(un,Xs),ue&&H.fog===!0&&Re.refreshFogUniforms(un,ue),Re.refreshMaterialUniforms(un,H,Be,ce,A.state.transmissionRenderTarget[S.id]),yo.upload(F,Tt(Ie),un,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(yo.upload(F,Tt(Ie),un,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(F,"center",G.center),St.setValue(F,"modelViewMatrix",G.modelViewMatrix),St.setValue(F,"normalMatrix",G.normalMatrix),St.setValue(F,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let sn=H.uniformsGroups;for(let br=0,qs=sn.length;br<qs;br++){let fp=sn[br];fe.update(fp,Si),fe.bind(fp,Si)}}return Si}function Kt(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function jt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,U,X){let H=v.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=U,v.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let X=v.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};let rn=F.createFramebuffer();this.setRenderTarget=function(S,U=0,X=0){B=S,R=U,D=X;let H=null,G=!1,ue=!1;if(S){let he=v.get(S);if(he.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,he.__webglFramebuffer),k.copy(S.viewport),L.copy(S.scissor),j=S.scissorTest,ve.viewport(k),ve.scissor(L),ve.setScissorTest(j),z=-1;return}else if(he.__webglFramebuffer===void 0)O.setupRenderTarget(S);else if(he.__hasExternalTextures)O.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Je=S.depthTexture;if(he.__boundDepthTexture!==Je){if(Je!==null&&v.has(Je)&&(S.width!==Je.image.width||S.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(S)}}let Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ue=!0);let Ae=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?H=Ae[U][X]:H=Ae[U],G=!0):S.samples>0&&O.useMultisampledRTT(S)===!1?H=v.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[X]:H=Ae,k.copy(S.viewport),L.copy(S.scissor),j=S.scissorTest}else k.copy($).multiplyScalar(Be).floor(),L.copy(ee).multiplyScalar(Be).floor(),j=re;if(X!==0&&(H=rn),ve.bindFramebuffer(F.FRAMEBUFFER,H)&&ve.drawBuffers(S,H),ve.viewport(k),ve.scissor(L),ve.setScissorTest(j),G){let he=v.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,X)}else if(ue){let he=U;for(let Te=0;Te<S.textures.length;Te++){let Ae=v.get(S.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,X,he)}}else if(S!==null&&X!==0){let he=v.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,he.__webglTexture,X)}z=-1},this.readRenderTargetPixels=function(S,U,X,H,G,ue,pe,he=0){if(!(S&&S.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Te=Te[pe]),Te){ve.bindFramebuffer(F.FRAMEBUFFER,Te);try{let Ae=S.textures[he],Je=Ae.format,tt=Ae.type;if(S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+he),!ke.textureFormatReadable(Je)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(tt)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&X>=0&&X<=S.height-G&&F.readPixels(U,X,H,G,ae.convert(Je),ae.convert(tt),ue)}finally{let Ae=B!==null?v.get(B).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,U,X,H,G,ue,pe,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Te=Te[pe]),Te)if(U>=0&&U<=S.width-H&&X>=0&&X<=S.height-G){ve.bindFramebuffer(F.FRAMEBUFFER,Te);let Ae=S.textures[he],Je=Ae.format,tt=Ae.type;if(S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+he),!ke.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(U,X,H,G,ae.convert(Je),ae.convert(tt),0);let Mt=B!==null?v.get(B).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Mt);let Wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ig(F,Wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(Le),F.deleteSync(Wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,X=0){let H=Math.pow(2,-X),G=Math.floor(S.image.width*H),ue=Math.floor(S.image.height*H),pe=U!==null?U.x:0,he=U!==null?U.y:0;O.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,pe,he,G,ue),ve.unbindTexture()};let Qi=F.createFramebuffer(),Ws=F.createFramebuffer();this.copyTextureToTexture=function(S,U,X=null,H=null,G=0,ue=0){let pe,he,Te,Ae,Je,tt,Le,Mt,Wt,Ot=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(X!==null)pe=X.max.x-X.min.x,he=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Je=X.min.y,tt=X.isBox3?X.min.z:0;else{let un=Math.pow(2,-G);pe=Math.floor(Ot.width*un),he=Math.floor(Ot.height*un),S.isDataArrayTexture?Te=Ot.depth:S.isData3DTexture?Te=Math.floor(Ot.depth*un):Te=1,Ae=0,Je=0,tt=0}H!==null?(Le=H.x,Mt=H.y,Wt=H.z):(Le=0,Mt=0,Wt=0);let bt=ae.convert(U.format),vn=ae.convert(U.type),Ie;U.isData3DTexture?(O.setTexture3D(U,0),Ie=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(O.setTexture2DArray(U,0),Ie=F.TEXTURE_2D_ARRAY):(O.setTexture2D(U,0),Ie=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Jn=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Si=F.getParameter(F.UNPACK_SKIP_PIXELS),Li=F.getParameter(F.UNPACK_SKIP_ROWS),ns=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tt);let Xs=S.isDataArrayTexture||S.isData3DTexture,St=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let un=v.get(S),Mr=v.get(U),sn=v.get(un.__renderTarget),br=v.get(Mr.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,sn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let qs=0;qs<Te;qs++)Xs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,v.get(S).__webglTexture,G,tt+qs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ue,Wt+qs)),F.blitFramebuffer(Ae,Je,pe,he,Le,Mt,pe,he,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||v.has(S)){let un=v.get(S),Mr=v.get(U);ve.bindFramebuffer(F.READ_FRAMEBUFFER,Qi),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ws);for(let sn=0;sn<Te;sn++)Xs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,G,tt+sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,G),St?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mr.__webglTexture,ue,Wt+sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mr.__webglTexture,ue),G!==0?F.blitFramebuffer(Ae,Je,pe,he,Le,Mt,pe,he,F.COLOR_BUFFER_BIT,F.NEAREST):St?F.copyTexSubImage3D(Ie,ue,Le,Mt,Wt+sn,Ae,Je,pe,he):F.copyTexSubImage2D(Ie,ue,Le,Mt,Ae,Je,pe,he);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else St?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ie,ue,Le,Mt,Wt,pe,he,Te,bt,vn,Ot.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,ue,Le,Mt,Wt,pe,he,Te,bt,Ot.data):F.texSubImage3D(Ie,ue,Le,Mt,Wt,pe,he,Te,bt,vn,Ot):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ue,Le,Mt,pe,he,bt,vn,Ot.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ue,Le,Mt,Ot.width,Ot.height,bt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,ue,Le,Mt,pe,he,bt,vn,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,Jn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Si),F.pixelStorei(F.UNPACK_SKIP_ROWS,Li),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ns),ue===0&&U.generateMipmaps&&F.generateMipmap(Ie),ve.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&O.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?O.setTextureCube(S,0):S.isData3DTexture?O.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?O.setTexture2DArray(S,0):O.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){R=0,D=0,B=null,ve.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var PS=["previewBoxCanvas"];function IS(r,e){r&1&&(dt(0,"sub",6),It(1,"copied!!!"),gt())}function DS(r,e){r&1&&(dt(0,"sub",6),It(1,"copied!!!"),gt())}var Mu=class r{constructor(e){this.cdf=e}previewBoxCanvas;_color;set color(e){if(this._color=e,this.material){let t=this._color.HEX.slice(7,9),n=parseInt(t,16)/255;this.material.opacity=n,this.material.color.set(this._color.HEX.slice(0,7))}}material;RGBACopied=!1;HEXCopied=!1;ngAfterViewInit(){let e=this.previewBoxCanvas.nativeElement,t={width:window.innerWidth,height:window.innerHeight},n=new ha,i=new Or(.7,.7,.7);this.material=new _s({color:this._color.HEX.slice(0,7),transparent:!0,opacity:.5});let s=new Wn(i,this.material);n.add(s),s.position.set(.7,-1.3,1);let o=new Sn;o.position.z=3,o.lookAt(s.position);let a=new xu({canvas:e,alpha:!0});a.setClearColor(0,0),a.setSize(t.width,t.height);let l=()=>{s.rotation.y+=.0015,s.rotation.y>360&&(s.rotation.y-=360),a.render(n,o),window.requestAnimationFrame(l)};l()}copyRGBAToClipboard(){navigator.clipboard.writeText(this._color.RGBA.fullColor),this.RGBACopied=!0,setTimeout(()=>{this.RGBACopied=!1,this.cdf.detectChanges()},500)}copyHEXToClipboard(){navigator.clipboard.writeText(this._color.HEX),this.HEXCopied=!0,setTimeout(()=>{this.HEXCopied=!1,this.cdf.detectChanges()},1500)}static \u0275fac=function(t){return new(t||r)(Ut(gh))};static \u0275cmp=Ys({type:r,selectors:[["app-generator-result"]],viewQuery:function(t,n){if(t&1&&yp(PS,5),t&2){let i;Mp(i=bp())&&(n.previewBoxCanvas=i.first)}},inputs:{color:"color"},decls:19,vars:8,consts:[["previewBoxCanvas",""],[1,"vh-100","vw-100","d-flex","flex-column","justify-content-center","align-items-center","position-relative"],[1,"container","d-flex","justify-content-between","z-1",3,"click"],[1,"d-flex","flex-column"],["class","fst-italic align-self-end",4,"ngIf"],[1,"position-absolute","z-0"],[1,"fst-italic","align-self-end"]],template:function(t,n){t&1&&(dt(0,"div",1)(1,"div",2),In("click",function(){return n.copyRGBAToClipboard()}),dt(2,"p"),It(3,"RGBA"),gt(),dt(4,"div",3)(5,"span"),It(6),gt(),ph(7,IS,2,0,"sub",4),gt()(),dt(8,"div",2),In("click",function(){return n.copyHEXToClipboard()}),dt(9,"p"),It(10,"HEX"),gt(),dt(11,"div",3)(12,"span"),It(13),gt(),ph(14,DS,2,0,"sub",4),gt()(),Ni(15,"canvas",5,0),dt(17,"h1",5),It(18,"PREVIEW"),gt()()),t&2&&(Pt(),yn("border","1px solid "+n._color.HEX),Pt(5),Sr(n._color.RGBA.fullColor),Pt(),ss("ngIf",n.RGBACopied),Pt(),yn("border","1px solid "+n._color.HEX),Pt(5),Sr(n._color.HEX),Pt(),ss("ngIf",n.HEXCopied))},dependencies:[Sp],styles:[".container[_ngcontent-%COMP%]{cursor:pointer;width:50%;padding:16px;border-radius:24px;border:1px solid #ffffff;background:#ffffff1f;margin:8px;transition:all .2s ease-in-out;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}p[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.container[_ngcontent-%COMP%]:hover{transform:scale(1.04) translateY(-4px);filter:drop-shadow(0px 5px 15px rgba(255,255,255,.4))}.container[_ngcontent-%COMP%]:active{transform:scale(.95)}h1[_ngcontent-%COMP%]{font-size:90px;font-weight:700;letter-spacing:40px;background:-webkit-linear-gradient(135deg,rgb(0,228,209),rgb(191,63,255),rgb(255,213,0));-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding:8px;top:0}"]})};function hr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Gg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},pf,pn,Dt,xi=1e8,At=1/xi,rf=Math.PI*2,FS=rf/4,LS=0,Hg=Math.sqrt,NS=Math.cos,OS=Math.sin,tn=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},Iu=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},mf=function(){return typeof window<"u"},bu=function(e){return kt(e)||tn(e)},Wg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,US=/random\([^)]+\)/g,BS=/,\s*/g,Lg=/(?:-?\.?\d|\.)+/gi,gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_f=/[+-]=-?[.\d]+/,VS=/[^,'"\[\]\s]+/gi,kS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Yi,sf,xf,oi={},Tu={},Xg,qg=function(e){return(Tu=wo(e,oi))&&Tn},Du=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ua=function(e,t){return!t&&console.warn(e)},Yg=function(e,t){return e&&(oi[e]=t)&&Tu&&(Tu[e]=t)||oi},Ba=function(){return 0},zS={suppressEvents:!0,isStart:!0,kill:!1},Su={suppressEvents:!0,kill:!1},GS={suppressEvents:!0},vf={},Xr=[],of={},Zg,Xn={},Kd={},Ng=30,wu=[],yf="",Mf=function(e){var t=e[0],n,i;if($i(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wu.length;i--&&!wu[i].targetTest(t););n=wu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Af(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Mf(vi(e))[0]._gsap},bf=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():Iu(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},HS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Eu=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(of={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sf=function(e){return!!(e._initted||e._startAt||e.add)},$g=function(e,t,n,i){Xr.length&&!pn&&Eu(),e.render(t,n,i||!!(pn&&t<0&&Sf(e))),Xr.length&&!pn&&Eu()},Jg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(VS).length<2?t:tn(e)?e.trim():e},Kg=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},WS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wo=function(e,t){for(var n in t)e[n]=t[n];return e},Og=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Cu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},La=function(e){var t=e.parent||Lt,n=e.keyframes?WS(An(e.keyframes)):ai;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},XS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Fu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},af=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert(Su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},YS=function r(e){return!e||e._ts&&r(e.parent)},Ug=function(e){return e._repeat?Ao(e._tTime,e=e.duration()+e._rDelay)*e:0},Ao=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Ru=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lu=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Nu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lu(e),n._dirty||As(n,e)),e},Qg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ru(e.rawTime(),t),(!t._dur||za(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),As(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Zi=function(e,t,n,i){return t.parent&&Yr(t),t._start=Ft((fr(n)?n:n||e!==Lt?_i(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jg(e,t,"_first","_last",e._sort?"_start":0),lf(t)||(e._recent=t),i||Qg(e,t),e._ts<0&&Nu(e,e._tTime),e},e_=function(e,t){return(oi.ScrollTrigger||Du("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},t_=function(e,t,n,i,s){if(Cf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zg!==qn.frame)return Xr.push(e),e._lazy=[s,i],1},ZS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},lf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$S=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&ZS(e)&&!(!e._initted&&lf(e))||(e._ts<0||e._dp._ts<0)&&!lf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=za(0,e._tDur,t),u=Ao(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ao(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||pn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&t_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&af(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yr(e,1),!n&&!pn&&(si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},JS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},To=function(e,t,n,i){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Nu(e,e._tTime=e._tDur*a),e.parent&&Lu(e),n||As(e.parent,e),e},Bg=function(e){return e instanceof fn?As(e):To(e,e._dur)},KS={_start:0,endTime:Ba,totalDuration:Ba},_i=function r(e,t,n){var i=e.labels,s=e._recent||KS,o=e.duration()>=xi?s.endTime(!1):e._dur,a,l,c;return tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Na=function(e,t,n){var i=fr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Xt(t[0],o,t[s+1])},Zr=function(e,t){return e||e===0?t(e):t},za=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!tn(e)||!(t=kS.exec(e))?"":t[1]},jS=function(e,t,n){return Zr(n,function(i){return za(e,t,i)})},cf=[].slice,n_=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Yi},QS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return tn(i)&&!t||n_(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):tn(e)&&!n&&(sf||!Eo())?cf.call((t||xf).querySelectorAll(e),0):An(e)?QS(e,n):n_(e)?cf.call(e,0):e?[e]:[]},uf=function(e){return e=vi(e)[0]||Ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?Ua("Invalid scope")||xf.createElement("div"):e)}},i_=function(e){return e.sort(function(){return .5-Math.random()})},r_=function(e){if(kt(e))return e;var t=$i(e)?e:{each:e},n=Ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return tn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,p=o[_],m,y,w,M,A,E,T,x,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,xi])[1],!b){for(T=-xi;T<(T=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=o[_]=[],m=l?Math.min(b,_)*u-.5:i%b,y=b===xi?0:l?_*f/b-.5:i/b|0,T=0,x=xi,E=0;E<_;E++)w=E%b-m,M=y-(E/b|0),p[E]=A=c?Math.abs(c==="y"?M:w):Hg(w*w+M*M),A>T&&(T=A),A<x&&(x=A);i==="random"&&i_(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=mn(t.amount||t.each)||0,n=n&&_<0?f_(n):n}return _=(p[h]-p.min)/p.max||0,Ft(p.b+(n?n(_):_)*p.v)+p.u}},hf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(fr(n)?0:mn(n))}},s_=function(e,t){var n=An(e),i,s;return!n&&$i(e)&&(i=n=e.radius||xi,e.values?(e=vi(e.values),(s=!fr(e[0]))&&(i*=i)):e=hf(e.increment)),Zr(t,n?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=xi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||fr(o)?u:u+mn(o)}:hf(e))},o_=function(e,t,n,i){return Zr(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},e1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},t1=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},n1=function(e,t,n){return l_(e,t,0,1,n)},a_=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},i1=function r(e,t,n){var i=t-e;return An(e)?a_(e,r(0,e.length),t):Zr(n,function(s){return(i+(s-e)%i)%i+e})},r1=function r(e,t,n){var i=t-e,s=i*2;return An(e)?a_(e,r(0,e.length-1),t):Zr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Co=function(e){return e.replace(US,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(BS);return o_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},l_=function(e,t,n,i,s){var o=t-e,a=i-n;return Zr(s,function(l){return n+((l-e)/o*a||0)})},s1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=tn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=wo(An(e)?[]:{},e));if(!u){for(l in t)Tf.call(a,e,l,"get",t[l]);s=function(g){return If(g,a)||(o?e.p:e)}}}return Zr(n,s)},Vg=function(e,t,n){var i=e.labels,s=xi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},si=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xr.length&&Eu(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},Da=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&si(e,"onInterrupt"),e},bo,c_=[],u_=function(e){if(e)if(e=!e.name&&e.default||e,mf()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ba,render:If,add:Tf,kill:M1,modifier:y1,rawVars:0},o={targetTest:0,get:0,getSetter:Ou,aliases:{},register:0};if(Eo(),e!==i){if(Xn[t])return;ai(i,ai(Cu(e,s),o)),wo(i.prototype,wo(s,Cu(e,o))),Xn[i.prop=t]=i,e.targetTest&&(wu.push(i),vf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yg(t,i),e.register&&e.register(Tn,i,Nn)}else c_.push(e)},wt=255,Fa={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},jd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},h_=function(e,t,n){var i=e?fr(e)?[e>>16,e>>8&wt,e&wt]:0:Fa.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fa[e])i=Fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Lg),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=jd(l+1/3,s,o),i[1]=jd(l,s,o),i[2]=jd(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(gf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lg)||Fa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/wt,o=i[1]/wt,a=i[2]/wt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},d_=function(e){var t=[],n=[],i=-1;return e.split(dr).forEach(function(s){var o=s.match(Cs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},kg=function(e,t,n){var i="",s=(e+i).match(dr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=h_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=d_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(dr,"1").split(Cs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(dr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},dr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),o1=/hsl[a]?\(/,wf=function(e){var t=e.join(" "),n;if(dr.lastIndex=0,dr.test(t))return n=o1.test(t),e[1]=kg(e[1],n),e[0]=kg(e[0],n,d_(e[1])),!0},Va,qn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=r()-i,y=p===!0,w,M,A,E;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,w=A-o,(w>0||y)&&(E=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=w+(w>=s?4:s-w),M=1),y||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](A,h,E,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Xg&&(!sf&&mf()&&(Yi=sf=window,xf=Yi.document||{},oi.gsap=Tn,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(Tn.version),qg(Tu||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),c_.forEach(u_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Va=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Va=0,c=Ba},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var w=m?function(M,A,E,T){p(M,A,E,T),f.remove(w)}:p;return f.remove(p),a[y?"unshift":"push"](w),Eo(),w},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f})(),Eo=function(){return!Va&&qn.wake()},at={},a1=/^[\d.\-M][\d.\-,\s]/,l1=/["']/g,c1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(l1,"").trim():+c,i=l.substr(a+1).trim();return t},u1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},h1=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[c1(t[1])]:u1(e).split(",").map(Jg)):at._CE&&a1.test(e)?at._CE("",e):n},f_=function(e){return function(t){return 1-e(1-t)}},p_=function r(e,t){for(var n=e._first,i;n;)n instanceof fn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ts=function(e,t){return e&&(kt(e)?e:at[e]||h1(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ln(e,function(a){at[a]=oi[a]=s,at[o=a.toLowerCase()]=n;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},m_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qd=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*OS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:m_(a);return s=rf/s,l.config=function(c,u){return r(e,c,u)},l},ef=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:m_(n);return i.config=function(s){return r(e,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Ps("Elastic",Qd("in"),Qd("out"),Qd());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ps("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ps("Circ",function(r){return-(Hg(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-NS(r*FS)+1});Ps("Back",ef("in"),ef("out"),ef());at.SteppedEase=at.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((i*za(0,o,a)|0)+s)*n}}};So.ease=at["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yf+=r+","+r+"Params,"});var Af=function(e,t){this.id=LS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bf,this.set=t?t.getSetter:Ou},ka=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,To(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Va||qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,To(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Eo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nu(this,n),!s._dp||s.parent||Qg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$g(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ug(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ug(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ao(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ru(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(za(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Lu(this),qS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ru(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=GS);var i=pn;return pn=n,Sf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_i(this,n),Yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=kt(n)?n:Kg,l=function(){var u=i.then;i.then=null,s&&s(),kt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Da(this)},r})();ai(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var fn=(function(r){Gg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Lt&&Zi(n.parent||Lt,hr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&e_(hr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Na(0,arguments,this),this},t.from=function(i,s,o){return Na(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Na(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,La(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,_i(this,o),1),this},t.call=function(i,s,o){return Zi(this,Xt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xt(i,o,_i(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,La(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,La(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,p,m,y,w,M,A,E,T;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,w=this._ts,m=!w,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Ft(u%p),u===l?(_=this._repeat,h=c):(A=Ft(u/p),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=Ao(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),E&&_&1&&(h=c-h,T=1),_!==A&&!this._lock){var x=E&&A&1,b=x===(E&&_&1);if(_<A&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ft(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;p_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=JS(this,Ft(a),Ft(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(si(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-At);break}}d=g}else{d=this._last;for(var N=i<0?i:h;d;){if(g=d._prev,(d._act||N<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(N-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(N-d._start)*d._ts,s,o||pn&&Sf(d)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=N?-At:At);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-At)._zTime=h>=a?1:-1,this._ts))return this._start=M,Lu(this),this.render(i,s,o);this._onUpdate&&!s&&si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(fr(s)||(s=_i(this,s,i)),!(i instanceof ka)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(tn(i))return this.addLabel(i,s);if(kt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?Zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-xi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return tn(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&Fu(this,i),i===this._recent&&(this._recent=this._last),As(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=_i(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Xt.delayedCall(0,s||Ba,o);return a.data="isPause",this._hasPause=1,Zi(this,a,_i(this,i))},t.removePause=function(i){var s=this._first;for(i=_i(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Wr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=vi(i),l=this._first,c=fr(s),u;l;)l instanceof Xt?HS(l._targets,a)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=_i(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Xt.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&To(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ai({startAt:{time:_i(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Vg(this,_i(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Vg(this,_i(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ft(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return As(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),As(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=xi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ft(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;To(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Lt._ts&&($g(Lt,Ru(i,Lt)),Zg=qn.frame),qn.frame>=Ng){Ng+=Zn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Zn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},e})(ka);ai(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var d1=function(e,t,n,i,s,o,a){var l=new Nn(this._pt,e,t,0,1,Pf,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Co(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),h=n.match(Jd)||[];f=Jd.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Rs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Jd.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(_f.test(i)||m)&&(l.e=0),this._pt=l,l},Tf=function(e,t,n,i,s,o,a,l,c,u){kt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:kt(f)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=kt(f)?c?_1:x_:Rf,g;if(tn(i)&&(~i.indexOf("random(")&&(i=Co(i)),i.charAt(1)==="="&&(g=Rs(h,i)+(mn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||df)return!isNaN(h*i)&&i!==""?(g=new Nn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?v1:v_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Du(t,i),d1.call(this,e,t,h,i,d,l||Zn.stringFilter,c))},f1=function(e,t,n,i,s){if(kt(e)&&(e=Oa(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||An(e)||Wg(e))return tn(e)?Oa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Oa(e[a],s,t,n,i);return o},Ef=function(e,t,n,i,s,o){var a,l,c,u;if(Xn[e]&&(a=new Xn[e]).init(s,a.rawVars?t[e]:f1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==bo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Wr,df,Cf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,w=e._overwrite==="auto"&&!pf,M=e.timeline,A,E,T,x,b,N,R,D,B,z,V,k,L;if(M&&(!h||!s)&&(s="none"),e._ease=Ts(s,So.ease),e._yEase=f?f_(Ts(f===!0?s:f,So.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(D=p[0]?qr(p[0]).harness:0,k=D&&i[D.prop],A=Cu(i,vf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Su:zS),_._lazy=0),o){if(Yr(e._startAt=Xt.set(p,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!a&&!d)&&e._startAt.revert(Su),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:m},A),k&&(T[D.prop]=k),Yr(e._startAt=Xt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(Su):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Yn(l)||l&&!g,E=0;E<p.length;E++){if(b=p[E],R=b._gsap||Mf(p)[E]._gsap,e._ptLookup[E]=z={},of[R.id]&&Xr.length&&Eu(),V=y===p?E:y.indexOf(b),D&&(B=new D).init(b,k||A,e,V,y)!==!1&&(e._pt=x=new Nn(e._pt,b,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(j){z[j]=x}),B.priority&&(N=1)),!D||k)for(T in A)Xn[T]&&(B=Ef(T,A,e,V,b,y))?B.priority&&(N=1):z[T]=x=Tf.call(e,b,T,"get",A[T],V,y,0,i.stringFilter);e._op&&e._op[E]&&e.kill(b,e._op[E]),w&&e._pt&&(Wr=e,Lt.killTweensOf(b,z,e.globalTime(t)),L=!e.parent,Wr=0),e._pt&&l&&(of[R.id]=1)}N&&Df(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!L,h&&t<=0&&M.render(xi,!0,!0)},p1=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return df=1,e.vars[t]="+=0",Cf(e,a),df=0,l?Ua(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=zt(n)+mn(f.e)),f.b&&(f.b=u.s+mn(f.b))},m1=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=wo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},g1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Oa=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):tn(e)&&~e.indexOf("random(")?Co(e):e},g_=yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",__={};Ln(g_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return __[r]=1});var Xt=(function(r){Gg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:La(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Lt,w=(An(n)||Wg(n)?fr(n[0]):"length"in i)?[n]:vi(n),M,A,E,T,x,b,N,R;if(a._targets=w.length?Mf(w):Ua("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||bu(c)||bu(u)){if(i=a.vars,M=a.timeline=new fn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:w}),M.kill(),M.parent=M._dp=hr(a),M._start=0,h||bu(c)||bu(u)){if(T=w.length,N=h&&r_(h),$i(h))for(x in h)~g_.indexOf(x)&&(R||(R={}),R[x]=h[x]);for(A=0;A<T;A++)E=Cu(i,__),E.stagger=0,m&&(E.yoyoEase=m),R&&wo(E,R),b=w[A],E.duration=+Oa(c,hr(a),A,b,w),E.delay=(+Oa(u,hr(a),A,b,w)||0)-a._delay,!h&&T===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),M.to(b,E,N?N(A,b,w):0),M._ease=at.none;M.duration()?c=u=0:a.timeline=0}else if(g){La(ai(M.vars.defaults,{ease:"none"})),M._ease=Ts(g.ease||i.ease||"none");var D=0,B,z,V;if(An(g))g.forEach(function(k){return M.to(w,k,">")}),M.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||g1(x,g[x],E,g.easeEach);for(x in E)for(B=E[x].sort(function(k,L){return k.t-L.t}),D=0,A=0;A<B.length;A++)z=B[A],V={ease:z.e,duration:(z.t-(A?B[A-1].t:0))/100*c},V[x]=z.v,M.to(w,V,D),D+=V.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!pf&&(Wr=hr(a),Lt.killTweensOf(w),Wr=0),Zi(y,hr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ft(y._time)&&Yn(f)&&YS(hr(a))&&y.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),p&&e_(hr(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-At&&!u?l:i<At?0:i,h,d,g,_,p,m,y,w,M;if(!c)$S(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ft(f%_),f===l?(g=this._repeat,h=c):(p=Ft(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(M=this._yEase,h=c-h),p=Ao(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(w&&this._yEase&&p_(w,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ft(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(t_(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!p&&(si(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&af(this,i,s,o),si(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&af(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(si(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Va||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cf(this,c),u=this._ease(c/this._dur),p1(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Nu(this,0),this.parent||jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||Da(this),this.parent&&o!==this.timeline.totalDuration()&&To(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&XS(a,l))return s==="all"&&(this._pt=0),Da(this);for(f=this._op=this._op||[],s!=="all"&&(tn(s)&&(_={},Ln(s,function(y){return _[y]=1}),s=_),s=m1(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Fu(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Da(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Na(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Na(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Lt.killTweensOf(i,s,o)},e})(ka);ai(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new fn,t=cf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rf=function(e,t,n){return e[t]=n},x_=function(e,t,n){return e[t](n)},_1=function(e,t,n,i){return e[t](i.fp,n)},x1=function(e,t,n){return e.setAttribute(t,n)},Ou=function(e,t){return kt(e[t])?x_:Iu(e[t])&&e.setAttribute?x1:Rf},v_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},v1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Pf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},If=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},y1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},M1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},b1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Df=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Nn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||v_,this.d=l||this,this.set=c||Rf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=b1,this.m=n,this.mt=s,this.tween=i},r})();Ln(yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vf[r]=1});oi.TweenMax=oi.TweenLite=Xt;oi.TimelineLite=oi.TimelineMax=fn;Lt=new fn({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=wf;var Es=[],Au={},S1=[],zg=0,w1=0,tf=function(e){return(Au[e]||S1).map(function(t){return t()})},ff=function(){var e=Date.now(),t=[];e-zg>2&&(tf("matchMediaInit"),Es.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),tf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zg=e,tf("matchMedia"))},y_=(function(){function r(t,n){this.selector=n&&uf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=w1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var o=this,a=function(){var c=Dt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=uf(s)),Dt=o,f=i.apply(o,arguments),kt(f)&&o._r.push(f),Dt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Es.length;o--;)Es[o].id===this.id&&Es.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),A1=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var o=new y_(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Yi.matchMedia(n[c]),l&&(Es.indexOf(o)<0&&Es.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ff):l.addEventListener("change",ff)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Pu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return u_(i)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){tn(e)&&(e=vi(e)[0]);var s=qr(e||{}).get,o=n?Kg:Jg;return n==="native"&&(n=""),e&&(t?o((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return Tn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Xn[t],a=qr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;bo._pt=0,f.init(e,n?u+n:u,bo,0,[e]),f.render(1,f),bo._pt&&If(1,bo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Tn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ts(e.ease,So.ease)),Og(So,e||{})},config:function(e){return Og(Zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!oi[a]&&Ua(t+" effect requires "+a+" plugin.")}),Kd[t]=function(a,l,c){return n(vi(a),ai(l||{},s),c)},o&&(fn.prototype[t]=function(a,l,c){return this.add(Kd[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Ts(t)},parseEase:function(e,t){return arguments.length?Ts(e,t):at},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),i,s;for(n.smoothChildTiming=Yn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=s;return Zi(Lt,n,0),n},context:function(e,t){return e?new y_(e,t):Dt},matchMedia:function(e){return new A1(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ff()},addEventListener:function(e,t){var n=Au[e]||(Au[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Au[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:i1,wrapYoyo:r1,distribute:r_,random:o_,snap:s_,normalize:n1,getUnit:mn,clamp:jS,splitColor:h_,toArray:vi,selector:uf,mapRange:l_,pipe:e1,unitize:t1,interpolate:s1,shuffle:i_},install:qg,effects:Kd,ticker:qn,updateRoot:fn.updateRoot,plugins:Xn,globalTimeline:Lt,core:{PropTween:Nn,globals:Yg,Tween:Xt,Timeline:fn,Animation:ka,getCache:qr,_removeLinkedListItem:Fu,reverting:function(){return pn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return pf=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pu[r]=Xt[r]});qn.add(fn.updateRoot);bo=Pu.to({},{duration:0});var T1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},E1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=T1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},nf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(tn(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}E1(a,s)}}}},Tn=Pu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},nf("roundProps",hf),nf("modifiers"),nf("snap",s_))||Pu;Xt.version=fn.version=Tn.version="3.14.2";Xg=1;mf()&&Eo();var C1=at.Power0,R1=at.Power1,P1=at.Power2,I1=at.Power3,D1=at.Power4,F1=at.Linear,L1=at.Quad,N1=at.Cubic,O1=at.Quart,U1=at.Quint,B1=at.Strong,V1=at.Elastic,k1=at.Back,z1=at.SteppedEase,G1=at.Bounce,H1=at.Sine,W1=at.Expo,X1=at.Circ;var M_,$r,Po,Bf,Ls,q1,b_,Vf,Y1=function(){return typeof window<"u"},mr={},Fs=180/Math.PI,Io=Math.PI/180,Ro=Math.atan2,S_=1e8,kf=/([A-Z])/g,Z1=/(left|right|width|margin|padding|x)/i,$1=/[\s,\(]\S/,Ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},J1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},K1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},j1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Q1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},I_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},D_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ew=function(e,t,n){return e.style[t]=n},tw=function(e,t,n){return e.style.setProperty(t,n)},nw=function(e,t,n){return e._gsap[t]=n},iw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},rw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},sw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Nt="transform",$n=Nt+"Origin",ow=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in mr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=pr(i,a)}):this.tfm[e]=o.x?o[e]:pr(i,e),e===$n&&(this.tfm.zOrigin=o.zOrigin);else return Ji.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},F_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},aw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Vf(),(!s||!s.isStart)&&!n[Nt]&&(F_(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},L_=function(e,t){var n={target:e,props:[],revert:aw,save:ow};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},N_,Nf=function(e,t){var n=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return n&&n.style?n:$r.createElement(e)},li=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Do(t)||t,1)||""},w_="O,Moz,ms,Ms,Webkit".split(","),Do=function(e,t,n){var i=t||Ls,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(w_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?w_[o]:"")+e},Of=function(){Y1()&&window.document&&(M_=window,$r=M_.document,Po=$r.documentElement,Ls=Nf("div")||{style:{}},q1=Nf("div"),Nt=Do(Nt),$n=Nt+"Origin",Ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",N_=!!Do("perspective"),Vf=Tn.core.reverting,Bf=1)},A_=function(e){var t=e.ownerSVGElement,n=Nf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Po.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Po.removeChild(n),s},T_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},O_=function(e){var t,n;try{t=e.getBBox()}catch{t=A_(e),n=1}return t&&(t.width||t.height)||n||(t=A_(e)),t&&!t.width&&!t.x&&!t.y?{x:+T_(e,["x","cx","x1"])||0,y:+T_(e,["y","cy","y1"])||0,width:0,height:0}:t},U_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&O_(e))},Kr=function(e,t){if(t){var n=e.style,i;t in mr&&t!==$n&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(kf,"-$1").toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,i,s,o){var a=new Nn(e._pt,t,n,0,1,o?D_:I_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},E_={deg:1,rad:1,turn:1},lw={grid:1,flex:1},jr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ls.style,l=Z1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||E_[i]||E_[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&U_(e),(d||o==="%")&&(mr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],zt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===$r||!_.appendChild)&&(_=$r.body),p=_._gsap,p&&d&&p.width&&l&&p.time===qn.time&&!p.uncache)return zt(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[u],y?e.style[t]=y:Kr(e,t)}else(d||o==="%")&&!lw[li(_,"display")]&&(a.position=li(e,"position")),_===e&&(a.position="static"),_.appendChild(Ls),g=Ls[u],_.removeChild(Ls),a.position="absolute";return l&&d&&(p=qr(_),p.time=qn.time,p.width=_[u]),zt(h?g*s/f:g&&s?f/g*s:0)},pr=function(e,t,n,i){var s;return Bf||Of(),t in Ji&&t!=="transform"&&(t=Ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),mr[t]&&t!=="transform"?(s=Wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bu(li(e,$n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Uu[t]&&Uu[t](e,t,n)||li(e,t)||bf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?jr(e,t,s,n)+n:s},cw=function(e,t,n,i){if(!n||n==="none"){var s=Do(t,e,1),o=s&&li(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=li(e,"borderTopColor"))}var a=new Nn(this._pt,e.style,t,0,1,Pf),l=0,c=0,u,f,h,d,g,_,p,m,y,w,M,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=li(e,t)||i,_?e.style[t]=_:Kr(e,t)),u=[n,i],wf(u),n=u[0],i=u[1],h=n.match(Cs)||[],A=i.match(Cs)||[],A.length){for(;f=Cs.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),p.charAt(1)==="="&&(p=Rs(d,p)+M),m=parseFloat(p),w=p.substr((m+"").length),l=Cs.lastIndex-w.length,w||(w=w||Zn.units[t]||M,l===i.length&&(i+=w,a.e+=w)),M!==w&&(d=jr(e,t,_,w)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?D_:I_;return _f.test(i)&&(a.e=0),this._pt=a,a},C_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=C_[n]||n,t[1]=C_[i]||i,t.join(" ")},hw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mr[a]&&(l=1,a=a==="transformOrigin"?$n:Nt),Kr(n,a);l&&(Kr(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),o.uncache=1,F_(i)))}},Uu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Nn(e._pt,t,n,0,0,hw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ha=[1,0,0,1,0,0],B_={},V_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},R_=function(e){var t=li(e,Nt);return V_(t)?Ha:t.substr(7).match(gf).map(zt)},zf=function(e,t){var n=e._gsap||qr(e),i=e.style,s=R_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ha:s):(s===Ha&&!e.offsetParent&&e!==Po&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Po.appendChild(e)),s=R_(e),l?i.display=l:Kr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Po.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uf=function(e,t,n,i,s,o){var a=e._gsap,l=s||zf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],w=t.split(" "),M=parseFloat(w[0])||0,A=parseFloat(w[1])||0,E,T,x,b;n?l!==Ha&&(T=d*p-g*_)&&(x=M*(p/T)+A*(-_/T)+(_*y-p*m)/T,b=M*(-g/T)+A*(d/T)-(d*y-g*m)/T,M=x,A=b):(E=O_(e),M=E.x+(~w[0].indexOf("%")?M/100*E.width:M),A=E.y+(~(w[1]||w[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(m=M-c,y=A-u,a.xOffset=f+(m*d+y*_)-m,a.yOffset=h+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[$n]="0px 0px",o&&(Jr(o,a,"xOrigin",c,M),Jr(o,a,"yOrigin",u,A),Jr(o,a,"xOffset",f,a.xOffset),Jr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+A)},Wa=function(e,t){var n=e._gsap||new Af(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=li(e,$n)||"0",u,f,h,d,g,_,p,m,y,w,M,A,E,T,x,b,N,R,D,B,z,V,k,L,j,Q,P,le,ce,Be,Ge,Ye;return u=f=h=_=p=m=y=w=M=0,d=g=1,n.svg=!!(e.getCTM&&U_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),T=zf(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",L=""):L=!t&&e.getAttribute("data-svg-origin"),Uf(e,L||c,!!L||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==Ha&&(R=T[0],D=T[1],B=T[2],z=T[3],u=V=T[4],f=k=T[5],T.length===6?(d=Math.sqrt(R*R+D*D),g=Math.sqrt(z*z+B*B),_=R||D?Ro(D,R)*Fs:0,y=B||z?Ro(B,z)*Fs+_:0,y&&(g*=Math.abs(Math.cos(y*Io))),n.svg&&(u-=A-(A*R+E*B),f-=E-(A*D+E*z))):(Ye=T[6],Be=T[7],P=T[8],le=T[9],ce=T[10],Ge=T[11],u=T[12],f=T[13],h=T[14],x=Ro(Ye,ce),p=x*Fs,x&&(b=Math.cos(-x),N=Math.sin(-x),L=V*b+P*N,j=k*b+le*N,Q=Ye*b+ce*N,P=V*-N+P*b,le=k*-N+le*b,ce=Ye*-N+ce*b,Ge=Be*-N+Ge*b,V=L,k=j,Ye=Q),x=Ro(-B,ce),m=x*Fs,x&&(b=Math.cos(-x),N=Math.sin(-x),L=R*b-P*N,j=D*b-le*N,Q=B*b-ce*N,Ge=z*N+Ge*b,R=L,D=j,B=Q),x=Ro(D,R),_=x*Fs,x&&(b=Math.cos(x),N=Math.sin(x),L=R*b+D*N,j=V*b+k*N,D=D*b-R*N,k=k*b-V*N,R=L,V=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=zt(Math.sqrt(R*R+D*D+B*B)),g=zt(Math.sqrt(k*k+Ye*Ye)),x=Ro(V,k),y=Math.abs(x)>2e-4?x*Fs:0,M=Ge?1/(Ge<0?-Ge:Ge):0),n.svg&&(L=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!V_(li(e,Nt)),L&&e.setAttribute("transform",L))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=zt(d),n.scaleY=zt(g),n.rotation=zt(_)+a,n.rotationX=zt(p)+a,n.rotationY=zt(m)+a,n.skewX=y+a,n.skewY=w+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[$n]=Bu(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?fw:N_?k_:dw,n.uncache=0,n},Bu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ff=function(e,t,n){var i=mn(t);return zt(parseFloat(t)+parseFloat(jr(e,"x",n+"px",i)))+i},dw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,k_(e,t)},Is="0deg",Ga="0px",Ds=") ",k_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,w=n.zOrigin,M="",A=m==="auto"&&e&&e!==1||m===!0;if(w&&(f!==Is||u!==Is)){var E=parseFloat(u)*Io,T=Math.sin(E),x=Math.cos(E),b;E=parseFloat(f)*Io,b=Math.cos(E),o=Ff(y,o,T*b*-w),a=Ff(y,a,-Math.sin(E)*-w),l=Ff(y,l,x*b*-w+w)}p!==Ga&&(M+="perspective("+p+Ds),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==Ga||a!==Ga||l!==Ga)&&(M+=l!==Ga||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ds),c!==Is&&(M+="rotate("+c+Ds),u!==Is&&(M+="rotateY("+u+Ds),f!==Is&&(M+="rotateX("+f+Ds),(h!==Is||d!==Is)&&(M+="skew("+h+", "+d+Ds),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Ds),y.style[Nt]=M||"translate(0, 0)"},fw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,w=parseFloat(o),M=parseFloat(a),A,E,T,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Io,c*=Io,A=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Io,b=Math.tan(c-u),b=Math.sqrt(1+b*b),T*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),A*=b,E*=b)),A=zt(A),E=zt(E),T=zt(T),x=zt(x)):(A=f,x=h,E=T=0),(w&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(w=jr(d,"x",o,"px"),M=jr(d,"y",a,"px")),(g||_||p||m)&&(w=zt(w+g-(g*A+_*T)+p),M=zt(M+_-(g*E+_*x)+m)),(i||s)&&(b=d.getBBox(),w=zt(w+i/100*b.width),M=zt(M+s/100*b.height)),b="matrix("+A+","+E+","+T+","+x+","+w+","+M+")",d.setAttribute("transform",b),y&&(d.style[Nt]=b)},pw=function(e,t,n,i,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fs:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*S_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*S_)%o-~~(c/o)*o)),e._pt=h=new Nn(e._pt,t,n,i,c,J1),h.e=u,h.u="deg",e._props.push(n),h},P_=function(e,t){for(var n in t)e[n]=t[n];return e},mw=function(e,t,n){var i=P_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=Wa(n,1),Kr(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=Wa(n,1),o[Nt]=c);for(l in mr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=mn(c),g=mn(u),f=d!==g?jr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Nn(e._pt,a,l,f,h-f,Lf),e._pt.u=g||0,e._props.push(l));P_(a,i)};Ln("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Uu[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return pr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Gf={name:"css",register:Of,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,w,M,A,E,T,x,b;Bf||Of(),this.styles=this.styles||L_(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Xn[_]&&Ef(_,t,n,i,e,s)))){if(d=typeof u,g=Uu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Co(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",dr.lastIndex=0,dr.test(c)||(p=mn(c),m=mn(u),m?p!==m&&(c=jr(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],tn(c)&&~c.indexOf("random(")&&(c=Co(c)),mn(c+"")||c==="auto"||(c+=Zn.units[_]||mn(pr(e,_))||""),(c+"").charAt(1)==="="&&(c=pr(e,_))):c=pr(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Ji&&(_==="autoAlpha"&&(h===1&&pr(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Jr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in mr,w){if(this.styles.save(_),b=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=li(e,"perspective"),N?e.style.perspective=N:Kr(e,"perspective")}f=parseFloat(u)}if(M||(A=e._gsap,A.renderTransform&&!t.parseTransform||Wa(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,M=this._pt=new Nn(this._pt,a,Nt,0,1,A.renderTransform,A,0,-1),M.dep=1),_==="scale")this._pt=new Nn(this._pt,A,"scaleY",A.scaleY,(y?Rs(A.scaleY,y+f):f)-A.scaleY||0,Lf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push($n,0,a[$n]),u=uw(u),A.svg?Uf(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Jr(this,A,"zOrigin",A.zOrigin,m),Jr(this,a,_,Bu(c),Bu(u)));continue}else if(_==="svgOrigin"){Uf(e,u,1,E,0,this);continue}else if(_ in B_){pw(this,A,_,h,y?Rs(h,y+u):u);continue}else if(_==="smoothOrigin"){Jr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){mw(this,u,e);continue}}else _ in a||(_=Do(_)||_);if(w||(f||f===0)&&(h||h===0)&&!$1.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=mn(u)||(_ in Zn.units?Zn.units[_]:p),p!==m&&(h=jr(e,_,c,m)),this._pt=new Nn(this._pt,w?A:a,_,h,(y?Rs(h,y+f):f)-h,!w&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Q1:Lf),this._pt.u=m||0,w&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=j1):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=K1);else if(_ in a)cw.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Du(_,u);continue}w||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}T&&Df(this)},render:function(e,t){if(t.tween._time||!Vf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pr,aliases:Ji,getSetter:function(e,t,n){var i=Ji[t];return i&&i.indexOf(",")<0&&(t=i),t in mr&&t!==$n&&(e._gsap.x||pr(e,"x"))?n&&b_===n?t==="scale"?iw:nw:(b_=n||{})&&(t==="scale"?rw:sw):e.style&&!Iu(e.style[t])?ew:~t.indexOf("-")?tw:Ou(e,t)},core:{_removeProperty:Kr,_getMatrix:zf}};Tn.utils.checkPrefix=Do;Tn.core.getStyleSaver=L_;(function(r,e,t,n){var i=Ln(r+","+e+","+t,function(s){mr[s]=1});Ln(e,function(s){Zn.units[s]="deg",B_[s]=1}),Ji[i[13]]=r+","+e,Ln(n,function(s){var o=s.split(":");Ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Zn.units[r]="px"});Tn.registerPlugin(Gf);var Xa=Tn.registerPlugin(Gf)||Tn,vR=Xa.core.Tween;function z_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gw(r,e,t){return e&&z_(r.prototype,e),t&&z_(r,t),r}var gn,zu,_w,ci,Qr,es,Lo,H_,Ns,Ya,W_,gr,Di,X_,q_=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},Y_=1,Fo=[],nt=[],Fi=[],Za=Date.now,Hf=function(e,t){return t},xw=function(){var e=Ya.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Fi),nt=n,Fi=i,Hf=function(o,a){return t[o](a)}},xr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},$a=function(e){return!!~W_.indexOf(e)},Un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},On=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vu="scrollLeft",ku="scrollTop",Wf=function(){return gr&&gr.isPressed||nt.cache++},Gu=function(e,t){var n=function i(s){if(s||s===0){Y_&&(ci.history.scrollRestoration="manual");var o=gr&&gr.isPressed;s=i.v=Math.round(s)||(gr&&gr.iOS?1:0),e(s),i.cacheID=nt.cache,o&&Hf("ss",s)}else(t||nt.cache!==i.cacheID||Hf("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},En={s:Vu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gu(function(r){return arguments.length?ci.scrollTo(r,Zt.sc()):ci.pageXOffset||Qr[Vu]||es[Vu]||Lo[Vu]||0})},Zt={s:ku,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:Gu(function(r){return arguments.length?ci.scrollTo(En.sc(),r):ci.pageYOffset||Qr[ku]||es[ku]||Lo[ku]||0})},Bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},vw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},_r=function(e,t){var n=t.s,i=t.sc;$a(e)&&(e=Qr.scrollingElement||es);var s=nt.indexOf(e),o=i===Zt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Un(e,"scroll",Wf);var a=nt[s+o],l=a||(nt[s+o]=Gu(xr(e,n),!0)||($a(e)?i:Gu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Hu=function(e,t,n){var i=e,s=e,o=Za(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Za();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,p=s,m=Za();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},qa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},G_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Z_=function(){Ya=gn.core.globals().ScrollTrigger,Ya&&Ya.core&&xw()},$_=function(e){return gn=e||q_(),!zu&&gn&&typeof document<"u"&&document.body&&(ci=window,Qr=document,es=Qr.documentElement,Lo=Qr.body,W_=[ci,Qr,es,Lo],_w=gn.utils.clamp,X_=gn.core.context||function(){},Ns="onpointerenter"in Lo?"pointer":"mouse",H_=Gt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=Gt.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Y_=0},500),Z_(),zu=1),zu};En.op=Zt;nt.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){zu||$_(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Ya||Z_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,w=n.onPress,M=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,x=n.onDown,b=n.onChangeX,N=n.onChangeY,R=n.onChange,D=n.onToggleX,B=n.onToggleY,z=n.onHover,V=n.onHoverEnd,k=n.onMove,L=n.ignoreCheck,j=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,le=n.onWheel,ce=n.onEnable,Be=n.onDisable,Ge=n.onClick,Ye=n.scrollSpeed,$=n.capture,ee=n.allowClicks,re=n.lockAxis,De=n.onLockAxis;this.target=a=Bn(a)||es,this.vars=n,d&&(d=gn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Ye=Ye||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(Lo).lineHeight)||22);var Fe,Ce,lt,Se,Ve,$e,Ue,W=this,F=0,pt=0,et=n.passive||!u&&n.passive!==!1,ke=_r(a,En),ve=_r(a,Zt),C=ke(),v=ve(),O=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Di[0]==="pointerdown",J=$a(a),K=a.ownerDocument||Qr,Y=[0,0,0],_e=[0,0,0],oe=0,Re=function(){return oe=Za()},ye=function(Pe,je){return(W.event=Pe)&&d&&vw(Pe.target,d)||je&&O&&Pe.pointerType!=="touch"||L&&L(Pe,je)},ne=function(){W._vx.reset(),W._vy.reset(),Ce.pause(),f&&f(W)},se=function(){var Pe=W.deltaX=G_(Y),je=W.deltaY=G_(_e),me=Math.abs(Pe)>=i,We=Math.abs(je)>=i;R&&(me||We)&&R(W,Pe,je,Y,_e),me&&(A&&W.deltaX>0&&A(W),E&&W.deltaX<0&&E(W),b&&b(W),D&&W.deltaX<0!=F<0&&D(W),F=W.deltaX,Y[0]=Y[1]=Y[2]=0),We&&(x&&W.deltaY>0&&x(W),T&&W.deltaY<0&&T(W),N&&N(W),B&&W.deltaY<0!=pt<0&&B(W),pt=W.deltaY,_e[0]=_e[1]=_e[2]=0),(Se||lt)&&(k&&k(W),lt&&(p&&lt===1&&p(W),y&&y(W),lt=0),Se=!1),$e&&!($e=!1)&&De&&De(W),Ve&&(le(W),Ve=!1),Fe=0},Me=function(Pe,je,me){Y[me]+=Pe,_e[me]+=je,W._vx.update(Pe),W._vy.update(je),c?Fe||(Fe=requestAnimationFrame(se)):se()},we=function(Pe,je){re&&!Ue&&(W.axis=Ue=Math.abs(Pe)>Math.abs(je)?"x":"y",$e=!0),Ue!=="y"&&(Y[2]+=Pe,W._vx.update(Pe,!0)),Ue!=="x"&&(_e[2]+=je,W._vy.update(je,!0)),c?Fe||(Fe=requestAnimationFrame(se)):se()},de=function(Pe){if(!ye(Pe,1)){Pe=qa(Pe,u);var je=Pe.clientX,me=Pe.clientY,We=je-W.x,Oe=me-W.y,qe=W.isDragging;W.x=je,W.y=me,(qe||(We||Oe)&&(Math.abs(W.startX-je)>=s||Math.abs(W.startY-me)>=s))&&(lt||(lt=qe?2:1),qe||(W.isDragging=!0),we(We,Oe))}},He=W.onPress=function(xe){ye(xe,1)||xe&&xe.button||(W.axis=Ue=null,Ce.pause(),W.isPressed=!0,xe=qa(xe),F=pt=0,W.startX=W.x=xe.clientX,W.startY=W.y=xe.clientY,W._vx.reset(),W._vy.reset(),Un(j?a:K,Di[1],de,et,!0),W.deltaX=W.deltaY=0,w&&w(W))},I=W.onRelease=function(xe){if(!ye(xe,1)){On(j?a:K,Di[1],de,!0);var Pe=!isNaN(W.y-W.startY),je=W.isDragging,me=je&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),We=qa(xe);!me&&Pe&&(W._vx.reset(),W._vy.reset(),u&&ee&&gn.delayedCall(.08,function(){if(Za()-oe>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(K.createEvent){var Oe=K.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,ci,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Oe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&je&&!j&&Ce.restart(!0),lt&&se(),m&&je&&m(W),M&&M(W,me)}},ae=function(Pe){return Pe.touches&&Pe.touches.length>1&&(W.isGesturing=!0)&&Q(Pe,W.isDragging)},ie=function(){return(W.isGesturing=!1)||P(W)},fe=function(Pe){if(!ye(Pe)){var je=ke(),me=ve();Me((je-C)*Ye,(me-v)*Ye,1),C=je,v=me,f&&Ce.restart(!0)}},te=function(Pe){if(!ye(Pe)){Pe=qa(Pe,u),le&&(Ve=!0);var je=(Pe.deltaMode===1?l:Pe.deltaMode===2?ci.innerHeight:1)*g;Me(Pe.deltaX*je,Pe.deltaY*je,0),f&&!j&&Ce.restart(!0)}},Z=function(Pe){if(!ye(Pe)){var je=Pe.clientX,me=Pe.clientY,We=je-W.x,Oe=me-W.y;W.x=je,W.y=me,Se=!0,f&&Ce.restart(!0),(We||Oe)&&we(We,Oe)}},be=function(Pe){W.event=Pe,z(W)},Ne=function(Pe){W.event=Pe,V(W)},ut=function(Pe){return ye(Pe)||qa(Pe,u)&&Ge(W)};Ce=W._dc=gn.delayedCall(h||.25,ne).pause(),W.deltaX=W.deltaY=0,W._vx=Hu(0,50,!0),W._vy=Hu(0,50,!0),W.scrollX=ke,W.scrollY=ve,W.isDragging=W.isGesturing=W.isPressed=!1,X_(this),W.enable=function(xe){return W.isEnabled||(Un(J?K:a,"scroll",Wf),o.indexOf("scroll")>=0&&Un(J?K:a,"scroll",fe,et,$),o.indexOf("wheel")>=0&&Un(a,"wheel",te,et,$),(o.indexOf("touch")>=0&&H_||o.indexOf("pointer")>=0)&&(Un(a,Di[0],He,et,$),Un(K,Di[2],I),Un(K,Di[3],I),ee&&Un(a,"click",Re,!0,!0),Ge&&Un(a,"click",ut),Q&&Un(K,"gesturestart",ae),P&&Un(K,"gestureend",ie),z&&Un(a,Ns+"enter",be),V&&Un(a,Ns+"leave",Ne),k&&Un(a,Ns+"move",Z)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Se=lt=!1,W._vx.reset(),W._vy.reset(),C=ke(),v=ve(),xe&&xe.type&&He(xe),ce&&ce(W)),W},W.disable=function(){W.isEnabled&&(Fo.filter(function(xe){return xe!==W&&$a(xe.target)}).length||On(J?K:a,"scroll",Wf),W.isPressed&&(W._vx.reset(),W._vy.reset(),On(j?a:K,Di[1],de,!0)),On(J?K:a,"scroll",fe,$),On(a,"wheel",te,$),On(a,Di[0],He,$),On(K,Di[2],I),On(K,Di[3],I),On(a,"click",Re,!0),On(a,"click",ut),On(K,"gesturestart",ae),On(K,"gestureend",ie),On(a,Ns+"enter",be),On(a,Ns+"leave",Ne),On(a,Ns+"move",Z),W.isEnabled=W.isPressed=W.isDragging=!1,Be&&Be(W))},W.kill=W.revert=function(){W.disable();var xe=Fo.indexOf(W);xe>=0&&Fo.splice(xe,1),gr===W&&(gr=0)},Fo.push(W),j&&$a(a)&&(gr=W),W.enable(_)},gw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.14.2";Gt.create=function(r){return new Gt(r)};Gt.register=$_;Gt.getAll=function(){return Fo.slice()};Gt.getById=function(r){return Fo.filter(function(e){return e.vars.id===r})[0]};q_()&&gn.registerPlugin(Gt);var Ee,Uo,rt,Et,di,xt,sp,sh,cl,nl,Ka,Wu,Cn,lh,jf,kn,J_,K_,Bo,f0,Xf,p0,Vn,Qf,m0,g0,ts,ep,op,Vo,ap,il,tp,qf,Xu=1,Rn=Date.now,Yf=Rn(),bi=0,ja=0,j_=function(e,t,n){var i=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Q_=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},yw=function r(){return ja&&requestAnimationFrame(r)},e0=function(){return lh=1},t0=function(){return lh=0},Ki=function(e){return e},Qa=function(e){return Math.round(e*1e5)/1e5||0},_0=function(){return typeof window<"u"},x0=function(){return Ee||_0()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},zs=function(e){return!!~sp.indexOf(e)},v0=function(e){return(e==="Height"?ap:rt["inner"+e])||di["client"+e]||xt["client"+e]},y0=function(e){return xr(e,"getBoundingClientRect")||(zs(e)?function(){return rh.width=rt.innerWidth,rh.height=ap,rh}:function(){return vr(e)})},Mw=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?v0(s):e["client"+s])||0}},bw=function(e,t){return!t||~Fi.indexOf(e)?y0(e):function(){return rh}},ji=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=xr(e,n))?o()-y0(e)()[s]:zs(e)?(di[n]||xt[n])-v0(i):e[n]-e["offset"+i])},qu=function(e,t){for(var n=0;n<Bo.length;n+=3)(!t||~t.indexOf(Bo[n+1]))&&e(Bo[n],Bo[n+1],Bo[n+2])},hi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},el=function(e){return typeof e=="number"},Os=function(e){return typeof e=="object"},Ja=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Zf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},No=Math.abs,M0="left",b0="top",lp="right",cp="bottom",Bs="width",Vs="height",rl="Right",sl="Left",ol="Top",al="Bottom",$t="padding",yi="margin",zo="Width",up="Height",nn="px",Mi=function(e){return rt.getComputedStyle(e)},Sw=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},n0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vr=function(e,t){var n=t&&Mi(e)[jf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},oh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},S0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ww=function(e){return function(t){return Ee.utils.snap(S0(e),t)}},hp=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Aw=function(e){return function(t,n){return hp(S0(e))(t,n.direction)}},Yu=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Zu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},i0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$u={toggleActions:"play",anticipatePin:0},ah={top:0,left:0,center:.5,bottom:1,right:1},eh=function(e,t){if(hi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ah?ah[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ju=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Et.createElement("div"),_=zs(n)||xr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?xt:n,y=e.indexOf("start")!==-1,w=y?c:u,M="border-color:"+w+";font-size:"+f+";color:"+w+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(M+=(i===Zt?lp:cp)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],th(g,0,i,y),g},th=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+zo]=1,s["border"+a+zo]=0,s[n.p]=t+"px",Ee.set(e,s)},it=[],np={},ul,r0=function(){return Rn()-bi>34&&(ul||(ul=requestAnimationFrame(yr)))},Oo=function(){(!Vn||!Vn.isPressed||Vn.startX>xt.clientWidth)&&(nt.cache++,Vn?ul||(ul=requestAnimationFrame(yr)):yr(),bi||Hs("scrollStart"),bi=Rn())},$f=function(){g0=rt.innerWidth,m0=rt.innerHeight},tl=function(e){nt.cache++,(e===!0||!Cn&&!p0&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Qf||g0!==rt.innerWidth||Math.abs(rt.innerHeight-m0)>rt.innerHeight*.25))&&sh.restart(!0)},Gs={},Tw=[],w0=function r(){return ln(st,"scrollEnd",r)||Us(!0)},Hs=function(e){return Gs[e]&&Gs[e].map(function(t){return t()})||Tw},ui=[],A0=function(e){for(var t=0;t<ui.length;t+=5)(!e||ui[t+4]&&ui[t+4].query===e)&&(ui[t].style.cssText=ui[t+1],ui[t].getBBox&&ui[t].setAttribute("transform",ui[t+2]||""),ui[t+3].uncache=1)},T0=function(){return nt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},dp=function(e,t){var n;for(kn=0;kn<it.length;kn++)n=it[kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));il=!0,t&&A0(t),t||Hs("revert")},E0=function(e,t){nt.cache++,(t||!zn)&&nt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(rt.history.scrollRestoration=op=e)},zn,ks=0,s0,Ew=function(){if(s0!==ks){var e=s0=ks;requestAnimationFrame(function(){return e===ks&&Us(!0)})}},C0=function(){xt.appendChild(Vo),ap=!Vn&&Vo.offsetHeight||rt.innerHeight,xt.removeChild(Vo)},o0=function(e){return cl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Us=function(e,t){if(di=Et.documentElement,xt=Et.body,sp=[rt,Et,di,xt],bi&&!e&&!il){cn(st,"scrollEnd",w0);return}C0(),zn=st.isRefreshing=!0,il||T0();var n=Hs("refreshInit");f0&&st.sort(),t||dp(),nt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),il=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),tp=1,o0(!0),it.forEach(function(i){var s=ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),o0(!1),tp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),E0(op,1),sh.pause(),ks++,zn=2,yr(2),it.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),zn=st.isRefreshing=!1,Hs("refresh")},ip=0,nh=1,ll,yr=function(e){if(e===2||!zn&&!il){st.isUpdating=!0,ll&&ll.update(0);var t=it.length,n=Rn(),i=n-Yf>=50,s=t&&it[0].scroll();if(nh=ip>s?-1:1,zn||(ip=s),i&&(bi&&!lh&&n-bi>200&&(bi=0,Hs("scrollEnd")),Ka=Yf,Yf=n),nh<0){for(kn=t;kn-- >0;)it[kn]&&it[kn].update(0,i);nh=1}else for(kn=0;kn<t;kn++)it[kn]&&it[kn].update(0,i);st.isUpdating=!1}ul=0},rp=[M0,b0,cp,lp,yi+al,yi+rl,yi+ol,yi+sl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ih=rp.concat([Bs,Vs,"boxSizing","max"+zo,"max"+up,"position",yi,$t,$t+ol,$t+rl,$t+al,$t+sl]),Cw=function(e,t,n){ko(n);var i=e._gsap;if(i.spacerIsNative)ko(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Jf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=rp.length,o=t.style,a=e.style,l;s--;)l=rp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[cp]=a[lp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Bs]=oh(e,En)+nn,o[Vs]=oh(e,Zt)+nn,o[$t]=a[yi]=a[b0]=a[M0]="0",ko(i),a[Bs]=a["max"+zo]=n[Bs],a[Vs]=a["max"+up]=n[Vs],a[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Rw=/([A-Z])/g,ko=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Rw,"-$1").toLowerCase())}},Ku=function(e){for(var t=ih.length,n=e.style,i=[],s=0;s<t;s++)i.push(ih[s],n[ih[s]]);return i.t=e,i},Pw=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},rh={left:0,top:0},a0=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){Pn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?eh("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),el(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&th(a,n,i,!0);else{Pn(t)&&(t=t(l));var w=(e||"0").split(" "),M,A,E,T;y=Bn(t,l)||xt,M=vr(y)||{},(!M||!M.left&&!M.top)&&Mi(y).display==="none"&&(T=y.style.display,y.style.display="block",M=vr(y),T?y.style.display=T:y.style.removeProperty("display")),A=eh(w[0],M[i.d]),E=eh(w[1]||"0",n),e=M[i.p]-c[i.p]-u+A+s-E,a&&th(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var x=e+n,b=o._isStart;p="scroll"+i.d2,th(o,x,i,b&&x>20||!b&&(f?Math.max(xt[p],di[p]):o.parentNode[p])<=x+1),f&&(c=vr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return d&&y&&(p=vr(y),d.seek(h),m=vr(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Iw=/(webkit|moz|length|cssText|inset)/i,l0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Mi(e);for(o in a)!+o&&!Iw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},R0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ju=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},c0=function(e,t){var n=_r(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=R0(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&yr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ee.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),st.isTouch&&cn(e,"touchmove",n.wheelHandler),s},st=(function(){function r(t,n){Uo||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ep(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ja){this.update=this.refresh=this.kill=Ki;return}n=n0(hi(n)||el(n)||n.nodeType?{trigger:n}:n,$u);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,w=s.once,M=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,N=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Zt,R=!f&&f!==0,D=Bn(n.scroller||rt),B=Ee.core.getCache(D),z=zs(D),V=("pinType"in n?n.pinType:xr(D,"pinType")||z&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],L=R&&n.toggleActions.split(" "),j="markers"in n?n.markers:$u.markers,Q=z?0:parseFloat(Mi(D)["border"+N.p2+zo])||0,P=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ce=Mw(D,z,N),Be=bw(D,z),Ge=0,Ye=0,$=0,ee=_r(D,N),re,De,Fe,Ce,lt,Se,Ve,$e,Ue,W,F,pt,et,ke,ve,C,v,O,J,K,Y,_e,oe,Re,ye,ne,se,Me,we,de,He,I,ae,ie,fe,te,Z,be,Ne;if(P._startClamp=P._endClamp=!1,P._dir=N,p*=45,P.scroller=D,P.scroll=T?T.time.bind(T):ee,Ce=ee(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(f0=1,n.refreshPriority===-9999&&(ll=P)),B.tweenScroll=B.tweenScroll||{top:c0(D,Zt),left:c0(D,En)},P.tweenTo=re=B.tweenScroll[N.p],P.scrubDuration=function(me){ae=el(me)&&me,ae?I?I.duration(me):I=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return m&&m(P)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),de=0,l||(l=i.vars.id)),M&&((!Os(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in xt.style&&Ee.set(z?[xt,di]:D,{scrollBehavior:"auto"}),nt.forEach(function(me){return Pn(me)&&me.target===(z?Et.scrollingElement||di:D)&&(me.smooth=!1)}),Fe=Pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?ww(i):M.snapTo==="labelsDirectional"?Aw(i):M.directional!==!1?function(me,We){return hp(M.snapTo)(me,Rn()-Ye<500?0:We.direction)}:Ee.utils.snap(M.snapTo),ie=M.duration||{min:.1,max:2},ie=Os(ie)?nl(ie.min,ie.max):nl(ie,ie),fe=Ee.delayedCall(M.delay||ae/2||.1,function(){var me=ee(),We=Rn()-Ye<500,Oe=re.tween;if((We||Math.abs(P.getVelocity())<10)&&!Oe&&!lh&&Ge!==me){var qe=(me-Se)/ke,Ht=i&&!R?i.totalProgress():qe,Ze=We?0:(Ht-He)/(Rn()-Ka)*1e3||0,Ct=Ee.utils.clamp(-qe,1-qe,No(Ze/2)*Ze/.185),Jt=qe+(M.inertia===!1?0:Ct),Rt,vt,mt=M,_n=mt.onStart,Tt=mt.onInterrupt,xn=mt.onComplete;if(Rt=Fe(Jt,P),el(Rt)||(Rt=Jt),vt=Math.max(0,Math.round(Se+Rt*ke)),me<=Ve&&me>=Se&&vt!==me){if(Oe&&!Oe._initted&&Oe.data<=No(vt-me))return;M.inertia===!1&&(Ct=Rt-qe),re(vt,{duration:ie(No(Math.max(No(Jt-Ht),No(Rt-Ht))*.185/Ze/.05||0)),ease:M.ease||"power3",data:No(vt-me),onInterrupt:function(){return fe.restart(!0)&&Tt&&Tt(P)},onComplete:function(){P.update(),Ge=ee(),i&&!R&&(I?I.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),de=He=i&&!R?i.totalProgress():P.progress,y&&y(P),xn&&xn(P)}},me,Ct*ke,vt-me-Ct*ke),_n&&_n(P,re.tween)}}else P.isActive&&Ge!==me&&fe.restart(!0)}).pause()),l&&(np[l]=P),h=P.trigger=Bn(h||d!==!0&&d),Ne=h&&h._gsap&&h._gsap.stRevert,Ne&&(Ne=Ne(P)),d=d===!0?h:Bn(d),hi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===yi||(g=!g&&d.parentNode&&d.parentNode.style&&Mi(d.parentNode).display==="flex"?!1:$t),P.pin=d,De=Ee.core.getCache(d),De.spacer?ve=De.pinState:(E&&(E=Bn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),De.spacerIsNative=!!E,E&&(De.spacerState=Ku(E))),De.spacer=O=E||Et.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),De.pinState=ve=Ku(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),P.spacer=O=De.spacer,we=Mi(d),Re=we[g+N.os2],K=Ee.getProperty(d),Y=Ee.quickSetter(d,N.a,nn),Jf(d,O,we),v=Ku(d)),j){pt=Os(j)?n0(j,i0):i0,W=Ju("scroller-start",l,D,N,pt,0),F=Ju("scroller-end",l,D,N,pt,0,W),J=W["offset"+N.op.d2];var ut=Bn(xr(D,"content")||D);$e=this.markerStart=Ju("start",l,ut,N,pt,J,0,T),Ue=this.markerEnd=Ju("end",l,ut,N,pt,J,0,T),T&&(be=Ee.quickSetter([$e,Ue],N.a,nn)),!V&&!(Fi.length&&xr(D,"fixedMarkers")===!0)&&(Sw(z?xt:D),Ee.set([W,F],{force3D:!0}),ne=Ee.quickSetter(W,N.a,nn),Me=Ee.quickSetter(F,N.a,nn))}if(T){var xe=T.vars.onUpdate,Pe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),xe&&xe.apply(T,Pe||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(me,We){if(!We)return P.kill(!0);var Oe=me!==!1||!P.enabled,qe=Cn;Oe!==P.isReverted&&(Oe&&(te=Math.max(ee(),P.scroll.rec||0),$=P.progress,Z=i&&i.progress()),$e&&[$e,Ue,W,F].forEach(function(Ht){return Ht.style.display=Oe?"none":"block"}),Oe&&(Cn=P,P.update(Oe)),d&&(!A||!P.isActive)&&(Oe?Cw(d,O,ve):Jf(d,O,Mi(d),ye)),Oe||P.update(Oe),Cn=qe,P.isReverted=Oe)},P.refresh=function(me,We,Oe,qe){if(!((Cn||!P.enabled)&&!We)){if(d&&me&&bi){cn(r,"scrollEnd",w0);return}!zn&&le&&le(P),Cn=P,re.tween&&!Oe&&(re.tween.kill(),re.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ae){return Ae.vars.immediateRender&&Ae.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ht=ce(),Ze=Be(),Ct=T?T.duration():ji(D,N),Jt=ke<=.01||!ke,Rt=0,vt=qe||0,mt=Os(Oe)?Oe.end:n.end,_n=n.endTrigger||h,Tt=Os(Oe)?Oe.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),xn=P.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,P),fi=h&&Math.max(0,it.indexOf(P))||0,Kt=fi,jt,rn,Qi,Ws,S,U,X,H,G,ue,pe,he,Te;for(j&&Os(Oe)&&(he=Ee.getProperty(W,N.p),Te=Ee.getProperty(F,N.p));Kt-- >0;)U=it[Kt],U.end||U.refresh(0,1)||(Cn=P),X=U.pin,X&&(X===h||X===d||X===xn)&&!U.isReverted&&(ue||(ue=[]),ue.unshift(U),U.revert(!0,!0)),U!==it[Kt]&&(fi--,Kt--);for(Pn(Tt)&&(Tt=Tt(P)),Tt=j_(Tt,"start",P),Se=a0(Tt,h,Ht,N,ee(),$e,W,P,Ze,Q,V,Ct,T,P._startClamp&&"_startClamp")||(d?-.001:0),Pn(mt)&&(mt=mt(P)),hi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(hi(Tt)?Tt.split(" ")[0]:"")+mt:(Rt=eh(mt.substr(2),Ht),mt=hi(Tt)?Tt:(T?Ee.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Se):Se)+Rt,_n=h)),mt=j_(mt,"end",P),Ve=Math.max(Se,a0(mt||(_n?"100% 0":Ct),_n,Ht,N,ee()+Rt,Ue,F,P,Ze,Q,V,Ct,T,P._endClamp&&"_endClamp"))||-.001,Rt=0,Kt=fi;Kt--;)U=it[Kt]||{},X=U.pin,X&&U.start-U._pinPush<=Se&&!T&&U.end>0&&(jt=U.end-(P._startClamp?Math.max(0,U.start):U.start),(X===h&&U.start-U._pinPush<Se||X===xn)&&isNaN(Tt)&&(Rt+=jt*(1-U.progress)),X===d&&(vt+=jt));if(Se+=Rt,Ve+=Rt,P._startClamp&&(P._startClamp+=Rt),P._endClamp&&!zn&&(P._endClamp=Ve||-.001,Ve=Math.min(Ve,ji(D,N))),ke=Ve-Se||(Se-=.01)&&.001,Jt&&($=Ee.utils.clamp(0,1,Ee.utils.normalize(Se,Ve,te))),P._pinPush=vt,$e&&Rt&&(jt={},jt[N.a]="+="+Rt,xn&&(jt[N.p]="-="+ee()),Ee.set([$e,Ue],jt)),d&&!(tp&&P.end>=ji(D,N)))jt=Mi(d),Ws=N===Zt,Qi=ee(),_e=parseFloat(K(N.a))+vt,!Ct&&Ve>1&&(pe=(z?Et.scrollingElement||di:D).style,pe={style:pe,value:pe["overflow"+N.a.toUpperCase()]},z&&Mi(xt)["overflow"+N.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+N.a.toUpperCase()]="scroll")),Jf(d,O,jt),v=Ku(d),rn=vr(d,!0),H=V&&_r(D,Ws?En:Zt)(),g?(ye=[g+N.os2,ke+vt+nn],ye.t=O,Kt=g===$t?oh(d,N)+ke+vt:0,Kt&&(ye.push(N.d,Kt+nn),O.style.flexBasis!=="auto"&&(O.style.flexBasis=Kt+nn)),ko(ye),xn&&it.forEach(function(Ae){Ae.pin===xn&&Ae.vars.pinSpacing!==!1&&(Ae._subPinOffset=!0)}),V&&ee(te)):(Kt=oh(d,N),Kt&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=Kt+nn)),V&&(S={top:rn.top+(Ws?Qi-Se:H)+nn,left:rn.left+(Ws?H:Qi-Se)+nn,boxSizing:"border-box",position:"fixed"},S[Bs]=S["max"+zo]=Math.ceil(rn.width)+nn,S[Vs]=S["max"+up]=Math.ceil(rn.height)+nn,S[yi]=S[yi+ol]=S[yi+rl]=S[yi+al]=S[yi+sl]="0",S[$t]=jt[$t],S[$t+ol]=jt[$t+ol],S[$t+rl]=jt[$t+rl],S[$t+al]=jt[$t+al],S[$t+sl]=jt[$t+sl],C=Pw(ve,S,A),zn&&ee(0)),i?(G=i._initted,Xf(1),i.render(i.duration(),!0,!0),oe=K(N.a)-_e+ke+vt,se=Math.abs(ke-oe)>1,V&&se&&C.splice(C.length-2,2),i.render(0,!0,!0),G||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Xf(0)):oe=ke,pe&&(pe.value?pe.style["overflow"+N.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+N.a));else if(h&&ee()&&!T)for(rn=h.parentNode;rn&&rn!==xt;)rn._pinOffset&&(Se-=rn._pinOffset,Ve-=rn._pinOffset),rn=rn.parentNode;ue&&ue.forEach(function(Ae){return Ae.revert(!1,!0)}),P.start=Se,P.end=Ve,Ce=lt=zn?te:ee(),!T&&!zn&&(Ce<te&&ee(te),P.scroll.rec=0),P.revert(!1,!0),Ye=Rn(),fe&&(Ge=-1,fe.restart(!0)),Cn=0,i&&R&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),(Jt||$!==P.progress||T||_||i&&!i._initted)&&(i&&!R&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Se<-.001&&!$?Ee.utils.normalize(Se,Ve,0):$,!0),P.progress=Jt||(Ce-Se)/ke===$?0:$),d&&g&&(O._pinOffset=Math.round(P.progress*oe)),I&&I.invalidate(),isNaN(he)||(he-=Ee.getProperty(W,N.p),Te-=Ee.getProperty(F,N.p),ju(W,N,he),ju($e,N,he-(qe||0)),ju(F,N,Te),ju(Ue,N,Te-(qe||0))),Jt&&!zn&&P.update(),u&&!zn&&!et&&(et=!0,u(P),et=!1)}},P.getVelocity=function(){return(ee()-lt)/(Rn()-Ka)*1e3||0},P.endAnimation=function(){Ja(P.callbackAnimation),i&&(I?I.progress(1):i.paused()?R||Ja(i,P.direction<0,1):Ja(i,i.reversed()))},P.labelToScroll=function(me){return i&&i.labels&&(Se||P.refresh()||Se)+i.labels[me]/i.duration()*ke||0},P.getTrailing=function(me){var We=it.indexOf(P),Oe=P.direction>0?it.slice(0,We).reverse():it.slice(We+1);return(hi(me)?Oe.filter(function(qe){return qe.vars.preventOverlaps===me}):Oe).filter(function(qe){return P.direction>0?qe.end<=Se:qe.start>=Ve})},P.update=function(me,We,Oe){if(!(T&&!Oe&&!me)){var qe=zn===!0?te:P.scroll(),Ht=me?0:(qe-Se)/ke,Ze=Ht<0?0:Ht>1?1:Ht||0,Ct=P.progress,Jt,Rt,vt,mt,_n,Tt,xn,fi;if(We&&(lt=Ce,Ce=T?ee():qe,M&&(He=de,de=i&&!R?i.totalProgress():Ze)),p&&d&&!Cn&&!Xu&&bi&&(!Ze&&Se<qe+(qe-lt)/(Rn()-Ka)*p?Ze=1e-4:Ze===1&&Ve>qe+(qe-lt)/(Rn()-Ka)*p&&(Ze=.9999)),Ze!==Ct&&P.enabled){if(Jt=P.isActive=!!Ze&&Ze<1,Rt=!!Ct&&Ct<1,Tt=Jt!==Rt,_n=Tt||!!Ze!=!!Ct,P.direction=Ze>Ct?1:-1,P.progress=Ze,_n&&!Cn&&(vt=Ze&&!Ct?0:Ze===1?1:Ct===1?2:3,R&&(mt=!Tt&&L[vt+1]!=="none"&&L[vt+1]||L[vt],fi=i&&(mt==="complete"||mt==="reset"||mt in i))),b&&(Tt||fi)&&(fi||f||!i)&&(Pn(b)?b(P):P.getTrailing(b).forEach(function(Qi){return Qi.endAnimation()})),R||(I&&!Cn&&!Xu?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Ze,i._tTime/i._tDur):(I.vars.totalProgress=Ze,I.invalidate().restart())):i&&i.totalProgress(Ze,!!(Cn&&(Ye||me)))),d){if(me&&g&&(O.style[g+N.os2]=Re),!V)Y(Qa(_e+oe*Ze));else if(_n){if(xn=!me&&Ze>Ct&&Ve+1>qe&&qe+1>=ji(D,N),A)if(!me&&(Jt||xn)){var Kt=vr(d,!0),jt=qe-Se;l0(d,xt,Kt.top+(N===Zt?jt:0)+nn,Kt.left+(N===Zt?0:jt)+nn)}else l0(d,O);ko(Jt||xn?C:v),se&&Ze<1&&Jt||Y(_e+(Ze===1&&!xn?oe:0))}}M&&!re.tween&&!Cn&&!Xu&&fe.restart(!0),a&&(Tt||w&&Ze&&(Ze<1||!qf))&&cl(a.targets).forEach(function(Qi){return Qi.classList[Jt||w?"add":"remove"](a.className)}),o&&!R&&!me&&o(P),_n&&!Cn?(R&&(fi&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(P)),(Tt||!qf)&&(c&&Tt&&Zf(P,c),k[vt]&&Zf(P,k[vt]),w&&(Ze===1?P.kill(!1,1):k[vt]=0),Tt||(vt=Ze===1?1:3,k[vt]&&Zf(P,k[vt]))),x&&!Jt&&Math.abs(P.getVelocity())>(el(x)?x:2500)&&(Ja(P.callbackAnimation),I?I.progress(1):Ja(i,mt==="reverse"?1:!Ze,1))):R&&o&&!Cn&&o(P)}if(Me){var rn=T?qe/T.duration()*(T._caScrollDist||0):qe;ne(rn+(W._isFlipped?1:0)),Me(rn)}be&&be(-qe/T.duration()*(T._caScrollDist||0))}},P.enable=function(me,We){P.enabled||(P.enabled=!0,cn(D,"resize",tl),z||cn(D,"scroll",Oo),le&&cn(r,"refreshInit",le),me!==!1&&(P.progress=$=0,Ce=lt=Ge=ee()),We!==!1&&P.refresh())},P.getTween=function(me){return me&&re?re.tween:I},P.setPositions=function(me,We,Oe,qe){if(T){var Ht=T.scrollTrigger,Ze=T.duration(),Ct=Ht.end-Ht.start;me=Ht.start+Ct*me/Ze,We=Ht.start+Ct*We/Ze}P.refresh(!1,!1,{start:Q_(me,Oe&&!!P._startClamp),end:Q_(We,Oe&&!!P._endClamp)},qe),P.update()},P.adjustPinSpacing=function(me){if(ye&&me){var We=ye.indexOf(N.d)+1;ye[We]=parseFloat(ye[We])+me+nn,ye[1]=parseFloat(ye[1])+me+nn,ko(ye)}},P.disable=function(me,We){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,We||I&&I.pause(),te=0,De&&(De.uncache=1),le&&ln(r,"refreshInit",le),fe&&(fe.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!z)){for(var Oe=it.length;Oe--;)if(it[Oe].scroller===D&&it[Oe]!==P)return;ln(D,"resize",tl),z||ln(D,"scroll",Oo)}},P.kill=function(me,We){P.disable(me,We),I&&!We&&I.kill(),l&&delete np[l];var Oe=it.indexOf(P);Oe>=0&&it.splice(Oe,1),Oe===kn&&nh>0&&kn--,Oe=0,it.forEach(function(qe){return qe.scroller===P.scroller&&(Oe=1)}),Oe||zn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),We||i.kill()),$e&&[$e,Ue,W,F].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),ll===P&&(ll=0),d&&(De&&(De.uncache=1),Oe=0,it.forEach(function(qe){return qe.pin===d&&Oe++}),Oe||(De.spacer=0)),n.onKill&&n.onKill(P)},it.push(P),P.enable(!1,!1),Ne&&Ne(P),i&&i.add&&!ke){var je=P.update;P.update=function(){P.update=je,nt.cache++,Se||Ve||P.refresh()},Ee.delayedCall(.01,P.update),ke=.01,Se=Ve=0}else P.refresh();d&&Ew()},r.register=function(n){return Uo||(Ee=n||x0(),_0()&&window.document&&r.enable(),Uo=ja),Uo},r.defaults=function(n){if(n)for(var i in n)$u[i]=n[i];return $u},r.disable=function(n,i){ja=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(rt,"wheel",Oo),ln(Et,"scroll",Oo),clearInterval(Wu),ln(Et,"touchcancel",Ki),ln(xt,"touchstart",Ki),Yu(ln,Et,"pointerdown,touchstart,mousedown",e0),Yu(ln,Et,"pointerup,touchend,mouseup",t0),sh.kill(),qu(ln);for(var s=0;s<nt.length;s+=3)Zu(ln,nt[s],nt[s+1]),Zu(ln,nt[s],nt[s+2])},r.enable=function(){if(rt=window,Et=document,di=Et.documentElement,xt=Et.body,Ee&&(cl=Ee.utils.toArray,nl=Ee.utils.clamp,ep=Ee.core.context||Ki,Xf=Ee.core.suppressOverwrites||Ki,op=rt.history.scrollRestoration||"auto",ip=rt.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),xt)){ja=1,Vo=document.createElement("div"),Vo.style.height="100vh",Vo.style.position="absolute",C0(),yw(),Gt.register(Ee),r.isTouch=Gt.isTouch,ts=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Qf=Gt.isTouch===1,cn(rt,"wheel",Oo),sp=[rt,Et,di,xt],Ee.matchMedia?(r.matchMedia=function(c){var u=Ee.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ee.addEventListener("matchMediaInit",function(){T0(),dp()}),Ee.addEventListener("matchMediaRevert",function(){return A0()}),Ee.addEventListener("matchMedia",function(){Us(0,1),Hs("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return $f(),$f})):console.warn("Requires GSAP 3.11.0 or later"),$f(),cn(Et,"scroll",Oo);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=vr(xt),Zt.m=Math.round(a.top+Zt.sc())||0,En.m=Math.round(a.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Wu=setInterval(r0,250),Ee.delayedCall(.5,function(){return Xu=0}),cn(Et,"touchcancel",Ki),cn(xt,"touchstart",Ki),Yu(cn,Et,"pointerdown,touchstart,mousedown",e0),Yu(cn,Et,"pointerup,touchend,mouseup",t0),jf=Ee.utils.checkPrefix("transform"),ih.push(jf),Uo=Rn(),sh=Ee.delayedCall(.2,Us).pause(),Bo=[Et,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;Et.hidden?(J_=c,K_=u):(J_!==c||K_!==u)&&tl()},Et,"DOMContentLoaded",Us,rt,"load",Us,rt,"resize",tl],qu(cn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)Zu(ln,nt[l],nt[l+1]),Zu(ln,nt[l],nt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(qf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wu)||(Wu=i)&&setInterval(r0,i),"ignoreMobileResize"in n&&(Qf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qu(ln)||qu(cn,n.autoRefreshEvents||"none"),p0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Bn(n),o=nt.indexOf(s),a=zs(s);~o&&nt.splice(o,a?6:2),i&&(a?Fi.unshift(rt,i,xt,i,di,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(hi(n)?Bn(n):n).getBoundingClientRect(),a=o[s?Bs:Vs]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=Bn(n));var o=n.getBoundingClientRect(),a=o[s?Bs:Vs],l=i==null?a/2:i in ah?ah[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Gs.killAll||[];Gs={},i.forEach(function(s){return s()})}},r})();st.version="3.14.2";st.saveStyles=function(r){return r?cl(r).forEach(function(e){if(e&&e.style){var t=ui.indexOf(e);t>=0&&ui.splice(t,5),ui.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),ep())}}):ui};st.revert=function(r,e){return dp(!r,e)};st.create=function(r,e){return new st(r,e)};st.refresh=function(r){return r?tl(!0):(Uo||st.register())&&Us(!0)};st.update=function(r){return++nt.cache&&yr(r===!0?2:0)};st.clearScrollMemory=E0;st.maxScroll=function(r,e){return ji(r,e?En:Zt)};st.getScrollFunc=function(r,e){return _r(Bn(r),e?En:Zt)};st.getById=function(r){return np[r]};st.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!bi};st.snapDirectional=hp;st.addEventListener=function(r,e){var t=Gs[r]||(Gs[r]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(r,e){var t=Gs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ee.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),cn(st,"refresh",function(){return s=e.batchMax()})),cl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(st.create(c))}),t};var u0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Kf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===di&&r(xt,t)},Qu={auto:1,scroll:1},Dw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Qu[(l=Mi(s)).overflowY]||Qu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!zs(s)&&(Qu[(l=Mi(s)).overflowY]||Qu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},P0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Dw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(Et,Gt.eventTypes[0],d0,!1,!0)},onDisable:function(){return ln(Et,Gt.eventTypes[0],d0,!0)}})},Fw=/(input|label|select|textarea)/i,h0,d0=function(e){var t=Fw.test(e.target.tagName);(t||h0)&&(e._gsapAllow=!0,h0=t)},Lw=function(e){Os(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Bn(e.target)||di,u=Ee.core.globals().ScrollSmoother,f=u&&u.get(),h=ts&&(e.content&&Bn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=_r(c,Zt),g=_r(c,En),_=1,p=(Gt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,m=0,y=Pn(i)?function(){return i(a)}:function(){return i||2.8},w,M,A=P0(c,e.type,!0,s),E=function(){return M=!1},T=Ki,x=Ki,b=function(){l=ji(c,Zt),x=nl(ts?1:0,l),n&&(T=nl(0,ji(c,En))),w=ks},N=function(){h._gsap.y=Qa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(M){requestAnimationFrame(E);var j=Qa(a.deltaY/2),Q=x(d.v-j);if(h&&Q!==d.v+d.offset){d.offset=Q-d.v;var P=Qa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=nt.cache,yr()}return!0}d.offset&&N(),M=!0},D,B,z,V,k=function(){b(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Ee.set(h,{y:"+=0"}),e.ignoreCheck=function(L){return ts&&L.type==="touchmove"&&R(L)||_>1.05&&L.type!=="touchstart"||a.isGesturing||L.touches&&L.touches.length>1},e.onPress=function(){M=!1;var L=_;_=Qa((rt.visualViewport&&rt.visualViewport.scale||1)/p),D.pause(),L!==_&&Kf(c,_>1.01?!0:n?!1:"x"),B=g(),z=d(),b(),w=ks},e.onRelease=e.onGestureStart=function(L,j){if(d.offset&&N(),!j)V.restart(!0);else{nt.cache++;var Q=y(),P,le;n&&(P=g(),le=P+Q*.05*-L.velocityX/.227,Q*=u0(g,P,le,ji(c,En)),D.vars.scrollX=T(le)),P=d(),le=P+Q*.05*-L.velocityY/.227,Q*=u0(d,P,le,ji(c,Zt)),D.vars.scrollY=x(le),D.invalidate().duration(Q).play(.01),(ts&&D.vars.scrollY>=l||P>=l-1)&&Ee.to({},{onUpdate:k,duration:Q})}o&&o(L)},e.onWheel=function(){D._ts&&D.pause(),Rn()-m>1e3&&(w=0,m=Rn())},e.onChange=function(L,j,Q,P,le){if(ks!==w&&b(),j&&n&&g(T(P[2]===j?B+(L.startX-L.x):g()+j-P[1])),Q){d.offset&&N();var ce=le[2]===Q,Be=ce?z+L.startY-L.y:d()+Q-le[1],Ge=x(Be);ce&&Be!==Ge&&(z+=Ge-Be),d(Ge)}(Q||j)&&yr()},e.onEnable=function(){Kf(c,n?!1:"x"),st.addEventListener("refresh",k),cn(rt,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Kf(c,!0),ln(rt,"resize",k),st.removeEventListener("refresh",k),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=ts,ts&&!d()&&d(1),ts&&Ee.ticker.add(Ki),V=a._dc,D=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:R0(d,d(),function(){return D.pause()})},onUpdate:yr,onComplete:V.vars.onComplete}),a};st.sort=function(r){if(Pn(r))return it.sort(r);var e=rt.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(r){return new Gt(r)};st.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var e=r instanceof Gt?r:Lw(r);return Vn&&Vn.target===e.target&&Vn.kill(),zs(e.target)&&(Vn=e),e};st.core={_getVelocityProp:Hu,_inputObserver:P0,_scrollers:nt,_proxies:Fi,bridge:{ss:function(){bi||Hs("scrollStart"),bi=Rn()},ref:function(){return Cn}}};x0()&&Ee.registerPlugin(st);Xa.registerPlugin(st);var ch=class r{constructor(e){this.el=e}blobs;navLinks;color={RGBA:{r:100,g:100,b:100,a:255,fullColor:"rgb(100,100,100,255)"},HEX:"#646464FF"};scroll(e){document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}ngAfterViewInit(){this.blobs=Array.from(this.el.nativeElement.querySelectorAll(".blob")),this.navLinks=Array.from(this.el.nativeElement.querySelectorAll(".nav-link")),this.blobs.forEach((e,t)=>{Xa.to(e,{x:(Math.random()-.5)*300,y:(Math.random()-.5)*300,duration:5+t*2,repeat:-1,yoyo:!0,ease:"sine.inOut"})}),window.addEventListener("mousemove",e=>{let n=(e.clientX/window.innerWidth-.5)*2*80,i=(e.clientY/window.innerHeight-.5)*2*80;Xa.to(this.blobs,{x:n,y:i,duration:1,ease:"power2.out"})}),this.navLinks.forEach(e=>{e.addEventListener("click",()=>{let t=[{transform:"translateY(0)"},{transform:"translateY(-15px)"},{transform:"translateY(-13px)"},{transform:"translateY(0)"}],n={duration:500,iterations:1};e.animate(t,n)})})}onColor(e){this.color=e,this.scroll("result-section")}static \u0275fac=function(t){return new(t||r)(Ut(Wo))};static \u0275cmp=Ys({type:r,selectors:[["app-generator-page"]],decls:30,vars:13,consts:[[1,"page-wrapper"],[1,"background"],[1,"blob","blob1"],[1,"blob","blob2"],[1,"blob","blob3"],[1,"blob","blob4"],[1,"blob","blob5"],[1,"blob","blob10"],[1,"blob","blob6"],[1,"blob","blob7"],[1,"blob","blob8"],[1,"blob","blob9"],[1,"blob","blob11"],[1,"blob","blob12"],[1,"main","text-white","d-flex","flex-column","align-items-center"],[1,"position-fixed","d-flex","justify-content-center","p-3","top-0","end-0"],[1,"d-flex","justify-content-around","align-items-center"],[1,"nav-link",3,"click"],["id","home-section",1,"vh-100","d-flex","align-items-center","justify-content-center"],["id","form-section",1,"vh-100","d-flex","align-items-center","justify-content-center"],[1,"vw-100","vh-100",3,"color"],["id","result-section",1,"vh-100","d-flex","align-items-center","justify-content-center"],[3,"color"]],template:function(t,n){t&1&&(dt(0,"div",0)(1,"div",1),Ni(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"div",13),gt(),dt(14,"div",14)(15,"nav",15)(16,"div",16)(17,"a",17),In("click",function(){return n.scroll("home-section")}),It(18,"Home"),gt(),dt(19,"a",17),In("click",function(){return n.scroll("form-section")}),It(20,"Generator"),gt(),dt(21,"a",17),In("click",function(){return n.scroll("result-section")}),It(22,"Your color"),gt()()(),dt(23,"header",18)(24,"h1"),It(25,"Welcome to color generator!!!"),gt()(),dt(26,"main",19)(27,"app-generator-form",20),In("color",function(s){return n.onColor(s)}),gt()(),dt(28,"footer",21),Ni(29,"app-generator-result",22),gt()()()),t&2&&(Pt(8),yn("background",n.color.HEX),Pt(),yn("background",n.color.HEX),Pt(),yn("background",n.color.HEX),Pt(),yn("background",n.color.HEX),Pt(),yn("background",n.color.HEX),Pt(),yn("background",n.color.HEX),Pt(16),ss("color",n.color))},dependencies:[Al,Mu],styles:[".nav-link[_ngcontent-%COMP%]{cursor:pointer;margin:8px;transition:all .2s ease-in-out;padding:8px;border-radius:24px;border:1px solid transparent}.nav-link[_ngcontent-%COMP%]:hover{transform:scale(1.05) translateY(-4px);background:#ffffff36;border:solid 1px rgba(255,255,255,.63)}h1[_ngcontent-%COMP%]{font-size:4vw;font-weight:700;background:-webkit-linear-gradient(135deg,rgb(0,228,209),rgb(191,63,255),rgb(255,213,0));-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding:8px;transition:.2s ease-in-out;animation:_ngcontent-%COMP%_load-title 1.5s linear}body[_ngcontent-%COMP%]{background:#222;display:flex;justify-content:center;align-items:center;height:100vh}.main[_ngcontent-%COMP%]{background:#000;background-image:radial-gradient(circle,rgba(198,198,198,.18) 40%,transparent 41%);background-size:3px 3px}nav[_ngcontent-%COMP%]{position:relative;z-index:99;transition:.2s ease-in-out;animation:load-item .4s linear;overflow:hidden}.blob[_ngcontent-%COMP%]{background:#fff;width:230px;height:170px;position:absolute;filter:blur(100px);opacity:.6;border-radius:50%}.blob1[_ngcontent-%COMP%]{width:300px;height:300px;background:#f0c;top:26%;left:8%}.blob2[_ngcontent-%COMP%]{width:400px;height:400px;background:#0ff;top:42%;left:67%}.blob3[_ngcontent-%COMP%]{width:500px;height:250px;background:#fa0;top:100%;left:22%}.blob4[_ngcontent-%COMP%]{width:350px;height:350px;background:#60f;top:155%;left:8%;border-radius:40% 60% 70% 30%/30% 30% 70% 70%}.blob5[_ngcontent-%COMP%]{width:350px;height:350px;background:#5f0;top:120%;left:75%;border-radius:40% 60% 70% 30%/30% 30% 70% 70%}.blob10[_ngcontent-%COMP%]{width:250px;height:250px;background:#7300ff;top:3%;left:45%;border-radius:40% 60% 70% 30%/30% 30% 70% 70%}.blob6[_ngcontent-%COMP%]{top:220%;left:34%}.blob7[_ngcontent-%COMP%]{top:215%;left:75%}.blob8[_ngcontent-%COMP%]{top:270%;left:17%}.blob9[_ngcontent-%COMP%]{top:275%;left:82%}.blob11[_ngcontent-%COMP%]{top:210%;left:12%}.blob12[_ngcontent-%COMP%]{top:285%;left:52%}@keyframes _ngcontent-%COMP%_load-title{0%{opacity:0;filter:blur(10px);text-shadow:red -2px 0,cyan -2px 0}20%{opacity:0;filter:blur(10px)}30%{opacity:1;filter:blur(0px)}35%{opacity:0;filter:blur(10px);text-shadow:red -2px 0,cyan -2px 0}65%{opacity:1;filter:blur(0px)}85%{opacity:1;filter:blur(0px)}to{opacity:0;filter:blur(10px)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})};var PR=[{path:"generator",component:ch},{path:"",redirectTo:"/generator",pathMatch:"full"}];export{PR as GENERATOR_ROUTES};
