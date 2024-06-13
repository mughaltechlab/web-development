<?php

namespace App\Console\Commands;

use App\Http\Services\TradingBotService;
use App\User;
use Illuminate\Console\Command;

class TradingBotCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'trading:bot';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Default trading bot that place buy and sell order ';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        storeBotException('TradingBotCommand running', date('Y-m-d H:i:s'));
        $service = new TradingBotService();
        $userData = User::where(['role' => USER_ROLE_ADMIN])->first();
        $user = User::where(['role' => USER_ROLE_ADMIN,'status' => STATUS_ACTIVE, 'is_default' => 1])->first();
        if ($user) {
            $userData = $user;
        }

        // if(allsetting('enable_bot_trade') == STATUS_ACTIVE) {
            $response = $service->placeBotOrder($userData);
            // dd($response);
        // }
        storeBotException('TradingBotCommand end', date('Y-m-d H:i:s'));
    }
}
