<?php

namespace App\Message;

class CommentMessage 
{
    private $id;
    private $context;

    public function __construct(int $id, array $context = [])
    {
        $this->id = $id;
        $this->context = $context;
    }

    public function getId() 
    {
        return $this->id;
    }

    public function getContext()
    {
        return $this->context;
    }
}