<?php

function seedTable()
{


    $screens = [
        [
            'id'        => "1",
            'product'   => "alu-click",
            'type'      => "hor",
            'title'     => "Alu-click",
            'path'      => "aluclick1.jpg",
            'info'      => "<li> voor nagenoeg alle naar binnendraaiende aluminium ramen</li> <li>Monteren zonder boren of schroeven</li> <li>Keuze uit 14 verschillende kleuren</li>"
        ],

        [
            'id'        => "2",
            'product'   => "inzethor",
            'type'      => "hor",
            'title'     => "Inzethor",
            'path'      => "horren1.jpg",
            'info'      => "<li>Bijzonder geschikt voor den draai-valramen in kunststof én in hout</li> <li>Keuze uit 4 verschillende profielen</li> <li>Monteren zonder boren of schroeven</li>",
        ],

        [
            'id'        => "3",
            'product'   => "inklemhor",
            'type'      => "hor",
            'title'     => "Inklemhor",
            'path'      => "inklem1.jpg",
            'info'      => "<li>Geschikt voor nagenoeg al naar binnen draaiende ramen met verdiepte profielen</li> <li>Door de mohair borstelstrip is afdichting voor insecten gegarandeerd.</li>",
        ],

        [
            'id'        => "4",
            'product'   => "plissé hordeur",
            'type'      => "hor",
            'title'     => "Plissé hordeur",
            'path'      => "plissedeur1.jpg",
            'info'      => "<li>Gemaakt van geplisseerd horrengaas</li> <li> hordeur neemt weinig ruimte in beslag</li> <li>Onderhoudsvrij en weersbestendig</li>",
        ],

        [
            'id'        => "5",
            'product'   => "plissé raamhor",
            'type'      => "hor",
            'title'     => "Plissé raamhor",
            'path'      => "plisseraamhor1.jpg",
            'info'      => "<li>Horizontaal of verticaal te bedienen</li> <li>Geschikt voor naar buiten draaiende ramen</li> <li>Heeft een luxe uitstraling</li>",
        ],

        [
            'id'        => "6",
            'product'   => "raamdecoratie",
            'type'      => "raamdecoratie",
            'title'     => "Raamdecoratie",
            'path'      => "raamdeco1.jpg",
            'info'      => "<li>Geschikt voor bijna alle ramen in kunststof, aluminium en in hout</li> <li>Keuze uit 26 standaard dessins Enkelvoudig- of honingraatplissé</li>",
        ],

        [
            'id'        => "7",
            'product'   => "raamrolhor",
            'type'      => "hor",
            'title'     => "Raamrolhor",
            'path'      => "rolhor3.jpg",
            'info'      => "<li>Eenvoudige oplossing voor naar buitendraaiende ramen</li> <li>Keuze uit 3 verschillende profielen</li> <li>Kan eenvoudig worden verwijderd</li>",
        ],

        [
            'id'        => "8",
            'product'   => "scharnierende hordeur",
            'type'      => "hor",
            'title'     => "Scharnierende hordeur",
            'path'      => "scharnierdeur1.jpg",
            'info'      => "<li>Eén van de meest solide oplossingen bij enkele deuren</li> <li>Weinig bewegende delen</li> <li>Voor deuren tot 1300x2600mm</li>",
        ],

        [
            'id'        => "9",
            'product'   => "schuifhordeur",
            'type'      => "hor",
            'title'     => "Schuifhordeur",
            'path'      => "schuifhordeur1.jpg",
            'info'      => "<li>Geschikt voor schuifpuien</li> <li>Kan altijd in het kozijn blijven zitten</li> <li>Geschikt voor kunststof, houten en aluminium deurkozijnen</li>",
        ],

        [
            'id'        => "10",
            'product'   => "voorzethor",
            'type'      => "hor",
            'title'     => "Voorzethor",
            'path'      => "voorzet1.jpg",
            'info'      => "<li>Eenvoudige oplossing voor naar buitendraaiende ramen</li> <li>Keuze uit 3 verschillende profielen</li> <li>Kan eenvoudig worden verwijderd.</li>",
        ],

    ];

    $sql = "TRUNCATE `screens`.`screens`";

    query($sql);

    foreach ($screens as $screen) {


        insert($screen, 'screens');
    }
}
