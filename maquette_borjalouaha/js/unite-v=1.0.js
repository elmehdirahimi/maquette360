$( document ).ready(function() {

    var grandeur = "";
    var chambre = "";
    var exposition = "";
    var prix = "";
    var salledebain = "";
    var typeunite = "";
    var typeunitePage = "";
    var emplacement = "";
    var etage = 0;

    var nombreMax = $(".nombreMax").val();
    var nombreMin = 4
    var nombreAffichage = nombreMin;

    affichageBouton(nombreMax,nombreAffichage);

    ajoutClickPlan();

    /*bouton plus de résultats*/
    $('.bouton-resultats').click(function(event) {

        grandeur = $(".grandeur").val();
        chambre = $(".chambre").val();
        exposition = $(".exposition").val();
        prix = $(".prix").val();
        salledebain = $(".salledebain").val();
        typeunite = $(".typeunite").val();
        typeunitePage = $(".typeunitePage").val();
        emplacement = $(".emplacement").val();
        etage = $(".etageCourant").val();

        nombreAffichage = +$(".nombreAffichage").val() + nombreMin;
        nombreMax = $(".nombreMax").val();
        page = p;

        //post
        postItem(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage,nombreAffichage,nombreMax,page);

        $(".nombreAffichage").val(nombreAffichage);
        
        //bouton supprimer filtre
        supprimerFiltre(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage);
            
    });

    /*dropdown selection filtre*/
    $( "select" ).change(function() {

        grandeur = $(".grandeur").val();
        chambre = $(".chambre").val();
        exposition = $(".exposition").val();
        prix = $(".prix").val();
        salledebain = $(".salledebain").val();
        typeunite = $(".typeunite").val();
        typeunitePage = $(".typeunitePage").val();
        emplacement = $(".emplacement").val();

        if($(".etageSelection").val() > 0){
            etage = $(".etageSelection").val();
        }else{
            etage = $(".etageCourant").val();
        }

        nombreAffichage = $(".nombreAffichage").val();
        nombreMax = $(".nombreMax").val();
        page = p;

        //post
        postItem(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage,nombreAffichage,nombreMax,page);

        //bouton supprimer filtre
        supprimerFiltre(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage);

    });

    //filtre étage
    $( ".etageSelection" ).change(function() {

        grandeur = $(".grandeur").val(0);
        chambre = $(".chambre").val(0);
        exposition = $(".exposition").val(0);
        prix = $(".prix").val(0);
        salledebain = $(".salledebain").val(0);
        typeunite = $(".typeunite").val(0);
        typeunitePage = $(".typeunite").val(0);
        emplacement = $(".emplacement").val(0);

        etage = $(this).val();

        if(etage == 0){

            $(".js-reinit").trigger("click");

        }else{

            $(".etage"+etage+"").trigger("click");

        }

    });

    /*clique sur une étage de l'immeuble*/
    $( ".etage,.planListeLien" ).click(function() {

        grandeur = $(".grandeur").val();
        chambre = $(".chambre").val();
        exposition = $(".exposition").val();
        prix = $(".prix").val();
        salledebain = $(".salledebain").val();
        typeunite = $(".typeunite").val();
        typeunitePage = $(".typeunitePage").val();
        emplacement = $(".emplacement").val();

        etage = $(this).data('id');
        
        nombreAffichage = $(".nombreAffichage").val();
        nombreMax = $(".nombreMax").val();
        page = p;

        titre = $(this).data('title');

        $('.etageSelection').val(etage).attr('selected','selected');

        $('.etageCourant').val(etage);
        $('.titreEtage').html(titre);

        //post
        postItem(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage,nombreAffichage,nombreMax,page);

        //bouton supprimer filtre
        supprimerFiltre(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage);

        //affichePopupEtage(etage);
        var entete = $("#entete").outerHeight();
        var target = $('#selecteurPlanEtage');
        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top - entete}, 750);
            return false;
        }

    });

    /*clique sur une étage de l'immeuble*/
    $( ".js-reinit" ).click(function() {

        $(".grandeur").val(0);
        $(".chambre").val(0);
        $(".exposition").val(0);
        $(".prix").val(0);
        $(".salledebain").val(0);
        $(".typeunite").val(0);
        $(".typeunitePage").val(0);
        $(".emplacement").val(0);
        $(".etage").val(0);

        grandeur = 0;
        chambre = 0;
        exposition = 0;
        prix = 0;
        salledebain = 0;
        typeunite = 0;
        typeunitePage = 0;
        emplacement = 0;
        etage = 0;

        nombreAffichage = $(".nombreAffichage").val();
        nombreMax = $(".nombreMax").val();
        page = p;

        titre = $(this).data('title');

        $('.etageSelection').val(etage).attr('selected','selected')

        $('.etageCourant').val(etage);
        $('.titreEtage').html(titre);

        //post
        postItem(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage,nombreAffichage,nombreMax,page);

        //bouton supprimer filtre
        supprimerFiltre(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage);

        $('#popUpEtage').removeClass('actif');
        $(".planListeLien, .etage").removeClass('actif');

        $(".planEtage").hide();
    });

});

function affichageBouton(nombreMax,nombreAffichage){

    if(Number(nombreAffichage) >= Number(nombreMax)){

        $('.bouton-resultats').hide();

    }else{

        $('.bouton-resultats').show();

    }

}

function afficherCaracteristiques(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage,nombreAffichage,nombreMin,nombreMax,page,type){

    grandeur = grandeur;
    chambre = chambre;
    exposition = exposition;
    prix = prix;
    salledebain = salledebain;
    typeunite = typeunite;
    typeunitePage = typeunitePage;
    emplacement = emplacement;
    etage = etage;
    
    nombreAffichage = nombreAffichage;
    nombreMin = nombreMin;
    nombreMax = nombreMax;
    page = page;
    type = type;

}

function supprimerFiltre(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage){

    if(grandeur == 0 && chambre == 0 && exposition == 0 && prix == 0 && salledebain == 0 && typeunite == 0 && typeunitePage == 0 && emplacement == 0 && etage == 0){

        $(".js-reinit").removeClass('actif');

    }else{
        
        $(".js-reinit").addClass('actif');
        
    }

}

function postItem(grandeur,chambre,exposition,prix,salledebain,typeunite,typeunitePage,emplacement,etage,nombreAffichage,nombreMax,page){

    $.post("inc/ajax/unite.cfm", { 

        grandeur: grandeur,
        chambre: chambre,
        exposition: exposition,
        prix: prix,
        salledebain: salledebain,
        typeunite: typeunite,
        typeunitePage: typeunitePage,
        emplacement: emplacement,
        etage: etage,
        
        nombreAffichage: nombreAffichage,
        nombreMax: nombreMax,
        page: page,

    }, function(result){

        $('.listeResultatUnite').html(result);

        ajoutClickPlan();

    });

}

function ajoutClickPlan() {
    $(".uniteItem").each(function(){
        var lien = $(this).find('a.planPDF');
        if ( lien ) { 
            $(this).addClass('estCliquable').find('.uniteItemCol:not(.c8)').click(function(){
                var lienUrl = lien.attr('href');
                window.open(lienUrl, '_blank');
            });
        }
    }); 
}