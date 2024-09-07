<?php

namespace Database\Seeders;

use App\Models\ServiceIcon;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServiceIconSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            '<i class="far fa-gem"></i>' => 'Design',
            '<i class="fas fa-code"></i>' => 'Development',
            '<i class="fas fa-tv"></i>' => 'SEO',
            '<i class="fas fa-cloud"></i>' => 'Cloud Computing',
            '<i class="fas fa-lock"></i>' => 'Cybersecurity',
            '<i class="fas fa-database"></i>' => 'Database Management',
            '<i class="fas fa-chart-line"></i>' => 'Data Analytics',
            '<i class="fas fa-mobile-alt"></i>' => 'Mobile App Development',
            '<i class="fas fa-server"></i>' => 'Server Maintenance',
            '<i class="fas fa-project-diagram"></i>' => 'Project Management',
            '<i class="fas fa-bug"></i>' => 'Testing & QA',
            '<i class="fas fa-cogs"></i>' => 'DevOps',
            '<i class="fas fa-headset"></i>' => 'Technical Support',
            '<i class="fas fa-shopping-cart"></i>' => 'E-commerce Solutions',
            '<i class="fas fa-search"></i>' => 'Search Engine Optimization (SEO)',
            '<i class="fas fa-pencil-ruler"></i>' => 'UI/UX Design',
            '<i class="fas fa-robot"></i>' => 'Artificial Intelligence',
            '<i class="fas fa-network-wired"></i>' => 'Networking',
            '<i class="fas fa-tools"></i>' => 'Software Maintenance',
            '<i class="fas fa-sync-alt"></i>' => 'Version Control',
            '<i class="fas fa-code-branch"></i>' => 'Continuous Integration/Continuous Deployment (CI/CD)',
            '<i class="fas fa-globe"></i>' => 'Web Development',
            '<i class="fas fa-cloud-upload-alt"></i>' => 'Cloud Hosting',
            '<i class="fas fa-pencil-alt"></i>' => 'Content Creation',
            '<i class="fas fa-shield-alt"></i>' => 'Data Privacy & Security',
            '<i class="fas fa-comments"></i>' => 'Customer Support Solutions',
            '<i class="fas fa-user-shield"></i>' => 'User Authentication',
        ];

        foreach ($services as $icon => $name) {
            ServiceIcon::insert([
                'name' => $name,
                'slug' => Str::slug($name),
                'icon' => $icon,
            ]);
        }
    }
}
