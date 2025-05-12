<?php

namespace App\EntityListener;

use App\Entity\Conference;
use Doctrine\ORM\Event\PrePersistEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Symfony\Component\String\Slugger\SluggerInterface;

class ConferenceEntityListener
{
    private SluggerInterface $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    public function prePersist(Conference $conference, PrePersistEventArgs $event): void
    {
        $conference->computeSlug($this->slugger);
    }

    public function preUpdate(Conference $conference, PreUpdateEventArgs $event): void
    {
        $conference->computeSlug($this->slugger);
    }
}
