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

         //Internal Dev
         var int_dev_build = json.internal.build;
         var int_dev_version = json.internal.version;
         var int_dev_more = json.internal.more;
         var int_dev_date = json.internal.release_date;

         //Internal Servicing
         var int_cs_build = json.internalservice.build;
         var int_cs_version = json.internalservice.version;
         var int_cs_more = json.internalservice.more;
         var int_cs_date = json.internalservice.release_date;

         //release dates
         $(".insider-builds .list-builds #i-pc .insider-release-preview .release-date").append(pc_wrp_date);
         $(".insider-builds .list-builds #i-pc .insider-fast .release-date").append(pc_wif_date);
         $(".insider-builds .list-builds #i-pc .insider-slow .release-date").append(pc_wis_date);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview .release-date").append(mo_wrp_date);
         $(".insider-builds .list-builds #i-mobile .insider-fast .release-date").append(mo_wif_date);
         $(".insider-builds .list-builds #i-mobile .insider-slow .release-date").append(mo_wis_date);

         $(".internal-builds .internal-dev-branch .release-date").append(int_dev_date);
         $(".internal-builds .internal-cs-branch .release-date").append(int_cs_date);

         //version names
         $(".insider-builds .list-builds #i-pc .insider-release-preview .build-version").append(pc_wrp_version);
         $(".insider-builds .list-builds #i-pc .insider-fast .build-version").append(pc_wif_version);
         $(".insider-builds .list-builds #i-pc .insider-slow .build-version").append(pc_wis_version);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview .build-version").append(mo_wrp_version);
         $(".insider-builds .list-builds #i-mobile .insider-fast .build-version").append(mo_wif_version);
         $(".insider-builds .list-builds #i-mobile .insider-slow .build-version").append(mo_wis_version);

         $(".internal-builds .internal-dev-branch .build-version").append(int_dev_version);
         $(".internal-builds .internal-cs-branch .build-version").append(int_cs_version);

         //build numbers
         $(".insider-builds .list-builds #i-pc .insider-release-preview .build-number").append(pc_wrp_build);
         $(".insider-builds .list-builds #i-pc .insider-fast .build-number").append(pc_wif_build);
         $(".insider-builds .list-builds #i-pc .insider-slow .build-number").append(pc_wis_build);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview .build-number").append(mo_wrp_build);
         $(".insider-builds .list-builds #i-mobile .insider-fast .build-number").append(mo_wif_build);
         $(".insider-builds .list-builds #i-mobile .insider-slow .build-number").append(mo_wis_build);

         $(".internal-builds .internal-dev-branch .build-number").append(int_dev_build);
         $(".internal-builds .internal-cs-branch .build-number").append(int_cs_build);

         //build links
         $(".insider-builds .list-builds #i-pc .insider-release-preview a").attr("href", pc_wrp_more);
         $(".insider-builds .list-builds #i-pc .insider-fast a").attr("href", pc_wif_more);
         $(".insider-builds .list-builds #i-pc .insider-slow a").attr("href", pc_wis_more);

         $(".insider-builds .list-builds #i-mobile .insider-release-preview a").attr("href", mo_wrp_more);
         $(".insider-builds .list-builds #i-mobile .insider-fast a").attr("href", mo_wif_more);
         $(".insider-builds .list-builds #i-mobile .insider-slow a").attr("href", mo_wis_more);
         
         $(".internal-builds .internal-dev-branch a").attr("href", int_dev_more);
         $(".internal-builds .internal-cs-branch a").attr("href", int_cs_more);
        
    }
  });
});
