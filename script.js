$(document).ready(function() {

    /*$("#stream1_btn").on("click", function() {
        if ($(".stream1").css("display") == "none") {
            console.log("Stream1 cards are not displayed.");
            $(".stream1").show('slow');
        } else {
            console.log("Stream1 cards are displayed.");
            $(".stream1").hide('slow');
        }
        
        $(".stream1").toggle();
   });*/

   $(".bottom_button").on("mouseenter", function() {
       console.log("mouseenter registered.");
        $(this).fadeTo('slow', 0.5);
   });

   $(".bottom_button").on("mouseleave", function() {
       console.log("mouseleave registered.");
        $(this).fadeTo('slow', 1);
   });

   $(".bottom_button").on("click", function() {
        $(this).prev().toggleClass('big_font', 2000);
   });

   /* $('p').css('color', 'blue').slideUp(3000).slideDown(3000).toggle('slow').toggle('fast'); */


    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

   $("#select").on("click", function() {
        $(".card").not(".highlight_stream").hide();
   });

   $("#all").on("click", function() {
        $(".card").show();
   });

   $("p").on("click", function() {
        $(this).children('a').addClass('highlight_yellow');
   });
});