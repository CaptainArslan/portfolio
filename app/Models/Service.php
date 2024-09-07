<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon',
        'service_icon_id',
        'price',
        'image',
        'active',
    ];

    public function serviceIcon(): BelongsTo
    {
        return $this->belongsTo(ServiceIcon::class);
    }
}
