
$(function() {

  $('#myModal').on('show', function(e) {
    console.log(e);
  });

  // $('.grid-products .btn').click(function () {
  //   $this = $(this);
  //   $parent = $($this.parent().parent());
  //   var id = $parent.attr('data-id');

  // });


  $('#gallery').gallery({
    // url: 'http://local.dev:3000/data.json',
    url: '/products',
    viewerTemplate: Handlebars.compile($("#viewer-template").html()),
    thumbnailTemplate: Handlebars.compile($("#thumbnail-template").html()),
    effects: function(element) {
      // apply effects
      element
        .mouseover(function() {
          $('.btn-navigate').stop().fadeTo(500, 1);
          // $('.info').stop().fadeTo(500, 1);
        })
        .mouseout(function() {
          $('.btn-navigate').stop().fadeTo(500, 0);
          // $('.info').stop().fadeTo(500, 0);
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
      $(".btn-bid[data-action]").click( function() {
        $this = $(this);
        var id = $this.attr("data-id")
          , action = $this.attr("data-action");

        $.post("/bid/" + id, { 
          action: action
        }, function(data) {

          var $parent = $($this[0]).parent();

          console.log(data);
          if( data.message == undefined ) {

            if( data.currentPrice >= data.maxPrice ) {
              $parent.fadeTo(500, 0, function() {
                $parent.html("<h1>You won the auction congrats!</h1>").fadeTo(500, 1);
              });
            }
            else {
              $parent.find("#appendedPrependedInput")
                .attr("value", data.currentPrice);
            }
          } else {
            $parent.html("<h1>" + data.message + "</h1>");
          }

          
        }, "json" );

      });
    }
  });
})


 