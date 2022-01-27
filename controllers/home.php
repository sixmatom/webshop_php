<?php

function index($view)
{
    // $screens = require 'data/screens.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function getData()
{
    try {
        $query = "SELECT * FROM `screens` WHERE `deleted_at` IS NULL";
        $result = query($query);

        $screens = $result->fetchAll(PDO::FETCH_ASSOC);

        $success = true;
        $message = "Success";
    } catch (Exception $e) {
        $screens = null;
        $success = false;
        $message = $e->getMessage();
    }

    echo json_encode([
        'success'   => $success,
        'message'   => $message,
        'screens'  => $screens,
    ]);
}

function registerSuccessfull()
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/register-succesfull.view.php';
}