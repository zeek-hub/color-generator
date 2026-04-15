import{$ as Yo,$a as Op,Aa as Lp,Da as os,E as bl,Ea as qe,Fa as Je,G as qo,Ga as pn,H as Ip,Ha as Yt,I as Mh,Ia as Np,Ja as $o,K as rs,Ka as Jo,La as tn,Ma as Ko,Na as ht,Oa as wr,Pa as jo,Qa as Qo,R as Dp,Sa as Er,Ta as ea,Va as ta,W as ss,Xa as Ah,a as qt,aa as bh,b as Hn,ba as Sl,ca as Zo,f as Tp,i as Cp,ja as Fp,ka as ft,n as Rp,pa as Sh,qa as Ft,s as Pp,ua as Zs,va as wh,wa as Ei,xa as tr,ya as Eh}from"./chunk-VEXOKK3B.js";var Xp=(()=>{class r{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||r)(Ft(Sh),Ft(Zo))};static \u0275dir=Ei({type:r})}return r})(),qp=(()=>{class r extends Xp{static \u0275fac=(()=>{let t;return function(i){return(t||(t=Sl(r)))(i||r)}})();static \u0275dir=Ei({type:r,features:[tr]})}return r})(),Dh=new rs("");var Q0={provide:Dh,useExisting:qo(()=>Fl),multi:!0};function ex(){let r=Ah()?Ah().getUserAgent():"";return/android (\d+)/.test(r.toLowerCase())}var tx=new rs(""),Fl=(()=>{class r extends Xp{_compositionMode;_composing=!1;constructor(t,n,i){super(t,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!ex())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||r)(Ft(Sh),Ft(Zo),Ft(tx,8))};static \u0275dir=Ei({type:r,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&Yt("input",function(o){return i._handleInput(o.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[Qo([Q0]),tr]})}return r})();function Fh(r){return r==null||Lh(r)===0}function Lh(r){return r==null?null:Array.isArray(r)||typeof r=="string"?r.length:r instanceof Set?r.size:null}var Yp=new rs(""),Zp=new rs(""),nx=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Fn=class{static min(e){return ix(e)}static max(e){return rx(e)}static required(e){return sx(e)}static requiredTrue(e){return ox(e)}static email(e){return ax(e)}static minLength(e){return lx(e)}static maxLength(e){return cx(e)}static pattern(e){return ux(e)}static nullValidator(e){return $p()}static compose(e){return tm(e)}static composeAsync(e){return im(e)}};function ix(r){return e=>{if(e.value==null||r==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<r?{min:{min:r,actual:e.value}}:null}}function rx(r){return e=>{if(e.value==null||r==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>r?{max:{max:r,actual:e.value}}:null}}function sx(r){return Fh(r.value)?{required:!0}:null}function ox(r){return r.value===!0?null:{required:!0}}function ax(r){return Fh(r.value)||nx.test(r.value)?null:{email:!0}}function lx(r){return e=>{let t=e.value?.length??Lh(e.value);return t===null||t===0?null:t<r?{minlength:{requiredLength:r,actualLength:t}}:null}}function cx(r){return e=>{let t=e.value?.length??Lh(e.value);return t!==null&&t>r?{maxlength:{requiredLength:r,actualLength:t}}:null}}function ux(r){if(!r)return $p;let e,t;return typeof r=="string"?(t="",r.charAt(0)!=="^"&&(t+="^"),t+=r,r.charAt(r.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=r.toString(),e=r),n=>{if(Fh(n.value))return null;let i=n.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function $p(r){return null}function Jp(r){return r!=null}function Kp(r){return Lp(r)?Cp(r):r}function jp(r){let e={};return r.forEach(t=>{e=t!=null?qt(qt({},e),t):e}),Object.keys(e).length===0?null:e}function Qp(r,e){return e.map(t=>t(r))}function hx(r){return!r.validate}function em(r){return r.map(e=>hx(e)?e:t=>e.validate(t))}function tm(r){if(!r)return null;let e=r.filter(Jp);return e.length==0?null:function(t){return jp(Qp(t,e))}}function nm(r){return r!=null?tm(em(r)):null}function im(r){if(!r)return null;let e=r.filter(Jp);return e.length==0?null:function(t){let n=Qp(t,e).map(Kp);return Pp(n).pipe(Rp(jp))}}function rm(r){return r!=null?im(em(r)):null}function Up(r,e){return r===null?[e]:Array.isArray(r)?[...r,e]:[r,e]}function sm(r){return r._rawValidators}function om(r){return r._rawAsyncValidators}function Th(r){return r?Array.isArray(r)?r:[r]:[]}function Al(r,e){return Array.isArray(r)?r.includes(e):r===e}function Bp(r,e){let t=Th(e);return Th(r).forEach(i=>{Al(t,i)||t.push(i)}),t}function Vp(r,e){return Th(e).filter(t=>!Al(r,t))}var Tl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=nm(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=rm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Ks=class extends Tl{name;get formDirective(){return null}get path(){return null}},oa=class extends Tl{_parent=null;name=null;valueAccessor=null},Cl=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var am=(()=>{class r extends Cl{constructor(t){super(t)}static \u0275fac=function(n){return new(n||r)(Ft(oa,2))};static \u0275dir=Ei({type:r,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&Ko("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[tr]})}return r})(),lm=(()=>{class r extends Cl{constructor(t){super(t)}static \u0275fac=function(n){return new(n||r)(Ft(Ks,10))};static \u0275dir=Ei({type:r,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&Ko("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[tr]})}return r})();var na="VALID",wl="INVALID",$s="PENDING",ia="DISABLED",Ar=class{},Rl=class extends Ar{value;source;constructor(e,t){super(),this.value=e,this.source=t}},ra=class extends Ar{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},sa=class extends Ar{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Js=class extends Ar{status;source;constructor(e,t){super(),this.status=e,this.source=t}},Ch=class extends Ar{source;constructor(e){super(),this.source=e}},aa=class extends Ar{source;constructor(e){super(),this.source=e}};function Nh(r){return(Ll(r)?r.validators:r)||null}function dx(r){return Array.isArray(r)?nm(r):r||null}function Oh(r,e){return(Ll(e)?e.asyncValidators:r)||null}function fx(r){return Array.isArray(r)?rm(r):r||null}function Ll(r){return r!=null&&!Array.isArray(r)&&typeof r=="object"}function cm(r,e,t){let n=r.controls;if(!(e?Object.keys(n):n).length)throw new bl(1e3,"");if(!n[t])throw new bl(1001,"")}function um(r,e,t){r._forEachChild((n,i)=>{if(t[i]===void 0)throw new bl(1002,"")})}var js=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Er(this.statusReactive)}set status(e){Er(()=>this.statusReactive.set(e))}_status=ea(()=>this.statusReactive());statusReactive=Yo(void 0);get valid(){return this.status===na}get invalid(){return this.status===wl}get pending(){return this.status===$s}get disabled(){return this.status===ia}get enabled(){return this.status!==ia}errors;get pristine(){return Er(this.pristineReactive)}set pristine(e){Er(()=>this.pristineReactive.set(e))}_pristine=ea(()=>this.pristineReactive());pristineReactive=Yo(!0);get dirty(){return!this.pristine}get touched(){return Er(this.touchedReactive)}set touched(e){Er(()=>this.touchedReactive.set(e))}_touched=ea(()=>this.touchedReactive());touchedReactive=Yo(!1);get untouched(){return!this.touched}_events=new Tp;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Bp(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Bp(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Vp(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Vp(e,this._rawAsyncValidators))}hasValidator(e){return Al(this._rawValidators,e)}hasAsyncValidator(e){return Al(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(Hn(qt({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new sa(!0,n))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),e.onlySelf||this._parent?._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new sa(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(Hn(qt({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new ra(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new ra(!0,n))}markAsPending(e={}){this.status=$s;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Js(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(Hn(qt({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ia,this.errors=null,this._forEachChild(i=>{i.disable(Hn(qt({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Rl(this.value,n)),this._events.next(new Js(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Hn(qt({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=na,this._forEachChild(n=>{n.enable(Hn(qt({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Hn(qt({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===na||this.status===$s)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Rl(this.value,t)),this._events.next(new Js(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(Hn(qt({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ia:na}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=$s,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let n=Kp(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,i)=>n&&n._find(i),this)}getError(e,t){let n=t?this.get(t):this;return n?.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new Js(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new ss,this.statusChanges=new ss}_calculateStatus(){return this._allControlsDisabled()?ia:this.errors?wl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($s)?$s:this._anyControlsHaveStatus(wl)?wl:na}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,e.onlySelf||this._parent?._updatePristine(e,t),i&&this._events.next(new ra(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new sa(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Ll(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=dx(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=fx(this._rawAsyncValidators)}},Pl=class extends js{constructor(e,t,n){super(Nh(t),Oh(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){um(this,!0,e),Object.keys(e).forEach(n=>{cm(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let i=this.controls[n];i&&i.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,i)=>{n.reset(e?e[i]:null,Hn(qt({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new aa(this))}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,i)=>((n.enabled||this.disabled)&&(t[i]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((i,s)=>{n=t(n,i,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Rh=class extends Pl{};var hm=new rs("",{factory:()=>Uh}),Uh="always";function px(r,e){return[...e.path,r]}function kp(r,e,t=Uh){Bh(r,e),e.valueAccessor.writeValue(r.value),(r.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(r.disabled),gx(r,e),xx(r,e),_x(r,e),mx(r,e)}function zp(r,e,t=!0){let n=()=>{};e?.valueAccessor?.registerOnChange(n),e?.valueAccessor?.registerOnTouched(n),Dl(r,e),r&&(e._invokeOnDestroyCallbacks(),r._registerOnCollectionChange(()=>{}))}function Il(r,e){r.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function mx(r,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};r.registerOnDisabledChange(t),e._registerOnDestroy(()=>{r._unregisterOnDisabledChange(t)})}}function Bh(r,e){let t=sm(r);e.validator!==null?r.setValidators(Up(t,e.validator)):typeof t=="function"&&r.setValidators([t]);let n=om(r);e.asyncValidator!==null?r.setAsyncValidators(Up(n,e.asyncValidator)):typeof n=="function"&&r.setAsyncValidators([n]);let i=()=>r.updateValueAndValidity();Il(e._rawValidators,i),Il(e._rawAsyncValidators,i)}function Dl(r,e){let t=!1;if(r!==null){if(e.validator!==null){let i=sm(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==e.validator);s.length!==i.length&&(t=!0,r.setValidators(s))}}if(e.asyncValidator!==null){let i=om(r);if(Array.isArray(i)&&i.length>0){let s=i.filter(o=>o!==e.asyncValidator);s.length!==i.length&&(t=!0,r.setAsyncValidators(s))}}}let n=()=>{};return Il(e._rawValidators,n),Il(e._rawAsyncValidators,n),t}function gx(r,e){e.valueAccessor.registerOnChange(t=>{r._pendingValue=t,r._pendingChange=!0,r._pendingDirty=!0,r.updateOn==="change"&&dm(r,e)})}function _x(r,e){e.valueAccessor.registerOnTouched(()=>{r._pendingTouched=!0,r.updateOn==="blur"&&r._pendingChange&&dm(r,e),r.updateOn!=="submit"&&r.markAsTouched()})}function dm(r,e){r._pendingDirty&&r.markAsDirty(),r.setValue(r._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1}function xx(r,e){let t=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n)};r.registerOnChange(t),e._registerOnDestroy(()=>{r._unregisterOnChange(t)})}function vx(r,e){r==null,Bh(r,e)}function yx(r,e){return Dl(r,e)}function Mx(r,e){if(!r.hasOwnProperty("model"))return!1;let t=r.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function bx(r){return Object.getPrototypeOf(r.constructor)===qp}function Sx(r,e){r._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function wx(r,e){if(!e)return null;Array.isArray(e);let t,n,i;return e.forEach(s=>{s.constructor===Fl?t=s:bx(s)?n=s:i=s}),i||n||t||null}function Ex(r,e){let t=r.indexOf(e);t>-1&&r.splice(t,1)}function Gp(r,e){let t=r.indexOf(e);t>-1&&r.splice(t,1)}function Hp(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===2&&"value"in r&&"disabled"in r}var El=class extends js{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(Nh(t),Oh(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ll(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Hp(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new aa(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Gp(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Gp(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Hp(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ax=r=>r instanceof El;var fm=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275dir=Ei({type:r,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return r})();var Tx={provide:Dh,useExisting:qo(()=>Vh),multi:!0},Vh=(()=>{class r extends qp{writeValue(t){this.setProperty("value",parseFloat(t))}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Sl(r)))(i||r)}})();static \u0275dir=Ei({type:r,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(n,i){n&1&&Yt("change",function(o){return i.onChange(o.target.value)})("input",function(o){return i.onChange(o.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[Qo([Tx]),tr]})}return r})(),Ph=class extends js{constructor(e,t,n){super(Nh(t),Oh(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){um(this,!1,e),e.forEach((n,i)=>{cm(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,i)=>{n.reset(e[i],Hn(qt({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new aa(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Cx=(()=>{class r extends Ks{callSetDisabledState;get submitted(){return Er(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=ea(()=>this._submittedReactive());_submittedReactive=Yo(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,n,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Dl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let n=this.form.get(t.path);return kp(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){zp(t.control||null,t,!1),Ex(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,n){this.form.get(t.path).setValue(n)}onReset(){this.resetForm()}resetForm(t=void 0,n={}){this.form.reset(t,n),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Sx(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Ch(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,i=this.form.get(t.path);n!==i&&(zp(n||null,t),Ax(i)&&(kp(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);vx(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let n=this.form?.get(t.path);n&&yx(n,t)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Bh(this.form,this),this._oldForm&&Dl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||r)(Ft(Yp,10),Ft(Zp,10),Ft(hm,8))};static \u0275dir=Ei({type:r,features:[tr,bh]})}return r})();var pm=new rs("");var Rx={provide:oa,useExisting:qo(()=>kh)},kh=(()=>{class r extends oa{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new ss;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,i,s,o){super(),this._ngModelWarningConfig=o,this._parent=t,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=wx(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Mx(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return px(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||r)(Ft(Ks,13),Ft(Yp,10),Ft(Zp,10),Ft(Dh,10),Ft(pm,8))};static \u0275dir=Ei({type:r,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Qo([Rx]),tr,bh]})}return r})();var Px={provide:Ks,useExisting:qo(()=>zh)},zh=(()=>{class r extends Cx{form=null;ngSubmit=new ss;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Sl(r)))(i||r)}})();static \u0275dir=Ei({type:r,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&Yt("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Qo([Px]),tr]})}return r})();var Ix=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=wh({type:r});static \u0275inj=Mh({})}return r})();function Wp(r){return!!r&&(r.asyncValidators!==void 0||r.validators!==void 0||r.updateOn!==void 0)}var mm=(()=>{class r{useNonNullable=!1;get nonNullable(){let t=new r;return t.useNonNullable=!0,t}group(t,n=null){let i=this._reduceControls(t),s={};return Wp(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new Pl(i,s)}record(t,n=null){let i=this._reduceControls(t);return new Rh(i,n)}control(t,n,i){let s={};return this.useNonNullable?(Wp(n)?s=n:(s.validators=n,s.asyncValidators=i),new El(t,Hn(qt({},s),{nonNullable:!0}))):new El(t,n,i)}array(t,n,i){let s=t.map(o=>this._createControl(o));return new Ph(s,n,i)}_reduceControls(t){let n={};return Object.keys(t).forEach(i=>{n[i]=this._createControl(t[i])}),n}_createControl(t){if(t instanceof El)return t;if(t instanceof js)return t;if(Array.isArray(t)){let n=t[0],i=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,i,s)}else return this.control(t)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=Ip({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var gm=(()=>{class r{static withConfig(t){return{ngModule:r,providers:[{provide:pm,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:hm,useValue:t.callSetDisabledState??Uh}]}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=wh({type:r});static \u0275inj=Mh({imports:[Ix]})}return r})();var la=class{static RGBAToHex(e,t,n,i){let s=o=>o<0||o>255?"00":Math.round(o).toString(16).padStart(2,"0");return`#${s(e)}${s(t)}${s(n)}${s(i)}`}};var Qs=class r{constructor(e){this.fb=e}color=new ss;colorForm;ngOnInit(){this.colorForm=this.fb.group({r:[100,[Fn.required,Fn.min(0),Fn.max(255)]],g:[100,[Fn.required,Fn.min(0),Fn.max(255)]],b:[100,[Fn.required,Fn.min(0),Fn.max(255)]],a:[255,[Fn.required,Fn.min(0),Fn.max(255)]]})}generateColor(){let e=this.getRandomColor();this.colorForm.patchValue({r:e.RGBA.r,g:e.RGBA.g,b:e.RGBA.b,a:e.RGBA.a,colorModel:e})}getRandomColor(){let e=Math.floor(Math.random()*255),t=Math.floor(Math.random()*255),n=Math.floor(Math.random()*255);return{RGBA:{r:e,g:t,b:n,a:255,fullColor:`rgb(${e},${t},${n},255)`},HEX:la.RGBAToHex(e,t,n,255)}}onSubmit(){this.sendColor()}sendColor(){this.color.emit(this.getColor())}getColor(){let e=this.colorForm.get("r")?.value,t=this.colorForm.get("g")?.value,n=this.colorForm.get("b")?.value,i=this.colorForm.get("a")?.value;return{RGBA:{r:e,g:t,b:n,a:i,fullColor:`rgb(${e},${t},${n},${i})`},HEX:la.RGBAToHex(e,t,n,i)}}static \u0275fac=function(t){return new(t||r)(Ft(mm))};static \u0275cmp=Zs({type:r,selectors:[["app-generator-form"]],outputs:{color:"color"},decls:33,vars:15,consts:[[1,"position-relative","w-100","h-100","d-flex","justify-content-center","align-items-center"],[1,"d-flex","flex-column","z-1","w-50",3,"formGroup"],[1,"d-flex"],[1,"input-color","input-red"],["type","range","min","0","max","255","formControlName","r",1,"form-range","red"],[1,"input-color","input-green"],["type","range","min","0","max","255","formControlName","g",1,"form-range","green"],[1,"input-color","input-blue"],["type","range","min","0","max","255","formControlName","b",1,"form-range","blue"],[1,"input-color","input-alpha"],["type","range","min","0","max","255","formControlName","a",1,"form-range","alpha"],[1,"d-flex","justify-content-end"],[1,"button","m-3","p-2","w-25","align-self-end",3,"click"]],template:function(t,n){t&1&&(qe(0,"div",0)(1,"form",1)(2,"div",2)(3,"label"),ht(4,"\u{1F534} Red ->"),Je(),qe(5,"p",3),ht(6),Je()(),pn(7,"input",4),qe(8,"div",2)(9,"label"),ht(10,"\u{1F7E2} Green ->"),Je(),qe(11,"p",5),ht(12),Je()(),pn(13,"input",6),qe(14,"div",2)(15,"label"),ht(16,"\u{1F535} Blue ->"),Je(),qe(17,"p",7),ht(18),Je()(),pn(19,"input",8),qe(20,"div",2)(21,"label"),ht(22,"\u{1F7E3} Alpha ->"),Je(),qe(23,"p",9),ht(24),Je()(),pn(25,"input",10),qe(26,"div",11)(27,"button",12),Yt("click",function(){return n.onSubmit()}),qe(28,"span"),ht(29,"Submit"),Je()(),qe(30,"button",12),Yt("click",function(){return n.generateColor()}),qe(31,"span"),ht(32,"Generate"),Je()()()()()),t&2&&(ft(),tn("border","1px solid "+n.getColor().HEX),os("formGroup",n.colorForm),ft(2),tn("color","#ff0000"),ft(3),wr(n.getColor().RGBA.r),ft(3),tn("color","#00ff00"),ft(3),wr(n.getColor().RGBA.g),ft(3),tn("color","#0000ff"),ft(3),wr(n.getColor().RGBA.b),ft(3),tn("color","#7b00ff"),ft(3),wr(n.getColor().RGBA.a))},dependencies:[gm,fm,Fl,Vh,am,lm,zh,kh],styles:["label[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.red[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:red}.green[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#0f0}.blue[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#00f}.alpha[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#7b00ff}.form-range[_ngcontent-%COMP%]::-webkit-slider-thumb{background:#fff;border:1px solid #7a7a7a}form[_ngcontent-%COMP%]{border:1px solid #7a7a7a;padding:16px;border-radius:16px;background:#ffffff1c}.input-color[_ngcontent-%COMP%]{margin:0;text-align:center;background:transparent;border:1px solid transparent}.input-red[_ngcontent-%COMP%]{color:red}.input-green[_ngcontent-%COMP%]{color:#0f0}.input-blue[_ngcontent-%COMP%]{color:#00f}.input-alpha[_ngcontent-%COMP%]{color:#7b00ff}"]})};var Nm=0,vd=1,Om=2;var Ia=1,Um=2,xo=3,lr=0,Ln=1,Gi=2,Hi=0,fs=1,yd=2,Md=3,bd=4,Bm=5;var Lr=100,Vm=101,km=102,zm=103,Gm=104,Hm=200,Wm=201,Xm=202,qm=203,nc=204,ic=205,Ym=206,Zm=207,$m=208,Jm=209,Km=210,jm=211,Qm=212,eg=213,tg=214,rc=0,sc=1,oc=2,ps=3,ac=4,lc=5,cc=6,uc=7,Sd=0,ng=1,ig=2,Pi=0,wd=1,Ed=2,Ad=3,Td=4,Cd=5,Rd=6,Pd=7;var hd=300,zr=301,vs=302,Lc=303,Nc=304,Da=306,hc=1e3,Bi=1001,dc=1002,un=1003,rg=1004;var Fa=1005;var mn=1006,Oc=1007;var Gr=1008;var si=1009,Id=1010,Dd=1011,vo=1012,Uc=1013,Ii=1014,Di=1015,Wi=1016,Bc=1017,Vc=1018,yo=1020,Fd=35902,Ld=35899,Nd=1021,Od=1022,_i=1023,Vi=1026,Hr=1027,Ud=1028,kc=1029,ys=1030,zc=1031;var Gc=1033,La=33776,Na=33777,Oa=33778,Ua=33779,Hc=35840,Wc=35841,Xc=35842,qc=35843,Yc=36196,Zc=37492,$c=37496,Jc=37488,Kc=37489,jc=37490,Qc=37491,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,su=37813,ou=37814,au=37815,lu=37816,cu=37817,uu=37818,hu=37819,du=37820,fu=37821,pu=36492,mu=36494,gu=36495,_u=36283,xu=36284,vu=36285,yu=36286;var pa=2300,fc=2301,tc=2302,dd=2303,fd=2400,pd=2401,md=2402;var sg=3200;var og=0,ag=1,ur="",ei="srgb",ms="srgb-linear",ma="linear",vt="srgb";var hs=7680;var gd=519,lg=512,cg=513,ug=514,Mu=515,hg=516,dg=517,bu=518,fg=519,_d=35044;var Bd="300 es",Ri=2e3,ga=2001;function Fx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _a(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pg(){let r=_a("canvas");return r.style.display="block",r}var xm={},po=null;function Vd(...r){let e="THREE."+r.shift();po?po("log",e,...r):console.log(e,...r)}function mg(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=mg(r);let e="THREE."+r.shift();if(po)po("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function He(...r){r=mg(r);let e="THREE."+r.shift();if(po)po("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function xa(...r){let e=r.join(" ");e in xm||(xm[e]=!0,Ye(...r))}function gg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var _g={[rc]:sc,[oc]:cc,[ac]:uc,[ps]:lc,[sc]:rc,[cc]:oc,[uc]:ac,[lc]:ps},cr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gh=Math.PI/180,pc=180/Math.PI;function Ba(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Nx(r,e){return(r%e+e)%e}function Hh(r,e,t){return(1-t)*r+t*e}function ca(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var bt=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ki=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==g){let p=l*h+c*d+u*g+f*_;p<0&&(h=-h,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),w=Math.sin(y);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w,l=l*m+h*a,c=c*m+d*a,u=u*m+g*a,f=f*m+_*a}else{l=l*m+h*a,c=c*m+d*a,u=u*m+g*a,f=f*m+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wh=new q,vm=new ki,Qe=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],w=i[4],b=i[7],A=i[2],E=i[5],T=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*p+a*w+l*E,s[6]=o*m+a*b+l*T,s[1]=c*_+u*y+f*A,s[4]=c*p+u*w+f*E,s[7]=c*m+u*b+f*T,s[2]=h*_+d*y+g*A,s[5]=h*p+d*w+g*E,s[8]=h*m+d*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xh.makeScale(e,t)),this}rotate(e){return this.premultiply(Xh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xh=new Qe,ym=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){let r={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(i.r=ar(i.r),i.g=ar(i.g),i.b=ar(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=fo(i.r),i.g=fo(i.g),i.b=fo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ur?ma:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return xa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return xa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ms]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}var dt=Ox();function ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var eo,mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{eo===void 0&&(eo=_a("canvas")),eo.width=e.width,eo.height=e.height;let i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=eo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ux=0,mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qh(i[o].image)):s.push(qh(i[o]))}else s=qh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Bx=0,Yh=new q,hr=(()=>{class r extends cr{constructor(t=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=Bi,s=Bi,o=mn,a=Gr,l=_i,c=si,u=r.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Ba(),this.name="",this.source=new mo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yh).x}get height(){return this.source.getSize(Yh).y}get depth(){return this.source.getSize(Yh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hc:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hc:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=hd,r.DEFAULT_ANISOTROPY=1,r})(),Vt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(d+1)/2,A=(m+1)/2,E=(u+h)/4,T=(f+_)/4,x=(g+p)/4;return w>b&&w>A?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=T/n):b>A?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=x/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends cr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new hr(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new mo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},va=class extends hr{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends hr{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class r{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vx,e,kx)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Tr.crossVectors(n,jn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Tr.crossVectors(n,jn)),Tr.normalize(),Nl.crossVectors(jn,Tr),i[0]=Tr.x,i[4]=Nl.x,i[8]=jn.x,i[1]=Tr.y,i[5]=Nl.y,i[9]=jn.y,i[2]=Tr.z,i[6]=Nl.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],w=n[7],b=n[11],A=n[15],E=i[0],T=i[4],x=i[8],M=i[12],L=i[1],R=i[5],D=i[9],O=i[13],z=i[2],V=i[6],k=i[10],F=i[14],j=i[3],Y=i[7],P=i[11],ne=i[15];return s[0]=o*E+a*L+l*z+c*j,s[4]=o*T+a*R+l*V+c*Y,s[8]=o*x+a*D+l*k+c*P,s[12]=o*M+a*O+l*F+c*ne,s[1]=u*E+f*L+h*z+d*j,s[5]=u*T+f*R+h*V+d*Y,s[9]=u*x+f*D+h*k+d*P,s[13]=u*M+f*O+h*F+d*ne,s[2]=g*E+_*L+p*z+m*j,s[6]=g*T+_*R+p*V+m*Y,s[10]=g*x+_*D+p*k+m*P,s[14]=g*M+_*O+p*F+m*ne,s[3]=y*E+w*L+b*z+A*j,s[7]=y*T+w*R+b*V+A*Y,s[11]=y*x+w*D+b*k+A*P,s[15]=y*M+w*O+b*F+A*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],y=l*d-c*h,w=a*d-c*f,b=a*h-l*f,A=o*d-c*u,E=o*h-l*u,T=o*f-a*u;return t*(_*y-p*w+m*b)-n*(g*y-p*A+m*E)+i*(g*w-_*A+m*T)-s*(g*b-_*E+p*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=t*a-n*o,w=t*l-i*o,b=t*c-s*o,A=n*l-i*a,E=n*c-s*a,T=i*c-s*l,x=u*_-f*g,M=u*p-h*g,L=u*m-d*g,R=f*p-h*_,D=f*m-d*_,O=h*m-d*p,z=y*O-w*D+b*R+A*L-E*M+T*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/z;return e[0]=(a*O-l*D+c*R)*V,e[1]=(i*D-n*O-s*R)*V,e[2]=(_*T-p*E+m*A)*V,e[3]=(h*E-f*T-d*A)*V,e[4]=(l*L-o*O-c*M)*V,e[5]=(t*O-i*L+s*M)*V,e[6]=(p*b-g*T-m*w)*V,e[7]=(u*T-h*b+d*w)*V,e[8]=(o*D-a*L+c*x)*V,e[9]=(n*L-t*D-s*x)*V,e[10]=(g*E-_*b+m*y)*V,e[11]=(f*b-u*E-d*y)*V,e[12]=(a*M-o*R-l*x)*V,e[13]=(t*R-n*M+i*x)*V,e[14]=(_*w-g*A-p*y)*V,e[15]=(u*A-f*w+h*y)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,y=l*c,w=l*u,b=l*f,A=n.x,E=n.y,T=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+b)*A,i[2]=(g-w)*A,i[3]=0,i[4]=(d-b)*E,i[5]=(1-(h+m))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+w)*T,i[9]=(p-y)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=to.set(i[0],i[1],i[2]).length(),a=to.set(i[4],i[5],i[6]).length(),l=to.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ai.copy(this);let c=1/o,u=1/a,f=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Ri,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Ri)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ga)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ri,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Ri)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ga)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},to=new q,Ai=new $t,Vx=new q(0,0,0),kx=new q(1,1,1),Tr=new q,Nl=new q,jn=new q,bm=new $t,Sm=new ki,gs=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],f=s[9],h=s[2],d=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return bm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zx=0,wm=new q,no=new ki,nr=new $t,Ol=new q,ua=new q,Gx=new q,Hx=new ki,Em=new q(1,0,0),Am=new q(0,1,0),Tm=new q(0,0,1),Cm={type:"added"},Wx={type:"removed"},io={type:"childadded",child:null},Zh={type:"childremoved",child:null},Ms=(()=>{class r extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,n=new gs,i=new ki,s=new q(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Qe}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return no.setFromAxisAngle(t,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,n){return no.setFromAxisAngle(t,n),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(Em,t)}rotateY(t){return this.rotateOnAxis(Am,t)}rotateZ(t){return this.rotateOnAxis(Tm,t)}translateOnAxis(t,n){return wm.copy(t).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Em,t)}translateY(t){return this.translateOnAxis(Am,t)}translateZ(t){return this.translateOnAxis(Tm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ol.copy(t):Ol.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(ua,Ol,this.up):nr.lookAt(Ol,ua,this.up),this.quaternion.setFromRotationMatrix(nr),s&&(nr.extractRotation(s.matrixWorld),no.setFromRotationMatrix(nr),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cm),io.child=t,this.dispatchEvent(io),io.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Wx),Zh.child=t,this.dispatchEvent(Zh),Zh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(nr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cm),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,Gx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Hx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*s,o[13]+=i-o[1]*n-o[5]*i-o[9]*s,o[14]+=s-o[2]*n-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Hn(qt({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>qt({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){let h=c[u];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),f=a(t.images),h=a(t.shapes),d=a(t.skeletons),g=a(t.animations),_=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(l){let c=[];for(let u in l){let f=l[u];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new q(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),ds=class extends Ms{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function $h(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var gt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Nx(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$h(o,s,e+1/3),this.g=$h(o,s,e),this.b=$h(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=ei){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){let n=xg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return dt.workingToColorSpace(wn.copy(this),e),Math.round(lt(wn.r*255,0,255))*65536+Math.round(lt(wn.g*255,0,255))*256+Math.round(lt(wn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ei){dt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Ul);let n=Hh(Cr.h,Ul.h,t),i=Hh(Cr.s,Ul.s,t),s=Hh(Cr.l,Ul.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new gt;gt.NAMES=xg;var Ma=class extends Ms{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new q,ir=new q,Jh=new q,rr=new q,ro=new q,so=new q,Rm=new q,Kh=new q,jh=new q,Qh=new q,ed=new Vt,td=new Vt,nd=new Vt,Fr=class r{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),ir.subVectors(n,t),Jh.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(ir),l=Ti.dot(Jh),c=ir.dot(ir),u=ir.dot(Jh),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(o,rr.y),l.addScaledVector(a,rr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(td,s.y),o.addScaledVector(nd,s.z),o}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),ir.subVectors(e,t),Ti.cross(ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ti.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;ro.subVectors(i,n),so.subVectors(s,n),Kh.subVectors(e,n);let l=ro.dot(Kh),c=so.dot(Kh);if(l<=0&&c<=0)return t.copy(n);jh.subVectors(e,i);let u=ro.dot(jh),f=so.dot(jh);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ro,o);Qh.subVectors(e,s);let d=ro.dot(Qh),g=so.dot(Qh);if(g>=0&&d<=g)return t.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(so,a);let p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Rm.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Rm,a);let m=1/(p+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(ro,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nr=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bl.copy(n.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Vl.subVectors(this.max,ha),oo.subVectors(e.a,ha),ao.subVectors(e.b,ha),lo.subVectors(e.c,ha),Rr.subVectors(ao,oo),Pr.subVectors(lo,ao),as.subVectors(oo,lo);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-as.z,as.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,as.z,0,-as.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-as.y,as.x,0];return!id(t,oo,ao,lo,Vl)||(t=[1,0,0,0,1,0,0,0,1],!id(t,oo,ao,lo,Vl))?!1:(kl.crossVectors(Rr,Pr),t=[kl.x,kl.y,kl.z],id(t,oo,ao,lo,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new q,new q,new q,new q,new q,new q,new q,new q],Ci=new q,Bl=new Nr,oo=new q,ao=new q,lo=new q,Rr=new q,Pr=new q,as=new q,ha=new q,Vl=new q,kl=new q,ls=new q;function id(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ls.fromArray(r,s);let a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Zt=new q,zl=new bt,qx=0,ti=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_d,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ca(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),i=Wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_d&&(e.usage=this.usage),e}};var ba=class extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Sa=class extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gi=class extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yx=new Nr,da=new q,rd=new q,_o=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(da,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(rd)),this.expandByPoint(da.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zx=0,mi=new $t,sd=new Ms,co=new q,Qn=new Nr,fa=new Nr,cn=new q,zi=class r extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Sa:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Qn.min,fa.min),Qn.expandByPoint(cn),cn.addVectors(Qn.max,fa.max),Qn.expandByPoint(cn)):(Qn.expandByPoint(fa.min),Qn.expandByPoint(fa.max))}Qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(e,c),cn.add(co)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new q,l[x]=new q;let c=new q,u=new q,f=new q,h=new bt,d=new bt,g=new bt,_=new q,p=new q;function m(x,M,L){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,L),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,L),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[x].add(_),a[M].add(_),a[L].add(_),l[x].add(p),l[M].add(p),l[L].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,M=y.length;x<M;++x){let L=y[x],R=L.start,D=L.count;for(let O=R,z=R+D;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new q,b=new q,A=new q,E=new q;function T(x){A.fromBufferAttribute(i,x),E.copy(A);let M=a[x];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),b.crossVectors(E,M);let R=b.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,R)}for(let x=0,M=y.length;x<M;++x){let L=y[x],R=L.start,D=L.count;for(let O=R,z=R+D;O<z;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new ti(h,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $x=0,_s=class extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var or=new q,od=new q,Gl=new q,Ir=new q,ad=new q,Hl=new q,ld=new q,xc=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){od.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(od);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Gl),a=Ir.dot(this.direction),l=-Ir.dot(Gl),c=Ir.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(od).addScaledVector(Gl,h),d}intersectSphere(e,t){or.subVectors(e.center,this.origin);let n=or.dot(this.direction),i=or.dot(or)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,s){ad.subVectors(t,e),Hl.subVectors(n,e),ld.crossVectors(ad,Hl);let o=this.direction.dot(ld),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);let l=a*this.direction.dot(Hl.crossVectors(Ir,Hl));if(l<0)return null;let c=a*this.direction.dot(ad.cross(Ir));if(c<0||l+c>o)return null;let u=-a*Ir.dot(ld);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xs=class extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pm=new $t,cs=new xc,Wl=new _o,Im=new q,Xl=new q,ql=new q,Yl=new q,cd=new q,Zl=new q,Dm=new q,$l=new q,Xn=class extends Ms{constructor(e=new zi,t=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(cd.fromBufferAttribute(f,e),o?Zl.addScaledVector(cd,u):Zl.addScaledVector(cd.sub(t),u))}t.add(Zl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(Wl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Wl,Im)===null||cs.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Pm.copy(s).invert(),cs.copy(e.ray).applyMatrix4(Pm),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,A=w;b<A;b+=3){let E=a.getX(b),T=a.getX(b+1),x=a.getX(b+2);i=Jl(this,m,e,n,c,u,f,E,T,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let y=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);i=Jl(this,o,e,n,c,u,f,y,w,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,A=w;b<A;b+=3){let E=b,T=b+1,x=b+2;i=Jl(this,m,e,n,c,u,f,E,T,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let y=p,w=p+1,b=p+2;i=Jl(this,o,e,n,c,u,f,y,w,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Jx(r,e,t,n,i,s,o,a){let l;if(e.side===Ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===lr,a),l===null)return null;$l.copy(a),$l.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:r}}function Jl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Xl),r.getVertexPosition(l,ql),r.getVertexPosition(c,Yl);let u=Jx(r,e,t,n,Xl,ql,Yl,Dm);if(u){let f=new q;Fr.getBarycoord(Dm,Xl,ql,Yl,f),i&&(u.uv=Fr.getInterpolatedAttribute(i,a,l,c,f,new bt)),s&&(u.uv1=Fr.getInterpolatedAttribute(s,a,l,c,f,new bt)),o&&(u.normal=Fr.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new q,materialIndex:0};Fr.getNormal(Xl,ql,Yl,h.normal),u.face=h,u.barycoord=f}return u}var vc=class extends hr{constructor(e=null,t=1,n=1,i,s,o,a,l,c=un,u=un,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ud=new q,Kx=new q,jx=new Qe,Ui=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ud.subVectors(n,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ud),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jx.getNormalMatrix(e),i=this.coplanarPoint(ud).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new _o,Qx=new bt(.5,.5),Kl=new q,wa=class{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],y=s[12],w=s[13],b=s[14],A=s[15];if(i[0].setComponents(c-o,d-u,m-g,A-y).normalize(),i[1].setComponents(c+o,d+u,m+g,A+y).normalize(),i[2].setComponents(c+a,d+f,m+_,A+w).normalize(),i[3].setComponents(c-a,d-f,m-_,A-w).normalize(),n)i[4].setComponents(l,h,p,b).normalize(),i[5].setComponents(c-l,d-h,m-p,A-b).normalize();else if(i[4].setComponents(c-l,d-h,m-p,A-b).normalize(),t===Ri)i[5].setComponents(c+l,d+h,m+p,A+b).normalize();else if(t===ga)i[5].setComponents(l,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=Qx.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Kl.x=i.normal.x>0?e.max.x:e.min.x,Kl.y=i.normal.y>0?e.max.y:e.min.y,Kl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ea=class extends hr{constructor(e=[],t=zr,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Or=class extends hr{constructor(e,t,n=Ii,i,s,o,a=un,l=un,c,u=Vi,f=1){if(u!==Vi&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yc=class extends Or{constructor(e,t=Ii,n=zr,i,s,o=un,a=un,l,c=Vi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends hr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ur=class r extends zi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(f,2));function g(_,p,m,y,w,b,A,E,T,x,M){let L=b/T,R=A/x,D=b/2,O=A/2,z=E/2,V=T+1,k=x+1,F=0,j=0,Y=new q;for(let P=0;P<k;P++){let ne=P*R-O;for(let ae=0;ae<V;ae++){let Re=ae*L-D;Y[_]=Re*y,Y[p]=ne*w,Y[m]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(ae/T),f.push(1-P/x),F+=1}}for(let P=0;P<x;P++)for(let ne=0;ne<T;ne++){let ae=h+ne+V*P,Re=h+ne+V*(P+1),Ve=h+(ne+1)+V*(P+1),ze=h+(ne+1)+V*P;l.push(ae,Re,ze),l.push(Re,Ve,ze),j+=6}a.addGroup(d,j,M),d+=j,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ta=class r extends zi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let y=m*h-o;for(let w=0;w<c;w++){let b=w*f-s;g.push(b,-y,0),_.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let w=y+c*m,b=y+c*(m+1),A=y+1+c*(m+1),E=y+1+c*m;d.push(w,b,E),d.push(b,A,E)}this.setIndex(d),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function bs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(r){let e={};for(let t=0;t<r.length;t++){let n=bs(r[t]);for(let i in n)e[i]=n[i]}return e}function ev(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var vg={clone:bs,merge:An},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mc=class extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var bc=class extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var Br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wc=class extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:s=e,a=2*t-n;break;case md:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=e,l=2*n-t;break;case md:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,y=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,w=(-1-d)*p+(1.5+d)*_+.5*g,b=d*p-d*_;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+y*o[c+A]+w*o[l+A]+b*o[f+A];return s}},Ec=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},Ac=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Tc=class extends Br{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){let _=(n-t)/(i-t),p=1-_;for(let m=0;m!==a;++m)s[m]=o[c+m]*p+o[l+m]*_;return s}let d=a*2,g=e-1;for(let _=0;_!==a;++_){let p=o[c+_],m=o[l+_],y=g*d+_*2,w=h[y],b=h[y+1],A=e*d+_*2,E=f[A],T=f[A+1],x=(n-t)/(i-t),M,L,R,D,O;for(let z=0;z<8;z++){M=x*x,L=M*x,R=1-x,D=R*R,O=D*R;let k=O*t+3*D*x*w+3*R*M*E+L*i-n;if(Math.abs(k)<1e-10)break;let F=3*D*(w-t)+6*R*x*(E-w)+3*M*(i-E);if(Math.abs(F)<1e-10)break;x=x-k/F,x=Math.max(0,Math.min(1,x))}s[_]=O*p+3*D*x*b+3*R*M*T+L*m}return s}},ri=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jl(t,this.TimeBufferType),this.values=jl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jl(e.times,Array),values:jl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case fc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case dd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){He("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Lx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=fc;var Vr=class extends ri{constructor(e,t,n){super(e,t,n)}};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=pa;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Cc.prototype.ValueTypeName="color";var Rc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Rc.prototype.ValueTypeName="number";var Pc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)ki.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ca=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends ri{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=pa;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}};Ic.prototype.ValueTypeName="vector";var Ql=new q,ec=new ki,Oi=new q,Ra=class extends Ms{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ql,ec,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new q,Fm=new bt,Lm=new bt,En=class extends Ra{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(Gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Fm,Lm),t.subVectors(Lm,Fm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gh*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pa=class extends Ra{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var uo=-90,ho=1,Dc=class extends Ms{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new En(uo,ho,e,t);i.layers=this.layers,this.add(i);let s=new En(uo,ho,e,t);s.layers=this.layers,this.add(s);let o=new En(uo,ho,e,t);o.layers=this.layers,this.add(o);let a=new En(uo,ho,e,t);a.layers=this.layers,this.add(a);let l=new En(uo,ho,e,t);l.layers=this.layers,this.add(l);let c=new En(uo,ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fc=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var zd="\\[\\]\\.:\\/",iv=new RegExp("["+zd+"]","g"),Gd="[^"+zd+"]",rv="[^"+zd.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",Gd),ov=/(WCOD+)?/.source.replace("WCOD",rv),av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gd),lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gd),cv=new RegExp("^"+sv+ov+av+lv+"$"),uv=["material","materials","bones","map"],xd=class{constructor(e,t,n){let i=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iv,"")}static parseTrackName(t){let n=cv.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);uv.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=xd,r})();Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YE=new Float32Array(1);function Hd(r,e,t,n){let i=hv(n);switch(t){case Nd:return r*e;case Ud:return r*e/i.components*i.byteLength;case kc:return r*e/i.components*i.byteLength;case ys:return r*e*2/i.components*i.byteLength;case zc:return r*e*2/i.components*i.byteLength;case Od:return r*e*3/i.components*i.byteLength;case _i:return r*e*4/i.components*i.byteLength;case Gc:return r*e*4/i.components*i.byteLength;case La:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wc:case qc:return Math.max(r,16)*Math.max(e,8)/4;case Hc:case Xc:return Math.max(r,8)*Math.max(e,8)/2;case Yc:case Zc:case Jc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $c:case jc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case au:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pu:case mu:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _u:case xu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vu:case yu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hv(r){switch(r){case si:case Id:return{byteLength:1,components:1};case vo:case Dd:case Wi:return{byteLength:2,components:1};case Bc:case Vc:return{byteLength:2,components:4};case Ii:case Uc:case Di:return{byteLength:4,components:1};case Fd:case Ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Gg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fv(r){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mv=`#ifdef USE_ALPHAHASH
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
#endif`,gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yv=`#ifdef USE_AOMAP
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
#endif`,Mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bv=`#ifdef USE_BATCHING
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
#endif`,Sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tv=`#ifdef USE_IRIDESCENCE
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
#endif`,Cv=`#ifdef USE_BUMPMAP
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uv=`#define PI 3.141592653589793
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
} // validated`,Bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vv=`vec3 transformedNormal = objectNormal;
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
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sy=`uniform bool receiveShadow;
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
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,dy=`uniform sampler2D dfgLUT;
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
}`,fy=`
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sy=`#if defined( USE_POINTS_UV )
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
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
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
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,MM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
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
}`,AM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,DM=`#define MATCAP
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
}`,FM=`#define NORMAL
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
}`,LM=`#define NORMAL
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
}`,NM=`#define PHONG
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
}`,OM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,BM=`#define STANDARD
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
}`,VM=`#define TOON
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
}`,kM=`#define TOON
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
}`,zM=`uniform float size;
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
}`,GM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,qM=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:pv,alphahash_pars_fragment:mv,alphamap_fragment:gv,alphamap_pars_fragment:_v,alphatest_fragment:xv,alphatest_pars_fragment:vv,aomap_fragment:yv,aomap_pars_fragment:Mv,batching_pars_vertex:bv,batching_vertex:Sv,begin_vertex:wv,beginnormal_vertex:Ev,bsdfs:Av,iridescence_fragment:Tv,bumpmap_pars_fragment:Cv,clipping_planes_fragment:Rv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Iv,clipping_planes_vertex:Dv,color_fragment:Fv,color_pars_fragment:Lv,color_pars_vertex:Nv,color_vertex:Ov,common:Uv,cube_uv_reflection_fragment:Bv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:kv,displacementmap_vertex:zv,emissivemap_fragment:Gv,emissivemap_pars_fragment:Hv,colorspace_fragment:Wv,colorspace_pars_fragment:Xv,envmap_fragment:qv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:Zv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:oy,envmap_vertex:Jv,fog_vertex:Kv,fog_pars_vertex:jv,fog_fragment:Qv,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:ry,lights_pars_begin:sy,lights_toon_fragment:ay,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:uy,lights_physical_fragment:hy,lights_physical_pars_fragment:dy,lights_fragment_begin:fy,lights_fragment_maps:py,lights_fragment_end:my,logdepthbuf_fragment:gy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:vy,map_fragment:yy,map_pars_fragment:My,map_particle_fragment:by,map_particle_pars_fragment:Sy,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ey,morphinstance_vertex:Ay,morphcolor_vertex:Ty,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ry,morphtarget_vertex:Py,normal_fragment_begin:Iy,normal_fragment_maps:Dy,normal_pars_fragment:Fy,normal_pars_vertex:Ly,normal_vertex:Ny,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:ky,opaque_fragment:zy,packing:Gy,premultiplied_alpha_fragment:Hy,project_vertex:Wy,dithering_fragment:Xy,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Jy,shadowmap_vertex:Ky,shadowmask_pars_fragment:jy,skinbase_vertex:Qy,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:hM,worldpos_vertex:dM,background_vert:fM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:_M,cube_frag:xM,depth_vert:vM,depth_frag:yM,distance_vert:MM,distance_frag:bM,equirect_vert:SM,equirect_frag:wM,linedashed_vert:EM,linedashed_frag:AM,meshbasic_vert:TM,meshbasic_frag:CM,meshlambert_vert:RM,meshlambert_frag:PM,meshmatcap_vert:IM,meshmatcap_frag:DM,meshnormal_vert:FM,meshnormal_frag:LM,meshphong_vert:NM,meshphong_frag:OM,meshphysical_vert:UM,meshphysical_frag:BM,meshtoon_vert:VM,meshtoon_frag:kM,points_vert:zM,points_frag:GM,shadow_vert:HM,shadow_frag:WM,sprite_vert:XM,sprite_frag:qM},ge={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},qi={basic:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:An([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:An([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:An([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:An([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:An([ge.points,ge.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:An([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:An([ge.common,ge.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:An([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:An([ge.sprite,ge.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:An([ge.common,ge.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:An([ge.lights,ge.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};qi.physical={uniforms:An([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Su={r:0,b:0,g:0},Ss=new gs,YM=new $t;function ZM(r,e,t,n,i,s){let o=new gt(0),a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(y){let w=!1,b=d(y);b===null?p(o,a):b&&b.isColor&&(p(b,1),w=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,w){let b=d(w);b&&(b.isCubeTexture||b.mapping===Da)?(c===void 0&&(c=new Xn(new Ur(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:bs(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ss.copy(w.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(Ss)),c.material.toneMapped=dt.getTransfer(b.colorSpace)!==vt,(u!==b||f!==b.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xn(new Ta(2,2),new ii({name:"BackgroundMaterial",uniforms:bs(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(Su,kd(r)),t.buffers.color.setClear(Su.r,Su.g,Su.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:_,dispose:m}}function $M(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,o=!1;function a(R,D,O,z,V){let k=!1,F=f(R,z,O,D);s!==F&&(s=F,c(s.object)),k=d(R,z,O,V),k&&g(R,z,O,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(R,D,O,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function f(R,D,O,z){let V=z.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let F=R.isInstancedMesh===!0?R.id:0,j=k[F];j===void 0&&(j={},k[F]=j);let Y=j[O.id];Y===void 0&&(Y={},j[O.id]=Y);let P=Y[V];return P===void 0&&(P=h(l()),Y[V]=P),P}function h(R){let D=[],O=[],z=[];for(let V=0;V<t;V++)D[V]=0,O[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:R,attributes:{},index:null}}function d(R,D,O,z){let V=s.attributes,k=D.attributes,F=0,j=O.getAttributes();for(let Y in j)if(j[Y].location>=0){let ne=V[Y],ae=k[Y];if(ae===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;F++}return s.attributesNum!==F||s.index!==z}function g(R,D,O,z){let V={},k=D.attributes,F=0,j=O.getAttributes();for(let Y in j)if(j[Y].location>=0){let ne=k[Y];ne===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));let ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),V[Y]=ae,F++}s.attributes=V,s.attributesNum=F,s.index=z}function _(){let R=s.newAttributes;for(let D=0,O=R.length;D<O;D++)R[D]=0}function p(R){m(R,0)}function m(R,D){let O=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;O[R]=1,z[R]===0&&(r.enableVertexAttribArray(R),z[R]=1),V[R]!==D&&(r.vertexAttribDivisor(R,D),V[R]=D)}function y(){let R=s.newAttributes,D=s.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==R[O]&&(r.disableVertexAttribArray(O),D[O]=0)}function w(R,D,O,z,V,k,F){F===!0?r.vertexAttribIPointer(R,D,O,V,k):r.vertexAttribPointer(R,D,O,z,V,k)}function b(R,D,O,z){_();let V=z.attributes,k=O.getAttributes(),F=D.defaultAttributeValues;for(let j in k){let Y=k[j];if(Y.location>=0){let P=V[j];if(P===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),P!==void 0){let ne=P.normalized,ae=P.itemSize,Re=e.get(P);if(Re===void 0)continue;let Ve=Re.buffer,ze=Re.type,$=Re.bytesPerElement,ee=ze===r.INT||ze===r.UNSIGNED_INT||P.gpuType===Uc;if(P.isInterleavedBufferAttribute){let se=P.data,Fe=se.stride,Le=P.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Y.locationSize;Ce++)m(Y.location+Ce,se.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)p(Y.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<Y.locationSize;Ce++)w(Y.location+Ce,ae/Y.locationSize,ze,ne,Fe*$,(Le+ae/Y.locationSize*Ce)*$,ee)}else{if(P.isInstancedBufferAttribute){for(let se=0;se<Y.locationSize;se++)m(Y.location+se,P.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let se=0;se<Y.locationSize;se++)p(Y.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let se=0;se<Y.locationSize;se++)w(Y.location+se,ae/Y.locationSize,ze,ne,ae*$,ae/Y.locationSize*se*$,ee)}}else if(F!==void 0){let ne=F[j];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(Y.location,ne);break;case 3:r.vertexAttrib3fv(Y.location,ne);break;case 4:r.vertexAttrib4fv(Y.location,ne);break;default:r.vertexAttrib1fv(Y.location,ne)}}}}y()}function A(){M();for(let R in n){let D=n[R];for(let O in D){let z=D[O];for(let V in z){let k=z[V];for(let F in k)u(k[F].object),delete k[F];delete z[V]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let O in D){let z=D[O];for(let V in z){let k=z[V];for(let F in k)u(k[F].object),delete k[F];delete z[V]}}delete n[R.id]}function T(R){for(let D in n){let O=n[D];for(let z in O){let V=O[z];if(V[R.id]===void 0)continue;let k=V[R.id];for(let F in k)u(k[F].object),delete k[F];delete V[R.id]}}}function x(R){for(let D in n){let O=n[D],z=R.isInstancedMesh===!0?R.id:0,V=O[z];if(V!==void 0){for(let k in V){let F=V[k];for(let j in F)u(F[j].object),delete F[j];delete V[k]}delete O[z],Object.keys(O).length===0&&delete n[D]}}}function M(){L(),o=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function JM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==_i&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let x=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==si&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Di&&!x)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:E}}function jM(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ui,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let y=s?0:n,w=y*4,b=m.clippingState||null;l.value=b,b=u(g,h,w,d);for(let A=0;A!==w;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,b=d;w!==_;++w,b+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Wr=4,yg=[.125,.215,.35,.446,.526,.582],Es=20,QM=256,Va=new Pa,Mg=new gt,Wd=null,Xd=0,qd=0,Yd=!1,eb=new q,Eu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=eb}=s;Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,Xd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Wi,format:_i,colorSpace:ms,depthBuffer:!1},i=bg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tb(s)),this._blurMaterial=ib(s,e,t),this._ggxMaterial=nb(s,e,t)}return i}_compileMaterial(e){let t=new Xn(new zi,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i,s){let l=new En(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Mg),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Ur,new xs({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(Mg),m=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let A=this._cubeSize;Mo(i,b*A,w>2?A:0,A,A),f.setRenderTarget(i),m&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zr||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Wr?n-g+Wr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Mo(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(a,Va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Mo(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(a,Va)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[i];f.material=c;let h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Es-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Es;p>Es&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Es}`);let m=[],y=0;for(let T=0;T<Es;++T){let x=T/_,M=Math.exp(-x*x/2);m.push(M),T===0?y+=M:T<p&&(y+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;let b=this._sizeLods[i],A=3*b*(i>w-Wr?i-w+Wr:0),E=4*(this._cubeSize-b);Mo(t,A,E,3*b,2*b),l.setRenderTarget(t),l.render(f,Va)}};function tb(r){let e=[],t=[],n=[],i=r,s=r-Wr+1+yg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Wr?l=yg[o-r+Wr-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),w=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,x=E>2?0:-1,M=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];y.set(M,_*g*E),w.set(h,p*g*E);let L=[E,E,E,E,E,E];b.set(L,m*g*E)}let A=new zi;A.setAttribute("position",new ti(y,_)),A.setAttribute("uv",new ti(w,p)),A.setAttribute("faceIndex",new ti(b,m)),n.push(new Xn(A,null)),i>Wr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function bg(r,e,t){let n=new ni(r,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function nb(r,e,t){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ib(r,e,t){let n=new Float32Array(Es),i=new q(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Sg(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function wg(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}var Au=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ur(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Hi});s.uniforms.tEquirect.value=t;let o=new Xn(i,s),a=t.minFilter;return t.minFilter===Gr&&(t.minFilter=mn),new Dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};function rb(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Lc||d===Nc)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Au(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Lc||d===Nc,_=d===zr||d===vs;if(g||_){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Eu(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Eu(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===Lc?h.mapping=zr:d===Nc&&(h.mapping=vs),h}function l(h){let d=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function sb(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&xa("WebGLRenderer: "+n+" extension not supported."),i}}}function ob(r,e,t,n){let i={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];let d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let w=0,b=y.length;w<b;w+=3){let A=y[w+0],E=y[w+1],T=y[w+2];h.push(A,E,E,T,T,A)}}else{let y=g.array;_=g.version;for(let w=0,b=y.length/3-1;w<b;w+=3){let A=w+0,E=w+1,T=w+2;h.push(A,E,E,T,T,A)}}let p=new(g.count>=65535?Sa:ba)(h,1);p.version=_;let m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ab(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function f(h,d,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*_[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lb(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cb(r,e,t){let n=new WeakMap,i=new Vt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let L=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",L)};var d=L;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let A=a.attributes.position.count*b,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let T=new Float32Array(A*E*4*f),x=new va(T,A,E,f);x.type=Di,x.needsUpdate=!0;let M=b*4;for(let R=0;R<f;R++){let D=m[R],O=y[R],z=w[R],V=A*E*4*R;for(let k=0;k<D.count;k++){let F=k*M;g===!0&&(i.fromBufferAttribute(D,k),T[V+F+0]=i.x,T[V+F+1]=i.y,T[V+F+2]=i.z,T[V+F+3]=0),_===!0&&(i.fromBufferAttribute(O,k),T[V+F+4]=i.x,T[V+F+5]=i.y,T[V+F+6]=i.z,T[V+F+7]=0),p===!0&&(i.fromBufferAttribute(z,k),T[V+F+8]=i.x,T[V+F+9]=i.y,T[V+F+10]=i.z,T[V+F+11]=z.itemSize===4?i.w:1)}}h={count:f,texture:x,size:new bt(A,E)},n.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function ub(r,e,t,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var hb={[wd]:"LINEAR_TONE_MAPPING",[Ed]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[Td]:"ACES_FILMIC_TONE_MAPPING",[Rd]:"AGX_TONE_MAPPING",[Pd]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function db(r,e,t,n,i){let s=new ni(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new ni(e,t,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),a=new zi;a.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new gi([0,2,0,0,2,0],2));let l=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xn(a,l),u=new Pa(-1,1,1,-1,0,1),f=null,h=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(y,w){s.setSize(y,w),o.setSize(y,w);for(let b=0;b<p.length;b++){let A=p[b];A.setSize&&A.setSize(y,w)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;let w=s.width,b=s.height;for(let A=0;A<p.length;A++){let E=p[A];E.setSize&&E.setSize(w,b)}},this.begin=function(y,w){if(d||y.toneMapping===Pi&&p.length===0)return!1;if(_=w,w!==null){let b=w.width,A=w.height;(s.width!==b||s.height!==A)&&this.setSize(b,A)}return m===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Pi,!0},this.hasRenderPass=function(){return m},this.end=function(y,w){y.toneMapping=g,d=!0;let b=s,A=o;for(let E=0;E<p.length;E++){let T=p[E];if(T.enabled!==!1&&(T.render(y,A,b,w),T.needsSwap!==!1)){let x=b;b=A,A=x}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,l.defines={},dt.getTransfer(f)===vt&&(l.defines.SRGB_TRANSFER="");let E=hb[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(_),y.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Hg=new hr,Jd=new Or(1,1),Wg=new va,Xg=new _c,qg=new Ea,Eg=[],Ag=[],Tg=new Float32Array(16),Cg=new Float32Array(9),Rg=new Float32Array(4);function So(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Eg[i];if(s===void 0&&(s=new Float32Array(i),Eg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ru(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function mb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function gb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function _b(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Rg.set(n),r.uniformMatrix2fv(this.addr,!1,Rg),rn(t,n)}}function xb(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Cg.set(n),r.uniformMatrix3fv(this.addr,!1,Cg),rn(t,n)}}function vb(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Tg.set(n),r.uniformMatrix4fv(this.addr,!1,Tg),rn(t,n)}}function yb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function bb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function Sb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function wb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function Ab(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function Tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function Cb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jd.compareFunction=t.isReversedDepthBuffer()?bu:Mu,s=Jd):s=Hg,t.setTexture2D(e||s,i)}function Rb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xg,i)}function Pb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qg,i)}function Ib(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wg,i)}function Db(r){switch(r){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return bb;case 35669:case 35673:return Sb;case 5125:return wb;case 36294:return Eb;case 36295:return Ab;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Fb(r,e){r.uniform1fv(this.addr,e)}function Lb(r,e){let t=So(e,this.size,2);r.uniform2fv(this.addr,t)}function Nb(r,e){let t=So(e,this.size,3);r.uniform3fv(this.addr,t)}function Ob(r,e){let t=So(e,this.size,4);r.uniform4fv(this.addr,t)}function Ub(r,e){let t=So(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bb(r,e){let t=So(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vb(r,e){let t=So(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kb(r,e){r.uniform1iv(this.addr,e)}function zb(r,e){r.uniform2iv(this.addr,e)}function Gb(r,e){r.uniform3iv(this.addr,e)}function Hb(r,e){r.uniform4iv(this.addr,e)}function Wb(r,e){r.uniform1uiv(this.addr,e)}function Xb(r,e){r.uniform2uiv(this.addr,e)}function qb(r,e){r.uniform3uiv(this.addr,e)}function Yb(r,e){r.uniform4uiv(this.addr,e)}function Zb(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Jd:o=Hg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function $b(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xg,s[o])}function Jb(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qg,s[o])}function Kb(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wg,s[o])}function jb(r){switch(r){case 5126:return Fb;case 35664:return Lb;case 35665:return Nb;case 35666:return Ob;case 35674:return Ub;case 35675:return Bb;case 35676:return Vb;case 5124:case 35670:return kb;case 35667:case 35671:return zb;case 35668:case 35672:return Gb;case 35669:case 35673:return Hb;case 5125:return Wb;case 36294:return Xb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Kb}}var Kd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}},jd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jb(t.type)}},Qd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Zd=/(\w+)(\])?(\[|\.)?/g;function Pg(r,e){r.seq.push(e),r.map[e.id]=e}function Qb(r,e,t){let n=r.name,i=n.length;for(Zd.lastIndex=0;;){let s=Zd.exec(n),o=Zd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pg(t,c===void 0?new Kd(a,r,e):new jd(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Qd(a),Pg(t,f)),t=f}}}var bo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Qb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ig(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var eS=37297,tS=0;function nS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Dg=new Qe;function iS(r){dt._getMatrix(Dg,dt.workingColorSpace,r);let e=`mat3( ${Dg.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case ma:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Fg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+nS(r.getShaderSource(e),a)}else return s}function rS(r,e){let t=iS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sS={[wd]:"Linear",[Ed]:"Reinhard",[Ad]:"Cineon",[Td]:"ACESFilmic",[Rd]:"AgX",[Pd]:"Neutral",[Cd]:"Custom"};function oS(r,e){let t=sS[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wu=new q;function aS(){dt.getLuminanceCoefficients(wu);let r=wu.x.toFixed(4),e=wu.y.toFixed(4),t=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function cS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function za(r){return r!==""}function Lg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ng(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(r){return r.replace(hS,fS)}var dS=new Map;function fS(r,e){let t=nt[e];if(t===void 0){let n=dS.get(e);if(n!==void 0)t=nt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ef(t)}var pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(r){return r.replace(pS,mS)}function mS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ug(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var gS={[Ia]:"SHADOWMAP_TYPE_PCF",[xo]:"SHADOWMAP_TYPE_VSM"};function _S(r){return gS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xS={[zr]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};function vS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":xS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var yS={[vs]:"ENVMAP_MODE_REFRACTION"};function MS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bS={[Sd]:"ENVMAP_BLENDING_MULTIPLY",[ng]:"ENVMAP_BLENDING_MIX",[ig]:"ENVMAP_BLENDING_ADD"};function SS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bS[r.combine]||"ENVMAP_BLENDING_NONE"}function wS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ES(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_S(t),c=vS(t),u=MS(t),f=SS(t),h=wS(t),d=lS(t),g=cS(s),_=i.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(za).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(za).join(`
`),m.length>0&&(m+=`
`)):(p=[Ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),m=[Ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,rS("linearToOutputTexel",t.outputColorSpace),aS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),o=ef(o),o=Lg(o,t),o=Ng(o,t),a=ef(a),a=Lg(a,t),a=Ng(a,t),o=Og(o),a=Og(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=y+p+o,b=y+m+a,A=Ig(i,i.VERTEX_SHADER,w),E=Ig(i,i.FRAGMENT_SHADER,b);i.attachShader(_,A),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(A)||"",z=i.getShaderInfoLog(E)||"",V=D.trim(),k=O.trim(),F=z.trim(),j=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,E);else{let P=Fg(i,A,"vertex"),ne=Fg(i,E,"fragment");He("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+P+`
`+ne)}else V!==""?Ye("WebGLProgram: Program Info Log:",V):(k===""||F==="")&&(Y=!1);Y&&(R.diagnostics={runnable:j,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(A),i.deleteShader(E),x=new bo(i,_),M=uS(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,eS)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}var AS=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nf(e),t.set(e,n)),n}},nf=class{constructor(e){this.id=AS++,this.code=e,this.usedTimes=0}};function TS(r,e,t,n,i,s){let o=new ya,a=new tf,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,L,R,D){let O=R.fog,z=D.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||V,k),j=F&&F.mapping===Da?F.image.height:null,Y=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=P!==void 0?P.length:0,ae=0;z.morphAttributes.position!==void 0&&(ae=1),z.morphAttributes.normal!==void 0&&(ae=2),z.morphAttributes.color!==void 0&&(ae=3);let Re,Ve,ze,$;if(Y){let xe=qi[Y];Re=xe.vertexShader,Ve=xe.fragmentShader}else Re=x.vertexShader,Ve=x.fragmentShader,a.update(x),ze=a.getVertexShaderID(x),$=a.getFragmentShaderID(x);let ee=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,Ce=!!x.map,ut=!!x.matcap,Se=!!F,ke=!!x.aoMap,Ke=!!x.lightMap,Be=!!x.bumpMap,W=!!x.normalMap,N=!!x.displacementMap,_t=!!x.emissiveMap,it=!!x.metalnessMap,Ge=!!x.roughnessMap,ve=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,U=x.iridescence>0,K=x.sheen>0,Q=x.transmission>0,Z=ve&&!!x.anisotropyMap,_e=C&&!!x.clearcoatMap,le=C&&!!x.clearcoatNormalMap,Pe=C&&!!x.clearcoatRoughnessMap,ye=U&&!!x.iridescenceMap,ie=U&&!!x.iridescenceThicknessMap,oe=K&&!!x.sheenColorMap,Me=K&&!!x.sheenRoughnessMap,we=!!x.specularMap,de=!!x.specularColorMap,We=!!x.specularIntensityMap,I=Q&&!!x.transmissionMap,ce=Q&&!!x.thicknessMap,re=!!x.gradientMap,fe=!!x.alphaMap,te=x.alphaTest>0,J=!!x.alphaHash,be=!!x.extensions,Oe=Pi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=r.toneMapping);let pt={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:Ve,defines:x.defines,customVertexShaderID:ze,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ms,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:ut,envMap:Se,envMapMode:Se&&F.mapping,envMapCubeUVHeight:j,aoMap:ke,lightMap:Ke,bumpMap:Be,normalMap:W,displacementMap:N,emissiveMap:_t,normalMapObjectSpace:W&&x.normalMapType===ag,normalMapTangentSpace:W&&x.normalMapType===og,metalnessMap:it,roughnessMap:Ge,anisotropy:ve,anisotropyMap:Z,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:le,clearcoatRoughnessMap:Pe,dispersion:v,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:we,specularColorMap:de,specularIntensityMap:We,transmission:Q,transmissionMap:I,thicknessMap:ce,gradientMap:re,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:J,combine:x.combine,mapUv:Ce&&g(x.map.channel),aoMapUv:ke&&g(x.aoMap.channel),lightMapUv:Ke&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:W&&g(x.normalMap.channel),displacementMapUv:N&&g(x.displacementMap.channel),emissiveMapUv:_t&&g(x.emissiveMap.channel),metalnessMapUv:it&&g(x.metalnessMap.channel),roughnessMapUv:Ge&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:we&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:I&&g(x.transmissionMap.channel),thicknessMapUv:ce&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(W||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ce||fe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&W===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(M,x),y(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function w(x){let M=d[x.type],L;if(M){let R=qi[M];L=vg.clone(R.uniforms)}else L=x.uniforms;return L}function b(x,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new ES(r,M,x,i),c.push(L),u.set(M,L)),L}function A(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:T}}function CS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function RS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Bg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,_,p,m){let y=r[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function l(h,d,g,_,p,m){let y=a(h,d,g,_,p,m);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function c(h,d,g,_,p,m){let y=a(h,d,g,_,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||RS),n.length>1&&n.sort(d||Bg),i.length>1&&i.sort(d||Bg)}function f(){for(let h=e,d=r.length;h<d;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function PS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Vg,r.set(n,[o])):i>=s.length?(o=new Vg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function IS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new gt};break;case"SpotLight":t={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function DS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var FS=0;function LS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function NS(r){let e=new IS,t=DS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,s=new $t,o=new $t;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,w=0,b=0,A=0,E=0,T=0;c.sort(LS);for(let M=0,L=c.length;M<L;M++){let R=c[M],D=R.color,O=R.intensity,z=R.distance,V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ys?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*O,f+=D.g*O,h+=D.b*O;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],O);T++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,j=t.get(R);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=k,d++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(D).multiplyScalar(O),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;let F=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,F.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=F.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=V,b++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=k,p++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let F=R.shadow,j=t.get(R);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=k,g++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(O),k.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==y||x.numPointShadows!==w||x.numSpotShadows!==b||x.numSpotMaps!==A||x.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,x.directionalLength=d,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=y,x.numPointShadows=w,x.numSpotShadows=b,x.numSpotMaps=A,x.numLightProbes=T,n.version=FS++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0,p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let w=c[m];if(w.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(w.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(w.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function kg(r){let e=new NS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function OS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new kg(r),e.set(i,[a])):s>=o.length?(a=new kg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
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
}`,VS=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],kS=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],zg=new $t,ka=new q,$d=new q;function zS(r,e,t){let n=new wa,i=new bt,s=new bt,o=new Vt,a=new bc,l=new Sc,c={},u=t.maxTextureSize,f={[lr]:Ln,[Ln]:lr,[Gi]:Gi},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:US,fragmentShader:BS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new zi;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let m=this.type;this.render=function(E,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Um&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ia);let M=r.getRenderTarget(),L=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Hi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=m!==this.type;O&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(V=>V.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,V=E.length;z<V;z++){let k=E[z],F=k.shadow;if(F===void 0){Ye("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let j=F.getFrameExtents();i.multiply(j),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,F.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||O===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===xo){if(k.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ni(i.x,i.y,{format:ys,type:Wi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Or(i.x,i.y,Di),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=Vi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un}else k.isPointLight?(F.map=new Au(i.x),F.map.depthTexture=new yc(i.x,Ii)):(F.map=new ni(i.x,i.y),F.map.depthTexture=new Or(i.x,i.y,Ii)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=Vi,this.type===Ia?(F.map.depthTexture.compareFunction=Y?bu:Mu,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un);F.camera.updateProjectionMatrix()}let P=F.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<P;ne++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,ne),r.clear();else{ne===0&&(r.setRenderTarget(F.map),r.clear());let ae=F.getViewport(ne);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),D.viewport(o)}if(k.isPointLight){let ae=F.camera,Re=F.matrix,Ve=k.distance||ae.far;Ve!==ae.far&&(ae.far=Ve,ae.updateProjectionMatrix()),ka.setFromMatrixPosition(k.matrixWorld),ae.position.copy(ka),$d.copy(ae.position),$d.add(VS[ne]),ae.up.copy(kS[ne]),ae.lookAt($d),ae.updateMatrixWorld(),Re.makeTranslation(-ka.x,-ka.y,-ka.z),zg.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),F._frustum.setFromProjectionMatrix(zg,ae.coordinateSystem,ae.reversedDepth)}else F.updateMatrices(k);n=F.getFrustum(),b(T,x,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===xo&&y(F,x),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,L,R)};function y(E,T){let x=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ni(i.x,i.y,{format:ys,type:Wi})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,x,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,x,d,_,null)}function w(E,T,x,M){let L=null,R=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)L=R;else if(L=x.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=L.uuid,O=T.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let V=z[O];V===void 0&&(V=L.clone(),z[O]=V,T.addEventListener("dispose",A)),L=V}if(L.visible=T.visible,L.wireframe=T.wireframe,M===xo?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:f[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=r.properties.get(L);D.light=x}return L}function b(E,T,x,M,L){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===xo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let O=e.update(E),z=E.material;if(Array.isArray(z)){let V=O.groups;for(let k=0,F=V.length;k<F;k++){let j=V[k],Y=z[j.materialIndex];if(Y&&Y.visible){let P=w(E,Y,M,L);E.onBeforeShadow(r,E,T,x,O,P,j),r.renderBufferDirect(x,null,O,P,E,j),E.onAfterShadow(r,E,T,x,O,P,j)}}}else if(z.visible){let V=w(E,z,M,L);E.onBeforeShadow(r,E,T,x,O,V,null),r.renderBufferDirect(x,null,O,V,E,null),E.onAfterShadow(r,E,T,x,O,V,null)}}let D=E.children;for(let O=0,z=D.length;O<z;O++)b(D[O],T,x,M,L)}function A(E){E.target.removeEventListener("dispose",A);for(let x in c){let M=c[x],L=E.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function GS(r,e){function t(){let I=!1,ce=new Vt,re=null,fe=new Vt(0,0,0,0);return{setMask:function(te){re!==te&&!I&&(r.colorMask(te,te,te,te),re=te)},setLocked:function(te){I=te},setClear:function(te,J,be,Oe,pt){pt===!0&&(te*=Oe,J*=Oe,be*=Oe),ce.set(te,J,be,Oe),fe.equals(ce)===!1&&(r.clearColor(te,J,be,Oe),fe.copy(ce))},reset:function(){I=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,ce=!1,re=null,fe=null,te=null;return{setReversed:function(J){if(ce!==J){let be=e.get("EXT_clip_control");J?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=J;let Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return ce},setTest:function(J){J?ee(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(J){re!==J&&!I&&(r.depthMask(J),re=J)},setFunc:function(J){if(ce&&(J=_g[J]),fe!==J){switch(J){case rc:r.depthFunc(r.NEVER);break;case sc:r.depthFunc(r.ALWAYS);break;case oc:r.depthFunc(r.LESS);break;case ps:r.depthFunc(r.LEQUAL);break;case ac:r.depthFunc(r.EQUAL);break;case lc:r.depthFunc(r.GEQUAL);break;case cc:r.depthFunc(r.GREATER);break;case uc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=J}},setLocked:function(J){I=J},setClear:function(J){te!==J&&(te=J,ce&&(J=1-J),r.clearDepth(J))},reset:function(){I=!1,re=null,fe=null,te=null,ce=!1}}}function i(){let I=!1,ce=null,re=null,fe=null,te=null,J=null,be=null,Oe=null,pt=null;return{setTest:function(xe){I||(xe?ee(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(xe){ce!==xe&&!I&&(r.stencilMask(xe),ce=xe)},setFunc:function(xe,Ie,et){(re!==xe||fe!==Ie||te!==et)&&(r.stencilFunc(xe,Ie,et),re=xe,fe=Ie,te=et)},setOp:function(xe,Ie,et){(J!==xe||be!==Ie||Oe!==et)&&(r.stencilOp(xe,Ie,et),J=xe,be=Ie,Oe=et)},setLocked:function(xe){I=xe},setClear:function(xe){pt!==xe&&(r.clearStencil(xe),pt=xe)},reset:function(){I=!1,ce=null,re=null,fe=null,te=null,J=null,be=null,Oe=null,pt=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,y=null,w=null,b=null,A=null,E=null,T=new gt(0,0,0),x=0,M=!1,L=null,R=null,D=null,O=null,z=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,F=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=F>=2);let Y=null,P={},ne=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Re=new Vt().fromArray(ne),Ve=new Vt().fromArray(ae);function ze(I,ce,re,fe){let te=new Uint8Array(4),J=r.createTexture();r.bindTexture(I,J),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<re;be++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ce+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return J}let $={};$[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(ps),Be(!1),W(vd),ee(r.CULL_FACE),ke(Hi);function ee(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function se(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Fe(I,ce){return f[I]!==ce?(r.bindFramebuffer(I,ce),f[I]=ce,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ce),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Le(I,ce){let re=d,fe=!1;if(I){re=h.get(ce),re===void 0&&(re=[],h.set(ce,re));let te=I.textures;if(re.length!==te.length||re[0]!==r.COLOR_ATTACHMENT0){for(let J=0,be=te.length;J<be;J++)re[J]=r.COLOR_ATTACHMENT0+J;re.length=te.length,fe=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,fe=!0);fe&&r.drawBuffers(re)}function Ce(I){return g!==I?(r.useProgram(I),g=I,!0):!1}let ut={[Lr]:r.FUNC_ADD,[Vm]:r.FUNC_SUBTRACT,[km]:r.FUNC_REVERSE_SUBTRACT};ut[zm]=r.MIN,ut[Gm]=r.MAX;let Se={[Hm]:r.ZERO,[Wm]:r.ONE,[Xm]:r.SRC_COLOR,[nc]:r.SRC_ALPHA,[Km]:r.SRC_ALPHA_SATURATE,[$m]:r.DST_COLOR,[Ym]:r.DST_ALPHA,[qm]:r.ONE_MINUS_SRC_COLOR,[ic]:r.ONE_MINUS_SRC_ALPHA,[Jm]:r.ONE_MINUS_DST_COLOR,[Zm]:r.ONE_MINUS_DST_ALPHA,[jm]:r.CONSTANT_COLOR,[Qm]:r.ONE_MINUS_CONSTANT_COLOR,[eg]:r.CONSTANT_ALPHA,[tg]:r.ONE_MINUS_CONSTANT_ALPHA};function ke(I,ce,re,fe,te,J,be,Oe,pt,xe){if(I===Hi){_===!0&&(se(r.BLEND),_=!1);return}if(_===!1&&(ee(r.BLEND),_=!0),I!==Bm){if(I!==p||xe!==M){if((m!==Lr||b!==Lr)&&(r.blendEquation(r.FUNC_ADD),m=Lr,b=Lr),xe)switch(I){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yd:r.blendFunc(r.ONE,r.ONE);break;case Md:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:He("WebGLState: Invalid blending: ",I);break}else switch(I){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Md:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",I);break}y=null,w=null,A=null,E=null,T.set(0,0,0),x=0,p=I,M=xe}return}te=te||ce,J=J||re,be=be||fe,(ce!==m||te!==b)&&(r.blendEquationSeparate(ut[ce],ut[te]),m=ce,b=te),(re!==y||fe!==w||J!==A||be!==E)&&(r.blendFuncSeparate(Se[re],Se[fe],Se[J],Se[be]),y=re,w=fe,A=J,E=be),(Oe.equals(T)===!1||pt!==x)&&(r.blendColor(Oe.r,Oe.g,Oe.b,pt),T.copy(Oe),x=pt),p=I,M=!1}function Ke(I,ce){I.side===Gi?se(r.CULL_FACE):ee(r.CULL_FACE);let re=I.side===Ln;ce&&(re=!re),Be(re),I.blending===fs&&I.transparent===!1?ke(Hi):ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let fe=I.stencilWrite;a.setTest(fe),fe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){L!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),L=I)}function W(I){I!==Nm?(ee(r.CULL_FACE),I!==R&&(I===vd?r.cullFace(r.BACK):I===Om?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),R=I}function N(I){I!==D&&(k&&r.lineWidth(I),D=I)}function _t(I,ce,re){I?(ee(r.POLYGON_OFFSET_FILL),(O!==ce||z!==re)&&(O=ce,z=re,o.getReversed()&&(ce=-ce),r.polygonOffset(ce,re))):se(r.POLYGON_OFFSET_FILL)}function it(I){I?ee(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function Ge(I){I===void 0&&(I=r.TEXTURE0+V-1),Y!==I&&(r.activeTexture(I),Y=I)}function ve(I,ce,re){re===void 0&&(Y===null?re=r.TEXTURE0+V-1:re=Y);let fe=P[re];fe===void 0&&(fe={type:void 0,texture:void 0},P[re]=fe),(fe.type!==I||fe.texture!==ce)&&(Y!==re&&(r.activeTexture(re),Y=re),r.bindTexture(I,ce||$[I]),fe.type=I,fe.texture=ce)}function C(){let I=P[Y];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function K(){try{r.texSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function Q(){try{r.texSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function le(){try{r.texStorage2D(...arguments)}catch(I){He("WebGLState:",I)}}function Pe(){try{r.texStorage3D(...arguments)}catch(I){He("WebGLState:",I)}}function ye(){try{r.texImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function ie(){try{r.texImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function oe(I){Re.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function Me(I){Ve.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function we(I,ce){let re=c.get(ce);re===void 0&&(re=new WeakMap,c.set(ce,re));let fe=re.get(I);fe===void 0&&(fe=r.getUniformBlockIndex(ce,I.name),re.set(I,fe))}function de(I,ce){let fe=c.get(ce).get(I);l.get(ce)!==fe&&(r.uniformBlockBinding(ce,fe,I.__bindingPointIndex),l.set(ce,fe))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Y=null,P={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,y=null,w=null,b=null,A=null,E=null,T=new gt(0,0,0),x=0,M=!1,L=null,R=null,D=null,O=null,z=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:se,bindFramebuffer:Fe,drawBuffers:Le,useProgram:Ce,setBlending:ke,setMaterial:Ke,setFlipSided:Be,setCullFace:W,setLineWidth:N,setPolygonOffset:_t,setScissorTest:it,activeTexture:Ge,bindTexture:ve,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:ye,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Pe,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:_e,scissor:oe,viewport:Me,reset:We}}function HS(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return d?new OffscreenCanvas(C,v):_a("canvas")}function _(C,v,U){let K=1,Q=ve(C);if((Q.width>U||Q.height>U)&&(K=U/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(K*Q.width),_e=Math.floor(K*Q.height);f===void 0&&(f=g(Z,_e));let le=v?g(Z,_e):f;return le.width=Z,le.height=_e,le.getContext("2d").drawImage(C,0,0,Z,_e),Ye("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+_e+")."),le}else return"data"in C&&Ye("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,v,U,K,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=v;if(v===r.RED&&(U===r.FLOAT&&(Z=r.R32F),U===r.HALF_FLOAT&&(Z=r.R16F),U===r.UNSIGNED_BYTE&&(Z=r.R8)),v===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.R8UI),U===r.UNSIGNED_SHORT&&(Z=r.R16UI),U===r.UNSIGNED_INT&&(Z=r.R32UI),U===r.BYTE&&(Z=r.R8I),U===r.SHORT&&(Z=r.R16I),U===r.INT&&(Z=r.R32I)),v===r.RG&&(U===r.FLOAT&&(Z=r.RG32F),U===r.HALF_FLOAT&&(Z=r.RG16F),U===r.UNSIGNED_BYTE&&(Z=r.RG8)),v===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.RG8UI),U===r.UNSIGNED_SHORT&&(Z=r.RG16UI),U===r.UNSIGNED_INT&&(Z=r.RG32UI),U===r.BYTE&&(Z=r.RG8I),U===r.SHORT&&(Z=r.RG16I),U===r.INT&&(Z=r.RG32I)),v===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),U===r.UNSIGNED_INT&&(Z=r.RGB32UI),U===r.BYTE&&(Z=r.RGB8I),U===r.SHORT&&(Z=r.RGB16I),U===r.INT&&(Z=r.RGB32I)),v===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),U===r.UNSIGNED_INT&&(Z=r.RGBA32UI),U===r.BYTE&&(Z=r.RGBA8I),U===r.SHORT&&(Z=r.RGBA16I),U===r.INT&&(Z=r.RGBA32I)),v===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),v===r.RGBA){let _e=Q?ma:dt.getTransfer(K);U===r.FLOAT&&(Z=r.RGBA32F),U===r.HALF_FLOAT&&(Z=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Z=_e===vt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(C,v){let U;return C?v===null||v===Ii||v===yo?U=r.DEPTH24_STENCIL8:v===Di?U=r.DEPTH32F_STENCIL8:v===vo&&(U=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===yo?U=r.DEPTH_COMPONENT24:v===Di?U=r.DEPTH_COMPONENT32F:v===vo&&(U=r.DEPTH_COMPONENT16),U}function A(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function E(C){let v=C.target;v.removeEventListener("dispose",E),x(v),v.isVideoTexture&&u.delete(v)}function T(C){let v=C.target;v.removeEventListener("dispose",T),L(v)}function x(C){let v=n.get(C);if(v.__webglInit===void 0)return;let U=C.source,K=h.get(U);if(K){let Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(K).length===0&&h.delete(U)}n.remove(C)}function M(C){let v=n.get(C);r.deleteTexture(v.__webglTexture);let U=C.source,K=h.get(U);delete K[v.__cacheKey],o.memory.textures--}function L(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Q=0;Q<v.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(v.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=C.textures;for(let K=0,Q=U.length;K<Q;K++){let Z=n.get(U[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(U[K])}n.remove(C)}let R=0;function D(){R=0}function O(){let C=R;return C>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function z(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){let U=n.get(C);if(C.isVideoTexture&&it(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){let K=C.image;if(K===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,C,v);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+v)}function k(C,v){let U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){$(U,C,v);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+v)}function F(C,v){let U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){$(U,C,v);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+v)}function j(C,v){let U=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){ee(U,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+v)}let Y={[hc]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[dc]:r.MIRRORED_REPEAT},P={[un]:r.NEAREST,[rg]:r.NEAREST_MIPMAP_NEAREST,[Fa]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Oc]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},ne={[lg]:r.NEVER,[fg]:r.ALWAYS,[cg]:r.LESS,[Mu]:r.LEQUAL,[ug]:r.EQUAL,[bu]:r.GEQUAL,[hg]:r.GREATER,[dg]:r.NOTEQUAL};function ae(C,v){if(v.type===Di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===Oc||v.magFilter===Fa||v.magFilter===Gr||v.minFilter===mn||v.minFilter===Oc||v.minFilter===Fa||v.minFilter===Gr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Y[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Y[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Y[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==Fa&&v.minFilter!==Gr||v.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Re(C,v){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",E));let K=v.source,Q=h.get(K);Q===void 0&&(Q={},h.set(K,Q));let Z=z(v);if(Z!==C.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[Z].usedTimes++;let _e=Q[C.__cacheKey];_e!==void 0&&(Q[C.__cacheKey].usedTimes--,_e.usedTimes===0&&M(v)),C.__cacheKey=Z,C.__webglTexture=Q[Z].texture}return U}function Ve(C,v,U){return Math.floor(Math.floor(C/U)/v)}function ze(C,v,U,K){let Z=C.updateRanges;if(Z.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,U,K,v.data);else{Z.sort((ie,oe)=>ie.start-oe.start);let _e=0;for(let ie=1;ie<Z.length;ie++){let oe=Z[_e],Me=Z[ie],we=oe.start+oe.count,de=Ve(Me.start,v.width,4),We=Ve(oe.start,v.width,4);Me.start<=we+1&&de===We&&Ve(Me.start+Me.count-1,v.width,4)===de?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++_e,Z[_e]=Me)}Z.length=_e+1;let le=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ie=0,oe=Z.length;ie<oe;ie++){let Me=Z[ie],we=Math.floor(Me.start/4),de=Math.ceil(Me.count/4),We=we%v.width,I=Math.floor(we/v.width),ce=de,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,We,I,ce,re,U,K,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function $(C,v,U){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);let Q=Re(C,v),Z=v.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+U);let _e=n.get(Z);if(Z.version!==_e.__version||Q===!0){t.activeTexture(r.TEXTURE0+U);let le=dt.getPrimaries(dt.workingColorSpace),Pe=v.colorSpace===ur?null:dt.getPrimaries(v.colorSpace),ye=v.colorSpace===ur||le===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ie=_(v.image,!1,i.maxTextureSize);ie=Ge(v,ie);let oe=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),we=w(v.internalFormat,oe,Me,v.colorSpace,v.isVideoTexture);ae(K,v);let de,We=v.mipmaps,I=v.isVideoTexture!==!0,ce=_e.__version===void 0||Q===!0,re=Z.dataReady,fe=A(v,ie);if(v.isDepthTexture)we=b(v.format===Hr,v.type),ce&&(I?t.texStorage2D(r.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,we,ie.width,ie.height,0,oe,Me,null));else if(v.isDataTexture)if(We.length>0){I&&ce&&t.texStorage2D(r.TEXTURE_2D,fe,we,We[0].width,We[0].height);for(let te=0,J=We.length;te<J;te++)de=We[te],I?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,oe,Me,de.data):t.texImage2D(r.TEXTURE_2D,te,we,de.width,de.height,0,oe,Me,de.data);v.generateMipmaps=!1}else I?(ce&&t.texStorage2D(r.TEXTURE_2D,fe,we,ie.width,ie.height),re&&ze(v,ie,oe,Me)):t.texImage2D(r.TEXTURE_2D,0,we,ie.width,ie.height,0,oe,Me,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,we,We[0].width,We[0].height,ie.depth);for(let te=0,J=We.length;te<J;te++)if(de=We[te],v.format!==_i)if(oe!==null)if(I){if(re)if(v.layerUpdates.size>0){let be=Hd(de.width,de.height,v.format,v.type);for(let Oe of v.layerUpdates){let pt=de.data.subarray(Oe*be/de.data.BYTES_PER_ELEMENT,(Oe+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Oe,de.width,de.height,1,oe,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,oe,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,we,de.width,de.height,ie.depth,0,de.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,oe,Me,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,we,de.width,de.height,ie.depth,0,oe,Me,de.data)}else{I&&ce&&t.texStorage2D(r.TEXTURE_2D,fe,we,We[0].width,We[0].height);for(let te=0,J=We.length;te<J;te++)de=We[te],v.format!==_i?oe!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,oe,de.data):t.compressedTexImage2D(r.TEXTURE_2D,te,we,de.width,de.height,0,de.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,oe,Me,de.data):t.texImage2D(r.TEXTURE_2D,te,we,de.width,de.height,0,oe,Me,de.data)}else if(v.isDataArrayTexture)if(I){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,we,ie.width,ie.height,ie.depth),re)if(v.layerUpdates.size>0){let te=Hd(ie.width,ie.height,v.format,v.type);for(let J of v.layerUpdates){let be=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,oe,Me,be)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,oe,Me,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,oe,Me,ie.data);else if(v.isData3DTexture)I?(ce&&t.texStorage3D(r.TEXTURE_3D,fe,we,ie.width,ie.height,ie.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,oe,Me,ie.data)):t.texImage3D(r.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,oe,Me,ie.data);else if(v.isFramebufferTexture){if(ce)if(I)t.texStorage2D(r.TEXTURE_2D,fe,we,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let be=0;be<fe;be++)t.texImage2D(r.TEXTURE_2D,be,we,te,J,0,oe,Me,null),te>>=1,J>>=1}}else if(We.length>0){if(I&&ce){let te=ve(We[0]);t.texStorage2D(r.TEXTURE_2D,fe,we,te.width,te.height)}for(let te=0,J=We.length;te<J;te++)de=We[te],I?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,oe,Me,de):t.texImage2D(r.TEXTURE_2D,te,we,oe,Me,de);v.generateMipmaps=!1}else if(I){if(ce){let te=ve(ie);t.texStorage2D(r.TEXTURE_2D,fe,we,te.width,te.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Me,ie)}else t.texImage2D(r.TEXTURE_2D,0,we,oe,Me,ie);p(v)&&m(K),_e.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ee(C,v,U){if(v.image.length!==6)return;let K=Re(C,v),Q=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+U);let Z=n.get(Q);if(Q.version!==Z.__version||K===!0){t.activeTexture(r.TEXTURE0+U);let _e=dt.getPrimaries(dt.workingColorSpace),le=v.colorSpace===ur?null:dt.getPrimaries(v.colorSpace),Pe=v.colorSpace===ur||_e===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!ye&&!ie?oe[J]=_(v.image[J],!0,i.maxCubemapSize):oe[J]=ie?v.image[J].image:v.image[J],oe[J]=Ge(v,oe[J]);let Me=oe[0],we=s.convert(v.format,v.colorSpace),de=s.convert(v.type),We=w(v.internalFormat,we,de,v.colorSpace),I=v.isVideoTexture!==!0,ce=Z.__version===void 0||K===!0,re=Q.dataReady,fe=A(v,Me);ae(r.TEXTURE_CUBE_MAP,v);let te;if(ye){I&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,We,Me.width,Me.height);for(let J=0;J<6;J++){te=oe[J].mipmaps;for(let be=0;be<te.length;be++){let Oe=te[be];v.format!==_i?we!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,Oe.width,Oe.height,we,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,We,Oe.width,Oe.height,0,Oe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,Oe.width,Oe.height,we,de,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,We,Oe.width,Oe.height,0,we,de,Oe.data)}}}else{if(te=v.mipmaps,I&&ce){te.length>0&&fe++;let J=ve(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,We,J.width,J.height)}for(let J=0;J<6;J++)if(ie){I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,we,de,oe[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,oe[J].width,oe[J].height,0,we,de,oe[J].data);for(let be=0;be<te.length;be++){let pt=te[be].image[J].image;I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,pt.width,pt.height,we,de,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,We,pt.width,pt.height,0,we,de,pt.data)}}else{I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,de,oe[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,we,de,oe[J]);for(let be=0;be<te.length;be++){let Oe=te[be];I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,we,de,Oe.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,We,we,de,Oe.image[J])}}}p(v)&&m(r.TEXTURE_CUBE_MAP),Z.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function se(C,v,U,K,Q,Z){let _e=s.convert(U.format,U.colorSpace),le=s.convert(U.type),Pe=w(U.internalFormat,_e,le,U.colorSpace),ye=n.get(v),ie=n.get(U);if(ie.__renderTarget=v,!ye.__hasExternalTextures){let oe=Math.max(1,v.width>>Z),Me=Math.max(1,v.height>>Z);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,Pe,oe,Me,v.depth,0,_e,le,null):t.texImage2D(Q,Z,Pe,oe,Me,0,_e,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),_t(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Q,ie.__webglTexture,0,N(v)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Q,ie.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(C,v,U){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){let K=v.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Z=b(v.stencilBuffer,Q),_e=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(v),Z,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(v),Z,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Z,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,C)}else{let K=v.textures;for(let Q=0;Q<K.length;Q++){let Z=K[Q],_e=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),Pe=w(Z.internalFormat,_e,le,Z.colorSpace);_t(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(v),Pe,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(v),Pe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(C,v,U){let K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ae(r.TEXTURE_CUBE_MAP,v.depthTexture);let ye=s.convert(v.depthTexture.format),ie=s.convert(v.depthTexture.type),oe;v.depthTexture.format===Vi?oe=r.DEPTH_COMPONENT24:v.depthTexture.format===Hr&&(oe=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,v.width,v.height,0,ye,ie,null)}}else V(v.depthTexture,0);let Z=Q.__webglTexture,_e=N(v),le=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Pe=v.depthTexture.format===Hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vi)_t(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,le,Z,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,le,Z,0);else if(v.depthTexture.format===Hr)_t(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,le,Z,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,le,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(C){let v=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=K}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)Le(v.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?Le(v.__webglFramebuffer[0],C,0):Le(v.__webglFramebuffer,C,0)}else if(U){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),Fe(v.__webglDepthbuffer[K],C,!1);else{let Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Fe(v.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(C,v,U){let K=n.get(C);v!==void 0&&se(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Ce(C)}function Se(C){let v=C.texture,U=n.get(C),K=n.get(v);C.addEventListener("dispose",T);let Q=C.textures,Z=C.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Pe=0;Pe<v.mipmaps.length;Pe++)U.__webglFramebuffer[le][Pe]=r.createFramebuffer()}else U.__webglFramebuffer[le]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)U.__webglFramebuffer[le]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(_e)for(let le=0,Pe=Q.length;le<Pe;le++){let ye=n.get(Q[le]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let Pe=Q[le];U.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[le]);let ye=s.convert(Pe.format,Pe.colorSpace),ie=s.convert(Pe.type),oe=w(Pe.internalFormat,ye,ie,Pe.colorSpace,C.isXRRenderTarget===!0),Me=N(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,U.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ae(r.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)se(U.__webglFramebuffer[le][Pe],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe);else se(U.__webglFramebuffer[le],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(v)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let le=0,Pe=Q.length;le<Pe;le++){let ye=Q[le],ie=n.get(ye),oe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,ie.__webglTexture),ae(oe,ye),se(U.__webglFramebuffer,C,ye,r.COLOR_ATTACHMENT0+le,oe,0),p(ye)&&m(oe)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),ae(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)se(U.__webglFramebuffer[Pe],C,v,r.COLOR_ATTACHMENT0,le,Pe);else se(U.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,le,0);p(v)&&m(le),t.unbindTexture()}C.depthBuffer&&Ce(C)}function ke(C){let v=C.textures;for(let U=0,K=v.length;U<K;U++){let Q=v[U];if(p(Q)){let Z=y(C),_e=n.get(Q).__webglTexture;t.bindTexture(Z,_e),m(Z),t.unbindTexture()}}}let Ke=[],Be=[];function W(C){if(C.samples>0){if(_t(C)===!1){let v=C.textures,U=C.width,K=C.height,Q=r.COLOR_BUFFER_BIT,Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(C),le=v.length>1;if(le)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let Pe=C.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let ie=n.get(v[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,U,K,0,0,U,K,Q,r.NEAREST),l===!0&&(Ke.length=0,Be.length=0,Ke.push(r.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ke.push(Z),Be.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let ie=n.get(v[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function N(C){return Math.min(i.maxSamples,C.samples)}function _t(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Ge(C,v){let U=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==ms&&U!==ur&&(dt.getTransfer(U)===vt?(K!==_i||Q!==si)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),v}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=j,this.rebindTextures=ut,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=se,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WS(r,e){function t(n,i=ur){let s,o=dt.getTransfer(i);if(n===si)return r.UNSIGNED_BYTE;if(n===Bc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Id)return r.BYTE;if(n===Dd)return r.SHORT;if(n===vo)return r.UNSIGNED_SHORT;if(n===Uc)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===Di)return r.FLOAT;if(n===Wi)return r.HALF_FLOAT;if(n===Nd)return r.ALPHA;if(n===Od)return r.RGB;if(n===_i)return r.RGBA;if(n===Vi)return r.DEPTH_COMPONENT;if(n===Hr)return r.DEPTH_STENCIL;if(n===Ud)return r.RED;if(n===kc)return r.RED_INTEGER;if(n===ys)return r.RG;if(n===zc)return r.RG_INTEGER;if(n===Gc)return r.RGBA_INTEGER;if(n===La||n===Na||n===Oa||n===Ua)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Wc||n===Xc||n===qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===jc||n===Qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yc||n===Zc)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$c)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jc)return s.COMPRESSED_R11_EAC;if(n===Kc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===jc)return s.COMPRESSED_RG11_EAC;if(n===Qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===du||n===fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===du)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pu||n===mu||n===gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pu)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===xu||n===vu||n===yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_u)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`,rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ii({vertexShader:XS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sf=class extends cr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new rf,m={},y=t.getContextAttributes(),w=null,b=null,A=[],E=[],T=new bt,x=null,M=new En;M.viewport=new Vt;let L=new En;L.viewport=new Vt;let R=[M,L],D=new Fc,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=A[$];return ee===void 0&&(ee=new go,A[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=A[$];return ee===void 0&&(ee=new go,A[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=A[$];return ee===void 0&&(ee=new go,A[$]=ee),ee.getHandSpace()};function V($){let ee=E.indexOf($.inputSource);if(ee===-1)return;let se=A[ee];se!==void 0&&(se.update($.inputSource,$.frame,c||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",F);for(let $=0;$<A.length;$++){let ee=E[$];ee!==null&&(E[$]=null,A[$].disconnect(ee))}O=null,z=null,p.reset();for(let $ in m)delete m[$];e.setRenderTarget(w),d=null,h=null,f=null,i=null,b=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Fe=null,Le=null;y.depth&&(Le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?Hr:Vi,Fe=y.stencil?yo:Ii);let Ce={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ni(h.textureWidth,h.textureHeight,{format:_i,type:si,depthTexture:new Or(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ni(d.framebufferWidth,d.framebufferHeight,{format:_i,type:si,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F($){for(let ee=0;ee<$.removed.length;ee++){let se=$.removed[ee],Fe=E.indexOf(se);Fe>=0&&(E[Fe]=null,A[Fe].disconnect(se))}for(let ee=0;ee<$.added.length;ee++){let se=$.added[ee],Fe=E.indexOf(se);if(Fe===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=E.length){E.push(se),Fe=Ce;break}else if(E[Ce]===null){E[Ce]=se,Fe=Ce;break}if(Fe===-1)break}let Le=A[Fe];Le&&Le.connect(se)}}let j=new q,Y=new q;function P($,ee,se){j.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);let Fe=j.distanceTo(Y),Le=ee.projectionMatrix.elements,Ce=se.projectionMatrix.elements,ut=Le[14]/(Le[10]-1),Se=Le[14]/(Le[10]+1),ke=(Le[9]+1)/Le[5],Ke=(Le[9]-1)/Le[5],Be=(Le[8]-1)/Le[0],W=(Ce[8]+1)/Ce[0],N=ut*Be,_t=ut*W,it=Fe/(-Be+W),Ge=it*-Be;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(it),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let ve=ut+it,C=Se+it,v=N-Ge,U=_t+(Fe-Ge),K=ke*Se/C*ve,Q=Ke*Se/C*ve;$.projectionMatrix.makePerspective(v,U,K,Q,ve,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,se=$.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(se=p.depthFar)),D.near=L.near=M.near=ee,D.far=L.far=M.far=se,(O!==D.near||z!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,z=D.far),D.layers.mask=$.layers.mask|6,M.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let Fe=$.parent,Le=D.cameras;ne(D,Fe);for(let Ce=0;Ce<Le.length;Ce++)ne(Le[Ce],Fe);Le.length===2?P(D,M,L):D.projectionMatrix.copy(M.projectionMatrix),ae($,D,Fe)};function ae($,ee,se){se===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function($){return m[$]};let Re=null;function Ve($,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){let se=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Fe=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let Se=0;Se<se.length;Se++){let ke=se[Se],Ke=null;if(d!==null)Ke=d.getViewport(ke);else{let W=f.getViewSubImage(h,ke);Ke=W.viewport,Se===0&&(e.setRenderTargetTextures(b,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(b))}let Be=R[Se];Be===void 0&&(Be=new En,Be.layers.enable(Se),Be.viewport=new Vt,R[Se]=Be),Be.matrix.fromArray(ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Se===0&&(D.matrix.copy(Be.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(Be)}let Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Se=f.getDepthInformation(se[0]);Se&&Se.isValid&&Se.texture&&p.init(Se,i.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Se=0;Se<se.length;Se++){let ke=se[Se].camera;if(ke){let Ke=m[ke];Ke||(Ke=new Aa,m[ke]=Ke);let Be=f.getCameraImage(ke);Ke.sourceTexture=Be}}}}for(let se=0;se<A.length;se++){let Fe=E[se],Le=A[se];Fe!==null&&Le!==void 0&&Le.update(Fe,ee,c||o)}Re&&Re($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let ze=new Gg;ze.setAnimationLoop(Ve),this.setAnimationLoop=function($){Re=$},this.dispose=function(){}}},ws=new gs,YS=new $t;function ZS(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,w,b){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),w=y.envMap,b=y.envMapRotation;w&&(p.envMap.value=w,ws.copy(b),ws.x*=-1,ws.y*=-1,ws.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),p.envMapRotation.value.setFromMatrix4(YS.makeRotationFromEuler(ws)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $S(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;n.uniformBlockBinding(y,b)}function c(y,w){let b=i[y.id];b===void 0&&(g(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",p));let A=w.program;n.updateUBOMapping(y,A);let E=e.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){let w=f();y.__bindingPointIndex=w;let b=r.createBuffer(),A=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=i[y.id],b=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let E=0,T=b.length;E<T;E++){let x=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,L=x.length;M<L;M++){let R=x[M];if(d(R,E,M,A)===!0){let D=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],z=0;for(let V=0;V<O.length;V++){let k=O[V],F=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,D+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,w,b,A){let E=y.value,T=w+"_"+b;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let x=A[T];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return A[T]=E,!0}else if(x.equals(E)===!1)return x.copy(E),!0}return!1}function g(y){let w=y.uniforms,b=0,A=16;for(let T=0,x=w.length;T<x;T++){let M=Array.isArray(w[T])?w[T]:[w[T]];for(let L=0,R=M.length;L<R;L++){let D=M[L],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,V=O.length;z<V;z++){let k=O[z],F=_(k),j=b%A,Y=j%F.boundary,P=j+Y;b+=Y,P!==0&&A-P<F.storage&&(b+=A-P),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=F.storage}}}let E=b%A;return E>0&&(b+=A-E),y.__size=b,y.__cache={},this}function _(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",y),w}function p(y){let w=y.target;w.removeEventListener("dispose",p);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function m(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var JS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function KS(){return Xi===null&&(Xi=new vc(JS,16,16,ys,Wi),Xi.name="DFG_LUT",Xi.minFilter=mn,Xi.magFilter=mn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Tu=class{constructor(e={}){let{canvas:t=pg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=si}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,p=new Set([Gc,zc,kc]),m=new Set([si,Ii,vo,yo,Bc,Vc]),y=new Uint32Array(4),w=new Int32Array(4),b=null,A=null,E=[],T=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,L=!1;this._outputColorSpace=ei;let R=0,D=0,O=null,z=-1,V=null,k=new Vt,F=new Vt,j=null,Y=new gt(0),P=0,ne=t.width,ae=t.height,Re=1,Ve=null,ze=null,$=new Vt(0,0,ne,ae),ee=new Vt(0,0,ne,ae),se=!1,Fe=new wa,Le=!1,Ce=!1,ut=new $t,Se=new q,ke=new Vt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function W(){return O===null?Re:1}let N=n;function _t(S,B){return t.getContext(S,B)}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",pt,!1),N===null){let B="webgl2";if(N=_t(B,S),N===null)throw _t(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw He("WebGLRenderer: "+S.message),S}let it,Ge,ve,C,v,U,K,Q,Z,_e,le,Pe,ye,ie,oe,Me,we,de,We,I,ce,re,fe;function te(){it=new sb(N),it.init(),ce=new WS(N,it),Ge=new KM(N,it,e,ce),ve=new GS(N,it),Ge.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),C=new lb(N),v=new CS,U=new HS(N,it,ve,v,Ge,ce,C),K=new rb(M),Q=new fv(N),re=new $M(N,Q),Z=new ob(N,Q,C,re),_e=new ub(N,Z,Q,re,C),de=new cb(N,Ge,U),oe=new jM(v),le=new TS(M,K,it,Ge,re,oe),Pe=new ZS(M,v),ye=new PS,ie=new OS(it),we=new ZM(M,K,ve,_e,g,l),Me=new zS(M,_e,Ge),fe=new $S(N,C,Ge,ve),We=new JM(N,it,C),I=new ab(N,it,C),C.programs=le.programs,M.capabilities=Ge,M.extensions=it,M.properties=v,M.renderLists=ye,M.shadowMap=Me,M.state=ve,M.info=C}te(),_!==si&&(x=new db(_,t.width,t.height,i,s));let J=new sf(M,N);this.xr=J,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(S){S!==void 0&&(Re=S,this.setSize(ne,ae,!1))},this.getSize=function(S){return S.set(ne,ae)},this.setSize=function(S,B,X=!0){if(J.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,ae=B,t.width=Math.floor(S*Re),t.height=Math.floor(B*Re),X===!0&&(t.style.width=S+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(ne*Re,ae*Re).floor()},this.setDrawingBufferSize=function(S,B,X){ne=S,ae=B,Re=X,t.width=Math.floor(S*X),t.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(_===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(k)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,B,X,H){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,B,X,H),ve.viewport(k.copy($).multiplyScalar(Re).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,B,X,H){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,B,X,H),ve.scissor(F.copy(ee).multiplyScalar(Re).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){ve.setScissorTest(se=S)},this.setOpaqueSort=function(S){Ve=S},this.setTransparentSort=function(S){ze=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,X=!0){let H=0;if(S){let G=!1;if(O!==null){let ue=O.texture.format;G=p.has(ue)}if(G){let ue=O.texture.type,pe=m.has(ue),he=we.getClearColor(),Ae=we.getClearAlpha(),Ee=he.r,je=he.g,rt=he.b;pe?(y[0]=Ee,y[1]=je,y[2]=rt,y[3]=Ae,N.clearBufferuiv(N.COLOR,0,y)):(w[0]=Ee,w[1]=je,w[2]=rt,w[3]=Ae,N.clearBufferiv(N.COLOR,0,w))}else H|=N.COLOR_BUFFER_BIT}B&&(H|=N.DEPTH_BUFFER_BIT),X&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),we.dispose(),ye.dispose(),ie.dispose(),v.dispose(),K.dispose(),_e.dispose(),re.dispose(),fe.dispose(),le.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ze),J.removeEventListener("sessionend",Ht),$e.stop()};function be(S){S.preventDefault(),Vd("WebGLRenderer: Context Lost."),L=!0}function Oe(){Vd("WebGLRenderer: Context Restored."),L=!1;let S=C.autoReset,B=Me.enabled,X=Me.autoUpdate,H=Me.needsUpdate,G=Me.type;te(),C.autoReset=S,Me.enabled=B,Me.autoUpdate=X,Me.needsUpdate=H,Me.type=G}function pt(S){He("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function xe(S){let B=S.target;B.removeEventListener("dispose",xe),Ie(B)}function Ie(S){et(S),v.remove(S)}function et(S){let B=v.get(S).programs;B!==void 0&&(B.forEach(function(X){le.releaseProgram(X)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,H,G,ue){B===null&&(B=Ke);let pe=G.isMesh&&G.matrixWorld.determinant()<0,he=pi(S,B,X,H,G);ve.setMaterial(H,pe);let Ae=X.index,Ee=1;if(H.wireframe===!0){if(Ae=Z.getWireframeAttribute(X),Ae===void 0)return;Ee=2}let je=X.drawRange,rt=X.attributes.position,Ne=je.start*Ee,St=(je.start+je.count)*Ee;ue!==null&&(Ne=Math.max(Ne,ue.start*Ee),St=Math.min(St,(ue.start+ue.count)*Ee)),Ae!==null?(Ne=Math.max(Ne,0),St=Math.min(St,Ae.count)):rt!=null&&(Ne=Math.max(Ne,0),St=Math.min(St,rt.count));let Wt=St-Ne;if(Wt<0||Wt===1/0)return;re.setup(G,H,he,X,Ae);let Ut,wt=We;if(Ae!==null&&(Ut=Q.get(Ae),wt=I,wt.setIndex(Ut)),G.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*W()),wt.setMode(N.LINES)):wt.setMode(N.TRIANGLES);else if(G.isLine){let bn=H.linewidth;bn===void 0&&(bn=1),ve.setLineWidth(bn*W()),G.isLineSegments?wt.setMode(N.LINES):G.isLineLoop?wt.setMode(N.LINE_LOOP):wt.setMode(N.LINE_STRIP)}else G.isPoints?wt.setMode(N.POINTS):G.isSprite&&wt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)xa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))wt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let bn=G._multiDrawStarts,De=G._multiDrawCounts,Kn=G._multiDrawCount,mt=Ae?Q.get(Ae).bytesPerElement:1,wi=v.get(H).currentProgram.getUniforms();for(let Ni=0;Ni<Kn;Ni++)wi.setValue(N,"_gl_DrawID",Ni),wt.render(bn[Ni]/mt,De[Ni])}else if(G.isInstancedMesh)wt.renderInstances(Ne,Wt,G.count);else if(X.isInstancedBufferGeometry){let bn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,bn);wt.renderInstances(Ne,Wt,De)}else wt.render(Ne,Wt)};function me(S,B,X){S.transparent===!0&&S.side===Gi&&S.forceSinglePass===!1?(S.side=Ln,S.needsUpdate=!0,yn(S,B,X),S.side=lr,S.needsUpdate=!0,yn(S,B,X),S.side=Gi):yn(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),A=ie.get(X),A.init(B),T.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();let H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ue=G.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){let he=ue[pe];me(he,X,G),H.add(he)}else me(ue,X,G),H.add(ue)}),A=T.pop(),H},this.compileAsync=function(S,B,X=null){let H=this.compile(S,B,X);return new Promise(G=>{function ue(){if(H.forEach(function(pe){v.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){G(S);return}setTimeout(ue,10)}it.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xe=null;function Ue(S){Xe&&Xe(S)}function Ze(){$e.stop()}function Ht(){$e.start()}let $e=new Gg;$e.setAnimationLoop(Ue),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(S){Xe=S,J.setAnimationLoop(S),S===null?$e.stop():$e.start()},J.addEventListener("sessionstart",Ze),J.addEventListener("sessionend",Ht),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;let X=J.enabled===!0&&J.isPresenting===!0,H=x!==null&&(O===null||X)&&x.begin(M,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,B,O),A=ie.get(S,T.length),A.init(B),T.push(A),ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(ut,Ri,B.reversedDepth),Ce=this.localClippingEnabled,Le=oe.init(this.clippingPlanes,Ce),b=ye.get(S,E.length),b.init(),E.push(b),J.enabled===!0&&J.isPresenting===!0){let pe=M.xr.getDepthSensingMesh();pe!==null&&Pt(pe,B,-1/0,M.sortObjects)}Pt(S,B,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(Ve,ze),Be=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Be&&we.addToRenderList(b,S),this.info.render.frame++,Le===!0&&oe.beginShadows();let G=A.state.shadowsArray;if(Me.render(G,S,B),Le===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){let pe=b.opaque,he=b.transmissive;if(A.setupLights(),B.isArrayCamera){let Ae=B.cameras;if(he.length>0)for(let Ee=0,je=Ae.length;Ee<je;Ee++){let rt=Ae[Ee];It(pe,he,S,rt)}Be&&we.render(S);for(let Ee=0,je=Ae.length;Ee<je;Ee++){let rt=Ae[Ee];jt(b,S,rt,rt.viewport)}}else he.length>0&&It(pe,he,S,B),Be&&we.render(S),jt(b,S,B)}O!==null&&D===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),H&&x.end(M),S.isScene===!0&&S.onAfterRender(M,S,B),re.resetDefaultState(),z=-1,V=null,T.pop(),T.length>0?(A=T[T.length-1],Le===!0&&oe.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?b=E[E.length-1]:b=null};function Pt(S,B,X,H){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Fe.intersectsSprite(S)){H&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ut);let pe=_e.update(S),he=S.material;he.visible&&b.push(S,pe,he,X,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Fe.intersectsObject(S))){let pe=_e.update(S),he=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ke.copy(pe.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(ut)),Array.isArray(he)){let Ae=pe.groups;for(let Ee=0,je=Ae.length;Ee<je;Ee++){let rt=Ae[Ee],Ne=he[rt.materialIndex];Ne&&Ne.visible&&b.push(S,pe,Ne,X,ke.z,rt)}}else he.visible&&b.push(S,pe,he,X,ke.z,null)}}let ue=S.children;for(let pe=0,he=ue.length;pe<he;pe++)Pt(ue[pe],B,X,H)}function jt(S,B,X,H){let{opaque:G,transmissive:ue,transparent:pe}=S;A.setupLightsView(X),Le===!0&&oe.setGlobalState(M.clippingPlanes,X),H&&ve.viewport(k.copy(H)),G.length>0&&Mt(G,B,X),ue.length>0&&Mt(ue,B,X),pe.length>0&&Mt(pe,B,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function It(S,B,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let Ne=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new ni(1,1,{generateMipmaps:!0,type:Ne?Wi:si,minFilter:Gr,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let ue=A.state.transmissionRenderTarget[H.id],pe=H.viewport||k;ue.setSize(pe.z*M.transmissionResolutionScale,pe.w*M.transmissionResolutionScale);let he=M.getRenderTarget(),Ae=M.getActiveCubeFace(),Ee=M.getActiveMipmapLevel();M.setRenderTarget(ue),M.getClearColor(Y),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear(),Be&&we.render(X);let je=M.toneMapping;M.toneMapping=Pi;let rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Le===!0&&oe.setGlobalState(M.clippingPlanes,H),Mt(S,X,H),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let St=0,Wt=B.length;St<Wt;St++){let Ut=B[St],{object:wt,geometry:bn,material:De,group:Kn}=Ut;if(De.side===Gi&&wt.layers.test(H.layers)){let mt=De.side;De.side=Ln,De.needsUpdate=!0,xt(wt,X,H,bn,De,Kn),De.side=mt,De.needsUpdate=!0,Ne=!0}}Ne===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}M.setRenderTarget(he,Ae,Ee),M.setClearColor(Y,P),rt!==void 0&&(H.viewport=rt),M.toneMapping=je}function Mt(S,B,X){let H=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ue=S.length;G<ue;G++){let pe=S[G],{object:he,geometry:Ae,group:Ee}=pe,je=pe.material;je.allowOverride===!0&&H!==null&&(je=H),he.layers.test(X.layers)&&xt(he,B,X,Ae,je,Ee)}}function xt(S,B,X,H,G,ue){S.onBeforeRender(M,B,X,H,G,ue),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(M,B,X,H,S,ue),G.transparent===!0&&G.side===Gi&&G.forceSinglePass===!1?(G.side=Ln,G.needsUpdate=!0,M.renderBufferDirect(X,B,H,G,S,ue),G.side=lr,G.needsUpdate=!0,M.renderBufferDirect(X,B,H,G,S,ue),G.side=Gi):M.renderBufferDirect(X,B,H,G,S,ue),S.onAfterRender(M,B,X,H,G,ue)}function yn(S,B,X){B.isScene!==!0&&(B=Ke);let H=v.get(S),G=A.state.lights,ue=A.state.shadowsArray,pe=G.state.version,he=le.getParameters(S,G.state,ue,B,X),Ae=le.getProgramCacheKey(he),Ee=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let je=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=K.get(S.envMap||H.environment,je),H.envMapRotation=H.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",xe),Ee=new Map,H.programs=Ee);let rt=Ee.get(Ae);if(rt!==void 0){if(H.currentProgram===rt&&H.lightsStateVersion===pe)return Mn(S,he),rt}else he.uniforms=le.getUniforms(S),S.onBeforeCompile(he,M),rt=le.acquireProgram(he,Ae),Ee.set(Ae,rt),H.uniforms=he.uniforms;let Ne=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=oe.uniform),Mn(S,he),H.needsLights=en(S),H.lightsStateVersion=pe,H.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=rt,H.uniformsList=null,rt}function Ct(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=bo.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Mn(S,B){let X=v.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function pi(S,B,X,H,G){B.isScene!==!0&&(B=Ke),U.resetTextureUnits();let ue=B.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,he=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ms,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ee=K.get(H.envMap||pe,Ae),je=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,rt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!X.morphAttributes.position,St=!!X.morphAttributes.normal,Wt=!!X.morphAttributes.color,Ut=Pi;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ut=M.toneMapping);let wt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bn=wt!==void 0?wt.length:0,De=v.get(H),Kn=A.state.lights;if(Le===!0&&(Ce===!0||S!==V)){let ln=S===V&&H.id===z;oe.setState(H,S,ln)}let mt=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Kn.state.version||De.outputColorSpace!==he||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Ee||H.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==je||De.vertexTangents!==rt||De.morphTargets!==Ne||De.morphNormals!==St||De.morphColors!==Wt||De.toneMapping!==Ut||De.morphTargetsCount!==bn)&&(mt=!0):(mt=!0,De.__version=H.version);let wi=De.currentProgram;mt===!0&&(wi=yn(H,B,G));let Ni=!1,is=!1,qs=!1,Et=wi.getUniforms(),fn=De.uniforms;if(ve.useProgram(wi.program)&&(Ni=!0,is=!0,qs=!0),H.id!==z&&(z=H.id,is=!0),Ni||V!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(N,"projectionMatrix",S.projectionMatrix),Et.setValue(N,"viewMatrix",S.matrixWorldInverse);let Sr=Et.map.cameraPosition;Sr!==void 0&&Sr.setValue(N,Se.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),V!==S&&(V=S,is=!0,qs=!0)}if(De.needsLights&&(Kn.state.directionalShadowMap.length>0&&Et.setValue(N,"directionalShadowMap",Kn.state.directionalShadowMap,U),Kn.state.spotShadowMap.length>0&&Et.setValue(N,"spotShadowMap",Kn.state.spotShadowMap,U),Kn.state.pointShadowMap.length>0&&Et.setValue(N,"pointShadowMap",Kn.state.pointShadowMap,U)),G.isSkinnedMesh){Et.setOptional(N,G,"bindMatrix"),Et.setOptional(N,G,"bindMatrixInverse");let ln=G.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Et.setValue(N,"boneTexture",ln.boneTexture,U))}G.isBatchedMesh&&(Et.setOptional(N,G,"batchingTexture"),Et.setValue(N,"batchingTexture",G._matricesTexture,U),Et.setOptional(N,G,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",G._indirectTexture,U),Et.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",G._colorsTexture,U));let br=X.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&de.update(G,X,wi),(is||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,Et.setValue(N,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(fn.envMapIntensity.value=B.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=KS()),is&&(Et.setValue(N,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&Qt(fn,qs),ue&&H.fog===!0&&Pe.refreshFogUniforms(fn,ue),Pe.refreshMaterialUniforms(fn,H,Re,ae,A.state.transmissionRenderTarget[S.id]),bo.upload(N,Ct(De),fn,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(bo.upload(N,Ct(De),fn,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(N,"center",G.center),Et.setValue(N,"modelViewMatrix",G.modelViewMatrix),Et.setValue(N,"normalMatrix",G.normalMatrix),Et.setValue(N,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let ln=H.uniformsGroups;for(let Sr=0,Ys=ln.length;Sr<Ys;Sr++){let Ap=ln[Sr];fe.update(Ap,wi),fe.bind(Ap,wi)}}return wi}function Qt(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function en(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,B,X){let H=v.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=B,v.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let X=v.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};let an=N.createFramebuffer();this.setRenderTarget=function(S,B=0,X=0){O=S,R=B,D=X;let H=null,G=!1,ue=!1;if(S){let he=v.get(S);if(he.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),k.copy(S.viewport),F.copy(S.scissor),j=S.scissorTest,ve.viewport(k),ve.scissor(F),ve.setScissorTest(j),z=-1;return}else if(he.__webglFramebuffer===void 0)U.setupRenderTarget(S);else if(he.__hasExternalTextures)U.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let je=S.depthTexture;if(he.__boundDepthTexture!==je){if(je!==null&&v.has(je)&&(S.width!==je.image.width||S.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(S)}}let Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);let Ee=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[B])?H=Ee[B][X]:H=Ee[B],G=!0):S.samples>0&&U.useMultisampledRTT(S)===!1?H=v.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?H=Ee[X]:H=Ee,k.copy(S.viewport),F.copy(S.scissor),j=S.scissorTest}else k.copy($).multiplyScalar(Re).floor(),F.copy(ee).multiplyScalar(Re).floor(),j=se;if(X!==0&&(H=an),ve.bindFramebuffer(N.FRAMEBUFFER,H)&&ve.drawBuffers(S,H),ve.viewport(k),ve.scissor(F),ve.setScissorTest(j),G){let he=v.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,X)}else if(ue){let he=B;for(let Ae=0;Ae<S.textures.length;Ae++){let Ee=v.get(S.textures[Ae]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ae,Ee.__webglTexture,X,he)}}else if(S!==null&&X!==0){let he=v.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,X)}z=-1},this.readRenderTargetPixels=function(S,B,X,H,G,ue,pe,he=0){if(!(S&&S.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){ve.bindFramebuffer(N.FRAMEBUFFER,Ae);try{let Ee=S.textures[he],je=Ee.format,rt=Ee.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!Ge.textureFormatReadable(je)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(rt)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-H&&X>=0&&X<=S.height-G&&N.readPixels(B,X,H,G,ce.convert(je),ce.convert(rt),ue)}finally{let Ee=O!==null?v.get(O).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,B,X,H,G,ue,pe,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae)if(B>=0&&B<=S.width-H&&X>=0&&X<=S.height-G){ve.bindFramebuffer(N.FRAMEBUFFER,Ae);let Ee=S.textures[he],je=Ee.format,rt=Ee.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!Ge.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ne),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(B,X,H,G,ce.convert(je),ce.convert(rt),0);let St=O!==null?v.get(O).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,St);let Wt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gg(N,Wt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(Ne),N.deleteSync(Wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,X=0){let H=Math.pow(2,-X),G=Math.floor(S.image.width*H),ue=Math.floor(S.image.height*H),pe=B!==null?B.x:0,he=B!==null?B.y:0;U.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,pe,he,G,ue),ve.unbindTexture()};let er=N.createFramebuffer(),Xs=N.createFramebuffer();this.copyTextureToTexture=function(S,B,X=null,H=null,G=0,ue=0){let pe,he,Ae,Ee,je,rt,Ne,St,Wt,Ut=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(X!==null)pe=X.max.x-X.min.x,he=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,je=X.min.y,rt=X.isBox3?X.min.z:0;else{let fn=Math.pow(2,-G);pe=Math.floor(Ut.width*fn),he=Math.floor(Ut.height*fn),S.isDataArrayTexture?Ae=Ut.depth:S.isData3DTexture?Ae=Math.floor(Ut.depth*fn):Ae=1,Ee=0,je=0,rt=0}H!==null?(Ne=H.x,St=H.y,Wt=H.z):(Ne=0,St=0,Wt=0);let wt=ce.convert(B.format),bn=ce.convert(B.type),De;B.isData3DTexture?(U.setTexture3D(B,0),De=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),De=N.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),De=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let Kn=N.getParameter(N.UNPACK_ROW_LENGTH),mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),wi=N.getParameter(N.UNPACK_SKIP_PIXELS),Ni=N.getParameter(N.UNPACK_SKIP_ROWS),is=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rt);let qs=S.isDataArrayTexture||S.isData3DTexture,Et=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let fn=v.get(S),br=v.get(B),ln=v.get(fn.__renderTarget),Sr=v.get(br.__renderTarget);ve.bindFramebuffer(N.READ_FRAMEBUFFER,ln.__webglFramebuffer),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Ys=0;Ys<Ae;Ys++)qs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(S).__webglTexture,G,rt+Ys),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(B).__webglTexture,ue,Wt+Ys)),N.blitFramebuffer(Ee,je,pe,he,Ne,St,pe,he,N.DEPTH_BUFFER_BIT,N.NEAREST);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||v.has(S)){let fn=v.get(S),br=v.get(B);ve.bindFramebuffer(N.READ_FRAMEBUFFER,er),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xs);for(let ln=0;ln<Ae;ln++)qs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fn.__webglTexture,G,rt+ln):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fn.__webglTexture,G),Et?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,br.__webglTexture,ue,Wt+ln):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,br.__webglTexture,ue),G!==0?N.blitFramebuffer(Ee,je,pe,he,Ne,St,pe,he,N.COLOR_BUFFER_BIT,N.NEAREST):Et?N.copyTexSubImage3D(De,ue,Ne,St,Wt+ln,Ee,je,pe,he):N.copyTexSubImage2D(De,ue,Ne,St,Ee,je,pe,he);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(De,ue,Ne,St,Wt,pe,he,Ae,wt,bn,Ut.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(De,ue,Ne,St,Wt,pe,he,Ae,wt,Ut.data):N.texSubImage3D(De,ue,Ne,St,Wt,pe,he,Ae,wt,bn,Ut):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ue,Ne,St,pe,he,wt,bn,Ut.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ue,Ne,St,Ut.width,Ut.height,wt,Ut.data):N.texSubImage2D(N.TEXTURE_2D,ue,Ne,St,pe,he,wt,bn,Ut);N.pixelStorei(N.UNPACK_ROW_LENGTH,Kn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ni),N.pixelStorei(N.UNPACK_SKIP_IMAGES,is),ue===0&&B.generateMipmaps&&N.generateMipmap(De),ve.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&U.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?U.setTextureCube(S,0):S.isData3DTexture?U.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?U.setTexture2DArray(S,0):U.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){R=0,D=0,O=null,ve.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function dr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function t_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Eo={duration:.5,overwrite:!1,delay:0},Sf,_n,Dt,vi=1e8,Tt=1/vi,ff=Math.PI*2,jS=ff/4,QS=0,n_=Math.sqrt,e1=Math.cos,t1=Math.sin,sn=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},Vu=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},wf=function(){return typeof window<"u"},Pu=function(e){return kt(e)||sn(e)},i_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,n1=/random\([^)]+\)/g,i1=/,\s*/g,Yg=/(?:-?\.?\d|\.)+/gi,Ef=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Af=/[+-]=-?[.\d]+/,r1=/[^,'"\[\]\s]+/gi,s1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Yi,pf,Tf,ai={},Lu={},r_,s_=function(e){return(Lu=Ao(e,ai))&&Cn},ku=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ya=function(e,t){return!t&&console.warn(e)},o_=function(e,t){return e&&(ai[e]=t)&&Lu&&(Lu[e]=t)||ai},Za=function(){return 0},o1={suppressEvents:!0,isStart:!0,kill:!1},Iu={suppressEvents:!0,kill:!1},a1={suppressEvents:!0},Cf={},qr=[],mf={},a_,qn={},af={},Zg=30,Du=[],Rf="",Pf=function(e){var t=e[0],n,i;if($i(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Du.length;i--&&!Du[i].targetTest(t););n=Du[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Lf(e[i],n)))||e.splice(i,1);return e},Yr=function(e){return e._gsap||Pf(yi(e))[0]._gsap},If=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():Vu(n)&&e.getAttribute&&e.getAttribute(t)||n},Nn=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Ps=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},l1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Nu=function(){var e=qr.length,t=qr.slice(0),n,i;for(mf={},qr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Df=function(e){return!!(e._initted||e._startAt||e.add)},l_=function(e,t,n,i){qr.length&&!_n&&Nu(),e.render(t,n,i||!!(_n&&t<0&&Df(e))),qr.length&&!_n&&Nu()},c_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(r1).length<2?t:sn(e)?e.trim():e},u_=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},c1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ao=function(e,t){for(var n in t)e[n]=t[n];return e},$g=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ou=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wa=function(e){var t=e.parent||Nt,n=e.keyframes?c1(Tn(e.keyframes)):li;if(Zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},u1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},h_=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},zu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},h1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gf=function(e,t,n,i){return e._startAt&&(_n?e._startAt.revert(Iu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},d1=function r(e){return!e||e._ts&&r(e.parent)},Jg=function(e){return e._repeat?To(e._tTime,e=e.duration()+e._rDelay)*e:0},To=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},Uu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gu=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},Hu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gu(e),n._dirty||As(n,e)),e},d_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Uu(e.rawTime(),t),(!t._dur||Ka(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),As(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Zi=function(e,t,n,i){return t.parent&&Zr(t),t._start=Lt((pr(n)?n:n||e!==Nt?xi(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),h_(e,t,"_first","_last",e._sort?"_start":0),_f(t)||(e._recent=t),i||d_(e,t),e._ts<0&&Hu(e,e._tTime),e},f_=function(e,t){return(ai.ScrollTrigger||ku("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},p_=function(e,t,n,i,s){if(Uf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&a_!==Yn.frame)return qr.push(e),e._lazy=[s,i],1},f1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_f=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},p1=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&f1(e)&&!(!e._initted&&_f(e))||(e._ts<0||e._dp._ts<0)&&!_f(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ka(0,e._tDur,t),u=To(l,a),e._yoyo&&u&1&&(o=1-o),u!==To(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||_n||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&p_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&gf(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zr(e,1),!n&&!_n&&(oi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},m1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Co=function(e,t,n,i){var s=e._repeat,o=Lt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Lt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Hu(e,e._tTime=e._tDur*a),e.parent&&Gu(e),n||As(e.parent,e),e},Kg=function(e){return e instanceof gn?As(e):Co(e,e._dur)},g1={_start:0,endTime:Za,totalDuration:Za},xi=function r(e,t,n){var i=e.labels,s=e._recent||g1,o=e.duration()>=vi?s.endTime(!1):e._dur,a,l,c;return sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xa=function(e,t,n){var i=pr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Xt(t[0],o,t[s+1])},$r=function(e,t){return e||e===0?t(e):t},Ka=function(e,t,n){return n<e?e:n>t?t:n},xn=function(e,t){return!sn(e)||!(t=s1.exec(e))?"":t[1]},_1=function(e,t,n){return $r(n,function(i){return Ka(e,t,i)})},xf=[].slice,m_=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Yi},x1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return sn(i)&&!t||m_(i,1)?(s=n).push.apply(s,yi(i)):n.push(i)})||n},yi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):sn(e)&&!n&&(pf||!Ro())?xf.call((t||Tf).querySelectorAll(e),0):Tn(e)?x1(e,n):m_(e)?xf.call(e,0):e?[e]:[]},vf=function(e){return e=yi(e)[0]||Ya("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yi(t,n.querySelectorAll?n:n===e?Ya("Invalid scope")||Tf.createElement("div"):e)}},g_=function(e){return e.sort(function(){return .5-Math.random()})},__=function(e){if(kt(e))return e;var t=$i(e)?e:{each:e},n=Ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return sn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,p=o[_],m,y,w,b,A,E,T,x,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,vi])[1],!M){for(T=-vi;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=o[_]=[],m=l?Math.min(M,_)*u-.5:i%M,y=M===vi?0:l?_*f/M-.5:i/M|0,T=0,x=vi,E=0;E<_;E++)w=E%M-m,b=y-(E/M|0),p[E]=A=c?Math.abs(c==="y"?b:w):n_(w*w+b*b),A>T&&(T=A),A<x&&(x=A);i==="random"&&g_(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=xn(t.amount||t.each)||0,n=n&&_<0?A_(n):n}return _=(p[h]-p.min)/p.max||0,Lt(p.b+(n?n(_):_)*p.v)+p.u}},yf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pr(n)?0:xn(n))}},x_=function(e,t){var n=Tn(e),i,s;return!n&&$i(e)&&(i=n=e.radius||vi,e.values?(e=yi(e.values),(s=!pr(e[0]))&&(i*=i)):e=yf(e.increment)),$r(t,n?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||pr(o)?u:u+xn(o)}:yf(e))},v_=function(e,t,n,i){return $r(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},v1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},y1=function(e,t){return function(n){return e(parseFloat(n))+(t||xn(n))}},M1=function(e,t,n){return M_(e,t,0,1,n)},y_=function(e,t,n){return $r(n,function(i){return e[~~t(i)]})},b1=function r(e,t,n){var i=t-e;return Tn(e)?y_(e,r(0,e.length),t):$r(n,function(s){return(i+(s-e)%i)%i+e})},S1=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?y_(e,r(0,e.length-1),t):$r(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Po=function(e){return e.replace(n1,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(i1);return v_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},M_=function(e,t,n,i,s){var o=t-e,a=i-n;return $r(s,function(l){return n+((l-e)/o*a||0)})},w1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=sn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ao(Tn(e)?[]:{},e));if(!u){for(l in t)Nf.call(a,e,l,"get",t[l]);s=function(g){return kf(g,a)||(o?e.p:e)}}}return $r(n,s)},jg=function(e,t,n){var i=e.labels,s=vi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},oi=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qr.length&&Nu(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},Ga=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&oi(e,"onInterrupt"),e},wo,b_=[],S_=function(e){if(e)if(e=!e.name&&e.default||e,wf()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Za,render:kf,add:Nf,kill:k1,modifier:V1,rawVars:0},o={targetTest:0,get:0,getSetter:Wu,aliases:{},register:0};if(Ro(),e!==i){if(qn[t])return;li(i,li(Ou(e,s),o)),Ao(i.prototype,Ao(s,Ou(e,o))),qn[i.prop=t]=i,e.targetTest&&(Du.push(i),Cf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}o_(t,i),e.register&&e.register(Cn,i,On)}else b_.push(e)},At=255,Ha={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},lf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},w_=function(e,t,n){var i=e?pr(e)?[e>>16,e>>8&At,e&At]:0:Ha.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ha[e])i=Ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Yg),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=lf(l+1/3,s,o),i[1]=lf(l,s,o),i[2]=lf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ef),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yg)||Ha.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/At,o=i[1]/At,a=i[2]/At,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},E_=function(e){var t=[],n=[],i=-1;return e.split(fr).forEach(function(s){var o=s.match(Rs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Qg=function(e,t,n){var i="",s=(e+i).match(fr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=w_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=E_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fr,"1").split(Rs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},fr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ha)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),E1=/hsl[a]?\(/,Ff=function(e){var t=e.join(" "),n;if(fr.lastIndex=0,fr.test(t))return n=E1.test(t),e[1]=Qg(e[1],n),e[0]=Qg(e[0],n,E_(e[1])),!0},$a,Yn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=r()-i,y=p===!0,w,b,A,E;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,w=A-o,(w>0||y)&&(E=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=w+(w>=s?4:s-w),b=1),y||(l=c(_)),b)for(d=0;d<a.length;d++)a[d](A,h,E,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){r_&&(!pf&&wf()&&(Yi=pf=window,Tf=Yi.document||{},ai.gsap=Cn,(Yi.gsapVersions||(Yi.gsapVersions=[])).push(Cn.version),s_(Lu||Yi.GreenSockGlobals||!Yi.gsap&&Yi||{}),b_.forEach(S_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},$a=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),$a=0,c=Za},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var w=m?function(b,A,E,T){p(b,A,E,T),f.remove(w)}:p;return f.remove(p),a[y?"unshift":"push"](w),Ro(),w},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f})(),Ro=function(){return!$a&&Yn.wake()},ct={},A1=/^[\d.\-M][\d.\-,\s]/,T1=/["']/g,C1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(T1,"").trim():+c,i=l.substr(a+1).trim();return t},R1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},P1=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[C1(t[1])]:R1(e).split(",").map(c_)):ct._CE&&A1.test(e)?ct._CE("",e):n},A_=function(e){return function(t){return 1-e(1-t)}},T_=function r(e,t){for(var n=e._first,i;n;)n instanceof gn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ts=function(e,t){return e&&(kt(e)?e:ct[e]||P1(e))||t},Is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Nn(e,function(a){ct[a]=ai[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},C_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ff*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*t1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:C_(a);return s=ff/s,l.config=function(c,u){return r(e,c,u)},l},uf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:C_(n);return i.config=function(s){return r(e,s)},i};Nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Is("Elastic",cf("in"),cf("out"),cf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Is("Circ",function(r){return-(n_(1-r*r)-1)});Is("Sine",function(r){return r===1?1:-e1(r*jS)+1});Is("Back",uf("in"),uf("out"),uf());ct.SteppedEase=ct.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((i*Ka(0,o,a)|0)+s)*n}}};Eo.ease=ct["quad.out"];Nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rf+=r+","+r+"Params,"});var Lf=function(e,t){this.id=QS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:If,this.set=t?t.getSetter:Wu},Ja=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Co(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),$a||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Co(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hu(this,n),!s._dp||s.parent||d_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),l_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?To(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Uu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Gu(this),h1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=a1);var i=_n;return _n=n,Df(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),Zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=kt(n)?n:u_,l=function(){var u=i.then;i.then=null,s&&s(),kt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ga(this)},r})();li(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var gn=(function(r){t_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zn(n.sortChildren),Nt&&Zi(n.parent||Nt,dr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&f_(dr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Xa(0,arguments,this),this},t.from=function(i,s,o){return Xa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Xa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,xi(this,o),1),this},t.call=function(i,s,o){return Zi(this,Xt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xt(i,o,xi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Wa(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Wa(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,p,m,y,w,b,A,E,T;if(this!==Nt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,b=this._start,w=this._ts,m=!w,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Lt(u%p),u===l?(_=this._repeat,h=c):(A=Lt(u/p),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=To(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),E&&_&1&&(h=c-h,T=1),_!==A&&!this._lock){var x=E&&A&1,M=x===(E&&_&1);if(_<A&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Lt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;T_(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=m1(this,Lt(a),Lt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(oi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-Tt);break}}d=g}else{d=this._last;for(var L=i<0?i:h;d;){if(g=d._prev,(d._act||L<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(L-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(L-d._start)*d._ts,s,o||_n&&Df(d)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=L?-Tt:Tt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Tt)._zTime=h>=a?1:-1,this._ts))return this._start=b,Gu(this),this.render(i,s,o);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(oi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(pr(s)||(s=xi(this,s,i)),!(i instanceof Ja)){if(Tn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(sn(i))return this.addLabel(i,s);if(kt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?Zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return sn(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&zu(this,i),i===this._recent&&(this._recent=this._last),As(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Xt.delayedCall(0,s||Za,o);return a.data="isPause",this._hasPause=1,Zi(this,a,xi(this,i))},t.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&Zr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=yi(i),l=this._first,c=pr(s),u;l;)l instanceof Xt?l1(l._targets,a)&&(c?(!Xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=xi(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Xt.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Co(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,li({startAt:{time:xi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jg(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jg(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Lt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return As(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),As(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=vi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Lt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Co(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(l_(Nt,Uu(i,Nt)),a_=Yn.frame),Yn.frame>=Zg){Zg+=$n.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&$n.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e})(Ja);li(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var I1=function(e,t,n,i,s,o,a){var l=new On(this._pt,e,t,0,1,Vf,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Po(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),h=n.match(of)||[];f=of.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ps(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=of.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Af.test(i)||m)&&(l.e=0),this._pt=l,l},Nf=function(e,t,n,i,s,o,a,l,c,u){kt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:kt(f)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=kt(f)?c?O1:I_:Bf,g;if(sn(i)&&(~i.indexOf("random(")&&(i=Po(i)),i.charAt(1)==="="&&(g=Ps(h,i)+(xn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Mf)return!isNaN(h*i)&&i!==""?(g=new On(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?B1:D_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&ku(t,i),I1.call(this,e,t,h,i,d,l||$n.stringFilter,c))},D1=function(e,t,n,i,s){if(kt(e)&&(e=qa(e,s,t,n,i)),!$i(e)||e.style&&e.nodeType||Tn(e)||i_(e))return sn(e)?qa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=qa(e[a],s,t,n,i);return o},Of=function(e,t,n,i,s,o){var a,l,c,u;if(qn[e]&&(a=new qn[e]).init(s,a.rawVars?t[e]:D1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new On(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==wo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Xr,Mf,Uf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,w=e._overwrite==="auto"&&!Sf,b=e.timeline,A,E,T,x,M,L,R,D,O,z,V,k,F;if(b&&(!h||!s)&&(s="none"),e._ease=Ts(s,Eo.ease),e._yEase=f?A_(Ts(f===!0?s:f,Eo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!b&&!!i.runBackwards,!b||h&&!i.stagger){if(D=p[0]?Yr(p[0]).harness:0,k=D&&i[D.prop],A=Ou(i,Cf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Iu:o1),_._lazy=0),o){if(Zr(e._startAt=Xt.set(p,li({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!a&&!d)&&e._startAt.revert(Iu),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=li({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:m},A),k&&(T[D.prop]=k),Zr(e._startAt=Xt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(Iu):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Zn(l)||l&&!g,E=0;E<p.length;E++){if(M=p[E],R=M._gsap||Pf(p)[E]._gsap,e._ptLookup[E]=z={},mf[R.id]&&qr.length&&Nu(),V=y===p?E:y.indexOf(M),D&&(O=new D).init(M,k||A,e,V,y)!==!1&&(e._pt=x=new On(e._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(j){z[j]=x}),O.priority&&(L=1)),!D||k)for(T in A)qn[T]&&(O=Of(T,A,e,V,M,y))?O.priority&&(L=1):z[T]=x=Nf.call(e,M,T,"get",A[T],V,y,0,i.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),w&&e._pt&&(Xr=e,Nt.killTweensOf(M,z,e.globalTime(t)),F=!e.parent,Xr=0),e._pt&&l&&(mf[R.id]=1)}L&&zf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,h&&t<=0&&b.render(vi,!0,!0)},F1=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mf=1,e.vars[t]="+=0",Uf(e,a),Mf=0,l?Ya(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=zt(n)+xn(f.e)),f.b&&(f.b=u.s+xn(f.b))},L1=function(e,t){var n=e[0]?Yr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ao({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},N1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Tn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qa=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):sn(e)&&~e.indexOf("random(")?Po(e):e},R_=Rf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",P_={};Nn(R_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return P_[r]=1});var Xt=(function(r){t_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Wa(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Nt,w=(Tn(n)||i_(n)?pr(n[0]):"length"in i)?[n]:yi(n),b,A,E,T,x,M,L,R;if(a._targets=w.length?Pf(w):Ya("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Pu(c)||Pu(u)){if(i=a.vars,b=a.timeline=new gn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:w}),b.kill(),b.parent=b._dp=dr(a),b._start=0,h||Pu(c)||Pu(u)){if(T=w.length,L=h&&__(h),$i(h))for(x in h)~R_.indexOf(x)&&(R||(R={}),R[x]=h[x]);for(A=0;A<T;A++)E=Ou(i,P_),E.stagger=0,m&&(E.yoyoEase=m),R&&Ao(E,R),M=w[A],E.duration=+qa(c,dr(a),A,M,w),E.delay=(+qa(u,dr(a),A,M,w)||0)-a._delay,!h&&T===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),b.to(M,E,L?L(A,M,w):0),b._ease=ct.none;b.duration()?c=u=0:a.timeline=0}else if(g){Wa(li(b.vars.defaults,{ease:"none"})),b._ease=Ts(g.ease||i.ease||"none");var D=0,O,z,V;if(Tn(g))g.forEach(function(k){return b.to(w,k,">")}),b.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||N1(x,g[x],E,g.easeEach);for(x in E)for(O=E[x].sort(function(k,F){return k.t-F.t}),D=0,A=0;A<O.length;A++)z=O[A],V={ease:z.e,duration:(z.t-(A?O[A-1].t:0))/100*c},V[x]=z.v,b.to(w,V,D),D+=V.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Sf&&(Xr=dr(a),Nt.killTweensOf(w),Xr=0),Zi(y,dr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Lt(y._time)&&Zn(f)&&d1(dr(a))&&y.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),p&&f_(dr(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Tt&&!u?l:i<Tt?0:i,h,d,g,_,p,m,y,w,b;if(!c)p1(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Lt(f%_),f===l?(g=this._repeat,h=c):(p=Lt(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(b=this._yEase,h=c-h),p=To(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(w&&this._yEase&&T_(w,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Lt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(p_(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!p&&(oi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&gf(this,i,s,o),oi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&gf(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Zr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(oi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){$a||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uf(this,c),u=this._ease(c/this._dur),F1(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Hu(this,0),this.parent||h_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xr&&Xr.vars.overwrite!==!0)._first||Ga(this),this.parent&&o!==this.timeline.totalDuration()&&Co(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&u1(a,l))return s==="all"&&(this._pt=0),Ga(this);for(f=this._op=this._op||[],s!=="all"&&(sn(s)&&(_={},Nn(s,function(y){return _[y]=1}),s=_),s=L1(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&zu(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ga(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Xa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Xa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Nt.killTweensOf(i,s,o)},e})(Ja);li(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nn("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new gn,t=xf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bf=function(e,t,n){return e[t]=n},I_=function(e,t,n){return e[t](n)},O1=function(e,t,n,i){return e[t](i.fp,n)},U1=function(e,t,n){return e.setAttribute(t,n)},Wu=function(e,t){return kt(e[t])?I_:Vu(e[t])&&e.setAttribute?U1:Bf},D_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},B1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Vf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},kf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},V1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},k1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?zu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},z1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},On=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||D_,this.d=l||this,this.set=c||Bf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=z1,this.m=n,this.mt=s,this.tween=i},r})();Nn(Rf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Cf[r]=1});ai.TweenMax=ai.TweenLite=Xt;ai.TimelineLite=ai.TimelineMax=gn;Nt=new gn({sortChildren:!1,defaults:Eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Ff;var Cs=[],Fu={},G1=[],e_=0,H1=0,hf=function(e){return(Fu[e]||G1).map(function(t){return t()})},bf=function(){var e=Date.now(),t=[];e-e_>2&&(hf("matchMediaInit"),Cs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),hf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),e_=e,hf("matchMedia"))},F_=(function(){function r(t,n){this.selector=n&&vf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=H1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var o=this,a=function(){var c=Dt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=vf(s)),Dt=o,f=i.apply(o,arguments),kt(f)&&o._r.push(f),Dt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Cs.length;o--;)Cs[o].id===this.id&&Cs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),W1=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$i(n)||(n={matches:n});var o=new F_(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Yi.matchMedia(n[c]),l&&(Cs.indexOf(o)<0&&Cs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bf):l.addEventListener("change",bf)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Bu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return S_(i)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=yi(e)[0]);var s=Yr(e||{}).get,o=n?u_:c_;return n==="native"&&(n=""),e&&(t?o((qn[t]&&qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=yi(e),e.length>1){var i=e.map(function(u){return Cn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=qn[t],a=Yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;wo._pt=0,f.init(e,n?u+n:u,wo,0,[e]),f.render(1,f),wo._pt&&kf(1,wo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ts(e.ease,Eo.ease)),$g(Eo,e||{})},config:function(e){return $g($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ai[a]&&Ya(t+" effect requires "+a+" plugin.")}),af[t]=function(a,l,c){return n(yi(a),li(l||{},s),c)},o&&(gn.prototype[t]=function(a,l,c){return this.add(af[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Ts(t)},parseEase:function(e,t){return arguments.length?Ts(e,t):ct},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gn(e),i,s;for(n.smoothChildTiming=Zn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=s;return Zi(Nt,n,0),n},context:function(e,t){return e?new F_(e,t):Dt},matchMedia:function(e){return new W1(e)},matchMediaRefresh:function(){return Cs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bf()},addEventListener:function(e,t){var n=Fu[e]||(Fu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:b1,wrapYoyo:S1,distribute:__,random:v_,snap:x_,normalize:M1,getUnit:xn,clamp:_1,splitColor:w_,toArray:yi,selector:vf,mapRange:M_,pipe:v1,unitize:y1,interpolate:w1,shuffle:g_},install:s_,effects:af,ticker:Yn,updateRoot:gn.updateRoot,plugins:qn,globalTimeline:Nt,core:{PropTween:On,globals:o_,Tween:Xt,Timeline:gn,Animation:Ja,getCache:Yr,_removeLinkedListItem:zu,reverting:function(){return _n},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Sf=e}}};Nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Bu[r]=Xt[r]});Yn.add(gn.updateRoot);wo=Bu.to({},{duration:0});var X1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},q1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=X1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},df=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},Nn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}q1(a,s)}}}},Cn=Bu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},df("roundProps",yf),df("modifiers"),df("snap",x_))||Bu;Xt.version=gn.version=Cn.version="3.14.2";r_=1;wf()&&Ro();var Y1=ct.Power0,Z1=ct.Power1,$1=ct.Power2,J1=ct.Power3,K1=ct.Power4,j1=ct.Linear,Q1=ct.Quad,ew=ct.Cubic,tw=ct.Quart,nw=ct.Quint,iw=ct.Strong,rw=ct.Elastic,sw=ct.Back,ow=ct.SteppedEase,aw=ct.Bounce,lw=ct.Sine,cw=ct.Expo,uw=ct.Circ;var L_,Jr,Do,Yf,Ns,hw,N_,Zf,dw=function(){return typeof window<"u"},gr={},Ls=180/Math.PI,Fo=Math.PI/180,Io=Math.atan2,O_=1e8,$f=/([A-Z])/g,fw=/(left|right|width|margin|padding|x)/i,pw=/[\s,\(]\S/,Ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_w=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},W_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},X_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vw=function(e,t,n){return e.style[t]=n},yw=function(e,t,n){return e.style.setProperty(t,n)},Mw=function(e,t,n){return e._gsap[t]=n},bw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Sw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ww=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",Jn=Ot+"Origin",Ew=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in gr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=mr(i,a)}):this.tfm[e]=o.x?o[e]:mr(i,e),e===Jn&&(this.tfm.zOrigin=o.zOrigin);else return Ji.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},q_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Aw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace($f,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zf(),(!s||!s.isStart)&&!n[Ot]&&(q_(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Y_=function(e,t){var n={target:e,props:[],revert:Aw,save:Ew};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Z_,Wf=function(e,t){var n=Jr.createElementNS?Jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jr.createElement(e);return n&&n.style?n:Jr.createElement(e)},ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace($f,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Lo(t)||t,1)||""},U_="O,Moz,ms,Ms,Webkit".split(","),Lo=function(e,t,n){var i=t||Ns,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(U_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?U_[o]:"")+e},Xf=function(){dw()&&window.document&&(L_=window,Jr=L_.document,Do=Jr.documentElement,Ns=Wf("div")||{style:{}},hw=Wf("div"),Ot=Lo(Ot),Jn=Ot+"Origin",Ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z_=!!Lo("perspective"),Zf=Cn.core.reverting,Yf=1)},B_=function(e){var t=e.ownerSVGElement,n=Wf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Do.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Do.removeChild(n),s},V_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},$_=function(e){var t,n;try{t=e.getBBox()}catch{t=B_(e),n=1}return t&&(t.width||t.height)||n||(t=B_(e)),t&&!t.width&&!t.x&&!t.y?{x:+V_(e,["x","cx","x1"])||0,y:+V_(e,["y","cy","y1"])||0,width:0,height:0}:t},J_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$_(e))},jr=function(e,t){if(t){var n=e.style,i;t in gr&&t!==Jn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace($f,"-$1").toLowerCase())):n.removeAttribute(t)}},Kr=function(e,t,n,i,s,o){var a=new On(e._pt,t,n,0,1,o?X_:W_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},k_={deg:1,rad:1,turn:1},Tw={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ns.style,l=fw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||k_[i]||k_[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&J_(e),(d||o==="%")&&(gr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],zt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Jr||!_.appendChild)&&(_=Jr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Yn.time&&!p.uncache)return zt(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[u],y?e.style[t]=y:jr(e,t)}else(d||o==="%")&&!Tw[ci(_,"display")]&&(a.position=ci(e,"position")),_===e&&(a.position="static"),_.appendChild(Ns),g=Ns[u],_.removeChild(Ns),a.position="absolute";return l&&d&&(p=Yr(_),p.time=Yn.time,p.width=_[u]),zt(h?g*s/f:g&&s?f/g*s:0)},mr=function(e,t,n,i){var s;return Yf||Xf(),t in Ji&&t!=="transform"&&(t=Ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(s=el(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qu(ci(e,Jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xu[t]&&Xu[t](e,t,n)||ci(e,t)||If(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},Cw=function(e,t,n,i){if(!n||n==="none"){var s=Lo(t,e,1),o=s&&ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var a=new On(this._pt,e.style,t,0,1,Vf),l=0,c=0,u,f,h,d,g,_,p,m,y,w,b,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ci(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ci(e,t)||i,_?e.style[t]=_:jr(e,t)),u=[n,i],Ff(u),n=u[0],i=u[1],h=n.match(Rs)||[],A=i.match(Rs)||[],A.length){for(;f=Rs.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),p.charAt(1)==="="&&(p=Ps(d,p)+b),m=parseFloat(p),w=p.substr((m+"").length),l=Rs.lastIndex-w.length,w||(w=w||$n.units[t]||b,l===i.length&&(i+=w,a.e+=w)),b!==w&&(d=Qr(e,t,_,w)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?X_:W_;return Af.test(i)&&(a.e=0),this._pt=a,a},z_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=z_[n]||n,t[1]=z_[i]||i,t.join(" ")},Pw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],gr[a]&&(l=1,a=a==="transformOrigin"?Jn:Ot),jr(n,a);l&&(jr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",el(n,1),o.uncache=1,q_(i)))}},Xu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new On(e._pt,t,n,0,0,Pw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Qa=[1,0,0,1,0,0],K_={},j_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},G_=function(e){var t=ci(e,Ot);return j_(t)?Qa:t.substr(7).match(Ef).map(zt)},Jf=function(e,t){var n=e._gsap||Yr(e),i=e.style,s=G_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qa:s):(s===Qa&&!e.offsetParent&&e!==Do&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Do.appendChild(e)),s=G_(e),l?i.display=l:jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Do.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qf=function(e,t,n,i,s,o){var a=e._gsap,l=s||Jf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],w=t.split(" "),b=parseFloat(w[0])||0,A=parseFloat(w[1])||0,E,T,x,M;n?l!==Qa&&(T=d*p-g*_)&&(x=b*(p/T)+A*(-_/T)+(_*y-p*m)/T,M=b*(-g/T)+A*(d/T)-(d*y-g*m)/T,b=x,A=M):(E=$_(e),b=E.x+(~w[0].indexOf("%")?b/100*E.width:b),A=E.y+(~(w[1]||w[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(m=b-c,y=A-u,a.xOffset=f+(m*d+y*_)-m,a.yOffset=h+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Jn]="0px 0px",o&&(Kr(o,a,"xOrigin",c,b),Kr(o,a,"yOrigin",u,A),Kr(o,a,"xOffset",f,a.xOffset),Kr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+A)},el=function(e,t){var n=e._gsap||new Lf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ci(e,Jn)||"0",u,f,h,d,g,_,p,m,y,w,b,A,E,T,x,M,L,R,D,O,z,V,k,F,j,Y,P,ne,ae,Re,Ve,ze;return u=f=h=_=p=m=y=w=b=0,d=g=1,n.svg=!!(e.getCTM&&J_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),T=Jf(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),qf(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==Qa&&(R=T[0],D=T[1],O=T[2],z=T[3],u=V=T[4],f=k=T[5],T.length===6?(d=Math.sqrt(R*R+D*D),g=Math.sqrt(z*z+O*O),_=R||D?Io(D,R)*Ls:0,y=O||z?Io(O,z)*Ls+_:0,y&&(g*=Math.abs(Math.cos(y*Fo))),n.svg&&(u-=A-(A*R+E*O),f-=E-(A*D+E*z))):(ze=T[6],Re=T[7],P=T[8],ne=T[9],ae=T[10],Ve=T[11],u=T[12],f=T[13],h=T[14],x=Io(ze,ae),p=x*Ls,x&&(M=Math.cos(-x),L=Math.sin(-x),F=V*M+P*L,j=k*M+ne*L,Y=ze*M+ae*L,P=V*-L+P*M,ne=k*-L+ne*M,ae=ze*-L+ae*M,Ve=Re*-L+Ve*M,V=F,k=j,ze=Y),x=Io(-O,ae),m=x*Ls,x&&(M=Math.cos(-x),L=Math.sin(-x),F=R*M-P*L,j=D*M-ne*L,Y=O*M-ae*L,Ve=z*L+Ve*M,R=F,D=j,O=Y),x=Io(D,R),_=x*Ls,x&&(M=Math.cos(x),L=Math.sin(x),F=R*M+D*L,j=V*M+k*L,D=D*M-R*L,k=k*M-V*L,R=F,V=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=zt(Math.sqrt(R*R+D*D+O*O)),g=zt(Math.sqrt(k*k+ze*ze)),x=Io(V,k),y=Math.abs(x)>2e-4?x*Ls:0,b=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!j_(ci(e,Ot)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=zt(d),n.scaleY=zt(g),n.rotation=zt(_)+a,n.rotationX=zt(p)+a,n.rotationY=zt(m)+a,n.skewX=y+a,n.skewY=w+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Jn]=qu(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?Dw:Z_?Q_:Iw,n.uncache=0,n},qu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gf=function(e,t,n){var i=xn(t);return zt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},Iw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Q_(e,t)},Ds="0deg",ja="0px",Fs=") ",Q_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,w=n.zOrigin,b="",A=m==="auto"&&e&&e!==1||m===!0;if(w&&(f!==Ds||u!==Ds)){var E=parseFloat(u)*Fo,T=Math.sin(E),x=Math.cos(E),M;E=parseFloat(f)*Fo,M=Math.cos(E),o=Gf(y,o,T*M*-w),a=Gf(y,a,-Math.sin(E)*-w),l=Gf(y,l,x*M*-w+w)}p!==ja&&(b+="perspective("+p+Fs),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(A||o!==ja||a!==ja||l!==ja)&&(b+=l!==ja||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fs),c!==Ds&&(b+="rotate("+c+Fs),u!==Ds&&(b+="rotateY("+u+Fs),f!==Ds&&(b+="rotateX("+f+Fs),(h!==Ds||d!==Ds)&&(b+="skew("+h+", "+d+Fs),(g!==1||_!==1)&&(b+="scale("+g+", "+_+Fs),y.style[Ot]=b||"translate(0, 0)"},Dw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,w=parseFloat(o),b=parseFloat(a),A,E,T,x,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fo,c*=Fo,A=Math.cos(l)*f,E=Math.sin(l)*f,T=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Fo,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,x*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,E*=M)),A=zt(A),E=zt(E),T=zt(T),x=zt(x)):(A=f,x=h,E=T=0),(w&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(w=Qr(d,"x",o,"px"),b=Qr(d,"y",a,"px")),(g||_||p||m)&&(w=zt(w+g-(g*A+_*T)+p),b=zt(b+_-(g*E+_*x)+m)),(i||s)&&(M=d.getBBox(),w=zt(w+i/100*M.width),b=zt(b+s/100*M.height)),M="matrix("+A+","+E+","+T+","+x+","+w+","+b+")",d.setAttribute("transform",M),y&&(d.style[Ot]=M)},Fw=function(e,t,n,i,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ls:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*O_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*O_)%o-~~(c/o)*o)),e._pt=h=new On(e._pt,t,n,i,c,mw),h.e=u,h.u="deg",e._props.push(n),h},H_=function(e,t){for(var n in t)e[n]=t[n];return e},Lw=function(e,t,n){var i=H_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=el(n,1),jr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=el(n,1),o[Ot]=c);for(l in gr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=xn(c),g=xn(u),f=d!==g?Qr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new On(e._pt,a,l,f,h-f,Hf),e._pt.u=g||0,e._props.push(l));H_(a,i)};Nn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Xu[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return mr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Kf={name:"css",register:Xf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,w,b,A,E,T,x,M;Yf||Xf(),this.styles=this.styles||Y_(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(qn[_]&&Of(_,t,n,i,e,s)))){if(d=typeof u,g=Xu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Po(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",fr.lastIndex=0,fr.test(c)||(p=xn(c),m=xn(u),m?p!==m&&(c=Qr(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],sn(c)&&~c.indexOf("random(")&&(c=Po(c)),xn(c+"")||c==="auto"||(c+=$n.units[_]||xn(mr(e,_))||""),(c+"").charAt(1)==="="&&(c=mr(e,_))):c=mr(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Ji&&(_==="autoAlpha"&&(h===1&&mr(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Kr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in gr,w){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=u,u=ci(e,"perspective"),L?e.style.perspective=L:jr(e,"perspective")}f=parseFloat(u)}if(b||(A=e._gsap,A.renderTransform&&!t.parseTransform||el(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,b=this._pt=new On(this._pt,a,Ot,0,1,A.renderTransform,A,0,-1),b.dep=1),_==="scale")this._pt=new On(this._pt,A,"scaleY",A.scaleY,(y?Ps(A.scaleY,y+f):f)-A.scaleY||0,Hf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Jn,0,a[Jn]),u=Rw(u),A.svg?qf(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Kr(this,A,"zOrigin",A.zOrigin,m),Kr(this,a,_,qu(c),qu(u)));continue}else if(_==="svgOrigin"){qf(e,u,1,E,0,this);continue}else if(_ in K_){Fw(this,A,_,h,y?Ps(h,y+u):u);continue}else if(_==="smoothOrigin"){Kr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){Lw(this,u,e);continue}}else _ in a||(_=Lo(_)||_);if(w||(f||f===0)&&(h||h===0)&&!pw.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=xn(u)||(_ in $n.units?$n.units[_]:p),p!==m&&(h=Qr(e,_,c,m)),this._pt=new On(this._pt,w?A:a,_,h,(y?Ps(h,y+f):f)-h,!w&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?xw:Hf),this._pt.u=m||0,w&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=_w):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gw);else if(_ in a)Cw.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){ku(_,u);continue}w||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}T&&zf(this)},render:function(e,t){if(t.tween._time||!Zf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mr,aliases:Ji,getSetter:function(e,t,n){var i=Ji[t];return i&&i.indexOf(",")<0&&(t=i),t in gr&&t!==Jn&&(e._gsap.x||mr(e,"x"))?n&&N_===n?t==="scale"?bw:Mw:(N_=n||{})&&(t==="scale"?Sw:ww):e.style&&!Vu(e.style[t])?vw:~t.indexOf("-")?yw:Wu(e,t)},core:{_removeProperty:jr,_getMatrix:Jf}};Cn.utils.checkPrefix=Lo;Cn.core.getStyleSaver=Y_;(function(r,e,t,n){var i=Nn(r+","+e+","+t,function(s){gr[s]=1});Nn(e,function(s){$n.units[s]="deg",K_[s]=1}),Ji[i[13]]=r+","+e,Nn(n,function(s){var o=s.split(":");Ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});Cn.registerPlugin(Kf);var Ki=Cn.registerPlugin(Kf)||Cn,YR=Ki.core.Tween;function e0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Nw(r,e,t){return e&&e0(r.prototype,e),t&&e0(r,t),r}var vn,$u,Ow,ui,es,ts,Oo,n0,Os,nl,i0,_r,Fi,r0,s0=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},o0=1,No=[],st=[],Li=[],il=Date.now,jf=function(e,t){return t},Uw=function(){var e=nl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Li),st=n,Li=i,jf=function(o,a){return t[o](a)}},vr=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},rl=function(e){return!!~i0.indexOf(e)},Bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Yu="scrollLeft",Zu="scrollTop",Qf=function(){return _r&&_r.isPressed||st.cache++},Ju=function(e,t){var n=function i(s){if(s||s===0){o0&&(ui.history.scrollRestoration="manual");var o=_r&&_r.isPressed;s=i.v=Math.round(s)||(_r&&_r.iOS?1:0),e(s),i.cacheID=st.cache,o&&jf("ss",s)}else(t||st.cache!==i.cacheID||jf("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Rn={s:Yu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ju(function(r){return arguments.length?ui.scrollTo(r,Jt.sc()):ui.pageXOffset||es[Yu]||ts[Yu]||Oo[Yu]||0})},Jt={s:Zu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Ju(function(r){return arguments.length?ui.scrollTo(Rn.sc(),r):ui.pageYOffset||es[Zu]||ts[Zu]||Oo[Zu]||0})},Vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Bw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},xr=function(e,t){var n=t.s,i=t.sc;rl(e)&&(e=es.scrollingElement||ts);var s=st.indexOf(e),o=i===Jt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Bn(e,"scroll",Qf);var a=st[s+o],l=a||(st[s+o]=Ju(vr(e,n),!0)||(rl(e)?i:Ju(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Ku=function(e,t,n){var i=e,s=e,o=il(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=il();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,p=s,m=il();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},tl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},t0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},a0=function(){nl=vn.core.globals().ScrollTrigger,nl&&nl.core&&Uw()},l0=function(e){return vn=e||s0(),!$u&&vn&&typeof document<"u"&&document.body&&(ui=window,es=document,ts=es.documentElement,Oo=es.body,i0=[ui,es,ts,Oo],Ow=vn.utils.clamp,r0=vn.core.context||function(){},Os="onpointerenter"in Oo?"pointer":"mouse",n0=Gt.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Gt.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o0=0},500),a0(),$u=1),$u};Rn.op=Jt;st.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){$u||l0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),nl||a0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,w=n.onPress,b=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,x=n.onDown,M=n.onChangeX,L=n.onChangeY,R=n.onChange,D=n.onToggleX,O=n.onToggleY,z=n.onHover,V=n.onHoverEnd,k=n.onMove,F=n.ignoreCheck,j=n.isNormalizer,Y=n.onGestureStart,P=n.onGestureEnd,ne=n.onWheel,ae=n.onEnable,Re=n.onDisable,Ve=n.onClick,ze=n.scrollSpeed,$=n.capture,ee=n.allowClicks,se=n.lockAxis,Fe=n.onLockAxis;this.target=a=Vn(a)||ts,this.vars=n,d&&(d=vn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ze=ze||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(Oo).lineHeight)||22);var Le,Ce,ut,Se,ke,Ke,Be,W=this,N=0,_t=0,it=n.passive||!u&&n.passive!==!1,Ge=xr(a,Rn),ve=xr(a,Jt),C=Ge(),v=ve(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fi[0]==="pointerdown",K=rl(a),Q=a.ownerDocument||es,Z=[0,0,0],_e=[0,0,0],le=0,Pe=function(){return le=il()},ye=function(Ie,et){return(W.event=Ie)&&d&&Bw(Ie.target,d)||et&&U&&Ie.pointerType!=="touch"||F&&F(Ie,et)},ie=function(){W._vx.reset(),W._vy.reset(),Ce.pause(),f&&f(W)},oe=function(){var Ie=W.deltaX=t0(Z),et=W.deltaY=t0(_e),me=Math.abs(Ie)>=i,Xe=Math.abs(et)>=i;R&&(me||Xe)&&R(W,Ie,et,Z,_e),me&&(A&&W.deltaX>0&&A(W),E&&W.deltaX<0&&E(W),M&&M(W),D&&W.deltaX<0!=N<0&&D(W),N=W.deltaX,Z[0]=Z[1]=Z[2]=0),Xe&&(x&&W.deltaY>0&&x(W),T&&W.deltaY<0&&T(W),L&&L(W),O&&W.deltaY<0!=_t<0&&O(W),_t=W.deltaY,_e[0]=_e[1]=_e[2]=0),(Se||ut)&&(k&&k(W),ut&&(p&&ut===1&&p(W),y&&y(W),ut=0),Se=!1),Ke&&!(Ke=!1)&&Fe&&Fe(W),ke&&(ne(W),ke=!1),Le=0},Me=function(Ie,et,me){Z[me]+=Ie,_e[me]+=et,W._vx.update(Ie),W._vy.update(et),c?Le||(Le=requestAnimationFrame(oe)):oe()},we=function(Ie,et){se&&!Be&&(W.axis=Be=Math.abs(Ie)>Math.abs(et)?"x":"y",Ke=!0),Be!=="y"&&(Z[2]+=Ie,W._vx.update(Ie,!0)),Be!=="x"&&(_e[2]+=et,W._vy.update(et,!0)),c?Le||(Le=requestAnimationFrame(oe)):oe()},de=function(Ie){if(!ye(Ie,1)){Ie=tl(Ie,u);var et=Ie.clientX,me=Ie.clientY,Xe=et-W.x,Ue=me-W.y,Ze=W.isDragging;W.x=et,W.y=me,(Ze||(Xe||Ue)&&(Math.abs(W.startX-et)>=s||Math.abs(W.startY-me)>=s))&&(ut||(ut=Ze?2:1),Ze||(W.isDragging=!0),we(Xe,Ue))}},We=W.onPress=function(xe){ye(xe,1)||xe&&xe.button||(W.axis=Be=null,Ce.pause(),W.isPressed=!0,xe=tl(xe),N=_t=0,W.startX=W.x=xe.clientX,W.startY=W.y=xe.clientY,W._vx.reset(),W._vy.reset(),Bn(j?a:Q,Fi[1],de,it,!0),W.deltaX=W.deltaY=0,w&&w(W))},I=W.onRelease=function(xe){if(!ye(xe,1)){Un(j?a:Q,Fi[1],de,!0);var Ie=!isNaN(W.y-W.startY),et=W.isDragging,me=et&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Xe=tl(xe);!me&&Ie&&(W._vx.reset(),W._vy.reset(),u&&ee&&vn.delayedCall(.08,function(){if(il()-le>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(Q.createEvent){var Ue=Q.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,ui,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Ue)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&et&&!j&&Ce.restart(!0),ut&&oe(),m&&et&&m(W),b&&b(W,me)}},ce=function(Ie){return Ie.touches&&Ie.touches.length>1&&(W.isGesturing=!0)&&Y(Ie,W.isDragging)},re=function(){return(W.isGesturing=!1)||P(W)},fe=function(Ie){if(!ye(Ie)){var et=Ge(),me=ve();Me((et-C)*ze,(me-v)*ze,1),C=et,v=me,f&&Ce.restart(!0)}},te=function(Ie){if(!ye(Ie)){Ie=tl(Ie,u),ne&&(ke=!0);var et=(Ie.deltaMode===1?l:Ie.deltaMode===2?ui.innerHeight:1)*g;Me(Ie.deltaX*et,Ie.deltaY*et,0),f&&!j&&Ce.restart(!0)}},J=function(Ie){if(!ye(Ie)){var et=Ie.clientX,me=Ie.clientY,Xe=et-W.x,Ue=me-W.y;W.x=et,W.y=me,Se=!0,f&&Ce.restart(!0),(Xe||Ue)&&we(Xe,Ue)}},be=function(Ie){W.event=Ie,z(W)},Oe=function(Ie){W.event=Ie,V(W)},pt=function(Ie){return ye(Ie)||tl(Ie,u)&&Ve(W)};Ce=W._dc=vn.delayedCall(h||.25,ie).pause(),W.deltaX=W.deltaY=0,W._vx=Ku(0,50,!0),W._vy=Ku(0,50,!0),W.scrollX=Ge,W.scrollY=ve,W.isDragging=W.isGesturing=W.isPressed=!1,r0(this),W.enable=function(xe){return W.isEnabled||(Bn(K?Q:a,"scroll",Qf),o.indexOf("scroll")>=0&&Bn(K?Q:a,"scroll",fe,it,$),o.indexOf("wheel")>=0&&Bn(a,"wheel",te,it,$),(o.indexOf("touch")>=0&&n0||o.indexOf("pointer")>=0)&&(Bn(a,Fi[0],We,it,$),Bn(Q,Fi[2],I),Bn(Q,Fi[3],I),ee&&Bn(a,"click",Pe,!0,!0),Ve&&Bn(a,"click",pt),Y&&Bn(Q,"gesturestart",ce),P&&Bn(Q,"gestureend",re),z&&Bn(a,Os+"enter",be),V&&Bn(a,Os+"leave",Oe),k&&Bn(a,Os+"move",J)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Se=ut=!1,W._vx.reset(),W._vy.reset(),C=Ge(),v=ve(),xe&&xe.type&&We(xe),ae&&ae(W)),W},W.disable=function(){W.isEnabled&&(No.filter(function(xe){return xe!==W&&rl(xe.target)}).length||Un(K?Q:a,"scroll",Qf),W.isPressed&&(W._vx.reset(),W._vy.reset(),Un(j?a:Q,Fi[1],de,!0)),Un(K?Q:a,"scroll",fe,$),Un(a,"wheel",te,$),Un(a,Fi[0],We,$),Un(Q,Fi[2],I),Un(Q,Fi[3],I),Un(a,"click",Pe,!0),Un(a,"click",pt),Un(Q,"gesturestart",ce),Un(Q,"gestureend",re),Un(a,Os+"enter",be),Un(a,Os+"leave",Oe),Un(a,Os+"move",J),W.isEnabled=W.isPressed=W.isDragging=!1,Re&&Re(W))},W.kill=W.revert=function(){W.disable();var xe=No.indexOf(W);xe>=0&&No.splice(xe,1),_r===W&&(_r=0)},No.push(W),j&&rl(a)&&(_r=W),W.enable(_)},Nw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.14.2";Gt.create=function(r){return new Gt(r)};Gt.register=l0;Gt.getAll=function(){return No.slice()};Gt.getById=function(r){return No.filter(function(e){return e.vars.id===r})[0]};s0()&&vn.registerPlugin(Gt);var Te,Vo,at,Rt,fi,yt,pp,fh,xl,hl,ol,ju,Pn,gh,ap,zn,c0,u0,ko,A0,ep,T0,kn,lp,C0,R0,ns,cp,mp,zo,gp,dl,up,tp,Qu=1,In=Date.now,np=In(),Si=0,al=0,h0=function(e,t,n){var i=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},d0=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Vw=function r(){return al&&requestAnimationFrame(r)},f0=function(){return gh=1},p0=function(){return gh=0},ji=function(e){return e},ll=function(e){return Math.round(e*1e5)/1e5||0},P0=function(){return typeof window<"u"},I0=function(){return Te||P0()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Gs=function(e){return!!~pp.indexOf(e)},D0=function(e){return(e==="Height"?gp:at["inner"+e])||fi["client"+e]||yt["client"+e]},F0=function(e){return vr(e,"getBoundingClientRect")||(Gs(e)?function(){return dh.width=at.innerWidth,dh.height=gp,dh}:function(){return yr(e)})},kw=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=vr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?D0(s):e["client"+s])||0}},zw=function(e,t){return!t||~Li.indexOf(e)?F0(e):function(){return dh}},Qi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=vr(e,n))?o()-F0(e)()[s]:Gs(e)?(fi[n]||yt[n])-D0(i):e[n]-e["offset"+i])},eh=function(e,t){for(var n=0;n<ko.length;n+=3)(!t||~t.indexOf(ko[n+1]))&&e(ko[n],ko[n+1],ko[n+2])},di=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},cl=function(e){return typeof e=="number"},Us=function(e){return typeof e=="object"},sl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ip=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Uo=Math.abs,L0="left",N0="top",_p="right",xp="bottom",Vs="width",ks="height",fl="Right",pl="Left",ml="Top",gl="Bottom",Kt="padding",Mi="margin",Ho="Width",vp="Height",on="px",bi=function(e){return at.getComputedStyle(e)},Gw=function(e){var t=bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},m0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yr=function(e,t){var n=t&&bi(e)[ap]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ph=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},O0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Hw=function(e){return function(t){return Te.utils.snap(O0(e),t)}},yp=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Ww=function(e){return function(t,n){return yp(O0(e))(t,n.direction)}},th=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},g0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ih={toggleActions:"play",anticipatePin:0},mh={top:0,left:0,center:.5,bottom:1,right:1},lh=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in mh?mh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rh=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Rt.createElement("div"),_=Gs(n)||vr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?yt:n,y=e.indexOf("start")!==-1,w=y?c:u,b="border-color:"+w+";font-size:"+f+";color:"+w+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(b+=(i===Jt?_p:xp)+":"+(o+parseFloat(h))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],ch(g,0,i,y),g},ch=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ho]=1,s["border"+a+Ho]=0,s[n.p]=t+"px",Te.set(e,s)},ot=[],hp={},vl,_0=function(){return In()-Si>34&&(vl||(vl=requestAnimationFrame(Mr)))},Bo=function(){(!kn||!kn.isPressed||kn.startX>yt.clientWidth)&&(st.cache++,kn?vl||(vl=requestAnimationFrame(Mr)):Mr(),Si||Ws("scrollStart"),Si=In())},rp=function(){R0=at.innerWidth,C0=at.innerHeight},ul=function(e){st.cache++,(e===!0||!Pn&&!T0&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!lp||R0!==at.innerWidth||Math.abs(at.innerHeight-C0)>at.innerHeight*.25))&&fh.restart(!0)},Hs={},Xw=[],U0=function r(){return hn(tt,"scrollEnd",r)||Bs(!0)},Ws=function(e){return Hs[e]&&Hs[e].map(function(t){return t()})||Xw},hi=[],B0=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},V0=function(){return st.forEach(function(e){return Dn(e)&&++e.cacheID&&(e.rec=e())})},Mp=function(e,t){var n;for(zn=0;zn<ot.length;zn++)n=ot[zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));dl=!0,t&&B0(t),t||Ws("revert")},k0=function(e,t){st.cache++,(t||!Gn)&&st.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(at.history.scrollRestoration=mp=e)},Gn,zs=0,x0,qw=function(){if(x0!==zs){var e=x0=zs;requestAnimationFrame(function(){return e===zs&&Bs(!0)})}},z0=function(){yt.appendChild(zo),gp=!kn&&zo.offsetHeight||at.innerHeight,yt.removeChild(zo)},v0=function(e){return xl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Bs=function(e,t){if(fi=Rt.documentElement,yt=Rt.body,pp=[at,Rt,fi,yt],Si&&!e&&!dl){dn(tt,"scrollEnd",U0);return}z0(),Gn=tt.isRefreshing=!0,dl||V0();var n=Ws("refreshInit");A0&&tt.sort(),t||Mp(),st.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),dl=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),up=1,v0(!0),ot.forEach(function(i){var s=Qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),v0(!1),up=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),k0(mp,1),fh.pause(),zs++,Gn=2,Mr(2),ot.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=tt.isRefreshing=!1,Ws("refresh")},dp=0,uh=1,_l,Mr=function(e){if(e===2||!Gn&&!dl){tt.isUpdating=!0,_l&&_l.update(0);var t=ot.length,n=In(),i=n-np>=50,s=t&&ot[0].scroll();if(uh=dp>s?-1:1,Gn||(dp=s),i&&(Si&&!gh&&n-Si>200&&(Si=0,Ws("scrollEnd")),ol=np,np=n),uh<0){for(zn=t;zn-- >0;)ot[zn]&&ot[zn].update(0,i);uh=1}else for(zn=0;zn<t;zn++)ot[zn]&&ot[zn].update(0,i);tt.isUpdating=!1}vl=0},fp=[L0,N0,xp,_p,Mi+gl,Mi+fl,Mi+ml,Mi+pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hh=fp.concat([Vs,ks,"boxSizing","max"+Ho,"max"+vp,"position",Mi,Kt,Kt+ml,Kt+fl,Kt+gl,Kt+pl]),Yw=function(e,t,n){Go(n);var i=e._gsap;if(i.spacerIsNative)Go(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},sp=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=fp.length,o=t.style,a=e.style,l;s--;)l=fp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[xp]=a[_p]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vs]=ph(e,Rn)+on,o[ks]=ph(e,Jt)+on,o[Kt]=a[Mi]=a[N0]=a[L0]="0",Go(i),a[Vs]=a["max"+Ho]=n[Vs],a[ks]=a["max"+vp]=n[ks],a[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Zw=/([A-Z])/g,Go=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Zw,"-$1").toLowerCase())}},sh=function(e){for(var t=hh.length,n=e.style,i=[],s=0;s<t;s++)i.push(hh[s],n[hh[s]]);return i.t=e,i},$w=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},dh={left:0,top:0},y0=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){Dn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?lh("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),cl(e))d&&(e=Te.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&ch(a,n,i,!0);else{Dn(t)&&(t=t(l));var w=(e||"0").split(" "),b,A,E,T;y=Vn(t,l)||yt,b=yr(y)||{},(!b||!b.left&&!b.top)&&bi(y).display==="none"&&(T=y.style.display,y.style.display="block",b=yr(y),T?y.style.display=T:y.style.removeProperty("display")),A=lh(w[0],b[i.d]),E=lh(w[1]||"0",n),e=b[i.p]-c[i.p]-u+A+s-E,a&&ch(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var x=e+n,M=o._isStart;p="scroll"+i.d2,ch(o,x,i,M&&x>20||!M&&(f?Math.max(yt[p],fi[p]):o.parentNode[p])<=x+1),f&&(c=yr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+on))}return d&&y&&(p=yr(y),d.seek(h),m=yr(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Jw=/(webkit|moz|length|cssText|inset)/i,M0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=bi(e);for(o in a)!+o&&!Jw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},G0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},oh=function(e,t,n){var i={};i[t.p]="+="+n,Te.set(e,i)},b0=function(e,t){var n=xr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=G0(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Mr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Te.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",n.wheelHandler),tt.isTouch&&dn(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){Vo||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),cp(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!al){this.update=this.refresh=this.kill=ji;return}n=m0(di(n)||cl(n)||n.nodeType?{trigger:n}:n,ih);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,w=s.once,b=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,M=s.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Jt,R=!f&&f!==0,D=Vn(n.scroller||at),O=Te.core.getCache(D),z=Gs(D),V=("pinType"in n?n.pinType:vr(D,"pinType")||z&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=R&&n.toggleActions.split(" "),j="markers"in n?n.markers:ih.markers,Y=z?0:parseFloat(bi(D)["border"+L.p2+Ho])||0,P=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ae=kw(D,z,L),Re=zw(D,z),Ve=0,ze=0,$=0,ee=xr(D,L),se,Fe,Le,Ce,ut,Se,ke,Ke,Be,W,N,_t,it,Ge,ve,C,v,U,K,Q,Z,_e,le,Pe,ye,ie,oe,Me,we,de,We,I,ce,re,fe,te,J,be,Oe;if(P._startClamp=P._endClamp=!1,P._dir=L,p*=45,P.scroller=D,P.scroll=T?T.time.bind(T):ee,Ce=ee(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(A0=1,n.refreshPriority===-9999&&(_l=P)),O.tweenScroll=O.tweenScroll||{top:b0(D,Jt),left:b0(D,Rn)},P.tweenTo=se=O.tweenScroll[L.p],P.scrubDuration=function(me){ce=cl(me)&&me,ce?I?I.duration(me):I=Te.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return m&&m(P)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),de=0,l||(l=i.vars.id)),b&&((!Us(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in yt.style&&Te.set(z?[yt,fi]:D,{scrollBehavior:"auto"}),st.forEach(function(me){return Dn(me)&&me.target===(z?Rt.scrollingElement||fi:D)&&(me.smooth=!1)}),Le=Dn(b.snapTo)?b.snapTo:b.snapTo==="labels"?Hw(i):b.snapTo==="labelsDirectional"?Ww(i):b.directional!==!1?function(me,Xe){return yp(b.snapTo)(me,In()-ze<500?0:Xe.direction)}:Te.utils.snap(b.snapTo),re=b.duration||{min:.1,max:2},re=Us(re)?hl(re.min,re.max):hl(re,re),fe=Te.delayedCall(b.delay||ce/2||.1,function(){var me=ee(),Xe=In()-ze<500,Ue=se.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!Ue&&!gh&&Ve!==me){var Ze=(me-Se)/Ge,Ht=i&&!R?i.totalProgress():Ze,$e=Xe?0:(Ht-We)/(In()-ol)*1e3||0,Pt=Te.utils.clamp(-Ze,1-Ze,Uo($e/2)*$e/.185),jt=Ze+(b.inertia===!1?0:Pt),It,Mt,xt=b,yn=xt.onStart,Ct=xt.onInterrupt,Mn=xt.onComplete;if(It=Le(jt,P),cl(It)||(It=jt),Mt=Math.max(0,Math.round(Se+It*Ge)),me<=ke&&me>=Se&&Mt!==me){if(Ue&&!Ue._initted&&Ue.data<=Uo(Mt-me))return;b.inertia===!1&&(Pt=It-Ze),se(Mt,{duration:re(Uo(Math.max(Uo(jt-Ht),Uo(It-Ht))*.185/$e/.05||0)),ease:b.ease||"power3",data:Uo(Mt-me),onInterrupt:function(){return fe.restart(!0)&&Ct&&Ct(P)},onComplete:function(){P.update(),Ve=ee(),i&&!R&&(I?I.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),de=We=i&&!R?i.totalProgress():P.progress,y&&y(P),Mn&&Mn(P)}},me,Pt*Ge,Mt-me-Pt*Ge),yn&&yn(P,se.tween)}}else P.isActive&&Ve!==me&&fe.restart(!0)}).pause()),l&&(hp[l]=P),h=P.trigger=Vn(h||d!==!0&&d),Oe=h&&h._gsap&&h._gsap.stRevert,Oe&&(Oe=Oe(P)),d=d===!0?h:Vn(d),di(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Mi||(g=!g&&d.parentNode&&d.parentNode.style&&bi(d.parentNode).display==="flex"?!1:Kt),P.pin=d,Fe=Te.core.getCache(d),Fe.spacer?ve=Fe.pinState:(E&&(E=Vn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Fe.spacerIsNative=!!E,E&&(Fe.spacerState=sh(E))),Fe.spacer=U=E||Rt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),Fe.pinState=ve=sh(d)),n.force3D!==!1&&Te.set(d,{force3D:!0}),P.spacer=U=Fe.spacer,we=bi(d),Pe=we[g+L.os2],Q=Te.getProperty(d),Z=Te.quickSetter(d,L.a,on),sp(d,U,we),v=sh(d)),j){_t=Us(j)?m0(j,g0):g0,W=rh("scroller-start",l,D,L,_t,0),N=rh("scroller-end",l,D,L,_t,0,W),K=W["offset"+L.op.d2];var pt=Vn(vr(D,"content")||D);Ke=this.markerStart=rh("start",l,pt,L,_t,K,0,T),Be=this.markerEnd=rh("end",l,pt,L,_t,K,0,T),T&&(be=Te.quickSetter([Ke,Be],L.a,on)),!V&&!(Li.length&&vr(D,"fixedMarkers")===!0)&&(Gw(z?yt:D),Te.set([W,N],{force3D:!0}),ie=Te.quickSetter(W,L.a,on),Me=Te.quickSetter(N,L.a,on))}if(T){var xe=T.vars.onUpdate,Ie=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),xe&&xe.apply(T,Ie||[])})}if(P.previous=function(){return ot[ot.indexOf(P)-1]},P.next=function(){return ot[ot.indexOf(P)+1]},P.revert=function(me,Xe){if(!Xe)return P.kill(!0);var Ue=me!==!1||!P.enabled,Ze=Pn;Ue!==P.isReverted&&(Ue&&(te=Math.max(ee(),P.scroll.rec||0),$=P.progress,J=i&&i.progress()),Ke&&[Ke,Be,W,N].forEach(function(Ht){return Ht.style.display=Ue?"none":"block"}),Ue&&(Pn=P,P.update(Ue)),d&&(!A||!P.isActive)&&(Ue?Yw(d,U,ve):sp(d,U,bi(d),ye)),Ue||P.update(Ue),Pn=Ze,P.isReverted=Ue)},P.refresh=function(me,Xe,Ue,Ze){if(!((Pn||!P.enabled)&&!Xe)){if(d&&me&&Si){dn(r,"scrollEnd",U0);return}!Gn&&ne&&ne(P),Pn=P,se.tween&&!Ue&&(se.tween.kill(),se.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ht=ae(),$e=Re(),Pt=T?T.duration():Qi(D,L),jt=Ge<=.01||!Ge,It=0,Mt=Ze||0,xt=Us(Ue)?Ue.end:n.end,yn=n.endTrigger||h,Ct=Us(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Mn=P.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,P),pi=h&&Math.max(0,ot.indexOf(P))||0,Qt=pi,en,an,er,Xs,S,B,X,H,G,ue,pe,he,Ae;for(j&&Us(Ue)&&(he=Te.getProperty(W,L.p),Ae=Te.getProperty(N,L.p));Qt-- >0;)B=ot[Qt],B.end||B.refresh(0,1)||(Pn=P),X=B.pin,X&&(X===h||X===d||X===Mn)&&!B.isReverted&&(ue||(ue=[]),ue.unshift(B),B.revert(!0,!0)),B!==ot[Qt]&&(pi--,Qt--);for(Dn(Ct)&&(Ct=Ct(P)),Ct=h0(Ct,"start",P),Se=y0(Ct,h,Ht,L,ee(),Ke,W,P,$e,Y,V,Pt,T,P._startClamp&&"_startClamp")||(d?-.001:0),Dn(xt)&&(xt=xt(P)),di(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(di(Ct)?Ct.split(" ")[0]:"")+xt:(It=lh(xt.substr(2),Ht),xt=di(Ct)?Ct:(T?Te.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Se):Se)+It,yn=h)),xt=h0(xt,"end",P),ke=Math.max(Se,y0(xt||(yn?"100% 0":Pt),yn,Ht,L,ee()+It,Be,N,P,$e,Y,V,Pt,T,P._endClamp&&"_endClamp"))||-.001,It=0,Qt=pi;Qt--;)B=ot[Qt]||{},X=B.pin,X&&B.start-B._pinPush<=Se&&!T&&B.end>0&&(en=B.end-(P._startClamp?Math.max(0,B.start):B.start),(X===h&&B.start-B._pinPush<Se||X===Mn)&&isNaN(Ct)&&(It+=en*(1-B.progress)),X===d&&(Mt+=en));if(Se+=It,ke+=It,P._startClamp&&(P._startClamp+=It),P._endClamp&&!Gn&&(P._endClamp=ke||-.001,ke=Math.min(ke,Qi(D,L))),Ge=ke-Se||(Se-=.01)&&.001,jt&&($=Te.utils.clamp(0,1,Te.utils.normalize(Se,ke,te))),P._pinPush=Mt,Ke&&It&&(en={},en[L.a]="+="+It,Mn&&(en[L.p]="-="+ee()),Te.set([Ke,Be],en)),d&&!(up&&P.end>=Qi(D,L)))en=bi(d),Xs=L===Jt,er=ee(),_e=parseFloat(Q(L.a))+Mt,!Pt&&ke>1&&(pe=(z?Rt.scrollingElement||fi:D).style,pe={style:pe,value:pe["overflow"+L.a.toUpperCase()]},z&&bi(yt)["overflow"+L.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+L.a.toUpperCase()]="scroll")),sp(d,U,en),v=sh(d),an=yr(d,!0),H=V&&xr(D,Xs?Rn:Jt)(),g?(ye=[g+L.os2,Ge+Mt+on],ye.t=U,Qt=g===Kt?ph(d,L)+Ge+Mt:0,Qt&&(ye.push(L.d,Qt+on),U.style.flexBasis!=="auto"&&(U.style.flexBasis=Qt+on)),Go(ye),Mn&&ot.forEach(function(Ee){Ee.pin===Mn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),V&&ee(te)):(Qt=ph(d,L),Qt&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=Qt+on)),V&&(S={top:an.top+(Xs?er-Se:H)+on,left:an.left+(Xs?H:er-Se)+on,boxSizing:"border-box",position:"fixed"},S[Vs]=S["max"+Ho]=Math.ceil(an.width)+on,S[ks]=S["max"+vp]=Math.ceil(an.height)+on,S[Mi]=S[Mi+ml]=S[Mi+fl]=S[Mi+gl]=S[Mi+pl]="0",S[Kt]=en[Kt],S[Kt+ml]=en[Kt+ml],S[Kt+fl]=en[Kt+fl],S[Kt+gl]=en[Kt+gl],S[Kt+pl]=en[Kt+pl],C=$w(ve,S,A),Gn&&ee(0)),i?(G=i._initted,ep(1),i.render(i.duration(),!0,!0),le=Q(L.a)-_e+Ge+Mt,oe=Math.abs(Ge-le)>1,V&&oe&&C.splice(C.length-2,2),i.render(0,!0,!0),G||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ep(0)):le=Ge,pe&&(pe.value?pe.style["overflow"+L.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+L.a));else if(h&&ee()&&!T)for(an=h.parentNode;an&&an!==yt;)an._pinOffset&&(Se-=an._pinOffset,ke-=an._pinOffset),an=an.parentNode;ue&&ue.forEach(function(Ee){return Ee.revert(!1,!0)}),P.start=Se,P.end=ke,Ce=ut=Gn?te:ee(),!T&&!Gn&&(Ce<te&&ee(te),P.scroll.rec=0),P.revert(!1,!0),ze=In(),fe&&(Ve=-1,fe.restart(!0)),Pn=0,i&&R&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(jt||$!==P.progress||T||_||i&&!i._initted)&&(i&&!R&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Se<-.001&&!$?Te.utils.normalize(Se,ke,0):$,!0),P.progress=jt||(Ce-Se)/Ge===$?0:$),d&&g&&(U._pinOffset=Math.round(P.progress*le)),I&&I.invalidate(),isNaN(he)||(he-=Te.getProperty(W,L.p),Ae-=Te.getProperty(N,L.p),oh(W,L,he),oh(Ke,L,he-(Ze||0)),oh(N,L,Ae),oh(Be,L,Ae-(Ze||0))),jt&&!Gn&&P.update(),u&&!Gn&&!it&&(it=!0,u(P),it=!1)}},P.getVelocity=function(){return(ee()-ut)/(In()-ol)*1e3||0},P.endAnimation=function(){sl(P.callbackAnimation),i&&(I?I.progress(1):i.paused()?R||sl(i,P.direction<0,1):sl(i,i.reversed()))},P.labelToScroll=function(me){return i&&i.labels&&(Se||P.refresh()||Se)+i.labels[me]/i.duration()*Ge||0},P.getTrailing=function(me){var Xe=ot.indexOf(P),Ue=P.direction>0?ot.slice(0,Xe).reverse():ot.slice(Xe+1);return(di(me)?Ue.filter(function(Ze){return Ze.vars.preventOverlaps===me}):Ue).filter(function(Ze){return P.direction>0?Ze.end<=Se:Ze.start>=ke})},P.update=function(me,Xe,Ue){if(!(T&&!Ue&&!me)){var Ze=Gn===!0?te:P.scroll(),Ht=me?0:(Ze-Se)/Ge,$e=Ht<0?0:Ht>1?1:Ht||0,Pt=P.progress,jt,It,Mt,xt,yn,Ct,Mn,pi;if(Xe&&(ut=Ce,Ce=T?ee():Ze,b&&(We=de,de=i&&!R?i.totalProgress():$e)),p&&d&&!Pn&&!Qu&&Si&&(!$e&&Se<Ze+(Ze-ut)/(In()-ol)*p?$e=1e-4:$e===1&&ke>Ze+(Ze-ut)/(In()-ol)*p&&($e=.9999)),$e!==Pt&&P.enabled){if(jt=P.isActive=!!$e&&$e<1,It=!!Pt&&Pt<1,Ct=jt!==It,yn=Ct||!!$e!=!!Pt,P.direction=$e>Pt?1:-1,P.progress=$e,yn&&!Pn&&(Mt=$e&&!Pt?0:$e===1?1:Pt===1?2:3,R&&(xt=!Ct&&F[Mt+1]!=="none"&&F[Mt+1]||F[Mt],pi=i&&(xt==="complete"||xt==="reset"||xt in i))),M&&(Ct||pi)&&(pi||f||!i)&&(Dn(M)?M(P):P.getTrailing(M).forEach(function(er){return er.endAnimation()})),R||(I&&!Pn&&!Qu?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",$e,i._tTime/i._tDur):(I.vars.totalProgress=$e,I.invalidate().restart())):i&&i.totalProgress($e,!!(Pn&&(ze||me)))),d){if(me&&g&&(U.style[g+L.os2]=Pe),!V)Z(ll(_e+le*$e));else if(yn){if(Mn=!me&&$e>Pt&&ke+1>Ze&&Ze+1>=Qi(D,L),A)if(!me&&(jt||Mn)){var Qt=yr(d,!0),en=Ze-Se;M0(d,yt,Qt.top+(L===Jt?en:0)+on,Qt.left+(L===Jt?0:en)+on)}else M0(d,U);Go(jt||Mn?C:v),oe&&$e<1&&jt||Z(_e+($e===1&&!Mn?le:0))}}b&&!se.tween&&!Pn&&!Qu&&fe.restart(!0),a&&(Ct||w&&$e&&($e<1||!tp))&&xl(a.targets).forEach(function(er){return er.classList[jt||w?"add":"remove"](a.className)}),o&&!R&&!me&&o(P),yn&&!Pn?(R&&(pi&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),o&&o(P)),(Ct||!tp)&&(c&&Ct&&ip(P,c),k[Mt]&&ip(P,k[Mt]),w&&($e===1?P.kill(!1,1):k[Mt]=0),Ct||(Mt=$e===1?1:3,k[Mt]&&ip(P,k[Mt]))),x&&!jt&&Math.abs(P.getVelocity())>(cl(x)?x:2500)&&(sl(P.callbackAnimation),I?I.progress(1):sl(i,xt==="reverse"?1:!$e,1))):R&&o&&!Pn&&o(P)}if(Me){var an=T?Ze/T.duration()*(T._caScrollDist||0):Ze;ie(an+(W._isFlipped?1:0)),Me(an)}be&&be(-Ze/T.duration()*(T._caScrollDist||0))}},P.enable=function(me,Xe){P.enabled||(P.enabled=!0,dn(D,"resize",ul),z||dn(D,"scroll",Bo),ne&&dn(r,"refreshInit",ne),me!==!1&&(P.progress=$=0,Ce=ut=Ve=ee()),Xe!==!1&&P.refresh())},P.getTween=function(me){return me&&se?se.tween:I},P.setPositions=function(me,Xe,Ue,Ze){if(T){var Ht=T.scrollTrigger,$e=T.duration(),Pt=Ht.end-Ht.start;me=Ht.start+Pt*me/$e,Xe=Ht.start+Pt*Xe/$e}P.refresh(!1,!1,{start:d0(me,Ue&&!!P._startClamp),end:d0(Xe,Ue&&!!P._endClamp)},Ze),P.update()},P.adjustPinSpacing=function(me){if(ye&&me){var Xe=ye.indexOf(L.d)+1;ye[Xe]=parseFloat(ye[Xe])+me+on,ye[1]=parseFloat(ye[1])+me+on,Go(ye)}},P.disable=function(me,Xe){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Xe||I&&I.pause(),te=0,Fe&&(Fe.uncache=1),ne&&hn(r,"refreshInit",ne),fe&&(fe.pause(),se.tween&&se.tween.kill()&&(se.tween=0)),!z)){for(var Ue=ot.length;Ue--;)if(ot[Ue].scroller===D&&ot[Ue]!==P)return;hn(D,"resize",ul),z||hn(D,"scroll",Bo)}},P.kill=function(me,Xe){P.disable(me,Xe),I&&!Xe&&I.kill(),l&&delete hp[l];var Ue=ot.indexOf(P);Ue>=0&&ot.splice(Ue,1),Ue===zn&&uh>0&&zn--,Ue=0,ot.forEach(function(Ze){return Ze.scroller===P.scroller&&(Ue=1)}),Ue||Gn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Xe||i.kill()),Ke&&[Ke,Be,W,N].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),_l===P&&(_l=0),d&&(Fe&&(Fe.uncache=1),Ue=0,ot.forEach(function(Ze){return Ze.pin===d&&Ue++}),Ue||(Fe.spacer=0)),n.onKill&&n.onKill(P)},ot.push(P),P.enable(!1,!1),Oe&&Oe(P),i&&i.add&&!Ge){var et=P.update;P.update=function(){P.update=et,st.cache++,Se||ke||P.refresh()},Te.delayedCall(.01,P.update),Ge=.01,Se=ke=0}else P.refresh();d&&qw()},r.register=function(n){return Vo||(Te=n||I0(),P0()&&window.document&&r.enable(),Vo=al),Vo},r.defaults=function(n){if(n)for(var i in n)ih[i]=n[i];return ih},r.disable=function(n,i){al=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(at,"wheel",Bo),hn(Rt,"scroll",Bo),clearInterval(ju),hn(Rt,"touchcancel",ji),hn(yt,"touchstart",ji),th(hn,Rt,"pointerdown,touchstart,mousedown",f0),th(hn,Rt,"pointerup,touchend,mouseup",p0),fh.kill(),eh(hn);for(var s=0;s<st.length;s+=3)nh(hn,st[s],st[s+1]),nh(hn,st[s],st[s+2])},r.enable=function(){if(at=window,Rt=document,fi=Rt.documentElement,yt=Rt.body,Te&&(xl=Te.utils.toArray,hl=Te.utils.clamp,cp=Te.core.context||ji,ep=Te.core.suppressOverwrites||ji,mp=at.history.scrollRestoration||"auto",dp=at.pageYOffset||0,Te.core.globals("ScrollTrigger",r),yt)){al=1,zo=document.createElement("div"),zo.style.height="100vh",zo.style.position="absolute",z0(),Vw(),Gt.register(Te),r.isTouch=Gt.isTouch,ns=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lp=Gt.isTouch===1,dn(at,"wheel",Bo),pp=[at,Rt,fi,yt],Te.matchMedia?(r.matchMedia=function(c){var u=Te.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Te.addEventListener("matchMediaInit",function(){V0(),Mp()}),Te.addEventListener("matchMediaRevert",function(){return B0()}),Te.addEventListener("matchMedia",function(){Bs(0,1),Ws("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return rp(),rp})):console.warn("Requires GSAP 3.11.0 or later"),rp(),dn(Rt,"scroll",Bo);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Te.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=yr(yt),Jt.m=Math.round(a.top+Jt.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),ju=setInterval(_0,250),Te.delayedCall(.5,function(){return Qu=0}),dn(Rt,"touchcancel",ji),dn(yt,"touchstart",ji),th(dn,Rt,"pointerdown,touchstart,mousedown",f0),th(dn,Rt,"pointerup,touchend,mouseup",p0),ap=Te.utils.checkPrefix("transform"),hh.push(ap),Vo=In(),fh=Te.delayedCall(.2,Bs).pause(),ko=[Rt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;Rt.hidden?(c0=c,u0=u):(c0!==c||u0!==u)&&ul()},Rt,"DOMContentLoaded",Bs,at,"load",Bs,at,"resize",ul],eh(dn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)nh(hn,st[l],st[l+1]),nh(hn,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(tp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ju)||(ju=i)&&setInterval(_0,i),"ignoreMobileResize"in n&&(lp=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(eh(hn)||eh(dn,n.autoRefreshEvents||"none"),T0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Vn(n),o=st.indexOf(s),a=Gs(s);~o&&st.splice(o,a?6:2),i&&(a?Li.unshift(at,i,yt,i,fi,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(di(n)?Vn(n):n).getBoundingClientRect(),a=o[s?Vs:ks]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=Vn(n));var o=n.getBoundingClientRect(),a=o[s?Vs:ks],l=i==null?a/2:i in mh?mh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hs.killAll||[];Hs={},i.forEach(function(s){return s()})}},r})();tt.version="3.14.2";tt.saveStyles=function(r){return r?xl(r).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),cp())}}):hi};tt.revert=function(r,e){return Mp(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?ul(!0):(Vo||tt.register())&&Bs(!0)};tt.update=function(r){return++st.cache&&Mr(r===!0?2:0)};tt.clearScrollMemory=k0;tt.maxScroll=function(r,e){return Qi(r,e?Rn:Jt)};tt.getScrollFunc=function(r,e){return xr(Vn(r),e?Rn:Jt)};tt.getById=function(r){return hp[r]};tt.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!Si};tt.snapDirectional=yp;tt.addEventListener=function(r,e){var t=Hs[r]||(Hs[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Hs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Te.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(s)&&(s=s(),dn(tt,"refresh",function(){return s=e.batchMax()})),xl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var S0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},op=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===fi&&r(yt,t)},ah={auto:1,scroll:1},Kw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ah[(l=bi(s)).overflowY]||ah[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gs(s)&&(ah[(l=bi(s)).overflowY]||ah[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},H0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Kw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&dn(Rt,Gt.eventTypes[0],E0,!1,!0)},onDisable:function(){return hn(Rt,Gt.eventTypes[0],E0,!0)}})},jw=/(input|label|select|textarea)/i,w0,E0=function(e){var t=jw.test(e.target.tagName);(t||w0)&&(e._gsapAllow=!0,w0=t)},Qw=function(e){Us(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Vn(e.target)||fi,u=Te.core.globals().ScrollSmoother,f=u&&u.get(),h=ns&&(e.content&&Vn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=xr(c,Jt),g=xr(c,Rn),_=1,p=(Gt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,m=0,y=Dn(i)?function(){return i(a)}:function(){return i||2.8},w,b,A=H0(c,e.type,!0,s),E=function(){return b=!1},T=ji,x=ji,M=function(){l=Qi(c,Jt),x=hl(ns?1:0,l),n&&(T=hl(0,Qi(c,Rn))),w=zs},L=function(){h._gsap.y=ll(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(b){requestAnimationFrame(E);var j=ll(a.deltaY/2),Y=x(d.v-j);if(h&&Y!==d.v+d.offset){d.offset=Y-d.v;var P=ll((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=st.cache,Mr()}return!0}d.offset&&L(),b=!0},D,O,z,V,k=function(){M(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Te.set(h,{y:"+=0"}),e.ignoreCheck=function(F){return ns&&F.type==="touchmove"&&R(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){b=!1;var F=_;_=ll((at.visualViewport&&at.visualViewport.scale||1)/p),D.pause(),F!==_&&op(c,_>1.01?!0:n?!1:"x"),O=g(),z=d(),M(),w=zs},e.onRelease=e.onGestureStart=function(F,j){if(d.offset&&L(),!j)V.restart(!0);else{st.cache++;var Y=y(),P,ne;n&&(P=g(),ne=P+Y*.05*-F.velocityX/.227,Y*=S0(g,P,ne,Qi(c,Rn)),D.vars.scrollX=T(ne)),P=d(),ne=P+Y*.05*-F.velocityY/.227,Y*=S0(d,P,ne,Qi(c,Jt)),D.vars.scrollY=x(ne),D.invalidate().duration(Y).play(.01),(ns&&D.vars.scrollY>=l||P>=l-1)&&Te.to({},{onUpdate:k,duration:Y})}o&&o(F)},e.onWheel=function(){D._ts&&D.pause(),In()-m>1e3&&(w=0,m=In())},e.onChange=function(F,j,Y,P,ne){if(zs!==w&&M(),j&&n&&g(T(P[2]===j?O+(F.startX-F.x):g()+j-P[1])),Y){d.offset&&L();var ae=ne[2]===Y,Re=ae?z+F.startY-F.y:d()+Y-ne[1],Ve=x(Re);ae&&Re!==Ve&&(z+=Ve-Re),d(Ve)}(Y||j)&&Mr()},e.onEnable=function(){op(c,n?!1:"x"),tt.addEventListener("refresh",k),dn(at,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){op(c,!0),hn(at,"resize",k),tt.removeEventListener("refresh",k),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=ns,ns&&!d()&&d(1),ns&&Te.ticker.add(ji),V=a._dc,D=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:G0(d,d(),function(){return D.pause()})},onUpdate:Mr,onComplete:V.vars.onComplete}),a};tt.sort=function(r){if(Dn(r))return ot.sort(r);var e=at.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Gt(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var e=r instanceof Gt?r:Qw(r);return kn&&kn.target===e.target&&kn.kill(),Gs(e.target)&&(kn=e),e};tt.core={_getVelocityProp:Ku,_inputObserver:H0,_scrollers:st,_proxies:Li,bridge:{ss:function(){Si||Ws("scrollStart"),Si=In()},ref:function(){return Pn}}};I0()&&Te.registerPlugin(tt);var yl,Wo,W0=typeof Symbol=="function"?Symbol():"_split",Sp,eE=()=>Sp||xh.register(window.gsap),X0=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ml=r=>typeof r=="string"?Ml(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Ml(t)):e.push(t),e),[]):[r],q0=r=>Ml(r).filter(e=>e instanceof HTMLElement),wp=[],bp=function(){},tE={add:r=>r()},nE=/\s+/g,Y0=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),_h={left:0,top:0,width:0,height:0},iE=(r,e)=>{for(;++e<r.length&&r[e]===_h;);return r[e]||_h},Z0=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},$0=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||wp),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},J0=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Xo=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Ep=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=t.length+1;return n&&(f.className=n+(l?" "+n+h:"")),o&&f.style.setProperty("--"+r,h+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},rE=(r,e,t,n)=>{let i=Ep("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},K0=(r,e,t,n,i,s,o,a,l,c)=>{var u;let f=Array.from(r.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=e,p=r.getBoundingClientRect(),m=p,y=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",w=0,b=t.collection,A,E,T,x,M,L,R,D,O,z,V,k,F,j,Y,P,ne,ae;for(typeof d=="object"?(T=d.delimiter||d,E=d.replaceWith||""):E=d===""?"":d||" ",A=E!==" ";h<f.length;h++)if(x=f[h],x.nodeType===3){for(Y=x.textContent||"",g?Y=Y.replace(nE," "):y&&(Y=Y.replace(/\n/g,E+`
`)),_&&(Y=_(Y,r)),x.textContent=Y,M=E||T?Y.split(T||E):Y.match(a)||wp,ne=M[M.length-1],D=A?ne.slice(-1)===" ":!ne,ne||M.pop(),m=p,R=A?M[0].charAt(0)===" ":!M[0],R&&Xo(" ",r,x),M[0]||M.shift(),$0(M,l),s&&c||(x.textContent=""),O=1;O<=M.length;O++)if(P=M[O-1],!g&&y&&P.charAt(0)===`
`&&((u=x.previousSibling)==null||u.remove(),Xo(document.createElement("br"),r,x),P=P.slice(1)),!g&&P==="")Xo(E,r,x);else if(P===" ")r.insertBefore(document.createTextNode(" "),x);else{if(A&&P.charAt(0)===" "&&Xo(" ",r,x),w&&O===1&&!R&&b.indexOf(w.parentNode)>-1?(L=b[b.length-1],L.appendChild(document.createTextNode(n?"":P))):(L=t(n?"":P),Xo(L,r,x),w&&O===1&&!R&&L.insertBefore(w,L.firstChild)),n)for(V=X0?$0([...X0.segment(P)].map(Re=>Re.segment),l):P.match(a)||wp,ae=0;ae<V.length;ae++)L.appendChild(V[ae]===" "?document.createTextNode(" "):n(V[ae]));if(s&&c){if(Y=x.textContent=Y.substring(P.length+1,Y.length),z=L.getBoundingClientRect(),z.top>m.top&&z.left<=m.left){for(k=r.cloneNode(),F=r.childNodes[0];F&&F!==L;)j=F,F=F.nextSibling,k.appendChild(j);r.parentNode.insertBefore(k,r),i&&J0(k)}m=z}(O<M.length||D)&&Xo(O>=M.length?" ":A&&P.slice(-1)===" "?" "+E:E,r,x)}r.removeChild(x),w=0}else x.nodeType===1&&(o&&o.indexOf(x)>-1?(b.indexOf(x.previousSibling)>-1&&b[b.length-1].appendChild(x),w=x):(K0(x,e,t,n,i,s,o,a,l,!0),w=0),i&&J0(x))},sE=(()=>{let r=class j0{constructor(t,n){this.isSplit=!1,eE(),this.elements=q0(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=n,this.elements.forEach(a=>{var l;n.overwrite!==!1&&((l=a[W0])==null||l._data.orig.filter(({element:c})=>c===a).forEach(Z0)),a[W0]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],s,o=()=>{let a=i.length,l;for(;a--;){l=i[a];let c=l.element.offsetWidth;if(c!==l.width){l.width=c,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(s),s=setTimeout(o,200)})},bp(this),this.split(n)}split(t){return(this._ctx||tE).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:n="chars,words,lines",aria:i="auto",deepSlice:s=!0,smartWrap:o,onSplit:a,autoSplit:l=!1,specialChars:c,mask:u}=this.vars,f=n.indexOf("lines")>-1,h=n.indexOf("chars")>-1,d=n.indexOf("words")>-1,g=h&&!d&&!f,_=c&&("push"in c?new RegExp("(?:"+c.join("|")+")","gu"):c),p=_?new RegExp(_.source+"|"+Y0.source,"gu"):Y0,m=!!t.ignore&&q0(t.ignore),{orig:y,animTime:w,obs:b}=this._data,A;(h||d||f)&&(this.elements.forEach((E,T)=>{y[T]={element:E,html:E.innerHTML,ariaL:E.getAttribute("aria-label"),ariaH:E.getAttribute("aria-hidden")},i==="auto"?E.setAttribute("aria-label",(E.textContent||"").trim()):i==="hidden"&&E.setAttribute("aria-hidden","true");let x=[],M=[],L=[],R=h?Ep("char",t,x):null,D=Ep("word",t,M),O,z,V,k;if(K0(E,t,D,R,g,s&&(f||g),m,p,_,!1),f){let F=Ml(E.childNodes),j=rE(E,F,t,L),Y,P=[],ne=0,ae=F.map(ze=>ze.nodeType===1?ze.getBoundingClientRect():_h),Re=_h,Ve;for(O=0;O<F.length;O++)Y=F[O],Y.nodeType===1&&(Y.nodeName==="BR"?((!O||F[O-1].nodeName!=="BR")&&(P.push(Y),j(ne,O+1)),ne=O+1,Re=iE(ae,O)):(Ve=ae[O],O&&Ve.top>Re.top&&Ve.left<Re.left+Re.width-1&&(j(ne,O),ne=O),Re=Ve));ne<O&&j(ne,O),P.forEach(ze=>{var $;return($=ze.parentNode)==null?void 0:$.removeChild(ze)})}if(!d){for(O=0;O<M.length;O++)if(z=M[O],h||!z.nextSibling||z.nextSibling.nodeType!==3)if(o&&!f){for(V=document.createElement("span"),V.style.whiteSpace="nowrap";z.firstChild;)V.appendChild(z.firstChild);z.replaceWith(V)}else z.replaceWith(...z.childNodes);else k=z.nextSibling,k&&k.nodeType===3&&(k.textContent=(z.textContent||"")+(k.textContent||""),z.remove());M.length=0,E.normalize()}this.lines.push(...L),this.words.push(...M),this.chars.push(...x)}),u&&this[u]&&this.masks.push(...this[u].map(E=>{let T=E.cloneNode();return E.replaceWith(T),T.appendChild(E),E.className&&(T.className=E.className.trim()+"-mask"),T.style.overflow="clip",T}))),this.isSplit=!0,Wo&&f&&(l?Wo.addEventListener("loadingdone",this._split):Wo.status==="loading"&&console.warn("SplitText called before fonts loaded")),(A=a&&a(this))&&A.totalTime&&(this._data.anim=w?A.totalTime(w):A),f&&l&&this.elements.forEach((E,T)=>{y[T].width=E.offsetWidth,b&&b.observe(E)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Wo?.removeEventListener("loadingdone",this._split)}revert(){var t,n;if(this.isSplit){let{orig:i,anim:s}=this._data;this.kill(),i.forEach(Z0),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,s&&(this._data.animTime=s.totalTime(),s.revert()),(n=(t=this.vars).onRevert)==null||n.call(t,this)}return this}static create(t,n){return new j0(t,n)}static register(t){yl=yl||t||window.gsap,yl&&(Ml=yl.utils.toArray,bp=yl.core.context||bp),!Sp&&window.innerWidth>0&&(Wo=document.fonts,Sp=!0)}};return r.version="3.14.2",r})(),xh=sE;var oE=["star"],aE=["text"],lE=["box"],cE=["previewBoxCanvas"];function uE(r,e){r&1&&(qe(0,"p",26),ht(1,"copied!!!"),Je())}function hE(r,e){r&1&&(qe(0,"p",26),ht(1,"copied!!!"),Je())}Ki.registerPlugin(tt,xh);var vh=class r{constructor(e){this.cdf=e}starEl;textEl;boxEl;previewBoxCanvas;set color(e){if(this._color=e,this.material){let t=this._color.HEX.slice(7,9),n=parseInt(t,16)/255;this.material.opacity=n,this.material.color.set(this._color.HEX.slice(0,7))}}_color;material;RGBACopied=!1;HEXCopied=!1;ngAfterViewInit(){let e=this.previewBoxCanvas.nativeElement,t={width:window.innerWidth,height:window.innerHeight},n=new Ma,i=new Ur(.7,.7,.7);this.material=new xs({color:this._color.HEX.slice(0,7),transparent:!0,opacity:.5,wireframe:!0});let s=new Xn(i,this.material);n.add(s),s.position.set(.7,-1.3,1);let o=new En;o.position.z=3,o.lookAt(s.position);let a=new Tu({canvas:e,alpha:!0});a.setClearColor(0,0),a.setSize(t.width,t.height);let l=()=>{s.rotation.y+=2e-4,s.rotation.y>360&&(s.rotation.y-=360),a.render(n,o),window.requestAnimationFrame(l)};l(),this.initTextAnimation()}copyRGBAToClipboard(){navigator.clipboard.writeText(this._color.RGBA.fullColor),this.RGBACopied=!0,setTimeout(()=>{this.RGBACopied=!1,this.cdf.detectChanges()},1e3)}copyHEXToClipboard(){navigator.clipboard.writeText(this._color.HEX),this.HEXCopied=!0,setTimeout(()=>{this.HEXCopied=!1,this.cdf.detectChanges()},1e3)}onResize(){tt.refresh(!0)}getScale(){return Ki.utils.clamp(.7,1.2,window.innerWidth/1440)}initTextAnimation(){let e=this.getScale(),t=Ki.timeline({scrollTrigger:{trigger:this.textEl.nativeElement,start:"top 180vh",toggleActions:"play none none none"}}),n=new xh(this.textEl.nativeElement,{type:"chars"}),i=[{i:0,from:{x:-50,rotateY:90},to:{x:0,rotateY:0}},{i:1,from:{right:90},to:{right:0}},{i:3,from:{rotateX:90},to:{rotateX:0}},{i:2,from:{top:70},to:{top:0}},{i:4,from:{left:90},to:{left:0}},{i:5,from:{rotate:180},to:{rotate:0}},{i:6,from:{scale:1.5},to:{scale:1}},{i:7,from:{top:180},to:{top:0}},{i:8,from:{right:90},to:{right:0}}],s,o,a,l,c,u;i.forEach((h,d)=>{let g=t.fromTo(n.chars[h.i],qt({opacity:0,transformOrigin:"center"},h.from),qt({opacity:1,duration:1,ease:"power3.out"},h.to),d*.5);d===1&&(s=g),d===2&&(o=g),d===3&&(a=g),d===4&&(l=g),d===5&&(c=g),d===6&&(u=g)}),t.to(this.starEl.nativeElement,{x:"8vw",rotate:360,duration:1,ease:"power2.out"},s.startTime()+.5),t.to(this.starEl.nativeElement,{y:"-12vh",duration:1,ease:"power2.out"},o.startTime()+1.3),t.to(this.starEl.nativeElement,{rotate:90,duration:1,repeat:-1,repeatDelay:2,ease:"power2.out"},a.startTime()+2);let f=e;t.to(this.boxEl.nativeElement,{scale:f,opacity:1,duration:1,ease:"power2.out"},l.startTime()+1),t.to(this.boxEl.nativeElement,{scale:f*1.2,opacity:1,duration:1,ease:"power2.out"},c.startTime()+2),t.to(this.boxEl.nativeElement,{scale:f*1.7,y:f*100,filter:"blur(100px)",opacity:0,duration:1,ease:"power2.out"},u.startTime()+3)}static \u0275fac=function(t){return new(t||r)(Ft(ta))};static \u0275cmp=Zs({type:r,selectors:[["app-generator-result"]],viewQuery:function(t,n){if(t&1&&Np(oE,7)(aE,7)(lE,7)(cE,5),t&2){let i;$o(i=Jo())&&(n.starEl=i.first),$o(i=Jo())&&(n.textEl=i.first),$o(i=Jo())&&(n.boxEl=i.first),$o(i=Jo())&&(n.previewBoxCanvas=i.first)}},hostBindings:function(t,n){t&1&&Yt("resize",function(){return n.onResize()},Fp)},inputs:{color:"color"},decls:40,vars:10,consts:[["previewBoxCanvas",""],["text",""],["star",""],["box",""],[1,"vh-100","vw-100","d-flex","flex-column","justify-content-center","align-items-center","position-relative"],[1,"container","d-flex","justify-content-between","z-1",3,"click"],[1,"d-flex","flex-column"],["class","copied-text   fst-italic fw-normal align-self-end p-1",4,"ngIf"],["class","copied-text fst-italic fw-normal align-self-end p-1",4,"ngIf"],[1,"position-absolute","z-0"],[1,"text-container","vw-100","vh-100","position-absolute"],[1,"text","position-absolute","z-1"],["width","160","height","160","viewBox","0 0 120 120",1,"star","position-absolute","z-0"],["transform","translate(60,60)"],["x","-5","y","-2vw","width","10","height","4vw","rx","5","fill","url(#grad)","transform","rotate(0)"],["x","-5","y","-2vw","width","10","height","4vw","rx","5","fill","url(#grad)","transform","rotate(45)"],["x","-5","y","-2vw","width","10","height","4vw","rx","5","fill","url(#grad)","transform","rotate(90)"],["x","-5","y","-2vw","width","10","height","4vw","rx","5","fill","url(#grad)","transform","rotate(135)"],["id","grad","x1","0","y1","0","x2","0","y2","1"],["offset","0%","stop-color","#ffd6c9"],["offset","100%","stop-color","#ff7a3c"],[1,"box","position-absolute","z-0"],["x","-5","y","-50","width","50","height","50","rx","5","fill","url(#grad2)","transform","rotate(0)"],["id","grad2","x1","0","y1","0","x2","0","y2","1"],["offset","0%","stop-color","#c9ffdc"],["offset","100%","stop-color","#3cff6a"],[1,"copied-text","fst-italic","fw-normal","align-self-end","p-1"]],template:function(t,n){t&1&&(qe(0,"div",4)(1,"div",5),Yt("click",function(){return n.copyRGBAToClipboard()}),qe(2,"p"),ht(3,"RGBA"),Je(),qe(4,"div",6)(5,"span"),ht(6),Je(),Eh(7,uE,2,0,"p",7),Je()(),qe(8,"div",5),Yt("click",function(){return n.copyHEXToClipboard()}),qe(9,"p"),ht(10,"HEX"),Je(),qe(11,"div",6)(12,"span"),ht(13),Je(),Eh(14,hE,2,0,"p",8),Je()(),pn(15,"canvas",9,0),qe(17,"div",10)(18,"p",11,1),ht(20,"YOUR COLOR"),Je(),Dp(),qe(21,"svg",12,2)(23,"g",13),pn(24,"rect",14)(25,"rect",15)(26,"rect",16)(27,"rect",17),Je(),qe(28,"defs")(29,"linearGradient",18),pn(30,"stop",19)(31,"stop",20),Je()()(),qe(32,"svg",21,3)(34,"g",13),pn(35,"rect",22),Je(),qe(36,"defs")(37,"linearGradient",23),pn(38,"stop",24)(39,"stop",25),Je()()()()()),t&2&&(ft(),tn("border","1px solid "+n._color.HEX),ft(5),wr(n._color.RGBA.fullColor),ft(),os("ngIf",n.RGBACopied),ft(),tn("border","1px solid "+n._color.HEX),ft(5),wr(n._color.HEX),ft(),os("ngIf",n.HEXCopied),ft(21),tn("rotate","45deg"))},dependencies:[Op],styles:["*[_ngcontent-%COMP%]{overflow:hidden}.container[_ngcontent-%COMP%]{cursor:pointer;width:50%;padding:16px;border-radius:24px;border:1px solid #ffffff;background:#ffffff1f;margin:8px;transition:all .2s ease-in-out;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}p[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.container[_ngcontent-%COMP%]:hover{transform:scale(1.04) translateY(-4px);filter:drop-shadow(0px 5px 15px rgba(255,255,255,.4))}.container[_ngcontent-%COMP%]:active{transform:scale(.95)}.copied-text[_ngcontent-%COMP%]{font-size:1vh}.text[_ngcontent-%COMP%]{font-size:8vw;font-weight:700}.char[_ngcontent-%COMP%]{transform-style:preserve-3d;will-change:transform,opacity}.star[_ngcontent-%COMP%]{top:11%;left:9.4%;width:clamp(80px,12vw,160px);height:auto}.text-container[_ngcontent-%COMP%]{padding:7vh}.box[_ngcontent-%COMP%]{opacity:0;top:14%;left:48%}"]})};Ki.registerPlugin(tt);var yh=class r{constructor(e,t){this.el=e;this.cdf=t}blobs;navLinks;colorWheel;color={RGBA:{r:100,g:100,b:100,a:255,fullColor:"rgb(100,100,100,255)"},HEX:"#646464FF"};currentColor;isFlipped=!1;scroll(e){document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}ngAfterViewInit(){this.initNativeElements(),this.initBlobsAnimation(),this.initNavLinksAnimation(),this.initScrollColorWheelAnimation()}ngOnInit(){this.currentColor=Qs.prototype.getRandomColor()}onColor(e){this.selectColor(e)}selectColor(e){this.color=e,this.scroll("result-section")}toggle(){this.isFlipped=!this.isFlipped,setTimeout(()=>{this.currentColor=Qs.prototype.getRandomColor(),this.cdf.detectChanges()},300)}initNativeElements(){this.blobs=Array.from(this.el.nativeElement.querySelectorAll(".blob")),this.navLinks=Array.from(this.el.nativeElement.querySelectorAll(".nav-link")),this.colorWheel=this.el.nativeElement.querySelectorAll(".color-wheel")}initBlobsAnimation(){this.blobs.forEach((e,t)=>{Ki.to(e,{x:(Math.random()-.5)*300,y:(Math.random()-.5)*300,duration:5+t*2,repeat:-1,yoyo:!0,ease:"sine.inOut"})}),window.addEventListener("mousemove",e=>{let n=(e.clientX/window.innerWidth-.5)*2*80,i=(e.clientY/window.innerHeight-.5)*2*80;Ki.to(this.blobs,{x:n,y:i,duration:1,ease:"power2.out"})})}initNavLinksAnimation(){this.navLinks.forEach(e=>{e.addEventListener("click",()=>{let t=[{transform:"translateY(0)"},{transform:"translateY(-15px)"},{transform:"translateY(-13px)"},{transform:"translateY(0)"}],n={duration:500,iterations:1};e.animate(t,n)})})}initScrollColorWheelAnimation(){Ki.to(this.colorWheel,{y:"100vh",rotate:59,opacity:1,filter:"blur(0px)",scrollTrigger:{trigger:document.body,start:"top top",end:"center center",scrub:!0}})}static \u0275fac=function(t){return new(t||r)(Ft(Zo),Ft(ta))};static \u0275cmp=Zs({type:r,selectors:[["app-generator-page"]],decls:58,vars:23,consts:[[1,"page-wrapper"],[1,"background"],[1,"blob","blob1"],[1,"blob","blob2"],[1,"blob","blob3"],[1,"blob","blob4"],[1,"blob","blob5"],[1,"blob","blob10"],[1,"blob","blob6"],[1,"blob","blob7"],[1,"blob","blob8"],[1,"blob","blob9"],[1,"blob","blob11"],[1,"blob","blob12"],[1,"main","text-white","d-flex","flex-column","align-items-center"],[1,"position-fixed","d-flex","justify-content-center","p-3","top-0","end-0"],[1,"d-flex","justify-content-around","align-items-center"],[1,"nav-link",3,"click"],["id","home-section",1,"vh-100","d-flex","justify-content-center","align-items-center"],[1,"title-welcome","position-absolute"],["src","assets/pictures/color-wheel.png","alt","color-wheel",1,"color-wheel","position-absolute"],[1,"vw-100","vh-100","select-color-container","position-absolute","text-white","d-flex","flex-column","justify-content-center","align-items-center","z-1"],[1,"title-color","position-absolute"],["id","card",1,"card"],[1,"card-inner"],[1,"card-front",3,"click"],[1,"color-container","m-3"],[1,"button","align-self-end","mx-5",3,"click"],[1,"info-container"],[1,"card-back",3,"click"],[1,"button","align-self-start","mx-5",3,"click"],["id","form-section",1,"vh-100","position-relative","d-flex","align-items-center","justify-content-center"],[1,"vw-100","vh-100",3,"color"],["id","result-section",1,"vh-100","d-flex","align-items-center","justify-content-center"],[3,"color"]],template:function(t,n){t&1&&(qe(0,"div",0)(1,"div",1),pn(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"div",13),Je(),qe(14,"div",14)(15,"nav",15)(16,"div",16)(17,"a",17),Yt("click",function(){return n.scroll("home-section")}),ht(18,"Home"),Je(),qe(19,"a",17),Yt("click",function(){return n.scroll("form-section")}),ht(20,"Generator"),Je(),qe(21,"a",17),Yt("click",function(){return n.scroll("result-section")}),ht(22,"Your color"),Je()()(),qe(23,"header",18)(24,"h1",19),ht(25,"Welcome to color generator!!!"),Je(),pn(26,"img",20),qe(27,"section",21)(28,"h1",22),ht(29," You can select... "),Je(),qe(30,"div",23)(31,"div",24)(32,"div",25),Yt("click",function(){return n.toggle()}),pn(33,"div",26),qe(34,"p"),ht(35),Je(),qe(36,"p"),ht(37),Je(),qe(38,"button",27),Yt("click",function(){return n.selectColor(n.currentColor)}),ht(39,"SELECT"),Je(),qe(40,"p",28),ht(41,"\u2139\uFE0F Click me to see next color"),Je()(),qe(42,"div",29),Yt("click",function(){return n.toggle()}),pn(43,"div",26),qe(44,"p"),ht(45),Je(),qe(46,"p"),ht(47),Je(),qe(48,"button",30),Yt("click",function(){return n.selectColor(n.currentColor)}),ht(49,"SELECT"),Je(),qe(50,"p",28),ht(51,"\u2139\uFE0F Click me to see next color"),Je()()()()()(),qe(52,"main",31)(53,"h1",22),ht(54," ...or make your own "),Je(),qe(55,"app-generator-form",32),Yt("color",function(s){return n.onColor(s)}),Je()(),qe(56,"footer",33),pn(57,"app-generator-result",34),Je()()()),t&2&&(ft(8),tn("background",n.color.HEX),ft(),tn("background",n.color.HEX),ft(),tn("background",n.color.HEX),ft(),tn("background",n.color.HEX),ft(),tn("background",n.color.HEX),ft(),tn("background",n.color.HEX),ft(17),Ko("flip",n.isFlipped),ft(3),tn("background",n.currentColor.HEX),ft(2),jo("RGBA: ",n.currentColor.RGBA.fullColor),ft(2),jo("HEX: ",n.currentColor.HEX),ft(6),tn("background",n.currentColor.HEX),ft(2),jo("RGBA: ",n.currentColor.RGBA.fullColor),ft(2),jo("HEX: ",n.currentColor.HEX),ft(10),os("color",n.color))},dependencies:[Qs,vh],styles:[".nav-link[_ngcontent-%COMP%]{cursor:pointer;margin:8px;transition:all .2s ease-in-out;padding:8px;border-radius:24px;border:1px solid transparent}.nav-link[_ngcontent-%COMP%]:hover{transform:scale(1.05) translateY(-4px);background:#ffffff36;border:solid 1px rgba(255,255,255,.63)}.title-welcome[_ngcontent-%COMP%]{top:8vh;font-size:4vw;font-weight:700;color:#fff;padding:8px;transition:.2s ease-in-out;animation:_ngcontent-%COMP%_load-title 1.5s linear}.color-wheel[_ngcontent-%COMP%]{width:85vh;filter:blur(100px);opacity:.5;transform:translateZ(0);backface-visibility:hidden;will-change:transform;-webkit-user-drag:none}body[_ngcontent-%COMP%]{background:#222;display:flex;justify-content:center;align-items:center;height:100vh}.main[_ngcontent-%COMP%]{background:#000;background-image:radial-gradient(circle,rgba(198,198,198,.18) 40%,transparent 41%);background-size:3px 3px}nav[_ngcontent-%COMP%]{position:relative;z-index:99;transition:.2s ease-in-out;animation:load-item .4s linear;overflow:hidden}.blob[_ngcontent-%COMP%]{background:#fff;width:230px;height:170px;position:absolute;filter:blur(100px);opacity:.6;border-radius:50%}.blob1[_ngcontent-%COMP%]{width:300px;height:300px;background:#f0c;top:26%;left:8%}.blob2[_ngcontent-%COMP%]{width:400px;height:400px;background:#0ff;top:42%;left:67%}.blob3[_ngcontent-%COMP%]{width:500px;height:250px;background:#fa0;top:100%;left:22%}.blob4[_ngcontent-%COMP%]{width:350px;height:350px;background:#60f;top:155%;left:8%;border-radius:40% 60% 70% 30%/30% 30% 70% 70%}.blob5[_ngcontent-%COMP%]{width:350px;height:350px;background:#5f0;top:120%;left:75%;border-radius:40% 60% 70% 30%/30% 30% 70% 70%}.blob10[_ngcontent-%COMP%]{width:250px;height:250px;background:#7300ff;top:3%;left:45%;border-radius:40% 60% 70% 30%/30% 30% 70% 70%}.blob6[_ngcontent-%COMP%]{top:220%;left:34%}.blob7[_ngcontent-%COMP%]{top:215%;left:75%}.blob8[_ngcontent-%COMP%]{top:270%;left:17%}.blob9[_ngcontent-%COMP%]{top:275%;left:82%}.blob11[_ngcontent-%COMP%]{top:210%;left:12%}.blob12[_ngcontent-%COMP%]{top:285%;left:52%}@keyframes _ngcontent-%COMP%_load-title{0%{opacity:0;filter:blur(10px);text-shadow:red -2px 0,cyan -2px 0}20%{opacity:0;filter:blur(10px)}30%{opacity:1;filter:blur(0px)}35%{opacity:0;filter:blur(10px);text-shadow:red -2px 0,cyan -2px 0}65%{opacity:1;filter:blur(0px)}85%{opacity:1;filter:blur(0px)}to{opacity:0;filter:blur(10px)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.color-container[_ngcontent-%COMP%]{width:75%;height:25%;border-radius:8px;border:1px solid #ccc}.card[_ngcontent-%COMP%]{padding:48px;overflow:hidden;width:35vw;height:55vh;background:transparent;border:none;transform-style:preserve-3d;perspective:1000px;transition:.2s ease-in-out}.card-inner[_ngcontent-%COMP%]{will-change:transform;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d;position:relative}.card.flip[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%]{cursor:pointer;border-radius:8px;display:flex;justify-content:center;align-items:center;flex-direction:column;color:#fff;position:absolute;width:100%;height:100%;backface-visibility:hidden;background:linear-gradient(135deg,#6600ff40,#a100ff40);border:1px solid rgb(105,0,255)}.card-back[_ngcontent-%COMP%]{transform:rotateY(180deg)}.btn-next[_ngcontent-%COMP%]{padding:8px;color:#fff;background:#ffffff4d;border:1px solid white}.title-color[_ngcontent-%COMP%]{margin:64px;font-weight:700;color:#fff;letter-spacing:8px;font-size:48px;top:75vh;left:0;transition:.2s ease-in-out;animation:_ngcontent-%COMP%_load-title 1.5s linear}main[_ngcontent-%COMP%]   .title-color[_ngcontent-%COMP%]{top:5vh;left:48vw}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.info-container[_ngcontent-%COMP%]{margin:8px;padding:16px;background:#0059ff40;border-left:2px solid blue;border-top-right-radius:8px;border-bottom-right-radius:8px}"]})};var dP=[{path:"generator",component:yh},{path:"",redirectTo:"/generator",pathMatch:"full"}];export{dP as GENERATOR_ROUTES};
