$( document ).ready(function() {
  $.ajax({
     url: "https://raw.githubusercontent.com/MehediH/InsideTen/gh-pages/api.json",
     dataType: "text",
     success: function(data) {

         var json = $.parseJSON(data);


         //PC Release Preview
         var pc_wrp_build = json.pcwrp.build;
         var pc_wrp_version = json.pcwrp.version;
         var pc_wrp_more = json.pcwrp.more;
         var pc_wrp_date = json.pcwrp.release_date;

         //PC Insider Fast
         var pc_wif_build = json.pcwif.build;
         var pc_wif_version = json.pcwif.version;
         var pc_wif_more = json.pcwif.more;
         var pc_wif_date = json.pcwif.release_date;

         //PC Insider Slow
         var pc_wis_build = json.pcwis.build;
         var pc_wis_version = json.pcwis.version;
         var pc_wis_more = json.pcwis.more;
         var pc_wis_date = json.pcwis.release_date;

         //MO Release Preview
         var mo_wrp_build = json.mowrp.build;
         var mo_wrp_version = json.mowrp.version;
         var mo_wrp_more = json.mowrp.more;
         var mo_wrp_date = json.mowrp.release_date;

         //MO Insider Fast
         var mo_wif_build = json.mowif.build;
         var mo_wif_version = json.mowif.version;
         var mo_wif_more = json.mowif.more;
         var mo_wif_date = json.mowif.release_date;

         //MO Insider Slow
         var mo_wis_build = json.mowis.build;
         var mo_wis_version = json.mowis.version;
         var mo_wis_more = json.mowis.more;
         var mo_wis_date = json.mowis.release_date;

         //release dates
         $(".insider-builds .list-builds #i-pc .insider-release-preview .release-date").append(pc_wrp_date);
         $(".insider-builds .list-builds #i-pc .insider-fast .release-date").append(pc_wif_date);
         $(".insider-builds .list-builds #i-pc .insider-slow .release-date").append(pc_wis_date);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview .release-date").append(mo_wrp_date);
         $(".insider-builds .list-builds #i-mobile .insider-fast .release-date").append(mo_wif_date);
         $(".insider-builds .list-builds #i-mobile .insider-slow .release-date").append(mo_wis_date);

         //version names
         $(".insider-builds .list-builds #i-pc .insider-release-preview .build-version").append(pc_wrp_version);
         $(".insider-builds .list-builds #i-pc .insider-fast .build-version").append(pc_wif_version);
         $(".insider-builds .list-builds #i-pc .insider-slow .build-version").append(pc_wis_version);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview .build-version").append(mo_wrp_version);
         $(".insider-builds .list-builds #i-mobile .insider-fast .build-version").append(mo_wif_version);
         $(".insider-builds .list-builds #i-mobile .insider-slow .build-version").append(mo_wis_version);

         //build numbers
         $(".insider-builds .list-builds #i-pc .insider-release-preview .build-number").append(pc_wrp_build);
         $(".insider-builds .list-builds #i-pc .insider-fast .build-number").append(pc_wif_build);
         $(".insider-builds .list-builds #i-pc .insider-slow .build-number").append(pc_wis_build);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview .build-number").append(mo_wrp_build);
         $(".insider-builds .list-builds #i-mobile .insider-fast .build-number").append(mo_wif_build);
         $(".insider-builds .list-builds #i-mobile .insider-slow .build-number").append(mo_wis_build);

         //build links
         $(".insider-builds .list-builds #i-pc .insider-release-preview a").attr("href", pc_wrp_more);
         $(".insider-builds .list-builds #i-pc .insider-fast a").attr("href", pc_wif_more);
         $(".insider-builds .list-builds #i-pc .insider-slow a").attr("href", pc_wis_more);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview a").attr("href", mo_wrp_more);
         $(".insider-builds .list-builds #i-mobile .insider-fast a").attr("href", mo_wif_more);
         $(".insider-builds .list-builds #i-mobile .insider-slow a").attr("href", mo_wis_more);

         $(".internal-builds .internal-build-inside h3").append(json.internal.build);
         $(".internal-build-text").append("According to our sources, Microsoft is currently testing Windows 10 Build " + json.internal.build + " internally. Of course, Microsoft is testing new builds everyday, so this build may not be the very latest one. However, check back in a few hours to get more updates or <a href='http://twitter.com/InsideTen_' target='_blank'>follow us on Twitter here.</a>");

         var sourcelink = json.internal.source;

         if (sourcelink == "") {
           $(".internal-builds").addClass("inc-source");
         } else{
           $(".internal-builds .btn").attr("href", sourcelink);
         }
    }
  });
});
