<?php

namespace App\Providers;

use App\Contracts\ImageSaving;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use App\Models\User as UserModel;
use App\Services\Image;
use Illuminate\Support\Facades\Auth;

/**
 * @mixin UserModel
 */

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(ImageSaving::class, function ($app) {
            return new Image();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blade::if('role', function (string $role) {
            //  /** @var \App\Models\User $user */
            //  $user = auth()->user();
            //  return $user && $user->hasRole($role);
            $user = Auth::user();
            return $user && $user->hasRole($role);
        });
    }
}
