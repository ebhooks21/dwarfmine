/**
 * File for the display class.
 */
class Display
{
    /**
     * Main constructor for the display class.
     */
    constructor()
    {

    }

    /**
     * Function to setup the display.
     */
    setupDisplay()
    {
        let height = (window.innerHeight - 10);

        $("body").height(height);
    }

    /**
     * Function to render the player wallet.
     */
    renderPlayerWallet(player)
    {
        let self = this;
        let wallet = player.getWallet();

        let html = "";

        html += "<span class='col-3 float-start'>Gold Coins: " + wallet.goldCoins + "</span>";
        html += "<span class='col-3 float-start'>Dwarven Dabloons: " + wallet.dwarvenDabloons + "</span>";
        html += "<div class='clearfix'></div>";

        $("#walletarea").html(html);
    }
};