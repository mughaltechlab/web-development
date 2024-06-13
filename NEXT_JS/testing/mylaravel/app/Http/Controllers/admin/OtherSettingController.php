<?php

namespace App\Http\Controllers\admin;

use App\Model\Coin;
use App\Model\Wallet;
use Illuminate\Http\Request;
use App\Model\WithdrawHistory;
use App\Model\DepositeTransaction;
use Illuminate\Support\Facades\DB;
use App\Model\WalletAddressHistory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class OtherSettingController extends Controller
{
    public function otherSetting()
    {
        $data['tab']='address_delete';
        if(isset($_GET['tab'])){
            $data['tab']=$_GET['tab'];
        }
        $data['title'] = __('Other Settings');
        $data['settings'] = allsetting();

        if($data['tab'] == 'address_delete'){
            $data['coins'] = Coin::get('coin_type');
        }

        return view('admin.settings.other', $data);
    }

    public function deleteWalletAddress(Request $request)
    {
        // redirect response saved in variable
        $redirect = redirect()->route('otherSetting', ['tab' => 'address_delete']);

        // check is coin type available
        if(! (isset($request->coin_type) && !empty($request->coin_type))) 
            return $redirect->with("dismiss", __("Select a coin to delete address"));
        
        // check is password has
        if(! (isset($request->password) && !empty($request->password))) 
            return $redirect->with("dismiss", __("Admin password is required for this action")); 
        
        // check admin
        if(!$admin = DB::table("users")->where("id", auth()->id())->first()) 
            return $redirect->with("dismiss", __("Admin not found"));

        // check password
        if(! (Hash::check($request->password, $admin->password)))
            return $redirect->with("dismiss", __("Password is incorrect"));
        
        // check is coin available
        if(! $coin = Coin::where('coin_type', $request->coin_type)->first())
            return $redirect->with("dismiss", __("Select coin not found"));

        // check is wallet has in system
        if(! $wallet = Wallet::where('coin_type', $request->coin_type)->first())
            return $redirect->with("dismiss", __("Select coin has no wallet"));

        // check is wallet have address
        if(! $address = WalletAddressHistory::where('coin_type', $request->coin_type)->first())
            return $redirect->with("dismiss", __("Selected coin's wallet dose not have address"));

        // delete all data of selected coin
        try{
            DB::beginTransaction();
            $addressDelete  = WalletAddressHistory::where('coin_type', $request->coin_type)->delete();
            $depositDelete  = DepositeTransaction::where(['coin_type' => $request->coin_type])->delete();
            $withdrawDelete = WithdrawHistory::where(['coin_type' => $request->coin_type])->delete();
            DB::commit();
            return $redirect->with("success", __("Selected coin's wallet address deleted successfully"));
        } catch(\Exception $e) {
            storeException("deleteWalletAddress", $e->getMessage());
            DB::rollBack();
            return $redirect->with("dismiss", __("Failed to delete selected coin's wallet address"));
        }
    }
}
