import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  /*On Start*/
  connect(){
    console.log("connected");
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    this.resetScroll(messages);
  }
  
  /* on stop*/
  disconnect(){
    console.log("discconnected");
  }

  /*Custom function*/
  resetScroll(){
    messages.scrollTop = messages.scrollHeight - messages.clientHeight
  }
}
