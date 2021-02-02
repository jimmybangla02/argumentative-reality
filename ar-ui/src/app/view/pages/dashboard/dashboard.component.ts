import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Instance, SignalData } from 'simple-peer';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  @ViewChild('myVideo') myVideo: ElementRef;

  video: any;
  peer: Instance;
  targetPeer: any;
  displayControls: boolean;
  n = navigator as any;

  constructor() { }

  ngOnInit() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(this.gotMedia).catch(() => {});
  }

  gotMedia(st) {
    const peer1 = new SimplePeer({ initiator: true, stream: st });
    const peer2 = new SimplePeer();

    peer1.on('signal', data => {
      console.log(JSON.stringify(data));
      peer2.signal(data);
    });

    peer2.on('signal', data => {
      peer1.signal(data);
    });

    peer2.on('stream', stream => {
      const video: any = document.querySelector('video');
      if ('srcObject' in video) {
        video.srcObject = stream;
      }else {
        video.src = window.URL.createObjectURL(stream);
      }

      peer1.on('connect', () => {
        peer1.send('hey peer2, how is it going?');
      });

      peer2.on('data', data => {
        // got a data channel message
        console.log('got a message from peer1: ' + data);
      });

      video.play();
    });
  }

  connect() {
    // this.peer.signal(JSON.parse(this.targetPeer));
  }

  message() {
    this.peer.send('hello word');
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }

  sound() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then(this.gotMedia).catch(() => {});
    // this.initCamera({ video: true, audio: true });
  }

  initCamera(config: any) {
    const browser = navigator as any;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

}
