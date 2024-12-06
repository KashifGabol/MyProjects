<?php

declare(strict_types=1);
const ALLOWED_METHODS = ['GET', 'POST'];  // Correct

const INDEX_URI = '';
const INDEX_ROUTE = 'index';


// normalize uri

function normalizeUri(string $uri): string
{
    $uri = strtolower(trim($uri, '/'));
    return $uri === INDEX_URI ? INDEX_ROUTE : $uri;
}

function getFilePath(string $uri, string $method): string
{

    return ROUTES_DIR . '/' . normalizeUri($uri) . '-' . strtolower($method) . '.php';
}

function notFound(): void
{
    http_response_code(404);
    echo "404 not found";
    exit;
}

function dispatch(string $uri, string $method): void
{
    // 1) normalize the URI: GET /guestbook -> routes /guestbook_get.php
    $uri = normalizeUri($uri);
    $method = strtoupper($method);

    // 2) GET|POST - return 404

    if (!in_array($method, ALLOWED_METHODS)) {
        notFound();
    }
    // 3) file path - php file path
    var_dump(getFilePath($uri, $method));
    die;
    // 4) if this file exists, if not 404
    // 5) handle the routes by including php files

}
