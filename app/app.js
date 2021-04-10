import * as MODEL from "../model/model.js";
// import {getName as MODEL} from "../model/model.js";



function init() {


      let currentHeroImage = "home";

   $("nav a").click(function(e) {
       let btnID = this.id;
       let contentID = btnID + "Content";

      

       $(".hero")
       .removeClass(`${currentHeroImage}-hero-image`)
       .addClass(`${btnID}-hero-image`);
       currentHeroImage = btnID;
       $(".hero-content .page-name").html(btnID)

       MODEL.getPageContent(contentID);
   });
}

$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
})

