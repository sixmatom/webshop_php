<?php

function index($view)
{
    $colors = require 'data/colors.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function saveCard()
{
    dd($_REQUEST);

    echo json_encode([
        'success'   => true,
        'message'   => 'Fruit added to order',
        'redirect'  => '',
    ]);
}

function getData()
{
    echo json_encode([
        'success'   => true,
        'colors'    => require 'data/colors.php',
    ]);
}