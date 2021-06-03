scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Elsonic_no_mas_perrro.vy == 0) {
        Elsonic_no_mas_perrro.vy = -120
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    reflexion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . 7 . 7 7 7 7 7 7 . . . . . . . 
        . . 7 7 . . . 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Elsonic_no_mas_perrro, 79, 0)
})
let reflexion: Sprite = null
let Elsonic_no_mas_perrro: Sprite = null
Elsonic_no_mas_perrro = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `, SpriteKind.Player)
Elsonic_no_mas_perrro.setStayInScreen(true)
info.setLife(5)
controller.moveSprite(Elsonic_no_mas_perrro, 75, 0)
tiles.setTilemap(tilemap`level1`)
Elsonic_no_mas_perrro.ay = 350
scene.cameraFollowSprite(Elsonic_no_mas_perrro)
