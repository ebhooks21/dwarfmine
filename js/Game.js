/**
 * File to store the game class.
 */
class Game
{
    /**
     * Main constructor for the game class.
     */
    constructor(display)
    {
        let self = this;
        self.display = display;

        //Setup a variable for the player
        self.player = new Player();
    }

    /**
     * Function to start the game.
     */
    start()
    {
        let self = this;

        //Render the main screen elements
        self.renderMainScreenElements();
    }

    /**
     * Function to render the main screen elements.
     */
    renderMainScreenElements()
    {
        let self = this;

        //Render the wallet area
        (self.display).renderPlayerWallet(self.player);
    }
};