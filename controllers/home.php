<?php

function index($view)
{
    $screens = require 'data/screens.php';

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
    $sql = "SELECT * FROM `buttons` WHERE `deleted_at` IS NULL";
    $res = query($sql);

    echo json_encode([
        'success'   => true,
        'buttons'    => $res->fetchAll(PDO::FETCH_ASSOC),
    ]);
}