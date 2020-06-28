import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { empty } from "rxjs";

@Component({
  selector: "app-chatbot",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  constructor() {}
  ngAfterViewInit() {
    $(".Input_field").keypress(function (e) {
      if (e.which == 13) {
        $("#send").click();
        return false; //<---- Add this line
      }
    });

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
        var dm = new Date();
        $(".Messages_list").append(
          "<div style='overflow: hidden; margin: 26px 0 26px;'><div style=' float: right; width: 46%;'><p style='background: #05728f none repeat scroll 0 0; border-radius: 3px; font-size: 14px; margin: 0; color: #fff; padding: 5px 10px 5px 12px; width: 100%; text-transform: capitalize;'>" +
            msg +
            "</p><span style='color: #747474; display: block; font-size: 12px; margin: 8px 0 0;'>" +
            dm.getHours() +
            ":" +
            dm.getMinutes() +
            "</span></div></div></div>"
        );
        $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "https://brl-app.herokuapp.com",
          data: JSON.stringify({ response: msg }),
        })
          .done(function (data) {
            var d = new Date();
            $(".Messages_list").append(
              "<div class='incoming_msg'><div style='display: inline-block; width: 10%;'><img src='https://ptetutorials.com/images/user-profile.png' style='max-width:100%;' alt='sunil'> </div> <div style='display: inline-block; padding: 0 0 0 10px; vertical-align: top; width: 85%;'>  <div style='width: 57%;'>  <p style='  background: #ebebeb none repeat scroll 0 0; border-radius: 3px; color: #646464; font-size: 14px; margin: 0; padding: 5px 10px 5px 12px; width: 100%; text-transform: capitalize;'>" +
                data.response +
                "</p><span style='color: #747474; display: block; font-size: 12px; margin: 8px 0 0;'>" +
                d.getHours() +
                ":" +
                d.getMinutes() +
                "</span></div></div></div>"
            );
            $(".Messages").scrollTop($(".Messages").prop("scrollHeight"));
          })
          .fail(function (jqXHR, textStatus) {
            var d = new Date();
            $(".Messages_list").append(
              "<div class='incoming_msg'><div style='display: inline-block; width: 10%;'><img src='https://ptetutorials.com/images/user-profile.png' style='max-width:100%;' alt='sunil'> </div> <div style='display: inline-block; padding: 0 0 0 10px; vertical-align: top; width: 85%;'>  <div style='width: 57%;'>  <p style='  background: #ebebeb none repeat scroll 0 0; border-radius: 3px; color: #646464; font-size: 14px; margin: 0; padding: 5px 10px 5px 12px; width: 100%;'>Sorry I am feeling ill.</p><span style='color: #747474; display: block; font-size: 12px; margin: 8px 0 0; text-transform: capitalize;'>" +
                d.getHours() +
                ":" +
                d.getMinutes() +
                "</span></div></div></div>"
            );
            $(".Messages").scrollTop($(".Messages").prop("scrollHeight"));
          });
      } else {
        var d = new Date();
        $(".Messages_list").append(
          "<div class='incoming_msg'><div style='display: inline-block; width: 10%;'><img src='https://ptetutorials.com/images/user-profile.png' style='max-width:100%;' alt='sunil'> </div> <div style='display: inline-block; padding: 0 0 0 10px; vertical-align: top; width: 85%;'>  <div style='width: 57%;'>  <p style='  background: #ebebeb none repeat scroll 0 0; border-radius: 3px; color: #646464; font-size: 14px; margin: 0; padding: 5px 10px 5px 12px; width: 100%;'>Nothing to Say?</p><span style='color: #747474; display: block; font-size: 12px; margin: 8px 0 0; text-transform: capitalize;'>" +
            d.getHours() +
            ":" +
            d.getMinutes() +
            "</span></div></div></div>"
        );
        $(".Messages").scrollTop($(".Messages").prop("scrollHeight"));
      }
    });
  }
  ngOnInit() {}
}
