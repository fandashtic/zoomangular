import { Component } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
import { ActivatedRoute } from '@angular/router';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {
  public meetConfig: any;
  public signature: any;
  public role: string;

  constructor(private actRoute: ActivatedRoute) { 
    this.role = this.actRoute.snapshot.params.role;
    document.getElementById('zmmtg-root').style.display ='block';
    this.setCongf(6361405650)
  }

  setCongf(meetingNumber) {
    this.meetConfig = {
      apiKey: 'wZT0tluKQ2eV7sZXEkb0GQ',
      apiSecret : 'c5WxFH1SlTJq7kx19wyUaczijt21n4l5MErW',
      meetingNumber : meetingNumber,
      leaveUrl : 'http://localhost:4200',
      userName : 'swamivenkat@1coresolution.com',
      userEmail: 'swamivenkat@1coresolution.com',
      passWord : '5Jgyqh',
      role : this.role
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: res => {
        console.log(res.result);
      }
    });

    ZoomMtg.init({
      showMeetingHeader: true, //option
      disableInvite: true, //optional
      disableCallOut: true, //optional
      disableRecord: true, //optional
      disableJoinAudio: false, //optional
      audioPanelAlwaysOpen: true, //optional
      showPureSharingContent: false, //optional
      isSupportAV: true, //optional,
      isSupportChat: false, //optional,
      isSupportQA: false, //optional,
      isSupportCC: false, //optional,
      screenShare: true, //optional,
      rwcBackup: '', //optional,
      videoDrag: true, //optional,
      sharingMode: 'both', //optional,
      videoHeader: true, //optional,
      isLockBottom: true, // optional,
      isSupportNonverbal: true, // optional,
      isShowJoiningErrorDialog: true, // optional,
      inviteUrlFormat: '', // optional
      leaveUrl: 'http://localhost:4200/', //required

      success: res => {
        console.log("Meeting init successfully")
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          userEmail: this.meetConfig.userEmail,
          passWord: this.meetConfig.passWord,
          apiKey: this.meetConfig.apiKey,
          signature: this.signature,

          success: function (res) { console.log(res) },
          error: function (res) { console.log(res) }
        });
      },
      error: function (res) { console.log(res) }
    });

  }
}