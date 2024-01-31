<?php

use Illuminate\Support\Facades\Facade;

class Test extends Facade
{
    public static function getFacadeAccessor()

    {
        return "test";
    }
}
