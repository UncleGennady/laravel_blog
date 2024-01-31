<?php

namespace App\Notifications;

use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;

class QueueSendEmailVerificationNotification extends SendEmailVerificationNotification implements ShouldQueue
{
    use Queueable;
}
