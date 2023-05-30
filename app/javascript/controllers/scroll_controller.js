import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  /*On Start*/
  connect(){
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    this.resetScroll(messages);
  }
  
  /* on stop*/
  disconnect(){

  }

  /*Custom function*/
  resetScroll(){
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }
}
