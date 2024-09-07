<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::insert([
            [
                'name' => 'Service 1',
                'slug' => 'service-1',
                'description' => 'This is the description for service 1.',
                'service_icon_id' => 1,
                'price' => 100.00,
                'image' => null,
                'active' => true,
            ],
            [
                'name' => 'Service 2',
                'slug' => 'service-2',
                'description' => 'This is the description for service 2.',
                'service_icon_id' => 2,
                'price' => 200.00,
                'image' => null,
                'active' => true,
            ],
            [
                'name' => 'Service 3',
                'slug' => 'service-3',
                'description' => 'This is the description for service 3.',
                'service_icon_id' => 3,
                'price' => 300.00,
                'image' => null,
                'active' => true,
            ],
            [
                'name' => 'Service 4',
                'slug' => 'service-4',
                'description' => 'This is the description for service 4.',
                'service_icon_id' => 4,
                'price' => 400.00,
                'image' => null,
                'active' => true,
            ],
            [
                'name' => 'Service 5',
                'slug' => 'service-5',
                'description' => 'This is the description for service 5.',
                'service_icon_id' => 5,
                'price' => 500.00,
                'image' => null,
                'active' => true,
            ],
        ]);
    }
}
