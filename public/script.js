class GameScene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    //load assets
    preload() {
        this.loadAsset(
            "avatarA",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderA_00%402x.png?v=1589228669385",
            48,
            32);
        this.loadAsset(
            "avatarB",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderB_00%402x.png?v=1589228660870",
            48,
            32);
        this.loadAsset(
            "avatarC",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderC_00%402x.png?v=1589228654058",
            48,
            32);
        this.loadAsset(
            "avatarAgreen",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderAgreen.png?v=1589839188589",
            48,
            48);
        this.loadAsset(
            "avatarAcyan",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderAcyan.png?v=1589839190850",
            48,
            48);
        this.loadAsset(
            "avatarAyellow",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderAyellow.png?v=1589839197191",
            48,
            48);
        this.loadAsset(
            "avatarBgreen",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderBgreen.png?v=1589839187283",
            48,
            48);
        this.loadAsset(
            "avatarBcyan",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderBcyan.png?v=1589839193162",
            48,
            48);
        this.loadAsset(
            "avatarByellow",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderByellow.png?v=1589839195096",
            48,
            48);
        this.loadAsset(
            "avatarCgreen",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCgreen.png?v=1589839203129",
            48,
            48);
        this.loadAsset(
            "avatarCcyan",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCcyan.png?v=1589839200959",
            48,
            48);
        this.loadAsset(
            "avatarCyellow",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCyellow.png?v=1589839198988",
            48,
            48);
        this.loadAsset(
            "ship",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FShip%402x.png?v=1589228730678",
            60,
            32);
        this.loadAsset(
            "bullet",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2Fbullet.png?v=1589229887570",
            32,
            48);
        this.loadAsset(
            "explosion",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2Fexplosion57%20(2).png?v=1589491279459",
            48,
            48);
    }

    //init variables, define animations & sounds, and display assets
    create(){
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
    }

    //update the attributes of various game objects per game logic
    update(){
    }

    loadAsset(name, url, frameWidth, frameHeight) {
        this.load.spritesheet(
            name,
            url,
            {
                frameWidth: frameWidth,
                frameHeight: frameHeight
            }
        );
    }

}

const config = {
    width: 1400,
    height: 750,
    backgroundColor: "#FFFFF",
    parent: "gameContainer",
    scene: [GameScene],
    physics: {
        default: "arcade"
    }
};