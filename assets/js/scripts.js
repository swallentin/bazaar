
$(function() {
  $('#gallery').gallery({
    url: 'http://dev.local:3000/data.json',
    // url: 'http://dev.local:8080/data-small.json',
    viewerTemplate: Handlebars.compile($("#viewer-template").html()),
    thumbnailTemplate: Handlebars.compile($("#thumbnail-template").html()),
    effects: function(element) {
      // apply effects
      element
        .mouseover(function() {
          $('.btn-navigate').stop().fadeTo(500, 1);
          $('.info').stop().fadeTo(500, 1);
        })
        .mouseout(function() {
          $('.btn-navigate').stop().fadeTo(500, 0);
          $('.info').stop().fadeTo(500, 0);
        });

      element.find('.thumbnail')
        .mouseover(function() {
          !$(this).hasClass('active') && $(this).stop().fadeTo(500, 1);
        })
        .mouseout(function() {
          !$(this).hasClass('active') && $(this).stop().fadeTo(500, 0.5);
        });
    },
    callback: function() {
      $(".btn-bid").click( function() {
        $this = $(this);
        var id = $this.attr("data-id");
        $.post("/bid/" + id, { 
          bid: 10
        }, function(data) {
          console.log(data);
          console.log('posted');
        }, "json" );

      });
    }
  });
})


 