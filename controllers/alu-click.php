<?php

function index($view)
{
    // $colors= require 'data/colors.php';

    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function getColorData()
{
    try {
        $query = "SELECT * FROM `colors` WHERE `deleted_at` IS NULL";
        $result = query($query);

        $colors = $result->fetchAll(PDO::FETCH_ASSOC);

        $success = true;
        $message = "Success";
    } catch (Exception $e) {
        $colors = null;
        $success = false;
        $message = $e->getMessage();
    }

    echo json_encode([
        'success'   => $success,
        'message'   => $message,
        'colors'  => $colors,
    ]);
}

function registerSuccessful()
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/register-succful.view.php';
}
