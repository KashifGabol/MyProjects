<?php

declare(strict_types=1);

const ALLOWED_METHODS = ['GET', 'POST'];
const INDEX_URI = '';
const INDEX_ROUTE = 'index';

//1- normalize the URI: get/gestbook -> routes/guestbook_get.php
function normalizUri(string $uri): string
{
    $uri = strtolower(trim($uri, '/'));
    return $uri === '' ? INDEX_ROUTE : $uri;
}

//2- GET/POST otherwise 404
function notFound(): void
{
    http_response_code(404);
    echo "Page not Found";
}

//3- file path - php file path
function getFilePath($uri, $method): string
{
    return ROUTES_DIR
        . '/' . normalizUri($uri)
        . '-' . strtolower($method)
        . '.php';
}

function dispatch(string $uri, string $method): void
{
    //1- normalize the URI: get/gestbook -> routes/guestbook_get.php
    $uri = normalizUri($uri);
    $method = strtoupper($method);

    // var_dump($uri);
    // die;

    //2- GET/POST otherwise 404
    if (!in_array($method, ALLOWED_METHODS)) {
        notFound();
    }
    //3- file path - php file path
    // var_dump(getFilePath($uri, $method));
    $filePath = getFilePath($uri, $method);
    if (file_exists($filePath)) {
        include $filePath;
        return;
    }
    notFound();
    //4- if file exist not 404
    //5- handle the routes including the php files



}
