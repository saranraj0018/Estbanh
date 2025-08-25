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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_id')->default('#' . date('YmdHis'));
            $table->string('user_id'); # customer
            $table->longText('address_id');
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->enum('status', [1, 2, 3, 4, 5, 6])->default(1);
            $table->double('net_amount');
            $table->double('shipping_amount')->default(0);
            $table->double('gross_amount');
            $table->double('gst_amount')->default(0);
            $table->longText('notes')->nullable();
            $table->integer('coupon_id')->nullable();
            $table->double('coupon_amount')->nullable();
            $table->dateTime('shipped_at')->nullable();
            $table->dateTime('delivered_at')->nullable();
            $table->integer('created_by');
            $table->integer('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
