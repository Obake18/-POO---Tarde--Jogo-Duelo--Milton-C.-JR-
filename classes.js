/**
 * Represents a bullet.
 * @class
 */
class Bala {
    /**
     * Create a bullet.
     * @constructor
     * @param {number} raio - The radius of the bullet.
     * @param {string} cor - The color of the bullet.
     */
    constructor(raio, cor) {
        this.raio = raio;
        this.cor = cor;
    }
}

/**
 * Represents a player in a duel.
 * @class
 */
class Player {
    /**
     * Create a player.
     * @constructor
     * @param {string} nome - The name of the player.
     * @param {number} qtdLados - The number of sides (e.g., for a polygon) the player has.
     * @param {number} raio - The radius of the player.
     * @param {string} cor - The color of the player.
     * @param {number} velocidadeMaxDoTiro - The maximum bullet speed of the player.
     * @param {number} vida - The player's life points.
     * @param {number} ataque - The player's attack power.
     * @param {Bala} bala - The bullet type the player uses.
     */
    constructor(nome, qtdLados, raio, cor, velocidadeMaxDoTiro, ataque,) {
        this.nome = nome;
        this.qtdLados = qtdLados;
        this.raio = raio;
        this.cor = cor;
        this.velocidadeMaxDoTiro = velocidadeMaxDoTiro;
        this.vida = 100;
        this.ataque = ataque;
        this.bala = new Bala(this.ataque, this.cor);
    }
}

/**
 * Manages a duel between two players.
 * @class
 */
class GerenciadorDeDuelo {
    /**
     * Create a duel manager.
     * @constructor
     * @param {Player} player1 - The first player.
     * @param {Player} player2 - The second player.
     */
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    /**
     * Get the side of Player 1 in the duel.
     * @returns {string} - The side of Player 1.
     */
    getLadoPlayer1() {
        return 'esquerda';
    }

    /**
     * Get the side of Player 2 in the duel.
     * @returns {string} - The side of Player 2.
     */
    getLadoPlayer2() {
        return 'direita';
    }
}

  