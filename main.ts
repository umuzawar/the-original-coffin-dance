input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.setTempo(170)
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(415, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(415, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(370, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
})
