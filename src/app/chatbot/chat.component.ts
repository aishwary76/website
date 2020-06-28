import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  constructor() {}
  ngAfterViewInit() {
    $(".chat_on").click(function () {
      $(".Layout").toggle();
      $(".chat_on").hide(300);
    });

    $(".chat_close_icon").click(function () {
      $(".Layout").hide();
      $(".chat_on").show(300);
    });
  }
  ngOnInit() {}
}
