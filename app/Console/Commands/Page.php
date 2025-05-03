<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class Page extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:page';


    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a page';



    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
    }



    protected function createFileFromStub($stubName, $destinationPath)
    {
        $stubPath = base_path("stubs/{$stubName}");

        if (!File::exists($stubPath)) {
            $this->error("🛑 Stub {$stubName} not found.");
            return;
        }

        $content = File::get($stubPath);
        $content = str_replace('{{ name }}', class_basename($destinationPath), $content);

        File::ensureDirectoryExists(dirname($destinationPath));
        File::put($destinationPath, $content);
    }
}
