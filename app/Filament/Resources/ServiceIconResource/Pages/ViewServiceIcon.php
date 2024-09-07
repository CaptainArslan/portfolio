<?php

namespace App\Filament\Resources\ServiceIconResource\Pages;

use App\Filament\Resources\ServiceIconResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewServiceIcon extends ViewRecord
{
    protected static string $resource = ServiceIconResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
