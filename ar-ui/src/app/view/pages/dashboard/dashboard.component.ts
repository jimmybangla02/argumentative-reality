import {Component, OnInit} from '@angular/core';
import { Instance, SignalData } from 'simple-peer';
import { Router, ActivatedRoute } from '@angular/router';
import {SetUrlService} from '../../../core/set-url/set-url.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  video: any;
  peer: Instance;
  targetPeer: any;
  displayControls: boolean;
  clientUrl = '';
  fullUrlPath = '';
  isClientUrlPath: boolean;
  dashBardId = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private setUrlService: SetUrlService) {
    this.setUrlService.getUrl(environment.databaseQuery.urlPathRef, 'hjhj').subscribe(d => {
      this.clientUrl = Object.keys(d).toString();
      if (!this.dashBardId && Object.keys(d).length > 0) {
        const obj = {
          sdp: d[Object.keys(d)[0]].sdp,
          type: d[Object.keys(d)[0]].type
        };
        this.targetPeer = JSON.stringify(obj);
        if (d[Object.keys(d)[0]].type === 'answer') {

          setTimeout(() => {
            this.connect();
            this.deleteUrl();
          }, 2000);
        }
      }
    });
  }

  ngOnInit() {

    this.route.params.subscribe(param => {
      if (param.dashboardId){
        this.clientUrl = param.dashboardId;
        this.dashBardId =  param.dashboardId;
        this.setUrlService.getKeysDetails(environment.databaseQuery.urlPathRef, this.clientUrl).subscribe(data => {
          if (data) {
            this.targetPeer = JSON.stringify(data[0]);
            if (data[0].type === 'offer') {
              setTimeout(() => {
                this.connect();
              }, 2000);
            }
          }
        });
      }
    });


    const video: any = document.querySelector('video');
    this.video = video;
    let peerx: any;

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stm => {
      peerx = new SimplePeer({ initiator: true, trickle: false, stream: stm });
      peerx.on('error', err => console.log('error', err));
      peerx.on('signal', data => {
        this.targetPeer = JSON.stringify(data);
        if (this.isClientUrlPath) {
          this.setUrlService.updateItem(environment.databaseQuery.urlPathRef, this.clientUrl, JSON.parse(this.targetPeer));
        }
      });

      peerx.on('data', data => {
        console.log('Received message: ', data);
      });

      peerx.on('stream', stream => {
        if ('srcObject' in this.video) {
          this.video.srcObject = stream;
        }else {
          this.video.src = window.URL.createObjectURL(stream);
        }
        this.video.play();
      });

    }).catch(() => {});

    setTimeout(() => {
     this.peer = peerx;
    }, 2000);
  }

  connect() {
    if (this.dashBardId) {
     this.isClientUrlPath = true;
    }
    this.peer.signal(this.targetPeer);
  }

  createUrl() {
    this.setUrlService.createDynamicUrl(environment.databaseQuery.urlPathRef, JSON.parse(this.targetPeer));
  }

  deleteUrl() {
    this.setUrlService.deleteItem(environment.databaseQuery.urlPathRef, this.clientUrl);
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  disconnect() {

  }

  getFullUrl(path) {
    this.fullUrlPath = `${window.location.protocol}//${window.location.host}/#/dashboard/${path}`;
    return this.fullUrlPath;
  }

  sendUrl() {
    const message = this.fullUrlPath;
    const phone = '2135688885';
    const obj: any = {};
    obj.message = message;
    obj.phone = phone;
    this.setUrlService.sendMessage('message', obj);
  }

  message() {
    this.peer.send('Hello Word');
  }

  pause() {
    this.video.pause();
  }

  resume() {
    this.video.play();
  }

}
