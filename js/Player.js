/**
 * File to store the Player class.
 */
class Player
{
    /**
     * Main constructor for the player class.
     */
    constructor()
    {
        let self = this;

        //Setup a wallet for the player
        self.wallet = new Wallet();
    }

    /**
     * Function to get the player's wallet.
     */
    getWallet()
    {
        let self = this;

        return self.wallet;
    }
};