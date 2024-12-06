<?php

declare(strict_types=1);

function dispach(string $uri, string $method): void
{
    // 1) normalize the URI: GET /guestbook -> routes /guestbook_get.php
    // 2) GET|POST - return 404
    // 3) file path - php file path
    // 4) if this file exists, if not 404
    // 5) handle the routes by including php files

}
