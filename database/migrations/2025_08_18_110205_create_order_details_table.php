<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id');
            $table->integer('product_id');
            $table->integer('category_id');
            $table->integer('varient_id')->nullable();
            $table->string('product_name');
            $table->integer('quantity');
            $table->double('net_amount');
            $table->double('gross_amount');
            $table->string('weight')->default(0);
            $table->integer('tax_type')->nullable();
            $table->integer('tax_percentage')->nullable();
            $table->double('tax_amount')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
