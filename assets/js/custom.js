$(document).ready(function() {

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

        $(".nav-link").click(function(){
          var linktext= $(this).text();

          $(".modal-btn span").text(linktext);

           var tabLinkText = linktext.replace(/\s+/g,"-");
           //var c = b.toLowerCase(b);
           $(".btn.btn-blue.ml-auto").attr("data-target","#" + tabLinkText);

           if(linktext == 'Print Pricing'){
                linktext = 'Pricing';
                $(".modal-btn span").text(linktext);
             }
          if(linktext == 'Postage Pricing'){
             linktext = 'Postage';
             $(".modal-btn span").text(linktext);
          }
          if(linktext == 'Groups'){
             linktext = 'Group';
             $(".modal-btn span").text(linktext);
          }
        });
    
});
