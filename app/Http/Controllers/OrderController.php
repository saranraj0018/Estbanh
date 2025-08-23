<?php

namespace App\Http\Controllers;

use App\Contracts\Address;
use App\Contracts\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use App\Models\ProductDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function __construct(public readonly Cart $cart, public readonly Address $address)
    {
        //
    }




    public function index()
    {
        return Inertia::render('users/Checkout', [
            'products' => $this->cart->get(),
            'address' => Auth::user()->address,
            "invoice" => $this->cart->getCartValue()
        ]);
    }






    public function orders()
    {
        return Inertia::render('users/Orders', [
            'orders' => Order::where('user_id', Auth::id())
                ->with('orderDetails')
                ->latest()
                ->get()
        ]);
    }







    public function createOrder()
    {

        try {
            DB::beginTransaction();

            # get cart values
            $cart = $this->cart->get();


            # create order
            $order = Order::create([
                'order_id' => '#' . date('YmdHis_') . str_replace(' ', '', strtolower(Auth::user()->name)),
                'user_id' => Auth::id(),
                'address_id' => $this->address->getDefault()?->id,
                'phone' => Auth::user()->phone,
                'email' => Auth::user()->email,
                'status' => "1",
                'net_amount' => $cart->sum('net_amount'),
                'gross_amount' => $cart->sum('gross_amount'),
                'created_by' => Auth::id(),
            ]);


            $cart->map(function ($item) use ($order) {
                # get the product
                $product = Product::find($item['id']);
                if (!$product) throw new \Exception('Product Not Found', 404);

                # create order details for the product
                $details = OrderDetail::create([
                    'order_id' => $order->id,
                    'product_id' => $item['id'],
                    'category_id' => $product?->detail?->category_id || 1,
                    'product_name' => $product->name,
                    'quantity' => $item['quantity'],
                    'net_amount' => $item['net_amount'],
                    'gross_amount' => $item['gross_amount'],
                    'weight' => $item['weight'],
                ]);

                if ($details) {
                    $this->cart->removeFromCart($item['id']);
                }
            });

            DB::commit();

            return redirect(route('order.home'))->with('success', 'Order created successfully');;
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }


    public function updateOrder()
    {
        //
    }
}
