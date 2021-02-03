import {Component, OnInit} from '@angular/core';
import { Instance, SignalData } from 'simple-peer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  video: any;
  peer1: Instance;
  peer2: Instance;
  targetPeer: any;
  displayControls: boolean;
  message = [];
  messageId: string;

  constructor() { }

  ngOnInit() {
    // navigator.mediaDevices.getUserMedia({
    //   video: {
    //     width: { min: 320, ideal: 1280, max: 1920 },
    //     height: { min: 240, ideal: 720, max: 1080 }
    //   },
    //   audio: true
    // }).then(this.gotMedia).catch(() => {});


    const video: any = document.querySelector('video');
    this.video = video;
    let peer1: any;
    let peer2: any;

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stm => {
      peer1 = new SimplePeer({ initiator: true, stream: stm });
      peer2 = new SimplePeer();

      peer1.on('signal', data => {
        peer2.signal(data);
        // console.log(JSON.stringify(data));
        // this.targetPeer = data;
      });

      peer2.on('signal', data => {
        peer1.signal(data);
      });

      peer2.on('stream', stream => {
        console.log(stream, 'jimmy')
        if ('srcObject' in this.video) {
          this.video.srcObject = stream;
        }else {
          this.video.src = window.URL.createObjectURL(stream);
        }

        peer1.on('connect', () => {
          peer1.send('hey peer2, how is it going?');
        });

        /*peer2.on('data', data => {
          // got a data channel message
          this.message.push(data);
          console.log('got a message from peer1: ' + data);
        });*/
        this.video.play();
      });

      // peer1.on('signal', data => {
      //   console.log(JSON.stringify(data));
      //   this.targetPeer = data;
      // });
      //
      // peer1.on('data', data => {
      //   console.log('Received message: ', data);
      // });
      //
      // peer1.on('stream', stream => {
      //   if ('srcObject' in this.video) {
      //     this.video.srcObject = stream;
      //   }else {
      //     this.video.src = window.URL.createObjectURL(stream);
      //   }
      //   this.video.play();
      // });

    }).catch(() => {});

    setTimeout(() => {
     this.peer1 = peer1;
     this.peer2 = peer2;
    }, 5000);
  }

  connect() {
    this.peer1.signal(JSON.parse(this.targetPeer));
  }

  addMedia(stream) {
    this.peer1.addStream(stream); // <- add streams to peer dynamically
  }

  disconnect() {
    this.peer1.on('close', (da) => {
      console.log(da)
    })
  }

  gotMedia(stm) {
    const video: any = document.querySelector('video');
    const peer1 = new SimplePeer({ initiator: true, stream: stm });
    const peer2 = new SimplePeer();

    peer1.on('signal', data => {
      peer2.signal(data);
    });

    peer2.on('signal', data => {
      peer1.signal(data);
    });

    peer2.on('stream', stream => {
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

  sendMessage(msg) {
    this.peer1.send(msg);
  }


  sound() {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: { min: 320, ideal: 1280, max: 1920 },
        height: { min: 240, ideal: 720, max: 1080 }
      },
      audio: false
    }).then(this.gotMedia).catch(() => {});
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
