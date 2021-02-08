import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncriptadoService {

  encriptado: string = null;
  desencriptado: string=null;
  constructor() { }
  
  encriptar(data){
    let encriptar = data.toString();
    let key = '12345';
    this.encriptado=CryptoJS.AES.encrypt(encriptar.trim(), key.trim()).toString();
    return this.encriptado;
  }

  desencriptar(data){
    let desencriptar = data.toString();
    let key = '12345';
    this.desencriptado=CryptoJS.AES.decrypt(desencriptar.trim(), key.trim()).toString(CryptoJS.enc.Utf8);
    return this.desencriptado;
  }

}
