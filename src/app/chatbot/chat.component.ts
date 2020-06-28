import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { empty } from "rxjs";

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

    $("#send").click(function (e) {
      e.preventDefault();
      var msg = $("input[name='message']").val();

      if (!(msg == "")) {
        $.ajax({
          type: "POST",
          url: "https://brl-app.herokuapp.com",
          data: { response: msg },
        })
          .done(function (data) {
            alert(data);
          })
          .fail(function (jqXHR, textStatus) {
            alert(textStatus);
          });
      } else {
        alert("empty");
      }
    });
  }
  ngOnInit() {}
}
