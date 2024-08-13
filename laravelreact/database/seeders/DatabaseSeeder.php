<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Huỳnh Mẫn Đạt',
            'email' => 'datmanhuynh0812@gmail.com',
            'password' => Hash::make('password'),
            'address' => 'Mp7 Mizuiki Park Bình Hưng',
            'phone' => '0374346168',
        ]);
    }
}
