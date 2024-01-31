<?php

namespace App\Test;

    class Test
    {
        protected array $config;

        public function __construct(array $config = ['some'=> "info"]) {
            $this->config = $config;
        }

        public function showConfig()
        {
            return  $this->config;
        }
    }   